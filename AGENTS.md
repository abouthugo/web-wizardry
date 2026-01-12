# AGENTS.md

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

This is a personal portfolio website built with:

- **Astro 5.x** - Static site generator with file-based routing
- **Tailwind CSS 4** - Utility-first CSS framework (using Vite plugin)
- **TypeScript** - Strict mode enabled
- **Node.js 20.9.0** - Runtime (see `.node-version`)

## Project Structure

```
src/
├── components/     # Reusable Astro components (PascalCase.astro)
├── images/         # SVG icons and images
├── layouts/        # Page layout components
├── pages/          # File-based routing (kebab-case.astro)
├── styles/         # Global CSS (global.css with Tailwind)
├── utils/          # Utility functions (camelCase.ts)
└── writing/        # Markdown content
public/             # Static assets (fonts, favicon, manifest)
dist/               # Build output (gitignored)
```

## Commands

### Development

```bash
npm install         # Install dependencies
npm run dev         # Start dev server at localhost:4321
npm run build       # Build for production (outputs to ./dist/)
npm run preview     # Preview production build locally
```

### Formatting

```bash
npx prettier --write .       # Format all files
npx prettier --check .       # Check formatting without changes
npx prettier --write <file>  # Format a specific file
```

### Type Checking

```bash
npx astro check     # Run Astro's type checker
```

### Notes

- No ESLint configuration - rely on Prettier and TypeScript
- No test framework configured
- Use `npm run astro -- <command>` for Astro CLI commands

## Code Style Guidelines

### Formatting (Prettier + EditorConfig)

- **Indentation:** 2 spaces
- **Quotes:** Single quotes (Prettier default)
- **Semicolons:** Yes (Prettier default)
- **Trailing commas:** ES5-compatible (Prettier default)
- **Line endings:** LF
- **Final newline:** Always insert
- **Trailing whitespace:** Always trim

Prettier plugins are configured for:

- `.astro` files (prettier-plugin-astro)
- Tailwind class sorting (prettier-plugin-tailwindcss)

### TypeScript

- Strict mode enabled via `astro/tsconfigs/strict`
- ES Modules (`"type": "module"` in package.json)
- Define component props with `interface Props` in frontmatter
- Use TypeScript for utility files in `src/utils/`

### Imports

Order imports as follows:

1. External packages (no extension): `import { twMerge } from "tailwind-merge";`
2. Local files (with extension): `import MainLayout from "../layouts/MainLayout.astro";`

```typescript
// External packages first
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Then local imports
import MainLayout from "../layouts/MainLayout.astro";
import cn from "../utils/cn";
```

### Naming Conventions

| Type        | Convention                       | Example                                 |
| ----------- | -------------------------------- | --------------------------------------- |
| Components  | PascalCase                       | `Navigation.astro`, `MainLayout.astro`  |
| Pages       | kebab-case                       | `wish-list.astro`, `index.astro`        |
| Utilities   | camelCase                        | `cn.ts`                                 |
| Variables   | camelCase                        | `baseStyles`, `navItems`, `currentPath` |
| Interfaces  | PascalCase                       | `Props`, `LinkItem`                     |
| CSS classes | Tailwind utilities or kebab-case | `.prose`, `.zalando`                    |

### Astro Components

```astro
---
// 1. Imports
import Component from "../components/Component.astro";

// 2. Props interface
interface Props {
  title?: string;
}

// 3. Props destructuring with defaults
const { title = "Default Title" } = Astro.props;

// 4. Component logic
const items = ["a", "b", "c"];
---

<!-- 5. Template -->
<div class="container">
  <slot />
</div>
```

### Tailwind CSS

- Use Tailwind CSS 4 with the Vite plugin (`@tailwindcss/vite`)
- Custom theme variables defined in `src/styles/global.css` using `@theme` directive
- Use the `cn()` utility from `src/utils/cn.ts` for conditional class merging:

```typescript
import cn from "../utils/cn";

const styles = cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "primary-class" : "secondary-class",
);
```

- Prefer inline Tailwind utilities over custom CSS
- Use arbitrary values sparingly: `[&_a]:text-green-400`
- Responsive prefixes: `md:`, `lg:`

### SVG Icons

- Store SVGs in `src/images/`
- Import and use as Astro components:

```astro
---
import Logo from "../images/logo.svg";
---

<Logo class="h-9 w-9" />
```

## Error Handling

This is a static site with minimal error handling needs:

- Use a custom 404 page at `src/pages/404.astro`
- Astro handles build-time errors

## Content

- Markdown content lives in `src/writing/`
- Import content using Astro's Content API:

```astro
---
import { Content as AboutContent } from "../writing/about.md";
---

<AboutContent />
```

## Key Files

| File                    | Purpose                                            |
| ----------------------- | -------------------------------------------------- |
| `astro.config.mjs`      | Astro configuration, site URL, Vite plugins        |
| `tsconfig.json`         | TypeScript config (extends astro/strict)           |
| `.prettierrc.mjs`       | Prettier configuration with Astro/Tailwind plugins |
| `.editorconfig`         | Editor settings (indentation, newlines)            |
| `src/styles/global.css` | Global styles, Tailwind theme, custom fonts        |
| `src/utils/cn.ts`       | Class name utility (clsx + tailwind-merge)         |
