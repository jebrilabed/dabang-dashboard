import React, { useState, useRef, useEffect } from 'react'
import { Send, Search, MoreVertical, Phone, Video, Smile } from 'lucide-react'
import { messagesData } from '../data/mockData'

const avatarColors = [
  'bg-purple-400', 'bg-blue-400', 'bg-green-400',
  'bg-orange-400', 'bg-pink-400',
]

const Avatar = ({ initials, color, size = 'md', online }) => {
  const sz = size === 'sm' ? 'w-9 h-9 text-xs' : 'w-11 h-11 text-sm'
  return (
    <div className="relative flex-shrink-0">
      <div className={`${sz} rounded-xl ${color} flex items-center justify-center text-white font-bold`}>
        {initials}
      </div>
      {online !== undefined && (
        <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${online ? 'bg-green-400' : 'bg-gray-300'}`} />
      )}
    </div>
  )
}

const ConversationItem = ({ convo, active, onClick, colorIndex }) => (
  <button
    onClick={() => onClick(convo.id)}
    className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-primary/10 border border-primary/20' : 'hover:bg-gray-50'}`}
  >
    <Avatar initials={convo.avatar} color={avatarColors[colorIndex % avatarColors.length]} size="sm" online={convo.online} />
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-center">
        <span className={`text-sm font-semibold truncate ${active ? 'text-primary' : 'text-gray-800'}`}>{convo.name}</span>
        <span className="text-xs text-gray-400 flex-shrink-0 ml-1">{convo.time}</span>
      </div>
      <p className="text-xs text-gray-500 truncate mt-0.5">{convo.preview}</p>
    </div>
    {convo.unread > 0 && (
      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        {convo.unread}
      </span>
    )}
  </button>
)

const Message = ({ msg }) => {
  const isMe = msg.from === 'me'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
        isMe ? 'bg-primary text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'
      }`}>
        {msg.text}
        <p className={`text-xs mt-1 ${isMe ? 'text-white/60' : 'text-gray-400'}`}>{msg.time}</p>
      </div>
    </div>
  )
}

const MessagesPage = () => {
  const [activeId, setActiveId]   = useState(1)
  const [input, setInput]         = useState('')
  const [convos, setConvos]       = useState(messagesData)
  const [search, setSearch]       = useState('')
  const bottomRef = useRef(null)

  const active = convos.find(c => c.id === activeId)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [active?.messages])

  const sendMessage = () => {
    if (!input.trim()) return
    setConvos(prev => prev.map(c =>
      c.id === activeId
        ? { ...c, messages: [...c.messages, { from: 'me', text: input.trim(), time: 'Now' }], preview: input.trim(), unread: 0 }
        : c
    ))
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const handleSelect = (id) => {
    setActiveId(id)
    setConvos(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c))
  }

  const filteredConvos = convos.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="p-4 md:p-6 h-full">
      <div className="card h-[calc(100vh-120px)] flex overflow-hidden p-0 animate-fade-in-up stagger-1">

        {/* Left: conversation list */}
        <div className="w-72 border-r border-gray-100 flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-gray-100">
            <h2 className="section-title mb-3">Messages</h2>
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder-gray-400 text-gray-700"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {filteredConvos.map((c, i) => (
              <ConversationItem
                key={c.id}
                convo={c}
                active={activeId === c.id}
                onClick={handleSelect}
                colorIndex={i}
              />
            ))}
          </div>
        </div>

        {/* Right: chat window */}
        {active ? (
          <div className="flex-1 flex flex-col min-w-0">
            {/* Chat header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Avatar
                  initials={active.avatar}
                  color={avatarColors[convos.findIndex(c => c.id === activeId) % avatarColors.length]}
                  online={active.online}
                />
                <div>
                  <p className="text-sm font-bold text-gray-800">{active.name}</p>
                  <p className="text-xs text-gray-400">{active.online ? 'Online' : 'Offline'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"><Phone size={16} /></button>
                <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"><Video size={16} /></button>
                <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"><MoreVertical size={16} /></button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {active.messages.map((msg, i) => <Message key={i} msg={msg} />)}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-5 py-4 border-t border-gray-100">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/40 transition-all">
                <button className="text-gray-400 hover:text-gray-600 transition-colors"><Smile size={18} /></button>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Press Enter to send</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <p className="text-sm">Select a conversation</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagesPage
