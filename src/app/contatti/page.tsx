"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contatti() {
    return (
        <div className="frame">
            <Header />
            <div className="body">
                <section className="contact-hero">
                    <div className="container">
                        <h1 className="main-title">CONTATTI</h1>
                        <p className="subtitle">Esperienza e professionalità al tuo servizio.</p>
                    </div>
                </section>

                <section className="contact-grid-section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info-card">
                                <div className="info-item">
                                    <i className="bi bi-geo-alt"></i>
                                    <div>
                                        <h3>Showroom & Kitchen Center</h3>
                                        <p>Piazzale Lugano 6/10<br />20158 Milano (MI)</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-telephone"></i>
                                    <div>
                                        <h3>Telefono</h3>
                                        <p>Tel: <a href="tel:+390239326172">02 39326172</a></p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-envelope"></i>
                                    <div>
                                        <h3>Email</h3>
                                        <p>info@bluedesign.biz</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-house"></i>
                                    <div>
                                        <h3>Bluedesign - Studio d'Architettura</h3>
                                        <p>Via Luigi Viarana 26<br />20842 Besana Brianza (MB)<br />Tel: <a href="tel:+3903621481773">0362 1481773</a></p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-clock"></i>
                                    <div>
                                        <h3>Orari</h3>
                                        <p>Lun - Ven: 09:00 - 13:00 / 14:30 - 19:00<br />Sabato: su appuntamento</p>
                                    </div>
                                </div>
                            </div>

                            <div className="map-container shadow-focus" style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'transparent', border: 'none' }}>
                                {/* Milan Map */}
                                <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11189.702008432363!2d9.1627446!3d45.4912953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1251c68e1a5%3A0xe54ef425f19069d!2sPiazzale%20Lugano%2C%206%2F10%2C%2020158%20Milano%20MI!5e1!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Bluedesign Showroom Map"
                                    ></iframe>
                                </div>

                                {/* Besana Map */}
                                <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.6698246416!2d9.289354!3d45.698425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bb2f1a603c6f%3A0x6006e804f3299c0!2sVia%20Luigi%20Viarana%2C%2026%2C%2020842%20Besana%20in%20Brianza%20MB!5e0!3m2!1sit!2sit!4v1705500000000!5m2!1sit!2sit"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Bluedesign Besana Map"
                                    ></iframe>
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
        
        .contact-hero { padding: 60px 0; text-align: center; }
        .main-title { color: #fff; font-size: 4rem; font-weight: 900; }
        .subtitle { color: #ccc; font-size: 1.2rem; }

        .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: stretch; }
        
        .contact-info-card { background: #1b1b1b; padding: 50px; border-radius: 8px; color: #fff; }
        .contact-info-card a { color: #fff; text-decoration: none; transition: color 0.3s; }
        .contact-info-card a:hover { color: #c9a962; }
        .info-item { display: flex; gap: 25px; margin-bottom: 35px; }
        .info-item i { font-size: 1.5rem; color: #fff; background: rgba(255,255,255,0.05); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .info-item h3 { font-size: 0.9rem; text-transform: uppercase; color: #aaa; letter-spacing: 0.1em; margin-bottom: 5px; }
        .info-item p { font-size: 1.1rem; line-height: 1.5; }

        .map-container { background: #000; height: 100%; min-height: 500px; border-radius: 8px; overflow: hidden; position: relative; border: 1px solid rgba(255,255,255,0.05); }
        .map-container iframe { filter: invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%); } /* Minimal custom style for map */

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .container { padding: 0 20px; }
          .contact-info-card { padding: 30px; }
        }
      `}</style>
        </div>
    );
}
