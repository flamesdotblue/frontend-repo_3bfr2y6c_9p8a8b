import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './components/Hero3D';
import HighlightsSections from './components/HighlightsSections';
import InsightsShowcase from './components/InsightsShowcase';
import Footer from './components/Footer';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a1a33]/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
          Vishal Analytica
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#reports" className="hover:text-white">Research</a>
          <a href="#methodology" className="hover:text-white">Methodology</a>
          <a href="#insights" className="hover:text-white">Insights</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#insights"
          className="hidden rounded-md bg-amber-300 px-3 py-2 text-xs font-medium text-[#0a1a33] shadow-sm transition hover:bg-amber-200 sm:inline-block"
        >
          Explore Research
        </a>
      </div>
    </div>
  );
};

const SectionDetail = () => {
  return (
    <section className="relative bg-white" aria-label="Detail Sections">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div id="about" className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#0a1a33]">About the Firm</h3>
            <p className="mt-3 text-slate-600">
              Vishal Analytica is an independent finance and strategy research firm. We build valuation-grade models, triangulate multiple data sources, and translate evidence into clear, decision-ready recommendations for leaders.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <dl className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-slate-500">Coverage</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Banks, NBFCs, FinTech, Consumer adjacencies</dd>
              </div>
              <div>
                <dt className="text-slate-500">Lens</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Unit economics, cohorts, risk, valuation</dd>
              </div>
              <div>
                <dt className="text-slate-500">Outputs</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Outlooks, primers, custom studies</dd>
              </div>
              <div>
                <dt className="text-slate-500">Standards</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Transparent methods, reproducible results</dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <div id="reports" className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-xl font-semibold text-[#0a1a33]">Research Library</h3>
            <p className="mt-3 text-slate-600">
              Sector outlooks, thematic deep-dives, and company primers organized by taxonomy and tags for faster discovery.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-700">
              <li className="rounded-full border border-slate-200 px-3 py-1">Financials</li>
              <li className="rounded-full border border-slate-200 px-3 py-1">FinTech</li>
              <li className="rounded-full border border-slate-200 px-3 py-1">Valuation</li>
              <li className="rounded-full border border-slate-200 px-3 py-1">Capital Markets</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="order-1 overflow-hidden rounded-2xl border border-slate-200 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              alt="Research visuals"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div id="methodology" className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
              alt="Methodology"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#0a1a33]">Methodology</h3>
            <p className="mt-3 text-slate-600">
              We combine bottom-up models with macro overlays, triangulate public filings and alternative data, and document assumptions to ensure reproducibility.
            </p>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-700">
              <li>Model-first, evidence-led analysis</li>
              <li>Cross-validated with cohorts and unit economics</li>
              <li>Transparent, source-linked citations</li>
            </ul>
          </motion.div>
        </div>

        <div id="services" className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <img
              src="https://images.unsplash.com/photo-1523285367489-d38aec03b7f3?q=80&w=1600&auto=format&fit=crop"
              alt="Custom research"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#0a1a33]">Custom Research & Advisory</h3>
            <p className="mt-3 text-slate-600">
              Commission tailored studies, market maps, and valuation reviews to support transactions, strategy, and communication.
            </p>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-700">
              <li>Custom sector and company studies</li>
              <li>Capital markets and valuation support</li>
              <li>Thought leadership and investor narratives</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white antialiased">
      <Navbar />
      <Hero3D />
      <HighlightsSections />
      <SectionDetail />
      <InsightsShowcase />
      <Footer />
    </div>
  );
};

export default App;
