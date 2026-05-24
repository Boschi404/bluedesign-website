"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const projectImages = [
  "/images/projects/foto-1.png",
  "/images/projects/foto-2.png",
  "/images/projects/foto-3.png",
  "/images/projects/foto-4.png",
  "/images/projects/foto-5.png",
  "/images/projects/foto-6.png",
  "/images/projects/foto-7.png",
  "/images/projects/foto-8.png",
  "/images/projects/foto-9.png",
  "/images/projects/foto-10.png",
  "/images/projects/foto-11.png",
  "/images/projects/foto-12.png",
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
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image}
                alt={`Progetto ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
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
