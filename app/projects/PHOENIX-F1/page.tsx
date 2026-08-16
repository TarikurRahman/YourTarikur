import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { Flame, ShieldAlert, Cpu, Award, Code, CheckCircle, ArrowRight } from 'lucide-react';

const projectUrl = 'https://yourtarikur.vercel.app/projects/PHOENIX-F1';
const projectTitle = 'PHOENIX-F1 | Autonomous Firefighting Defense Rover by Tarikur Rahman';
const projectDescription = 'Official project specifications of PHOENIX-F1, an autonomous firefighting defense rover designed for hazardous operations by Tarikur Rahman.';

export const metadata: Metadata = {
  title: projectTitle,
  description: projectDescription,
  keywords: [
    'PHOENIX-F1',
    'Firefighting Defense Rover',
    'Tarikur Rahman PHOENIX-F1',
    'Firefighting Robotics',
    'Robotics Bangladesh',
  ],
  alternates: {
    canonical: projectUrl,
  },
  openGraph: {
    title: projectTitle,
    description: projectDescription,
    url: projectUrl,
    siteName: 'Tarikur Rahman',
    type: 'website',
    images: [
      {
        url: 'https://yourtarikur.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: projectTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: projectTitle,
    description: projectDescription,
    images: ['https://yourtarikur.vercel.app/og-image.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'PHOENIX-F1',
  description: projectDescription,
  creator: {
    '@type': 'Person',
    name: 'Tarikur Rahman',
    url: 'https://github.com/tarikurrahmanbd',
  },
  keywords: [
    'PHOENIX-F1',
    'Firefighting Defense Rover',
    'Tarikur Rahman PHOENIX-F1',
    'Firefighting Robotics',
    'Robotics Bangladesh',
  ],
  url: projectUrl,
  about: 'Autonomous firefighting defense rover designed for hazardous emergency operations.',
};

export default function PhoenixF1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <div className="relative min-h-screen text-[#111827] dark:text-[#f8fafc] transition-colors duration-500">
        {/* Background radial gradient overlay matching global design */}
        <div className="custom-gradient-grid pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-60" />

        <main className="container relative z-10 mx-auto px-6 pt-28 pb-16 md:px-12 lg:px-20 lg:pt-32 lg:pb-24">
        
        {/* 1. HERO SECTION & PROJECT OVERVIEW */}
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

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
              <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">My Role</div>
              <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2">
                <Code className="h-5 w-5" /> Lead Coder
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Core Programming Logic</p>
            </div>

            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
              <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Timeline</div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Dec – Feb</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Research & Development</p>
            </div>

            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
              <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Status</div>
              <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" /> Functional Prototype
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tested & Validated</p>
            </div>
          </div>
        </section>

        {/* 2. THE PROBLEM & MOTIVATION */}
        <section className="mb-16 lg:mb-24">
          <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 backdrop-blur-md p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="h-8 w-8 text-rose-500" />
              <h2 className="text-2xl sm:text-3xl font-bold">The Problem & Real-World Challenge</h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                According to the annual report of the Fire Service and Civil Defense, a staggering <strong className="text-rose-500 font-semibold">26,595 fire incidents</strong> occurred in Bangladesh in 2024—averaging roughly 73 incidents per day. These disasters resulted in at least 140 fatalities and 341 injuries. Tragically, 2 firefighter lives were lost and 37 were injured while fulfilling their professional duties.
              </p>
              
              <div className="mt-6 border-l-4 border-rose-500/80 bg-rose-500/5 p-4 rounded-r-lg">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">The Catalyst Incident</h4>
                <p className="text-sm">
                  A specific catalyst for this project was the devastating fire at the Bangladesh Secretariat on December 25, 2024. While battling the midnight blaze in Building No. 7, firefighter <strong>Md. Sohanur Zaman Nayan</strong> was fatally injured while carrying a water hose across the road. Witnessing such preventable tragedies inspired the creation of PHOENIX-F1 to keep frontline responders out of harm&apos;s way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE PHILOSOPHY */}
        <section className="mb-16 text-center lg:mb-24">
          <blockquote className="mx-auto max-w-4xl rounded-xl border border-purple-500/30 bg-linear-to-r from-purple-900/20 via-indigo-900/20 to-purple-900/20 p-8 backdrop-blur-sm">
            <p className="text-xl sm:text-2xl font-semibold italic text-purple-300">
              &ldquo;Saving human lives by substituting high-risk human intervention with autonomous machinery.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-slate-400 uppercase tracking-wider font-bold">
              — PHOENIX-F1 Mission Philosophy
            </footer>
          </blockquote>
        </section>

        {/* 4. TECH STACK & ARCHITECTURE */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center sm:text-left flex items-center gap-3">
            <Cpu className="h-7 w-7 text-emerald-500" /> Technical Architecture & Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hardware Card */}
            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Hardware & Microcontrollers</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Arduino Microcontroller</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> L293D Motor Driver</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> 5V Relay Module</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> SG90 Servo Motor</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> 4-Wheel Chassis Kit (3-6V Gear Motors)</li>
              </ul>
            </div>

            {/* Software Card */}
            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Software & Programming</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Python</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Arduino IDE (C/C++)</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Custom Sensor Signal Processing Logic</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Motor Control & Steering Logic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CORE CAPABILITIES & RESULTS */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center sm:text-left flex items-center gap-3">
            <Award className="h-7 w-7 text-purple-500" /> Capabilities & Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
              <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Autonomous Suppression</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Navigates hazardous zones independently to extinguish fires without requiring firefighters in the danger area.
              </p>
            </div>

            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
              <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Risk Reduction</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Directly reduces operational casualties by sending mechanical payloads into dangerous, flame-prone environments.
              </p>
            </div>

            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
              <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Precision Response</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Handles early-stage critical fire targets safely using precise automated triggers and sensor evaluation.
              </p>
            </div>
          </div>
        </section>

{/* 6. EXHIBITION HIGHLIGHTS */}
<section className="mb-16 lg:mb-24">
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold">Exhibition Highlights</h2>
    <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
      Showcasing PHOENIX-F1 in front of peers and judges with live demos and technical explanation.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <article className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
      <figure className="overflow-hidden rounded-xl aspect-video w-full">
        <Image
          src="/images/presentation.jpg"
          alt="Science Fair Presentation"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          priority={false}
        />
      </figure>
      <figcaption className="mt-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
        Science Fair Presentation: live demonstration of autonomous navigation.
      </figcaption>
    </article>

    <article className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
      <figure className="overflow-hidden rounded-xl aspect-video w-full">
        <Image
          src="/images/booth.jpg"
          alt="Science Fair Booth"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          priority={false}
        />
      </figure>
      <figcaption className="mt-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
        Science Fair Booth: audience engagement with robotics and safety showcases.
      </figcaption>
    </article>
  </div>
</section>

      </main>
    </div>
    </>
  );
}