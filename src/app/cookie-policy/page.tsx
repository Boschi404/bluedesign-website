import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Cookie Policy</h1>
      <div className="prose mx-auto text-[6b6b7b] leading-relaxed">
        <p>Questa cookie policy spiega come utilizziamo i cookie e tecnologie simili sul nostro sito web.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Cosa sono i cookie</h2>
        <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. Essi permettono al sito di riconoscere il dispositivo dell'utente e di ricordare determinate informazioni sulle sue preferenze o sulle azioni precedenti.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Tipi di cookie utilizzati</h2>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Cookie tecnici: necessari per il funzionamento base del sito.</li>
          <li>Cookie di preferenze: ricordano le scelte dell'utente per migliorare l'esperienza di navigazione.</li>
          <li>Cookie statistici: raccolgono informazioni anonime su come gli utenti utilizzano il sito.</li>
          <li>Cookie di marketing: utilizzati per mostrare pubblicità pertinenti agli interessi dell'utente.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-4">Gestione dei cookie</h2>
        <p>L'utente può gestire le proprie preferenze sui cookie attraverso le impostazioni del proprio browser. È possibile bloccare o eliminare i cookie, sebbene ciò possa influire sul funzionamento di alcune parti del sito.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Modifiche alla cookie policy</h2>
        <p>Ci riserviamo il diritto di modificare questa cookie policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.</p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#c9a962] hover:text-white transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}