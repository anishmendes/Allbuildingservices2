import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFileSignature } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const JoinNow = () => {
  return (
    <section className="relative bg-white">
      {/* Soft overlay for readability */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        style={bgStyle}
        className="relative"
      >
        <div className="absolute inset-0 bg-slate-900/30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/85 p-8 backdrop-blur-sm shadow-md"
          >
            <div className="text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-teal-600/25 bg-teal-50/80 px-3 py-1 text-[12px] font-semibold tracking-[0.18em] uppercase text-teal-700">
                Get started
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
                Need work performed?
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl leading-8 text-slate-800">
                Get peace of mind with{" "}
                <span className="font-semibold text-teal-700">
                  All Building &amp; Property Services
                </span>
                . Speak with our friendly team about your needs or get a quote today.
              </p>
            </div>

            {/* CTA Row */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                aria-label="Get a quote"
              >
                <FaFileSignature className="text-white" />
                Get a quote
              </Link>

              <a
                href="tel:+61242026432"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                aria-label="Call All Building & Property Services"
              >
                <FaPhoneAlt />
                (02) 4202 6432
              </a>

              <a
                href="mailto:admin@allbuildingservices.com.au"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                aria-label="Email All Building & Property Services"
              >
                <FaEnvelope />
                Email us
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-center text-xs text-slate-600">
              ABN 49 645 563 597 • ACN 645 563 597 • 81–83 Campbell St, Surry Hills NSW 2010
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinNow;
