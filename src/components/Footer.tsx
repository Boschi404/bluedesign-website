"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: "Servizi",
    links: [
      { label: "Progettazione d'Interni", href: "#servizi" },
      { label: "Cucine Composit", href: "#servizi" },
      { label: "Ristrutturazione", href: "#servizi" },
      { label: "Illuminotecnica", href: "#servizi" },
    ],
  },
  {
    title: "Azienda",
    links: [
      { label: "Promozioni", href: "/promozioni" },
      { label: "Chi Siamo", href: "#chi-siamo" },
      { label: "Progetti", href: "#progetti" },
      { label: "Contatti", href: "#contatti" },
    ],
  },
  {
    title: "Le Nostre Sedi",
    links: [
      { label: "Showroom Milano", href: "#contatti" },
      { label: "Piazzale Lugano 6/10, Milano", href: "#contatti" },
      { label: "Studio di Architettura", href: "#contatti" },
      { label: "Via Luigi Viarana 26, Besana Brianza", href: "#contatti" },
    ],
  },
  {
    title: "Contatti",
    links: [
      { label: "info@bluedesign.biz", href: "mailto:info@bluedesign.biz" },
      { label: "02 39326172", href: "tel:+390239326172" },
      { label: "02 39326173", href: "tel:+390239326173" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/bluedesign.biz/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/BlueDesign-Logo.png"
                  alt="BlueDesign"
                  width={48}
                  height={48}
                  className="object-contain invert"
                />
              </div>
              <span className="text-white text-lg font-medium">BlueDesign</span>
            </Link>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              Arredamento di design dal 1990. Trasformiamo i tuoi ambienti in esperienze uniche con professionalità e passione.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-[#0a0a0f]/50 border border-white/[0.06] rounded-xl flex items-center justify-center text-[#c9a962] hover:bg-[#c9a962]/10 hover:border-[#c9a962]/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-medium mb-6 relative">
                {column.title}
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#c9a962] rounded-full" />
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#a0a0a0] text-sm hover:text-[#c9a962] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#6b6b7b] text-sm text-center sm:text-left">
              © {currentYear} BlueDesign Srl. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              <Link href="#" className="text-[#6b6b7b] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#6b6b7b] hover:text-white transition-colors">
                Termini e Condizioni
              </Link>
              <Link href="#" className="text-[#6b6b7b] hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
