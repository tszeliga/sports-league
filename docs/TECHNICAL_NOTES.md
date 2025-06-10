# Technical Implementation Notes

## Component Communication Patterns

### Props Down, Events Up

All components follow Vue's recommended data flow pattern:

```typescript
// Parent to Child: Props
<LeagueCard :league="leagueData" />

// Child to Parent: Events
<LeagueCard @click="handleLeagueClick" />
```

### Composables for Shared Logic

Complex state management handled through composables:

```typescript
// Shared between components
const { leagues, loading, error } = useLeagues();
const { filteredLeagues, handleSearch } = useLeagueFilters(leagues);
```

## API Integration Details

### Caching Implementation

```typescript
class ApiCache {
  private cache = new Map<string, CacheEntry<any>>();
  private readonly defaultTTL = 5 * 60 * 1000; // 5 minutes

  // Automatic cleanup every 2 minutes
  // Prevents memory leaks in long-running sessions
}
```

## Deployment Configuration

### GitHub Pages Setup

```yaml
# .github/workflows/nuxtjs.yml
- run: npx nuxt build --preset github_pages
- path: ./.output/public
```

### Base URL Configuration

```typescript
// nuxt.config.ts
app: {
  baseURL: '/sports-league/',
  router: {
    options: { hashMode: true }
  }
}
```

## Development Environment

### Required Node.js Version

- Node.js 18+ recommended
- npm 8+ or equivalent package manager

### Development Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm run deploy # Build and deploy to GitHub Pages
```

---

_These technical notes provide implementation details for developers working on the project._
