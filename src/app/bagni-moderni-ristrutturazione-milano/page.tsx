import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { MapPinIcon, ClockIcon, BanknotesIcon, PhoneIcon, ArrowRightIcon, CheckCircleIcon, StarIcon, HomeIcon, SparklesIcon } from "@heroicons/react/24/outline";

export const metadata = { 
  title: 'Bagni Moderni Milano | Ristrutturazione Bagno',
  description: 'Progettazione e ristrutturazione bagni moderni a Milano.'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bagni Moderni e Ristrutturazione',
  provider: { '@type': 'HomeIconAndConstructionBusiness', name: 'BlueDesign S.r.l.', telephone: '+390239326173' },
  areaServed: ['Milano'],
  serviceType: 'ConstructionService',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/products/bagno.jpg" 
            alt="Bagni moderni Milano" 
            fill 
            className="object-cover"
            priority
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              <span className="text-white/80 text-xs font-light tracking-[0.15em] uppercase">
                Arredamento di Design dal 1990
              </span>
            </div>
            
            {/* Logo - Much Larger */}
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
            
            {/* Main Title - Premium Typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
              Bagni Moderni a <span className="font-semibold text-[#c9a962]">Milano</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Progettazione e ristrutturazione bagni di <span className="text-white font-medium">design e funzionalità</span>
            </p>
            
            {/* Quality Indicators - Premium Style */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10 text-white/40 text-sm uppercase tracking-[0.1em]">
              <span className="flex items-center gap-2">
                <span className="text-[#c9a962] font-semibold">35+</span> Anni Esperienza
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <span className="text-[#c9a962] font-semibold">500+</span> Progetti
              </span>

            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="tel:+390239326173" 
                className="btn btn-primary inline-flex text-base px-10 py-4"
                style={{ boxShadow: "0 20px 40px rgba(201,169,98,0.25)" }}
              >
                Chiama ora
              </Link>
              <Link 
                href="/contatti" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base px-6 py-4 transition-colors"
              >
                Consulenza gratuita
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-xs uppercase tracking-[0.2em]">Scopri</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* Sezione Soluzioni - Migliorata con icone e cards più visive */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/10 rounded-full mb-6">
              <SparklesIcon className="w-4 h-4 text-[#c9a962]" />
              <span className="text-[#c9a962] text-sm font-medium">Soluzioni su Misura</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">I tuoi problemi, la nostra soluzione</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Progettiamo bagni moderni che trasformano radicalmente il tuo spazio. Ogni progetto è unico, come unico sei tu.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: StarIcon, 
                title: "Hai un bagno vecchio e datato?", 
                desc: "Le piastrelle anni '70-'80 e i sanitari ingialliti rovinano l'estetica del tuo immobile? Realizziamo bagni moderni con design contemporaneo, trasformando completamente questo spazio.",
                highlight: "Design contemporaneo"
              },
              { 
                icon: HomeIcon, 
                title: "Vuoi ottimizzare uno spazio piccolo?", 
                desc: "Il bagno è troppo piccolo e non sai come sfruttarlo al meglio? Progettiamo soluzioni salvaspazio su misura che massimizzano ogni centimetro disponibile.",
                highlight: "Massima funzionalità"
              },
              { 
                icon: SparklesIcon, 
                title: "Hai bisogno di più funzionalità?", 
                desc: "Mancano spazi utili, l'illuminazione è inadeguata e servono migliorie? Progettiamo soluzioni personalizzate che rispondono a tutte le tue esigenze funzionali.",
                highlight: "Illuminazione professionale"
              },
              { 
                icon: HomeIcon, 
                title: "Vuoi creare un bagno ex novo?", 
                desc: "Desideri aggiungere un nuovo bagno alla tua abitazione? Ci occupiamo della gestione completa degli impianti e dell'arredo, seguendo tutte le normative vigenti.",
                highlight: "Gestione completa"
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-8 hover:border-[#c9a962]/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a962]/0 via-[#c9a962]/50 to-[#c9a962]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#c9a962]/10 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white group-hover:text-[#c9a962] transition-colors">{item.title}</h3>
                    <span className="inline-block mt-2 text-xs text-[#c9a962] bg-[#c9a962]/10 px-3 py-1 rounded-full">{item.highlight}</span>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed pl-15">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Informazioni con icone professionali */}
      <section className="py-24 bg-[#12121a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: MapPinIcon, title: "Dove operiamo", desc: "Milano, Lombardia, tutta Italia e Svizzera" },
              { icon: ClockIcon, title: "Tempi di consegna", desc: "12-20 settimane dalla conferma" },
              { icon: BanknotesIcon, title: "Investimento", desc: "Da 8.000€ a 35.000€" },
              { icon: PhoneIcon, title: "Orario consulenze", desc: "Lunedì-Sabato 10:00-13:00, 15:30-19:00" }
            ].map((item, index) => (
              <div key={index} className="group p-8 bg-[#0a0a0f] rounded-2xl border border-white/[0.06] hover:border-[#c9a962]/30 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-[#c9a962]/10 rounded-xl mb-5 group-hover:bg-[#c9a962]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#c9a962]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione CTA migliorata */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/10 rounded-full mb-6">
            <StarIcon className="w-4 h-4 text-[#c9a962]" />
            <span className="text-[#c9a962] text-sm font-medium">Consulenza Gratuita</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">Hai bisogno di rinnovare il bagno?</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Parla con i nostri progettisti. Ti offriamo un sopralluogo e un preventivo <span className="text-[#c9a962] font-semibold">gratuito e senza impegno</span>. 
            Scopriamo insieme il bagno dei tuoi sogni.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="tel:+390239326173" className="btn btn-primary text-lg px-10 py-5">
              Chiamaci ora
            </Link>
            <Link href="/contatti" className="btn btn-secondary text-lg px-10 py-5">
              Prenota sopralluogo gratuito
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Sopralluogo gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Preventivo senza impegno</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Garanzia 2 anni</span>
            </div>
          </div>
          
          <p className="text-white/30 text-sm mt-8">Piazzale Lugano 6/10, Milano | 02 39 32 61 73</p>
        </div>
      </section>

      {/* Footer */}
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

