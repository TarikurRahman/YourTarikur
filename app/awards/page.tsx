import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Awards from "../components/Awards";

const baseUrl = "https://yourtarikur.vercel.app";

export const metadata: Metadata = {
  title: "Awards | Tarikur Rahman",
  description: "View Tarikur Rahman’s award-winning robotics, science fair, and innovation achievements.",
  alternates: {
    canonical: `${baseUrl}/awards`,
  },
  openGraph: {
    title: "Awards | Tarikur Rahman",
    description: "View Tarikur Rahman’s award-winning robotics, science fair, and innovation achievements.",
    url: `${baseUrl}/awards`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tarikur Rahman awards preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards | Tarikur Rahman",
    description: "View Tarikur Rahman’s award-winning robotics, science fair, and innovation achievements.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function AwardsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Awards />
      </main>
    </>
  );
}
