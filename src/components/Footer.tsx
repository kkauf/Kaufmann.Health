/**
 * Kaufmann.Earth Footer component
 * - Simple, modern, responsive
 * - Uses design-guide color/typography
 */
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <nav className="mb-2 flex justify-center gap-6 text-sm">
          <Link to="/impressum" className="underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Impressum</Link>
          <Link to="/datenschutz" className="underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded">Datenschutz</Link>
        </nav>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kaufmann Health</p>
      </div>
    </footer>
  );
}

export default Footer;
