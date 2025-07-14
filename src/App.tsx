import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactCTA from "./components/ContactCTA";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import HeroImage from "./assets/Hero.png";

export default function App() {
  // Feature toggles from .env
  const showAboutMe = import.meta.env.VITE_SHOW_ABOUT_ME === 'true';
  const showContactCTA = import.meta.env.VITE_SHOW_CONTACT_CTA === 'true';
  const showFeatures = import.meta.env.VITE_SHOW_FEATURES === 'true';
  const showFAQ = import.meta.env.VITE_SHOW_FAQ === 'true';
  const showReviews = import.meta.env.VITE_SHOW_REVIEWS === 'true';
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || '';

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full flex flex-col md:flex-row items-center justify-between gap-12 min-h-[60vh] py-16 md:py-24 px-6 md:px-16 bg-background relative"
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start md:items-start justify-center max-w-2xl w-full md:w-auto mx-auto md:mx-0">
            <h1 className="text-[2.5rem] md:text-[3.5rem] leading-tight font-semibold tracking-tight text-gradient mb-4 text-left select-none">
              Mehr Zeit für das Wesentliche – Ihre Klient:innen.
            </h1>
            <p className="text-[1.2rem] leading-[1.7] text-gray-500 dark:text-gray-300 font-medium mb-6 text-left">
              Digitalisierung, Beratung und Software-Lösungen speziell für Heilpraktiker:innen für Psychotherapie sowie psychologische Psychotherapeuten. Effizient. Individuell. Mit echtem Praxisbezug.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Weniger Papierkram & mehr Zeit am Menschen</li>
              <li className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Individuelle, praxisnahe Lösungen</li>
              <li className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Sicher & DSGVO-konform</li>
            </ul>
            <a href="#contact" className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition-colors text-lg">
              Jetzt unverbindlich beraten lassen
            </a>
          </div>
          {/* Right: Hero Image */}
          <div className="flex-1 flex items-center justify-center w-full md:w-auto">
            <img
              src={HeroImage}
              alt="Praxis Digitalisierung Illustration"
              className="max-w-xs md:max-w-md w-full h-auto rounded-xl shadow-lg object-contain"
              loading="eager"
            />
          </div>
        </section>
        {/* Features Section (toggle) */}
        <Features show={showFeatures} />
        {/* About Me Section (toggle) */}
        <AboutMe show={showAboutMe} />
        {/* Reviews Section (toggle) */}
        <Reviews show={showReviews} />
        {/* FAQ Section (toggle) */}
        <FAQ show={showFAQ} />
        {/* Contact CTA Section (toggle) */}
        <ContactCTA show={showContactCTA} email={contactEmail} />
      </main>
      <Footer />
    </div>
  );
}
