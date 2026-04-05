import React, { useState, useMemo } from 'react'
import { Search, Filter, ArrowUpDown, ArrowUp, ArrowDown, ShoppingCart, Clock, CheckCircle, XCircle, RefreshCw } from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ordersData, orderStatusSummary } from '../data/mockData'

const statusConfig = {
  Delivered:  { color: 'text-green-600 bg-green-50',  icon: <CheckCircle size={12} /> },
  Processing: { color: 'text-yellow-600 bg-yellow-50', icon: <Clock size={12} /> },
  Shipped:    { color: 'text-blue-600 bg-blue-50',    icon: <ShoppingCart size={12} /> },
  Cancelled:  { color: 'text-red-500 bg-red-50',      icon: <XCircle size={12} /> },
  Refunded:   { color: 'text-purple-600 bg-purple-50', icon: <RefreshCw size={12} /> },
}

const StatusBadge = ({ status }) => {
  const cfg = statusConfig[status] || {}
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.color}`}>
      {cfg.icon} {status}
    </span>
  )
}

const SortIcon = ({ col, sortConfig }) =>
  sortConfig.key !== col
    ? <ArrowUpDown size={12} className="text-gray-300" />
    : sortConfig.direction === 'asc'
      ? <ArrowUp size={12} className="text-primary" />
      : <ArrowDown size={12} className="text-primary" />

const summaryCards = [
  { label: 'Total Orders', value: '12', color: 'bg-blue-50',   icon: <ShoppingCart size={18} className="text-blue-500" /> },
  { label: 'Delivered',    value: '5',  color: 'bg-green-50',  icon: <CheckCircle size={18} className="text-green-500" /> },
  { label: 'Processing',   value: '2',  color: 'bg-yellow-50', icon: <Clock size={18} className="text-yellow-500" /> },
  { label: 'Cancelled',    value: '1',  color: 'bg-red-50',    icon: <XCircle size={18} className="text-red-500" /> },
]

const OrderPage = () => {
  const [search, setSearch]       = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' })

  const statuses = ['All', 'Delivered', 'Processing', 'Shipped', 'Cancelled', 'Refunded']

  const handleSort = (key) => {
    setSortConfig(prev =>
      prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' }
    )
  }

  const filtered = useMemo(() => {
    let data = [...ordersData]
    if (search)       data = data.filter(o => o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase()) || o.product.toLowerCase().includes(search.toLowerCase()))
    if (statusFilter !== 'All') data = data.filter(o => o.status === statusFilter)
    data.sort((a, b) => {
      let av = a[sortConfig.key], bv = b[sortConfig.key]
      if (typeof av === 'string') return sortConfig.direction === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
      return sortConfig.direction === 'asc' ? av - bv : bv - av
    })
    return data
  }, [search, statusFilter, sortConfig])

  return (
    <div className="p-4 md:p-6 space-y-5">
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up stagger-1">
        {summaryCards.map(c => (
          <div key={c.label} className={`card flex items-center gap-3 ${c.color}`}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">{c.icon}</div>
            <div>
              <p className="font-display font-bold text-gray-800 text-xl">{c.value}</p>
              <p className="text-xs text-gray-500">{c.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        {/* Pie chart */}
        <div className="card animate-fade-in-up stagger-2 xl:col-span-1">
          <h2 className="section-title mb-4">Order Status</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={orderStatusSummary} dataKey="count" nameKey="status" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {orderStatusSummary.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v, n) => [v + ' orders', n]} />
              <Legend formatter={v => <span className="text-xs text-gray-500">{v}</span>} iconType="circle" iconSize={8} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="card animate-fade-in-up stagger-3 xl:col-span-3">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="text-sm border border-gray-200 rounded-xl px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
              >
                {statuses.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {[
                    { key: 'id',       label: 'Order ID' },
                    { key: 'customer', label: 'Customer' },
                    { key: 'product',  label: 'Product' },
                    { key: 'date',     label: 'Date' },
                    { key: 'amount',   label: 'Amount' },
                    { key: 'status',   label: 'Status' },
                    { key: 'payment',  label: 'Payment' },
                  ].map(col => (
                    <th key={col.key} onClick={() => handleSort(col.key)}
                      className="text-left text-xs text-gray-400 font-medium pb-3 pr-4 cursor-pointer select-none whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        {col.label} <SortIcon col={col.key} sortConfig={sortConfig} />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(order => (
                  <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                    <td className="py-3 pr-4 text-xs font-bold text-primary whitespace-nowrap">{order.id}</td>
                    <td className="py-3 pr-4 text-sm font-medium text-gray-700 whitespace-nowrap">{order.customer}</td>
                    <td className="py-3 pr-4 text-xs text-gray-500 max-w-[160px] truncate">{order.product}</td>
                    <td className="py-3 pr-4 text-xs text-gray-500 whitespace-nowrap">{order.date}</td>
                    <td className="py-3 pr-4 text-sm font-semibold text-gray-800 whitespace-nowrap">${order.amount.toFixed(2)}</td>
                    <td className="py-3 pr-4 whitespace-nowrap"><StatusBadge status={order.status} /></td>
                    <td className="py-3 text-xs text-gray-500 whitespace-nowrap">{order.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-10">No orders match your criteria.</p>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-3">Showing {filtered.length} of {ordersData.length} orders</p>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
