import React, { useState, useMemo } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { topProducts } from '../../data/mockData'

const SortIcon = ({ column, sortConfig }) => {
  if (sortConfig.key !== column) return <ArrowUpDown size={12} className="text-gray-300" />
  return sortConfig.direction === 'asc'
    ? <ArrowUp size={12} className="text-primary" />
    : <ArrowDown size={12} className="text-primary" />
}

const PopularityBar = ({ value, color }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  </div>
)

const SalesBadge = ({ value, color }) => (
  <span
    className="badge text-white text-xs"
    style={{ backgroundColor: color }}
  >
    {value}%
  </span>
)

const TopProducts = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [filter, setFilter] = useState('')

  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' }
    )
  }

  const sorted = useMemo(() => {
    let data = [...topProducts]
    if (filter) {
      data = data.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    }
    if (sortConfig.key) {
      data.sort((a, b) => {
        const aVal = a[sortConfig.key]
        const bVal = b[sortConfig.key]
        if (typeof aVal === 'string') {
          return sortConfig.direction === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal)
        }
        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal
      })
    }
    return data
  }, [sortConfig, filter])

  return (
    <div className="card animate-fade-in-up stagger-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title">Top Products</h2>
        <input
          type="text"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/30 w-32 text-gray-600 placeholder-gray-400"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs text-gray-400 font-medium pb-2 pr-3 w-8">#</th>
              <th
                className="text-left text-xs text-gray-400 font-medium pb-2 pr-3 cursor-pointer select-none"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1">
                  Name <SortIcon column="name" sortConfig={sortConfig} />
                </div>
              </th>
              <th
                className="text-left text-xs text-gray-400 font-medium pb-2 pr-3 cursor-pointer select-none"
                onClick={() => handleSort('popularity')}
              >
                <div className="flex items-center gap-1">
                  Popularity <SortIcon column="popularity" sortConfig={sortConfig} />
                </div>
              </th>
              <th
                className="text-right text-xs text-gray-400 font-medium pb-2 cursor-pointer select-none"
                onClick={() => handleSort('sales')}
              >
                <div className="flex items-center justify-end gap-1">
                  Sales <SortIcon column="sales" sortConfig={sortConfig} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((product) => (
              <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="py-3 pr-3 text-xs text-gray-400 font-medium">{product.id}</td>
                <td className="py-3 pr-3">
                  <span className="text-xs font-medium text-gray-700">{product.name}</span>
                </td>
                <td className="py-3 pr-3 w-40">
                  <PopularityBar value={product.popularity} color={product.color} />
                </td>
                <td className="py-3 text-right">
                  <SalesBadge value={product.sales} color={product.color} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {sorted.length === 0 && (
          <p className="text-center text-xs text-gray-400 py-6">No products match your filter.</p>
        )}
      </div>
    </div>
  )
}

export default TopProducts
