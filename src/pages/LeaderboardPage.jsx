import React, { useState } from 'react'
import { Trophy, TrendingUp, Star, Medal } from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { leaderboardData, leaderboardWeeklyData } from '../data/mockData'

const avatarColors = [
  'bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-orange-400',
  'bg-pink-400', 'bg-teal-400', 'bg-yellow-400', 'bg-red-400',
  'bg-indigo-400', 'bg-cyan-400',
]

const BadgeIcon = ({ badge }) => {
  if (!badge) return null
  const styles = {
    gold:   'text-yellow-500 bg-yellow-50',
    silver: 'text-gray-400 bg-gray-100',
    bronze: 'text-orange-400 bg-orange-50',
  }
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${styles[badge]}`}>
      <Trophy size={13} />
    </span>
  )
}

const TopPodium = ({ data }) => {
  const [first, second, third] = data
  return (
    <div className="card mb-5 animate-fade-in-up stagger-1">
      <h2 className="section-title mb-6">Top Performers</h2>
      <div className="flex items-end justify-center gap-4">
        {/* 2nd */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-14 h-14 rounded-2xl ${avatarColors[1]} flex items-center justify-center text-white font-bold text-lg shadow`}>
            {second.avatar}
          </div>
          <p className="text-sm font-semibold text-gray-700 text-center max-w-[90px] truncate">{second.name}</p>
          <p className="text-xs text-gray-400">${(second.sales / 1000).toFixed(1)}k</p>
          <div className="w-20 h-20 bg-gray-100 rounded-t-xl flex items-end justify-center pb-2">
            <span className="text-2xl font-display font-black text-gray-300">2</span>
          </div>
        </div>
        {/* 1st */}
        <div className="flex flex-col items-center gap-2">
          <Trophy size={20} className="text-yellow-500" />
          <div className={`w-16 h-16 rounded-2xl ${avatarColors[0]} flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-yellow-200`}>
            {first.avatar}
          </div>
          <p className="text-sm font-bold text-gray-800 text-center max-w-[100px] truncate">{first.name}</p>
          <p className="text-xs text-primary font-semibold">${(first.sales / 1000).toFixed(1)}k</p>
          <div className="w-24 h-28 bg-primary rounded-t-xl flex items-end justify-center pb-2">
            <span className="text-3xl font-display font-black text-white/40">1</span>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-14 h-14 rounded-2xl ${avatarColors[2]} flex items-center justify-center text-white font-bold text-lg shadow`}>
            {third.avatar}
          </div>
          <p className="text-sm font-semibold text-gray-700 text-center max-w-[90px] truncate">{third.name}</p>
          <p className="text-xs text-gray-400">${(third.sales / 1000).toFixed(1)}k</p>
          <div className="w-20 h-14 bg-orange-100 rounded-t-xl flex items-end justify-center pb-2">
            <span className="text-2xl font-display font-black text-orange-200">3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const LeaderboardPage = () => {
  const [filter, setFilter] = useState('')

  const filtered = leaderboardData.filter(
    (r) =>
      r.name.toLowerCase().includes(filter.toLowerCase()) ||
      r.region.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="p-4 md:p-6 space-y-5">
      {/* Header stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up stagger-1">
        {[
          { label: 'Total Reps',    value: '10',    icon: <Medal size={18} className="text-purple-500" />, bg: 'bg-purple-50' },
          { label: 'Total Revenue', value: '$853k', icon: <TrendingUp size={18} className="text-green-500" />, bg: 'bg-green-50' },
          { label: 'Avg Rating',    value: '4.6',   icon: <Star size={18} className="text-yellow-500" />, bg: 'bg-yellow-50' },
          { label: 'Top Region',    value: 'N. America', icon: <Trophy size={18} className="text-blue-500" />, bg: 'bg-blue-50' },
        ].map((s) => (
          <div key={s.label} className={`card flex items-center gap-3 ${s.bg}`}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">{s.icon}</div>
            <div>
              <p className="font-display font-bold text-gray-800 text-lg">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Podium */}
        <div className="xl:col-span-1">
          <TopPodium data={leaderboardData} />

          {/* Trend chart */}
          <div className="card animate-fade-in-up stagger-3">
            <h2 className="section-title mb-4">Weekly Sales Trend</h2>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={leaderboardWeeklyData} margin={{ left: -20, right: 5, top: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F1F1" vertical={false} />
                <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
                <Tooltip formatter={v => [`$${v.toLocaleString()}`, '']} />
                <Legend formatter={v => <span className="text-xs text-gray-500 capitalize">{v}</span>} iconType="circle" iconSize={8} />
                <Line type="monotone" dataKey="sophia" stroke="#6C5CE7" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="liam"   stroke="#0984E3" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="aisha"  stroke="#00B894" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Full leaderboard table */}
        <div className="xl:col-span-2 card animate-fade-in-up stagger-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">All Rankings</h2>
            <input
              type="text"
              placeholder="Filter by name or region..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 w-48 text-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['Rank', 'Rep', 'Region', 'Sales', 'Orders', 'Rating', 'Growth'].map(h => (
                    <th key={h} className="text-left text-xs text-gray-400 font-medium pb-3 pr-4 last:pr-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((rep, i) => (
                  <tr key={rep.rank} className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-gray-400">#{rep.rank}</span>
                        <BadgeIcon badge={rep.badge} />
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold`}>
                          {rep.avatar}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{rep.name}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-xs text-gray-500 whitespace-nowrap">{rep.region}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-sm font-semibold text-gray-800">${rep.sales.toLocaleString()}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-sm text-gray-600">{rep.orders}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-gray-600">{rep.rating}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-full">{rep.growth}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardPage
