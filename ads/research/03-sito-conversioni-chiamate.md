# Ricerca 03 — Ottimizzare bluedesign.biz per convertire visitatori in CHIAMATE e visite in showroom

**Data:** 9 ottobre 2026 · **Sito:** bluedesign.biz (Next.js, home one-page + ~35 landing SEO + /promozioni + /contatti)
**Obiettivo della campagna:** massimizzare chiamate ai due numeri (Milano 02 39326173 · Besana Brianza 0362 1481773) e visite in showroom.
**Metodo:** ogni dato numerico è stato verificato via web_search e, dove possibile, contro la fonte primaria (URL controllati HTTP 200 in data odierna). I limiti/dubbi sulle fonti sono dichiarati esplicitamente.

---

## 0. Executive summary — cosa dice l'audit tecnico fatto oggi (curl, pagine reali)

Verifica diretta su `https://bluedesign.biz/` (+ redirect a www), `/contatti`, `/promozioni`, `/showroom`, `/cucine-moderne-minimal-milano`, `/studio-architettura`:

| Rilievo | Evidenza | Impatto sulla conversione a chiamate |
|---|---|---|
| **Nessun telefono nell'header** | 0 link `tel:` nell'header; sulla home i 4 link `tel:` stanno solo nella sezione contatti pre-footer e nel footer. Nessun tag `<header>` semantico. | Il contatto principale richiede scroll. Su mobile manca del tutto un pulsante sempre visibile. |
| **Nessuna barra sticky mobile** | Nessun elemento fisso con call-to-action telefonica su nessuna pagina analizzata. | Mancano le chiamate "impulse" durante lo scroll (i dati del §1 mostrano che il 70% dei ricercatori mobile chiama direttamente). |
| **Zero WhatsApp** | 0 occorrenze di `wa.me`/WhatsApp su tutte le pagine scaricate. | Canale di contatto dominante in Italia (§5) completamente assente. |
| **Canonical errati** | `/contatti`, `/promozioni`, `/showroom`, `/cucine-moderne-minimal-milano`, `/studio-architettura` dichiarano tutti `rel="canonical" href="https://www.bluedesign.biz"` (la home). | Le landing SEO e /promozioni si dichiarano duplicati della home: Google può non indicizzarle. (I canonical risultano "appena sistemati" ma l'output attuale punta ancora tutto alla root.) |
| **Title identico su 4 pagine diverse** | Home, /contatti, /promozioni, /showroom, /studio-architettura condividono lo stesso `<title>` "BlueDesign \| Architettura d'Interni di Lusso a Milano \| Cucine Composit". | Qualità delle SERP e message match degli ads compromessi (§6). |
| **Schema LocalBusiness: una sola sede, geo sbagliate** | Un solo blocco LocalBusiness (Milano); `geo` = 45.4642, 9.19 (centro di Milano, NON Piazzale Lugano, che è a nord-ovest della città). Besana Brianza completamente assente dallo schema. Manca `sameAs`, `priceRange`, `FurnitureStore` come tipo. | Incoerenza NAP/geo con Google Business Profile → segnali locali indeboliti (§4). |
| **Punto di forza: /promozioni** | 28 link `tel:` (≈2 per pezzo outlet, tutti verso il numero Milano) su 26 prodotti con prezzo scontato. | Ottima base già pronta: ogni scheda è potenzialmente un click-to-call. Manca però anche solo il numero di Besana sulla pagina. |
| **Orari veri (dallo schema FAQ)** | Lun 14:30–19:30 · Mar–Sab 9:00–12:30 / 14:30–19:30 · Dom chiuso. | Da mantenere identici su sito + GBP (NAP consistency, §3–4). |

Nota redirect: `bluedesign.biz` → 307 → `www.bluedesign.biz` (200). I canonical usano www: coerente.

---

## 1. Click-to-call: dati e best practice di posizionamento

### 1.1 I numeri (verificati)

| Dato | Fonte primaria | Anno |
|---|---|---|
| **Il 70% dei ricercatori mobile usa il pulsante "chiama" direttamente dai risultati di ricerca** per contattare un'attività | Google, Inside AdWords: https://adwords.googleblog.com/2013/09/new-research-shows-that-70-of-mobile.html (ricerca Google/Ipsos su 3.000 utenti smartphone; analisi di riscontro: https://www.searchenginewatch.com/2013/09/24/google-70-of-mobile-searchers-call-a-business-directly-from-search-results-study/) | 2013 |
| **Gli annunci Google generavano oltre 40 milioni di chiamate/mese; il 70% delle chiamate supera i 30 secondi; durata media ~6 minuti** | Stessa ricerca Google/Ipsos, ripresa da Search Engine Watch (URL sopra) | 2013 |
| **Le chiamate in entrata convertono 10–15 volte più dei lead web** | BIA/Kelsey, ripresa da Conversion Sciences: https://conversionsciences.com/mobile-phone-calls-higher-conversion-rates/ — ⚠️ nota onestà: il report originale BIA/Kelsey risale al ~2011 e il PDF originale non è liberamente scaricabile (il tema è trattato dal studio "Call Commerce: A $1 Trillion Economic Engine", paginato qui: https://shop.biakelsey.com/product/call-commerce-1-trillion-economic-engine). La stima è ampiamente citata nel settore ma la fonte primaria è datata: usala come argomento di priorità, non come KPI previsto. | ~2011–2012 |
| **Il 88% dei consumatori che cerca un'attività locale da mobile chiama o visita entro 24 ore** (77% contatta un'attività: 61% chiama, 59% visita) | Google/Ipsos "Mobile Movement": http://googlemobileads.blogspot.com/2011/04/smartphone-user-study-shows-mobile.html — ⚠️ la formulazione "88% chiama o visita" circolante nei blog è una semplificazione: la stat corretta è "88% degli utenti che cercano informazioni locali compie un'azione entro un giorno" (contesto in Street Fight: http://streetfightmag.com/2014/08/20/the-great-divide-traditional-businesses-still-failing-to-reach-online-consumers) | 2011 |
| Case CRO: spostare il pulsante di chiamata in una **sticky footer bar mobile** ha portato **+46% di chiamate in un mese** (impresa idraulica, Tampa) | Pipeline On: https://pipelineon.com/blog/click-to-call-button-placement/ (case editoriale, non studio accademico: usarlo come indicazione di direzione) | 2024–25 |

