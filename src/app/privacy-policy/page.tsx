import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <div className="prose mx-auto text-[6b6b7b] leading-relaxed">
        <p>Questa pagina descrive come raccogliamo, utilizziamo e proteggiamo le informazioni personali degli utenti del nostro sito web.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Informazioni raccolte</h2>
        <p>Raccogliamo informazioni personali come nome, indirizzo email, numero di telefono e altri dati forniti volontariamente dagli utenti attraverso i nostri moduli di contatto.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Utilizzo delle informazioni</h2>
        <p>Le informazioni raccolte vengono utilizzate esclusivamente per rispondere alle richieste degli utenti, fornire informazioni sui nostri servizi e migliorare la nostra comunicazione.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Condivisione delle informazioni</h2>
        <p>Non condividiamo le informazioni personali con terze parti, salvo quando richiesto dalla legge o necessario per fornire i nostri servizi.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Sicurezza</h2>
        <p>Adottiamo misure di sicurezza appropriate per proteggere le informazioni personali da accessi non autorizzati, alterazioni, divulgazioni o distruzioni.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Diritti degli utenti</h2>
        <p>Gli utenti hanno il diritto di accedere, modificare o cancellare le proprie informazioni personali contattandoci tramite i canali indicati nel sito.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Modifiche alla privacy policy</h2>
        <p>Ci riserviamo il diritto di modificare questa privacy policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.</p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#c9a962] hover:text-white transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}