const faqItems = [
  {
    question: "Who is Tarikur Rahman?",
    answer:
      "Tarikur Rahman is a Robotics Inventor & Tech Researcher specializing in autonomous field systems, defense rovers (PHANTOM-X), and firefighting robotics.",
  },
  {
    question: "What are Tarikur Rahman's primary robotics projects?",
    answer:
      "His flagship projects include PHANTOM-X (Tactical Defense Rover) and PHOENIX-F1 (Firefighting Defense Rover).",
  },
  {
    question: "Where is Tarikur Rahman based?",
    answer:
      "He is based in Bahubal, Habiganj, Sylhet, Bangladesh, affiliated with Alif Shubhan Chowdhury Govt College.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-400">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Answers to the most important AI search queries about Tarikur Rahman and his robotics work.
        </p>

        <dl className="mt-10 space-y-8">
          {faqItems.map(({ question, answer }) => (
            <div key={question} className="rounded-3xl bg-slate-900/80 p-6 shadow-sm shadow-slate-950/10">
              <dt className="text-lg font-semibold text-white">{question}</dt>
              <dd className="mt-3 text-sm leading-7 text-slate-300">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
