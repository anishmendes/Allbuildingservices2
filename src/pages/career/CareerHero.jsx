import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const jobListings = [
  { id: 1, title: "Van Driver", location: "London, UK", type: "Full-Time" },
  { id: 2, title: "Delivery Rider", location: "Manchester, UK", type: "Part-Time" },
  { id: 3, title: "Warehouse Operative", location: "Birmingham, UK", type: "Full-Time" },
  { id: 4, title: "Forklift Driver", location: "Liverpool, UK", type: "Contract" },
  { id: 5, title: "Logistics Coordinator", location: "Leeds, UK", type: "Full-Time" },
];

const FadeUp = (delay = 0.2) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const CareerHero = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const jobSectionRef = useRef(null);

  return (
    <section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 relative">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-16 px-6 relative">
        <div className="sm:flex items-center max-w-screen-xl mx-auto">
          {/* Image Section */}
          <motion.div
            variants={FadeUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sm:w-1/2 p-6"
          >
            <div className="image text-center">
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="Career Opportunities"
                className="rounded-lg  mx-auto"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={FadeUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sm:w-1/2 p-6"
          >
            <div className="text">
              <span className="text-blue-700 text-sm uppercase font-semibold border-b-2 border-blue-600">Careers</span>
              <h2 className="my-4 text-3xl sm:text-4xl font-bold text-blue-900">
                Explore <span className="text-blue-700">Job Openings</span>
              </h2>
              <p className="text-lg text-blue-800 leading-relaxed">
                Join M3J Solutions Ltd and become a part of a fast-growing team dedicated to excellence in staffing and logistics.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => jobSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-blue-900 text-white text-xl rounded-full shadow-lg font-semibold hover:bg-blue-800 transition"
          >
            ↓ Scroll to Jobs
          </motion.button>
        </div>
      </section>

      {/* Job Listings Section */}
      <div ref={jobSectionRef} className="py-28 max-w-screen-xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h1>

        <motion.p
          className="text-xl text-blue-800 max-w-2xl mx-auto mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore exciting career opportunities with M3J Solutions Ltd. We're always looking for dedicated professionals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.id}
              className="bg-white rounded-3xl shadow-xl p-6 text-left hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{job.title}</h3>
              <p className="text-blue-800">{job.location}</p>
              <p className="text-blue-700 text-sm">{job.type}</p>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition duration-300"
                >
                  Apply Now
                </button>
                <button className="px-5 py-2 border border-blue-900 text-blue-900 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Up Button */}
        <motion.div
          className="mt-16 text-center"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-900 text-white text-xl rounded-full font-semibold hover:bg-blue-800 transition"
          >
            ↑ Back to Top
          </button>
        </motion.div>

        {/* Apply Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Apply for {selectedJob.title}</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded-md" />
                <input type="email" placeholder="Email Address" className="w-full border px-4 py-2 rounded-md" />
                <input type="tel" placeholder="Phone Number" className="w-full border px-4 py-2 rounded-md" />
                <textarea placeholder="Why are you a good fit?" rows="4" className="w-full border px-4 py-2 rounded-md"></textarea>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default CareerHero;
