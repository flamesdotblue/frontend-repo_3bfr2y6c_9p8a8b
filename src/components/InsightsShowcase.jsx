import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Indian Financials: Credit Cycle Acceleration 2025',
    desc: 'Assessing loan growth, NIM trajectories, and asset quality across leading banks and NBFCs.',
    img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop',
    tag: 'Banks & NBFCs',
    date: 'Apr 2025',
    read: '8 min'
  },
  {
    title: 'Valuation Playbook: Navigating Rate Volatility',
    desc: 'Frameworks for DCF and multiples calibration in a higher-for-longer regime.',
    img: 'https://images.unsplash.com/photo-1640340434854-834dd34b7381?q=80&w=1600&auto=format&fit=crop',
    tag: 'Valuation',
    date: 'Mar 2025',
    read: '6 min'
  },
  {
    title: 'Equity Research Primer: FinTech Platforms',
    desc: 'Unit economics, retention curves, and monetization pathways across digital finance.',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop',
    tag: 'FinTech',
    date: 'Mar 2025',
    read: '7 min'
  },
  {
    title: 'Capital Markets Strategy: IPO Windows 2025',
    desc: 'Timing, pricing discipline, and investor narratives for resilient debuts.',
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    tag: 'Capital Markets',
    date: 'Feb 2025',
    read: '5 min'
  },
];

const InsightsShowcase = () => {
  return (
    <section id="insights" className="relative bg-white" aria-label="Insights">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a1a33] sm:text-3xl">
              Insights & Publications
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Independent, evidence-led research designed to inform capital allocation and strategy.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-[#0a1a33] shadow-sm hover:bg-slate-50">All</button>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-[#0a1a33] shadow-sm hover:bg-slate-50">Financials</button>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-[#0a1a33] shadow-sm hover:bg-slate-50">FinTech</button>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-[#0a1a33] shadow-sm hover:bg-slate-50">Valuation</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <span className="rounded-full bg-teal-50 px-2 py-0.5 font-medium text-teal-700">{item.tag}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.read}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-[#0a1a33]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <div className="mt-3 text-sm font-medium text-teal-700">Read report →</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsShowcase;
