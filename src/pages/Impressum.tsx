
export default function Impressum() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p className="mb-2 font-semibold">Angaben gemäß § 5 TMG:</p>
      <p className="mb-6">
        Konstantin Kaufmann<br />
        Kaufmann Health (Einzelunternehmen)<br />
        Billackerweg 1<br />
        64646 Heppenheim<br />
        Deutschland
      </p>
      <p className="mb-2 font-semibold">Kontakt:</p>
      <p className="mb-6">
        E-Mail: <a className="text-accent underline" href="mailto:hello@kaufmann-health.de">hello@kaufmann-health.de</a>
      </p>
      <p className="mb-2 font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
      <p className="mb-6">
        Konstantin Kaufmann, Anschrift wie oben
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
        Hinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
    </main>
  );
}
