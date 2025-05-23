"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
// If next-themes/dist/types is missing, fallback to a minimal type definition
// Remove this import if not available
// import { type ThemeProviderProps } from "next-themes/dist/types"
type ThemeProviderProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
