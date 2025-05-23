import { theme } from './theme';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.styl' {
  const content: { [className: string]: string };
  export default content;
}

// Extend the default theme type
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
    breakpoints: typeof theme.breakpoints;
    borderRadius: typeof theme.borderRadius;
    boxShadow: typeof theme.boxShadow;
    transitionTiming: typeof theme.transitionTiming;
    transitionDuration: typeof theme.transitionDuration;
    zIndex: typeof theme.zIndex;
    spacing: typeof theme.spacing;
    fontSize: typeof theme.fontSize;
    fontWeight: typeof theme.fontWeight;
    lineHeight: typeof theme.lineHeight;
    letterSpacing: typeof theme.letterSpacing;
  }
}

// Global theme augmentation
declare global {
  // Extend CSS Properties to include our theme tokens
  interface CSSProperties {
    '--color-primary'?: string;
    '--color-secondary'?: string;
    '--color-accent'?: string;
    '--color-background'?: string;
    '--color-surface'?: string;
    '--color-text'?: string;
    '--color-text-secondary'?: string;
    '--color-border'?: string;
    '--color-input'?: string;
    '--color-ring'?: string;
    '--color-success'?: string;
    '--color-warning'?: string;
    '--color-error'?: string;
    '--color-info'?: string;
  }
}

// Theme utility types
type ThemeColors = typeof theme.colors;
type ThemeFonts = typeof theme.fonts;
type ThemeBreakpoints = typeof theme.breakpoints;
type ThemeSpacing = typeof theme.spacing;
type ThemeFontSize = typeof theme.fontSize;
type ThemeFontWeight = typeof theme.fontWeight;
type ThemeLineHeight = typeof theme.lineHeight;
type ThemeLetterSpacing = typeof theme.letterSpacing;
type ThemeBorderRadius = typeof theme.borderRadius;
type ThemeBoxShadow = typeof theme.boxShadow;
type ThemeZIndex = typeof theme.zIndex;
type ThemeTransitionTiming = typeof theme.transitionTiming;
type ThemeTransitionDuration = typeof theme.transitionDuration;

// Export theme types for external use
export type {
  ThemeColors,
  ThemeFonts,
  ThemeBreakpoints,
  ThemeSpacing,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeLineHeight,
  ThemeLetterSpacing,
  ThemeBorderRadius,
  ThemeBoxShadow,
  ThemeZIndex,
  ThemeTransitionTiming,
  ThemeTransitionDuration,
};

// Utility types for theme values
type ValueOf<T> = T[keyof T];
type NestedValueOf<ObjectType, Key extends keyof ObjectType> = ObjectType[Key] extends Record<string, any>
  ? ValueOf<ObjectType[Key]> | NestedValueOf<ObjectType[Key], keyof ObjectType[Key]>
  : ObjectType[Key];

type ThemeColorValue = NestedValueOf<ThemeColors, keyof ThemeColors>;
type ThemeFontValue = ValueOf<ThemeFonts>;
type ThemeBreakpointValue = ValueOf<ThemeBreakpoints>;
type ThemeSpacingValue = keyof ThemeSpacing | number;
type ThemeFontSizeValue = keyof ThemeFontSize | string;
type ThemeFontWeightValue = keyof ThemeFontWeight | string | number;
type ThemeLineHeightValue = keyof ThemeLineHeight | string | number;
type ThemeLetterSpacingValue = keyof ThemeLetterSpacing | string;
type ThemeBorderRadiusValue = keyof ThemeBorderRadius | string | number;
type ThemeBoxShadowValue = keyof ThemeBoxShadow | string;
type ThemeZIndexValue = keyof ThemeZIndex | string | number;
type ThemeTransitionTimingValue = keyof ThemeTransitionTiming | string;
type ThemeTransitionDurationValue = keyof ThemeTransitionDuration | string | number;

// Export theme value types
export type {
  ThemeColorValue,
  ThemeFontValue,
  ThemeBreakpointValue,
  ThemeSpacingValue,
  ThemeFontSizeValue,
  ThemeFontWeightValue,
  ThemeLineHeightValue,
  ThemeLetterSpacingValue,
  ThemeBorderRadiusValue,
  ThemeBoxShadowValue,
  ThemeZIndexValue,
  ThemeTransitionTimingValue,
  ThemeTransitionDurationValue,
};
