import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Inconsolata } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inconsolata = Inconsolata({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Heritage Foundation | Ecological & Cultural Restoration, Nilgiris",
  description: "The Heritage Foundation works across the Nilgiris to protect ancient forests, prehistoric rock art, indigenous cultures, and living craft traditions. Registered trust, 12A/80G status, Kotagiri, Tamil Nadu.",
  metadataBase: new URL("https://the-heritage.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Heritage Foundation | Ecological & Cultural Restoration, Nilgiris",
    description: "Protecting ancient forests, prehistoric rock art, indigenous cultures, and living craft traditions in the Nilgiris.",
    url: "https://the-heritage.org",
    siteName: "The Heritage Foundation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Heritage Foundation, Nilgiris",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Heritage Foundation | Ecological & Cultural Restoration, Nilgiris",
    description: "Protecting ancient forests, prehistoric rock art, indigenous cultures, and living craft traditions in the Nilgiris.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/icon.svg",
    apple: "/images/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NGO JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "The Heritage Foundation",
    "url": "https://the-heritage.org",
    "logo": "https://the-heritage.org/images/logo.png",
    "description": "The Heritage Foundation works across the Nilgiris to protect ancient forests, prehistoric rock art, indigenous cultures, and living craft traditions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kotagiri",
      "addressRegion": "The Nilgiris, Tamil Nadu",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.instagram.com/the.heritagefoundation",
      "https://www.linkedin.com/company/the-heritage-foundation-india/"
    ]
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${inconsolata.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
