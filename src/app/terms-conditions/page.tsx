import Link from "next/link";

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Termini e Condizioni</h1>
      <div className="prose mx-auto text-[6b6b7b] leading-relaxed">
        <p>Questi termini e condizioni regolano l'utilizzo del sito web di BlueDesign. Accedendo al sito, l'utente accetta di essere vincolato da questi termini.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Utilizzo del sito</h2>
        <p>L'utente si impegna a utilizzare il sito esclusivamente per scopi leciti e in conformità con questi termini e tutte le leggi applicabili.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Proprietà intellettuale</h2>
        <p>Tutti i contenuti del sito, inclusi testi, immagini, loghi e grafica, sono di proprietà esclusiva di BlueDesign o dei suoi licenzianti e sono protetti dalle leggi sul diritto d'autore.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Limitazione di responsabilità</h2>
        <p>BlueDesign non sarà responsabile per qualsiasi danno diretto, indiretto, incidentale, consequenziale o punitivo derivante dall'utilizzo o dall'impossibilità di utilizzare il sito.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Legge applicabile</h2>
        <p>Questi termini e condizioni sono regolati e interpretati in conformità con le leggi della Repubblica Italiana.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Modifiche ai termini</h2>
        <p>BlueDesign si riserva il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno effettive immediatamente dopo la pubblicazione sul sito.</p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#c9a962] hover:text-white transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}