import React from "react";

function TestimonialSection() {
  return (
    <div>
      <section className="testimonial-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-12 col-sm-6">
              <div className="section-heading">
                <div className="sub-title">
                  <img src="assets/img/core-img/hammer.png" alt="" />
                  TESTIMONIAL
                </div>
                <h2>See What Clients Say About Lawgis</h2>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="swiper-navigation-container">
                <div className="testimonial-button-prev">
                  <i className="ti ti-arrow-left"></i>
                </div>
                <div className="testimonial-button-next">
                  <i className="ti ti-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* Testimonial Slider */}
              <div className="testimonial-slide">
                <div className="swiper testimonial-swiper">
                  <div className="swiper-wrapper">
                    {/* Testimonial Slide */}
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div
                          className="testimonial-thumbnail"
                          style={{
                            backgroundImage: "url('assets/img/bg-img/14.jpg')",
                          }}
                        ></div>
                        <div className="testimonial-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M10.8329 5C16.1566 5 19.9996 9.39508 19.9995 15.9027C19.9654 25.3579 12.8574 32.0431 2.60313 33.3269C1.65178 33.446 1.28495 32.1281 2.16102 31.7386C6.09567 29.989 8.08287 27.7689 8.33955 25.5714C8.53132 23.9296 7.63883 22.4915 6.51816 22.2222C3.61285 21.524 1.66627 17.906 1.66627 14.1667C1.66627 9.10406 5.77033 5 10.8329 5Z"
                              fill="#E8BF96"
                            />
                            <path
                              d="M30.8329 5C36.1566 5 39.9996 9.39508 39.9995 15.9027C39.9654 25.3579 32.8574 32.0431 22.6031 33.3269C21.6518 33.446 21.2849 32.1281 22.161 31.7386C26.0957 29.989 28.0829 27.7689 28.3395 25.5714C28.5313 23.9296 27.6388 22.4915 26.5182 22.2222C23.6129 21.524 21.6663 17.906 21.6663 14.1667C21.6663 9.10406 25.7703 5 30.8329 5Z"
                              fill="#E8BF96"
                            />
                          </svg>
                          <p className="testimonial-text">
                            "Law is a system of rules guidelines created and
                            enforced by governmen within a society. Its
                            primaryed purpose is to maintain order."
                          </p>
                          <p className="name mb-0">Jackin Martinez</p>
                          <p className="designation mb-0">
                            Business Law Service
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Slide */}
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div
                          className="testimonial-thumbnail"
                          style={{
                            backgroundImage: "url('assets/img/bg-img/15.jpg')",
                          }}
                        ></div>
                        <div className="testimonial-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M10.8329 5C16.1566 5 19.9996 9.39508 19.9995 15.9027C19.9654 25.3579 12.8574 32.0431 2.60313 33.3269C1.65178 33.446 1.28495 32.1281 2.16102 31.7386C6.09567 29.989 8.08287 27.7689 8.33955 25.5714C8.53132 23.9296 7.63883 22.4915 6.51816 22.2222C3.61285 21.524 1.66627 17.906 1.66627 14.1667C1.66627 9.10406 5.77033 5 10.8329 5Z"
                              fill="#E8BF96"
                            />
                            <path
                              d="M30.8329 5C36.1566 5 39.9996 9.39508 39.9995 15.9027C39.9654 25.3579 32.8574 32.0431 22.6031 33.3269C21.6518 33.446 21.2849 32.1281 22.161 31.7386C26.0957 29.989 28.0829 27.7689 28.3395 25.5714C28.5313 23.9296 27.6388 22.4915 26.5182 22.2222C23.6129 21.524 21.6663 17.906 21.6663 14.1667C21.6663 9.10406 25.7703 5 30.8329 5Z"
                              fill="#E8BF96"
                            />
                          </svg>
                          <p className="testimonial-text">
                            "Law is a system of rules guidelines created and
                            enforced by governmen within a society. Its
                            primaryed purpose is to maintain order."
                          </p>
                          <p className="name mb-0">Karan Khanna</p>
                          <p className="designation mb-0">
                            Business Law Service
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Slide */}
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div
                          className="testimonial-thumbnail"
                          style={{
                            backgroundImage: "url('assets/img/bg-img/14.jpg')",
                          }}
                        ></div>
                        <div className="testimonial-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M10.8329 5C16.1566 5 19.9996 9.39508 19.9995 15.9027C19.9654 25.3579 12.8574 32.0431 2.60313 33.3269C1.65178 33.446 1.28495 32.1281 2.16102 31.7386C6.09567 29.989 8.08287 27.7689 8.33955 25.5714C8.53132 23.9296 7.63883 22.4915 6.51816 22.2222C3.61285 21.524 1.66627 17.906 1.66627 14.1667C1.66627 9.10406 5.77033 5 10.8329 5Z"
                              fill="#E8BF96"
                            />
                            <path
                              d="M30.8329 5C36.1566 5 39.9996 9.39508 39.9995 15.9027C39.9654 25.3579 32.8574 32.0431 22.6031 33.3269C21.6518 33.446 21.2849 32.1281 22.161 31.7386C26.0957 29.989 28.0829 27.7689 28.3395 25.5714C28.5313 23.9296 27.6388 22.4915 26.5182 22.2222C23.6129 21.524 21.6663 17.906 21.6663 14.1667C21.6663 9.10406 25.7703 5 30.8329 5Z"
                              fill="#E8BF96"
                            />
                          </svg>
                          <p className="testimonial-text">
                            "Law is a system of rules guidelines created and
                            enforced by governmen within a society. Its
                            primaryed purpose is to maintain order."
                          </p>
                          <p className="name mb-0">Jackin Martinez</p>
                          <p className="designation mb-0">
                            Business Law Service
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Slide */}
                    <div className="swiper-slide">
                      <div className="testimonial-card">
                        <div
                          className="testimonial-thumbnail"
                          style={{
                            backgroundImage: "url('assets/img/bg-img/15.jpg')",
                          }}
                        ></div>
                        <div className="testimonial-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M10.8329 5C16.1566 5 19.9996 9.39508 19.9995 15.9027C19.9654 25.3579 12.8574 32.0431 2.60313 33.3269C1.65178 33.446 1.28495 32.1281 2.16102 31.7386C6.09567 29.989 8.08287 27.7689 8.33955 25.5714C8.53132 23.9296 7.63883 22.4915 6.51816 22.2222C3.61285 21.524 1.66627 17.906 1.66627 14.1667C1.66627 9.10406 5.77033 5 10.8329 5Z"
                              fill="#E8BF96"
                            />
                            <path
                              d="M30.8329 5C36.1566 5 39.9996 9.39508 39.9995 15.9027C39.9654 25.3579 32.8574 32.0431 22.6031 33.3269C21.6518 33.446 21.2849 32.1281 22.161 31.7386C26.0957 29.989 28.0829 27.7689 28.3395 25.5714C28.5313 23.9296 27.6388 22.4915 26.5182 22.2222C23.6129 21.524 21.6663 17.906 21.6663 14.1667C21.6663 9.10406 25.7703 5 30.8329 5Z"
                              fill="#E8BF96"
                            />
                          </svg>
                          <p className="testimonial-text">
                            "Law is a system of rules guidelines created and
                            enforced by governmen within a society. Its
                            primaryed purpose is to maintain order."
                          </p>
                          <p className="name mb-0">Karan Khanna</p>
                          <p className="designation mb-0">
                            Business Law Service
                          </p>
                        </div>
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
    </div>
  );
}

export default TestimonialSection;
