import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a1a33] text-white"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignettes that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a1a33]/60 via-[#0a1a33]/30 to-[#0a1a33]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a1a33] to-transparent" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
            Vishal Analytica
          </p>
          <h1 className="font-['Mona_Sans',Inter,system-ui] text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Transforming Data into
            <span className="bg-gradient-to-r from-teal-300 via-white to-amber-200 bg-clip-text text-transparent"> Strategic Insights</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Deep expertise across Finance, Valuation Advisory, and Equity Research — combining rigorous analysis with practical strategy to unlock enterprise value.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#insights"
              className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-teal-400 px-5 py-3 text-sm font-medium text-[#0a1a33] shadow/10 shadow-teal-300/30 transition hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/60"
            >
              Explore Insights
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
