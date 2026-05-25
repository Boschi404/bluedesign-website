"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const promozioni = [
  {
    id: 1,
    title: "Lampadario sospensione Spirito di Venezia",
    description: "Lampada sospensione Spirito di Venezia in vetro soffiato per ambienti di design.",
    originalPrice: 2845,
    discountedPrice: 850,
    discount: 70,
    images: ["/images/products/lampada-spirito-venezia.jpg"],
    stock: 1,
    views: 47,
    category: "Illuminazione",
  },
    {
      id: 2,
      title: "Lampadario sospensione Hungry 100x150",
      description: "Lampada sospensione Hungry 100x150 per un effetto scenografico e moderno.",
      originalPrice: 1840,
      discountedPrice: 730,
      discount: 60,
      images: [
        "/images/products/lampada-hungry-1.jpg",
        "/images/products/lampada-hungry-2.jpg"
      ],
      stock: 1,
      views: 63,
      category: "Illuminazione",
    },
    {
      id: 3,
      title: "Cassaforte Vittoriana 1/2 800 nero con chiavi originali",
      description: "Cassaforte Vittoria 1/2 800 in nero con chiavi originali e finiture di pregio.",
      originalPrice: 2200,
      discountedPrice: 1320,
      discount: 40,
      images: [
        "/images/products/cassaforte-nera-1.jpeg",
        "/images/products/cassaforte-nera-2.jpeg"
      ],
      stock: 1,
      views: 89,
      category: "Cucine",
    },
    {
      id: 4,
      title: "Cassaforte Vittoriana 1/2 800 rossa con chiavi interne",
      description: "Cassaforte Vittoriana 1/2 800 rossa con chiavi interne e design classico.",
      originalPrice: 2700,
      discountedPrice: 1620,
      discount: 40,
      images: [
        "/images/products/cassaforte-rossa-1.jpg",
        "/images/products/cassaforte-rossa-2.jpg"
      ],
      stock: 2,
      views: 34,
      category: "Cucine",
    },
    {
      id: 5,
      title: "Tavolo bandelle essenza rovere primi del '900 75×35+36+36",
      description: "Tavolo in rovere con bandelle estensibili, stile primi del '900.",
      originalPrice: 745,
      discountedPrice: 440,
      discount: 40,
      images: [
        "/images/products/tavolo-bandelle-900-1.jpg",
        "/images/products/tavolo-bandelle-900-2.jpg",
        "/images/products/tavolo-bandelle-900-3.jpg"
      ],
      stock: 1,
      views: 112,
      category: "Tavoli",
    },
    {
      id: 6,
      title: "Pouff bambini in pelle Nabuk scamosciata",
      description: "Pouff per bambini in pelle Nabuk scamosciata morbida e resistente.",
      originalPrice: 424,
      discountedPrice: 210,
      discount: 50,
      images: ["/images/products/sacco-nabuk.jpeg"],
      stock: 1,
      views: 28,
      category: "Living",
    },
    {
      id: 7,
      title: "Cucina Officine Fanesi Total Inox L 3008 con Gaggenau",
      description: "Cucina Total Inox Officine Fanesi L 3008 con piano a induzione Gaggenau, lavastoviglie e cappa.",
      originalPrice: 24850,
      discountedPrice: 12400,
      discount: 50,
      images: [
        "/images/products/cucina-officine-fanesi-1.jpeg",
        "/images/products/cucina-officine-fanesi-2.jpeg",
        "/images/products/cucina-officine-fanesi-3.jpeg"
      ],
      stock: 1,
      views: 45,
      category: "Cucine",
    },
    {
      id: 8,
      title: "Divano Meta in tessuto",
      description: "Divano Meta L in pelle, perfetto per salotti moderni e raffinati.",
      originalPrice: 2450,
      discountedPrice: 1470,
      discount: 40,
      images: [
        "/images/products/divano-meta-1.jpeg",
        "/images/products/divano-meta-2.jpeg"
      ],
      stock: 1,
      views: 56,
      category: "Divani",
    },
    {
      id: 9,
      title: "Poltrona Charles Eames palissandro e pelle nera con pouf",
      description: "Poltrona Charles Eames con struttura in palissandro e rivestimento in pelle nera, completa di pouf.",
      originalPrice: 5480,
      discountedPrice: 3280,
      discount: 40,
      images: [
        "/images/products/poltrona-charles-eames-1.jpg",
        "/images/products/poltrona-charles-eames-2.jpg"
      ],
      stock: 1,
      views: 78,
      category: "Poltrone",
    },
    {
      id: 10,
      title: "Tavolo Fumo Plinio base metallo nero cristallo fumé 80×80",
      description: "Tavolo Plinio con base in metallo nero e piano in cristallo fumé 80×80.",
      originalPrice: 1260,
      discountedPrice: 630,
      discount: 50,
      images: ["/images/products/tavolo-cristallo-fume-1.jpg"],
      stock: 1,
      views: 34,
      category: "Tavoli",
    },
    {
      id: 11,
      title: "Pouff tondo pelle blu Saarinen",
      description: "Pouff tondo in pelle blu con dettagli Saarinen e cordonatura bianca.",
      originalPrice: 1180,
      discountedPrice: 590,
      discount: 50,
      images: ["/images/products/pouffe-saarinen-1.jpg"],
      stock: 1,
      views: 67,
      category: "Living",
    },
    {
      id: 12,
      title: "Poltroncina Midj doppio rivestimento noce",
      description: "Poltroncina Midj con doppio rivestimento e struttura in essenza di noce.",
      originalPrice: 588,
      discountedPrice: 295,
      discount: 50,
      images: [
        "/images/products/poltroncina-midj-sonny-1.jpg",
        "/images/products/poltroncina-midj-sonny-2.jpg"
      ],
      stock: 2,
      views: 23,
      category: "Poltrone",
    },
    {
      id: 13,
      title: "Libreria Extendo System in cristallo extra chiaro",
      description: "Libreria Extendo System in cristallo extra chiaro laccato bianco con contenitori.",
      originalPrice: 5850,
      discountedPrice: 3200,
      discount: 45,
      images: [
        "/images/products/libreria-extendo-system-1.jpg",
        "/images/products/libreria-extendo-system-2.jpg"
      ],
      stock: 1,
      views: 89,
      category: "Living",
    },
    {
      id: 14,
      title: "Tavolino tondo Tulip Saarinen marmo bianco Carrara",
      description: "Tavolino Tulip Saarinen con piano in marmo bianco Carrara e base in alluminio.",
      originalPrice: 802,
      discountedPrice: 480,
      discount: 40,
      images: [
        "/images/products/tavolino-saarinen-tulip.jpg"
      ],
      stock: 1,
      views: 45,
      category: "Tavoli",
    },
    {
      id: 15,
      title: "2 sedie in ecopelle Zamagna",
      description: "Coppia di sedie in ecopelle Zamagna, eleganti e comode.",
      originalPrice: 326,
      discountedPrice: 160,
      discount: 50,
      images: [
        "/images/products/sedia-zamagna-1.jpg",
        "/images/products/sedia-zamagna-2.jpg"
      ],
      stock: 1,
      views: 12,
      category: "Sedute",
    },
    {
      id: 16,
      title: "Pouff quadrato contenitore in velluto 50×47 H46",
      description: "Pouff quadrato contenitore in velluto, 50×47 H46, perfetto per salotti e camere.",
      originalPrice: 345,
      discountedPrice: 170,
      discount: 50,
      images: [
        "/images/products/pouffe-quadrato.jpeg",
        "/images/products/pouffe-quadrato-2.jpeg"
      ],
      stock: 1,
      views: 34,
      category: "Living",
    },
    {
      id: 17,
      title: "Comodino Calton laccato opaco con 2 cassetti",
      description: "Comodino Calton laccato opaco con due cassetti e finiture morbide.",
      originalPrice: 712,
      discountedPrice: 390,
      discount: 45,
      images: [
        "/images/products/comodino-calton-1.jpeg",
        "/images/products/comodino-calton-2.jpeg",
        "/images/products/comodino-calton-3.jpeg"
      ],
      stock: 1,
      views: 56,
      category: "Comodini",
    },
    {
      id: 18,
      title: "Cucina Linea Pure",
      description: "Cucina Linea Pure moderna e funzionale, con finiture eleganti.",
      originalPrice: 52495,
      discountedPrice: 20900,
      discount: 60,
      images: [
        "/images/products/cucina-linea-pure-1.jpg",
        "/images/products/cucina-linea-pure-2.jpg",
        "/images/products/cucina-linea-pure-3.jpg",
        "/images/products/cucina-linea-pure-4.jpg",
        "/images/products/cucina-linea-pure-5.jpg",
        "/images/products/cucina-linea-pure-6.jpg",
        "/images/products/cucina-linea-pure-7.jpg",
        "/images/products/cucina-linea-pure-8.jpg",
        "/images/products/cucina-linea-pure-9.jpg",
        "/images/products/cucina-linea-pure-10.jpg"
      ],
      stock: 1,
      views: 156,
      category: "Cucine",
    },
    {
      id: 19,
      title: "Cucina Touch",
      description: "Cucina Touch moderna con design minimal e dettagli raffinati.",
      originalPrice: 38450,
      discountedPrice: 15300,
      discount: 60,
      images: [
        "/images/products/cucina-touch-1.jpg",
        "/images/products/cucina-touch-2.jpg",
        "/images/products/cucina-touch-3.jpg",
        "/images/products/cucina-touch-4.jpg",
        "/images/products/cucina-touch-5.jpg",
        "/images/products/cucina-touch-6.jpg",
        "/images/products/cucina-touch-7.jpg"
      ],
      stock: 1,
      views: 134,
      category: "Cucine",
    },
    {
      id: 20,
      title: "Cucina Lounge",
      description: "Cucina Lounge elegante con finiture di alta gamma.",
      originalPrice: 46127,
      discountedPrice: 18500,
      discount: 60,
      images: [
        "/images/products/cucina-lounge-1.jpg",
        "/images/products/cucina-lounge-2.jpg",
        "/images/products/cucina-lounge-3.jpg",
        "/images/products/cucina-lounge-4.jpg",
        "/images/products/cucina-lounge-5.jpg",
        "/images/products/cucina-lounge-6.jpg"
      ],
      stock: 1,
      views: 98,
      category: "Cucine",
    },
    {
      id: 21,
      title: "Letto Felis Bowie con contenitore rialzato",
      description: "Letto Felis Bowie con contenitore rialzato e materasso ortopedico.",
      originalPrice: 4480,
      discountedPrice: 2650,
      discount: 40,
      images: [
        "/images/products/letto-felis-bowie-1.png",
        "/images/products/letto-felis-bowie-2.png",
        "/images/products/letto-felis-bowie-3.png"
      ],
      stock: 1,
      views: 78,
      category: "Letti",
    },
    {
      id: 22,
      title: "Divano Felis Larson",
      description: "Divano Felis Larson elegante e confortevole per living di carattere.",
      originalPrice: 3768,
      discountedPrice: 2260,
      discount: 40,
      images: ["/images/products/divano.png"],
      stock: 1,
      views: 89,
      category: "Divani",
    },
    {
      id: 23,
      title: "Armadio Linea 120 3 vani laccato opaco con cassettiera",
      description: "Armadio Linea 120 in laccato opaco con 3 vani, cassettiera e portacamicie.",
      originalPrice: 4888,
      discountedPrice: 2430,
      discount: 50,
      images: ["/images/products/armadio-linea-120.png"],
      stock: 1,
      views: 67,
      category: "Armadi",
    },
  {
    id: 24,
    title: "Pouff contenitore in velluto con apertura a ribalta",
    description: "Pouff contenitore in velluto con apertura a ribalta, comodo e raffinato.",
    originalPrice: 898,
    discountedPrice: 270,
    discount: 70,
    images: ["/images/products/pouffe-rettangolare-velluto.jpg"],
    stock: 1,
    views: 123,
    category: "Living",
  },
    {
      id: 25,
      title: "Tavolo cucina noce provenienza Spagna con cassetto e allunga",
      description: "Tavolo cucina in noce spagnolo con cassetto e allunga 132+30×64.",
      originalPrice: 1430,
      discountedPrice: 715,
      discount: 50,
      images: [
        "/images/products/tavolo-spagna-1.jpg",
        "/images/products/tavolo-spagna-2.jpg",
        "/images/products/tavolo-spagna-3.jpg"
      ],
      stock: 1,
      views: 45,
      category: "Tavoli",
    },
    {
      id: 26,
      title: "Bagno Arteba laccato opaco con specchio retroilluminato",
      description: "Bagno Arteba laccato opaco con lavabo, miscelatore e specchio retroilluminato.",
      originalPrice: 3985,
      discountedPrice: 1990,
      discount: 50,
      images: [
        "/images/products/bagno-arteba-2.jpg",
        "/images/products/bagno-arteba-3.jpg",
        "/images/products/bagno-arteba-4.jpg"
      ],
      stock: 1,
      views: 67,
      category: "Bagni",
    },
];

