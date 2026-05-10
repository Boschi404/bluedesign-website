"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ProgettazioneOnline() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate backend submission
        setSubmitted(true);
    };

    return (
        <div className="frame">
            <Header />
            <div className="body">
                <section className="form-hero">
                    <div className="container">
                        <h1 className="main-title">PROGETTAZIONE <span className="accent">ONLINE</span></h1>
                        <p className="subtitle">Trasforma la tua visione in realtà, ovunque tu sia.</p>
                    </div>
                </section>

                <section className="form-section">
                    <div className="container">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="project-form shadow-focus">
                                <div className="form-grid">
                                    <div className="form-group full">
                                        <h3>Dati Personali</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Nome Completo</label>
                                        <input type="text" placeholder="Es. Mario Rossi" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="mario@esempio.it" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefono</label>
                                        <input type="tel" placeholder="+39 000 0000000" />
                                    </div>
                                    <div className="form-group">
                                        <label>Tipo di Intervento</label>
                                        <select required>
                                            <option value="">Seleziona...</option>
                                            <option value="ristrutturazione">Ristrutturazione Completa</option>
                                            <option value="singola-stanza">Singola Stanza (Es. Cucina)</option>
                                            <option value="arredo">Consulenza Arredo</option>
                                            <option value="ufficio">Ufficio / Spazio Commerciale</option>
                                        </select>
                                    </div>

                                    <div className="form-group full">
                                        <h3>Dettagli Progetto</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Dimensione Ambiente (Mq)</label>
                                        <input type="number" placeholder="Es. 80" />
                                    </div>
                                    <div className="form-group">
                                        <label>Budget Stimato (€)</label>
                                        <select>
                                            <option value="5k-15k">5.000 - 15.000</option>
                                            <option value="15k-30k">15.000 - 30.000</option>
                                            <option value="30k-60k">30.000 - 60.000</option>
                                            <option value="60k+">Oltre 60.000</option>
                                        </select>
                                    </div>
                                    <div className="form-group full">
                                        <label>Descrizione del Progetto e Necessità</label>
                                        <textarea rows={5} placeholder="Descrivi il tuo spazio ideale, le tue abitudini e i desideri..." required></textarea>
                                    </div>

                                    <div className="form-group full">
                                        <label className="file-label">
                                            <span>Allega Planimetria o Foto (Max 10MB)</span>
                                            <input type="file" multiple />
                                        </label>
                                    </div>
                                </div>

                                <div className="form-footer">
                                    <p className="privacy">Inviando il modulo accetti la nostra privacy policy e il trattamento dei dati personali.</p>
                                    <button type="submit" className="submit-btn">INVIA RICHIESTA PROGETTO</button>
                                </div>
                            </form>
                        ) : (
                            <div className="success-msg reveal">
                                <i className="bi bi-check-circle"></i>
                                <h2>Richiesta Ricevuta!</h2>
                                <p>I nostri architetti analizzeranno le tue informazioni e ti ricontatteranno entro 48 ore lavorative.</p>
                                <button onClick={() => setSubmitted(false)} className="back-btn">Invia un'altra richiesta</button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Footer />

            <style jsx>{`
        .frame { display: flex; flex-direction: column; width: 100%; }
        .body { background: #353535; padding-bottom: 7rem; min-height: 80vh; padding-top: 180px; }
        .container { max-width: 900px; margin: 0 auto; padding: 0 20px; }
        
        .form-hero { padding: 60px 0; text-align: center; }
        .main-title { color: #fff; font-size: 3.5rem; font-weight: 900; }
        .accent { color: #fff; border-bottom: 4px solid #fff; }
        .subtitle { color: #ccc; font-size: 1.1rem; margin-top: 15px; }

        .form-section { padding-bottom: 60px; }
        .project-form { background: #1b1b1b; padding: 50px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .form-group.full { grid-column: span 2; }
        
        h3 { color: #fff; font-size: 1.2rem; margin-top: 20px; border-left: 3px solid #fff; padding-left: 15px; text-transform: uppercase; letter-spacing: 0.1em; }
        
        label { display: block; color: #aaa; font-size: 0.9rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em; }
        
        input, select, textarea {
          width: 100%;
          background: #2a2a2a;
          border: 1px solid #444;
          padding: 15px;
          color: #fff;
          border-radius: 4px;
          font-family: inherit;
        }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #fff; }
        
        .file-label {
          border: 2px dashed #444;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.3s;
        }
        .file-label:hover { border-color: #fff; }
        .file-label input { display: none; }

        .form-footer { margin-top: 40px; text-align: center; border-top: 1px solid #333; padding-top: 30px; }
        .privacy { font-size: 0.8rem; color: #777; margin-bottom: 25px; }
        
        .submit-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 20px 50px;
          font-weight: 900;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .submit-btn:hover { background: #ddd; transform: translateY(-2px); }

        .success-msg { text-align: center; background: #1b1b1b; padding: 60px; border-radius: 8px; color: #fff; }
        .success-msg i { font-size: 5rem; color: #fff; display: block; margin-bottom: 20px; }
        .success-msg h2 { font-size: 2.5rem; margin-bottom: 15px; }
        .success-msg p { color: #aaa; margin-bottom: 30px; }
        .back-btn { background: none; border: 1px solid #fff; color: #fff; padding: 10px 30px; cursor: pointer; }

        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full { grid-column: span 1; }
          .project-form { padding: 30px 20px; }
        }
      `}</style>
        </div>
    );
}
