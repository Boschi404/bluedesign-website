"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Turnstile from "./Turnstile";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [website, setWebsite] = useState(""); // Honeypot field
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (siteKey && !turnstileToken) {
      setStatus("error");
      setErrorMessage("Completa la verifica di sicurezza per favore.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website, // Honeypot
          token: turnstileToken,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
        setTurnstileToken("");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Qualcosa è andato storto. Riprova più tardi.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
      setErrorMessage("Errore di connessione. Controlla la tua rete e riprova.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contatti"
      className="relative py-20 sm:py-24 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
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
            Contattaci
            <span className="w-10 h-[1px] bg-[#c9a962]" />
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
            Realizza il Tuo <span className="text-[#c9a962] font-normal">Sogno</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
            Siamo pronti ad ascoltare le tue esigenze e a trasformare la tua visione in realtà.
            Prenota una consulenza gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] p-6 sm:p-8 rounded-2xl hover:border-[#c9a962]/20 transition-colors duration-300"
          >
            <h3 className="text-white font-medium text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#c9a962] rounded-full"></span>
              Inviaci un Messaggio
            </h3>
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-10 flex flex-col items-center justify-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-16 h-16 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full flex items-center justify-center text-[#c9a962] shadow-lg shadow-[#c9a962]/10"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="text-white text-xl font-medium">Messaggio Inviato!</h4>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-sm mx-auto">
                      Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleReset}
                    type="button"
                    className="px-6 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white text-sm rounded-xl transition-all"
                  >
                    Invia un altro messaggio
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {status === "error" && (
                    <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot hidden field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[#6b6b7b] uppercase tracking-wider mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-white/[0.08] rounded-xl text-white placeholder-[#4a4a5a] focus:outline-none focus:border-[#c9a962] focus:bg-[#0a0a0f]/80 transition-all disabled:opacity-50"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="surname" className="block text-xs font-medium text-[#6b6b7b] uppercase tracking-wider mb-2">
                        Cognome
                      </label>
                      <input
                        type="text"
                        id="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-white/[0.08] rounded-xl text-white placeholder-[#4a4a5a] focus:outline-none focus:border-[#c9a962] focus:bg-[#0a0a0f]/80 transition-all disabled:opacity-50"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#6b6b7b] uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-white/[0.08] rounded-xl text-white placeholder-[#4a4a5a] focus:outline-none focus:border-[#c9a962] focus:bg-[#0a0a0f]/80 transition-all disabled:opacity-50"
                      placeholder="la-tua-email@esempio.it"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#6b6b7b] uppercase tracking-wider mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-white/[0.08] rounded-xl text-white placeholder-[#4a4a5a] focus:outline-none focus:border-[#c9a962] focus:bg-[#0a0a0f]/80 transition-all disabled:opacity-50"
                      placeholder="+39 000 000 0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[#6b6b7b] uppercase tracking-wider mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-white/[0.08] rounded-xl text-white placeholder-[#4a4a5a] focus:outline-none focus:border-[#c9a962] focus:bg-[#0a0a0f]/80 transition-all resize-none disabled:opacity-50"
                      placeholder="Raccontaci del tuo progetto..."
                    />
                  </div>

                  {/* Cloudflare Turnstile integration */}
                  {status !== "loading" && (
                    <Turnstile
                      onVerify={(token) => setTurnstileToken(token)}
                      onExpire={() => setTurnstileToken("")}
                      onError={() => setTurnstileToken("")}
                    />
                  )}

                  <motion.button
                    whileHover={{ scale: status === "loading" ? 1 : 1.02, boxShadow: status === "loading" ? "none" : "0 20px 40px rgba(201,169,98,0.25)" }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gradient-to-r from-[#c9a962] to-[#a88a4a] text-[#0a0a0f] font-semibold rounded-xl text-base shadow-lg shadow-[#c9a962]/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#0a0a0f]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Invio in corso...
                      </>
                    ) : (
                      "Invia Messaggio"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* Showroom Milano */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-white font-medium text-lg flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#c9a962] rounded-full"></span>
                  Showroom Milano
                </h3>
                
                {/* Card unificata con icone */}
                <div className="p-6 bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-[#c9a962]/30 transition-all duration-300 flex-1">
                  <div className="space-y-5">
                    {/* Indirizzo */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a962]/10 flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962]">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                          Piazzale Lugano 6/10<br />
                          <span className="text-[#6b6b7b]">20158 Milano</span>
                        </p>
                      </div>
                    </div>

                    {/* Telefono Showroom */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a962]/10 flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962]">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#6b6b7b] text-xs mb-1">Telefono Showroom</p>
                        <div className="flex flex-col gap-1">
                          <a href="tel:+390239326173" className="text-white text-sm hover:text-[#c9a962] transition-colors">02 39326173</a>
                        </div>
                      </div>
                    </div>

                    {/* Orari */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a962]/10 flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962]">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Lun:</span> 15:30 - 19:30</p>
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Mar:</span> 10:00 - 13:00 / 15:30 - 19:30</p>
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Mer:</span> 10:00 - 13:00 / 15:30 - 19:30</p>
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Gio:</span> 10:00 - 13:00 / 15:30 - 19:30</p>
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Ven:</span> 10:00 - 13:00 / 15:30 - 19:30</p>
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Sab:</span> 10:00 - 13:00 / 15:30 - 19:30</p>
                        <p className="text-[#a0a0a0] text-sm"><span className="text-white">Dom:</span> <span className="text-[#6b6b7b]">Chiuso</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Architettura */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-white font-medium text-lg flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#c9a962] rounded-full"></span>
                  Studio di Architettura Besana
                </h3>
                
                <div className="p-6 bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-[#c9a962]/30 transition-all duration-300 flex-1">
                  <div className="space-y-5">
                    {/* Indirizzo */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a962]/10 flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962]">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                          Via Luigi Viarana 26<br />
                          <span className="text-[#6b6b7b]">20842 Besana Brianza MB</span>
                        </p>
                      </div>
                    </div>

                    {/* Telefono Studio */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a962]/10 flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962]">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#6b6b7b] text-xs mb-1">Telefono Studio</p>
                        <div className="flex flex-col gap-1">
                          <a href="tel:+3903621481773" className="text-white text-sm hover:text-[#c9a962] transition-colors">0362 1481773</a>
                        </div>
                      </div>
                    </div>

                    {/* Orari */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a962]/10 flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9a962]">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#c9a962] text-sm font-medium">Solo su appuntamento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email - Full Width */}
              <div className="col-span-1 sm:col-span-2 mt-8 p-5 bg-[#0a0a0f]/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-[#c9a962]/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[#c9a962]"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-[#a0a0a0] text-sm">
                      info@bluedesign.biz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