export default function Promozioni() {
type Promozione = (typeof promozioni)[number];

type PromozioneWithImages = Promozione & { images: string[] };

   const [selectedCategory, setSelectedCategory] = useState("Tutti");
   const [selectedProduct, setSelectedProduct] = useState<PromozioneWithImages | null>(null);

   const [currentImageIndex, setCurrentImageIndex] = useState(0);


  // Close overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProduct) {
        setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const categories = ["Tutti", "Cucine", "Divani", "Poltrone", "Tavoli", "Living", "Letti", "Armadi", "Bagni", "Comodini", "Sedute", "Illuminazione"];

  const filteredProducts = selectedCategory === "Tutti" 
    ? promozioni 
    : promozioni.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      {/* Hero Section - Enhanced with More Content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/bagno-arteba-2.jpg"
            alt="Arredamento di lusso"
            fill
            className="object-cover blur-sm scale-110"
            priority
          />
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/90 via-[#0a0a0f]/70 to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 pt-28 sm:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Sconti fino al <span className="text-[#c9a962] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">70%</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#a0a0a0] text-lg sm:text-xl max-w-2xl mx-auto mb-4">
              <span className="text-white font-semibold">Cucine, armadi, letti, divani, poltrone, pouf</span> e tantissimi complementi in esposizione.
            </p>
            <p className="text-[#c9a962] text-base sm:text-lg font-medium mb-8">
              Professionalità da oltre 35 anni • Consulenza anche presso Vostro domicilio
            </p>

            {/* Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1f]/80 backdrop-blur-sm rounded-lg border border-white/[0.06]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white text-xs sm:text-sm">Showroom Milano</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1f]/80 backdrop-blur-sm rounded-lg border border-white/[0.06]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white text-xs sm:text-sm">Studio di Architettura Besana</span>
              </div>
            </motion.div>

            {/* Stock Warning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">
                Solo 26 pezzi disponibili in esposizione!
              </span>
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <Link
                href="tel:+390239326173"
                className="inline-flex items-center gap-3 btn btn-primary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Chiama Ora: 02 39326173
              </Link>
              <Link
                href="#prodotti"
                className="inline-flex items-center gap-3 btn btn-secondary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Vedi Offerte
              </Link>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 text-[#6b6b7b] text-sm mb-4"
            >
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Piazzale Lugano 6/10, Milano
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Studio di Architettura Besana, Via Luigi Viarana 26, Besana in Brianza
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Lun: 15:30-19:00
                Mar-Sab: 9:00-13:00 • 15:30-19:00
              </span>
            </motion.div>

            {/* Social Proof */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[#6b6b7b] text-sm"
            >
              🔥 127 persone hanno visitato questa pagina oggi
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="prodotti" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Prodotti in Promozione
            </h2>
            <p className="text-[#a0a0a0] text-base sm:text-lg max-w-2xl mx-auto">
               Cucine, armadi, letti, divani, poltrone, pouf e tantissimi complementi d&apos;arredo in esposizione.
              Approfitta degli sconti esclusivi - Professionalità da oltre 35 anni!
            </p>
          </motion.div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#c9a962] text-black"
                    : "bg-[#1a1a1f] text-[#a0a0a0] hover:bg-[#2a2a2f] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
             {filteredProducts.map((product, _) => (
              <div
                key={product.id}
                className="group relative glass-card rounded-lg overflow-hidden flex flex-col"
              >
                {/* Discount Badge - More Prominent */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-sm sm:text-base font-bold px-4 py-2 rounded-lg shadow-lg animate-pulse">
                    -{product.discount}% SCONTO
                  </div>
                </div>

                 {/* Image */}
                  <div 
                    className="relative h-[368px] sm:h-[415px] overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product as PromozioneWithImages);
                      setCurrentImageIndex(0);
                    }}
                  >
                    {product.images?.length > 1 ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={product.images?.[0] || ""}
                          alt={product.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                        {/* Mini carousel indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {(product.images || []).map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 bg-white/50 rounded-full transition-all duration-300 ${
                                index === 0 ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={product.images?.[0] || ""}
                        alt={product.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-[#6b6b7b] text-xs sm:text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price Section - More Prominent */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#6b6b7b] text-lg line-through">
                        €{product.originalPrice}
                      </span>
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-[#c9a962]">
                        €{product.discountedPrice}
                      </span>
                      <span className="text-green-400 text-sm font-medium">
                        Risparmi €{(product.originalPrice - product.discountedPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Stock Warning */}
                  {product.stock === 1 && (
                    <div className="flex items-center gap-2 mb-4 text-red-400 text-xs font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                      Solo 1 rimasto!
                    </div>
                  )}

                  {/* CTA - Always at bottom */}
                  <div className="mt-auto">
                    <Link
                      href="tel:+390239326173"
                      className="w-full btn btn-primary text-center block text-lg font-bold"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        VISITA IN SHOWROOM
                      </span>
                    </Link>
                    <p className="text-center text-[#6b6b7b] text-xs mt-2">
                      Oppure chiamaci: 02 39326173
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1b1b1b]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
               Non perdere l&apos;occasione — Esaurimento scorte garantito
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="tel:+390239326173"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Chiama Ora: 02 39326173
              </Link>
              <Link
                href="/contatti"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Prenota Visita
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

             {/* Image Overlay */}
       {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProduct(null);
              }
            }}
          >
           <div className="relative max-w-5xl mx-4 h-[85vh]">
             {/* Close Button */}
             <button
               onClick={() => setSelectedProduct(null)}
               className="absolute top-2 right-2 z-10 p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-all"
               aria-label="Chiudi"
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M18 6l-12 12M6 6l12 12" />
               </svg>
             </button>

             {/* Image Carousel */}
             <div className="relative h-full w-full flex items-center justify-center">
                 <Image
                   src={selectedProduct.images?.[currentImageIndex] || ""}
                   alt={selectedProduct.title}
                   width={800}
                   height={600}
                   className="object-contain rounded-lg max-h-full max-w-full"
                   loading="lazy"
                 />

               {/* Navigation Arrows */}
               {(selectedProduct.images || []).length > 1 && (
                 <>
                   <button
                     onClick={() =>
                       setCurrentImageIndex(
                         (prev) =>
                           (prev - 1 + (selectedProduct.images || []).length) % (selectedProduct.images || []).length
                       )
                     }
                     className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-all"
                   >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M15 18l-6-6 6-6" />
                     </svg>
                   </button>
                   <button
                     onClick={() =>
                       setCurrentImageIndex(
                         (prev) => (prev + 1) % (selectedProduct.images || []).length
                       )
                     }
                     className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-all"
                   >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M9 6l6 6-6 6" />
                     </svg>
                   </button>
                 </>
               )}

               {/* Image Counter */}
               {(selectedProduct.images || []).length > 1 && (
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/30 px-3 py-1 rounded">
                   {currentImageIndex + 1} / {(selectedProduct.images || []).length}
                 </div>
               )}

               {/* Product Info */}
               <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur p-4 rounded-lg">
                 <h3 className="text-lg font-semibold text-white mb-2">{selectedProduct.title}</h3>
                 <p className="text-[#a0a0a0] text-sm mb-4 line-clamp-3">{selectedProduct.description}</p>
                 <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-bold text-[#c9a962]">€{selectedProduct.discountedPrice}</span>
                   <span className="text-[#6b6b7b] text-xs line-through">€{selectedProduct.originalPrice}</span>
                   <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-{selectedProduct.discount}%</span>
                 </div>
               </div>
               {/* Product JSON-LD */}
               <script
                 type="application/ld+json"
                 dangerouslySetInnerHTML={{
                   __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "Product",
                     name: selectedProduct.title,
                     image: (selectedProduct.images || []).map((p) => (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bluedesign.biz") + p),
                     description: selectedProduct.description,
                     sku: String(selectedProduct.id),
                     brand: { "@type": "Brand", name: "BlueDesign" },
                     offers: {
                       "@type": "Offer",
                       url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bluedesign.biz") + "/promozioni#product-" + selectedProduct.id,
                       priceCurrency: "EUR",
                       price: selectedProduct.discountedPrice,
                       availability: selectedProduct.stock && selectedProduct.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                     },
                   }),
                 }}
               />
              </div>
            </div>
          </div>
        )}


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
    </main>
  );
}

