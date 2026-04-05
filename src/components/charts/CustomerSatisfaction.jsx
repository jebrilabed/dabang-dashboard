import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { satisfactionData } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-3 text-xs">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color }} className="font-medium">
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const CustomerSatisfaction = () => {
  return (
    <div className="card animate-fade-in-up stagger-4">
      <h2 className="section-title mb-4">Customer Satisfaction</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={satisfactionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="lastMonthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#74B9FF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#74B9FF" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="thisMonthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00B894" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#00B894" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: '#9CA3AF' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="lastMonth"
            name="Last Month"
            stroke="#74B9FF"
            strokeWidth={2}
            fill="url(#lastMonthGrad)"
            dot={{ fill: '#74B9FF', strokeWidth: 0, r: 4 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            name="This Month"
            stroke="#00B894"
            strokeWidth={2.5}
            fill="url(#thisMonthGrad)"
            dot={{ fill: '#00B894', strokeWidth: 0, r: 4 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Legend
            formatter={(value) => (
              <span className="text-xs text-gray-500">{value}</span>
            )}
            iconType="circle"
            iconSize={8}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex gap-6 mt-2 border-t border-gray-100 pt-3">
        <div>
          <p className="text-xs text-gray-400">Last Month</p>
          <p className="text-base font-display font-bold text-gray-800">$3,004</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">This Month</p>
          <p className="text-base font-display font-bold text-primary">$4,504</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerSatisfaction
