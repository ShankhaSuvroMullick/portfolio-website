# Shankha Suvro Mullick Portfolio

## Overview

A personal portfolio website for a Computer Science student and Software Engineer. The application is a full-stack web app with a React frontend and Express backend, featuring a modern, minimalist design with sections for About, Skills, Projects, Experience, and Contact. Data is stored in PostgreSQL and served via REST API endpoints.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for scroll reveals and page transitions
- **Smooth Scrolling**: react-scroll for navigation anchor links
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Database ORM**: Drizzle ORM for type-safe database queries

### Data Storage
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions
- **Schema Location**: `shared/schema.ts` using Drizzle table definitions
- **Migrations**: Drizzle Kit with output to `./migrations` directory

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod insert schemas
- `routes.ts`: API route definitions with input/output type validation

### Key Design Decisions

1. **Monorepo Structure**: Single repository with `client/`, `server/`, and `shared/` directories enables type sharing between frontend and backend without package publishing.

2. **Type-Safe API Layer**: Routes are defined with Zod schemas in `shared/routes.ts`, ensuring runtime validation matches TypeScript types across the stack.

3. **Component Library**: shadcn/ui provides accessible, customizable components that integrate with Tailwind CSS theming via CSS variables defined in `client/src/index.css`.

4. **Build Strategy**: Development uses Vite's dev server with HMR; production builds the client with Vite and bundles the server with esbuild, selectively bundling common dependencies to optimize cold start times.

## External Dependencies

### Database
- PostgreSQL database (required, configured via `DATABASE_URL` environment variable)
- Drizzle Kit for schema migrations (`npm run db:push`)

### UI Component Libraries
- Radix UI primitives (dialogs, dropdowns, forms, etc.)
- Lucide React for icons

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `framer-motion`: Animation library
- `react-scroll`: Smooth scrolling navigation
- `react-hook-form` / `@hookform/resolvers`: Form handling with Zod validation

### Fonts
- Google Fonts: Outfit (body), Space Grotesk (display), loaded via CDN in `client/index.html`