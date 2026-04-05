import React, { useState, useMemo } from 'react'
import { Search, LayoutGrid, List, Star, Plus, Package } from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { productsData, productCategoryData } from '../data/mockData'

const CATEGORY_COLORS = ['#6C5CE7','#00B894','#FDCB6E','#FD79A8','#0984E3','#A29BFE','#00CEC9','#E17055']

const stockConfig = {
  'In Stock':     'text-green-600 bg-green-50',
  'Low Stock':    'text-yellow-600 bg-yellow-50',
  'Out of Stock': 'text-red-500 bg-red-50',
}

const StockBadge = ({ status }) => (
  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stockConfig[status]}`}>{status}</span>
)

const categories = ['All', ...new Set(productsData.map(p => p.category))]

const ProductCard = ({ product }) => (
  <div className="card hover:shadow-card-hover transition-shadow duration-200 flex flex-col">
    <div className="w-full h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center text-5xl mb-3">
      {product.image}
    </div>
    <div className="flex items-start justify-between mb-1">
      <p className="text-sm font-bold text-gray-800 leading-tight flex-1 pr-2">{product.name}</p>
      <StockBadge status={product.status} />
    </div>
    <p className="text-xs text-gray-400 mb-2">{product.category}</p>
    <div className="flex items-center gap-1 mb-3">
      <Star size={12} className="text-yellow-400 fill-yellow-400" />
      <span className="text-xs text-gray-500">{product.rating} · {product.sold} sold</span>
    </div>
    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
      <span className="text-base font-display font-bold text-primary">${product.price.toFixed(2)}</span>
      <span className="text-xs text-gray-400">Stock: {product.stock}</span>
    </div>
  </div>
)

const ProductRow = ({ product }) => (
  <tr className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
    <td className="py-3 pr-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{product.image}</span>
        <div>
          <p className="text-sm font-semibold text-gray-800">{product.name}</p>
          <p className="text-xs text-gray-400">{product.id}</p>
        </div>
      </div>
    </td>
    <td className="py-3 pr-4 text-xs text-gray-500">{product.category}</td>
    <td className="py-3 pr-4 text-sm font-bold text-primary">${product.price.toFixed(2)}</td>
    <td className="py-3 pr-4 text-sm text-gray-600">{product.stock}</td>
    <td className="py-3 pr-4 text-sm text-gray-600">{product.sold}</td>
    <td className="py-3 pr-4">
      <div className="flex items-center gap-1">
        <Star size={12} className="text-yellow-400 fill-yellow-400" />
        <span className="text-sm text-gray-600">{product.rating}</span>
      </div>
    </td>
    <td className="py-3"><StockBadge status={product.status} /></td>
  </tr>
)

const ProductsPage = () => {
  const [view, setView]         = useState('grid')
  const [search, setSearch]     = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return productsData.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'All' || p.category === category
      return matchSearch && matchCat
    })
  }, [search, category])

  return (
    <div className="p-4 md:p-6 space-y-5">
      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up stagger-1">
        {[
          { label: 'Total Products',  value: productsData.length,                    icon: <Package size={18} className="text-purple-500" />, bg: 'bg-purple-50' },
          { label: 'In Stock',        value: productsData.filter(p=>p.status==='In Stock').length,    icon: <Package size={18} className="text-green-500" />,  bg: 'bg-green-50' },
          { label: 'Low Stock',       value: productsData.filter(p=>p.status==='Low Stock').length,   icon: <Package size={18} className="text-yellow-500" />, bg: 'bg-yellow-50' },
          { label: 'Out of Stock',    value: productsData.filter(p=>p.status==='Out of Stock').length,icon: <Package size={18} className="text-red-500" />,    bg: 'bg-red-50' },
        ].map(c => (
          <div key={c.label} className={`card flex items-center gap-3 ${c.bg}`}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">{c.icon}</div>
            <div>
              <p className="font-display font-bold text-gray-800 text-xl">{c.value}</p>
              <p className="text-xs text-gray-500">{c.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        {/* Donut */}
        <div className="card animate-fade-in-up stagger-2 xl:col-span-1">
          <h2 className="section-title mb-4">By Category</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={productCategoryData} dataKey="value" nameKey="name" cx="50%" cy="45%" innerRadius={45} outerRadius={75} paddingAngle={3}>
                {productCategoryData.map((_, i) => <Cell key={i} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />)}
              </Pie>
              <Tooltip />
              <Legend formatter={v => <span className="text-xs text-gray-500">{v}</span>} iconType="circle" iconSize={8} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Main products area */}
        <div className="xl:col-span-3 space-y-4">
          {/* Toolbar */}
          <div className="card animate-fade-in-up stagger-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-gray-700 placeholder-gray-400"
              />
            </div>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
            >
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <div className="flex rounded-xl border border-gray-200 overflow-hidden">
              <button onClick={() => setView('grid')} className={`px-3 py-2 transition-colors ${view === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                <LayoutGrid size={16} />
              </button>
              <button onClick={() => setView('list')} className={`px-3 py-2 transition-colors ${view === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                <List size={16} />
              </button>
            </div>
            <button className="flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap">
              <Plus size={15} /> Add Product
            </button>
          </div>

          {/* Grid */}
          {view === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up stagger-3">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          {/* List */}
          {view === 'list' && (
            <div className="card animate-fade-in-up stagger-3 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['Product','Category','Price','Stock','Sold','Rating','Status'].map(h => (
                      <th key={h} className="text-left text-xs text-gray-400 font-medium pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(p => <ProductRow key={p.id} product={p} />)}
                </tbody>
              </table>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="card text-center py-12 text-gray-400 animate-fade-in-up">
              <Package size={32} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
