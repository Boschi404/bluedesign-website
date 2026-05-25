"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: "Progettazione d'Interni", href: "/#servizi" },
  { label: "Cucine Composit", href: "/#servizi" },
  { label: "Ristrutturazione", href: "/#servizi" },
  { label: "Illuminotecnica", href: "/#servizi" },
  { label: "Promozioni", href: "/promozioni" },
  { label: "Chi Siamo", href: "/#chi-siamo" },
  { label: "Progetti", href: "/#progetti" },
  { label: "Contatti", href: "/#contatti" },
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
           <div className="space-y-4">
             {/* Logo Link */}
             <Link href="/" className="inline-flex items-center gap-0">
               <div className="relative w-40 h-40">
                 <Image
                   src="/images/logo/BlueDesign-Logo.png"
                   alt="BlueDesign"
                   width={200}
                   height={200}
                   className="object-contain invert"
                 />
               </div>
             </Link>
             
             {/* Company Description */}
             <p className="text-[#a0a0a0] text-sm leading-relaxed mb-0">
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

          {/* Links Column */}
          <div>
            <h4 className="text-white font-medium mb-6 relative pl-3">
              Link Utili
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {navLinks.map((link) => (
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

          {/* Showroom Milano */}
          <div>
            <h4 className="text-white font-medium mb-6 relative pl-3">
              Showroom Milano
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
            </h4>
            <div className="space-y-4 text-sm text-[#a0a0a0]">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962] mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="leading-relaxed">
                  Piazzale Lugano 6/10<br />
                  <span className="text-white/70">20158 Milano (MI)</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962] mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+390239326173" className="hover:text-[#c9a962] transition-colors">02 39326173</a>
              </div>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962] mt-0.5 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@bluedesign.biz" className="hover:text-[#c9a962] transition-colors">info@bluedesign.biz</a>
              </div>
            </div>
          </div>

          {/* Studio di Architettura */}
          <div>
            <h4 className="text-white font-medium mb-6 relative pl-3">
              Studio Besana
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
            </h4>
            <div className="space-y-4 text-sm text-[#a0a0a0]">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962] mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="leading-relaxed">
                  Via Luigi Viarana 26<br />
                  <span className="text-white/70">20842 Besana Brianza (MB)</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962] mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+3903621481773" className="hover:text-[#c9a962] transition-colors">0362 1481773</a>
              </div>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962] mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span className="text-[#c9a962] font-medium">Solo su appuntamento</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="text-white/70 text-sm text-center sm:text-left">
              <p>© {currentYear} BlueDesign Srl. Tutti i diritti riservati.</p>
            </div>
            <div className="text-white/70 text-sm text-center">
              <p>
                Realizzato da <a href="https://leonardoboschi.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a962] transition-colors duration-300">Leonardo Boschi</a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-white/70 hover:text-white transition-colors">
                Termini e Condizioni
              </Link>
              <Link href="/cookie-policy" className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

