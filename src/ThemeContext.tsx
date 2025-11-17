import React, { createContext, useContext, useState, useEffect } from 'react'
import { Theme, themes, getRandomTheme } from './themes'

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  randomTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme && themes[savedTheme] ? themes[savedTheme] : themes.retro
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', currentTheme.id)
    applyTheme(currentTheme)
  }, [currentTheme])

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement

    // Apply CSS variables
    root.style.setProperty('--color-desktop', theme.colors.desktop)
    root.style.setProperty('--color-window', theme.colors.window)
    root.style.setProperty('--color-window-border', theme.colors.windowBorder)
    root.style.setProperty('--color-title-bar', theme.colors.titleBar)
    root.style.setProperty('--color-title-bar-text', theme.colors.titleBarText)
    root.style.setProperty('--color-text', theme.colors.text)
    root.style.setProperty('--color-button-face', theme.colors.buttonFace)
    root.style.setProperty('--color-button-highlight', theme.colors.buttonHighlight)
    root.style.setProperty('--color-button-shadow', theme.colors.buttonShadow)
    root.style.setProperty('--color-accent', theme.colors.accent)
    root.style.setProperty('--color-accent-light', theme.colors.accentLight)
    root.style.setProperty('--color-panel', theme.colors.panel)

    // Apply fonts
    root.style.setProperty('--font-primary', theme.fonts.primary)
    root.style.setProperty('--font-secondary', theme.fonts.secondary)

    // Apply background
    root.style.setProperty('--bg-type', theme.background.type)
    root.style.setProperty('--bg-value', theme.background.value)

    // Apply taskbar settings
    root.style.setProperty('--taskbar-position', theme.taskbar.position)
    root.style.setProperty('--taskbar-transparent', theme.taskbar.transparent ? '1' : '0')
    root.style.setProperty('--taskbar-blur', theme.taskbar.blur ? 'blur(10px)' : 'none')

    // Apply cursor
    root.style.cursor = theme.cursor
  }

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      setCurrentTheme(themes[themeId])
    }
  }

  const randomTheme = () => {
    const newTheme = getRandomTheme(currentTheme.id)
    setCurrentTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, randomTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
