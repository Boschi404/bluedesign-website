"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ChiSiamo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="chi-siamo"
      ref={containerRef}
      className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/bagno-arteba-2.jpg"
                alt="BlueDesign studio showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              style={{ y }}
              className="absolute -bottom-6 -right-4 sm:-right-8 md:-right-12 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.06] p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#c9a962]">35+</span>
                  <p className="text-xs sm:text-sm text-[#a0a0a0] mt-2">Anni di esperienza</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#c9a962]">5000+</span>
                  <p className="text-xs sm:text-sm text-[#a0a0a0] mt-2">Progetti realizzati</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-[#c9a962] text-xs sm:text-sm font-medium uppercase tracking-widest mb-4"
            >
              <span className="w-10 h-[1px] bg-[#c9a962]" />
              La Nostra Storia
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
              Un'eccellenza che nasce dalla <span className="text-[#c9a962] font-normal">creatività</span>
            </h2>

            <div className="space-y-4 text-[#a0a0a0] text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-white">BlueDesign</strong> nasce nel 1990 come evoluzione di un'esperienza familiare 
                nel settore dell'architettura e dell'arredamento. Da oltre tre decenni incarniamo l'essenza dell'architettura d'interni italiana, 
                creando spazi che raccontano storie di eleganza e funzionalità senza tempo.
              </p>
              <p>
                Il nostro obbiettivo è trasformare ogni ambiente in un'opera d'arte abitabile, dove ogni dettaglio 
                è cura sartoriale e ogni scelta è espressione di uno stile di vita raffinato.
              </p>
            </div>

            {/* Values - Clean */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Design", desc: "Progettazione su misura" },
                { title: "Qualità", desc: "Materiali premium" },
                { title: "Servizio", desc: "Assistenza completa" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] rounded-xl hover:border-[#c9a962]/20 transition-colors duration-300"
                >
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-[#6b6b7b] text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
