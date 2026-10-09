# Dimensioni dei formati pubblicitari Google Ads e Meta Ads — Ricerca verificata

**Cliente:** BlueDesign (bluedesign.biz) — Campagna "Sconti Autunnali 2026"
**Data ricerca:** 9 ottobre 2026
**Metodo:** ogni valore è stato verificato direttamente sulle pagine ufficiali (support.google.com / Google Ads Help, Meta Business Help Center / business.facebook.com, Facebook Ads Guide via snapshot Wayback set. 2026). Le discordanti sono riportate entrambe, con indicazione della fonte ufficiale più recente.

---

## 1. Google Ads Display — annunci banner caricati (uploaded display ads)

**Fonte ufficiale:** Google Ads Help — *"Specifiche degli annunci display caricati"*
https://support.google.com/google-ads/answer/1722096 (consultata 09/10/2026)

**Regole file (valori verificati):**
- **Formati file:** GIF, JPG, PNG
- **Peso massimo: 150 kB** (per annunci statici e GIF animate)
- **GIF animate:** durata max 30 secondi (in loop max 30 s), velocità **inferiore a 5 fps**
- HTML5/AMP: pacchetto ZIP max **600 kB**

### Tabella dimensioni approvate (tutte confermate sulla pagina ufficiale)

| Dimensione | Nome (secondo Google) | Verify |
|---|---|---|
| **200 × 200** | Quadrato piccolo (small square) | ✓ |
| **240 × 400** | Rettangolo verticale | ✓ |
| **250 × 250** | Quadrato | ✓ |
| **250 × 360** | Widescreen triplo | ✓ |
| **300 × 250** | Rettangolo in linea (inline rectangle) | ✓ |
| **336 × 280** | Rettangolo grande (large rectangle) | ✓ |
| **580 × 400** | Netboard | ✓ |
| **120 × 600** | Skyscraper | ✓ |
| **160 × 600** | Skyscraper largo (wide skyscraper) | ✓ |
| **300 × 600** | Annuncio half page | ✓ |
| **300 × 1050** | Verticale | ✓ |
| **468 × 60** | Banner | ✓ |
| **728 × 90** | Leaderboard | ✓ |
| **930 × 180** | Banner superiore | ✓ |
| **970 × 90** | Leaderboard grande | ✓ |
| **970 × 250** | Billboard | ✓ |
| **980 × 120** | Panorama | ✓ |
| **300 × 50** | Banner per dispositivi mobili | ✓ |
| **320 × 50** | Banner per dispositivi mobili | ✓ |
| **320 × 100** | Banner grande per dispositivi mobili | ✓ |

Le 11 dimensioni richieste dal brief (300x250, 336x280, 728x90, 300x600, 320x50, 468x60, 970x90, 970x250, 320x100, 250x250, 200x200) **sono tutte presenti e approvate**. In più esistono i formati secondari sopra elencati (alcuni pubblicati solo in regioni specifiche, v. "Suggerimento" sulla pagina ufficiale).

