import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react'

const Navbar = ({ onMenuToggle, isSidebarOpen }) => {
  const [search, setSearch] = useState('')
  const location = useLocation()
  
  const path = location.pathname.substring(1) || 'dashboard'
  const title = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 md:px-6 py-3.5 flex items-center justify-between gap-4 shadow-sm">
      {/* Left: Menu toggle (mobile) + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-600"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h1 className="font-display text-xl font-bold text-gray-900 hidden sm:block">
          {title}
        </h1>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md">
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Right: Lang + Notifications + Profile */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Language */}
        <button className="hidden md:flex items-center gap-1.5 px-2.5 py-2 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-600 font-medium">
          <span className="text-base">🇺🇸</span>
          <span className="hidden lg:block">Eng (US)</span>
          <ChevronDown size={14} />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors text-gray-600">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 pl-1">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow">
            AD
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold text-gray-800 leading-tight">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
