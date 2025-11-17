import React, { useState, useEffect } from 'react'
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable'

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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    const newPos = { x: data.x, y: data.y }
    setPosition(newPos)
    onPositionChange?.(newPos)
  }

  const windowContent = (
    <div
      className={`win95-window ${
        isMobile
          ? 'fixed inset-0 m-0 max-w-full'
          : 'absolute min-w-[300px] max-w-[90vw]'
      }`}
      style={{ zIndex }}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
    >
      <div
        className={`window-title-bar px-1 py-0.5 flex justify-between items-center select-none h-6 ${
          isMobile ? 'cursor-default' : 'cursor-move'
        }`}
        style={{
          background: 'var(--color-title-bar)',
          color: 'var(--color-title-bar-text)'
        }}
      >
        <span className="font-bold text-[11px] whitespace-nowrap overflow-hidden text-ellipsis flex-1 tracking-wide">
          {title}
        </span>
        <div className="flex gap-0.5">
          <button
            className="win95-button w-[18px] h-[18px] text-[10px] font-bold leading-none p-0 md:flex hidden items-center justify-center"
            onClick={onMinimize}
            aria-label="Minimize"
          >
            <span className="block -mt-0.5">_</span>
          </button>
          <button
            className="win95-button w-[18px] h-[18px] text-[10px] font-bold leading-none p-0 hidden"
            disabled
            aria-label="Maximize"
          >
            <span className="block -mt-0.5">□</span>
          </button>
          <button
            className="win95-button w-[18px] h-[18px] text-[10px] font-bold leading-none p-0"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="block -mt-0.5">✕</span>
          </button>
        </div>
      </div>
      <div className={`p-2 overflow-auto select-text ${
        isMobile
          ? 'h-[calc(100vh-64px)]'
          : 'max-h-[70vh] min-h-[200px]'
      }`}
      style={{ background: 'var(--color-window)' }}>
        {children}
      </div>
    </div>
  )

  if (isMobile) {
    return windowContent
  }

  return (
    <Draggable
      handle=".window-title-bar"
      position={position}
      onDrag={handleDrag}
      bounds="parent"
    >
      {windowContent}
    </Draggable>
  )
}

export default Window
