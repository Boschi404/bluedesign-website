"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Servizi from "@/components/Servizi";
import Progetti from "@/components/Progetti";
import Testimonials from "@/components/Testimonials";
import Contatti from "@/components/Contatti";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Servizi />
      <Progetti />
      <Testimonials />
      <Contatti />
      <Maps />
      <Footer />
    </main>
  );
}

