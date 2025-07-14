import React from "react";
import KonstantinImg from "../assets/Konstantin.jpg";

interface AboutMeProps {
  show: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ show }) => {
  const [showDetails, setShowDetails] = React.useState<boolean>(false);
  if (!show) return null;

  return (
    <section
      id="about"
      className="py-12 md:py-20 border-t border-border bg-background"
    >
      <div className="max-w-2xl mx-auto text-center">
        <img
          src={KonstantinImg}
          alt="Konstantin Kaufmann"
          className="mx-auto mb-6 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-lg border-4 border-accent/70 dark:border-accent/60 bg-background"
          loading="eager"
        />
        <h2 className="text-[2.5rem] leading-[3rem] font-semibold tracking-tight mb-4">
          Über mich
        </h2>
        <p className="text-[1.1rem] leading-[1.6] text-gray-500 dark:text-gray-300">
          Mein Name ist Konstantin Kaufmann. Ich unterstütze moderne Therapeut:innen und Heilpraktiker:innen für Psychotherapie dabei, ihre Praxis digital, effizient und zukunftssicher aufzustellen. Aus eigener Erfahrung weiß ich, wie viel Zeit und Energie in Verwaltung, Terminplanung und Marketing fließen – und wie sehr diese Aufgaben von der eigentlichen Arbeit am Menschen ablenken können.
          <br /><br />
          Als Produktmanager mit internationaler Erfahrung (u.a. N26, Urban Sports Club) habe ich komplexe Softwareprodukte und Teams erfolgreich aufgebaut. Mein Antrieb: Neue und innovative Lösungen, die den Alltag spürbar erleichtern und einen Mehrwert für Menschen schaffen.
          <br /><br />
          <b>Meine Mission mit Kaufmann.Health:</b> Die Digitalisierung für Therapeut:innen so zu gestalten, dass Sie sich auf das wesentliche konzentrieren können: Ihre Klient:innen. Lassen Sie uns gemeinsam neue Wege gehen!
          <br /><br />
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="mt-4 px-4 py-2 rounded-lg bg-accent/80 dark:bg-accent/60 text-background font-semibold shadow hover:bg-accent/90 transition-colors"
            aria-expanded={showDetails}
          >
            {showDetails ? "Weniger anzeigen" : "Mehr über meine Expertise"}
          </button>
          {showDetails && (
            <div className="mt-4 text-sm text-left bg-white/70 dark:bg-charcoal/70 rounded-lg p-4 border border-border max-w-md mx-auto animate-fade-in">
              <ul className="list-disc pl-5 space-y-1">
                <li>Head of Academy, Franklin Institute (2023–2024): Curriculum-Entwicklung & Teamführung</li>
                <li>Lead Product Manager, Urban Sports Club (2020–2022): Betrugsreduktion um 90%+, Plattform-Scaling</li>
                <li>Product Owner, N26 (2017–2019): Einführung Apple Pay/Google Pay, internationale Expansion</li>
                <li>Executive MBA (laufend), Quantic School of Business & Technology</li>
                <li>Sprachen: Deutsch (Muttersprache), Englisch (fließend), Französisch (B2), Spanisch (B1)</li>
              </ul>
            </div>
          )}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
