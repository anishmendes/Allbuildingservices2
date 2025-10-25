import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      {/* Top */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              {/* replace with your logo if you have one */}
               <img
                            src={logo}
                            alt="logo"
                            className="w-16 h-16 object-cover object-center"
                          />
              <p className="text-lg font-semibold tracking-tight">
                All Building &amp; Property Services
              </p>
            </div>
            <p className="mt-4 max-w-prose text-slate-300">
              All Building &amp; Property Services is an established, professional,
              remedial building services contractor, providing a responsive and
              high-quality service to residential, multi-residential, and commercial
              properties across Sydney.
            </p>
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Sitemaps
            </h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy – All Building &amp; Property Services Pty Ltd
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions – Quotations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Contact row */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <FaPhone className="mt-1 text-teal-400" />
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">Phone</p>
              <a href="tel:+61242026432" className="text-slate-200 hover:text-white">
                (02) 4202 6432
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-teal-400" />
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">Email</p>
              <a
                href="mailto:admin@allbuildingservices.com.au"
                className="text-slate-200 hover:text-white"
              >
                admin@allbuildingservices.com.au
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-teal-400" />
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">Address</p>
              <p className="text-slate-200">
                81–83 Campbell Street, Surry Hills NSW 2010, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Social + Legal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-3 text-slate-400">
            <span>ABN: 49 645 563 597</span>
            <span className="text-white/20">|</span>
            <span>ACN: 645 563 597</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <p className="text-sm text-slate-400">
            © 2025 All Building &amp; Property Services.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
