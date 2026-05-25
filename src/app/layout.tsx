import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "BlueDesign | Architettura d'Interni di Lusso a Milano | Cucine Composit",
  description: "BlueDesign: studio di architettura d'interni a Milano specializzato in cucine Composit, living di design e progettazione su misura. Showroom a Piazzale Lugano 6/10. Prenota consulenza gratuita.",
  keywords: [
    "architettura d'interni Milano",
    "cucine Composit Milano",
    "design living Milano",
    "progettazione cucine Milano",
    "showroom cucine Milano",
    "interior design Milano",
    "BlueDesign",
    "cucine di lusso Milano",
    "arredo bagno Milano",
    "illuminazione design Milano",
    "ristrutturazione Milano",
    "Piazzale Lugano Milano",
    "cucine moderne Milano",
    "arredamento design Milano",
    "studio architettura Milano"
  ],
  authors: [{ name: "BlueDesign Srl" }],
  creator: "BlueDesign Srl",
  publisher: "BlueDesign Srl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.bluedesign.biz"),
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
    },
  },
  openGraph: {
    title: "BlueDesign | Architettura d'Interni di Lusso a Milano",
    description: "Studio di architettura d'interni a Milano specializzato in cucine Composit, living di design e progettazione su misura. Showroom a Piazzale Lugano 6/10.",
    type: "website",
    locale: "it_IT",
    siteName: "BlueDesign",
    url: "https://www.bluedesign.biz",
    images: [
      {
        url: "/images/logo/BlueDesign-Logo.png",
        width: 1200,
        height: 630,
        alt: "BlueDesign - Architettura d'Interni Milano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueDesign | Architettura d'Interni di Lusso a Milano",
    description: "Cucine Composit, living di design e progettazione su misura. Showroom a Piazzale Lugano 6/10, Milano.",
    images: ["/images/logo/BlueDesign-Logo.png"],
    creator: "@bluedesign",
    site: "@bluedesign",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/logo/favicon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
  other: {
    "geo.region": "IT-MI",
    "geo.placename": "Milano",
    "geo.position": "45.4642;9.1900",
    "ICBM": "45.4642, 9.1900",
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
    "coverage": "Worldwide",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "BlueDesign",
    "application-name": "BlueDesign",
    "msapplication-TileColor": "#0a0a0f",
    "msapplication-TileImage": "/images/logo/favicon.png",
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical images for faster LCP */}
        <link rel="preload" as="image" href="/images/logo/BlueDesign-Logo.png" />
        <link rel="preload" as="image" href="/images/background/bg.jpg" />

        {/* Schema.org JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.bluedesign.biz",
              name: "BlueDesign",
              image: "https://www.bluedesign.biz/images/logo/BlueDesign-Logo.png",
              description: "Studio di architettura d'interni a Milano specializzato in cucine Composit, living di design e progettazione su misura.",
              url: "https://www.bluedesign.biz",
              telephone: "+390239326173",
              email: "info@bluedesign.biz",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Piazzale Lugano 6/10",
                addressLocality: "Milano",
                postalCode: "20158",
                addressRegion: "MI",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.4642,
                longitude: 9.19,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday"],
                  opens: "14:30",
                  closes: "19:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "12:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "14:30",
                  closes: "19:30",
                },
              ],
              priceRange: "$$$$",
              currenciesAccepted: "EUR",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              areaServed: {
                "@type": "City",
                name: "Milano",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 45.4642,
                  longitude: 9.19,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi BlueDesign",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Progettazione d'Interni",
                      description: "Progettazione completa di spazi residenziali e commerciali",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cucine Composit",
                      description: "Cucine di design firmate Composit",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Progettazione Living",
                      description: "Design di spazi living raffinati",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Zona Notte",
                      description: "Camere da letto e armadiature su misura",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Arredo Bagni",
                      description: "Soluzioni complete per il bagno moderno",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Illuminazione Design",
                      description: "Progettazione illuminazione ambienti",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/bluedesign",
                "https://www.instagram.com/bluedesign",
                "https://www.linkedin.com/company/bluedesign",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BlueDesign",
              url: "https://www.bluedesign.biz",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.bluedesign.biz/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BlueDesign",
              url: "https://www.bluedesign.biz",
              logo: "https://www.bluedesign.biz/images/logo/BlueDesign-Logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+390239326173",
                contactType: "customer service",
                areaServed: "IT",
                availableLanguage: "Italian",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Piazzale Lugano 6/10",
                addressLocality: "Milano",
                postalCode: "20158",
                addressCountry: "IT",
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD for BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.bluedesign.biz",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Servizi",
                  item: "https://www.bluedesign.biz/#servizi",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Progetti",
                  item: "https://www.bluedesign.biz/#progetti",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contatti",
                  item: "https://www.bluedesign.biz/#contatti",
                },
              ],
            }),
          }}
        />

        {/* Schema.org JSON-LD for FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Dove si trova il vostro showroom?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Il nostro showroom si trova a Milano, in Piazzale Lugano 6/10, 20158 Milano MI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quali sono gli orari di apertura?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lunedì: 14:30 - 19:30. Da martedì a sabato: 09:00 - 12:30 e 14:30 - 19:30. Domenica: chiuso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Offrite consulenze gratuite?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, offriamo consulenze gratuite per tutti i nuovi clienti. Prenota la tua visita al showroom.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quali brand trattate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Collaboriamo con i migliori brand del settore: Composit, Gaggenau, Neff, Siemens, Bosch, Whirlpool e molti altri.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

