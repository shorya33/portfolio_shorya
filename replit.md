# Overview

This is a personal portfolio website for Shorya Dwivedi, a DevOps and MLOps Engineer. The application is built as a full-stack web application featuring a React frontend with TypeScript, an Express.js backend, and a PostgreSQL database. The portfolio showcases professional experience, skills, projects, certifications, and education, with a contact form for visitor inquiries.

The application follows modern web development practices with a monorepo structure, shared type definitions, and a clean separation between client and server code. It's designed to be responsive, accessible, and visually appealing with smooth animations and professional styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Custom React hooks for scroll-based animations and typing effects

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API with structured error handling and request logging
- **Storage**: Abstracted storage layer with both in-memory and database implementations
- **Validation**: Zod schemas for request validation
- **Development**: Hot reload with Vite integration for full-stack development

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Tables**: 
  - `users` table for potential authentication (username, password)
  - `contact_messages` table for storing contact form submissions
- **Migrations**: Drizzle Kit for schema management and migrations

## Development and Build System
- **Build Tool**: Vite for frontend with esbuild for backend bundling
- **Type Safety**: Shared TypeScript types between client and server
- **Development Server**: Integrated development experience with both frontend and backend running together
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)

## Contact Form System
The application implements a contact form that allows visitors to send messages. Form submissions are validated on both client and server sides, stored in the database, and provide user feedback through toast notifications.

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, React DOM, and React Query for state management
- **Backend**: Express.js with TypeScript support via tsx runtime
- **Database**: PostgreSQL via Neon Database serverless driver, Drizzle ORM for database operations

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Font Awesome for icons, Lucide React for some UI icons
- **Fonts**: Google Fonts (Inter family) loaded via CDN

## Development Tools
- **Build System**: Vite with React plugin and Replit-specific plugins for development
- **Type Checking**: TypeScript with strict configuration
- **Validation**: Zod for runtime type validation and schema generation
- **Utilities**: class-variance-authority for component variants, clsx and tailwind-merge for conditional styling

## Third-party Services
- **Database Hosting**: Neon Database for PostgreSQL hosting
- **Image Assets**: Unsplash for portfolio and project images
- **External Links**: LinkedIn and GitHub for professional profiles

## Additional Libraries
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Carousel**: Embla Carousel for image carousels in project sections
- **Date Handling**: date-fns for date formatting and manipulation
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)