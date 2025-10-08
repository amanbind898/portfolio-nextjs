import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://amanbind.vercel.app'),
  title: "Aman Bind | Full Stack Developer | IIIT BH'26",
  description: "Passionate Full Stack Developer and 4th-year Computer Science student at IIIT Bhagalpur. Specializing in React, Next.js, Node.js, and modern web technologies. Building flawless digital solutions with expertise in frontend, backend, and competitive programming.",
  keywords: [
    "Aman Bind",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "IIIT Bhagalpur",
    "Computer Science Student",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Competitive Programming",
    "CodeChef",
    "LeetCode",
    "Codeforces",
    "GeeksforGeeks",
    "Software Engineer",
    "Azamgarh",
    "Uttar Pradesh",
    "India"
  ],
  authors: [{ name: "Aman Bind", url: "https://amanbind.vercel.app" }],
  creator: "Aman Bind",
  publisher: "Aman Bind",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Aman Bind | Full Stack Developer | IIIT BH'26",
    description: "Passionate Full Stack Developer and 4th-year Computer Science student at IIIT Bhagalpur. Specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://amanbind.vercel.app",
    siteName: "Aman Bind Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Aman Bind - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Bind | Full Stack Developer | IIIT BH'26",
    description: "Passionate Full Stack Developer and 4th-year Computer Science student at IIIT Bhagalpur. Specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/images/portfolio-preview.png"],
    creator: "@amanbind898",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
    yandex: "your-yandex-verification-code", // Add if you have Yandex verification
    yahoo: "your-yahoo-verification-code", // Add if you have Yahoo verification
    other: {
      'msvalidate.01': "your-bing-verification-code", // Add your Bing verification code
    },
  },
  alternates: {
    canonical: "https://amanbind.vercel.app",
  },
  category: "Portfolio",
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

        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* SEO and Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aman Bind Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content="@amanbind898" />
        <meta name="twitter:creator" content="@amanbind898" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://amanbind.vercel.app" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
