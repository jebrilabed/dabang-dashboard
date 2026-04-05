import React, { useState } from 'react'
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
import useActiveNav     from './hooks/useActiveNav'

const App = () => {
  const { activeNav, handleNavChange } = useActiveNav('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavSelect = (id) => {
    handleNavChange(id)
    setSidebarOpen(false)
  }

  const renderPage = () => {
    switch (activeNav) {
      case 'dashboard':    return <DashboardPage />
      case 'leaderboard':  return <LeaderboardPage />
      case 'order':        return <OrderPage />
      case 'products':     return <ProductsPage />
      case 'sales-report': return <SalesReportPage />
      case 'messages':     return <MessagesPage />
      case 'settings':     return <SettingsPage />
      case 'sign-out':     return <SignOutPage onNavigate={handleNavSelect} />
      default:             return <DashboardPage />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        activeNav={activeNav}
        onNavChange={handleNavSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          onMenuToggle={() => setSidebarOpen(prev => !prev)}
          isSidebarOpen={sidebarOpen}
        />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
