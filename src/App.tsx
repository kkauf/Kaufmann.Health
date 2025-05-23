import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { ArrowRight } from "lucide-react"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="kaufmann-earth-theme">
      <div className="min-h-screen bg-background">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kaufmann.Earth
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Button>
              ))}
            </nav>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign in
              </Button>
              <Button size="sm" className="group">
                Get started
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <ModeToggle />
            </div>
          </div>
        </header>
        
        <main className="flex-1">
          <Hero 
            title="Build the future with confidence"
            subtitle="Empowering developers and teams to create amazing digital experiences with our modern tools and platform."
            primaryCta="Start building"
            secondaryCta="Learn more"
          />
          
          {/* Feature Sections */}
          <section className="py-20 md:py-32 bg-muted/40">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Everything you need to succeed
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our platform provides all the tools and services to help you build, deploy, and scale your applications with ease.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Developer Experience',
                    description: 'Tools and workflows designed with developers in mind to boost productivity.',
                    icon: '🚀',
                  },
                  {
                    title: 'Enterprise Ready',
                    description: 'Security, compliance, and scalability for mission-critical applications.',
                    icon: '🔒',
                  },
                  {
                    title: 'Open Source',
                    description: 'Transparent development with a thriving community behind it.',
                    icon: '💡',
                  },
                ].map((feature) => (
                  <div 
                    key={feature.title}
                    className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
            <div className="container px-4 mx-auto text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Ready to get started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of developers and teams building the future with our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Get started for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Contact sales
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border/50 bg-background/50">
          <div className="container px-4 py-12 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold mb-4">Kaufmann.Earth</h3>
                <p className="text-muted-foreground text-sm">
                  Empowering developers to build the future with confidence.
                </p>
              </div>
              
              {[
                {
                  title: 'Product',
                  items: ['Features', 'Solutions', 'Pricing', 'Templates', 'Releases'],
                },
                {
                  title: 'Company',
                  items: ['About us', 'Careers', 'Blog', 'Press', 'Contact'],
                },
                {
                  title: 'Resources',
                  items: ['Documentation', 'Guides', 'API Reference', 'Community', 'Help Center'],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <a 
                          href="#" 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Kaufmann.Earth. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <span>{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
        
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
