//Packages
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs";
import BlogDetails from "./pages/BlogDetails";
import BlogOne from "./pages/BlogOne";

import CaseStudy from "./pages/CaseStudy";

import ContactOne from "./pages/ContactOne";

import Faq from "./pages/Faq";

import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";

import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

import initMagnetCursor from "./Utils/magnet-cursor.js";
import initActiveScripts, { resetMobileMenuState } from "./Utils/active.js";
import { setupMobileMenuClickOutside } from "./Utils/mobileMenuUtils.js";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const { pathname } = location;

  // Pages to skip Header
  const headerSkipRoutes = ["/HomeTwo", "/HomeThree", "/HomeFour", "/HomeFive"];

  // Pages to skip Footer
  const footerSkipRoutes = ["/HomeTwo", "/HomeFour"];

  const showHeader = !headerSkipRoutes.includes(pathname);
  const showFooter = !footerSkipRoutes.includes(pathname);

  useEffect(() => {
    initMagnetCursor();
    initActiveScripts();
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Initialize click outside handler for mobile menu
    const cleanupClickOutside = setupMobileMenuClickOutside();

    // Add global click listener for navigation links to close mobile menu
    const handleGlobalNavClick = (event) => {
      const target = event.target;
      if (target.tagName === "A" && target.href && !target.href.includes("#")) {
        // This is a navigation link, close mobile menu
        setTimeout(() => {
          resetMobileMenuState();
        }, 100);
      }
    };

    document.addEventListener("click", handleGlobalNavClick);

    return () => {
      cleanupClickOutside();
      document.removeEventListener("click", handleGlobalNavClick);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initMagnetCursor(); // reinitialize on every route
    initActiveScripts(); // reinitialize on every route to fix mobile menu
  }, [location.pathname]);

  // Enhanced mobile menu reset on route change
  useEffect(() => {
    // Reset mobile menu state when route changes
    // Use a shorter timeout to ensure it happens quickly
    const timer = setTimeout(() => {
      resetMobileMenuState();
    }, 50);

    // Also reset immediately for better responsiveness
    resetMobileMenuState();

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
          <Route path="/BlogOne" element={<BlogOne />} />
          <Route path="/CaseStudy" element={<CaseStudy />} />
        
          <Route path="/Contact" element={<ContactOne />} />

          <Route path="/Faq" element={<Faq />} />

          <Route path="/Pricing" element={<Pricing />} />

          <Route path="/Team" element={<Team />} />
          <Route path="/TeamDetails" element={<TeamDetails />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
