# replit.md

## Overview

This is a Russian military contract recruitment landing page ("Контракт - СВОим") built as a full-stack web application. The site allows potential recruits to submit applications through a form, which are stored in a database and optionally sent via email. It includes a public-facing landing page with benefits, requirements, and a contact form, plus a hidden admin panel to view all submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming (military khaki palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: Simple REST endpoints defined in shared/routes.ts with Zod schemas for type-safe request/response
- **Development**: Vite dev server proxied through Express for hot module replacement

### Data Storage
- **Database**: SQLite with better-sqlite3 driver (local file: data.db)
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: shared/schema.ts defines the `requests` table
- **Note**: drizzle.config.ts references PostgreSQL but the actual implementation uses SQLite. The config may be for future migration or is outdated.

### Key Design Decisions
1. **Shared Types**: The shared/ directory contains schema and route definitions used by both client and server, ensuring type safety across the stack
2. **Single Database Table**: Simple `requests` table storing form submissions (name, phone, citizenship, age, message, timestamp)
3. **Hidden Admin Route**: Admin panel accessible at /admin-requests-9955 (security through obscurity, no authentication)
4. **Email Notifications**: Optional SMTP integration via Nodemailer to send submission alerts

## External Dependencies

### Email Service
- **Provider**: Custom SMTP server (smtp.rsa-space.ru)
- **Library**: Nodemailer
- **Configuration**: Requires SMTP_PASSWORD environment variable for authentication
- **Behavior**: Fails gracefully if credentials not provided (logs error, doesn't block form submission)

### Fonts (CDN)
- Google Fonts: Inter (body text), Oswald (display/headings)

### Replit-Specific Plugins
- @replit/vite-plugin-runtime-error-modal
- @replit/vite-plugin-cartographer (dev only)
- @replit/vite-plugin-dev-banner (dev only)

### Key NPM Dependencies
- Express for HTTP server
- Drizzle ORM + better-sqlite3 for database
- Zod for validation throughout
- TanStack Query for client-side data fetching
- Full shadcn/ui component suite (Radix UI based)
- Framer Motion for animations