"use client";

import { motion } from "framer-motion";

export default function Maps() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute -top-1/3 -right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-[#c9a962]/5 blur-3xl" />
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
            Dove Siamo
            <span className="w-10 h-[1px] bg-[#c9a962]" />
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
            Le Nostre <span className="text-[#c9a962] font-normal">Sedi</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
            Vieni a trovarci nei nostri showroom per scoprire le ultime tendenze dell'architettura d'interni.
          </p>
        </motion.div>

        {/* Maps Grid - Full Width Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Map 1 - Milano */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#c9a962]/20 transition-colors duration-300"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#c9a962]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium">Showroom Milano</h3>
                </div>
              </div>
              <p className="text-[#a0a0a0] text-sm ml-16">
                Piazzale Lugano 6/10, 20158 Milano MI
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.132455873415!2d9.163829076625584!3d45.49862433114074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c0e1f4345c57%3A0xa5cce04474158ad!2sBluedesign!5e1!3m2!1sit!2sit!4v1775046410506!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa showroom BlueDesign Milano"
              />
            </div>
          </motion.div>

          {/* Map 2 - Seconda Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#c9a962]/20 transition-colors duration-300"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#c9a962]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium">Studio di Architettura</h3>
                </div>
              </div>
              <p className="text-[#a0a0a0] text-sm ml-16">
                Via Luigi Viarana 26, 20842 Besana Brianza MB
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.1584386950376!2d9.283863676634116!3d45.700191717661426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a4eb0183b631%3A0xa875e87dc3856955!2sBluedesign!5e1!3m2!1sit!2sit!4v1775046432062!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa showroom Bluedesign"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
