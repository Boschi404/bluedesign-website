import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export const metadata = { 
  title: 'Tutti i Servizi | BlueDesign',
  description: 'Scopri tutti i servizi di progettazione e ristrutturazione offerti da BlueDesign a Milano.'
};

const services = {
  "Cucine": [
    { href: "/progettazione-cucine-su-misura-milano", title: "Cucine su Misura", desc: "Progettazione professionale con rendering 3D" },
    { href: "/ristrutturazione-cucine-complete-milano", title: "Ristrutturazione Cucine Complete", desc: "Servizio chiavi in mano" },
    { href: "/cucine-moderne-minimal-milano", title: "Cucine Moderne Minimal", desc: "Design minimal e funzionale" },
    { href: "/cucine-classiche-tradizionali-milano", title: "Cucine Classiche Tradizionali", desc: "Eleganza senza tempo" },
    { href: "/showroom-cucine-composit-milano", title: "Showroom Cucine Composit", desc: "Showroom esclusivo" }
  ],
  "Bagni": [
    { href: "/bagni-moderni-ristrutturazione-milano", title: "Bagni Moderni e Ristrutturazione", desc: "Progettazione e ristrutturazione" },
    { href: "/bagni-lusso-spa-milano", title: "Bagni di Lusso e Spa", desc: "Design esclusivo per il tuo benessere" }
  ],
  "Living e Zona Giorno": [
    { href: "/progettazione-living-zona-giorno-milano", title: "Progettazione Living e Zona Giorno", desc: "Design per il soggiorno" },
    { href: "/zona-notte-camere-let-milano", title: "Zona Notte e Camere da Letto", desc: "Armadi e mobili su misura" },
    { href: "/camerette-bambini-ragazzi-milano", title: "Camerette Bambini e Ragazzi", desc: "Spazi creativi per i più piccoli" },
    { href: "/illuminazione-interni-milano", title: "Illuminazione Interni", desc: "Progettazione luce professionale" }
  ],
  "Ristrutturazione": [
    { href: "/ristrutturazione-appartamento-milano", title: "Ristrutturazione Appartamento", desc: "Trasforma la tua casa" },
    { href: "/ristrutturazione-casa-chiavi-mano-milano", title: "Ristrutturazione Casa Chiavi in Mano", desc: "Servizio completo" },
    { href: "/ristrutturazione-senza-polvere-milano", title: "Ristrutturazione senza Polvere", desc: "Lavori puliti e rapidi" },
    { href: "/restyling-appartamento-milano", title: "Restyling Appartamento", desc: "Aggiorna i tuoi spazi" },
    { href: "/pacchetto-completo-ristrutturazione-arredo-milano", title: "Pacchetto Completo Ristrutturazione e Arredo", desc: "Tutto incluso" }
  ],
  "Progettazione e Consulenza": [
    { href: "/progettazione-uffici-spazi-commerciali-milano", title: "Progettazione Uffici e Spazi Commerciali", desc: "Ambienti di lavoro professionali" },
    { href: "/progettazione-interni-render-3d-milano", title: "Progettazione Interni e Render 3D", desc: "Visualizza il tuo progetto" },
    { href: "/consulenza-architettura-interni-milano", title: "Consulenza Architettura Interni", desc: "Consulenza professionale" },
    { href: "/progettazione-ville-atici-milano", title: "Progettazione Ville e Attici", desc: "Luxury design" },
    { href: "/arredo-negozi-locali-pubblici-milano", title: "Arredo Negozi e Locali Pubblici", desc: "Allestimenti professionali" }
  ],
  "Specializzati": [
    { href: "/fornitura-mobili-arredi-su-misura-milano", title: "Fornitura Mobili e Arredi su Misura", desc: "Mobili personalizzati" },
    { href: "/interni-ecosostenibili-green-design-milano", title: "Interni Ecosostenibili e Green Design", desc: "Design sostenibile" },
    { href: "/progettazione-disabili-accessibilita-milano", title: "Progettazione per Disabili e Accessibilità", desc: "Accessibilità garantita" }
  ]
};

export default function RoutePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      <section className="py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/10 rounded-full mb-6">
              <SparklesIcon className="w-4 h-4 text-[#c9a962]" />
              <span className="text-[#c9a962] text-sm font-medium">Tutti i Servizi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-white mb-4">
              I Nostri <span className="text-[#c9a962]">Servizi</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto">
              Scopri tutti i servizi di progettazione e ristrutturazione offerti da BlueDesign. 
              Ogni servizio è pensato per trasformare i tuoi spazi in ambienti unici e funzionali.
            </p>
          </div>
          
          <div className="space-y-16">
            {Object.entries(services).map(([category, items], catIndex) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a962]/30" />
                  <h2 className="text-2xl font-light text-white whitespace-nowrap px-4">{category}</h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a962]/30" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, idx) => (
                    <Link 
                      key={idx}
                      href={item.href}
                      className="group bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-6 hover:border-[#c9a962]/30 transition-all duration-500 hover:-translate-y-1"
                    >
                      <h3 className="text-lg font-medium text-white group-hover:text-[#c9a962] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-4">{item.desc}</p>
                      <div className="flex items-center text-[#c9a962] text-sm font-medium">
                        Scopri di più
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#0a0a0f] border-t border-white/[0.06]">
        <div className="container mx-auto px-4 text-center">
          <Image src="/images/logo/logo-white.png" alt="BlueDesign" width={150} height={60} className="mx-auto mb-4" />
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} BlueDesign Srl. Tutti i diritti riservati.</p>
          <p className="text-white/20 text-xs mt-2">Piazzale Lugano 6/10, 20158 Milano | P.IVA: 13364670151</p>
        </div>
      </footer>
    </main>
  );
}