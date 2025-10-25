import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutVideo from "../../assets/about.mp4"; // Your video file path
import { IoIosArrowRoundForward } from "react-icons/io";

export const FadeUp = (delay = 0.2) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const About = () => {
  return (
    <section className="relative bg-white">
      {/* Glow background like the reference */}
      <svg
        viewBox="0 0 1024 1024"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#abs-radial)"
          fillOpacity="0.5"
        />
        <defs>
          <radialGradient id="abs-radial">
            <stop stopColor="#14b8a6" />
            <stop offset="1" stopColor="#14b8a6" />
          </radialGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-screen-xl py-16 px-6 lg:px-8">
        {/* Content Section - Text in Top */}
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100 to-teal-50 px-6 py-16 text-center sm:px-12 lg:px-16">
          <motion.h2
            variants={FadeUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl font-bold uppercase tracking-wide text-3xl sm:text-4xl text-gray-900"
          >
            Need work performed?
          </motion.h2>

          <motion.p
            variants={FadeUp(0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700"
          >
            Get peace of mind and rest assured with{" "}
            <span className="font-semibold text-teal-700">All Building &amp; Property Services</span>.
            Speak with our friendly team about your needs or get a quote today.
          </motion.p>

          {/* Avatars strip like reference (optional branding flourish) */}
          <motion.div
            variants={FadeUp(0.35)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden"
          >
            <img
              className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt=""
            />
            <img
              className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt=""
            />
            <img
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt=""
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt=""
            />
            <span className="!ml-2 font-semibold italic text-teal-600">
              Trusted by Sydney property owners
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={FadeUp(0.45)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-x-2 rounded-lg bg-teal-600 px-6 py-4 text-md font-semibold text-white shadow-sm transition hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <span className="absolute -top-5 left-0 w-full text-left text-xs italic text-teal-700">
                No obligations
              </span>
              Get a quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mr-0.5 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <a
              href="tel:+61242026432"
              className="inline-flex items-center rounded-lg border border-teal-600 px-6 py-4 text-md font-semibold text-teal-700 transition hover:bg-white/60"
            >
              Call (02) 4202 6432
            </a>

            <a
              href="mailto:admin@allbuildingservices.com.au"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-4 text-md font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Email us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Lower Section with Video Background (Replacing Image with a Smaller Video) */}
      <div className="mt-12 grid items-center gap-8 sm:grid-cols-2">
        {/* Video */}
        <motion.div
          variants={FadeUp(0.55)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-6"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <video
              src={AboutVideo}
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto rounded-xl object-cover w-full max-w-[80%] h-auto"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={FadeUp(0.65)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-6"
        >
          <span className="text-sm uppercase font-semibold text-indigo-700 border-b-2 border-indigo-600">
            About us
          </span>
          <h3 className="my-4 text-3xl sm:text-4xl font-bold text-gray-900">
            Sydney’s{" "}
            <span className="text-indigo-600">remedial & maintenance</span>{" "}
            specialists
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            We deliver high-quality residential, commercial, and strata
            services across Sydney, including remedial repairs, leak
            investigations, waterproofing, plumbing, painting, electrical,
            handyman works, and renovations. Reliable workmanship, timely
            delivery, and full insurance for your peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
