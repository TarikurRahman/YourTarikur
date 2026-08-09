import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import { EXPERIENCES } from "../constants";

const baseUrl = "https://yourtarikur.vercel.app";

export const metadata: Metadata = {
  title: "Experience | Tarikur Rahman",
  description: "Read about Tarikur Rahman’s leadership, robotics, and engineering experience through Team DEMON71 and other initiatives.",
  alternates: {
    canonical: `${baseUrl}/experience`,
  },
  openGraph: {
    title: "Experience | Tarikur Rahman",
    description: "Read about Tarikur Rahman’s leadership, robotics, and engineering experience through Team DEMON71 and other initiatives.",
    url: `${baseUrl}/experience`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tarikur Rahman experience preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Tarikur Rahman",
    description: "Read about Tarikur Rahman’s leadership, robotics, and engineering experience through Team DEMON71 and other initiatives.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Experience SectionTopic={EXPERIENCES} title="Experience" />
      </main>
    </>
  );
}
