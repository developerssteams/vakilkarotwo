import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MagnetCursor from "../components/MagnetCursor";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
import HeroSection from "../components/Home/HeroSection";
import ServiceSection from "../components/Home/ServiceSection";
import AboutSection from "../components/Home/AboutSection";

import WorkProcessSection from "../components/WorkProcessSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import ContactSection from "../components/Home/ContactSection";
import BlogSection from "../components/Home/BlogSection";

function Home() {
  const [showCookie, setShowCookie] = useState(true);
  useEffect(() => {
    // Initialize jarallax if it's available
    if (window.jarallax) {
      window.jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.6,
      });
    }
  }, []);
  //preloader
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  }, []);

  return (
    <div>
      {/* Preloader */}
      <Preloader />

      {/* Hero Section */}
      <HeroSection />

      {/* Service Section */}
      <ServiceSection />

      {/* About Section */}
      <AboutSection />

      {/* Case Studies Section */}


      {/* Work Process Section */}
      <WorkProcessSection />

      {/* Team Members Section */}


      {/* Popup Video Container */}
      <div id="videoPopup" className="video-popup-iframe">
        <div className="video-content">
          <span className="close-btn" id="videoCloseButton">
            &times;
          </span>
          <div className="ratio ratio-16x9">
            <iframe
              id="videoFrame"
              allowFullScreen
              title="Video Player"
            ></iframe>
          </div>
        </div>
      </div>



      {/* Video Section */}

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Blog Section */}

      <BlogSection />
      {/* Cookie Alert */}
      {showCookie && (
        <div className="cookiealert shadow-lg show">
          <h2 className="mb-3">Cookie's Notice</h2>
          <p className="mb-4">
            We use cookies for the best experience on our website, for social
            media features and to anal traffic. accepting you agree to our use
            of cookies. Read{" "}
            <Link to="/" target="_blank">
              {" "}
              Cookies Policy.
            </Link>
          </p>
          <button
            className="btn btn-dark btn-sm acceptcookies"
            type="button"
            aria-label="Close"
            onClick={() => setShowCookie(false)}
          >
            <span>Accept</span>
            <span>Accept</span>
          </button>
        </div>
      )}

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Magnet Cursor */}
      <MagnetCursor />
    </div>
  );
}

export default Home;
