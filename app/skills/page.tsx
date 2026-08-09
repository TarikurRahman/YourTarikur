import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const baseUrl = "https://yourtarikur.vercel.app";

export const metadata: Metadata = {
  title: "Skills | Tarikur Rahman",
  description: "Explore the robotics, electronics, web development, and research skills behind Tarikur Rahman’s work.",
  alternates: {
    canonical: `${baseUrl}/skills`,
  },
  openGraph: {
    title: "Skills | Tarikur Rahman",
    description: "Explore the robotics, electronics, web development, and research skills behind Tarikur Rahman’s work.",
    url: `${baseUrl}/skills`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tarikur Rahman skills preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Tarikur Rahman",
    description: "Explore the robotics, electronics, web development, and research skills behind Tarikur Rahman’s work.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-28">
        <Skills />
      </main>
    </>
  );
}
