/**
 * Kaufmann.Earth Footer component
 * - Simple, modern, responsive
 * - Uses design-guide color/typography
 */
export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kaufmann.Earth</p>
      </div>
    </footer>
  );
}

export default Footer;
