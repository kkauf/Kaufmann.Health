import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

type HeroProps = {
  title?: string
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function Hero({
  title = "Welcome to Kaufmann.Earth",
  subtitle = "Building a better future through innovative solutions and sustainable practices.",
  primaryCta = "Get started",
  secondaryCta = "Learn more",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 to-background"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5 dark:opacity-[0.03]" />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            Now in Beta <ChevronRight className="ml-1 w-4 h-4" />
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-semibold group"
              onClick={onPrimaryClick}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-semibold"
              onClick={onSecondaryClick}
            >
              {secondaryCta}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {[
              { value: '100%', label: 'Open Source' },
              { value: '24/7', label: 'Support' },
              { value: '99.9%', label: 'Uptime' },
              { value: '1M+', label: 'Users' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-left sm:text-center"
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
