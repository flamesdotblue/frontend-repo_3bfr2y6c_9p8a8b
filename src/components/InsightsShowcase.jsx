import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Indian Financials: Credit Cycle Acceleration 2025',
    desc: 'Assessing loan growth, NIM trajectories, and asset quality across leading banks and NBFCs.',
    img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Valuation Playbook: Navigating Rate Volatility',
    desc: 'Frameworks for DCF and multiples calibration in a higher-for-longer regime.',
    img: 'https://images.unsplash.com/photo-1640340434854-834dd34b7381?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Equity Research Primer: FinTech Platforms',
    desc: 'Unit economics, retention curves, and monetization pathways across digital finance.',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Capital Markets Strategy: IPO Windows 2025',
    desc: 'Timing, pricing discipline, and investor narratives for resilient debuts.',
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
  },
];

const InsightsShowcase = () => {
  return (
    <section id="insights" className="relative bg-white" aria-label="Insights">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a1a33] sm:text-3xl">
              Insights & Publications
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Explore our latest research — deep analytical views distilled into practical takeaways.
            </p>
          </div>
          <a
            href="#reports"
            className="hidden rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#0a1a33] shadow-sm hover:bg-slate-50 md:inline-block"
          >
            View all research
          </a>
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
                <h3 className="text-base font-semibold text-[#0a1a33]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <div className="mt-3 text-sm font-medium text-teal-700">Read more →</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsShowcase;
