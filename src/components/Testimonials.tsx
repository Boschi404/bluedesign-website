"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "BlueDesign ha trasformato la nostra cucina in un capolavoro. Ogni dettaglio è stato curato con una passione che si percepisce immediatamente. È il cuore pulsante della nostra casa ora.",
    author: "Marco R.",
    role: "CEO, Gruppo Tecnologie",
    location: "Milano",
  },
  {
    id: 2,
    quote: "Dopo 30 anni nel settore, posso dire che raramente ho visto un livello di attenzione al dettaglio pari a quello di BlueDesign. Il nostro living è diventato un punto di riferimento per i nostri ospiti.",
    author: "Giulia B.",
    role: "Architetto",
    location: "Firenze",
  },
  {
    id: 3,
    quote: "La professionalità e la creatività del team hanno superato ogni nostra aspettativa. Non solo hanno realizzato la cucina dei nostri sogni, ma hanno trasformato il modo in cui viviamo la casa.",
    author: "Alessandro V.",
    role: "Imprenditore",
    location: "Roma",
  },
];

const brands = [
  { id: 1, name: "Composit", logo: "/images/comp-logos/logo-composit.png" },
  { id: 2, name: "Gaggenau", logo: "/images/comp-logos/logo-gaggenau.png" },
  { id: 3, name: "Neff", logo: "/images/comp-logos/logo-neff.png" },
  { id: 4, name: "Siemens", logo: "/images/comp-logos/logo-siemens.png" },
  { id: 5, name: "Bosch", logo: "/images/comp-logos/logo-bosch.png" },
  { id: 6, name: "Whirlpool", logo: "/images/comp-logos/logo-whirlpool.png" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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
            Clienti Soddisfatti
            <span className="w-10 h-[1px] bg-[#c9a962]" />
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
            Cosa Dicono di <span className="text-[#c9a962] font-normal">Noi</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
            Le parole dei nostri clienti sono la nostra più grande ricompensa.
          </p>
        </motion.div>

        {/* Testimonials Grid - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] p-6 sm:p-8 rounded-2xl hover:border-[#c9a962]/20 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-[#c9a962]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#c9a962]"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed mb-6 mt-2 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a962]/30 to-[#c9a962]/10 flex items-center justify-center text-[#c9a962] font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{testimonial.author}</h3>
                  <p className="text-[#6b6b7b] text-sm">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[#c9a962] text-xs sm:text-sm uppercase tracking-widest">
              Partner Tecnologici
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 md:gap-10 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain invert"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
