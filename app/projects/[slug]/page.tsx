import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { ShieldAlert, Cpu, Radar, Award, CheckCircle, ArrowRight, Eye, Radio, Target, Flame, Code } from "lucide-react";
import Image from "next/image";

const projectMap: Record<string, { title: string; description: string; content: React.ReactNode }> = {
  "phantom-x": {
    title: "PHANTOM-X — Tactical Defense Rover | Tarikur Rahman",
    description: "PHANTOM-X is an autonomous tactical defense rover built by Tarikur Rahman for reconnaissance, mine detection, and remote neutralization.",
    content: (
      <div className="relative min-h-screen text-[#111827] dark:text-[#f8fafc] transition-colors duration-500">
        <div className="custom-gradient-grid pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-60" />
        <main className="container relative z-10 mx-auto px-6 pt-28 pb-16 md:px-12 lg:px-20 lg:pt-32 lg:pb-24">
          <section className="mb-16 text-center lg:mb-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-6">
              <Radar className="h-4 w-4" /> Next-Gen Tactical Defense
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              PHANTOM-X: <span className="bg-linear-to-r from-purple-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent">Tactical Defense Rover</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Designed to execute high-risk reconnaissance, subterranean landmine detection, and remote bomb disposal to protect human lives in extreme environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">My Role</div>
                <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" /> System Architect & Developer
                </div>
              </div>
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Timeline</div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Sep – May</div>
              </div>
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Field Test Status</div>
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-2">
                  <ShieldAlert className="h-5 w-5" /> Functional Prototype
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    ),
  },
  "phoenix-f1": {
    title: "PHOENIX-F1 — Industrial Firefighting Robot | Tarikur Rahman",
    description: "PHOENIX-F1 is an automated industrial firefighting robot built by Tarikur Rahman featuring thermal intelligence and real-time navigation.",
    content: (
      <div className="relative min-h-screen text-[#111827] dark:text-[#f8fafc] transition-colors duration-500">
        <div className="custom-gradient-grid pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-60" />
        <main className="container relative z-10 mx-auto px-6 pt-28 pb-16 md:px-12 lg:px-20 lg:pt-32 lg:pb-24">
          <section className="mb-16 text-center lg:mb-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <Flame className="h-4 w-4" /> Autonomous Robotics
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              PHOENIX-F1: <span className="bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Firefighting Defense Rover</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Designed to extinguish fires autonomously in high-risk zones, eliminating the need to put firefighters&apos; lives in direct danger.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">My Role</div>
                <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2">
                  <Code className="h-5 w-5" /> Lead Coder
                </div>
              </div>
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Timeline</div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Dec – Feb</div>
              </div>
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Status</div>
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" /> Functional Prototype
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    ),
  },
};

export async function generateStaticParams() {
  return [{ slug: "phantom-x" }, { slug: "phoenix-f1" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMap[slug];
  const baseUrl = "https://yourtarikur.vercel.app";

  if (!project) {
    return {
      title: "Project Not Found | Tarikur Rahman",
      description: "The requested project could not be found.",
      alternates: {
        canonical: `${baseUrl}/projects/${slug}`,
      },
    };
  }

  const projectUrl = `${baseUrl}/projects/${slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function ProjectSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      {project.content}
    </>
  );
}
