"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const showroomCategories = [
  {
    id: 1,
    title: "Cucine",
    description: "Cucine di design firmate Composit, linee moderne con materiali pregiati",
    image: "/images/products/cucina-linea-pure-1.jpg",
    link: "#servizi",
  },
  {
    id: 2,
    title: "Living",
    description: "Divani, poltrone e salotti raffinati per ambienti esclusivi",
    image: "/images/projects/foto-6.png",
    link: "#servizi",
  },
  {
    id: 3,
    title: "Zona Notte",
    description: "Letti, armadi e camerette su misura per il riposo perfetto",
    image: "/images/products/letto-felis-bowie-1.png",
    link: "#servizi",
  },
  {
    id: 4,
    title: "Bagni",
    description: "Arredobagno completo con brand selezionati per il bagno moderno",
    image: "/images/projects/bagno.png",
    link: "#servizi",
  },
  {
    id: 5,
    title: "Illuminazione",
    description: "Sistemi illuminotecnici per creare atmosfere uniche",
    image: "/images/products/lampada-spirito-venezia.png",
    link: "#servizi",
  },
  {
    id: 6,
    title: "Camerette",
    description: "Arredamento camerette per bambini e ragazzi",
    image: "/images/products/cameretta.jpg",
    link: "#servizi",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Servizi() {
  return (
    <section id="servizi" className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Anchor for navbar 'Showroom' */}
        <div id="showroom" className="pointer-events-none scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-[#c9a962] text-xs sm:text-sm font-medium uppercase tracking-widest mb-4"
          >
            <span className="w-10 h-[1px] bg-[#c9a962]" />
            Showroom
            <span className="w-10 h-[1px] bg-[#c9a962]" />
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
            Esplora i Nostri <span className="text-[#c9a962] font-normal">Ambienti</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
            Scopri le nostre collezioni esposte nel showroom di Milano. 
            Ogni ambiente è curato nei minimi dettagli per ispirare il tuo progetto.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {showroomCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                  {category.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#c9a962]/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="#contatti"
            className="text-[#c9a962] hover:text-white text-base sm:text-lg transition-colors duration-300"
          >
            Prenota una visita nel nostro showroom
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
