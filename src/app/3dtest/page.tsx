"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const partnerLogos = [
  { src: "/images/comp-logos/logo-antares.png", alt: "Antares - Partner BlueDesign" },
  { src: "/images/comp-logos/logo-bosch.png", alt: "Bosch - Elettrodomestici di qualità" },
  { src: "/images/comp-logos/logo-composit.png", alt: "Composit - Cucine di design" },
  { src: "/images/comp-logos/logo-ergogreen.png", alt: "Ergogreen - Sostenibilità" },
  { src: "/images/comp-logos/logo-gaggenau.png", alt: "Gaggenau - Elettrodomestici di lusso" },
  { src: "/images/comp-logos/logo-glamora.png", alt: "Glamora - Design italiano" },
  { src: "/images/comp-logos/logo-icone.png", alt: "Icone - Arredamento contemporaneo" },
  { src: "/images/comp-logos/logo-midj.png", alt: "Midj - Sedute di design" },
  { src: "/images/comp-logos/logo-neff.png", alt: "Neff - Cucina professionale" },
  { src: "/images/comp-logos/logo-off-fanesi.png", alt: "Off Fanesi - Illuminazione" },
  { src: "/images/comp-logos/logo-orme.png", alt: "Orme - Arredamento classico" },
  { src: "/images/comp-logos/logo-pezzani.png", alt: "Pezzani - Cucine moderne" },
  { src: "/images/comp-logos/logo-siemens.png", alt: "Siemens - Tecnologia per la casa" },
  { src: "/images/comp-logos/logo-whirlpool.png", alt: "Whirlpool - Elettrodomestici" },
];

const services = [
  {
    id: 1,
    title: "Progettazione d'Interni",
    description: "Progettazione completa di spazi residenziali e commerciali.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    id: 2,
    title: "Cucine Composit",
    description: "Cucine di design firmate Composit.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    id: 3,
    title: "Ristrutturazione",
    description: "Restyling completo di ambienti esistenti.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
  },
];

