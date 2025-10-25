import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Projects", path: "/projects" },
  { id: 5, title: "Contact", path: "/contact" },
  { id: 6, title: "Terms", path: "/terms" },
  { id: 7, title: "Privacy", path: "/privacy" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-[#ff7b02]" : "hover:text-[#ff7b02]";

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send to API or show success message
    console.log("Form Submitted:", formData);
    setQuoteFormOpen(false); // Close the form after submission
  };

  return (
    <header className="w-full">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 w-full h-20 grid place-items-center z-50 transition-all bg-[#0f6e8b]/95 backdrop-blur">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="All Building & Property Services"
          >
            <img
              src={logo}
              alt="logo"
              className="w-[75px] h-[75px] object-cover object-center"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-10 text-white/90">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`transition-colors ${isActive(item.path)}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Socials + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 grid place-items-center text-[#0f6e8b] bg-gradient-to-b from-[#ffd7a8] to-[#ff7b02] rounded-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 grid place-items-center text-[#0f6e8b] bg-gradient-to-b from-[#ffd7a8] to-[#ff7b02] rounded-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <button
              onClick={() => setQuoteFormOpen(true)}
              className="ml-2 px-4 py-2 rounded-md bg-[#ff7b02] text-[#0f6e8b] font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile toggles */}
          <button
            onClick={() => setOpen(true)}
            className={`block lg:hidden text-3xl text-white ${open ? "hidden" : ""}`}
            aria-label="Open menu"
          >
            <HiMiniBars3 />
          </button>
          <button
            onClick={() => setOpen(false)}
            className={`block lg:hidden text-3xl text-white ${open ? "" : "hidden"}`}
            aria-label="Close menu"
          >
            <HiMiniXMark />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed top-20 right-0 w-full max-w-xs text-white flex flex-col lg:hidden z-40 shadow-2xl"
          >
            <ul className="overflow-hidden rounded-bl-xl">
              {NAV_ITEMS.map((item, idx) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  className="h-14 bg-[#0f6e8b] hover:bg-[#0f6e8b]/90 border-b border-white/10"
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center h-full px-6 ${isActive(item.path)}`}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}

              {/* Mobile socials + CTA */}
              <li className="h-16 bg-[#0f6e8b] flex items-center gap-3 px-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 grid place-items-center text-[#0f6e8b] bg-gradient-to-b from-[#ffd7a8] to-[#ff7b02] rounded-md"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 grid place-items-center text-[#0f6e8b] bg-gradient-to-b from-[#ffd7a8] to-[#ff7b02] rounded-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <button onClick={() => setQuoteFormOpen(true)} className="ml-auto px-3 py-2 rounded-md bg-[#ff7b02] text-[#0f6e8b] font-semibold">
                  Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />

      {/* Get A Quote Form */}
      {quoteFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
          <div className="bg-white rounded-lg p-6 w-96 z-60">
            <h2 className="text-2xl font-semibold mb-4">Get A Quote</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm">Service Required</label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Fencing">Fencing</option>
                  <option value="Painting">Painting</option>
                  <option value="Waterproofing">Waterproofing</option>
                  <option value="Carpentry">Carpentry</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setQuoteFormOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