**Dimensioni "più comuni" secondo Google** (stessa pagina + pagina "Dimensioni più comuni", https://support.google.com/google-ads/answer/7031480):
- **Desktop:** 300×250, 336×280, 728×90, 970×90, 468×60, 300×600, 160×600, 250×250, 200×200
- **Mobile (dispositivi di fascia alta):** 300×200, 300×50, 300×100, 250×250, 200×200
- ⚠️ Nota pratica BlueDesign: i formati **320×50, 320×100 e 970×250**, pur approvati, non compaiono nell'elenco "più comuni" di Google → copertura inventario minore. Priorità ai formati desktop/mobile comuni.

---

## 2. Google Performance Max e Demand Gen

### 2a. Performance Max — immagini e loghi

**Fonte ufficiale:** Google Ads Help — *"Specifiche e requisiti di formato delle campagne Performance Max"*
https://support.google.com/google-ads/answer/17091269 (consultata 09/10/2026)
Fonte di supporto: Google Ads API — *"Asset Requirements"* https://developers.google.com/google-ads/api/performance-max/asset-requirements

| Asset | Proporzioni | Consigliato | Minimo | Peso max | Obbligatorio |
|---|---|---|---|---|---|
| Immagine orizzontale | **1.91:1** | **1200 × 628 px** | 600 × 314 px | 5120 kB (5 MB) | Sì (min 1, consigliate 4+, max 20) |
| Immagine quadrata | **1:1** | **1200 × 1200 px** | 300 × 300 px | 5120 kB (5 MB) | Sì (min 1, consigliate 4+, max 20) |
| Immagine verticale | **4:5** | **960 × 1200 px** | 480 × 600 px | 5120 kB (5 MB) | No (consigliate 2+, max 20) |
| Logo quadrato | **1:1** | 1200 × 1200 px | **128 × 128 px** | 5120 kB (5 MB) | Sì (1, max 5) |
| Logo orizzontale | **4:1** | 1200 × 300 px | 512 × 128 px | 5120 kB (5 MB) | No (max 5) |

- **Formati file:** JPG o PNG (max **5 MB** = 5120 kB).
- **Area sicura generica:** "il contenuto deve stare nell'80% centrale dell'immagine" (v. https://support.google.com/google-ads/answer/14530211 — *About image assets for Performance Max campaigns*). Google **non pubblica percentuali di safe zone** per i formati PMax come fa Meta: centro il soggetto, niente testo critico ai bordi.

### ⚠️ Chiarimento richiesto dal brief: 9:16 verticale (960x1200 vs 1080x1920)

Le specifiche ufficiali attuali di **Performance Max prevedono il formato verticale in proporzione 4:5 (960 × 1200 px consigliati; 480 × 600 minimi)** — **non 9:16**. Fonte: tabelle "Image asset specifications" su support.google.com/google-ads/answer/17091269 e 14530211, verificate 09/10/2026.

Il **9:16 (min 600 × 1067, consigliato 1080 × 1920)** esiste invece in **Demand Gen**, che sostituisce le campagne Discovery ed è oggi il veicolo Google per Stories/Shorts/YouTube vertical. Conclusione operativa: **gli asset 1080×1920 già prodotti per la campagna sono utilizzabili in Demand Gen (e opzionalmente come video/asset verticali), mentre per Performance Max il verticale corretto è 960×1200 (4:5)**.

### 2b. Demand Gen — immagini, loghi, video

**Fonte ufficiale:** Google Ads Help — *"Creatività della campagna Demand Gen: specifiche degli asset e linee guida"*
https://support.google.com/google-ads/answer/13704860 (consultata 09/10/2026)

| Asset | Proporzioni | Consigliato | Minimo | Peso max |
|---|---|---|---|---|
| Logo quadrato | 1:1 | 1200 × 1200 px | **144 × 144 px** | **150 KB** |
| Immagine quadrata | 1:1 | 1200 × 1200 px | 300 × 300 px | 5 MB |
| Immagine orizzontale | 1.91:1 | 1200 × 628 px | 600 × 314 px | 5 MB |
| Immagine verticale | 4:5 | 960 × 1200 px | 480 × 600 px | 5 MB |
| Immagine verticale | **9:16** | **1080 × 1920 px** | 600 × 1067 px | 5 MB (consigliata per YouTube Shorts) |
| Annunci display caricati (statici) | — | 300×250, 336×280, 728×90, 970×90, 160×600, 300×600, 320×50 | — | **150 KB** (.jpg/.png/.gif non animati) |
| Video 1:1 | 1:1 | 1080 × 1080 | — | MPEG (min 5 s) |
| Video 16:9 / 4:5 / 9:16 | — | 1920×1080 / 1080×1350 / **1080×1920** | — | min 5 s (10 s per YouTube in-stream) |

- **Formati file immagini:** .jpg o .png
- **Safe zone immagini 9:16 (Demand Gen):** "Le aree di sicurezza per le immagini 9:16 sono simili a quelle per i video 9:16" → rinvio ufficiale alle safe zone video Google (stessa pagina 13704860).
- Nota: minimo logo Demand Gen (144×144) ≠ minimo PMax (128×128): usa ≥144×144 per coprire entrambi.

---

## 3. Google Responsive Display Ads (annunci display adattabili)

**Fonte ufficiale:** Google Ads Help — *"Specifiche e requisiti di formato degli annunci display adattabili"*
https://support.google.com/google-ads/answer/17090561 (consultata 09/10/2026)

| Asset | Proporzioni | Consigliato | Minimo | Quantità |
|---|---|---|---|---|
| Immagine orizzontale | **1.91:1** | **1200 × 628 px** | **600 × 314 px** | 1–15 (consigliate 5) |
| Immagine quadrata | **1:1** | **600 × 600 px** | **300 × 300 px** | 1–15 (consigliate 5) |
| Logo quadrato | **1:1** | 1200 × 1200 px | **128 × 128 px** | 1–5 (consigliato 1) |
| Logo orizzontale | 4:1 | 1200 × 300 px | 512 × 128 px | 1–5 (consigliato 1) |
| Titoli | — | 30 caratteri max | — | 1–5 |
| Descrizioni | — | 90 caratteri max | — | 1–5 |
| Nome attività | — | 25 caratteri max | — | 1 |

**Risposta alla domanda del brief ("min 512px?"):** NO per le immagini — il minimo ufficiale è **600 × 314 px per il landscape 1.91:1** e **300 × 300 px per il quadrato 1:1**. I "512" compaiono solo come **minimo del logo orizzontale 4:1 (512 × 128 px)**. L'idea diffusa del "minimo 512 px" deriva probabilmente dalla vecchia pagina di aiuto che riportava 512×128 per i loghi.

**Consiglio pratico:** caricare comunque 1200 × 1200 px per il quadrato (peso massimo non pubblicato per RDA; stesso standard 5 MB di PMax/Demand Gen come misura di sicurezza) — così un solo set di asset serve sia RDA sia PMax.

---

## 4. Meta (Facebook / Instagram)

### 4a. Feed, Marketplace, Right column — requisiti minimi ufficiali per placement

**Fonte ufficiale:** Meta Business Help Center — *"Recommended minimum image pixel requirements across placements"*
https://www.facebook.com/business/help/469767027114079 (consultata 09/10/2026)

| Placement | Minimo consigliato (verificato) |
|---|---|
| Facebook Feed (1:1) | **1080 × 1080 px** |
| Facebook Feed (4:5) | **1440 × 1800 px** |
| Facebook Right column | **1200 × 1200 px** |
| Facebook Marketplace | **1200 × 1200 px** |
| Facebook Stories | 1080 × 1080 px (min) |
| Facebook Reels | 1080 × 1080 px (min) |
| Instagram Feed | **1080 × 1080 px** (min; "nessuna risoluzione massima") |
| Instagram Stories | 1080 × 1080 px (min) |
| Instagram Reels | 1080 × 1080 px (min) |
| Messenger Inbox | 1200 × 1200 px |
| Audience Network native/banner | 398 × 208 px |

**Instagram Feed — design requirements** (https://www.facebook.com/business/help/430958953753149, verificata):
- Rapporti supportati: **da 1.91:1 (orizzontale) a 9:16 (verticale)**; i formati più alti possono essere **ritagliati automaticamente a 4:5** (rapporto consigliato).
- Caricare la risoluzione più alta che rispetti i rapporti, **almeno 1080 × 1080 px**, nessun massimo.

**Facebook Feed — Ads Guide** (Ads Guide → image → facebook-feed, snapshot Wayback 16/09/2026):
- JPG/PNG, rapporto **4:5**, risoluzione consigliata **1440 × 1800 px**, peso max **30 MB**, larghezza min 600 px, tolleranza rapporto 3%, primary text 50–150 caratteri, headline 27.

**Right column — Ads Guide** (snapshot Wayback 16/09/2026):
- JPG/PNG, rapporto **1:1**, almeno **1080 × 1080 px**, min 254 × 133 px, headline 40 caratteri. Meta raccomanda di **non aggiungere testo sull'immagine** "per le piccole dimensioni".

**Marketplace — Ads Guide** (snapshot Wayback 23/09/2026, pagina ufficiale, contenuti in russo nell'archivio — valori non ambigui):
- JPG/PNG, rapporto **1:1**, almeno **1080 × 1080 px**, peso max **30 MB**, primary text 125, headline 40, description 30.

**Limite di peso immagini Meta: 30 MB** (fonte: schede Ads Guide e pagina Stories sotto) — il valore "30MB" citato nel brief è **confermato**. Video: 4 GB.

### 4b. Stories e Reels 1080×1920 — SAFE ZONES esatte

**Fonti ufficiali:**
1. Meta Business Help Center — *"About text overlays and the safe zone for ads in Stories and Reels"*: https://www.facebook.com/business/help/980593475366490 (consultata 09/10/2026)
2. Meta Ads Guide — schede placement Stories/Reels (snapshot Wayback set. 2026 di https://www.facebook.com/business/ads-guide/update/image/instagram-story e .../facebook-facebook-reels)

**Regola ufficiale (identica su Stories, Reels, Feed 9:16 e in-stream reels, FB+IG — da pagina 980593475366490):**
> Per gli annunci 9:16, tieni liberi dai contenuti chiave, testo e loghi i bordi (alto, basso e laterali). Per gli annunci Instagram Feed con rapporti non 9:16 (es. 1:1 o 4:5), tieni liberi i bordi inferiori e laterali. In Ads Manager è attivabile il toggle "Safe zone guardrail" (overlay giallo).

**Percentuali esatte (da Ads Guide, pagine ufficiali verificate):**
> "Consider leaving roughly **14% of the top, 35% of the bottom, and 6% on each side** of your asset free from text, logos or other key creative elements."

| Margine | % | A 1080×1920 | A 1440×2560 (risoluzione consigliata Meta) |
|---|---|---|---|
| Alto (badge profilo, progress bar, "Ad") | **14%** | **≈ 269 px** | ≈ 358 px |
| Basso (CTA, caption, reply field) | **35%** | **≈ 672 px** | ≈ 896 px |
| Latrici (sinistra + destra) | **6% ciascuno** | **≈ 65 px** | ≈ 86 px |
| **Area libera risultante** | — | **≈ 950 × 979 px centrata** | ≈ 1267 × 1306 px |

**Disclaimers su Reels:** lasciare libero il **40% inferiore** (pagina 980593475366490 — verificata: "If you're including disclaimers on your Reels ads, you should leave the bottom 40% of your ad free from text, logos and other key creative elements").

**Discordanza storica (da riportare):** le vecchie tabelle terze parti indicavano ~250 px sopra / ~340 px sotto per Stories. Meta **non pubblica più valori in pixel**: pubblica **percentuali per placement** (14/35/6 unificate per Stories+Reels+Feed 9:16 nelle pagine correnti). I px vanno therefore calcolati sul canvas: su 1080×1920 la vecchia "340 px" corrisponde a ~18%, oggi superata dalla regola **35% (672 px)** per gli annunci. Una sola pagina Facebook Stories video nell'Ads Guide riportava la vecchia formula 14/20; la fonte ufficiale più recente e uniforme è **14/35/6** (tutte le schede image/video Stories e Reels set. 2026 + Help Center). **Raccomandazione: progettare al 14/35/6.**

**Specifiche Stories (verificate su due pagine):**
- *Design requirements for Instagram Stories ads* (https://www.facebook.com/business/help/2222978001316177): risoluzione consigliata **1080 × 1920**, min 600 × 1067; foto **.jpg/.png max 30 MB**; video .mp4/.mov max 4 GB; max 60 min.
- *Ads Guide* (snapshot set. 2026): risoluzione consigliata **1440 × 2560** (evoluzione recente della raccomandazione), 9:16, 30 MB, min width 500 px, tolleranza 1%, primary text 125 caratteri.
- *Technical and creative specifications* (https://www.facebook.com/business/help/292794301336717): immagini .jpg/.png 30 MB max, 9:16 (e 4:5→1.91:1); video 1–15 s, min 500 px.
- **Discordanza risoluzione consigliata 9:16:** 1080×1920 (Help Center Stories) vs 1440×2560 (Ads Guide corrente). **La più recente è l'Ads Guide (1440×2560)**, ma 1080×1920 resta pienamente valido e compatibile — e coincide con i file già prodotti da BlueDesign. Nessuna criticità: esportare a 1080×1920 e, se si vuole massima nitidezza, rigenerare i master a 1440×2560.

### 4c. Rapporto testo/immagine (regola del 20%)

**Fonte ufficiale:** Meta Business Help Center — *"Best practices for image ads"*: https://www.facebook.com/business/help/388369961318508 (consultata 09/10/2026)
> **"There is no longer a limit on the amount of text that can exist in your ad image. The text overlay tool is no longer available."**

- La **regola del 20% di testo è stata abolita** (dal settembre 2020): nessun rifiuto automatico, nessun tool di controllo.
- Meta consiglia comunque: testo leggibile, font pulito e in contrasto, **un solo messaggio/CTA**, non ostruire la visuale; per right column e Reels image raccomanda di **non mettere testo sull'immagine** (immagini piccole).
- In pratica per "Sconti Autunnali": il testo promo (-30% ecc.) sull'immagine è permesso, ma tenerlo minimale migliora delivery e CPM.

---

## 5. Tabella riassuntiva — cosa usare per "Sconti Autunnali 2026" (cucine/ristrutturazioni, obiettivo chiamate + visite showroom)

Pubblico: proprietari di casa Milano + Monza-Brianza, 35–65 anni. Obiettivo: **chiamate a 02 3932 6173 e visite in showroom** (Piazzale Lugano 6/10 Milano, Besana Brianza).

| Priorità | Formato | Pixel | Dove usarlo | Perché |
|---|---|---|---|---|
| **1** | **Meta Feed 1:1** | **1080 × 1080** | FB+IG Feed, Marketplace, right column | Formato universale Meta, massima flessibilità di placement; minimo ufficiale 1080×1080 già prodotto |
| **2** | **Meta Stories/Reels 9:16** | **1080 × 1920** (safe zone 14% alto / 35% basso / 6% lati → area utile ≈ 950×979 centrata) | IG+FB Stories e Reels | Full-screen mobile dove sta il pubblico 35–65; i creativi 1080×1920 esistono già: va solo rispettata la safe zone (contenuto al centro) |
| **3** | **Google 1.91:1** | **1200 × 628** | PMax + Demand Gen + Responsive Display | Il formato orizzontale richiesto/consigliato da tutti i tipi di campagna Google; 1200×628 già in produzione |
| **4** | **Google 1:1** | **1200 × 1200** | PMax + Demand Gen (e RDA) | Secondo asset obbligatorio PMax; un solo file serve RDA (min 600×600) e PMax (1200×1200) |
| Supporto | Google verticale 4:5 | 960 × 1200 | PMax (opzionale), Demand Gen | Consigliato (non obbligatorio) per PMax; migliora la copertura YouTube/Discover |
| Supporto | Banner display statici | 300×250, 728×90, 300×600, 336×280 (+320×50 mobile) | GDN / Demand Gen "uploaded display" | Solo se si acquista inventory display tradizionale; max 150 kB, JPG/PNG/GIF |

**Fondamentali di produzione per la campagna:**
- Logo **quadrato 1:1 ≥ 1200×1200** (min PMax 128×128; min Demand Gen 144×144) da riusare su tutti i canali.
- Niente testo/promo critico nel **35% inferiore** e **14% superiore** dei 9:16 (lì finiscono CTA e badge): la CTA "Chiama ora 02 3932 6173" va gestita dal pulsante della piattaforma, non dall'immagine.
- Banner GDN ≤ **150 kB**: i PNG 1080×1080 vanno ricompattati/ridisegnati ai formati banner; il testopromo va dentro il limite di pixel, non dentro banner sovraccarichi.
- Contenuto importante nell'**80% centrale** per PMax (nessuna safe zone percentuale pubblicata da Google).

---

## Fonti (tutte verificate il 09/10/2026)

| # | Fonte | URL |
|---|---|---|
| 1 | Google Ads Help — Specifiche annunci display caricati (banner, 150 kB) | https://support.google.com/google-ads/answer/1722096 |
| 2 | Google Ads Help — Dimensioni più comuni display adattabili | https://support.google.com/google-ads/answer/7031480 |
| 3 | Google Ads Help — Specifiche annunci display adattabili (RDA) | https://support.google.com/google-ads/answer/17090561 |
| 4 | Google Ads Help — Specifiche Performance Max | https://support.google.com/google-ads/answer/17091269 |
| 5 | Google Ads Help — About image assets PMax (80% centrale, 5 MB) | https://support.google.com/google-ads/answer/14530211 |
| 6 | Google Ads Help — Demand Gen: specifiche asset | https://support.google.com/google-ads/answer/13704860 |
| 7 | Google Ads Help — Google Ads specs: formati e best practice | https://support.google.com/google-ads/answer/13676244 |
| 8 | Google Ads API — Asset Requirements PMax | https://developers.google.com/google-ads/api/performance-max/asset-requirements |
| 9 | Meta Business Help Center — Minimum image pixel requirements | https://www.facebook.com/business/help/469767027114079 |
| 10 | Meta Business Help Center — Design requirements Instagram Feed | https://www.facebook.com/business/help/430958953753149 |
| 11 | Meta Business Help Center — Design requirements Instagram Stories | https://www.facebook.com/business/help/2222978001316177 |
| 12 | Meta Business Help Center — Technical/creative specs Stories | https://www.facebook.com/business/help/292794301336717 |
| 13 | Meta Business Help Center — Safe zone e text overlays (14/35/6, 40% disclaimers) | https://www.facebook.com/business/help/980593475366490 |
| 14 | Meta Business Help Center — Best practices image ads (regola 20% abolita) | https://www.facebook.com/business/help/388369961318508 |
| 15 | Meta Ads Guide — Facebook Feed image (snapshot Wayback 16/09/2026) | https://www.facebook.com/business/ads-guide/update/image/facebook-feed |
| 16 | Meta Ads Guide — Facebook Right Column image (snapshot Wayback 16/09/2026) | https://www.facebook.com/business/ads-guide/update/image/facebook-right-hand-column |
| 17 | Meta Ads Guide — Facebook Marketplace image (snapshot Wayback 23/09/2026) | https://www.facebook.com/business/ads-guide/update/image/facebook-marketplace |
| 18 | Meta Ads Guide — Instagram Stories image (snapshot Wayback 23/09/2026) | https://www.facebook.com/business/ads-guide/update/image/instagram-story |
| 19 | Meta Ads Guide — Facebook Reels image (snapshot Wayback 16/09/2026) | https://www.facebook.com/business/ads-guide/update/image/facebook-facebook-reels |
