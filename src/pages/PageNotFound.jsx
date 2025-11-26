import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import MagnetCursor from "../components/MagnetCursor";

function PageNotFound() {
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
              404 Page
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
              <li>404 Page</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Error Content */}
      <div className="error-content bg-white text-center">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-md-8 col-lg-7">
              <div className="d-flex justify-content-center">
                <img
                  className="pb-2"
                  src="assets/img/core-img/404.png"
                  alt=""
                />
              </div>
              <div className="section-heading mt-5">
                <h2 className="mb-2">
                  Oops! Somethings Went Wrong Please Try Again Later
                </h2>
                <p className="mb-5">
                  Sorry about that, but the page you looking is not available
                  now
                </p>
                <Link to="/" className="btn btn-primary">
                  <span>
                    Back To Home <i className="ti ti-arrow-up-right"></i>
                  </span>
                  <span>
                    Back To Home <i className="ti ti-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
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

export default PageNotFound;
