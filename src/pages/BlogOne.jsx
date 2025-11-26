import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import MagnetCursor from "../components/MagnetCursor";

function BlogOne() {
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
              News &amp; Articles
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
              <li>News &amp; Articles</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Blog Section */}
      <div className="blog-page-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/47.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    A Guide to Practicing Law in Multiple States
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/48.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    How to Successfully Organize Your Legal Files
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/49.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    Modern Offices in The Best District in Town
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/83.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    Quick Solutions for Worst Legal Problems
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/84.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    Variety of Different Cases & Best Solutions
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/85.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    What Can Paralegals Do: A Guide for Lawyers
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/86.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    Flexible Working Hours for Every Employee
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/87.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    What Can Paralegals Do: A Guide for Lawyers
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card bg-secondary style-three">
                <img src="assets/img/bg-img/88.jpg" alt="" />
                <div className="p-4">
                  <div className="blog-meta mt-0 d-flex align-items-center gap-2">
                    <Link to="#">Knowledge</Link>
                    <div className="dot"></div>
                    <Link to="#">26 June 2024</Link>
                  </div>
                  <Link className="post-title mb-3" to="/BlogDetails">
                    How to Become a Legal Project Manager
                  </Link>
                  <Link to="/BlogDetails" className="btn btn-link">
                    {" "}
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
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

export default BlogOne;
