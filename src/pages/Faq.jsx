import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import MagnetCursor from "../components/MagnetCursor";
import ScrollToTop from "../components/ScrollToTop";

function Faq() {
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
              FAQs
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
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* FAQ Section */}
      <div className="faq-page-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="faq-accordion service-details-faq">
                <div className="accordion" id="faqAccordion">
                  {/* Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          const btn = e.currentTarget;
                          const target =
                            document.getElementById("faqQuestion1");
                          if (!target) return;

                          const isOpen = target.classList.contains("show");

                          // Only-one-open behavior (like data-bs-parent)
                          const parent =
                            document.getElementById("faqAccordion");
                          if (!isOpen && parent) {
                            parent
                              .querySelectorAll(".accordion-collapse.show")
                              .forEach((el) => {
                                if (el === target) return;
                                el.style.height = el.scrollHeight + "px";
                                requestAnimationFrame(
                                  () => (el.style.height = "0px")
                                );
                                setTimeout(() => {
                                  el.classList.remove("show");
                                  el.style.height = "";
                                }, 350);
                                const headerBtn =
                                  el.parentElement?.querySelector(
                                    ".accordion-button"
                                  );
                                if (headerBtn) {
                                  headerBtn.classList.add("collapsed");
                                  headerBtn.setAttribute(
                                    "aria-expanded",
                                    "false"
                                  );
                                }
                              });
                          }

                          if (isOpen) {
                            // close
                            target.style.height = target.scrollHeight + "px";
                            requestAnimationFrame(
                              () => (target.style.height = "0px")
                            );
                            setTimeout(() => {
                              target.classList.remove("show");
                              target.style.height = "";
                            }, 350);
                            btn.classList.add("collapsed");
                            btn.setAttribute("aria-expanded", "false");
                          } else {
                            // open
                            target.classList.add("show");
                            target.style.height = "0px";
                            requestAnimationFrame(
                              () =>
                                (target.style.height =
                                  target.scrollHeight + "px")
                            );
                            setTimeout(() => {
                              target.style.height = "";
                            }, 350);
                            btn.classList.remove("collapsed");
                            btn.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="true"
                        aria-controls="faqQuestion1"
                      >
                        Where should I incorporate my business?
                      </button>
                    </div>

                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      style={{
                        transition: "height 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised word.
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
                          const btn = e.currentTarget;
                          const target =
                            document.getElementById("faqQuestion2");
                          if (!target) return;

                          const isOpen = target.classList.contains("show");

                          // Only-one-open behavior (mimics data-bs-parent="#faqAccordion")
                          const parent =
                            document.getElementById("faqAccordion");
                          if (!isOpen && parent) {
                            parent
                              .querySelectorAll(".accordion-collapse.show")
                              .forEach((el) => {
                                if (el === target) return;
                                el.style.height = el.scrollHeight + "px";
                                requestAnimationFrame(
                                  () => (el.style.height = "0px")
                                );
                                setTimeout(() => {
                                  el.classList.remove("show");
                                  el.style.height = "";
                                }, 350);
                                const headerBtn =
                                  el.parentElement?.querySelector(
                                    ".accordion-button"
                                  );
                                if (headerBtn) {
                                  headerBtn.classList.add("collapsed");
                                  headerBtn.setAttribute(
                                    "aria-expanded",
                                    "false"
                                  );
                                }
                              });
                          }

                          if (isOpen) {
                            // close
                            target.style.height = target.scrollHeight + "px";
                            requestAnimationFrame(
                              () => (target.style.height = "0px")
                            );
                            setTimeout(() => {
                              target.classList.remove("show");
                              target.style.height = "";
                            }, 350);
                            btn.classList.add("collapsed");
                            btn.setAttribute("aria-expanded", "false");
                          } else {
                            // open
                            target.classList.add("show");
                            target.style.height = "0px";
                            requestAnimationFrame(
                              () =>
                                (target.style.height =
                                  target.scrollHeight + "px")
                            );
                            setTimeout(() => {
                              target.style.height = "";
                            }, 350);
                            btn.classList.remove("collapsed");
                            btn.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion2"
                      >
                        Can I offer my items for free on a promotional basis?
                      </button>
                    </div>

                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "height 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised word.
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
                          const btn = e.currentTarget;
                          const target =
                            document.getElementById("faqQuestion3");
                          if (!target) return;

                          const isOpen = target.classList.contains("show");

                          // Only-one-open behavior under #faqAccordion
                          const parent =
                            document.getElementById("faqAccordion");
                          if (!isOpen && parent) {
                            parent
                              .querySelectorAll(".accordion-collapse.show")
                              .forEach((el) => {
                                if (el === target) return;
                                el.style.height = el.scrollHeight + "px";
                                requestAnimationFrame(
                                  () => (el.style.height = "0px")
                                );
                                setTimeout(() => {
                                  el.classList.remove("show");
                                  el.style.height = "";
                                }, 350);
                                const headerBtn =
                                  el.parentElement?.querySelector(
                                    ".accordion-button"
                                  );
                                if (headerBtn) {
                                  headerBtn.classList.add("collapsed");
                                  headerBtn.setAttribute(
                                    "aria-expanded",
                                    "false"
                                  );
                                }
                              });
                          }

                          if (isOpen) {
                            // close
                            target.style.height = target.scrollHeight + "px";
                            requestAnimationFrame(
                              () => (target.style.height = "0px")
                            );
                            setTimeout(() => {
                              target.classList.remove("show");
                              target.style.height = "";
                            }, 350);
                            btn.classList.add("collapsed");
                            btn.setAttribute("aria-expanded", "false");
                          } else {
                            // open
                            target.classList.add("show");
                            target.style.height = "0px";
                            requestAnimationFrame(
                              () =>
                                (target.style.height =
                                  target.scrollHeight + "px")
                            );
                            setTimeout(() => {
                              target.style.height = "";
                            }, 350);
                            btn.classList.remove("collapsed");
                            btn.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion3"
                      >
                        How can I safely use files?
                      </button>
                    </div>

                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "height 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised word.
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
                          const btn = e.currentTarget;
                          const target =
                            document.getElementById("faqQuestion4");
                          if (!target) return;

                          const isOpen = target.classList.contains("show");

                          // Only-one-open behavior (like data-bs-parent="#faqAccordion")
                          const parent =
                            document.getElementById("faqAccordion");
                          if (!isOpen && parent) {
                            parent
                              .querySelectorAll(".accordion-collapse.show")
                              .forEach((el) => {
                                if (el === target) return;
                                el.style.height = el.scrollHeight + "px";
                                requestAnimationFrame(
                                  () => (el.style.height = "0px")
                                );
                                setTimeout(() => {
                                  el.classList.remove("show");
                                  el.style.height = "";
                                }, 350);
                                const headerBtn =
                                  el.parentElement?.querySelector(
                                    ".accordion-button"
                                  );
                                if (headerBtn) {
                                  headerBtn.classList.add("collapsed");
                                  headerBtn.setAttribute(
                                    "aria-expanded",
                                    "false"
                                  );
                                }
                              });
                          }

                          if (isOpen) {
                            // close
                            target.style.height = target.scrollHeight + "px";
                            requestAnimationFrame(
                              () => (target.style.height = "0px")
                            );
                            setTimeout(() => {
                              target.classList.remove("show");
                              target.style.height = "";
                            }, 350);
                            btn.classList.add("collapsed");
                            btn.setAttribute("aria-expanded", "false");
                          } else {
                            // open
                            target.classList.add("show");
                            target.style.height = "0px";
                            requestAnimationFrame(
                              () =>
                                (target.style.height =
                                  target.scrollHeight + "px")
                            );
                            setTimeout(() => {
                              target.style.height = "";
                            }, 350);
                            btn.classList.remove("collapsed");
                            btn.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion4"
                      >
                        What if I'm Not Happy With My Case?
                      </button>
                    </div>

                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "height 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised word.
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
                          const btn = e.currentTarget;
                          const target =
                            document.getElementById("faqQuestion5");
                          if (!target) return;

                          const isOpen = target.classList.contains("show");

                          // Only-one-open behavior (like data-bs-parent="#faqAccordion")
                          const parent =
                            document.getElementById("faqAccordion");
                          if (!isOpen && parent) {
                            parent
                              .querySelectorAll(".accordion-collapse.show")
                              .forEach((el) => {
                                if (el === target) return;
                                el.style.height = el.scrollHeight + "px";
                                requestAnimationFrame(
                                  () => (el.style.height = "0px")
                                );
                                setTimeout(() => {
                                  el.classList.remove("show");
                                  el.style.height = "";
                                }, 350);
                                const headerBtn =
                                  el.parentElement?.querySelector(
                                    ".accordion-button"
                                  );
                                if (headerBtn) {
                                  headerBtn.classList.add("collapsed");
                                  headerBtn.setAttribute(
                                    "aria-expanded",
                                    "false"
                                  );
                                }
                              });
                          }

                          if (isOpen) {
                            // close
                            target.style.height = target.scrollHeight + "px";
                            requestAnimationFrame(
                              () => (target.style.height = "0px")
                            );
                            setTimeout(() => {
                              target.classList.remove("show");
                              target.style.height = "";
                            }, 350);
                            btn.classList.add("collapsed");
                            btn.setAttribute("aria-expanded", "false");
                          } else {
                            // open
                            target.classList.add("show");
                            target.style.height = "0px";
                            requestAnimationFrame(
                              () =>
                                (target.style.height =
                                  target.scrollHeight + "px")
                            );
                            setTimeout(() => {
                              target.style.height = "";
                            }, 350);
                            btn.classList.remove("collapsed");
                            btn.setAttribute("aria-expanded", "true");
                          }
                        }}
                        aria-expanded="false"
                        aria-controls="faqQuestion5"
                      >
                        When Am I Charged for the Service?
                      </button>
                    </div>

                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      style={{
                        transition: "height 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised word.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8 col-xl-6">
              <div className="section-heading text-center">
                <h2 className="mb-4">Still Have Questions?</h2>
                <p className="mb-5">
                  Each demo built with Teba will look different. You can
                  customize almost anything in the appearance of your website
                  with only
                </p>
                <Link to="#" className="btn btn-primary">
                  <span>
                    Ask Any Question <i className="ti ti-arrow-up-right"></i>
                  </span>
                  <span>
                    Ask Any Question <i className="ti ti-arrow-up-right"></i>
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

export default Faq;
