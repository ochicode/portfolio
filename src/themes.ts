export interface Theme {
  id: string
  name: string
  colors: {
    desktop: string
    window: string
    windowBorder: string
    titleBar: string
    titleBarText: string
    text: string
    buttonFace: string
    buttonHighlight: string
    buttonShadow: string
    accent: string
    accentLight: string
    panel: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  background: {
    type: 'pattern' | 'gradient' | 'image'
    value: string
  }
}

export const themes: Record<string, Theme> = {
  retro: {
    id: 'retro',
    name: '🖥️ Windows 95',
    colors: {
      desktop: '#008080',
      window: '#c0c0c0',
      windowBorder: '#ffffff',
      titleBar: 'linear-gradient(90deg, #000080, #1084d0)',
      titleBarText: '#ffffff',
      text: '#000000',
      buttonFace: '#c0c0c0',
      buttonHighlight: '#ffffff',
      buttonShadow: '#808080',
      accent: '#000080',
      accentLight: '#1084d0',
      panel: '#ffffff'
    },
    fonts: {
      primary: 'MS Sans Serif, Microsoft Sans Serif, sans-serif',
      secondary: 'Press Start 2P, cursive'
    },
    background: {
      type: 'pattern',
      value: 'linear-gradient(45deg, #008080 25%, transparent 25%), linear-gradient(-45deg, #008080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #008080 75%), linear-gradient(-45deg, transparent 75%, #008080 75%)'
    }
  },

  spotify: {
    id: 'spotify',
    name: '🎵 Spotify',
    colors: {
      desktop: '#121212',
      window: '#181818',
      windowBorder: '#282828',
      titleBar: 'linear-gradient(90deg, #1DB954, #1ed760)',
      titleBarText: '#000000',
      text: '#ffffff',
      buttonFace: '#282828',
      buttonHighlight: '#1DB954',
      buttonShadow: '#000000',
      accent: '#1DB954',
      accentLight: '#1ed760',
      panel: '#282828'
    },
    fonts: {
      primary: 'Circular, Helvetica, Arial, sans-serif',
      secondary: 'Circular, Helvetica, Arial, sans-serif'
    },
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, #1e3264 0%, #121212 100%)'
    }
  },

  modern: {
    id: 'modern',
    name: '✨ Modern',
    colors: {
      desktop: '#f5f5f7',
      window: '#ffffff',
      windowBorder: '#e5e5e7',
      titleBar: 'linear-gradient(90deg, #667eea, #764ba2)',
      titleBarText: '#ffffff',
      text: '#1d1d1f',
      buttonFace: '#f5f5f7',
      buttonHighlight: '#667eea',
      buttonShadow: '#d2d2d7',
      accent: '#667eea',
      accentLight: '#764ba2',
      panel: '#f5f5f7'
    },
    fonts: {
      primary: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      secondary: 'SF Pro Display, sans-serif'
    },
    background: {
      type: 'gradient',
      value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  },

  cyberpunk: {
    id: 'cyberpunk',
    name: '🌃 Cyberpunk',
    colors: {
      desktop: '#0a0e27',
      window: '#1a1f3a',
      windowBorder: '#ff00ff',
      titleBar: 'linear-gradient(90deg, #ff00ff, #00ffff)',
      titleBarText: '#000000',
      text: '#00ffff',
      buttonFace: '#2a2f4a',
      buttonHighlight: '#ff00ff',
      buttonShadow: '#000000',
      accent: '#ff00ff',
      accentLight: '#00ffff',
      panel: '#2a2f4a'
    },
    fonts: {
      primary: 'Orbitron, Rajdhani, sans-serif',
      secondary: 'Orbitron, sans-serif'
    },
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, #0a0e27 0%, #1a0033 100%)'
    }
  },

  nature: {
    id: 'nature',
    name: '🌿 Nature',
    colors: {
      desktop: '#2d5016',
      window: '#f5f5dc',
      windowBorder: '#8b7355',
      titleBar: 'linear-gradient(90deg, #2d5016, #4a7c2c)',
      titleBarText: '#ffffff',
      text: '#2d3319',
      buttonFace: '#d4c5a9',
      buttonHighlight: '#4a7c2c',
      buttonShadow: '#8b7355',
      accent: '#4a7c2c',
      accentLight: '#6b9b3f',
      panel: '#e8dcc4'
    },
    fonts: {
      primary: 'Georgia, Palatino, serif',
      secondary: 'Merriweather, serif'
    },
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, #2d5016 0%, #1a2f0a 100%)'
    }
  },

  vaporwave: {
    id: 'vaporwave',
    name: '🌸 Vaporwave',
    colors: {
      desktop: '#ff71ce',
      window: '#01cdfe',
      windowBorder: '#05ffa1',
      titleBar: 'linear-gradient(90deg, #ff71ce, #b967ff)',
      titleBarText: '#fffb96',
      text: '#05ffa1',
      buttonFace: '#b967ff',
      buttonHighlight: '#fffb96',
      buttonShadow: '#ff71ce',
      accent: '#ff71ce',
      accentLight: '#b967ff',
      panel: '#fffb96'
    },
    fonts: {
      primary: 'VT323, Courier New, monospace',
      secondary: 'VT323, monospace'
    },
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, #ff71ce 0%, #01cdfe 50%, #05ffa1 100%)'
    }
  }
}

export const getRandomTheme = (currentThemeId: string): Theme => {
  const themeIds = Object.keys(themes).filter(id => id !== currentThemeId)
  const randomId = themeIds[Math.floor(Math.random() * themeIds.length)]
  return themes[randomId]
}
