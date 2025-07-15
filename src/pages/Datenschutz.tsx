
export default function Datenschutz() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      <p className="mb-6">
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz "Daten") innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte auf.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Verantwortlicher</h2>
      <p className="mb-6">
        Konstantin Kaufmann<br />
        Kaufmann Health (Einzelunternehmen)<br />
        Billackerweg 1<br />
        64646 Heppenheim<br />
        E-Mail: <a className="text-accent underline" href="mailto:hello@kaufmann-health.de">hello@kaufmann-health.de</a>
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Verarbeitete Daten & Zwecke</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Nutzungsdaten (z.B. besuchte Seiten, Zugriffszeiten)</li>
        <li>Kommunikationsdaten (z.B. E-Mail, IP-Adresse)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Hosting & Infrastruktur</h2>
      <p className="mb-6">Die Website wird bei Cloudflare Pages und GitHub gehostet. Die Server befinden sich in der EU oder den USA. Es gelten die Datenschutzbestimmungen dieser Anbieter.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Analyse-Tools</h2>
      <p className="mb-6">Wir nutzen Google Analytics zur Analyse des Nutzerverhaltens. Die Daten werden anonymisiert ausgewertet. Sie können der Erfassung jederzeit widersprechen.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Betroffenenrechte</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Auskunft, Berichtigung, Löschung</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Widerspruchsrecht</li>
        <li>Beschwerderecht bei der Aufsichtsbehörde</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Kontakt</h2>
      <p>Bei Fragen wenden Sie sich bitte an: <a className="text-accent underline" href="mailto:hello@kaufmann-health.de">hello@kaufmann-health.de</a></p>
    </main>
  );
}
