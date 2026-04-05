import { useState } from 'react'

const useActiveNav = (defaultNav = 'dashboard') => {
  const [activeNav, setActiveNav] = useState(defaultNav)

  const handleNavChange = (id) => {
    setActiveNav(id)
  }

  return { activeNav, handleNavChange }
}

export default useActiveNav
