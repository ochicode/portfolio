# 🖥️ Retro Portfolio - Creative Developer Portfolio

A creative portfolio website with a nostalgic retro desktop interface, inspired by the classic Windows 95/98 aesthetic. Built with React, TypeScript, and Vite.

## ✨ Features

- 🎨 **Retro Desktop UI**: Full Windows 95-style interface with draggable windows
- 💾 **Desktop Icons**: Click and double-click to open different sections
- 🪟 **Window Management**: Minimize, maximize (disabled), and close windows
- ⏰ **Live Taskbar**: Functional taskbar with clock and active window tracking
- 📱 **Responsive Design**: Adapts to different screen sizes
- 🎯 **TypeScript**: Fully typed for better developer experience
- ⚡ **Vite**: Lightning-fast development and build times

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see your portfolio in action!

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Desktop.tsx/css       # Desktop background component
│   │   ├── Window.tsx/css        # Draggable window component
│   │   ├── Taskbar.tsx/css       # Bottom taskbar with clock
│   │   ├── DesktopIcon.tsx/css   # Desktop icons
│   │   └── windows/              # Content windows
│   │       ├── About.tsx/css     # About section
│   │       ├── Projects.tsx/css  # Projects showcase
│   │       ├── Skills.tsx/css    # Skills & technologies
│   │       └── Contact.tsx/css   # Contact information
│   ├── App.tsx                   # Main app with state management
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles & CSS variables
├── index.html                    # HTML entry point
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── vite.config.ts               # Vite config
```

## 🎨 Customization Guide

### 1. Update Your Personal Information

#### About Section (`src/components/windows/About.tsx`)
- Replace `[Your Name]` with your actual name
- Update the bio, experience, and interests
- Customize the profile emoji or add your photo

#### Projects Section (`src/components/windows/Projects.tsx`)
- Update the `projects` array with your real projects
- Add links, descriptions, and tech stacks
- Change project icons

#### Skills Section (`src/components/windows/Skills.tsx`)
- Update `skillCategories` with your actual skills
- Add or remove categories as needed
- Customize the "system info" section

#### Contact Section (`src/components/windows/Contact.tsx`)
- Update contact methods with your real information
- Connect the form to a backend/service (FormSpree, EmailJS, etc.)
- Add more social media links

### 2. Customize Colors & Theming

Edit CSS variables in `src/index.css`:

```css
:root {
  --desktop-bg: #008080;        /* Desktop background */
  --window-bg: #c0c0c0;         /* Window background */
  --active-title: #000080;      /* Active window title bar */
  /* ... more variables */
}
```

### 3. Add More Windows

1. Create a new component in `src/components/windows/YourWindow.tsx`
2. Add it to the windows state in `src/App.tsx`
3. Create a desktop icon for it
4. Style it with a matching CSS file

### 4. Customize Desktop Icons

Edit the icon configuration in `src/App.tsx`:

```tsx
<DesktopIcon
  icon="🎮"              // Change emoji or use image
  label="Games.exe"      // Change label
  onDoubleClick={() => openWindow('games')}
  position={{ x: 20, y: 20 }}  // Position on desktop
/>
```

## 🎯 Advanced Customization

### Add Custom Fonts

1. Import fonts in `src/index.css`
2. Update font-family variables
3. For pixel-perfect retro: Use "Press Start 2P" or similar pixel fonts

### Window Animations

Edit `src/components/Window.tsx` to add entrance/exit animations using CSS transitions or Framer Motion.

### Desktop Background

Replace the teal pattern in `src/components/Desktop.css`:

```css
.desktop {
  background: url('/your-background.jpg');
  background-size: cover;
}
```

### Add Sound Effects

1. Add sound files to `public/sounds/`
2. Import and play on interactions (window open, minimize, etc.)

```tsx
const playSound = (sound: string) => {
  new Audio(`/sounds/${sound}.mp3`).play()
}
```

## 📦 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **react-draggable** - Window dragging functionality
- **CSS3** - Retro styling with modern features

## 💡 Tips

- **Performance**: Windows are conditionally rendered when open
- **State Management**: All window states managed in App.tsx
- **Accessibility**: Add ARIA labels for better screen reader support
- **Mobile**: Consider a different layout for small screens
- **SEO**: Add meta tags in index.html for better search ranking

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ideas:
- Add a file explorer window
- Create a "Start Menu" with programs
- Add a Notepad-style blog
- Implement a terminal/command prompt
- Add music player window

## 📄 License

MIT License - feel free to use this for your portfolio!

## 🙏 Acknowledgments

- Inspired by [PostHog's](https://posthog.com/) retro design aesthetic
- Windows 95/98 UI design
- Classic desktop operating systems

---

**Made with ❤️ and nostalgia**

Happy coding! 🚀