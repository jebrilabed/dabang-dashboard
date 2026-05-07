import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import DashboardPage    from './pages/DashboardPage'
import LeaderboardPage  from './pages/LeaderboardPage'
import OrderPage        from './pages/OrderPage'
import ProductsPage     from './pages/ProductsPage'
import SalesReportPage  from './pages/SalesReportPage'
import MessagesPage     from './pages/MessagesPage'
import SettingsPage     from './pages/SettingsPage'
import SignOutPage      from './pages/SignOutPage'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('app_theme') || 'light'
    const accent = localStorage.getItem('app_accent') || '#6C5CE7'
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16)
      return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`
    }
    document.documentElement.style.setProperty('--color-primary-rgb', hexToRgb(accent))
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          onMenuToggle={() => setSidebarOpen(prev => !prev)}
          isSidebarOpen={sidebarOpen}
        />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/sales-report" element={<SalesReportPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/sign-out" element={<SignOutPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
