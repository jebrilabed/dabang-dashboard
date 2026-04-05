import React from 'react'
import { Construction } from 'lucide-react'

const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center p-6">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
        <Construction size={28} className="text-primary" />
      </div>
      <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-400 max-w-xs">
        This section is under construction. Switch back to Dashboard to explore the full UI.
      </p>
    </div>
  )
}

export default PlaceholderPage
