import React from "react";

interface ReviewsProps {
  show: boolean;
}

const Reviews: React.FC<ReviewsProps> = ({ show }) => {
  if (!show) return null;
  return (
    <section id="reviews" className="py-12 md:py-20 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[2.5rem] leading-[3rem] font-semibold tracking-tight text-center mb-8">
          Stimmen von Kund:innen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 dark:bg-charcoal/80 rounded-xl p-6 shadow-md border border-border text-center">
            <p className="italic mb-4">„Dank der Beratung von Herrn Kaufmann läuft meine Praxis endlich digital und effizient. Absolute Empfehlung!“</p>
            <span className="font-semibold">Heilpraktikerin aus Hessen</span>
          </div>
          <div className="bg-white/80 dark:bg-charcoal/80 rounded-xl p-6 shadow-md border border-border text-center">
            <p className="italic mb-4">„Die persönliche Betreuung und das Verständnis für meine Arbeit machen den Unterschied.“</p>
            <span className="font-semibold">Therapeut aus Berlin</span>
          </div>
          <div className="bg-white/80 dark:bg-charcoal/80 rounded-xl p-6 shadow-md border border-border text-center">
            <p className="italic mb-4">„Von der Website bis zur Abrechnung – alles aus einer Hand und individuell abgestimmt.“</p>
            <span className="font-semibold">Heilpraktikerin für Psychotherapie</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
