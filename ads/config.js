// BlueDesign — Config creatività ADS (autunno 2026)
// Modifica QUI testi/foto/badge: l'anteprima e l'export si aggiornano da soli.
// Formati: META_SQUARE 1080x1080 (feed), META_STORY 1080x1920 (stories/reels), GOOGLE_LARGE 1200x628 (display), GOOGLE_SQUARE 1200x1200

window.ADS_CONFIG = {
  brand: {
    name: "BlueDesign",
    logo: "img/logo-white.webp",
    phone: "02 3932 6173",
    site: "bluedesign.biz",
    cta: "Scopri di più",
  },
  palette: {
    night: "#0A0A0F",     // fondo notte brand
    nightSoft: "#14141B",
    gold: "#C9A962",      // oro brand
    goldSoft: "#D8BC7E",
    white: "#FFFFFF",
    muted: "#A9A9B3",
  },
  ads: [
    {
      id: "01-gres-omaggio",
      campaign: "Cucine — top in gres in omaggio",
      photo: "img/cucina-led.webp",
      photoPos: "50% 62%",
      kicker: "CUCINE SU MISURA",
      lines: {
        top: "Acquisti la cucina da noi…",
        main: "I top in gres **TE LI REGALIAMO**",
      },
      badge: "OMAGGIO",
      sub: "Top in gres inclusi con l'acquisto della cucina",
      bg: "img/living-warm.jpg",
    },
    {
      id: "02-impianti-progettati",
      campaign: "Cucine — progetto impianti incluso",
      photo: "img/progetto.webp",
      photoPos: "50% 45%",
      kicker: "PROGETTAZIONE",
      lines: {
        top: "La cucina che vuoi inizia dai numeri giusti",
        main: "GLI IMPIANTI TE LI PROGETTIAMO NOI",
      },
      badge: "INCLUSO",
      sub: "Progetto impianti elettrico e idraulico compreso",
      bg: null,
    },
    {
      id: "03-led-omaggio",
      campaign: "Cucine — accessori + LED in omaggio",
      photo: "img/cucina-led.webp",
      photoPos: "50% 55%",
      kicker: "CUCINE SU MISURA",
      lines: {
        top: "Compri la cucina da BlueDesign",
        main: "ACCESSORI E LUCI LED IN OMAGGIO",
      },
      badge: "OMAGGIO",
      sub: "Illuminazione LED e accessori inclusi",
      bg: null,
    },
    {
      id: "04-autunno-showroom",
      campaign: "Autunno — rinnovo showroom (opportunità)",
      photo: "img/cucina-bosch.webp",
      photoPos: "50% 38%",
      kicker: "È AUTUNNO",
      lines: {
        top: "È autunno: BlueDesign rinnova lo showroom",
        main: "TUTTE LE OPPORTUNITÀ PER RINNOVARE CASA TUA",
      },
      badge: "AUTUNNO 2026",
      sub: "Vieni a scoprire le novità in showroom",
      bg: "img/living-warm.jpg",
    },
    {
      id: "05-autunno-sconti",
      campaign: "Autunno — rinnovo showroom (sconti)",
      photo: "img/cucina-led.webp",
      photoPos: "50% 55%",
      kicker: "È AUTUNNO",
      lines: {
        top: "È autunno: BlueDesign rinnova lo showroom",
        main: "TUTTI GLI SCONTI PER RINNOVARE LA TUA CASA",
      },
      badge: "SCONTI",
      sub: "Offerte autunnali su cucine e arredo su misura",
      bg: "img/living-warm.jpg",
    },
    {
      id: "06-bosch",
      campaign: "Pacchetto Bosch — sconto (da definire)",
      photo: "img/cucina-bosch.webp",
      photoPos: "50% 50%",
      kicker: "PACCHETTO ELETTRODOMESTICI",
      lines: {
        top: "Arredi la cucina, paghi meno gli elettrodomestici",
        main: "PACCHETTO **BOSCH** SCONTATO",
        extra: "-XX%  ·  sconto in arrivo",
      },
      badge: "SCONTO",
      sub: "Elettrodomestici da incasso con sconto enorme: cifra in definizione",
      partnerLogo: null,
      bg: null,
    },
  ],
};
