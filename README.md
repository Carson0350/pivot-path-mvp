# Pivot Path MVP

> Affordable career coaching for tech professionals. Land your dream job without the $10K price tag.

A modern, responsive web application built with React, TailwindCSS, and Vite. Features a complete component library, SEO optimization, Google Analytics integration, and automated deployment to GitHub Pages.

**Live Site:** https://carson0350.github.io/pivot-path-mvp/

---

## ✨ Features

- ✅ **Complete Component Library** - 11 reusable UI components
- ✅ **6 Content Pages** - Home, Services, About, How It Works, Contact, Thank You
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap
- ✅ **Google Analytics** - GA4 tracking with custom events
- ✅ **Contact Form** - With validation and submission tracking
- ✅ **Testimonials** - Social proof with 5-star ratings
- ✅ **404 Page** - Helpful error page with navigation
- ✅ **CI/CD Pipeline** - Automated deployment via GitHub Actions

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20 LTS or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Carson0350/pivot-path-mvp.git
cd pivot-path-mvp

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/pivot-path-mvp/`

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
pivot-path-mvp/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Crawler rules
├── src/
│   ├── components/
│   │   ├── demos/           # Component demonstrations
│   │   ├── layout/          # Header, Footer, Layout
│   │   └── ui/              # Reusable UI components (11 components)
│   ├── pages/               # Route components (6 pages)
│   ├── utils/               # Utility functions (analytics)
│   └── main.jsx             # App entry point
├── ANALYTICS.md             # Google Analytics setup guide
├── index.html               # HTML template with SEO meta tags
└── vite.config.js           # Vite configuration
```

## 🎨 Component Library

### UI Components (11 total)
- **Button** - 5 variants, 3 sizes, loading state
- **Card** - 3 variants, composable (Header, Body, Footer, Image)
- **Input** - 6 types, validation, error states
- **Textarea** - Validation, error states
- **Badge** - 6 variants, 3 sizes, rounded option
- **Alert** - 4 variants, dismissible, icons
- **Modal** - 4 sizes, ESC/overlay close, footer support
- **Accordion** - Single/multiple open, animations
- **Container** - 5 max-widths, responsive padding
- **Section** - 4 backgrounds, 4 spacing options

See `src/components/COMPONENTS.md` for full documentation.

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

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Deployment Process
1. Push to `main` branch
2. GitHub Actions workflow runs automatically
3. Builds the project (`npm run build`)
4. Deploys to GitHub Pages
5. Site is live at: https://carson0350.github.io/pivot-path-mvp/

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

## 📊 Analytics Setup

The project includes Google Analytics 4 tracking. To enable:

1. Create a GA4 property at https://analytics.google.com/
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Replace placeholder in `index.html` and `src/utils/analytics.js`
4. Deploy and verify tracking

See `ANALYTICS.md` for detailed setup instructions.

---

## 📚 Documentation

- **Component Library:** `src/components/COMPONENTS.md`
- **Analytics Setup:** `ANALYTICS.md`
- **Sprint Plans:** `docs/sprints/`
- **PRD:** `docs/prd/`

---

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the project owner.

---

## 📄 License

Private project - All rights reserved

---

## 🎯 Project Milestones

- ✅ **Sprint 1:** Foundation (React, Vite, TailwindCSS, Routing, CI/CD)
- ✅ **Sprint 2:** Design System (11 UI components)
- ✅ **Sprint 3:** Content Pages (6 pages with full content)
- ✅ **Sprint 4:** Polish & Optimization (SEO, Analytics, Testimonials)

---

**Built with ❤️ for career changers everywhere**
