# Kaufmann.Earth

A modern web application built with React, TypeScript, Vite, Tailwind CSS, and ShadCN UI components, featuring a comprehensive design system.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🚀 [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🎭 [ShadCN UI](https://ui.shadcn.com/) - Beautifully designed components
- 🎨 Comprehensive Theme System - Type-safe design tokens and utilities
  - Includes Kaufmann.Health color palette with semantic color tokens
  - Predefined gradients for UI elements
  - Consistent spacing and typography scales
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🛠 TypeScript for type safety

## Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/Kaufmann.Earth.git
   cd Kaufmann.Earth
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

   The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
Kaufmann.Earth/
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/               # ShadCN UI components
│   ├── lib/                  # Utility functions
│   ├── styles/               # Global styles and theme system
│   │   ├── theme.ts          # Core theme configuration
│   │   ├── theme-utils.ts    # Theme utility functions
│   │   ├── theme.d.ts        # TypeScript type definitions
│   │   ├── ThemeProvider.tsx # Theme context provider
│   │   └── globals.css       # Global styles
│   └── App.tsx               # Main App component
├── .gitignore
├── DESIGN-GUIDE.md          # Design system documentation
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Design System

### Documentation Structure

1. **DESIGN-GUIDE.md** - High-level design decisions, brand guidelines, and design principles
2. **Theme System** - Technical implementation of the design system (in `src/styles/`)
   - `theme.ts` - Core theme configuration (colors, typography, spacing, etc.)
   - `theme-utils.ts` - Helper functions for theme access
   - `theme.d.ts` - TypeScript type definitions
   - `ThemeProvider.tsx` - React context provider for theme

### Using the Theme System

#### In React Components

```tsx
import { useTheme, color, space } from '../styles/ThemeProvider';

function ThemedComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ 
      color: color('primary'),
      padding: space(4),
      backgroundColor: color('background')
    }}>
      <h1 style={{ fontSize: theme.fontSize['2xl'] }}>Hello, World!</h1>
    </div>
  );
}
```

#### Available Theme Values

- **Colors**: `color('primary')`, `color('error')`, etc.
- **Spacing**: `space(1)` to `space(96)` (4px increments)
- **Typography**: Access via `theme.fontSize`, `theme.fontWeight`, etc.
- **Breakpoints**: `theme.breakpoints.sm`, `theme.breakpoints.md`, etc.
- **Border Radius**: `radius('sm')`, `radius('lg')`, etc.
- **Shadows**: `shadow('sm')`, `shadow('lg')`, etc.

### Best Practices

1. Always use theme utilities instead of hardcoded values
2. Use semantic color names from the theme
3. Leverage the responsive design utilities
4. Extend the theme types when adding new values
5. Keep design tokens consistent with the DESIGN-GUIDE.md

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. The configuration can be found in `tailwind.config.js`.

## TypeScript

This project uses [TypeScript](https://www.typescriptlang.org/). Type definitions are included for all dependencies.

## Deployment

This project is configured to be deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

### Manual Deployment

1. Push your code to a GitHub repository
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to Pages > Create a project
4. Connect your GitHub repository
5. Set the build command to `npm run build`
6. Set the build output directory to `dist`
7. Click "Save and Deploy"

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
