import React, { useState } from 'react'
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable'
import './Window.css'

interface WindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  onMinimize: () => void
  onFocus: () => void
  zIndex: number
  defaultPosition?: { x: number; y: number }
  onPositionChange?: (position: { x: number; y: number }) => void
}

const Window: React.FC<WindowProps> = ({
  title,
  children,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  defaultPosition = { x: 100, y: 100 },
  onPositionChange
}) => {
  const [position, setPosition] = useState(defaultPosition)

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    const newPos = { x: data.x, y: data.y }
    setPosition(newPos)
    onPositionChange?.(newPos)
  }

  return (
    <Draggable
      handle=".window-title-bar"
      position={position}
      onDrag={handleDrag}
      bounds="parent"
    >
      <div
        className="window"
        style={{ zIndex }}
        onMouseDown={onFocus}
      >
        <div className="window-title-bar">
          <span className="window-title">{title}</span>
          <div className="window-controls">
            <button className="window-button" onClick={onMinimize} aria-label="Minimize">
              <span>_</span>
            </button>
            <button className="window-button" disabled aria-label="Maximize">
              <span>□</span>
            </button>
            <button className="window-button" onClick={onClose} aria-label="Close">
              <span>✕</span>
            </button>
          </div>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  )
}

export default Window
