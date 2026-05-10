import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { MapPinIcon, ClockIcon, BanknotesIcon, PhoneIcon, ArrowRightIcon, CheckCircleIcon, StarIcon, HomeIcon, SparklesIcon } from "@heroicons/react/24/outline";

export const metadata = { 
  title: 'Pacchetto Completo Ristrutturazione + Arredo Milano | Chiavi in Mano',
  description: 'Pacchetto completo ristrutturazione e arredo a Milano. BlueDesign dal 1990.'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pacchetto Completo Ristrutturazione + Arredo',
  description: 'Ristrutturazione completa + arredo a Milano.',
  provider: { '@type': 'HomeIconAndConstructionBusiness', name: 'BlueDesign S.r.l.', telephone: '+390239326172' },
  areaServed: ['Milano'],
  serviceType: 'ConstructionService',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/products/bagno.jpg" 
            alt="Pacchetto completo ristrutturazione" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              <span className="text-white/80 text-xs font-light tracking-[0.15em] uppercase">
                Arredamento di Design dal 1990
              </span>
            </div>
            
            <div className="mb-8">
              <Image 
                src="/images/logo/logo-white.png" 
                alt="BlueDesign" 
                width={400} 
                height={160} 
                className="mx-auto"
                priority
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
              Pacchetto Completo <span className="font-semibold text-[#c9a962]">Milano</span>
            </h1>
            
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Ristrutturazione + Arredo <span className="text-white font-medium">chiavi in mano</span>. Tutto incluso.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10 text-white/40 text-sm uppercase tracking-[0.1em]">
              <span className="flex items-center gap-2">
                <span className="text-[#c9a962] font-semibold">35+</span> Anni Esperienza
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#c9a962] font-semibold">500+</span> Progetti
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="tel:+390239326172" 
                className="btn btn-primary inline-flex text-base px-10 py-4"
                style={{ boxShadow: "0 20px 40px rgba(201,169,98,0.25)" }}
              >
                 Chiama ora
              </Link>
              <Link 
                href="/contatti" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base px-6 py-4 transition-colors"
              >
                Preventivo Gratuito
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-xs uppercase tracking-[0.2em]">Scopri</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">Cosa è incluso</h2>
            <p className="text-white/40 max-w-xl mx-auto">Tutto quello che serve per la tua casa dei sogni</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Progettazione", d: "Architettonica e interni con render 3D" },
              { t: "Ristrutturazione", d: "Completa con impianti elettrici e idraulici" },
              { t: "Cucina", d: "Cucine su misura Composit o Officine Fanesi" },
              { t: "Living", d: "Arredo zona giorno Olivieri, Fimar" },
              { t: "Zona Notte", d: "Camere, armadi, letti su misura" },
              { t: "Bagno", d: "Arredo bagno completo" },
              { t: "Illuminazione", d: "Progettazione luci Karman, Icone" },
              { t: "Montaggio", d: "Consegna e posa professionale" },
              { t: "Assistenza", d: "Supporto post-vendita" }
            ].map((item, index) => (
              <div key={index} className="group bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-6 hover:border-[#c9a962]/30 transition-all duration-500">
                <h3 className="text-xl font-medium text-[#c9a962] mb-4 group-hover:translate-x-2 transition-transform">{item.t}</h3>
                <p className="text-white/50">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12121a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">Perché scegliere il pacchetto completo</h2>
            <p className="text-white/40 max-w-xl mx-auto">Vantaggi esclusivi per te</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0f] rounded-2xl p-6 border border-white/[0.06]">
              <h3 className="text-xl font-medium text-[#c9a962] mb-3">Un solo interlocutore</h3>
              <p className="text-white/50">Parli con noi per tutto. Zero stress di coordinamento tra diverse imprese.</p>
            </div>
            <div className="bg-[#0a0a0f] rounded-2xl p-6 border border-white/[0.06]">
              <h3 className="text-xl font-medium text-[#c9a962] mb-3">Prezzo fisso</h3>
              <p className="text-white/50">Un solo preventivo per tutto. Nessuna sorpresa.</p>
            </div>
            <div className="bg-[#0a0a0f] rounded-2xl p-6 border border-white/[0.06]">
              <h3 className="text-xl font-medium text-[#c9a962] mb-3">Coerenza stilistica</h3>
              <p className="text-white/50">Tutto è progettato insieme: ristrutturazione e arredo in perfetta armonia.</p>
            </div>
            <div className="bg-[#0a0a0f] rounded-2xl p-6 border border-white/[0.06]">
              <h3 className="text-xl font-medium text-[#c9a962] mb-3">Tempi certi</h3>
              <p className="text-white/50">Consegna in una data precisa. Casa pronta per quella data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "📍", title: "Zone Servite", desc: "Milano, Monza, Brianza" },
              { icon: "⏱️", title: "Tempi", desc: "2-6 mesi" },
              { icon: "💰", title: "Prezzi", desc: "Da 500€/mq" },
              { icon: "✅", title: "Garanzia", desc: "2 anni su tutto" }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-[#0a0a0f] rounded-2xl border border-white/[0.06]">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">La casa dei tuoi sogni</h2>
          <p className="text-white/40 mb-10 max-w-xl mx-auto">Un solo interlocutore per tutto</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="tel:+390239326172" className="btn btn-primary text-lg px-10 py-5">
               02 39 32 61 72
            </Link>
            <Link href="/contatti" className="btn btn-secondary text-lg px-10 py-5">
              Prenota sopralluogo gratuito
            </Link>
          </div>
          
          <p className="text-white/30 text-sm mt-8">📍 Piazzale Lugano 6/10, Milano • Lun-Sab: 9:00-12:30 • 14:30-19:30</p>
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