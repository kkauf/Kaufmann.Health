# Kaufmann.Earth Design System

## Brand Identity
Kaufmann.Earth serves as the mother brand for a family of ventures across education, wellness, technology, and sustainable innovation. The design system is built on principles of sustainability, innovation, and human connection.

## Color Palette

### Primary Colors
- **Earth Deep Green** `#0A5F3C`
  - RGB: 10, 95, 60
  - Used for primary actions and key brand elements

- **Earth Sky** `#2B7FCC`
  - RGB: 43, 127, 204
  - Secondary color for highlights and accents

### Secondary Colors
- **Light Teal** `#4AC7B8`
- **Warm Sand** `#F5F0E8`

### Sub-brand Accents
- **Academy Gold** `#E2A900`
- **Academy Navy** `#1A365D`
- **Farm Green** `#6FB53E`
- **Capital Purple** `#7B61FF`

### Neutrals
- **Charcoal** `#1C1C1C`
- **Mid Gray** `#6B7280`
- **Light Gray** `#F5F7FA`
- **Pure White** `#FFFFFF`

### Gradients
- **Primary Gradient**: 135° from Earth Deep Green to Earth Sky
- **Vertical Gradient**: 180° from Earth Deep Green to Earth Sky

## Typography

### Font Family
- **Primary**: System UI stack for optimal performance
  ```
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
  ```

### Scale & Hierarchy
- **H1**: 3.5rem / 4.25rem (56px / 68px)
  - Font Weight: 600
  - Letter Spacing: -0.02em
  - Line Height: 1.2

- **H2**: 2.5rem / 3rem (40px / 48px)
  - Font Weight: 600
  - Letter Spacing: -0.02em

- **H3**: 1.5rem / 1.75rem (24px / 28px)
  - Font Weight: 600
  - Color: Earth Deep Green

- **Body**: 1.1rem / 1.6 (17.6px / 1.6)
  - Color: Mid Gray

## Logo Usage

### Primary Logo
```html
<span style="
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--color-earth-deep-green) 0%, var(--color-earth-sky) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;">
  Kaufmann.Earth
</span>
```

### Logo Variations
1. **Light Background**: Primary gradient logo
2. **Dark Background**: White logo
3. **Gradient Background**: White logo on gradient

## Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256px

## Components

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">
  Button Text
</button>

<style>
.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--earth-deep-green) 0%, var(--earth-sky) 100%);
  color: var(--pure-white);
  box-shadow: 0 4px 20px rgba(10, 95, 60, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(10, 95, 60, 0.3);
}
</style>
```

#### Secondary Button
```html
<button class="btn btn-secondary">
  Button Text
</button>

<style>
.btn-secondary {
  background: var(--pure-white);
  color: var(--earth-deep-green);
  border: 2px solid var(--earth-deep-green);
}

.btn-secondary:hover {
  background: var(--earth-deep-green);
  color: var(--pure-white);
}
</style>
```

### Cards
```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
</div>

<style>
.card {
  background: var(--pure-white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-header {
  padding: 2rem;
  background: linear-gradient(135deg, var(--earth-deep-green) 0%, var(--earth-sky) 100%);
  color: var(--pure-white);
}

.card-body {
  padding: 2rem;
}
</style>
```

## Sub-Brand System

### Naming Convention
All sub-brands follow the pattern: `Kaufmann.[Division]`

### Sub-Brand Colors
1. **Academy**: Navy & Gold
2. **Farm**: Green & Teal
3. **Capital**: Purple & Blue
4. **Health**: Teal & White

### Sub-Brand Guidelines
1. Each sub-brand maintains its own color identity
2. Must include the Kaufmann.Earth logo in the footer
3. Typography should remain consistent with the mother brand
4. Can incorporate the master gradient in key moments

## Responsive Design
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Animation Principles
- **Duration**: 0.3s for micro-interactions
- **Easing**: ease-in-out for smooth transitions
- **Hover States**: Subtle scale and shadow changes
- **Page Transitions**: Fade and slide animations

## Accessibility
- Minimum contrast ratio of 4.5:1 for text
- Keyboard navigable components
- ARIA labels for interactive elements
- Prefers-reduced-motion support

## Implementation

### CSS Variables
```css
:root {
  /* Colors */
  --earth-deep-green: #0A5F3C;
  --earth-sky: #2B7FCC;
  --earth-light-teal: #4AC7B8;
  --earth-warm-sand: #F5F0E8;
  --academy-gold: #E2A900;
  --academy-navy: #1A365D;
  --farm-green: #6FB53E;
  --capital-purple: #7B61FF;
  --charcoal: #1C1C1C;
  --mid-gray: #6B7280;
  --light-gray: #F5F7FA;
  --pure-white: #FFFFFF;
  
  /* Gradients */
  --master-gradient: linear-gradient(135deg, var(--earth-deep-green) 0%, var(--earth-sky) 100%);
  --master-gradient-vertical: linear-gradient(180deg, var(--earth-deep-green) 0%, var(--earth-sky) 100%);
  
  /* Spacing */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
  --space-48: 12rem;    /* 192px */
  --space-56: 14rem;    /* 224px */
  --space-64: 16rem;    /* 256px */
}
```

### React Component Example
```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          // Sizes
          'h-8 px-4 text-sm': size === 'sm',
          'h-10 px-6': size === 'md',
          'h-12 px-8 text-lg': size === 'lg',
          // Variants
          'bg-gradient-to-r from-earth-deep-green to-earth-sky text-white shadow-md hover:shadow-lg': 
            variant === 'primary',
          'bg-white text-earth-deep-green border-2 border-earth-deep-green hover:bg-earth-deep-green hover:text-white':
            variant === 'secondary',
          'bg-transparent text-earth-deep-green border border-earth-deep-green hover:bg-earth-warm-sand':
            variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

## Development Guidelines
1. Use the design tokens provided above for consistency
2. Follow the component API patterns
3. Maintain accessibility standards
4. Test across breakpoints
5. Document new components in Storybook

## Resources
- [Figma Design System](https://www.figma.com/community/file/1234567890/design-system)
- [Storybook Components](http://localhost:6006/)
- [Design Tokens](https://github.com/your-org/design-tokens)

---
*Last updated: May 2025*
