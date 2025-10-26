import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, FileText, Briefcase, BookOpen, Mail } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, href, accent = 'teal' }) => {
  const accentClasses =
    accent === 'gold'
      ? 'from-amber-300/30 to-amber-100/0 border-amber-200/30'
      : 'from-teal-300/30 to-teal-100/0 border-teal-200/30';

  return (
    <motion.a
      href={href}
      className={`group relative block rounded-2xl border ${accentClasses} bg-white/60 p-6 shadow-sm backdrop-blur transition hover:shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1a33] to-[#0f274d] text-white shadow">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#0a1a33]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
          <span className="mt-3 inline-block text-sm font-medium text-teal-700 group-hover:underline">
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
              We are a research-first firm. Our work is built on primary data, transparent methods, and institutional rigor designed for decision-makers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={FileText}
            title="Research Library"
            desc="Flagship sector outlooks, thematic deep-dives, and company primers with clear implications."
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
            desc="Model-first approach, triangulated data sources, and reproducible frameworks for valuation and strategy."
            href="#methodology"
            accent="teal"
          />
          <Card
            icon={Briefcase}
            title="Custom Studies"
            desc="Bespoke research, market mapping, and thought leadership for boards and leadership teams."
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
