"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function StudioArchitettura() {
    const services = [
        { title: "Ristrutturazioni", icon: "bi-hammer" },
        { title: "Direzione Lavori", icon: "bi-person-gear" },
        { title: "Rendering 3D", icon: "bi-box" },
        { title: "Interior Design", icon: "bi-pencil-square" }
    ];

    return (
        <div className="frame">
            <Header />
            <div className="body">
                <section className="studio-hero">
                    <div className="container">
                        <h1 className="main-title">STUDIO D'ARCHITETTURA</h1>
                        <p className="subtitle">La tecnica incontra la visione d'autore.</p>
                    </div>
                </section>

                <section className="studio-content">
                    <div className="container legacy-paragraph">
                        <div className="text-box">
                            <h2>Oltre il semplice arredamento</h2>
                            <p>
                                Il nostro studio tecnico di Besana Brianza è il motore creativo di Bluedesign.
                                Qui, architetti e designer lavorano in sinergia per offrire una consulenza che va ben oltre la vendita del singolo mobile.
                            </p>
                            <br />
                            <p>
                                Seguiamo il cliente in ogni fase: dalla progettazione preliminare alla scelta dei materiali,
                                fino alla direzione dei lavori in cantiere. La nostra specializzazione nelle ristrutturazioni "chiavi in mano"
                                permette di avere un unico interlocutore professionale per tutta la durata del progetto.
                            </p>
                        </div>
                        <div className="img-box">
                            <img
                                src="/images/carousel/progettazione-render-bluedesign01-1024x450.jpg"
                                alt="Studio Tecnico Bluedesign"
                                className="legacy-img"
                            />
                        </div>
                    </div>

                    <div className="container services-section">
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <i className={`bi ${service.icon}`}></i>
                                    <h3>{service.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

            <style jsx>{`
        .frame { display: flex; flex-direction: column; width: 100%; }
        .body { background: #353535; padding-bottom: 7rem; min-height: 80vh; padding-top: 180px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 50px; }
        
        .studio-hero { padding: 60px 0; text-align: center; }
        .main-title { color: #fff; font-size: 3.5rem; font-weight: 900; }
        .subtitle { color: #ccc; font-size: 1.1rem; }

        .legacy-paragraph { display: flex; align-items: center; gap: 60px; margin-bottom: 80px; color: #fff; }
        .text-box { flex: 1; text-align: right; }
        .img-box { flex: 1; }
        h2 { font-size: 2.5rem; margin-bottom: 2rem; color: #fff; }
        p { color: #ccc; font-size: 1.1rem; line-height: 1.8; }
        .legacy-img { width: 100%; height: auto; border-radius: 4px; }

        .services-section { padding: 60px 0; border-top: 1px solid rgba(255,255,255,0.05); }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
        .service-card { background: #1b1b1b; padding: 40px; text-align: center; border-radius: 8px; color: #fff; transition: transform 0.3s; }
        .service-card:hover { transform: translateY(-10px); }
        .service-card i { font-size: 3rem; display: block; margin-bottom: 20px; color: #fff; }
        .service-card h3 { font-size: 1rem; text-transform: uppercase; letter-spacing: 0.1em; }

        @media (max-width: 992px) {
          .legacy-paragraph { flex-direction: column; text-align: center; }
          .text-box { text-align: center; }
          .container { padding: 0 20px; }
        }
      `}</style>
        </div>
    );
}
