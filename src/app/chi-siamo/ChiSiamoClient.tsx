"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ChiSiamo() {
    return (
        <div className="frame">
            <Header />
            <div className="body">
                <section className="about-hero">
                    <div className="container">
                        <h1 className="main-title">CHI SIAMO</h1>
                        <p className="subtitle">Dal 1990, l'arte di progettare il quotidiano.</p>
                    </div>
                </section>

                <section className="about-content">
                    <div className="container legacy-paragraph">
                        <div className="text-box">
                            <h2>Oltre 35 anni di storia</h2>
                            <p>
                                Bluedesign nasce a Milano nel 1990 con una missione chiara: trasformare lo spazio abitativo in un'esperienza sensoriale e funzionale.
                                Situati nello storico nodo di Piazzale Lugano 6/10, siamo diventati un punto di riferimento per chi cerca non solo arredamento,
                                ma una consulenza architettonica completa.
                            </p>
                            <br />
                            <p>
                                Il nostro approccio combina la precisione tecnica di uno studio d'architettura con la ricercatezza di uno showroom d'eccellenza.
                                Collaboriamo con i brand più prestigiosi del design internazionale per garantire qualità, innovazione e durabilità in ogni progetto.
                            </p>
                        </div>
                        <div className="img-box">
                            <img
                                src="/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
                                alt="Showroom Bluedesign"
                                className="legacy-img"
                            />
                        </div>
                    </div>

                    <div className="container legacy-paragraph reverse">
                        <div className="text-box">
                            <h2>Filosofia Progettuale</h2>
                            <p>
                                Crediamo che ogni ambiente debba riflettere la personalità di chi lo vive.
                                Per questo motivo, la nostra filosofia si basa sull'ascolto attento delle necessità del cliente,
                                supportato da strumenti grafici all'avanguardia come rendering fotorealistici e realtà virtuale.
                            </p>
                            <br />
                            <p>
                                Dalle cucine minimaliste ai salotti eleganti, fino alle zone notte più intime,
                                ogni elemento è selezionato per creare armonia e personalità.
                            </p>
                        </div>
                        <div className="img-box wide">
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <h3>1990</h3>
                                    <p>Anno di Fondazione</p>
                                </div>
                                <div className="stat-card">
                                    <h3>50+</h3>
                                    <p>Top Brand Partner</p>
                                </div>
                                <div className="stat-card">
                                    <h3>1000+</h3>
                                    <p>Progetti Realizzati</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

            <style jsx>{`
        .frame { display: flex; flex-direction: column; width: 100%; }
        .body { background: #353535; padding-bottom: 7rem; min-height: 80vh; padding-top: 180px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 50px; }
        
        .about-hero { padding: 60px 0; text-align: center; }
        .main-title { color: #fff; font-size: 4rem; font-weight: 900; margin-bottom: 10px; }
        .subtitle { color: #ccc; font-size: 1.2rem; letter-spacing: 0.1em; }

        .about-content { padding: 40px 0; }
        .legacy-paragraph { 
          display: flex; 
          align-items: center; 
          gap: 60px; 
          margin-bottom: 100px; 
          color: #fff;
        }
        .legacy-paragraph.reverse { flex-direction: row-reverse; }
        
        .text-box { flex: 1; }
        .img-box { flex: 1; }
        
        h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 2rem; position: relative; }
        h2::after { content: ''; display: block; width: 50px; height: 3px; background: #fff; margin-top: 10px; }
        
        p { color: #ccc; font-size: 1.1rem; line-height: 1.8; }
        .legacy-img { width: 100%; height: auto; border-radius: 4px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }

        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-card { background: #2a2a2a; padding: 30px; text-align: center; border-radius: 4px; }
        .stat-card h3 { font-size: 2.5rem; margin-bottom: 5px; color: #fff; }
        .stat-card p { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em; }

        @media (max-width: 992px) {
          .legacy-paragraph, .legacy-paragraph.reverse { flex-direction: column; text-align: center; }
          .container { padding: 0 20px; }
          .main-title { font-size: 3rem; }
          h2::after { margin: 10px auto; }
        }
      `}</style>
        </div>
    );
}
