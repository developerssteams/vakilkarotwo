import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import MagnetCursor from "../components/MagnetCursor";

function Pricing() {
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
              Pricing
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
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Price Plan */}
      <div className="price-plan-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md">
              <div className="price-card">
                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Contentious Probate</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$12.00</div>
                </div>

                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Employement Law</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$24.00</div>
                </div>

                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Protection Law</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$48.00</div>
                </div>

                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Financial Law</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$52.00</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="price-card">
                <img src="assets/img/bg-img/54.png" alt="" />
              </div>
            </div>

            <div className="col-12 col-md">
              <div className="price-card">
                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Criminal Law</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$22.00</div>
                </div>

                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Family Law</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$32.00</div>
                </div>

                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Aviation Lawyers</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$42.00</div>
                </div>

                {/* Single Item */}
                <div
                  className="single-price-item wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1000ms"
                >
                  <div>
                    <div>Business Defence</div>
                    <p className="mb-0">
                      Sed blandit libero volutpat sed cras ornare arcu dui
                      vivamus. Pharetra massa ultricies hendrerit.
                    </p>
                  </div>
                  <div className="price-value">$57.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* FAQ */}
      <section className="faq-wrapper bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-6">
              <div className="section-heading">
                <div className="sub-title">
                  <img src="assets/img/core-img/hammer.png" alt="" />
                  Question
                </div>
                <h2 className="mb-4">Got Questions? Here Are Some Answers</h2>
                <p className="mb-5">
                  Etiam imperdiet imperdiet orci. Curabitur nisi. Discovery call
                  usually scheduled in advance to ensure that both the potential
                  client and our legal team can sufficient.
                </p>
                <Link className="btn btn-primary" to="/ContactOne">
                  <span>
                    Ask Any Question <i className="ti ti-arrow-up-right"></i>
                  </span>
                  <span>
                    Ask Any Question <i className="ti ti-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">
                  {/* Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          const target =
                            document.getElementById("faqQuestion1");
                          const isOpen = target.classList.contains("show");

                          if (isOpen) {
                            // Smooth close animation
                            target.style.height = target.scrollHeight + "px";
                            setTimeout(() => {
                              target.style.height = "0px";
                              setTimeout(() => {
                                target.classList.remove("show");
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.add("collapsed");
                            e.target.setAttribute("aria-expanded", "false");
                          } else {
                            // Smooth open animation
                            target.classList.add("show");
                            target.style.height = "0px";
                            setTimeout(() => {
                              target.style.height = target.scrollHeight + "px";
                              setTimeout(() => {
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.remove("collapsed");
                            e.target.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="true"
                        aria-controls="faqQuestion1"
                      >
                        What Is The Role Of A Lawyer Legal Case?
                      </button>
                    </div>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      style={{
                        transition: "all 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        Once you have agreed upon a suitable date and time,
                        confirm the consu ltation appointment. Make sure to note
                        down any instructions or down preparations provided by
                        the lawyer Make sure to note down any.
                      </div>
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          const target =
                            document.getElementById("faqQuestion2");
                          const isOpen = target.classList.contains("show");

                          if (isOpen) {
                            // Smooth close animation
                            target.style.height = target.scrollHeight + "px";
                            setTimeout(() => {
                              target.style.height = "0px";
                              setTimeout(() => {
                                target.classList.remove("show");
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.add("collapsed");
                            e.target.setAttribute("aria-expanded", "false");
                          } else {
                            // Smooth open animation
                            target.classList.add("show");
                            target.style.height = "0px";
                            setTimeout(() => {
                              target.style.height = target.scrollHeight + "px";
                              setTimeout(() => {
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.remove("collapsed");
                            e.target.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion2"
                      >
                        How Do I Schedule Consultation ?
                      </button>
                    </div>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "all 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        Once you have agreed upon a suitable date and time,
                        confirm the consu ltation appointment. Make sure to note
                        down any instructions or down preparations provided by
                        the lawyer Make sure to note down any.
                      </div>
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          const target =
                            document.getElementById("faqQuestion3");
                          const isOpen = target.classList.contains("show");

                          if (isOpen) {
                            // Smooth close animation
                            target.style.height = target.scrollHeight + "px";
                            setTimeout(() => {
                              target.style.height = "0px";
                              setTimeout(() => {
                                target.classList.remove("show");
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.add("collapsed");
                            e.target.setAttribute("aria-expanded", "false");
                          } else {
                            // Smooth open animation
                            target.classList.add("show");
                            target.style.height = "0px";
                            setTimeout(() => {
                              target.style.height = target.scrollHeight + "px";
                              setTimeout(() => {
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.remove("collapsed");
                            e.target.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion3"
                      >
                        What Is The Purpose Of A Contract?
                      </button>
                    </div>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "all 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        Once you have agreed upon a suitable date and time,
                        confirm the consu ltation appointment. Make sure to note
                        down any instructions or down preparations provided by
                        the lawyer Make sure to note down any.
                      </div>
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          const target =
                            document.getElementById("faqQuestion4");
                          const isOpen = target.classList.contains("show");

                          if (isOpen) {
                            // Smooth close animation
                            target.style.height = target.scrollHeight + "px";
                            setTimeout(() => {
                              target.style.height = "0px";
                              setTimeout(() => {
                                target.classList.remove("show");
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.add("collapsed");
                            e.target.setAttribute("aria-expanded", "false");
                          } else {
                            // Smooth open animation
                            target.classList.add("show");
                            target.style.height = "0px";
                            setTimeout(() => {
                              target.style.height = target.scrollHeight + "px";
                              setTimeout(() => {
                                target.style.height = "";
                              }, 350);
                            }, 10);
                            e.target.classList.remove("collapsed");
                            e.target.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion4"
                      >
                        Essential Types of Business Law Firm ?
                      </button>
                    </div>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "all 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        Once you have agreed upon a suitable date and time,
                        confirm the consu ltation appointment. Make sure to note
                        down any instructions or down preparations provided by
                        the lawyer Make sure to note down any.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Pricing;
