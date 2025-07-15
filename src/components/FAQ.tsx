interface FAQProps {
  show: boolean;
}

const FAQ: React.FC<FAQProps> = ({ show }) => {
  if (!show) return null;
  return (
    <section id="faq" className="py-12 md:py-20 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[2.5rem] leading-[3rem] font-semibold tracking-tight text-center mb-8">
          Häufige Fragen
        </h2>
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-white/80 dark:bg-charcoal/80 p-5">
            <h3 className="font-semibold mb-2">Für wen ist Kaufmann Health geeignet?</h3>
            <p className="text-gray-500 dark:text-gray-300">Unser Beratungsangebot richtet sich an Heilpraktiker:innen für Psychotherapie sowie psychologische Psychotherapeuten, die privat abrechnen.</p>
          </div>
          <div className="rounded-lg border border-border bg-white/80 dark:bg-charcoal/80 p-5">
            <h3 className="font-semibold mb-2">Wie läuft die Beratung ab?</h3>
            <p className="text-gray-500 dark:text-gray-300">Nach einem unverbindlichen Erstgespräch analysiere ich Ihre Praxisabläufe und entwickle einen individuellen Digitalisierungsplan. Wir arbeiten mit renommierten Softwareanbietern zusammen, um Ihnen mehr Zeit für das Wesentliche zu schenken - ihren Klient:innen.</p>
          </div>
          <div className="rounded-lg border border-border bg-white/80 dark:bg-charcoal/80 p-5">
            <h3 className="font-semibold mb-2">Muss ich bereits Erfahrung mit Software haben?</h3>
            <p className="text-gray-500 dark:text-gray-300">Nein, ich begleite Sie Schritt für Schritt – von der Auswahl bis zur Einführung und Schulung.</p>
          </div>
          <div className="rounded-lg border border-border bg-white/80 dark:bg-charcoal/80 p-5">
            <h3 className="font-semibold mb-2">Mit welchen Kosten muss ich rechnen?</h3>
            <p className="text-gray-500 dark:text-gray-300">Unser Ziel: Mehr Zeit und echten Mehrwert für Ihre Praxis schaffen. Unsere Preise richten sich flexibel nach Praxisgröße und Umsatz – so bleibt es fair und passgenau. Wie sieht das für Sie aus? Kontaktieren Sie uns jetzt für personalisierte Infos und ein unverbindliches Gespräch!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
