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
import { revenueData } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color }} className="font-medium">
            {p.name}: ${(p.value / 1000).toFixed(0)}k
          </p>
        ))}
      </div>
    )
  }
  return null
}

const TotalRevenue = () => {
  return (
    <div className="card animate-fade-in-up stagger-3">
      <h2 className="section-title mb-4">Total Revenue</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" vertical={false} />
          <XAxis
            dataKey="day"
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
          <Bar dataKey="online" name="Online Sales" fill="#0984E3" radius={[4, 4, 0, 0]} maxBarSize={16} />
          <Bar dataKey="offline" name="Offline Sales" fill="#00B894" radius={[4, 4, 0, 0]} maxBarSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TotalRevenue
