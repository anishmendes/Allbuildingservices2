import React from "react";
import { motion } from "framer-motion";

/* ---------- Animations ---------- */
const container = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

/* ---------- Card Data (titles polished, short supporting lines) ---------- */
const FEATURES = [
  {
    title: "24/7 Emergency Services",
    desc: "Rapid response for urgent issues, day or night.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 6h6l-4.5 3.5 1.7 6.5L12 15.5 5.8 18l1.7-6.5L3 8h6l3-6z" />
      </svg>
    )
  },
  {
    title: "Licensed Tradespeople",
    desc: "Qualified, professional technicians on every job.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 3l6 3v6c0 4-2.5 7-6 9-3.5-2-6-5-6-9V6l6-3z" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M9 11l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "All Services, One Platform",
    desc: "Plumbing, remedial, electrical, handyman and more.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
        <circle cx="18" cy="17" r="2" strokeWidth="1.7" />
      </svg>
    )
  },
  {
    title: "Fully Insured Trades",
    desc: "Coverage for your peace of mind, start to finish.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 4.5-4.5" />
      </svg>
    )
  },
  {
    title: "Obligation-Free Quotes",
    desc: "Clear scopes before any work begins.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M7 3h10v18H7z" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    )
  },
  {
    title: "Price Match or Beat",
    desc: "We match or beat comparable written quotes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 16h5" />
        <circle cx="6" cy="12" r="2" strokeWidth="1.7" />
        <circle cx="18" cy="12" r="2" strokeWidth="1.7" />
      </svg>
    )
  },
  {
    title: "Fair, Affordable Pricing",
    desc: "Quality workmanship without the mark-up games.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 1v22" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M8 6c0-2 8-2 8 0s-8 2-8 4 8 2 8 4-8 2-8 4" />
      </svg>
    )
  },
  {
    title: "No Hidden Costs",
    desc: "Transparent quotes and invoices. No surprises.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M3 5h18v14H3z" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M8 13h4" />
      </svg>
    )
  },
  {
    title: "Customers Who Recommend",
    desc: "Consistent satisfaction and repeat business.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M3 21a9 9 0 0118 0" />
        <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M16 11l2 2 3-3" />
      </svg>
    )
  }
];

const WhyUs = () => {
  return (
    <section className="relative bg-white py-20">
      {/* soft accent glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[8%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={item} className="text-[12px] font-semibold tracking-[0.18em] uppercase text-teal-700">
            Why choose us
          </motion.p>
          <motion.h2
            variants={item}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900"
          >
            The dedication to fulfil our customers’ needs
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-lg text-slate-700">
            Reliable, insured property maintenance delivered with clear pricing and real accountability.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <motion.article
              key={f.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20">
                  {f.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
                {f.desc}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition group-hover:ring-teal-600/15" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
