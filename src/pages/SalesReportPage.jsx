import React, { useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, BarChart2, Download } from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'
import { monthlySalesData, salesChannelData, topRegions } from '../data/mockData'

const CHANNEL_COLORS = ['#6C5CE7', '#00B894', '#FDCB6E', '#FD79A8']

const KpiCard = ({ label, value, sub, positive, icon, bg, delay }) => (
  <div className={`card flex items-center gap-4 animate-fade-in-up stagger-${delay} ${bg}`}>
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">{icon}</div>
    <div>
      <p className="font-display font-bold text-gray-800 text-xl">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`text-xs font-semibold mt-0.5 ${positive ? 'text-green-500' : 'text-red-400'}`}>{sub}</p>
    </div>
  </div>
)

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-3 text-xs">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: p.color }} className="font-medium">
          {p.name}: ${p.value.toLocaleString()}
        </p>
      ))}
    </div>
  )
}

const SalesReportPage = () => {
  const [period, setPeriod] = useState('Year')

  const sliced = period === 'Q1' ? monthlySalesData.slice(0,3)
    : period === 'Q2' ? monthlySalesData.slice(3,6)
    : period === 'Q3' ? monthlySalesData.slice(6,9)
    : period === 'Q4' ? monthlySalesData.slice(9,12)
    : monthlySalesData

  const totalRevenue  = sliced.reduce((s, d) => s + d.revenue, 0)
  const totalExpenses = sliced.reduce((s, d) => s + d.expenses, 0)
  const totalProfit   = sliced.reduce((s, d) => s + d.profit, 0)

  return (
    <div className="p-4 md:p-6 space-y-5">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KpiCard label="Total Revenue"  value={`$${(totalRevenue/1000).toFixed(0)}k`}  sub="+22% vs last year" positive bg="bg-blue-50"   delay={1} icon={<DollarSign size={20} className="text-blue-500" />} />
        <KpiCard label="Total Expenses" value={`$${(totalExpenses/1000).toFixed(0)}k`} sub="+11% vs last year" positive={false} bg="bg-red-50" delay={2} icon={<BarChart2 size={20} className="text-red-400" />} />
        <KpiCard label="Net Profit"     value={`$${(totalProfit/1000).toFixed(0)}k`}   sub="+34% vs last year" positive bg="bg-green-50" delay={3} icon={<TrendingUp size={20} className="text-green-500" />} />
      </div>

      {/* Main chart */}
      <div className="card animate-fade-in-up stagger-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="section-title">Revenue vs Expenses vs Profit</h2>
          <div className="flex items-center gap-2">
            {['Q1','Q2','Q3','Q4','Year'].map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${period === p ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {p}
              </button>
            ))}
            <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors ml-2">
              <Download size={12} /> Export
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={sliced} margin={{ left: -10, right: 10, top: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}k`} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(108,92,231,0.03)' }} />
            <Legend formatter={v => <span className="text-xs text-gray-500 capitalize">{v}</span>} iconType="circle" iconSize={8} />
            <Bar dataKey="revenue"  name="Revenue"  fill="#6C5CE7" radius={[4,4,0,0]} maxBarSize={18} />
            <Bar dataKey="expenses" name="Expenses" fill="#FD79A8" radius={[4,4,0,0]} maxBarSize={18} />
            <Line type="monotone" dataKey="profit" name="Profit" stroke="#00B894" strokeWidth={2.5} dot={{ fill: '#00B894', r: 3, strokeWidth: 0 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Channel breakdown */}
        <div className="card animate-fade-in-up stagger-5">
          <h2 className="section-title mb-4">Sales by Channel</h2>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="45%" height={180}>
              <PieChart>
                <Pie data={salesChannelData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {salesChannelData.map((_, i) => <Cell key={i} fill={CHANNEL_COLORS[i]} />)}
                </Pie>
                <Tooltip formatter={v => [`${v}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-3">
              {salesChannelData.map((ch, i) => (
                <div key={ch.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600 font-medium">{ch.name}</span>
                    <span className="font-bold text-gray-800">{ch.value}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${ch.value}%`, backgroundColor: CHANNEL_COLORS[i] }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top regions */}
        <div className="card animate-fade-in-up stagger-6">
          <h2 className="section-title mb-4">Revenue by Region</h2>
          <div className="space-y-3">
            {topRegions.map((r, i) => (
              <div key={r.region}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-700 font-medium">
                    <span className="text-gray-400 mr-2">#{i + 1}</span>{r.region}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">${(r.revenue / 1000).toFixed(0)}k</span>
                    <span className="font-bold text-gray-800">{r.share}%</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${r.share}%`, backgroundColor: CHANNEL_COLORS[i % CHANNEL_COLORS.length] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesReportPage
