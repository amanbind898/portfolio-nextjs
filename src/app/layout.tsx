import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://amanbind898.github.io'),
  title: "Aman Bind | IIIT BH'26",
  description: "Explore a sleek, responsive, and user-friendly portfolio website template. Crafted with HTML, CSS, and JS, our minimal design lets your work shine. Perfect for showcasing your projects or as a template for your own site.",
  keywords: "frontend developer, portfolio, web development, Aman, Bhagalpur, bind, Amanbind, Amanbind898, IIIT, IIIT bh",
  authors: [{ name: "Aman Bind" }],
  openGraph: {
    title: "Aman Bind | IIIT BH'26",
    description: "Explore a sleek, responsive, and user-friendly portfolio website template. Crafted with HTML, CSS, and JS, our minimal design lets your work shine. Perfect for showcasing your projects or as a template for your own site.",
    url: "https://amanbind898.github.io/",
    siteName: "Aman Bind Portfolio",
    images: [
      {
        url: "/images/portfolio-fork.webp",
        width: 1200,
        height: 630,
        alt: "Aman Bind Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Bind | IIIT BH'26",
    description: "Explore a sleek, responsive, and user-friendly portfolio website template. Crafted with HTML, CSS, and JS, our minimal design lets your work shine. Perfect for showcasing your projects or as a template for your own site.",
    images: ["/images/portfolio-fork.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Signika:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" async></script>
        <script src="https://kit.fontawesome.com/58a810656e.js" crossOrigin="anonymous" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
