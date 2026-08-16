import type { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import { ShieldAlert, Cpu, Radar, Award, CheckCircle, ArrowRight, Eye, Radio, Zap, Target } from 'lucide-react';
import Image from 'next/image';

const projectUrl = 'https://yourtarikur.vercel.app/projects/PHANTOM-X';
const projectTitle = 'PHANTOM-X | Tactical Defense & Autonomous Field Rover by Tarikur Rahman';
const projectDescription = 'Detailed project overview of PHANTOM-X, an advanced tactical defense and autonomous field rover engineered by Tarikur Rahman.';

export const metadata: Metadata = {
  title: projectTitle,
  description: projectDescription,
  keywords: [
    'PHANTOM-X',
    'Tactical Defense Rover',
    'Tarikur Rahman PHANTOM-X',
    'Autonomous Rover',
    'Robotics Research Bangladesh',
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
  name: 'PHANTOM-X',
  description: projectDescription,
  creator: {
    '@type': 'Person',
    name: 'Tarikur Rahman',
    url: 'https://github.com/tarikurrahmanbd',
  },
  keywords: [
    'PHANTOM-X',
    'Tactical Defense Rover',
    'Tarikur Rahman PHANTOM-X',
    'Autonomous Rover',
    'Robotics Research Bangladesh',
  ],
  url: projectUrl,
  about: 'Advanced tactical defense and autonomous field rover built for high-risk reconnaissance and field operations.',
};

export default function PhantomXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
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
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Architecture & Final Execution</p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Timeline</div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Sep – May</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Research to Development</p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/50 backdrop-blur-sm p-5 text-center">
                <div className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">Field Test Status</div>
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-2">
                  <ShieldAlert className="h-5 w-5" /> Functional Prototype
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tested & Validated</p>
              </div>
            </div>
          </section>

          <section className="mb-16 lg:mb-24">
            <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 backdrop-blur-md p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="h-8 w-8 text-rose-500" />
                <h2 className="text-2xl sm:text-3xl font-bold">The Problem & Real-World Challenge</h2>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Every year during national defense exhibitions like <strong className="text-rose-500 font-semibold">&ldquo;Onirban&rdquo;</strong>, the absence of indigenous high-tech robotics tailored for modern tactical intelligence operations becomes apparent. Concurrently, news headlines frequently highlight tragic casualties from bomb blasts and landmine explosions.
                </p>

                <div className="mt-6 border-l-4 border-rose-500/80 bg-rose-500/5 dark:bg-rose-500/10 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">The Catalyst Incident</h4>
                  <p className="text-sm">
                    A specific catalyst for this project was the evolving threat environment encountered during homeland security initiatives. PHANTOM-X was built to reduce danger for human teams by allowing remote response in hazardous zones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 text-center lg:mb-24">
            <blockquote className="mx-auto max-w-4xl rounded-xl border border-purple-500/30 bg-linear-to-r from-purple-900/20 via-indigo-900/20 to-purple-900/20 p-8 backdrop-blur-sm">
              <p className="text-xl sm:text-2xl font-semibold italic text-purple-300">
                &ldquo;Human life is more valuable than any machine.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-slate-400 dark:text-slate-300 uppercase tracking-wider font-bold">
                — PHANTOM-X Tactical Philosophy
              </footer>
            </blockquote>
          </section>

          <section className="mb-16 lg:mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center sm:text-left flex items-center gap-3">
              <Cpu className="h-7 w-7 text-emerald-500" /> Technical Architecture & Tech Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Hardware & Mechanics</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Premium Aluminum & Sheet Metal Hybrid Chassis</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Heavy-duty 4WD & Off-road Suspension</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> High-Torque 2-DOF Robotic Arm (40KG Base / 35KG Elbow)</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Precision Tactical End-Effector Gripper</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Processing, Vision & Comms</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Raspberry Pi 4 (8GB RAM) Central Brain</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Dual Night-Vision & Thermal Tactical Cameras</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> Global Telemetry Network (Low-latency telemetry)</li>
                  <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-500" /> High-Capacity 12V 5200mAh Battery Pack</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 lg:mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center sm:text-left flex items-center gap-3">
              <Award className="h-7 w-7 text-purple-500" /> Core Capabilities & Tactical Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                  <Zap className="h-5 w-5" /> Bomb Disposal (EOD)
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Precision robotic arm executes high-risk explosive neutralization and remote payload handling safely.
                </p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                  <Eye className="h-5 w-5" /> AI Surveillance
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Utilizes advanced computer vision for stealth tracking, real-time threat detection, and deep-territory recon.
                </p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                  <Radar className="h-5 w-5" /> Subterranean Detection
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Military-grade subterranean sensor payload scans, detects, and maps hidden landmines and IEDs.
                </p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                  <Radio className="h-5 w-5" /> Electronic Warfare
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Integrated jamming module disrupts enemy communications and RF signals within an 80–100m radius.
                </p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                  <Target className="h-5 w-5" /> Smart Pathfinding
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  High-precision sensor array analyzes hazardous terrain parameters in real-time for safe navigation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/10 dark:bg-[#1b263e]/30 p-6">
                <div className="flex items-center gap-2 mb-2 text-rose-500 font-semibold text-lg">
                  <ShieldAlert className="h-5 w-5" /> Autonomous Failsafe
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Integrated self-neutralization payload prevents enemy capture and unauthorized reverse-engineering.
                </p>
              </div>
            </div>
          </section>

<section className="mb-16 lg:mb-24">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">
    Exhibition & Science Fair Highlights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Image 1 */}
    <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
      <div className="overflow-hidden rounded-xl aspect-video w-full relative">
        <Image
          src="/images/rover1.jpg"
          alt="PHANTOM-X exhibition demonstration"
          fill
          className="object-cover object-center"
        />
      </div>
      <p className="mt-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
        Demonstrating PHANTOM-X tactical capabilities at the exhibition.
      </p>
    </div>

    {/* Image 2 */}
    <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
      <div className="overflow-hidden rounded-xl aspect-video w-full relative">
        <Image
          src="/images/rover2.jpg"
          alt="PHANTOM-X field demonstration"
          fill
          className="object-cover object-center"
        />
      </div>
      <p className="mt-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
        Live EOD and obstacle navigation field demonstration.
      </p>
    </div>
  </div>
</section>

          <section className="mb-16 lg:mb-24">
            <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-[#b1cfee]/20 dark:bg-[#1b263e]/40 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Future Enhancements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">A. DEMON-71 Drone Integration</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Aerial companion drone integration for extended flight, mapping, and surveillance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">B. AI Aim Bot System</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Automated threat acquisition and target-locking via computer vision.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">C. Advanced Optics Upgrade</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Upgrading thermal and night-vision range for extended fidelity.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
