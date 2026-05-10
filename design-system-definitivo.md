# ✅ DESIGN SYSTEM DEFINITIVO v4.0
## Bluedesign Milano – Sito Web
### Dark Luxury • Nessuna interpretazione • Tutto fissato

---

## 🎯 FONDAMENTI (immutabili)

- **Claim Hero**: REALIZZA IL TUO SPAZIO IDEALE
- **Sottotitolo Hero**: Esperienza e Creatività per Trasformare i Tuoi Ambienti in Opere d'Arte
- **Claim Footer**: Eleganza funzionale dal 1990
- **Valori**: Design • Qualità • Servizio
- **Brand voice**: Raffinata, precisa, premium, dark luxury
- **Logo**: Solo versione ufficiale (usa link originale)

---

## 🎨 TOKENS CSS (tutti i valori esatti)

```css
:root {
  --bg-primary: #000000;
  --bg-secondary: #1b1b1b;
  --bg-tertiary: #333333;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --text-muted: #999999;
  --accent: #555555;
  --gold: #c9a962;
  --error: #cc0000;
  --success: #00cc66;
  --radius: 4px;
  --shadow: 0 10px 30px rgba(201,169,98,0.15);
  --transition: all 300ms cubic-bezier(0.4,0,0.2,1);
}
```

---

## 🔤 TIPOGRAFIA (Montserrat – Google Fonts)

- **Pesi**: 300, 400, 500, 600, 700, 800, 900
- **H1**: clamp(2.5rem, 5vw, 4rem) / 700
- **H2**: clamp(2rem, 4vw, 3rem) / 600
- **H3**: clamp(1.5rem, 3vw, 2.25rem) / 500
- **Body**: clamp(1rem, 2vw, 1.125rem) / 400
- **Button**: 1.125rem / 600
- **Caption**: clamp(0.875rem, 1.5vw, 1rem) / 300

---

## 📐 LAYOUT & GRID

- **Container**: max 1536px
- **Padding**: 40px (desktop) • 24px (tablet) • 16px (mobile)
- **Grid**: 12 colonne • Gutter 24px
- **Breakpoints**: 320 • 480 • 640 • 768 • 1024 • 1280 • 1536 px
- **Spaziature**: multipli di 8px (0-160px)
- **Approach**: Mobile-first + Container Queries

---

## 🧩 COMPONENTI (tutti con varianti + stati)

### Buttons (height 56px • radius 4px • padding 0 40px)

| Variante | Background | Text | Hover |
|----------|------------|------|-------|
| Primary | #c9a962 | #000000 | #b38a4a |
| Secondary | border 2px #c9a962 | #c9a962 | bg #c9a962 |
| Ghost | transparent | #ffffff | underline |

**Stati**:
- Focus: outline 3px #c9a962
- Disabled: opacity 0.4
- Active: scale 0.98

### Cards (ratio 16:10)

**Varianti**: Progetto • Servizio • Statistica • Testimonial

**Hover**: scale 1.02 + gold shadow

**Contenuto obbligatorio**: immagine + titolo + descrizione + CTA

### Navigation (top bar fissa dark)

- **Layout**: Logo left • Menu centro
- **Menu**: Home • Chi siamo • Showroom • Progetti • Contatti
- **Mobile**: Hamburger full-screen slide
- **Stati**: hover gold underline • active bold

### Forms (input height 56px)

**Campi**: Nome • Cognome • Email • Telefono • Messaggio

**Stati**:
- Focus: border #c9a962
- Error: #cc0000

### Hero

- Video sfondo + parallasse
- Overlay 40% dark
- Logo strip scorrimento infinito (partner)

### Footer

- Logo • Descrizione • Social (Facebook)
- Colonne: Servizi • Azienda • Contatti
- Copyright 1990-2026

---

## 📍 PAGINE COMPLETE (struttura esatta)

### 1. Hero
- Video + titolo + sottotitolo + logo strip

### 2. Chi Siamo
- Showroom image + storia 1990 + 2 card stats (30+ anni, 500+ progetti) + 3 valori

### 3. Showroom/Servizi
- 6 card griglia:
  1. Progettazione d'Interni
  2. Cucine Composit
  3. Ristrutturazione
  4. Progettazione Living
  5. Zona Notte
  6. Arredo Bagni

### 4. Progetti
- 6 card masonry:
  1. Villa Paradiso (Milano)
  2. Loft City (Roma)
  3. Casa Elegance (Torino)
  4. Villa Serena (Firenze)
  5. Penthouse Luxury (Milano)
  6. Casale Rustico (Chianti)

### 5. Testimonials
- 3 card + partner strip (Composit, Gaggenau, Neff, Siemens, Bosch, Whirlpool)

### 6. Contatti
- Form + info:
  - Piazzale Lugano 6/10 Milano
  - 02 39326172
  - 02 39326173
  - info@bluedesign.biz
  - Orari

---

## 📸 IMAGERY & ICONS

- **Formato**: WebP • Next.js Image • Lazy loading
- **Ratio**: 16:10 progetti • 1:1 icone
- **Effetti**: Glassmorphism • Gradient overlay • Radial pattern

**Icon set**: Stroke 1.5px • colore #c9a962 o #ffffff

---

## ✨ ANIMAZIONI & EFFETTI

- **Libreria**: Framer Motion
- **Parallasse**: scroll
- **Hover**: scale + translate + gold
- **Logo strip**: infinito 300ms
- **Transizioni**: 300ms cubic-bezier
- **Reduced motion**: support

---

## ♿ ACCESSIBILITY & PERFORMANCE

- **Standard**: WCAG 2.2 AA • Contrast OK
- **Touch**: ≥44px • Focus outline 2px gold
- **ARIA**: labels su tutto
- **Performance**: CLS < 0.05 • LCP < 2.5s • Core Web Vitals 100
- **HTML**: Semantic

---

## 🗂 FILE DA CREARE

- `tokens.css` (con tutte le variabili sopra)
- `components/` (ogni file: button.tsx, card.tsx, nav.tsx…)
- `style-guide.fig`
- `breakpoints.md`
- `content-guidelines.md`
- `assets/` (logo, icone, foto campione, partner loghi)

---

## 📋 CHECKLIST FINALE

- [x] Colori definiti
- [x] Tipografia definita
- [x] Layout definito
- [x] Componenti definiti
- [x] Pagine definite
- [x] Immagini definite
- [x] Animazioni definite
- [x] Accessibilità definita
- [x] Performance definita

---

**Tutto fissato. Zero spazio per variazioni. Pronto per sviluppo.**
