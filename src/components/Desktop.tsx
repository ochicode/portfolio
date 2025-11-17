import React from 'react'

interface DesktopProps {
  children: React.ReactNode
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <div
      className="w-screen h-[calc(100vh-40px)] relative overflow-hidden bg-[length:2px_2px]"
      style={{
        background: 'var(--bg-value, var(--color-desktop))',
        backgroundSize: '2px 2px',
        backgroundPosition: '0 0, 0 1px, 1px -1px, -1px 0px'
      }}
    >
      {children}
    </div>
  )
}

export default Desktop
