# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application built with TypeScript, React 19, and Tailwind CSS 4. This project uses the Next.js App Router architecture.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Tech Stack

- **Framework**: Next.js 16.0.2 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS 4 with inline theme configuration
- **Fonts**: Geist Sans and Geist Mono (loaded via next/font/google)

## Project Structure

- `app/` - Next.js App Router directory containing routes and layouts
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind CSS imports and theme variables
- `public/` - Static assets (images, SVGs)
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path alias `@/*` pointing to project root

## TypeScript Configuration

- **Path alias**: `@/*` maps to the project root directory
- **Strict mode**: Enabled
- **Target**: ES2017
- **JSX**: react-jsx (React 19's new JSX transform)

## Styling Conventions

This project uses Tailwind CSS 4 with:
- CSS variables for theming (`--background`, `--foreground`)
- Inline theme configuration using `@theme inline` directive
- Dark mode support via `prefers-color-scheme` media query
- Geist font family variables (`--font-geist-sans`, `--font-geist-mono`)

## ESLint Configuration

Uses Next.js ESLint presets:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
