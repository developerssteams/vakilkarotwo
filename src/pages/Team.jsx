import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import MagnetCursor from "../components/MagnetCursor";

function Team() {
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
              Our Team
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
              <li>Our Team</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Team Members Section */}
      <div className="lawyers-team-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center g-4">
            {/* Laywer Card */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="laywer-card">
                <img src="assets/img/bg-img/10.jpg" alt="" />

                {/* Laywer Info */}
                <div className="laywer-info text-center">
                  <div className="laywer-name">Rebecca Edwards</div>
                  <div className="laywer-position">Senior Consultant</div>
                </div>

                {/* Hover:: Laywer Info */}
                <div className="hover-laywer-info text-center">
                  <div className="laywer-name">Rebecca Edwards</div>
                  <div className="laywer-position">Senior Consultant</div>
                  {/* Social Nav */}
                  <div className="social-nav">
                    <Link to="#">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-x"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Laywer Card */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="laywer-card">
                <img src="assets/img/bg-img/11.jpg" alt="" />

                {/* Laywer Info */}
                <div className="laywer-info text-center">
                  <div className="laywer-name">Shawn S. Kerendian</div>
                  <div className="laywer-position">Associate Director</div>
                </div>

                {/* Hover:: Laywer Info */}
                <div className="hover-laywer-info text-center">
                  <div className="laywer-name">Shawn S. Kerendian</div>
                  <div className="laywer-position">Associate Director</div>
                  {/* Social Nav */}
                  <div className="social-nav">
                    <Link to="#">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-x"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Laywer Card */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="laywer-card">
                <img src="assets/img/bg-img/12.jpg" alt="" />

                {/* Laywer Info */}
                <div className="laywer-info text-center">
                  <div className="laywer-name">Rebecca Edwards</div>
                  <div className="laywer-position">Senior Consultant</div>
                </div>

                {/* Hover:: Laywer Info */}
                <div className="hover-laywer-info text-center">
                  <div className="laywer-name">Rebecca Edwards</div>
                  <div className="laywer-position">Senior Consultant</div>
                  {/* Social Nav */}
                  <div className="social-nav">
                    <Link to="#">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-x"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Laywer Card */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="laywer-card">
                <img src="assets/img/bg-img/80.jpg" alt="" />

                {/* Laywer Info */}
                <div className="laywer-info text-center">
                  <div className="laywer-name">Franklin Tavarez</div>
                  <div className="laywer-position">Senior Consultant</div>
                </div>

                {/* Hover:: Laywer Info */}
                <div className="hover-laywer-info text-center">
                  <div className="laywer-name">Franklin Tavarez</div>
                  <div className="laywer-position">Senior Consultant</div>
                  {/* Social Nav */}
                  <div className="social-nav">
                    <Link to="#">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-x"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Laywer Card */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="laywer-card">
                <img src="assets/img/bg-img/81.jpg" alt="" />

                {/* Laywer Info */}
                <div className="laywer-info text-center">
                  <div className="laywer-name">Franklin Tavarez</div>
                  <div className="laywer-position">Family Law</div>
                </div>

                {/* Hover:: Laywer Info */}
                <div className="hover-laywer-info text-center">
                  <div className="laywer-name">Franklin Tavarez</div>
                  <div className="laywer-position">Family Law</div>
                  {/* Social Nav */}
                  <div className="social-nav">
                    <Link to="#">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-x"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Laywer Card */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="laywer-card">
                <img src="assets/img/bg-img/82.jpg" alt="" />

                {/* Laywer Info */}
                <div className="laywer-info text-center">
                  <div className="laywer-name">Franklin Tavarez</div>
                  <div className="laywer-position">Senior Consultant</div>
                </div>

                {/* Hover:: Laywer Info */}
                <div className="hover-laywer-info text-center">
                  <div className="laywer-name">Franklin Tavarez</div>
                  <div className="laywer-position">Senior Consultant</div>
                  {/* Social Nav */}
                  <div className="social-nav">
                    <Link to="#">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-x"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-section bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-end">
            {/* Clients */}
            <div className="col-12 col-md-5">
              <div className="d-flex align-items-center gap-3">
                <div className="testimonial-clients">
                  <img src="assets/img/bg-img/27.jpg" alt="" />
                  <img src="assets/img/bg-img/28.jpg" alt="" />
                </div>
                <div className="testimonial-clients-info">
                  <span>
                    <span className="counter">1900</span>k+
                  </span>
                  <h2 className="mb-0">Trusted Clients</h2>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="col-12 col-md-5">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                erat tellus, luctus vel mollis et, fringilla eget urna. Proin
                sit amet viverra lectus.
              </p>
            </div>

            {/* Rating */}
            <div className="col-12 col-md-2">
              <div className="text-lg-end">
                <h2 className="rating-average d-flex align-items-center justify-content-lg-end gap-2 mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M15.9999 25.6492L6.11145 32L8.79999 20.149L0 12.2229L11.5501 11.2493L15.9999 0L20.4499 11.2493L32 12.2229L23.2 20.149L25.8886 32L15.9999 25.6492Z"
                      fill="#ECB014"
                    />
                  </svg>
                  4.5
                </h2>
                <p className="mb-0 total-ratings">1,797 Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="testimonial-slide">
            <div className="swiper testimonial-swiper-two">
              <div className="swiper-wrapper">
                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-stars mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                  </div>
                  <p className="mb-4">
                    “He quickly delivered excellent design a per required
                    specifications. New landing page will have refreshing simple
                    look, while keeping page load light on images and at the
                    same keeping professional look. Finally, it also seems very
                    reasonable to implement responsive design, so I'm very happy
                    with that.”
                  </p>
                  <div className="testimonial-author-info d-flex align-items-center gap-3">
                    <img src="assets/img/bg-img/29.jpg" alt="" />
                    <div>
                      <div>Peggy Thompson</div>
                      <p className="mb-0">Product Manager</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-stars mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                  </div>
                  <p className="mb-4">
                    “He quickly delivered excellent design a per required
                    specifications. New landing page will have refreshing simple
                    look, while keeping page load light on images and at the
                    same keeping professional look. Finally, it also seems very
                    reasonable to implement responsive design, so I'm very happy
                    with that.”
                  </p>
                  <div className="testimonial-author-info d-flex align-items-center gap-3">
                    <img src="assets/img/bg-img/30.jpg" alt="" />
                    <div>
                      <div>Alexander Cameron</div>
                      <p className="mb-0">Director</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-stars mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                  </div>
                  <p className="mb-4">
                    “He quickly delivered excellent design a per required
                    specifications. New landing page will have refreshing simple
                    look, while keeping page load light on images and at the
                    same keeping professional look. Finally, it also seems very
                    reasonable to implement responsive design, so I'm very happy
                    with that.”
                  </p>
                  <div className="testimonial-author-info d-flex align-items-center gap-3">
                    <img src="assets/img/bg-img/31.jpg" alt="" />
                    <div>
                      <div>Samantha Brooks</div>
                      <p className="mb-0">CEO & Founder</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-stars mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                  </div>
                  <p className="mb-4">
                    “He quickly delivered excellent design a per required
                    specifications. New landing page will have refreshing simple
                    look, while keeping page load light on images and at the
                    same keeping professional look. Finally, it also seems very
                    reasonable to implement responsive design, so I'm very happy
                    with that.”
                  </p>
                  <div className="testimonial-author-info d-flex align-items-center gap-3">
                    <img src="assets/img/bg-img/29.jpg" alt="" />
                    <div>
                      <div>Peggy Thompson</div>
                      <p className="mb-0">Product Manager</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-stars mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                  </div>
                  <p className="mb-4">
                    “He quickly delivered excellent design a per required
                    specifications. New landing page will have refreshing simple
                    look, while keeping page load light on images and at the
                    same keeping professional look. Finally, it also seems very
                    reasonable to implement responsive design, so I'm very happy
                    with that.”
                  </p>
                  <div className="testimonial-author-info d-flex align-items-center gap-3">
                    <img src="assets/img/bg-img/30.jpg" alt="" />
                    <div>
                      <div>Alexander Cameron</div>
                      <p className="mb-0">Director</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-stars mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                  </div>
                  <p className="mb-4">
                    “He quickly delivered excellent design a per required
                    specifications. New landing page will have refreshing simple
                    look, while keeping page load light on images and at the
                    same keeping professional look. Finally, it also seems very
                    reasonable to implement responsive design, so I'm very happy
                    with that.”
                  </p>
                  <div className="testimonial-author-info d-flex align-items-center gap-3">
                    <img src="assets/img/bg-img/31.jpg" alt="" />
                    <div>
                      <div>Samantha Brooks</div>
                      <p className="mb-0">CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-pagination"></div>
        </div>

        <div className="divider"></div>
      </section>

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Magnet Cursor */}
      <MagnetCursor />
    </div>
  );
}

export default Team;
