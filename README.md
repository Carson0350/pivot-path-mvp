# Pivot Path MVP

Career transition coaching platform for tech professionals.

## 🚀 Quick Start

### Prerequisites
- Node.js 20 LTS or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TailwindCSS 3.4+** - Utility-first CSS framework
- **React Router 6.20+** - Client-side routing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, Container
│   ├── sections/    # Page sections (Hero, Pricing, etc.)
│   └── ui/          # Reusable UI components (Button, Card, etc.)
├── pages/           # Route components
├── utils/           # Utility functions
└── styles/          # Global styles
```

## 🎨 Design System

- **Primary Color:** Deep Blue (#1E3A8A)
- **Secondary Color:** Tech Teal (#06B6D4)
- **Accent Color:** Warm Orange (#F97316)
- **Font:** Inter (via Google Fonts)

## 📝 Development Guidelines

1. Follow the acceptance criteria in sprint plans
2. Use TailwindCSS utility classes for styling
3. Ensure components are accessible (keyboard navigation, ARIA labels)
4. Test on mobile, tablet, and desktop viewports
5. Run linting and formatting before committing

## 🚢 Deployment

This project is configured for deployment to GitHub Pages via GitHub Actions.

Push to `main` branch to trigger automatic deployment.

## 📄 License

Private project - All rights reserved
