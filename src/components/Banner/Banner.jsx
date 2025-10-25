import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

/* ---------- Configurable stats ---------- */
const STATS = [
  {
    label: "Projects Completed",
    value: 1200,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 21h16M4 14l8-8 8 8M7 21v-7h10v7"
        />
      </svg>
    ),
  },
  {
    label: "AFSS Compliance Rate",
    value: 98,
    suffix: "%",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18M6 6h12a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V9a3 3 0 013-3z"
        />
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12l2 2 6-6"
        />
      </svg>
    ),
  },
  {
    label: "Emergency Jobs/Year",
    value: 350,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"
        />
      </svg>
    ),
  },
  {
    label: "Years Experience",
    value: 10,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M6 7v10a3 3 0 003 3h6a3 3 0 003-3V7"
        />
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7V4h6v3"
        />
      </svg>
    ),
  },
];

/* ---------- Animations ---------- */
const container = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* Optional: looping animation for numbers */
function useLoopingKey(isVisible, loop = true, ms = 7000) {
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (!loop || !isVisible) return;
    const timer = setInterval(() => setKey((k) => k + 1), ms);
    return () => clearInterval(timer);
  }, [isVisible, loop, ms]);
  return key;
}

/* ---------- Stat Card ---------- */
const StatCard = ({ label, value, suffix, icon }) => {
  const [visible, setVisible] = useState(false);
  const loopKey = useLoopingKey(visible, true, 8000); // set false if you don’t want repeat animation

  return (
    <motion.div
      variants={item}
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md"
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-teal-50 p-3 text-teal-700 ring-1 ring-inset ring-teal-600/20">
        {icon}
      </div>

      <VisibilitySensor partialVisibility offset={{ bottom: 150 }} onChange={setVisible} delayedCall>
        {({ isVisible }) => (
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 tabular-nums">
            {isVisible ? <CountUp key={loopKey} end={value} duration={2.2} separator="," /> : 0}
            <span className="ml-1 align-middle text-teal-700">{suffix}</span>
          </h3>
        )}
      </VisibilitySensor>

      <p className="mt-3 text-base sm:text-lg font-medium text-slate-700">{label}</p>
    </motion.div>
  );
};

/* ---------- Section ---------- */
const AboutStats = () => {
  return (
    <section className="relative bg-white py-20">
      {/* background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[10%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <p className="inline-flex items-center rounded-full border border-teal-600/25 bg-teal-50/60 px-3 py-1 text-[12px] font-semibold tracking-[0.18em] uppercase text-teal-700">
            Our Achievements
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
            Proven Performance & Trusted Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700 text-lg">
            Over a decade of excellence in building, maintenance, and remedial services across Sydney.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
