import React from 'react'
import './Desktop.css'

interface DesktopProps {
  children: React.ReactNode
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <div className="desktop">
      {children}
    </div>
  )
}

export default Desktop
