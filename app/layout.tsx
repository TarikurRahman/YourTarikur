import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import AvatarAnimationProvider from "./context/AvatarAnimationContext";
import { SITE_DESCRIPTION } from "./constants";

const baseUrl = "https://yourtarikur.vercel.app";
const siteName = "Tarikur Rahman";
const pageTitle = "Tarikur Rahman — Robotics Inventor & Tech Researcher";
const siteDescription =
  "Tarikur Rahman is a Robotics Inventor & Tech Researcher specializing in autonomous systems, defense rovers (PHANTOM-X), firefighting robotics, and IoT.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  jobTitle: "System Architect & Robotics Inventor",
  url: baseUrl,
  sameAs: [
    "https://www.linkedin.com/in/tarikurrahmanbd/",
    "https://github.com/tarikurrahmanbd",
    "https://yourtarikur.netlify.app/",
  ],
  description: siteDescription,
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Alif Shubhan Chowdhury Govt College",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bahubal",
    addressRegion: "Habiganj, Sylhet",
    addressCountry: "Bangladesh",
  },
  knowsAbout: [
    "Robotics",
    "Embedded Systems",
    "Autonomous Systems",
    "YOLO AI",
    "Defense Technology",
    "IoT",
    "C++",
    "Python",
    "Alif Shubhan Chowdhury Govt College",
    "Bahubal",
    "Habiganj",
    "Sylhet",
    "Mirpur, Dhaka",
    "Bangladesh",
    "Next.js",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: pageTitle,
  url: baseUrl,
  description: siteDescription,
  inLanguage: "en",
  about: {
    "@type": "Person",
    name: siteName,
  },
};

const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Projects",
      url: `${baseUrl}/#projects`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "What I Do",
      url: `${baseUrl}/#what-i-do`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Experience",
      url: `${baseUrl}/#experience`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Awards",
      url: `${baseUrl}/#awards`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Gallery",
      url: `${baseUrl}/#gallery`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Get in Touch",
      url: `${baseUrl}/#contact`,
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: pageTitle,
  description: siteDescription,
  keywords: [
    "Tarikur Rahman",
    "Robotics Inventor",
    "Tech Researcher",
    "System Architect",
    "Robotics Inventor & Tech Researcher",
    "Autonomous Systems",
    "Defense Technology",
    "PHANTOM-X Tactical Rover",
    "PHOENIX-F1 Industrial Firefighting",
    "Team DEMON71",
    "YOLOv12 AI",
    "WICE 2026 Gold Medalist",
    "Tarikur Rahman Alif Shubhan Chowdhury Govt College",
    "Tarikur Rahman Bahubal",
    "Tarikur Rahman Habiganj",
    "Tarikur Rahman Sylhet",
    "Tarikur Rahman Mirpur",
    "Tarikur Rahman Bangladesh",
    "Robotics Inventor Habiganj Sylhet",
    "Alif Shubhan Chowdhury Govt College",
    "Bangladesh",
    "Bahubal",
    "Sylhet",
    "Habiganj",
    "Robo Haat BD",
    "Encrypted IoT Ecosystems",
    "Embedded Systems",
    "IoT Engineer",
    "React",
    "ESP32",
  ],
  authors: [{ name: siteName, url: baseUrl }],
  alternates: {
    canonical: baseUrl,
  },
  facebook: {
    appId: "100000000000000",
  },
  openGraph: {
    title: pageTitle,
    description: siteDescription,
    url: baseUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tarikur Rahman portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteDescription,
    creator: "@tarikurrahman",
    site: "@tarikurrahman",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Analytics />
        <SpeedInsights />
        <ThemeProvider>
          <AvatarAnimationProvider>
            <main
              className="min-h-screen transition-colors duration-500"
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
              }}
              suppressHydrationWarning
            >
              <div className="custom-gradient-grid fixed top-0 left-0 w-full h-full opacity-60 pointer-events-none"></div>
              <Script id="ld-person" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
              <Script id="ld-website" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
              <Script id="ld-navigation" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }} />
              {children}
            </main>
          </AvatarAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
