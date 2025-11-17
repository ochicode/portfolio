import { useState } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import DesktopIcon from './components/DesktopIcon'
import About from './components/windows/About'
import Projects from './components/windows/Projects'
import Skills from './components/windows/Skills'
import Contact from './components/windows/Contact'
import './App.css'

export interface WindowState {
  id: string
  title: string
  component: React.ComponentType
  isOpen: boolean
  isMinimized: boolean
  zIndex: number
  position: { x: number; y: number }
}

function App() {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'about',
      title: 'About.exe',
      component: About,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 100, y: 80 }
    },
    {
      id: 'projects',
      title: 'Projects',
      component: Projects,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 150, y: 120 }
    },
    {
      id: 'skills',
      title: 'Skills.sys',
      component: Skills,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 200, y: 160 }
    },
    {
      id: 'contact',
      title: 'Contact.app',
      component: Contact,
      isOpen: false,
      isMinimized: false,
      zIndex: 1,
      position: { x: 250, y: 200 }
    }
  ])

  const [highestZIndex, setHighestZIndex] = useState(1)

  const openWindow = (id: string) => {
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        const newZIndex = highestZIndex + 1
        setHighestZIndex(newZIndex)
        return { ...win, isOpen: true, isMinimized: false, zIndex: newZIndex }
      }
      return win
    }))
  }

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(win =>
      win.id === id ? { ...win, isOpen: false } : win
    ))
  }

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(win =>
      win.id === id ? { ...win, isMinimized: true } : win
    ))
  }

  const restoreWindow = (id: string) => {
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        const newZIndex = highestZIndex + 1
        setHighestZIndex(newZIndex)
        return { ...win, isMinimized: false, zIndex: newZIndex }
      }
      return win
    }))
  }

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(win => {
      if (win.id === id && win.zIndex !== highestZIndex) {
        const newZIndex = highestZIndex + 1
        setHighestZIndex(newZIndex)
        return { ...win, zIndex: newZIndex }
      }
      return win
    }))
  }

  const updatePosition = (id: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(win =>
      win.id === id ? { ...win, position } : win
    ))
  }

  return (
    <>
      <Desktop>
        {/* Desktop Icons */}
        <DesktopIcon
          icon="💻"
          label="About.exe"
          onDoubleClick={() => openWindow('about')}
          position={{ x: 20, y: 20 }}
        />
        <DesktopIcon
          icon="📁"
          label="Projects"
          onDoubleClick={() => openWindow('projects')}
          position={{ x: 20, y: 120 }}
        />
        <DesktopIcon
          icon="⚙️"
          label="Skills.sys"
          onDoubleClick={() => openWindow('skills')}
          position={{ x: 20, y: 220 }}
        />
        <DesktopIcon
          icon="📧"
          label="Contact.app"
          onDoubleClick={() => openWindow('contact')}
          position={{ x: 20, y: 320 }}
        />

        {/* Windows */}
        {windows.map(win => (
          win.isOpen && !win.isMinimized && (
            <Window
              key={win.id}
              title={win.title}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
              onFocus={() => focusWindow(win.id)}
              zIndex={win.zIndex}
              defaultPosition={win.position}
              onPositionChange={(pos) => updatePosition(win.id, pos)}
            >
              <win.component />
            </Window>
          )
        ))}
      </Desktop>

      <Taskbar
        windows={windows.filter(w => w.isOpen)}
        onWindowClick={(id) => {
          const win = windows.find(w => w.id === id)
          if (win?.isMinimized) {
            restoreWindow(id)
          } else {
            focusWindow(id)
          }
        }}
      />
    </>
  )
}

export default App
