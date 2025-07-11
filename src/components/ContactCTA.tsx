import React from "react";

interface ContactCTAProps {
  show: boolean;
  email: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ show, email }) => {
  if (!show) return null;

  return (
    <section
      id="contact"
      className="py-12 md:py-20 border-t border-border bg-background"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[2.5rem] leading-[3rem] font-semibold tracking-tight mb-4">
          Interesse an moderner Praxisführung?
        </h2>
        <p className="text-[1.1rem] leading-[1.6] text-gray-500 dark:text-gray-300 mb-6">
          Schreiben Sie mir gerne eine E-Mail, um ein unverbindliches Erstgespräch zu vereinbaren oder mehr über meine Beratungs- und Digitalisierungsangebote zu erfahren.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition-colors"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
