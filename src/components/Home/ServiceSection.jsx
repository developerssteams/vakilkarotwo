import React from "react";
import { Link } from "react-router-dom";

function ServiceSection() {
  return (
    <div>
      <section className="service-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-4">
              <div className="section-heading pe-lg-4">
                <div className="sub-title">
                  <img src="assets/img/core-img/hammer.png" alt="" />
                  Our Services
                </div>
                <h2>People do not Win Cases, Lawyers Do</h2>
                <Link className="btn btn-primary" to="/AboutUs">
                  <span>
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </span>
                  <span>
                    Read More <i className="ti ti-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="swiper service-swiper-slider">
                <div className="swiper-wrapper">
                  {/* Service Slide */}
                  <Link to="/ServiceDetails" className="swiper-slide">
                    <div className="service-slide-card">
                      <i className="flaticon-meeting"></i>
                      <div className="title">Corporate Law</div>
                      <p>
                        Our Law firm the securiti difference attorneys
                        understand that there difference between
                      </p>
                      <div className="btn btn-link">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>

                  {/* Service Slide */}
                  <Link to="/ServiceDetails" className="swiper-slide">
                    <div className="service-slide-card">
                      <i className="flaticon-real-estate"></i>
                      <div className="title">Real Estate Law</div>
                      <p>
                        Our Law firm the securiti difference attorneys
                        understand that there difference between
                      </p>
                      <div className="btn btn-link">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>

                  {/* Service Slide */}
                  <Link to="/ServiceDetails" className="swiper-slide">
                    <div className="service-slide-card">
                      <i className="flaticon-education"></i>
                      <div className="title">Education Law</div>
                      <p>
                        Our Law firm the securiti difference attorneys
                        understand that there difference between
                      </p>
                      <div className="btn btn-link">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>

                  {/* Service Slide */}
                  <Link to="/ServiceDetails" className="swiper-slide">
                    <div className="service-slide-card">
                      <i className="flaticon-meeting"></i>
                      <div className="title">Corporate Law</div>
                      <p>
                        Our Law firm the securiti difference attorneys
                        understand that there difference between
                      </p>
                      <div className="btn btn-link">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>

                  {/* Service Slide */}
                  <Link to="/ServiceDetails" className="swiper-slide">
                    <div className="service-slide-card">
                      <i className="flaticon-real-estate"></i>
                      <div className="title">Real Estate Law</div>
                      <p>
                        Our Law firm the securiti difference attorneys
                        understand that there difference between
                      </p>
                      <div className="btn btn-link">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>

                  {/* Service Slide */}
                  <Link to="/ServiceDetails" className="swiper-slide">
                    <div className="service-slide-card">
                      <i className="flaticon-education"></i>
                      <div className="title">Education Law</div>
                      <p>
                        Our Law firm the securiti difference attorneys
                        understand that there difference between
                      </p>
                      <div className="btn btn-link">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Navigation */}
            <div className="col-12">
              <div className="swiper-navigation-container service-swiper-slider-navigation">
                <div className="service-button-prev">
                  <i className="ti ti-arrow-left"></i>
                </div>
                <div className="service-button-next">
                  <i className="ti ti-arrow-right"></i>
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

export default ServiceSection;
