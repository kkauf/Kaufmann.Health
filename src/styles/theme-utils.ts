import { theme, Theme } from './theme';

/**
 * Type-safe theme accessor functions
 */

/**
 * Get a color from the theme
 */
export function color(path: string): string {
  // Helper to safely access nested properties
  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => {
      if (acc === undefined) return '';
      return acc[part];
    }, obj);
  };

  // Check if it's a direct color reference
  if (path.startsWith('#')) return path;
  
  // Check if it's a CSS variable
  if (path.startsWith('--')) return `var(${path})`;
  
  // Check if it's a theme color
  const themeColor = getNestedValue(theme.colors, path);
  if (themeColor) return themeColor;
  
  // Fallback to black if not found
  console.warn(`Color not found: ${path}`);
  return theme.colors.black;
}

/**
 * Get a spacing value from the theme
 */
export function space(scale: keyof Theme['spacing'] | number): string {
  if (typeof scale === 'number') return `${scale * 0.25}rem`;
  return theme.spacing[scale] || '0';
}

/**
 * Get a font size from the theme
 */
export function fontSize(size: keyof Theme['fontSize'] | string) {
  if (typeof size === 'string') return size;
  return theme.fontSize[size];
}

/**
 * Get a font weight from the theme
 */
export function fontWeight(weight: keyof Theme['fontWeight'] | string) {
  if (typeof weight === 'string') return weight;
  return theme.fontWeight[weight];
}

/**
 * Get a border radius from the theme
 */
export function radius(size: keyof Theme['borderRadius'] | string) {
  if (typeof size === 'string') return size;
  return theme.borderRadius[size];
}

/**
 * Get a shadow from the theme
 */
export function shadow(size: keyof Theme['boxShadow'] | string) {
  if (typeof size === 'string') return size;
  return theme.boxShadow[size];
}

/**
 * Get a z-index from the theme
 */
export function zIndex(level: keyof Theme['zIndex']) {
  return theme.zIndex[level];
}

/**
 * Get a breakpoint from the theme
 */
export function breakpoint(size: keyof Theme['breakpoints']) {
  return theme.breakpoints[size];
}

/**
 * Media query helper
 */
export const mq = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  '2xl': `@media (min-width: ${theme.breakpoints['2xl']})`,
};

/**
 * Animation helpers
 */
export const motion = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  spring: 'cubic-bezier(0.25, 0.8, 0.5, 1)',
};

/**
 * Elevation system
 */
export const elevation = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

/**
 * Helper to create a responsive style object
 */
type ResponsiveStyle<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

export function responsive<T>(styles: ResponsiveStyle<T>): T[] {
  const { base, ...breakpoints } = styles;
  const responsiveStyles: T[] = [];

  if (base) responsiveStyles.push(base);

  Object.entries(breakpoints).forEach(([breakpoint, style]) => {
    if (style) {
      responsiveStyles.push({
        [`@media (min-width: ${theme.breakpoints[breakpoint as keyof typeof theme.breakpoints]})`]: style,
      } as T);
    }
  });

  return responsiveStyles;
}
