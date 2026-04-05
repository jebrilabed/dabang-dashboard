import React, { useState } from 'react'
import { LogOut, Zap, ArrowLeft } from 'lucide-react'

const SignOutPage = ({ onNavigate }) => {
  const [confirmed, setConfirmed] = useState(false)

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-5">
          <Zap size={36} className="text-gray-300" />
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">You've been signed out</h2>
        <p className="text-sm text-gray-400 mb-6 max-w-xs">Your session has ended. Sign back in to access your dashboard.</p>
        <button
          onClick={() => { setConfirmed(false); onNavigate('dashboard') }}
          className="flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={15} /> Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
      <div className="card max-w-sm w-full text-center animate-fade-in-up stagger-1">
        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <LogOut size={28} className="text-red-400" />
        </div>
        <h2 className="font-display text-xl font-bold text-gray-800 mb-2">Sign Out?</h2>
        <p className="text-sm text-gray-500 mb-6">Are you sure you want to sign out of your Dabang dashboard? Your session will end.</p>

        <div className="space-y-3">
          <button
            onClick={() => setConfirmed(true)}
            className="w-full bg-red-500 text-white font-semibold text-sm py-3 rounded-xl hover:bg-red-600 transition-colors"
          >
            Yes, Sign Me Out
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-gray-100 text-gray-600 font-semibold text-sm py-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignOutPage
