"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
   { href: "/chi-siamo", label: "Chi Siamo", isRoute: true },
   { href: "/showroom", label: "Showroom", isRoute: true },
   { href: "/progetti", label: "Progetti", isRoute: true },
   { href: "/promozioni", label: "Promozioni", isRoute: true },
   { href: "/contatti", label: "Contatti", isRoute: true },
];

const showroomLinks = [
   { href: "/bagni-lusso-spa-milano", label: "Bagni" },
   { href: "/zona-notte-camere-let-milano", label: "Zona Notte" },
   { href: "/progettazione-living-zona-giorno-milano", label: "Living" },
   { href: "/illuminazione-interni-milano", label: "Illuminazione" },
   { href: "/cucine-moderne-minimal-milano", label: "Cucine" },
   { href: "/camerette-bambini-ragazzi-milano", label: "Camerette" },
];

export default function Navbar() {
   const router = useRouter();
   const pathname = usePathname();
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const scrollToSection = (href: string, isRoute: boolean) => {
     setIsMobileMenuOpen(false);
     if (isRoute) {
       router.push(href);
       return;
     }
     // If we're not on the home page, navigate to home first
     if (pathname !== '/' && !href.startsWith('#')) {
       router.push('/');
       // Wait for navigation to complete before scrolling
       setTimeout(() => {
         const element = document.querySelector(href);
         if (element) {
           element.scrollIntoView({ behavior: "smooth" });
         }
       }, 100);
       return;
     }
     
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-3 sm:top-4 left-3 sm:left-6 right-3 sm:right-6 z-50 transition-all duration-500 rounded-xl sm:rounded-2xl",
          isScrolled
            ? "glass-nav shadow-2xl border border-white/[0.08]"
            : "bg-[#0a0a0f]/50 backdrop-blur-2xl shadow-2xl border border-white/[0.04]"
        )}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-[80px] sm:h-20 md:h-24">
            {/* Logo - Responsive sizing */}
            <Link href="/" className="relative z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                 <div id="navbar-logo" className="relative w-[220px] sm:w-32 md:w-40 lg:w-48 xl:w-56 h-full flex items-center">
                   <Image
                     src="/images/logo/BlueDesign-Logo.png"
                     alt="BlueDesign"
                     width={360}
                     height={180}
                     className="object-contain invert h-[96px] sm:h-16 md:h-20 w-auto max-h-full"
                     priority
                   />
                 </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Modern UI/UX */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  {link.label === "Showroom" ? (
                    <div 
                      className="relative inline-block"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button className="relative px-3 xl:px-4 py-2 caption font-medium text-[#a0a0a0] hover:text-white transition-all duration-300 group">
                        {link.label}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#4a4a4a] to-[#6b6b6b] group-hover:w-full transition-all duration-300" />
                      </button>
                      {/* Modern dropdown */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 min-w-[180px] xl:min-w-[200px] bg-[#1b1b1b]/95 backdrop-blur-xl border border-white/[0.06] rounded-lg shadow-2xl z-10 overflow-hidden"
                          >
                            {showroomLinks.map((subLink, subIndex) => (
                              <motion.button
                                key={subLink.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * subIndex }}
                                onClick={() => scrollToSection(subLink.href, false)}
                                className="block w-full text-left px-4 py-2.5 xl:py-3 text-xs xl:text-sm text-[#a0a0a0] hover:text-white hover:bg-[#2a2a2a] transition-all duration-200"
                              >
                                {subLink.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.isRoute ? link.href : "#"}
                      onClick={(e) => {
                        if (!link.isRoute) {
                          e.preventDefault();
                          scrollToSection(link.href, link.isRoute);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="relative px-3 xl:px-4 py-2 caption font-medium text-[#a0a0a0] hover:text-white transition-all duration-300 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#4a4a4a] to-[#6b6b6b] group-hover:w-full transition-all duration-300" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:block"
            >
              <button
                onClick={() => scrollToSection("#contatti", false)}
                className="btn btn-primary"
              >
                Richiedi Consulenza
              </button>
            </motion.div>

            {/* Mobile Menu Button - Modern hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                className="w-5 sm:w-6 h-[2px] bg-white origin-center"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="w-5 sm:w-6 h-[2px] bg-white"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                className="w-5 sm:w-6 h-[2px] bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Modern design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1b1b1b]/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 pt-16 sm:pt-20">
              {/* Home — solo nel menu hamburger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  href="/"
                  className="h2 text-white hover:text-[#6b6b6b] transition-colors"
                >
                  Home
                </Link>
              </motion.div>
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      className="h2 text-white hover:text-[#6b6b6b] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(link.href, link.isRoute)}
                    className="h2 text-white hover:text-[#6b6b6b] transition-colors"
                  >
                    {link.label}
                  </motion.button>
                )
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection("#contatti", false)}
                className="mt-4 sm:mt-8 btn btn-primary"
              >
                Richiedi Consulenza
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
