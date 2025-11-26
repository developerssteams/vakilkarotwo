import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import MagnetCursor from "../components/MagnetCursor";
import ScrollToTop from "../components/ScrollToTop";

function CaseStudy() {
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

      {/* Breadcrumb Section */}
      <div
        className="breadcrumb-section bg-img jarallax"
        data-jarallax=""
        data-speed="0.6"
        style={{ backgroundImage: "url('assets/img/bg-img/73.jpg')" }}
      >
        <div className="divider"></div>
        <div className="container">
          <div className="breadcrumb-content">
            <h2
              className="wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="700ms"
            >
              Case Studies
            </h2>
            <ul
              className="list-unstyled wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="1000ms"
            >
              <li>
                <Link className="magnet-link" to="/">
                  Home
                </Link>
              </li>
              <li>Case Studies</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Case Study Three */}
      <div className="case-study-section-three bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/40.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/41.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/42.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/43.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/40.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/41.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/42.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/43.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Case Study */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="magnet-link" to="/CaseStudyDetails">
                <div className="case-study-card style-two">
                  <img src="assets/img/bg-img/40.jpg" alt="" />
                  <div className="case-study-content">
                    <div>Property & Real Estate</div>
                    <p className="mb-0">Investment Consulting</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Pagination */}
            <div className="col-12">
              <ul className="blog-pagination list-unstyled mt-5">
                <li className="active">
                  <Link className="magnet-link" to="#">
                    1
                  </Link>
                </li>
                <li>
                  <Link className="magnet-link" to="#">
                    2
                  </Link>
                </li>
                <li>
                  <Link className="magnet-link" to="#">
                    3
                  </Link>
                </li>
                <li>
                  <Link className="magnet-link" to="#">
                    <i className="ti ti-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Scroll To Top */}
      <ScrollToTop />
      {/* Magnet Cursor */}
      <MagnetCursor />
    </div>
  );
}

export default CaseStudy;
