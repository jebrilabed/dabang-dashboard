import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BarChart2,
  ShoppingCart,
  ShoppingBag,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  Zap,
} from 'lucide-react'

const iconMap = {
  'layout': LayoutDashboard,
  'bar-chart': BarChart2,
  'shopping-cart': ShoppingCart,
  'shopping-bag': ShoppingBag,
  'trending-up': TrendingUp,
  'message-square': MessageSquare,
  'settings': Settings,
  'log-out': LogOut,
}

const navLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: 'layout' },
  { id: 'leaderboard', label: 'Leaderboard', icon: 'bar-chart' },
  { id: 'order', label: 'Order', icon: 'shopping-cart' },
  { id: 'products', label: 'Products', icon: 'shopping-bag' },
  { id: 'sales-report', label: 'Sales Report', icon: 'trending-up' },
  { id: 'messages', label: 'Messages', icon: 'message-square' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'sign-out', label: 'Sign Out', icon: 'log-out' },
]

const NavItem = ({ link, onClick }) => {
  const Icon = iconMap[link.icon]
  return (
    <NavLink
      to={`/${link.id}`}
      onClick={onClick}
      className={({ isActive }) => `nav-item w-full text-left ${isActive ? 'active' : ''}`}
    >
      <Icon size={18} />
      <span>{link.label}</span>
    </NavLink>
  )
}

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-56 bg-white shadow-xl z-30
          flex flex-col transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 lg:shadow-none lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-gray-100">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md">
            <Zap size={18} className="text-white" fill="white" />
          </div>
          <span className="font-display text-xl font-bold text-gray-900 tracking-tight">
            Dabang
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          {navLinks.map((link) => (
            <NavItem
              key={link.id}
              link={link}
              onClick={onClose}
            />
          ))}
        </nav>

        {/* Pro Upgrade Card */}
        <div className="mx-3 mb-5 rounded-2xl bg-gradient-to-br from-primary to-purple-700 p-4 text-white text-center shadow-lg">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <p className="font-display font-bold text-sm mb-0.5">Dabang Pro</p>
          <p className="text-xs text-white/70 mb-3 leading-tight">
            Get access to all features on telumbas
          </p>
          <button className="w-full bg-white text-primary text-xs font-bold py-2 rounded-xl hover:bg-white/90 transition-colors">
            Get Pro
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
