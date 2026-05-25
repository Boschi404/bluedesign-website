import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  jsonLd?: object | null;
  robots?: string;
};

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image,
  jsonLd,
  robots = "index, follow",
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bluedesign.biz";
  const metaTitle = title || "BlueDesign | Architettura d'Interni a Milano";
  const metaDesc = description ||
    "BlueDesign: studio di architettura d'interni a Milano specializzato in cucine Composit, living di design e progettazione su misura.";
  const metaImage = image || `${siteUrl}/images/logo/BlueDesign-Logo.png`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical || siteUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
