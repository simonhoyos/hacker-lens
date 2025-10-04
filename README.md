# Hacker Lens

A modern React application for browsing Hacker News stories with a clean, responsive interface. Built with TypeScript, Vite, and TanStack Router for optimal performance and developer experience.

## Features

- Browse the latest Hacker News stories
- View individual story details and comments
- Responsive design for all devices
- Fast loading with React Query for data fetching
- Component library with Storybook integration
- TypeScript for type safety
- Vite for fast development and building

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching and caching
- **Storybook** - Component development and documentation
- **Zod** - Schema validation
- **CSS Modules** - Scoped styling

## Prerequisites

- Node.js (version 22 or higher)
- pnpm (recommended) or npm

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd hacker-lens
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### 4. Build for production

```bash
pnpm build
```

### 5. Preview the production build

```bash
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check for code issues
- `pnpm storybook` - Start Storybook for component development
- `pnpm build-storybook` - Build Storybook for deployment

## API Integration

The application fetches data from the official Hacker News API:
- Base URL: `https://hacker-news.firebaseio.com/v0`
- Stories endpoint: `/newstories.json`
- Individual items: `/item/{id}.json`

## Development

### Component Development

This project uses Storybook for component development and documentation. Start Storybook with:

```bash
pnpm storybook
```

### Code Quality

The project includes:
- ESLint for code linting
- TypeScript for type checking
- Prettier for code formatting

Run linting with:
```bash
pnpm lint
```