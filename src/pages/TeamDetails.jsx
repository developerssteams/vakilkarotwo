import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import MagnetCursor from "../components/MagnetCursor";
import ScrollToTop from "../components/ScrollToTop";

function TeamDetails() {
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
              Shawn S. Kerendian
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
              <li>
                <Link className="magnet-link" to="/Team">
                  Team
                </Link>
              </li>
              <li>Shawn S. Kerendian</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Team Member Details */}
      <div className="team-member-details bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-6">
              <div className="team-details-img pe-xl-5">
                <img src="assets/img/bg-img/11.jpg" alt="" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="team-details-content">
                <h2 className="team-member-title mb-2">Shawn S. Kerendian</h2>
                <p className="h4 mb-4 text-primary">Associate Director</p>
                <p className="mb-4">
                  A content management system helps you create, manage, a
                  publish content on the web. It also keep content organized and
                  accessible so it can be used and repurposed effectively.
                </p>

                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.625 17.5C14.8889 17.5 13.1701 17.125 11.4688 16.375C9.76736 15.625 8.22222 14.5556 6.83333 13.1667C5.44444 11.7778 4.375 10.2361 3.625 8.54167C2.875 6.84722 2.5 5.125 2.5 3.375V2.5H7.41667L8.1875 6.6875L5.8125 9.08333C6.11806 9.625 6.45833 10.1389 6.83333 10.625C7.20833 11.1111 7.61111 11.5625 8.04167 11.9792C8.44444 12.3819 8.88542 12.7674 9.36458 13.1354C9.84375 13.5035 10.3611 13.8472 10.9167 14.1667L13.3333 11.75L17.5 12.6042V17.5H16.625Z"
                      fill="#1C1D20"
                    />
                  </svg>{" "}
                  518-564-3200
                </div>
                <div className="mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M1.66797 16.6693V3.33594H18.3346V16.6693H1.66797ZM10.0013 10.8359L16.668 6.66927V5.0026L10.0013 9.16927L3.33464 5.0026V6.66927L10.0013 10.8359Z"
                      fill="#1C1D20"
                    />
                  </svg>{" "}
                  lawgis@example.com
                </div>

                {/* Social Nav */}
                <div className="social-nav mb-4">
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

                <div className="h4 mb-3">Personal Information</div>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit am consectetur, adipisci velit,
                  aliquam quaerat voluptatem.
                </p>

                <div className="mb-4"></div>

                <div className="h4 mb-4">Experience Area</div>

                {/* Progress Bar */}
                <div className="progress-container progress2 mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="progress-label lh-1 text-heading">
                      Business Growth
                    </div>
                    <div className="progress-percentage counter lh-1 text-heading">
                      80%
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-percentage="80"></div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="progress-container progress2 mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="progress-label lh-1 text-heading">
                      Market Analysis
                    </div>
                    <div className="progress-percentage counter lh-1 text-heading">
                      90%
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-percentage="90"></div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="progress-container progress2">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="progress-label lh-1 text-heading">
                      Market Analysis
                    </div>
                    <div className="progress-percentage counter lh-1 text-heading">
                      100%
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-percentage="100"></div>
                  </div>
                </div>

                <div className="mb-5"></div>

                <div className="h4 mb-3">Set clear goals</div>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia.
                </p>

                <div className="mb-5"></div>

                <div className="h4 mb-3">Message With Me</div>
                <form className="service-form">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        autoComplete="name"
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        autoComplete="email"
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        autoComplete="phone"
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        id="message"
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
                        <span>
                          Request Consultation{" "}
                          <i className="ti ti-arrow-up-right"></i>
                        </span>
                        <span>
                          Request Consultation{" "}
                          <i className="ti ti-arrow-up-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
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

export default TeamDetails;
