import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div>
      <section className="about-section bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            {/* About Thumbnail */}
            <div className="col-12 col-lg-6">
              <div className="about-thumbnail">
                <div className="row g-4 align-items-end">
                  <div className="col-12 col-sm-6">
                    <img
                      src="assets/img/bg-img/3.jpg"
                      alt=""
                      className="wow fadeInUp w-100"
                      data-wow-duration="1000ms"
                      data-wow-delay="600ms"
                    />
                    {/* Experience Card */}
                    <div
                      className="experience-card mt-4 wow fadeInUp"
                      data-wow-duration="1000ms"
                      data-wow-delay="800ms"
                    >
                      <h2>
                        <span className="counter">20</span>
                        <span>+</span>
                      </h2>
                      <p className="mb-0">Years of Experience</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <img
                      src="assets/img/bg-img/4.jpg"
                      alt=""
                      className="wow fadeInUp w-100"
                      data-wow-duration="1000ms"
                      data-wow-delay="1000ms"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="col-12 col-lg-6">
              <div className="about-content ps-md-4">
                <div className="section-heading">
                  <div className="sub-title">
                    <img src="assets/img/core-img/hammer.png" alt="" />
                    About Us
                  </div>
                  <h2 className="mb-4">Welcome to Legal Firm & Law Company</h2>
                  <p className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the standard
                    dummy. With passion for innovation and a commitment to
                    excellence.
                  </p>
                  <Link className="btn btn-primary mb-5" to="/AboutUs">
                    <span>
                      Read More <i className="ti ti-arrow-up-right"></i>
                    </span>
                    <span>
                      Read More <i className="ti ti-arrow-up-right"></i>
                    </span>
                  </Link>
                  <p className="fw-semibold text-heading mb-4">
                    "Add some additional details about your projects. Lorem
                    Ipsum is simply dummy text of the printing."
                  </p>

                  {/* Manager Info */}
                  <div className="manager-info d-flex align-items-center gap-3">
                    <div className="manager-thumbnail">
                      <img src="assets/img/bg-img/2.jpg" alt="" />
                    </div>
                    <div>
                      <p className="mb-0">Daniyel Karlos</p>
                      <p className="mb-0">Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </section>
    </div>
  );
}

export default AboutSection;
