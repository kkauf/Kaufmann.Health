import React from "react";

interface AboutMeProps {
  show: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ show }) => {
  if (!show) return null;

  return (
    <section
      id="about"
      className="py-12 md:py-20 border-t border-border bg-background"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[2.5rem] leading-[3rem] font-semibold tracking-tight mb-4">
          Über mich
        </h2>
        <p className="text-[1.1rem] leading-[1.6] text-gray-500 dark:text-gray-300">
          Mein Name ist Konstantin Kaufmann. Ich unterstütze moderne Therapeut:innen und Heilpraktiker:innen für Psychotherapie dabei, ihre Praxis digital, effizient und zukunftssicher aufzustellen. Aus eigener Erfahrung weiß ich, wie viel Zeit und Energie in Verwaltung, Terminplanung und Marketing fließen – und wie sehr diese Aufgaben von der eigentlichen Arbeit am Menschen ablenken können.
          <br /><br />
          Durch die Digitalisierung der Praxis meiner Frau habe ich tiefgehende Einblicke in die Bedürfnisse und Herausforderungen der Branche gewonnen. Mein Ziel ist es, mit praxisnaher Beratung und maßgeschneiderten Software-Lösungen echte Entlastung zu schaffen – damit Sie sich auf das Wesentliche konzentrieren können: Ihre Klient:innen.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
