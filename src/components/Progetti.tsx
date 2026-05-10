"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Progetto Residenziale",
    category: "Residenziale",
    location: "Milano",
    image: "/images/carousel/progettazione-render-bluedesign01-1024x450.jpg",
    description: "Progettazione personalizzata con materiali di pregio e design contemporaneo",
  },
  {
    id: 2,
    title: "Progetto Cucina",
    category: "Cucina",
    location: "Milano",
    image: "/images/carousel/progettazione-render-bluedesign03-1024x450.jpg",
    description: "Cucina moderna con isola centrale e mobili laccati",
  },
  {
    id: 3,
    title: "Progetto Living",
    category: "Living",
    location: "Milano",
    image: "/images/carousel/progettazione-render-bluedesign04-1024x450.jpg",
    description: "Zona living open space con divano e电视wall su misura",
  },
  {
    id: 4,
    title: "Progetto Camera",
    category: "Zona Notte",
    location: "Milano",
    image: "/images/carousel/progettazione-render-bluedesign06-1024x450.jpg",
    description: "Camera da letto con armadio a muro e design minimale",
  },
  {
    id: 5,
    title: "Progetto Bagno",
    category: "Bagno",
    location: "Milano",
    image: "/images/carousel/progettazione-render-bluedesign07-1024x450.jpg",
    description: "Bagno moderno con rivestimenti in gres porcellanato",
  },
  {
    id: 6,
    title: "Progetto Ufficio",
    category: "Commerciale",
    location: "Milano",
    image: "/images/carousel/progettazione-render-bluedesign08-1024x450.jpg",
    description: "Ufficio professionale con design minimale e funzionale",
  },
];

export default function Progetti() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="progetti"
      ref={containerRef}
      className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f] to-[#12121a]" />
        <motion.div style={{ y }} className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
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
            I Nostri Progetti
            <span className="w-10 h-[1px] bg-[#c9a962]" />
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
            Realtà <span className="text-[#c9a962] font-normal">Trasformate</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
            Alcuni dei nostri lavori recenti. Ogni progetto è una storia unica di design, passione e maestria artigianale.
          </p>
        </motion.div>

        {/* Projects Grid - Same Style as Servizi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-medium uppercase tracking-wider mb-2 rounded-lg w-fit">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#c9a962]/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

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
            Realizza il tuo progetto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
