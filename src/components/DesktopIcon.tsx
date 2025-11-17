import React, { useState } from 'react'
import './DesktopIcon.css'

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
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      style={{ left: position.x, top: position.y }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="desktop-icon-image">{icon}</div>
      <div className="desktop-icon-label">{label}</div>
    </div>
  )
}

export default DesktopIcon
