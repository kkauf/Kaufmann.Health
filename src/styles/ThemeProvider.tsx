import React, { createContext, useContext, ReactNode } from 'react';
import { Theme, theme } from './theme';

// Create a context for the theme
const ThemeContext = createContext<Theme | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  value?: Theme; // Allow custom theme override
}

/**
 * ThemeProvider component that makes the theme available to all child components
 * via the useTheme hook or the withTheme HOC.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  value: customTheme,
}) => {
  // Use the custom theme if provided, otherwise use the default theme
  const themeValue = customTheme || theme;

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access the theme in function components
 * @returns The theme object
 * @throws Error if used outside of a ThemeProvider
 */
export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return theme;
};

/**
 * Higher-Order Component to inject the theme as a prop
 * @param Component The component to wrap
 * @returns A new component with the theme prop
 */
export function withTheme<P extends { theme?: Theme }>(
  Component: React.ComponentType<P>
): React.FC<Omit<P, 'theme'>> {
  const displayName = Component.displayName || Component.name || 'Component';
  
  const WithTheme: React.FC<Omit<P, 'theme'>> = (props) => {
    const theme = useTheme();
    return <Component {...(props as P)} theme={theme} />;
  };
  
  WithTheme.displayName = `withTheme(${displayName})`;
  
  return WithTheme;
}

// Re-export the theme for direct imports
export { theme } from './theme';

// Re-export all theme utilities
export * from './theme-utils';

// Type exports
export type { Theme } from './theme';
export * from './theme.d';
