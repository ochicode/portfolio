import React from 'react'
import { useTheme } from '../ThemeContext'
import { themes } from '../themes'

const ThemeToggle: React.FC = () => {
  const { currentTheme, setTheme, randomTheme } = useTheme()

  return (
    <div className="theme-toggle-container">
      <div className="flex flex-col gap-4">
        {/* Random Theme Button */}
        <button
          onClick={randomTheme}
          className="win95-button px-4 py-2 text-[11px] font-bold flex items-center gap-2"
        >
          <span className="text-base">🎲</span>
          <span>Random Theme</span>
        </button>

        {/* Theme Selector */}
        <div className="win95-panel p-3">
          <h3 className="text-xs font-bold mb-2 pb-2 border-b-2"
              style={{ borderColor: 'var(--color-button-shadow)' }}>
            Choose Theme
          </h3>
          <div className="flex flex-col gap-1">
            {Object.values(themes).map(theme => (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className={`win95-button px-3 py-2 text-[11px] text-left flex items-center gap-2 ${
                  currentTheme.id === theme.id ? 'font-bold' : ''
                }`}
                style={currentTheme.id === theme.id ? {
                  borderColor: 'var(--color-button-shadow) var(--color-button-highlight) var(--color-button-highlight) var(--color-button-shadow)',
                  boxShadow: 'inset -1px -1px 0 var(--color-button-highlight)',
                  paddingTop: '10px'
                } : undefined}
              >
                <span>{currentTheme.id === theme.id ? '●' : '○'}</span>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Theme Info */}
        <div className="win95-panel p-2">
          <p className="text-[10px] m-0">
            <strong>Current:</strong> {currentTheme.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle
