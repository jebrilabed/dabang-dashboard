import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { volumeData } from '../../data/mockData'

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

const VolumeVsService = () => {
  return (
    <div className="card animate-fade-in-up stagger-8">
      <h2 className="section-title mb-4">Volume vs Service Level</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={volumeData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(108,92,231,0.04)' }} />
          <Legend
            formatter={(value) => (
              <span className="text-xs text-gray-500 capitalize">{value}</span>
            )}
            iconType="circle"
            iconSize={8}
          />
          <Bar dataKey="volume" name="Volume" fill="#0984E3" radius={[4, 4, 0, 0]} maxBarSize={16} />
          <Bar dataKey="service" name="Services" fill="#00B894" radius={[4, 4, 0, 0]} maxBarSize={16} />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex gap-8 border-t border-gray-100 pt-3 mt-1">
        <div>
          <p className="text-xs text-gray-400">Volume</p>
          <p className="text-base font-display font-bold text-gray-800">1,135</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Services</p>
          <p className="text-base font-display font-bold text-green-500">635</p>
        </div>
      </div>
    </div>
  )
}

export default VolumeVsService
