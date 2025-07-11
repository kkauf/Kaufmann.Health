import React from "react";

interface FeaturesProps {
  show: boolean;
}

const Features: React.FC<FeaturesProps> = ({ show }) => {
  if (!show) return null;
  return (
    <section id="features" className="py-12 md:py-20 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[2.5rem] leading-[3rem] font-semibold tracking-tight text-center mb-8">
          Was macht Kaufmann Health besonders?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 dark:bg-charcoal/80 rounded-xl p-6 shadow-md border border-border text-center">
            <h3 className="text-xl font-semibold mb-2">Praxisnahe Digitalisierung</h3>
            <p className="text-gray-500 dark:text-gray-300 text-base">Individuelle Beratung und Umsetzung – direkt aus dem Alltag moderner Therapeut:innen.</p>
          </div>
          <div className="bg-white/80 dark:bg-charcoal/80 rounded-xl p-6 shadow-md border border-border text-center">
            <h3 className="text-xl font-semibold mb-2">Ganzheitliche Lösungen</h3>
            <p className="text-gray-500 dark:text-gray-300 text-base">Von der Terminbuchung bis zur DSGVO-konformen Dokumentation: Alles aus einer Hand.</p>
          </div>
          <div className="bg-white/80 dark:bg-charcoal/80 rounded-xl p-6 shadow-md border border-border text-center">
            <h3 className="text-xl font-semibold mb-2">Mit Experten entwickelt</h3>
            <p className="text-gray-500 dark:text-gray-300 text-base">Co-Entwicklung mit erfahrenen Heilpraktiker:innen für Psychotherapie und Wissen aus der Tech-Branche.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