const projects = [
  {
    id: 1,
    title: "Villa Paradiso",
    category: "Residenziale",
    location: "Milano",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: 2,
    title: "Loft City",
    category: "Residenziale",
    location: "Roma",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "Casa Elegance",
    category: "Residenziale",
    location: "Torino",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
];

export default function ThreeDTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroRotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar />

      {/* 3D Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
        {/* Video Background with 3D Effect */}
        <motion.div
          style={{
            y: heroY,
            rotateX: heroRotateX,
            scale: heroScale,
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              transform: `translateZ(-100px) scale(1.1)`,
              filter: "contrast(110%) brightness(70%)",
            }}
          >
            <source src="/images/background/2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        </motion.div>

        {/* 3D Floating Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28"
        >
          <div className="text-center" style={{ perspective: "500px" }}>
            {/* 3D Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              REALIZZA IL TUO SPAZIO IDEALE
            </motion.h1>

            {/* 3D Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg sm:text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-8"
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
            >
              Esperienza e Creatività per Trasformare i Tuoi Ambienti in Opere d'Arte
            </motion.p>

            {/* 3D CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link
                href="/#contatti"
                className="btn btn-primary inline-block"
                style={{
                  transform: "translateZ(30px)",
                  boxShadow: "0 20px 40px rgba(201,169,98,0.3)",
                }}
              >
                Richiedi Consulenza Gratuita
              </Link>
            </motion.div>
          </div>
        </motion.div>


      </section>

      {/* 3D Logo Strip */}
      <div
        className={`dual-logo-strip ${isAtTop ? "fixed bottom-0 left-0 right-0 z-50" : "relative"}`}
        style={{ perspective: "500px" }}
      >
        <div className="logo-strip" style={{ transformStyle: "preserve-3d" }}>
          {partnerLogos.map((logo, index) => (
            <motion.img
              key={`first-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="strip-img"
              style={{
                transform: `translateZ(${10 + index * 2}px) rotateY(${scrollY * 0.01 * (index + 1)}deg)`,
              }}
              loading="lazy"
            />
          ))}
        </div>
        <div className="logo-strip" style={{ transformStyle: "preserve-3d" }}>
          {partnerLogos.map((logo, index) => (
            <motion.img
              key={`second-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="strip-img"
              style={{
                transform: `translateZ(${10 + index * 2}px) rotateY(${scrollY * 0.01 * (index + 1)}deg)`,
              }}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* 3D Chi Siamo Section */}
      <section
        id="chi-siamo"
        className="relative py-24 bg-[#0a0a0f] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Image */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="relative aspect-[4/5] rounded-lg overflow-hidden"
                style={{
                  transform: `translateZ(50px) rotateY(${scrollY * 0.02}deg)`,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="BlueDesign studio showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* 3D Content */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                style={{
                  transform: `translateZ(30px)`,
                  textShadow: "0 15px 30px rgba(0,0,0,0.4)",
                }}
              >
                Un'eccellenza che nasce dalla passione
              </h2>
              <p
                className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed mb-8"
                style={{ transform: `translateZ(20px)` }}
              >
                BlueDesign nasce nel 1990 come evoluzione di un'esperienza familiare nel settore dell'arredamento.
                Da oltre tre decenni incarniamo l'essenza dell'architettura d'interni italiana.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Servizi Section */}
      <section
        id="servizi"
        className="relative py-24 bg-[#0a0a0f] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                transform: `translateZ(40px)`,
                textShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              I Nostri Servizi
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-lg overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${20 + index * 10}px) rotateY(${scrollY * 0.005 * (index + 1)}deg)`,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-[#6b6b7b] text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Progetti Section */}
      <section
        id="progetti"
        className="relative py-24 bg-[#0a0a0f] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                transform: `translateZ(40px)`,
                textShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              I Nostri Progetti
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-lg overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${20 + index * 10}px) rotateY(${scrollY * 0.005 * (index + 1)}deg)`,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[#c9a962] text-xs font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1">{project.title}</h3>
                    <p className="text-[#a0a0a0] text-sm">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Contatti Section */}
      <section
        id="contatti"
        className="relative py-24 bg-[#0a0a0f] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                transform: `translateZ(40px)`,
                textShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              Contattaci
            </h2>
            <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
              Siamo pronti ad ascoltare le tue esigenze. Prenota una consulenza gratuita.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 3D Form */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-lg"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(30px)`,
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
              }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 glass-input rounded-lg text-white placeholder-[#6b6b7b] focus:outline-none transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                      Cognome
                    </label>
                    <input
                      type="text"
                      id="surname"
                      className="w-full px-4 py-3 glass-input rounded-lg text-white placeholder-[#6b6b7b] focus:outline-none transition-colors"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 glass-input rounded-lg text-white placeholder-[#6b6b7b] focus:outline-none transition-colors"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#a0a0a0] mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 glass-input rounded-lg text-white placeholder-[#6b6b7b] focus:outline-none transition-colors resize-none"
                    placeholder="Raccontaci del tuo progetto..."
                  />
                </div>
                <button type="submit" className="w-full btn btn-primary">
                  Invia Messaggio
                </button>
              </form>
            </motion.div>

            {/* 3D Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="glass-card p-6 rounded-lg"
                style={{
                  transform: `translateZ(20px)`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h4 className="text-white font-semibold mb-2">Showroom</h4>
                <p className="text-[#a0a0a0] text-sm">
                  Piazzale Lugano 6/10<br />
                  20158 Milano MI
                </p>
              </div>
              <div
                className="glass-card p-6 rounded-lg"
                style={{
                  transform: `translateZ(25px)`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h4 className="text-white font-semibold mb-2">Telefono</h4>
                <p className="text-[#a0a0a0] text-sm">
                  02 39326172
                </p>
              </div>
              <div
                className="glass-card p-6 rounded-lg"
                style={{
                  transform: `translateZ(30px)`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-[#a0a0a0] text-sm">info@bluedesign.biz</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1b1b1b]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <p className="text-[#6b6b7b] text-sm">
            © {new Date().getFullYear()} BlueDesign Srl. Tutti i diritti riservati.
          </p>
          <p className="text-[#6b6b7b] text-xs mt-2">
            Piazzale Lugano 6/10, 20158 Milano
          </p>
        </div>
      </footer>

      {/* 3D Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </main>
  );
}