**Lettura per bluedesign:** un arredo cucina è un acquisto ad alta considerazione ma le ricerche "showroom cucine Milano" da mobile hanno intento immediato. Ogni attrito sul tap-to-call è chiamata persa; l'assenza totale di un pulsante fisso su mobile è il singolo gap più importante del sito.

### 1.2 Best practice di posizionamento (consolidate)

1. **Sticky bar mobile (imprescindibile):** barra fissa in basso con massimo 2–3 azioni: **CHIAMA** (due numeri o il più pertinente), **WhatsApp**, **INDICAZIONI** (link maps). Altezza ~48–56px, non copre contenuti essenziali, colori ad alto contrasto con il brand. Il pollice raggiunge la zona bassa dello schermo senza riposizionare la mano. Applicarla **a tutte le pagine**, non solo alla home: le campagne Ads atterreranno anche su /promozioni e sulle landing.
2. **Header desktop:** numero completo **visibile e cliccabile** (`<a href="tel:+390239326173">02 39326173</a>`), non solo testo. Oggi sul sito è assente dall'header: ripristinarlo. Affiancare (testo o nel menu contatti) il numero di Besana per il bacino Brianza.
3. **Footer:** entrambi i numeri con `tel:`, indirizzi, orari (già in parte presenti: 2 link tel nel footer home).
4. **Ogni scheda prodotto outlet (/promozioni):** oltre ai 28 `tel:` esistenti, rendere il numero **visibile accanto al prezzo scontato** ("Disponibile in showroom — chiama per riservarlo: 02 39326173"), perché il prezzo scontato è il trigger emotivo che genera la chiamata.
5. **Pagina /contatti:** numeri giganti cliccabili in cima (prima del form): chi vuole chiamare non deve leggere il form. Il form (Resend+Turnstile) resta per chi preferisce scrivere.
6. **Tracciamento:** ogni `tel:` con evento GA4 (es. `click_telefono_milano`, `click_telefono_besana`) e, in Ads, conversione chiamata (§7). Oggi esiste `gtag_report_conversion`: estenderla ai click tel.
7. **Tip:** su /promozioni evidenziare "riserva il pezzo con una chiamata" — l'urgenza del pezzo unico outlet spinge al telefono più del form.

