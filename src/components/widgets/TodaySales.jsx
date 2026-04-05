import React from 'react'
import { Download } from 'lucide-react'
import StatCard from '../widgets/StatCard'
import { todayStats } from '../../data/mockData'

const TodaySales = () => {
  return (
    <div className="card animate-fade-in-up stagger-1">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="section-title">Today's Sales</h2>
          <p className="text-xs text-gray-400 mt-0.5">Sales Summery</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
          <Download size={13} />
          Export
        </button>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {todayStats.map((stat, i) => (
          <StatCard key={stat.id} {...stat} delay={i + 1} />
        ))}
      </div>
    </div>
  )
}

export default TodaySales
