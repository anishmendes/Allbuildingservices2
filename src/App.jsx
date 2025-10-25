import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/loader";  // Import Loader component
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/about/AboutPage";  
import Contact from './pages/contact/Contact';
import Abouth from "./components/Hero/Abouth";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ServicePage from "./pages/services/ServicePage";
import CareerHero from "./pages/career/CareerHero";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import Privacy from "./pages/terms/Privacy";
import Terms from "./pages/terms/Terms";

AOS.init();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);  // State to manage loader visibility

  // Custom hook to handle scroll to top on route change
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on route change
    }, [location]);

    return null;
  };

  return (
    <>
      {/* Show the loader initially */}
      {isLoading && <Loader setIsLoading={setIsLoading} />}
      
      <Router>
        <ScrollToTop /> {/* Use the scroll to top functionality */}
        <main className="overflow-x-hidden bg-white text-dark">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Abouth/>
                <Services />
                <Banner2 />
                <Banner />
                <Subscribe />
                <Footer />
              </>
            } />
            
            {/* Add About Us route */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/career" element={<CareerHero />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
