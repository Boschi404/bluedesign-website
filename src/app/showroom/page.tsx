"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  {
    id: "cucine",
    title: "Cucine",
    desc: "Il cuore della casa, dove tecnologia e artigianalità si incontrano per creare spazi conviviali d'autore. Partner ufficiali Composit e Officine Fanesi.",
    img: "/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
  },
  {
    id: "living",
    title: "Living & Divani",
    desc: "Sistemi giorno versatili e imbottiti di alta qualità. Comfort assoluto definito da brand come Vibieffe, Felis e MD House.",
    img: "/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
  },
  {
    id: "zona-notte",
    title: "Zona Notte",
    desc: "Armadi su misura e letti pensati per il riposo rigenerativo. Estetica e ordine firmati Olivieri, Zanette e Orme.",
    img: "/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
  },
  {
    id: "bagni",
    title: "Arredo Bagno",
    desc: "L'architettura del benessere. Soluzioni eleganti e materiali nobili con partner come Hafro Geromin e Fir Rubinetterie.",
    img: "/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
  },
  {
    id: "illuminazione",
    title: "Illuminazione & Complementi",
    desc: "La luce come elemento costruttivo. Oggetti iconici e soluzioni illuminotecniche Karman, Icone e LineaLight.",
    img: "/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
  }
];

export default function Showroom() {
  return (
    <div className="frame">
      <Header />
      <div className="body">
        <section className="showroom-hero">
          <div className="container">
            <h1 className="main-title">LO SHOWROOM</h1>
            <p className="subtitle">Mille metri quadri di ispirazione nel cuore di Milano.</p>
          </div>
        </section>

        {categories.map((cat, index) => (
          <section key={cat.id} className="showroom-section">
            <div className={`container legacy-paragraph ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="text-box">
                <h2>{cat.title}</h2>
                <p>{cat.desc}</p>
                <div className="cta-wrapper" style={{ marginTop: '30px' }}>
                  <Link href="/progettazione" className="showroom-cta">Richiedi Progetto Online</Link>
                </div>
              </div>
              <div className="img-box">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="legacy-img"
                />
              </div>
            </div>
          </section>
        ))}

        <section className="visit-us" style={{ padding: '100px 0', background: '#1b1b1b', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px' }}>Vieni a trovarci</h2>
            <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '40px' }}>Ti aspettiamo in Piazzale Lugano 6/10 per toccare con mano la qualità dei nostri materiali.</p>
            <Link href="/contatti" className="visit-btn">Prenota un Appuntamento</Link>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx>{`
        .frame { display: flex; flex-direction: column; width: 100%; }
        .body { background: #353535; padding-bottom: 7rem; min-height: 80vh; padding-top: 180px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 50px; }
        
        .showroom-hero { padding: 60px 0; text-align: center; }
        .main-title { color: #fff; font-size: 4rem; font-weight: 900; }
        .subtitle { color: #ccc; font-size: 1.2rem; }

        .showroom-section { padding: 80px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .legacy-paragraph { display: flex; align-items: center; gap: 80px; color: #fff; }
        .legacy-paragraph.reverse { flex-direction: row-reverse; }
        .legacy-paragraph.reverse .text-box { text-align: left; }
        
        .text-box { flex: 1; text-align: right; }
        .img-box { flex: 1; }
        
        h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 1.5rem; text-transform: uppercase; }
        p { color: #ccc; font-size: 1.15rem; line-height: 1.8; }
        .legacy-img { width: 100%; height: auto; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }

        .showroom-cta { border: 1px solid #fff; color: #fff; padding: 12px 25px; text-transform: uppercase; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; }
        .showroom-cta:hover { background: #fff; color: #000; }

        .visit-btn { background: #fff; color: #000; padding: 20px 50px; font-weight: 900; text-transform: uppercase; }

        @media (max-width: 992px) {
          .legacy-paragraph { flex-direction: column !important; text-align: center !important; }
          .container { padding: 0 20px; }
        }
      `}</style>
    </div>
  );
}
