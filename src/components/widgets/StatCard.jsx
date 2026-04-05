import React from 'react'
import { DollarSign, ShoppingCart, CheckCircle, Users } from 'lucide-react'

const iconComponents = {
  dollar: DollarSign,
  cart: ShoppingCart,
  check: CheckCircle,
  users: Users,
}

const StatCard = ({ label, value, change, positive, color, iconBg, icon, delay }) => {
  const Icon = iconComponents[icon]

  return (
    <div
      className={`stat-card ${color} animate-fade-in-up stagger-${delay}`}
    >
      <div className={`${iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-display font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
        <p className={`text-xs font-medium mt-1 ${positive ? 'text-green-500' : 'text-red-400'}`}>
          {change}
        </p>
      </div>
    </div>
  )
}

export default StatCard
