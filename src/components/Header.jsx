import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMobileMenuReset } from "../Utils/useMobileMenuReset";
import { resetMobileMenuState } from "../Utils/active.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


function Header() {
  // Use the custom hook to automatically reset mobile menu on navigation

  useMobileMenuReset();

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }

    // Add click handlers to all navigation links to close mobile menu
    const handleNavLinkClick = () => {
      resetMobileMenuState();
    };

    const navLinks = document.querySelectorAll(
      ".navbar-nav a, .navbar-nav .magnet-link"
    );
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Add click outside handler for this specific header
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".header-area .navbar");
      const navbarCollapse = document.querySelector(
        ".header-area .navbar-collapse"
      );

      if (navbar && navbarCollapse) {
        if (navbarCollapse.classList.contains("show")) {
          if (!navbar.contains(event.target)) {
            resetMobileMenuState();
          }
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Ensure a Collapse instance exists and sync aria-expanded with events
  useEffect(() => {
    const collapseEl = document.getElementById("lawgisNav");
    const toggler = document.querySelector(".header-area .navbar-toggler");
    const CollapseCtor = window.bootstrap && window.bootstrap.Collapse;

    if (!collapseEl || !CollapseCtor) return;

    const instance = CollapseCtor.getOrCreateInstance(collapseEl, {
      toggle: false,
    });

    const onShown = () => {
      if (toggler) toggler.setAttribute("aria-expanded", "true");
    };
    const onHidden = () => {
      if (toggler) toggler.setAttribute("aria-expanded", "false");
      // Cleanup any transient styles/classes
      collapseEl.classList.remove("collapsing");
      collapseEl.style.height = "";
      collapseEl.style.overflow = "";
    };

    collapseEl.addEventListener("shown.bs.collapse", onShown);
    collapseEl.addEventListener("hidden.bs.collapse", onHidden);

    return () => {
      collapseEl.removeEventListener("shown.bs.collapse", onShown);
      collapseEl.removeEventListener("hidden.bs.collapse", onHidden);
    };
  }, []);

  return (
    <div>
      {/* Search Form */}
      <div className="search-bg-overlay" id="searchOverlay"></div>
      <div className="search-form-popup">
        <h2 className="mb-4">How can I help you, Today?</h2>
        <button
          type="button"
          className="close-btn"
          id="searchClose"
          aria-label="Close"
        >
          &times;
        </button>
        <form className="search-form">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            id="site-search"
            name="q"
          />
          <button type="submit" className="btn btn-primary">
            <span>
              <i className="ti ti-search"></i> Search Now
            </span>
            <span>
              <i className="ti ti-search"></i> Search Now
            </span>
          </button>
        </form>
      </div>
      {/* Header Area*/}
      <header className="header-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Navbar Brand */}
            <Link to="/" className="navbar-brand">
              <img src="assets/img/core-img/vakilkaro.png" alt="" style={{ width: "50%" }} />
              {/* </Link> */}
            </Link>

            {/* Navbar Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="lawgisNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(e) => {
                const collapseEl = document.getElementById("lawgisNav");
                const CollapseCtor =
                  window.bootstrap && window.bootstrap.Collapse;
                if (!collapseEl || !CollapseCtor) return;
                const collapse = CollapseCtor.getOrCreateInstance(collapseEl, {
                  toggle: false,
                });
                const isOpen = collapseEl.classList.contains("show");
                if (isOpen) {
                  collapse.hide();
                  e.currentTarget.setAttribute("aria-expanded", "false");
                } else {
                  collapse.show();
                  e.currentTarget.setAttribute("aria-expanded", "true");
                }
              }}
            >
              <i className="ti ti-category"></i>
            </button>

            {/* Navbar Nav */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="lawgisNav"
            >
              <ul className="navbar-nav navbar-nav-scroll">
                <li className="lawgis-dd">
                  <Link to="#" className="magnet-link">
                    Registrations & Licenses <i className="ti ti-chevron-down"></i>
                  </Link>

                  <ul className="lawgis-dd-menu">

                    {/* Business Registrations submenu */}
                    <li className="lawgis-dd">
                      <Link to="/" className="magnet-link">
                        Business Registrations <i className="ti ti-chevron-right"></i>
                      </Link>
                      <ul className="lawgis-dd-menu">
                        <li><Link to="/opc" className="magnet-link">OPC Registration</Link></li>
                        <li><Link to="/pvt-ltd" className="magnet-link">Private Ltd Company</Link></li>
                        <li><Link to="/llp" className="magnet-link">LLP Registration</Link></li>
                        <li><Link to="/partnership" className="magnet-link">Partnership Firm</Link></li>
                      </ul>
                    </li>

                    {/* Licenses & Certification submenu */}
                    <li className="lawgis-dd">
                      <Link to="/HomeTwo" className="magnet-link">
                        Licenses & Certification <i className="ti ti-chevron-right"></i>
                      </Link>
                      <ul className="lawgis-dd-menu">
                        <li><Link to="/fssai" className="magnet-link">FSSAI License</Link></li>
                        <li><Link to="/gst" className="magnet-link">GST Registration</Link></li>
                        <li><Link to="/iso" className="magnet-link">ISO Certification</Link></li>
                        <li><Link to="/msme" className="magnet-link">MSME Registration</Link></li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <li className="lawgis-dd">
                  <Link to="#" className="magnet-link">
                    Pages <i className="ti ti-chevron-down"></i>
                  </Link>
                  <ul className="lawgis-dd-menu">
                    <li className="lawgis-dd">
                      <Link to="/AboutUs" className="magnet-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/Faq" className="magnet-link">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/PageNotFound" className="magnet-link">
                        404 - Error
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="lawgis-dd">
                  <Link to="#" className="magnet-link">
                    Trademark & IP <i className="ti ti-chevron-down"></i>
                  </Link>
                  <ul className="lawgis-dd-menu">
                    <li className="lawgis-dd">
                      <Link to="/AboutUs" className="magnet-link">
                        Trademark
                      </Link>
                    </li>
                    <li>
                      <Link to="/Faq" className="magnet-link">
                        Patent
                      </Link>
                    </li>
                    <li>
                      <Link to="/PageNotFound" className="magnet-link">
                        Copyright
                      </Link>
                    </li>
                    <li>
                      <Link to="/PageNotFound" className="magnet-link">
                        Design
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="lawgis-dd">
                  <Link to="#" className="magnet-link">
                    Blog <i className="ti ti-chevron-down"></i>
                  </Link>
                  <ul className="lawgis-dd-menu">
                    <li>
                      <Link to="/BlogOne" className="magnet-link">
                        Blog One
                      </Link>
                    </li>

                    <li>
                      <Link to="/BlogDetails" className="magnet-link">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/Contact" className="magnet-link">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                {/* Search Button */}
                <div className="header-search-btn" id="searchButton">
                  <button className="btn">
                    <i className="ti ti-search"></i>
                  </button>
                </div>

                {/* Login Button */}

                <Link to="/ContactOne" className="btn btn-primary">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                    Talk To Experts
                  </span>
                  <span>
                    +91 9828123489 <i className="ti ti-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
