# Sports Leagues Directory

A modern, responsive web application built with Nuxt 3 that displays sports leagues from around the world with advanced filtering and search capabilities.

## 🚀 Features

- **Browse Sports Leagues**: Explore leagues from various sports worldwide
- **Advanced Search**: Real-time search with debounced input
- **Smart Filtering**: Filter by sport type with dynamic options
- **Season Badges**: View league season badges in an elegant modal
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: API caching, lazy loading, and optimized animations
- **Accessibility**: Full keyboard navigation and screen reader support
- **Modern UI**: Glass morphism design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Nuxt 3 (Vue 3 + TypeScript)
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Vue 3 Composables
- **API**: TheSportsDB API with intelligent caching
- **Deployment**: GitHub Pages with automated CI/CD
- **AI Tools**: bolt.new with manual fixes + Copilot

## 📚 Documentation

- **[Technical Implementation Notes](./docs/TECHNICAL_NOTES.md)** - Detailed technical documentation
- **[AI Tools and Design Decisions](./docs/AI_TOOLS_AND_DESIGN.md)** - Architecture decisions and design rationale

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd sports-leagues-directory

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run deploy       # Build and deploy to GitHub Pages
```

## 🏗️ Project Structure

```
├── components/          # Vue components
│   ├── AppHeader.vue
│   ├── FilterSection.vue
│   ├── LeagueCard.vue
│   └── ...
├── composables/         # Vue composables
│   ├── useApi.ts
│   ├── useLeagues.ts
│   └── ...
├── types/              # TypeScript type definitions
├── assets/css/         # Global styles
├── pages/              # Nuxt pages
├── docs/               # Documentation files
└── public/             # Static assets
```

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions:

1. Push to main branch
2. GitHub Actions builds the project
3. Deploys to GitHub Pages
4. Available at your GitHub Pages URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [TheSportsDB](https://www.thesportsdb.com/) for providing the sports data API
- [Nuxt 3](https://nuxt.com/) for the excellent framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---
