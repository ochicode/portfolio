import React from 'react'
import './Taskbar.css'
import { WindowState } from '../App'

interface TaskbarProps {
  windows: WindowState[]
  onWindowClick: (id: string) => void
}

const Taskbar: React.FC<TaskbarProps> = ({ windows, onWindowClick }) => {
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
    <div className="taskbar">
      <button className="start-button">
        <span className="start-icon">🪟</span>
        <span className="start-text">Start</span>
      </button>
      <div className="taskbar-windows">
        {windows.map(win => (
          <button
            key={win.id}
            className={`taskbar-window ${win.isMinimized ? '' : 'active'}`}
            onClick={() => onWindowClick(win.id)}
          >
            {win.title}
          </button>
        ))}
      </div>
      <div className="taskbar-tray">
        <div className="taskbar-clock">
          {formatTime(time)}
        </div>
      </div>
    </div>
  )
}

export default Taskbar