---

## 2. "Near me" e visita in negozio

| Dato | Fonte primaria | Anno |
|---|---|---|
| **"near me" / ricerche locali "vicino a me" sono cresciute ~6 volte (1,3× solo 2014–15)** | Think with Google, "I want-to-go moments": https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/near-me-search-queries-trends/ (PDF micro-moments: https://www.thinkwithgoogle.com/_qs/documents/645/consumer-search-i-want-to-go-micro-moments-b.pdf) | 2016 |
| **Il 76% delle persone che cerca qualcosa "nelle vicinanze" da smartphone visita un'attività entro un giorno; il 28% di quelle ricerche termina in acquisto** | Google/Purchased, "Mobile redefined the consumer decision journey" — **PDF originale (verificato attivo): https://www.thinkwithgoogle.com/_qs/documents/37/mobile-redefined-consumer-decision-shopper-journey-b.pdf** | 2016 |

La stat del 76% è **reale e attribuibile a Google (studio con Purchased, 2016)**: è la fonte che citano Shopify e decine di aggregatori; il PDF Think with Google sopra è l'originale. Va citata con l'anno (2016), non come dato corrente.

**Lettura per bluedesign:** le ricerche "showroom cucine milano", "cucine outlet milano", "arredamento vicino a me" sono esattamente query i-want-to-go. Tradurre l'intento in visita richiede tre cose: GBP impeccabile con **indicazioni a un tap** (§3), schema LocalBusiness con geo/orari corretti (§4 — oggi le geo puntano al centro di Milano, non a Piazzale Lugano), e sulle pagine un blocco contatti con **"Vieni in showroom — Piazzale Lugano 6/10, Milano" + pulsante Indicazioni (link Google Maps) + orari**. Aggiungere la stessa coppia showroom/studio con link maps a /showroom, /contatti e nelle landing di zona.

---

## 3. Google Business Profile: ottimizzazione per le chiamate

Dati e regole ufficiali:

| Dato/Regola | Fonte | Anno |
|---|---|---|
| Schede con foto: **+42% richieste indicazioni stradali, +35% click al sito, 90% più probabilità di visita dal profilo** | Google/Ipsos via DAC Group: https://www.dacgroup.com/insights/local-search-news/why-photos-on-your-google-business-profile-matter/ | 2014–17 (statistica storica Google/Ipsos) |
| **Il numero di telefono del profilo non deve essere un numero di inoltro/tracking** (regola esplicita GBP) | Google: https://support.google.com/business/answer/3038177 | corrente |
| Il numero mostrato nel profilo determina da dove parte la chiamata dell'utente: la coerenza col numero del sito è anche ranking locale | Consolidato nei fattori di ranking locali (cita Whitespark/Backlinko per il quadro: https://backlinko.com/local-seo-stats) | 2024–26 |

**Checklist GBP per entrambe le sedi (Showroom Milano Piazzale Lugano 6/10 — Studio Besana Brianza Via Viarana 26):**
1. **Telefono = numero reale** (no tracking) su entrambi i profili; identico al sito (stessa formattazione).
2. **Categorie:** primaria orientata al commercio ("Showroom di cucine" / "Arredamento" — la categoria primaria è il fattore di ranking locale più impattante), secondarie: Studio di architettura, Cucine e cucine a misura, Mobili da bagno, Illuminazione.
3. **Orari:** identici al sito (lun 14:30–19:30; mar–sab 9:00–12:30 e 14:30–19:30; dom chiuso) e aggiornati per festività.
4. **Foto:** showroom reale, cucine montate, bagni, dettagli; caricate settimanalmente (la freschezza delle foto correla con le azioni sul profilo).
5. **Post Google settimanali:** un pezzo outlet alla settimana con prezzo e "Chiama: 02 39326173" + link UTM a /promozioni (es. `?utm_source=gbp&utm_medium=post&utm_campaign=outlet`).
6. **Recensioni:** flusso sistematico post-visita (QR code in cassa/showroom → pagina recensioni); rispondere a tutte, citando nei commenti i servizi ("showroom Milano", "cucine Composit") e **il numero** nella risposta (contribuisce alla coerenza NAP).
7. **Link sito** con UTM separati per sede; **attributi** (parcheggio, appuntamento consigliato); **messaggi/FAQ** con orari e outlet.
8. **Report GBP:** monitorare settimanalmente le metriche "chiamate" e "richieste indicazioni" di entrambe le sedi (baseline → dopo le modifiche).

---

## 4. Schema.org LocalBusiness: impatto e specifiche per bluedesign

**Impatto sui rich results (fonti primarie Google):**
- Rotten Tomatoes: **+25% CTR** sulle pagine con structured data (100.000 pagine); Food Network **+35% visite**; Nestlé **+82% CTR** sulle pagine apparse come rich results — Google Search Central: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Documentazione ufficiale LocalBusiness (proprietà richieste/consigliate, formato JSON-LD): https://developers.google.com/search/docs/appearance/structured-data/local-business
- Nessun dato pubblico isola "chiamate generate dallo schema": l'effetto passa per maggiore visibilità (knowledge panel, telefono/orari in SERP, coerenza con GBP). È un abilitatore, non una bacchetta.

**Stato attuale (audit di oggi):** un solo blocco LocalBusiness (solo Milano), `geo` = 45.4642/9.19 che punta al **centro di Milano e non a Piazzale Lugano**, Besana assente, tipo generico `LocalBusiness`, niente `sameAs`, niente `priceRange`. FAQPage già presente e corretta.

**Cosa implementare:**
1. **Due blocchi distinti** con `@id` separati:
   - `FurnitureStore` (tipo più specifico di LocalBusiness) — Showroom: Piazzale Lugano 6/10, 20158 Milano, tel +390239326173, **geo corrette per Piazzale Lugano** (nord-ovest Milano, ~45.49, 9.18 — da ricavare dal link maps reale, NON le attuali).
   - `FurnitureStore`/`LocalBusiness` — Studio: Via Viarana 26, 20876 Besana Brianza (MB), tel +3903621481773, geo reali della via.
2. Proprietà per entrambi: `openingHoursSpecification` (identiche a GBP), `image`, `priceRange` (es. "€€€"), `sameAs` (profili GBP/social/Instagram), `areaServed` (Milano, Monza-Brianza), `department`/`containedInPlace` se si vuole legare studio→showroom.
3. `ContactPoint` con `contactType: "sales"` e `telephone` su entrambi (l'attuale Organization schema espone solo il numero di Milano).
4. Validare con il [Test dei risultati avanzati di Google](https://search.google.com/test/rich-results) e monitorare Search Console → Enhancements.
5. Coerenza NAP: nome, indirizzo, telefono **identici** su sito, GBP, annotazioni/schema — è uno dei segnali di ranking locale consolidati.

---

## 5. WhatsApp click-to-chat per l'Italia

**Adozione (dati verificati):**
- **WhatsApp è il social più usato in Italia: 90,3% degli utenti internet 16–64 anni** e anche il più "preferito" (40,7%) — We Are Social / Digital 2024 dati italiani: https://wearesocial.com/it/blog/2024/02/digital-2024-i-dati-italiani/ (2024)
- **35,7 milioni di utenti in Italia a luglio 2024 (~83,8% degli adulti 18–74)** — dati Audiweb ripresi da: https://www.digitech.news/digital/22/10/2024/whatsapp-si-riconferma-lapp-di-messaggistica-piu-usata-in-italia/ (2024)
- Come funziona il link ufficiale `wa.me/<numero>?text=<messaggio precompilato>` — WhatsApp Help Center: https://faq.whatsapp.com/5913398998672934/

Non esiste una statistica pubblica verificabile del tipo "il pulsante WhatsApp converte X%" affidabile a livello di sito (le cifre circolanti su blog non sono tracciabili a uno studio). Ciò che è solido è l'adozione: in Italia WhatsApp è il canale di messaggistica di fatto universale per le PMI.

**Best practice pulsante per bluedesign:**
1. **Pulsante fisso in basso a destra** su tutte le pagine (verde WhatsApp, icona riconoscibile), che non copra la sticky bar: su mobile integrarlo NELLA sticky bar come seconda azione accanto a "Chiama".
2. **Numero dedicato o il numero dello showroom**: usare un numero dove c'è davvero copertura di risposta; istruire l'ufficio su orari di risposta (aspettativa: risposta in giornata).
3. **Messaggio precompilato di contesto** (aumenta la qualità del contatto): `https://wa.me/3933XXXXXXXX?text=Ciao,%20ho%20visto%20l'outlet%20sul%20sito%20e%20vorrei%20informazioni` — su /promozioni precompilare col nome del pezzo (si può fare per-pagina con l'ID prodotto).
4. **Link anche in /contatti** accanto ai due numeri ("Scrivici su WhatsApp: risposta entro X ore").
5. Tracciare i click `wa.me` come evento GA4/conversione Ads (contatto qualificato).
6. Use case tipici che il canale serve bene: foto del proprio ambiente, misura parete, disponibilità pezzo outlet, orario showroom — tutte richieste in cui il cliente italiano preferisce lo scritturale alla telefonata.

---

## 6. Message match ads→landing e velocità

### 6.1 Message match
- Definizione e principio ufficiale (Unbounce): "quanto bene la pagina ripete/rafforza la promessa dell'annuncio che ha portato il visitatore" — https://unbounce.com/conversion-glossary/definition/message-match/
- Implicazione Ads pratica: scarsa corrispondenza = basso Quality Score = CPC più alti +conversioni perse. Non esiste una % pubblica verificabile "message match = +X%" attribuibile a Google: il principio è consolidato, i numeri precisi che girano online non hanno fonte primaria.

**Per bluedesign:** oggi /promozioni ha lo stesso title della home e H1 di brand: un annuncio "Cucine outlet fino al -60%" che atterra lì deve trovare **l'H1 con la stessa promessa** ("Outlet cucine e arredamento — 26 pezzi unici fino al -60%"), i prezzi subito visibili, e il telefono in cima. Struttura consigliata:
- Annunci outlet → `/promozioni` (H1 con la promessa dell'annuncio + prezzi + tel).
- Annunci "cucine Milano" → landing dedicata (es. `/cucine-moderne-minimal-milano`) con H1 coerente + blocco chiamata.
- Annunci showroom/visita → `/showroom` o `/contatti` con mappa e orari.
- Title/H1 per-pagina (oggi duplicati): `/contatti` → "Contatti e Orari — Showroom Milano e Studio Besana Brianza | BlueDesign"; `/promozioni` → "Outlet Cucine e Arredamento: 26 Pezzi Scontati | BlueDesign Milano".

### 6.2 Velocità → conversione (fonti primarie verificate)
| Dato | Fonte | Anno |
|---|---|---|
| **+0,1s di velocità mobile = +8,4% conversioni retail, +9,2% valore medio ordine; +10,1% travel; fino a +8,3% di improvement sulla bounce rate lead-gen** | Studio "Milliseconds Make Millions" — Google commissionato, condotto da 55 e Deloitte Digital, 37 brand, 30M+ sessioni, 30 giorni: **https://web.dev/case-studies/milliseconds-make-millions/** | 2020 |
| **Il 53% dei visitatori mobile abbandona una pagina che impiega più di 3 secondi** (tempo medio di load mobile misurato: 22s) | Google, "Mobile page speed benchmarks" (PDF Think with Google): https://www.thinkwithgoogle.com/_qs/documents/1632/au-mobile-page-speed-new-industry-benchmarks.pdf | 2017 |
| **LCP "buono" = ≤ 2,5s** (soglia Core Web Vitals) | https://web.dev/articles/vitals | corrente |

**Lettura per bluedesign:** con **LCP mobile a 12,1s** il sito perde più della metà dei visitatori prima che la pagina si presenti (soglia abbandono 3s) e sta a ~5× la soglia CWV. Rientra nel riquadro Deloitte: anche un miglioramento di 1 secondo (10× lo step misurato dallo studio, quindi l'effetto atteso è ampio ma da misurare localmente) agisce direttamente sulle conversioni — e su ogni click Ads pagato. Priorità tecniche tipiche Next.js: immagini hero in formati moderni con `next/image` e dimensioni corrette, preload della hero, font self-hosted con `font-display: swap`, riduzione JS idratato, CDN.

---

## 7. Call tracking Google Ads senza rompere SEO e NAP

Come funziona (fonti Google verificate):
- **Numeri di inoltro Google dinamici sul sito**: Google sostituisce temporaneamente il numero mostrato con un numero Google (connessione gratuita) per attribuire la chiamata a keyword/annuncio — https://support.google.com/google-ads/answer/6095883
- **Call reporting** (conversioni chiamata, durata minima, import in Ads) — https://support.google.com/google-ads/answer/2454052
- **Regola GBP esplicita**: nel profilo Google Business va il numero reale, non un numero di tracking — https://support.google.com/business/answer/3038177

**Regole per non perdere SEO/NAP (consolidato di settore + regole Google):**
1. **Il numero reale è quello "canonico"**: nel footer, nella pagina /contatti, nello schema LocalBusiness, su GBP, in tutto ciò che è indicizzazione/citazione → sempre 02 39326173 e 0362 1481773.
2. La **sostituzione dinamica** dei numeri di inoltro avviene **solo via JavaScript sui visitatori provenienti dagli annunci** (dynamic number insertion): il crawler vede il numero reale → lo schema e l'HTML restano coerenti. Renderizzare il numero reale server-side e sostituire solo client-side dopo il load.
3. Attivare il tracking **solo sulle pagine di destinazione Ads** (landing e /promozioni), lasciando /contatti e l'header col numero vero; oppure limitare la DNI ai soli referrer google/cpc.
4. In Ads usare anche gli **asset di chiamata (call assets)** col numero reale e le **conversioni "chiamate dagli annunci"**; importare le chiamate dal sito (tracciate coi numeri inoltro) come conversioni per il bidding.
5. Alternativa senza numeri Google: tracciare solo l'evento GA4 `click tel:` (menziona "phone_click"), perdendo l'attribuzione a livello di keyword ma con zero rischi NAP.
6. I numeri di inoltro Google possono cambiare per sessione: **non usarli mai** in testo indicizzato, citazioni, annunci reaches offline, o GBP.

---

## 8. Checklist finale PRIORITIZZATA per bluedesign.biz (impatto × sforzo)

Legenda: 🟢 P0 — fare subito (alto impatto, basso sforzo) · 🟡 P1 — prossime 2–4 settimane · ⚪ P2 — quando possibile. Pagine reali citate (da sitemap e curl): `/` (one-page), `/contatti`, `/promozioni`, `/showroom`, `/progettazione`, `/studio-architettura`, `/chi-siamo`, `/cucine-moderne-minimal-milano`, `/cucine-classiche-tradizionali-milano`, `/bagni-lusso-spa-milano`, `/illuminazione-interni-milano`.

### 🟢 P0 — Quick win (giorni, non settimane)
| # | Azione | Pagine | Impatto | Sforzo |
|---|---|---|---|---|
| 1 | **Sticky bar mobile: CHIAMA + WhatsApp + INDICAZIONI** su tutte le pagine | tutte (obbligatoria su /promozioni) | ★★★★★ | basso (mezza giornata) |
| 2 | **Telefono cliccabile nell'header desktop** + numero Besana nel menu/footer di ogni pagina | tutte | ★★★★ | basso |
| 3 | **Attivare WhatsApp Business + pulsante wa.me** con messaggio precompilato (su /promozioni: precompilato per pezzo) | tutte, /contatti | ★★★★ | basso |
| 4 | **Correggere i canonical per-pagina** (oggi ogni pagina dichiara come canonical la home → rischia deindicizzazione di ~35 landing) | tutte | ★★★★ | basso |
| 5 | **Secondo blocco schema per sede Besana + geo corrette per Piazzale Lugano** (oggi geo = centro Milano) + `sameAs`, `priceRange`, tipo `FurnitureStore` | tutte (layout) | ★★★★ | basso |
| 6 | **GBP: numero reale, categorie, foto, orari allineati al sito; post settimanale outlet con link UTM a /promozioni** | GBP (2 sedi) | ★★★★ | basso |
| 7 | **Titoli/H1 per-pagina** (contatti, promozioni, showroom — oggi 4 pagine con lo stesso title) | 4+ pagine | ★★★ | basso |
| 8 | **Call reporting Ads + conversioni click tel e wa.me in GA4** (estendere `gtag_report_conversion`) | tutte | ★★★ | basso |

### 🟡 P1 — Breve termine (2–4 settimane)
| # | Azione | Pagine | Impatto | Sforzo |
|---|---|---|---|---|
| 9 | **Message match ads→landing**: annunci outlet → /promozioni con H1 coerente e prezzi above the fold; annunci cucina → landing dedicate con blocco "Chiama l'showroom" | /promozioni, landing cucine/bagni | ★★★★ | medio |
| 10 | **Performance: portare LCP 12,1s sotto 2,5s** (immagini hero, preload, JS idratato) — rif. Deloitte +8,4%/0,1s e 53% abbandono >3s | tutte | ★★★★★ | alto |
| 11 | **Numeri evidenziati sulle schede outlet** ("Chiama per riservare: 02 39326173" accanto al prezzo; anche Besana per chi è in Brianza) | /promozioni | ★★★ | medio |
| 12 | **Recensioni GBP: flusso sistematico post-visita (QR in showroom) + risposta a tutte** | GBP + / (social proof) | ★★★ | medio |
| 13 | **Blocco contatti con mappa/orari/link indicazioni in chiusura di ogni landing SEO** | 11+ landing | ★★★ | medio |
| 14 | **QR code in showroom** (recensioni + WhatsApp) e cartello "26 pezzi outlet sul sito" | showroom fisico | ★★ | basso |

### ⚪ P2 — Medio termine
| # | Azione | Note |
|---|---|---|
| 15 | Numeri di inoltro Google con DNI solo sui/referrer cpc (§7) | solo se serve attribuzione per keyword |
| 16 | Landing dedicate per campagne (es. "cucine outlet Brianza" → variante di /promozioni con tel Besana in cima) | message match completo |
| 17 | Video tour showroom (GBP + pagine) | coinvolgimento |
| 18 | Monitoring: Search Console (rich results/indicizzazione landing), GBP insights chiamate/indicazioni, GA4 eventi tel/wa | ciclo continuo |

---

## Fonti (tutte verificate HTTP 200 il 09/10/2026)

**Click-to-call e chiamate**
1. Google Inside AdWords — "70% of mobile searchers call from search results": https://adwords.googleblog.com/2013/09/new-research-shows-that-70-of-mobile.html
2. Search Engine Watch — analisi della ricerca Google/Ipsos + Marchex: https://www.searchenginewatch.com/2013/09/24/google-70-of-mobile-searchers-call-a-business-directly-from-search-results-study/
3. Conversion Sciences — BIA/Kelsey 10–15x: https://conversionsciences.com/mobile-phone-calls-higher-conversion-rates/
4. BIA/Kelsey — "Call Commerce: A $1 Trillion Economic Engine": https://shop.biakelsey.com/product/call-commerce-1-trillion-economic-engine
5. Google/Ipsos Mobile Movement 2011 (88% azione entro 1 giorno; 61% chiama / 59% visita): http://googlemobileads.blogspot.com/2011/04/smartphone-user-study-shows-mobile.html
6. Street Fight — contesto critico della stat 2011: http://streetfightmag.com/2014/08/20/the-great-divide-traditional-businesses-still-failing-to-reach-online-consumers
7. Pipeline On — case sticky bar +46% chiamate: https://pipelineon.com/blog/click-to-call-button-placement/

**Near me / visite**
8. Think with Google — near me trends / I want-to-go moments: https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/near-me-search-queries-trends/ (+ PDF: https://www.thinkwithgoogle.com/_qs/documents/645/consumer-search-i-want-to-go-micro-moments-b.pdf)
9. Google/Purchased 2016 — **fonte originale del 76% / 28%**: https://www.thinkwithgoogle.com/_qs/documents/37/mobile-redefined-consumer-decision-shopper-journey-b.pdf

**GBP**
10. Regola telefono GBP (no tracking numbers): https://support.google.com/business/answer/3038177
11. Google/Ipsos foto GBP (+42% indicazioni, +35% click sito, +90% visite) via DAC Group: https://www.dacgroup.com/insights/local-search-news/why-photos-on-your-google-business-profile-matter/
12. Fattori ranking locale (quadro): https://backlinko.com/local-seo-stats

**Schema.org**
13. Google Search Central — LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
14. Google Search Central — case study CTR structured data (Rotten Tomatoes +25%, Food Network +35%, Nestlé +82%): https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

**WhatsApp**
15. WhatsApp Help Center — click to chat (wa.me): https://faq.whatsapp.com/5913398998672934/
16. We Are Social — Digital 2024 Italia (WhatsApp 90,3% utenti 16–64): https://wearesocial.com/it/blog/2024/02/digital-2024-i-dati-italiani/
17. Audiweb 2024 via Digitech (35,7M utenti WhatsApp Italia): https://www.digitech.news/digital/22/10/2024/whatsapp-si-riconferma-lapp-di-messaggistica-piu-usata-in-italia/

**Message match e velocità**
18. Unbounce — definition message match: https://unbounce.com/conversion-glossary/definition/message-match/
19. Google/55/Deloitte — "Milliseconds Make Millions" (+8,4% retail per 0,1s): https://web.dev/case-studies/milliseconds-make-millions/
20. Google — mobile page speed benchmarks (53% abbandono >3s): https://www.thinkwithgoogle.com/_qs/documents/1632/au-mobile-page-speed-new-industry-benchmarks.pdf
21. web.dev — Core Web Vitals (LCP ≤ 2,5s): https://web.dev/articles/vitals

**Call tracking**
22. Google Ads Help — call tracking sito con numeri di inoltro: https://support.google.com/google-ads/answer/6095883
23. Google Ads Help — call reporting: https://support.google.com/google-ads/answer/2454052

**Audit del sito (primario, fatto in questa sessione):** curl delle pagine `bluedesign.biz/`, `/contatti`, `/promozioni`, `/showroom`, `/cucine-moderne-minimal-milano`, `/studio-architettura` + parsing HTML (canonical, title, tel:, ld+json, WhatsApp, sitemap).
