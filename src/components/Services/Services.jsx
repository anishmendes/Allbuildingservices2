import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import industry from "../../assets/industry.jpeg";
import dedicated from "../../assets/Dedicated.jpeg";
import committed from "../../assets/Committed.jpeg";

const services = [
  {
    title: "Remedial Repairs",
    image: industry,
    description:
      "Structural crack stitching, concrete cancer (spalling) repairs, render and brickwork restoration, leak diagnostics, and waterproofing rectification. Licensed and delivered to DBP standards where applicable."
  },
  {
    title: "Plumbing",
    image: dedicated,
    description:
      "Residential, commercial and strata plumbing. Drain cleaning, leak detection, gas pipe fitting, and urgent call-outs. Clean work, compliant installs, and clear communication from quote to sign-off."
  },
  {
    title: "Fire Safety Upgrades & Repairs",
    image: committed,
    description:
      "Fire doors and frames, passive fire protection, fire-stopping and sealants, emergency lighting remediation, and AFSS compliance support so your site passes first time."
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }
  })
};

const Services = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-teal-600/80" />
          <p className="mt-5 text-lg text-slate-700">
            Professional building and property maintenance across Sydney.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  {service.description}
                </p>

                {/* View More Button */}
                {/* <div className="mt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-700"
                  >
                    View More
                  </Link>
                </div> */}
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-teal-600/0 transition group-hover:ring-teal-600/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
