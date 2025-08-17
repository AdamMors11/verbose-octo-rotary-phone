# Overview

This is a full-stack web application built as a personal social media hub for "Classical" (Adam). The project is a social link aggregator that showcases the user's presence across multiple platforms like TikTok, Instagram, Discord, YouTube, and others. The application features a modern, dark-themed design with smooth animations and a responsive layout optimized for both desktop and mobile devices.

The application serves as a central landing page where visitors can discover and connect with Classical across various social media platforms, featuring an elegant hero section, about section, and social platform grid with direct links to each platform.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui components for consistent UI elements
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Library**: Extensive use of Radix UI primitives through shadcn/ui for accessibility and consistency

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Architecture Pattern**: RESTful API design with middleware-based request handling
- **Development Setup**: Hot reload capabilities with tsx for development workflow
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Database Client**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development and testing

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schema validation integrated with Drizzle for type-safe data handling

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **UI Components**: Comprehensive shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Hookform resolvers for form validation
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting
- **Animations**: CSS-based animations with Tailwind for smooth user interactions
- **Development Tools**: Various Replit-specific plugins for development environment optimization

The application follows a modern full-stack architecture with clear separation between client and server code, shared type definitions, and a scalable component structure ready for future feature expansion.