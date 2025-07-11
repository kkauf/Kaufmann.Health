/**
 * Kaufmann.Earth Header component
 * - Placeholder logo (will be replaced)
 * - Simple navigation (Home, Mission, Branches)
 * - Responsive, clean, modern style per design guide
 */
const navItems = [
  { label: "Start", href: "#home" },
  { label: "Über mich", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-900 to-blue-400 flex items-center justify-center text-white font-bold text-xl select-none shadow-md">
            {/* Placeholder for Logo */}
            KE
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Kaufmann.Health</span>
        </div>
        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;
