import React from 'react'
import { WindowState } from '../App'

interface MobileMenuProps {
  windows: WindowState[]
  onItemClick: (id: string) => void
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ windows, onItemClick, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 bg-black/20 z-[9998]"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="md:hidden fixed bottom-10 left-0 right-0 z-[9999] p-2">
        <div className="win95-window max-w-md mx-auto">
          <div className="p-3">
            <h2 className="text-sm font-bold mb-3 pb-2 border-b-2 border-win95-dark">
              Start Menu
            </h2>
            <div className="flex flex-col gap-1">
              {windows.map(win => (
                <button
                  key={win.id}
                  onClick={() => onItemClick(win.id)}
                  className="win95-button p-3 flex items-center gap-3 text-left"
                >
                  <span className="text-2xl">{win.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-xs">{win.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
