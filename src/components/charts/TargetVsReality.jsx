import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { targetData } from '../../data/mockData'
import { Globe, Smartphone } from 'lucide-react'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color }} className="font-medium">
            {p.name}: {p.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const TargetVsReality = () => {
  return (
    <div className="card animate-fade-in-up stagger-5">
      <h2 className="section-title mb-4">Target vs Reality</h2>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={targetData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 9, fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 9, fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(108,92,231,0.04)' }} />
          <Bar dataKey="reality" name="Reality" fill="#00B894" radius={[4, 4, 0, 0]} maxBarSize={14} />
          <Bar dataKey="target" name="Target" fill="#FDCB6E" radius={[4, 4, 0, 0]} maxBarSize={14} />
        </BarChart>
      </ResponsiveContainer>

      {/* Legend entries */}
      <div className="mt-3 space-y-2 border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
              <Globe size={13} className="text-green-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">Reality Sales</p>
              <p className="text-xs text-gray-400">Global</p>
            </div>
          </div>
          <span className="text-xs font-bold text-gray-800">8,823</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Smartphone size={13} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">Target Sales</p>
              <p className="text-xs text-gray-400">Commercial</p>
            </div>
          </div>
          <span className="text-xs font-bold text-yellow-500">12,122</span>
        </div>
      </div>
    </div>
  )
}

export default TargetVsReality
