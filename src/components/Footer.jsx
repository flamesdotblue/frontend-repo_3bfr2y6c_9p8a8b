import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-lg font-semibold text-[#0a1a33]">Vishal Analytica</div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Finance and strategy research, valuation advisory, and equity research.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@vishalanalytica.com" className="hover:underline">
                contact@vishalanalytica.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="text-sm font-semibold tracking-wide text-[#0a1a33]">Follow</div>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=""
          >
            <label htmlFor="email" className="text-sm font-semibold tracking-wide text-[#0a1a33]">
              Newsletter
            </label>
            <p className="mt-2 text-sm text-slate-600">Get our latest insights direct to your inbox.</p>
            <div className="mt-3 flex gap-2">
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-md border border-slate-300 bg-white/80 px-3 py-2 text-sm text-[#0a1a33] placeholder-slate-400 shadow-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-200"
              />
              <button
                type="submit"
                className="rounded-md bg-[#0a1a33] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#0c2347]"
              >
                Subscribe
              </button>
            </div>
          </motion.form>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Vishal Analytica. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
