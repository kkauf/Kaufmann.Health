import React from "react";

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
            <p className="text-gray-500 dark:text-gray-300">Für Heilpraktiker:innen für Psychotherapie, moderne Therapeut:innen und alle, die ihre Praxis effizienter und digitaler gestalten möchten.</p>
          </div>
          <div className="rounded-lg border border-border bg-white/80 dark:bg-charcoal/80 p-5">
            <h3 className="font-semibold mb-2">Wie läuft die Beratung ab?</h3>
            <p className="text-gray-500 dark:text-gray-300">Nach einem unverbindlichen Erstgespräch analysiere ich Ihre Praxisabläufe und entwickle einen individuellen Digitalisierungsplan.</p>
          </div>
          <div className="rounded-lg border border-border bg-white/80 dark:bg-charcoal/80 p-5">
            <h3 className="font-semibold mb-2">Muss ich bereits Erfahrung mit Software haben?</h3>
            <p className="text-gray-500 dark:text-gray-300">Nein, ich begleite Sie Schritt für Schritt – von der Auswahl bis zur Einführung und Schulung.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
