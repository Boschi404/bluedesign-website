"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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

export default function Hero() {
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
    <section ref={containerRef} className="relative">
      {/* 3D Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
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
            {/* Main Badge - Clean & Elegant */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              <span className="text-white/80 text-xs font-light tracking-[0.15em] uppercase">
                Arredamento di Design dal 1990
              </span>
            </motion.div>

            {/* 3D Title - Elegant & Minimal */}
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
              style={{
                transformStyle: "preserve-3d",
                textShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              Realizza il tuo <span className="font-semibold">spazio ideale</span>
            </motion.h1>

            {/* 3D Subtitle - Clean */}
            <motion.p
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Progettazione personalizzata e renderizzazione 3D per trasformare i tuoi ambienti in esperienze uniche. Ogni dettaglio curato con precisione artigianale.
            </motion.p>

            {/* Clean CTA - Single Primary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/#contatti"
                className="btn btn-primary inline-flex text-base sm:text-lg px-10 py-4"
                style={{
                  transform: "translateZ(30px)",
                  boxShadow: "0 20px 40px rgba(201,169,98,0.25)",
                }}
              >
                Prenota una Consulenza
              </Link>
              <Link
                href="/promozioni"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base sm:text-lg px-6 py-4 transition-colors duration-300"
              >
                Scopri le Offerte
                <span className="text-lg">→</span>
              </Link>
            </motion.div>

            {/* Quality Indicators - Clean Text Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-12 text-white/30 text-sm uppercase tracking-[0.15em]"
            >
              <span>Showroom Milano</span>
              <span className="hidden sm:inline">•</span>
              <span>35+ Anni di Esperienza</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/30 text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-10 sm:h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>

      {/* Logo Strip */}
      <div
        className={`dual-logo-strip ${isAtTop ? "fixed bottom-0 left-0 right-0 z-50" : "relative"}`}
      >
        <div className="logo-strip">
          {partnerLogos.map((logo, index) => (
            <img
              key={`first-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="strip-img"
              loading="lazy"
            />
          ))}
        </div>
        <div className="logo-strip">
          {partnerLogos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="strip-img"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
