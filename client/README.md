# ARISE Web Landing Page & Marketing Site

A modern, high-performance landing page for ARISE - the ultimate fitness tracking companion for gym bros worldwide.

## 🚀 Features

### Frontend Magic (The Trinity)

- **Cursor Blob + Particle Trail** ✨ - Follows cursor with smooth physics, leaves neon particle trail
- **Animated SVG Background** 🌊 - Neon geometric patterns that morph with scroll depth
- **Magnetic Buttons** 🧲 - Interactive buttons that pull toward cursor before click

### Landing Page Sections

- Hero with catchy tagline and dual CTAs (Google Play / App Store)
- Feature showcase (Gain Tracking, Focus Mode, Fight Club)
- Social proof (stats, testimonials, ratings)
- Final CTA section
- Footer with links and social

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + Vite
- **Styling**: TailwindCSS + Custom Neon CSS
- **Animations**: Framer Motion + GSAP
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── pages/           # Page routes (landing, auth, app)
├── components/
│   ├── magic/       # Cursor blob, SVG bg, magnetic buttons
│   ├── sections/    # Landing page sections
│   ├── layout/      # Reusable layouts (footer, container)
│   └── ui/          # Atomic UI components (future)
├── hooks/           # Custom hooks (useMouse, useScrollDepth, etc)
├── services/        # API calls (auth, gains, fight club)
├── types/           # TypeScript interfaces
├── utils/           # Helpers (formatters, validators, storage)
├── styles/          # Global styles, animations, theme
└── contexts/        # State management (future)
```

## 🎨 Design System

**Colors:**

- Primary: `#00faff` (Neon Cyan)
- Secondary: `#001a40` (Dark Blue)
- Accent: `#ff0080` (Magenta)
- Dark: `#0f172a` (Almost Black)

**Fonts:**

- Display: Inter Bold, Space Mono
- Body: Inter Regular

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (for ES modules)
- npm 9+

### Installation

```bash
# Clone and navigate
cd arise-web

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari 14+, Chrome Android)

## 🔧 Environment Variables

Copy `.env.example` to `.env.local`:

```env
VITE_API_URL=http://localhost:3001
```

## 📊 Performance Goals

- Lighthouse Score: >95
- Load Time: <2s
- First Contentful Paint: <1s
- Cumulative Layout Shift: <0.1

## 🗺️ Future Roadmap

### Phase 2: Web App Features

- User Dashboard (workout history, analytics)
- Gain Tracking (log exercises, track PRs)
- Fight Club Community (leaderboards, challenges)
- Settings & Profile Management

### Phase 3: Social & Community

- Real-time leaderboards
- User profiles and following
- Workout sharing
- Community challenges

## 📝 License

ARISE © 2026. All rights reserved.

## 🤝 Contributing

This is a private project. For inquiries, contact the ARISE team.

## 📞 Support

- Email: hello@arise.app (future)
- Discord: [Coming Soon]
- Twitter: @AriseApp (future)

---

**Made with 💪 for gym bros who want to lock in and gain more.**
