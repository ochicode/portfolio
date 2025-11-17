import React from 'react'
import { WindowState } from '../App'

interface TaskbarProps {
  windows: WindowState[]
  onWindowClick: (id: string) => void
  onStartClick: () => void
}

const Taskbar: React.FC<TaskbarProps> = ({ windows, onWindowClick, onStartClick }) => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const hours = date.getHours() % 12 || 12
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM'
    return `${hours}:${minutes} ${ampm}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 border-t-2 flex items-center p-0.5 gap-0.5 z-[9999]"
         style={{
           background: 'var(--color-window)',
           borderColor: 'var(--color-window-border)',
           boxShadow: 'inset 0 1px 0 var(--color-window-border)'
         }}>
      <button
        className="win95-button h-8 px-4 flex items-center gap-1 font-bold text-[11px]"
        onClick={onStartClick}
      >
        <span className="text-base leading-none">🪟</span>
        <span className="leading-none hidden sm:inline">Start</span>
      </button>
      <div className="flex-1 flex gap-0.5 overflow-x-auto overflow-y-hidden scrollbar-none">
        {windows.map(win => (
          <button
            key={win.id}
            className={`win95-button h-8 px-2 sm:px-3 text-[11px] whitespace-nowrap max-w-[120px] sm:max-w-[200px] overflow-hidden text-ellipsis flex items-center ${
              !win.isMinimized ? 'border-win95-darkest' : ''
            }`}
            onClick={() => onWindowClick(win.id)}
            style={
              !win.isMinimized
                ? {
                    borderColor: 'var(--color-button-shadow) var(--color-button-highlight) var(--color-button-highlight) var(--color-button-shadow)',
                    boxShadow: 'inset -1px -1px 0 var(--color-button-highlight)',
                    paddingTop: '2px',
                  }
                : undefined
            }
          >
            <span className="hidden sm:inline">{win.title}</span>
            <span className="sm:hidden">{win.title.split('.')[0].slice(0, 8)}</span>
          </button>
        ))}
      </div>
      <div className="hidden sm:flex items-center gap-2 px-1 h-8 border-2"
           style={{
             background: 'var(--color-window)',
             borderColor: 'var(--color-button-shadow) var(--color-window-border) var(--color-window-border) var(--color-button-shadow)'
           }}>
        <div className="text-[11px] px-2">
          {formatTime(time)}
        </div>
      </div>
    </div>
  )
}

export default Taskbar
