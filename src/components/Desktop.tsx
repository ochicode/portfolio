import React from 'react'

interface DesktopProps {
  children: React.ReactNode
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <div className="w-screen h-[calc(100vh-40px)] bg-win95-desktop relative overflow-hidden bg-[length:2px_2px]"
         style={{
           backgroundImage: `
             linear-gradient(45deg, #008080 25%, transparent 25%),
             linear-gradient(-45deg, #008080 25%, transparent 25%),
             linear-gradient(45deg, transparent 75%, #008080 75%),
             linear-gradient(-45deg, transparent 75%, #008080 75%)
           `,
           backgroundPosition: '0 0, 0 1px, 1px -1px, -1px 0px'
         }}>
      {children}
    </div>
  )
}

export default Desktop
