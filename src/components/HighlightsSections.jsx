import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, FileText, Briefcase, BookOpen, Mail } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, href, accent = 'teal' }) => {
  const accentRing = accent === 'gold' ? 'ring-amber-200/50' : 'ring-teal-200/50';
  const accentDot = accent === 'gold' ? 'bg-amber-300' : 'bg-teal-300';

  return (
    <motion.a
      href={href}
      className={`group relative block rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 ${accentRing}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className={`absolute right-4 top-4 h-2 w-2 rounded-full ${accentDot}`} />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1a33] text-white shadow">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#0a1a33]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
          <span className="mt-3 inline-block text-sm font-medium text-[#0a1a33]/80 group-hover:underline">
            Learn more →
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const HighlightsSections = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50" aria-label="About and Services">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a1a33] sm:text-3xl">
              Evidence. Structure. Conviction.
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              A consulting-grade approach to independent research—clear hypotheses, transparent methods, and outputs tailored for executive decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={FileText}
            title="Research Library"
            desc="Flagship outlooks, thematic deep-dives, and primers with board-ready implications."
            href="#reports"
            accent="gold"
          />
          <Card
            icon={LineChart}
            title="Sectors & Coverage"
            desc="Financials and FinTech focus, with select Consumer adjacencies. Pan-India with global context."
            href="#about"
            accent="teal"
          />
          <Card
            icon={BookOpen}
            title="Methodology"
            desc="Model-first approach with triangulated data and reproducible frameworks for valuation and strategy."
            href="#methodology"
            accent="teal"
          />
          <Card
            icon={Briefcase}
            title="Custom Studies"
            desc="Bespoke research, market mapping, and valuation reviews for boards and leadership teams."
            href="#services"
            accent="gold"
          />
          <Card
            icon={Mail}
            title="Contact"
            desc="Speak with our research team about coverage, collaborations, or custom mandates."
            href="#contact"
            accent="teal"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSections;
