import React, { useState } from 'react'
import { User, Bell, Shield, Palette, Save, Eye, EyeOff, Camera } from 'lucide-react'

const tabs = [
  { id: 'profile',       label: 'Profile',       icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security',      label: 'Security',      icon: Shield },
  { id: 'appearance',    label: 'Appearance',    icon: Palette },
]

const Toggle = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${checked ? 'bg-primary' : 'bg-gray-200'}`}
  >
    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
  </button>
)

const Field = ({ label, hint, children }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    {hint && <p className="text-xs text-gray-400 mb-1.5">{hint}</p>}
    {children}
  </div>
)

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 placeholder-gray-400 bg-white transition-all"
  />
)

const ProfileTab = () => {
  const [form, setForm] = useState({
    name: 'Admin User', email: 'admin@dabang.io', phone: '+1 555 0100',
    role: 'Administrator', bio: 'Managing the Dabang e-commerce platform.',
    language: 'English (US)', timezone: 'UTC-5 (EST)',
  })
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }))

  return (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">AD</div>
          <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow hover:bg-gray-50 transition-colors">
            <Camera size={13} className="text-gray-500" />
          </button>
        </div>
        <div>
          <p className="text-base font-bold text-gray-800">{form.name}</p>
          <p className="text-sm text-gray-500">{form.role}</p>
          <button className="text-xs text-primary font-semibold mt-1 hover:underline">Change photo</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full Name"><Input value={form.name} onChange={e => update('name', e.target.value)} /></Field>
        <Field label="Email Address"><Input type="email" value={form.email} onChange={e => update('email', e.target.value)} /></Field>
        <Field label="Phone Number"><Input value={form.phone} onChange={e => update('phone', e.target.value)} /></Field>
        <Field label="Role"><Input value={form.role} onChange={e => update('role', e.target.value)} /></Field>
        <Field label="Language">
          <select value={form.language} onChange={e => update('language', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
            {['English (US)', 'French', 'Arabic', 'Spanish', 'German'].map(l => <option key={l}>{l}</option>)}
          </select>
        </Field>
        <Field label="Timezone">
          <select value={form.timezone} onChange={e => update('timezone', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
            {['UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+1 (CET)', 'UTC+3 (AST)'].map(t => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Bio" hint="Brief description about yourself." >
          <textarea
            value={form.bio}
            onChange={e => update('bio', e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder-gray-400 bg-white resize-none col-span-2"
          />
        </Field>
      </div>
    </div>
  )
}

const NotificationsTab = () => {
  const [prefs, setPrefs] = useState({
    newOrder: true, orderDelivered: true, lowStock: true,
    newMessage: true, newReview: false, weeklyReport: true,
    pushEnabled: true, emailEnabled: true, smsEnabled: false,
  })
  const toggle = k => setPrefs(p => ({ ...p, [k]: !p[k] }))

  const groups = [
    { label: 'Channels', items: [
      { key: 'pushEnabled',  label: 'Push Notifications', desc: 'Receive in-app push alerts' },
      { key: 'emailEnabled', label: 'Email Notifications', desc: 'Get updates via email' },
      { key: 'smsEnabled',   label: 'SMS Notifications',  desc: 'Receive SMS for critical events' },
    ]},
    { label: 'Events', items: [
      { key: 'newOrder',        label: 'New Order',       desc: 'Alert when a new order is placed' },
      { key: 'orderDelivered',  label: 'Order Delivered', desc: 'Alert when an order is delivered' },
      { key: 'lowStock',        label: 'Low Stock',       desc: 'Warn when product stock is low' },
      { key: 'newMessage',      label: 'New Message',     desc: 'Alert on new customer messages' },
      { key: 'newReview',       label: 'New Review',      desc: 'Notify on product reviews' },
      { key: 'weeklyReport',    label: 'Weekly Report',   desc: 'Send weekly analytics summary' },
    ]},
  ]

  return (
    <div className="space-y-6">
      {groups.map(g => (
        <div key={g.label}>
          <h3 className="text-sm font-bold text-gray-700 mb-3 pb-2 border-b border-gray-100">{g.label}</h3>
          <div className="space-y-4">
            {g.items.map(item => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
                <Toggle checked={prefs[item.key]} onChange={() => toggle(item.key)} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const SecurityTab = () => {
  const [show, setShow] = useState({})
  const toggle = k => setShow(p => ({ ...p, [k]: !p[k] }))
  const [twoFa, setTwoFa] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-4 pb-2 border-b border-gray-100">Change Password</h3>
        <div className="space-y-4">
          {[{ key: 'current', label: 'Current Password' }, { key: 'new', label: 'New Password' }, { key: 'confirm', label: 'Confirm New Password' }].map(f => (
            <Field key={f.key} label={f.label}>
              <div className="relative">
                <input type={show[f.key] ? 'text' : 'password'} placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white" />
                <button onClick={() => toggle(f.key)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  {show[f.key] ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </Field>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-4 pb-2 border-b border-gray-100">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div>
            <p className="text-sm font-semibold text-gray-700">Enable 2FA</p>
            <p className="text-xs text-gray-400">Add an extra layer of security to your account</p>
          </div>
          <Toggle checked={twoFa} onChange={setTwoFa} />
        </div>
        {twoFa && (
          <div className="mt-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-xs font-semibold text-primary">2FA Enabled ✓</p>
            <p className="text-xs text-gray-500 mt-1">Your account is now protected with two-factor authentication.</p>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 pb-2 border-b border-gray-100">Active Sessions</h3>
        <div className="space-y-3">
          {[
            { device: 'Chrome on macOS', ip: '192.168.1.1', time: 'Current session', current: true },
            { device: 'Safari on iPhone', ip: '10.0.0.42', time: '2 hours ago', current: false },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-700">{s.device}</p>
                <p className="text-xs text-gray-400">{s.ip} · {s.time}</p>
              </div>
              {s.current
                ? <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-full">Active</span>
                : <button className="text-xs text-red-500 font-semibold hover:underline">Revoke</button>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const AppearanceTab = ({ theme, setTheme, accent, setAccent, density, setDensity }) => {
  const accents = ['#6C5CE7','#0984E3','#00B894','#FD79A8','#E17055','#FDCB6E']

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 pb-2 border-b border-gray-100">Theme</h3>
        <div className="grid grid-cols-2 gap-3">
          {['light', 'dark'].map(t => (
            <button key={t} onClick={() => setTheme(t)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${theme === t ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
              <div className={`w-full h-12 rounded-lg mb-2 ${t === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-800'}`} />
              <p className="text-sm font-semibold text-gray-700 capitalize">{t}</p>
              {theme === t && <p className="text-xs text-primary mt-0.5">Currently active</p>}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 pb-2 border-b border-gray-100">Accent Color</h3>
        <div className="flex items-center gap-3">
          {accents.map(c => (
            <button key={c} onClick={() => setAccent(c)}
              className={`w-9 h-9 rounded-xl border-2 transition-all ${accent === c ? 'border-gray-700 scale-110' : 'border-transparent hover:scale-105'}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 pb-2 border-b border-gray-100">Layout Density</h3>
        <div className="flex gap-2">
          {['compact', 'comfortable', 'spacious'].map(d => (
            <button key={d} onClick={() => setDensity(d)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${density === d ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [theme, setTheme] = useState(localStorage.getItem('app_theme') || 'light')
  const [accent, setAccent] = useState(localStorage.getItem('app_accent') || '#6C5CE7')
  const [density, setDensity] = useState('comfortable')

  const handleSave = () => {
    localStorage.setItem('app_theme', theme)
    localStorage.setItem('app_accent', accent)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16)
      return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`
    }
    document.documentElement.style.setProperty('--color-primary-rgb', hexToRgb(accent))
    alert('Settings saved and applied successfully!')
  }

  const tabContent = {
    profile: <ProfileTab />,
    notifications: <NotificationsTab />,
    security: <SecurityTab />,
    appearance: <AppearanceTab theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} density={density} setDensity={setDensity} />,
  }

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 animate-fade-in-up stagger-1">
        {/* Tab sidebar */}
        <div className="card md:col-span-1 p-3 h-fit">
          <nav className="space-y-1">
            {tabs.map(tab => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}>
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab content */}
        <div className="card md:col-span-3">
          <h2 className="section-title mb-5 pb-4 border-b border-gray-100">
            {tabs.find(t => t.id === activeTab)?.label} Settings
          </h2>
          {tabContent[activeTab]}
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3">
            <button className="px-5 py-2.5 text-sm font-semibold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
              <Save size={14} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
