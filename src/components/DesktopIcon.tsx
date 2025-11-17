import React, { useState } from 'react'

interface DesktopIconProps {
  icon: string
  label: string
  onDoubleClick: () => void
  position: { x: number; y: number }
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onDoubleClick, position }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(true)
  }

  const handleDoubleClick = () => {
    onDoubleClick()
    setIsSelected(false)
  }

  return (
    <div
      className={`absolute w-20 flex flex-col items-center gap-1 p-1 cursor-pointer select-none ${
        isSelected ? 'bg-win95-active/30 outline-1 outline-dashed outline-white -outline-offset-1' : ''
      }`}
      style={{ left: position.x, top: position.y }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="text-[40px] leading-none drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">
        {icon}
      </div>
      <div
        className="text-white text-[11px] text-center break-words max-w-full hover:underline"
        style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default DesktopIcon
