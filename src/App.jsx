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
          <a href="#services" className="hover:text-white">Advisory</a>
          <a href="#insights" className="hover:text-white">Insights</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#insights"
          className="hidden rounded-md bg-teal-400 px-3 py-2 text-xs font-medium text-[#0a1a33] shadow-sm hover:bg-teal-300 sm:inline-block"
        >
          Explore Insights
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
            <h3 className="text-xl font-semibold text-[#0a1a33]">About Us</h3>
            <p className="mt-3 text-slate-600">
              Vishal Analytica is a finance and strategy research firm focused on delivering decision-grade insights. Our work blends institutional-quality analytics with pragmatic recommendations that drive measurable outcomes.
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
                <dt className="text-slate-500">Core Domains</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Finance, Valuation, Equity Research</dd>
              </div>
              <div>
                <dt className="text-slate-500">Operating Model</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Independent, research-first</dd>
              </div>
              <div>
                <dt className="text-slate-500">Coverage</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">Financials, FinTech, Consumer</dd>
              </div>
              <div>
                <dt className="text-slate-500">Regions</dt>
                <dd className="mt-1 font-medium text-[#0a1a33]">India and Global</dd>
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
            <h3 className="text-xl font-semibold text-[#0a1a33]">Research Reports</h3>
            <p className="mt-3 text-slate-600">
              We publish sector deep-dives, thematic outlooks, and company primers grounded in robust models and proprietary datasets.
            </p>
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
              alt="Advisory"
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
            <h3 className="text-xl font-semibold text-[#0a1a33]">Advisory Services</h3>
            <p className="mt-3 text-slate-600">
              We advise on valuation, transaction support, capital markets, and strategic reviews — translating insight into action.
            </p>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-700">
              <li>Valuation and fairness opinions</li>
              <li>IPO and fundraising readiness</li>
              <li>Commercial and market due diligence</li>
              <li>Board-level strategic reviews</li>
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
