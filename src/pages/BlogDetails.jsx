import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import MagnetCursor from "../components/MagnetCursor";

function BlogDetails() {
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
        style={{ backgroundImage: " url('assets/img/bg-img/73.jpg')" }}
      >
        <div className="divider"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="breadcrumb-content">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="700ms"
                >
                  A Guide to Practicing Law in Multiple States
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
                    <Link className="magnet-link" to="/BlogOne">
                      Blog
                    </Link>
                  </li>
                  <li>A Guide to Practicing Law in Multiple States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Blog Wrapper */}
      <div className="blog-page-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-12 col-md-7 col-lg-8">
              {/* Blog Title */}
              <div className="single-blog">
                <img src="assets/img/bg-img/91.jpg" alt="" />

                <div className="blog-meta gap-4 d-flex flex-wrap align-items-center py-4 border-bottom mb-4">
                  <Link to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.85626 9.63408C11.1798 9.63408 12.3257 9.15938 13.2623 8.22279C14.1986 7.28636 14.6735 6.14058 14.6735 4.81689C14.6735 3.49365 14.1988 2.34771 13.2622 1.41098C12.3256 0.4747 11.1797 0 9.85626 0C8.53256 0 7.38678 0.4747 6.45035 1.41113C5.51392 2.34756 5.03906 3.49349 5.03906 4.81689C5.03906 6.14058 5.51392 7.28652 6.45035 8.22295C7.38708 9.15922 8.53302 9.63408 9.85626 9.63408ZM7.27921 2.23983C7.99774 1.5213 8.84064 1.17203 9.85626 1.17203C10.8717 1.17203 11.7148 1.5213 12.4335 2.23983C13.152 2.95852 13.5014 3.80157 13.5014 4.81689C13.5014 5.83251 13.152 6.6754 12.4335 7.39409C11.7148 8.11278 10.8717 8.46205 9.85626 8.46205C8.84094 8.46205 7.99805 8.11263 7.27921 7.39409C6.56052 6.67555 6.21109 5.83251 6.21109 4.81689C6.21109 3.80157 6.56052 2.95852 7.27921 2.23983Z"
                        fill="#E8BF96"
                      />
                      <path
                        d="M18.2863 15.3784C18.2593 14.9887 18.2047 14.5636 18.1242 14.1146C18.0431 13.6624 17.9385 13.2348 17.8134 12.844C17.684 12.4401 17.5084 12.0413 17.291 11.6591C17.0656 11.2623 16.8007 10.9169 16.5034 10.6326C16.1926 10.3352 15.8121 10.0961 15.372 9.92169C14.9335 9.7482 14.4475 9.66031 13.9276 9.66031C13.7234 9.66031 13.526 9.74408 13.1447 9.99234C12.91 10.1454 12.6355 10.3224 12.3291 10.5182C12.0671 10.6851 11.7122 10.8415 11.2738 10.9831C10.8461 11.1215 10.4118 11.1917 9.98306 11.1917C9.5546 11.1917 9.12033 11.1215 8.69232 10.9831C8.25439 10.8416 7.89932 10.6852 7.63779 10.5183C7.33429 10.3244 7.05963 10.1474 6.82144 9.99219C6.44043 9.74393 6.24298 9.66016 6.03882 9.66016C5.5188 9.66016 5.03296 9.7482 4.59457 9.92184C4.15482 10.0959 3.77411 10.3351 3.46298 10.6327C3.16574 10.9172 2.90085 11.2625 2.67563 11.6591C2.4585 12.0413 2.28271 12.44 2.15332 12.8442C2.02835 13.235 1.92383 13.6624 1.84265 14.1146C1.76208 14.5629 1.70761 14.9882 1.6806 15.3788C1.65405 15.7608 1.64062 16.1583 1.64062 16.5599C1.64062 17.6039 1.9725 18.449 2.62695 19.0724C3.27332 19.6875 4.12842 19.9993 5.16861 19.9993H14.7987C15.8386 19.9993 16.6937 19.6875 17.3402 19.0724C17.9948 18.4495 18.3267 17.604 18.3267 16.5597C18.3266 16.1567 18.313 15.7592 18.2863 15.3784ZM16.5321 18.2232C16.105 18.6297 15.538 18.8273 14.7986 18.8273H5.16861C4.42902 18.8273 3.862 18.6297 3.43506 18.2234C3.0162 17.8247 2.81265 17.2804 2.81265 16.5599C2.81265 16.1851 2.82501 15.8151 2.84973 15.4599C2.87384 15.1113 2.92313 14.7285 2.99622 14.3217C3.06839 13.9199 3.16025 13.5429 3.2695 13.2016C3.37433 12.8743 3.5173 12.5502 3.69461 12.238C3.86383 11.9404 4.05853 11.6851 4.27338 11.4795C4.47433 11.287 4.72763 11.1296 5.02609 11.0115C5.30212 10.9022 5.61234 10.8424 5.9491 10.8334C5.99014 10.8552 6.06323 10.8969 6.18164 10.9741C6.42258 11.1311 6.70029 11.3102 7.00729 11.5063C7.35336 11.727 7.79922 11.9262 8.33191 12.0982C8.8765 12.2743 9.43192 12.3637 9.98322 12.3637C10.5345 12.3637 11.0901 12.2743 11.6344 12.0984C12.1675 11.9261 12.6132 11.727 12.9597 11.506C13.2739 11.3052 13.5439 11.1313 13.7848 10.9741C13.9032 10.897 13.9763 10.8552 14.0173 10.8334C14.3542 10.8424 14.6645 10.9022 14.9406 11.0115C15.239 11.1296 15.4922 11.2872 15.6932 11.4795C15.9081 11.685 16.1028 11.9403 16.272 12.2381C16.4494 12.5502 16.5926 12.8744 16.6972 13.2014C16.8066 13.5432 16.8987 13.9201 16.9707 14.3216C17.0436 14.7291 17.093 15.1121 17.1172 15.46V15.4603C17.142 15.8142 17.1545 16.184 17.1547 16.5599C17.1545 17.2805 16.951 17.8247 16.5321 18.2232Z"
                        fill="#E8BF96"
                      />
                    </svg>{" "}
                    Admin
                  </Link>
                  <Link to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_7058)">
                        <mask
                          id="mask0_1_7058"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M0 1.90735e-06H20V20H0V1.90735e-06Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1_7058)">
                          <path
                            d="M15.4297 1.75781H2.14844C1.28551 1.75781 0.585938 2.45738 0.585938 3.32031V5.66406H16.9922V3.32031C16.9922 2.45738 16.2927 1.75781 15.4297 1.75781Z"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.86719 2.92969V0.585938"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7109 2.92969V0.585938"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.4297 2.92969V0.585938"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.14844 2.92969V0.585938"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.0391 8.30078H11.0156"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.5625 8.30078H7.53906"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5156 8.30078H14.4922"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.08594 10.9375H4.0625"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.5625 10.9375H7.53906"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.0391 10.9375H11.0156"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.08594 13.5742H4.0625"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.5625 13.5742H7.53906"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.4141 15.1172C19.4141 17.4903 17.4903 19.4141 15.1172 19.4141C12.7441 19.4141 10.8203 17.4903 10.8203 15.1172C10.8203 12.7441 12.7441 10.8203 15.1172 10.8203C17.4903 10.8203 19.4141 12.7441 19.4141 15.1172Z"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.1172 13.1641V15.1172H17.0703"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9922 11.25V5.66406H0.585938V15.0391C0.585938 15.6863 1.11062 16.2109 1.75781 16.2109H10.961"
                            stroke="#E8BF96"
                            strokeWidth="1.20443"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_7058">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    October 28, 2024
                  </Link>
                  <Link to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_7100)">
                        <path
                          d="M19.699 17.2269C19.6796 17.2159 17.8852 16.1977 16.6111 14.7899C17.5122 13.3583 17.9865 11.7151 17.9865 10.0089C17.9865 7.60667 17.051 5.34821 15.3524 3.6496C13.6537 1.95114 11.3953 1.01562 8.99324 1.01562C6.59105 1.01562 4.33259 1.95114 2.63413 3.6496C0.935518 5.34821 0 7.60667 0 10.0089C0 12.4109 0.935518 14.6694 2.63413 16.368C4.33259 18.0666 6.59105 19.002 8.99324 19.002C10.5264 19.002 12.0279 18.6126 13.3585 17.873C15.9807 19.3308 19.4239 18.3525 19.5749 18.3084C19.803 18.2418 19.9691 18.0449 19.9961 17.8089C20.0232 17.5727 19.9062 17.3435 19.699 17.2269ZM13.6862 16.6922C13.4957 16.5677 13.2503 16.5641 13.0559 16.6826C11.8355 17.4272 10.4306 17.8209 8.99324 17.8209C4.68568 17.8209 1.18103 14.3164 1.18103 10.0089C1.18103 5.70115 4.68568 2.19666 8.99324 2.19666C13.3008 2.19666 16.8053 5.70115 16.8053 10.0089C16.8053 11.6254 16.3156 13.1767 15.389 14.4951C15.2375 14.7107 15.2471 15.0008 15.4128 15.2057C16.146 16.1135 17.092 16.8868 17.8453 17.4279C16.6701 17.556 14.9802 17.5368 13.6862 16.6922Z"
                          fill="#E8BF96"
                        />
                        <path
                          d="M12.9959 12.043H4.98895C4.66272 12.043 4.39844 12.3074 4.39844 12.6335C4.39844 12.9596 4.66272 13.224 4.98895 13.224H12.9959C13.3219 13.224 13.5864 12.9596 13.5864 12.6335C13.5864 12.3074 13.3219 12.043 12.9959 12.043Z"
                          fill="#E8BF96"
                        />
                        <path
                          d="M12.9959 9.41797H4.98895C4.66272 9.41797 4.39844 9.6824 4.39844 10.0086C4.39844 10.3347 4.66272 10.5992 4.98895 10.5992H12.9959C13.3219 10.5992 13.5864 10.3347 13.5864 10.0086C13.5864 9.6824 13.3219 9.41797 12.9959 9.41797Z"
                          fill="#E8BF96"
                        />
                        <path
                          d="M12.9959 6.79297H4.98895C4.66272 6.79297 4.39844 7.0574 4.39844 7.38348C4.39844 7.70972 4.66272 7.974 4.98895 7.974H12.9959C13.3219 7.974 13.5864 7.70972 13.5864 7.38348C13.5864 7.0574 13.3219 6.79297 12.9959 6.79297Z"
                          fill="#E8BF96"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_7100">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    0 Comments
                  </Link>
                </div>
              </div>

              {/* Blog Content */}
              <div className="blog-details-content">
                <p>
                  When to Use Lorem Ipsum generally, lorem ipsum is best suited
                  to keeping template fo looking bare or minimizing the
                  distractions of the draft copy. Second, use lorem ipsum if you
                  think placeholder text will distracting. in voluptate velit
                  esse. Cursus libero viverra tempus netus diam vestibulum lorem
                  tincidunt congue porta. Non ligula egestas commodo massa.
                </p>

                <div className="blog-quote">
                  <div className="blog-quote-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="62"
                      height="62"
                      viewBox="0 0 62 62"
                      fill="none"
                    >
                      <path
                        d="M14.5312 9.41406C6.51702 9.41406 0 15.9329 0 23.9453C0 31.2606 5.43154 37.3306 12.4771 38.3311C11.9131 42.4287 10.3486 46.3275 7.90415 49.7085C7.42874 50.3683 7.44654 51.2624 7.9538 51.9009C8.4515 52.5292 9.31635 52.7674 10.0754 52.4473C21.6088 47.6332 29.0625 36.4438 29.0625 23.9453C29.0625 15.9329 22.5455 9.41406 14.5312 9.41406ZM47.4688 9.41406C39.4545 9.41406 32.9375 15.9329 32.9375 23.9453C32.9375 31.2606 38.369 37.3306 45.4146 38.3311C44.8506 42.4287 43.2861 46.3275 40.8417 49.7085C40.3662 50.3683 40.384 51.2624 40.8913 51.9009C41.389 52.5292 42.2538 52.7674 43.0129 52.4473C54.5463 47.6332 62 36.4438 62 23.9453C62 15.9329 55.483 9.41406 47.4688 9.41406Z"
                        fill="#E8BF96"
                      />
                    </svg>
                  </div>

                  <p>
                    “Enim ad minim veniam, quis nostrud exercitation ullamco is
                    laboris nisi ut aliquip ex ea commodo consequat a reprehen
                    derit in consequat duis aute voluptate velit esse.”
                  </p>
                </div>

                <p>
                  Cursus libero viverra tempus netus diam vestibulum lorem
                  tincidunt congue porta. Non ligu egestas commodo massa. Lorem
                  non sit vivamus convallis elit mollis. Viverra sodales feugiat
                  natoque sem morbi hac nunc ultricies nibh netus facilisis
                  blandit. Felis purus et iaculis. Semper orci duis montes
                  curabitur potenti a varius quis augue duis Non ligula sodales
                  feugiat natoque.
                </p>

                <div className="row g-4 align-items-center">
                  <div className="col-6">
                    <img src="assets/img/bg-img/78.jpg" alt="" />
                  </div>
                  <div className="col-6">
                    <img src="assets/img/bg-img/79.jpg" alt="" />
                  </div>
                </div>

                <p>
                  Cursus libero viverra tempus netus diam vestibulum lorem
                  tincidunt congue porta. Non ligu egestas commodo massa. Lorem
                  non sit vivamus convallis elit mollis. Viverra sodales feugiat
                  natoque sem morbi hac nunc ultricies nibh netus facilisis
                  blandit. Felis purus et iaculis. Semper orci duis montes
                  curabitur potenti a varius quis augue duis Non ligula sodales
                  feugiat natoque.
                </p>
              </div>

              {/* Tags Section */}
              <ul className="tag-list style-two list-unstyled mt-5">
                <li>
                  <Link to="#">Accident</Link>
                </li>
                <li>
                  <Link to="#">Consultation</Link>
                </li>
                <li>
                  <Link to="#">Family</Link>
                </li>
                <li>
                  <Link to="#">Law</Link>
                </li>
                <li>
                  <Link to="#">Business</Link>
                </li>
              </ul>

              <div className="divider-sm"></div>

              {/* Post Author */}
              <div className="post-author">
                <div>
                  <img src="assets/img/bg-img/94.jpg" alt="" />
                </div>
                <div>
                  <p className="mb-3">
                    So earth sea whose you're light from years his of spirit
                    fruit seasons deep can't years hath signs fish the likeness
                    one seed forth from second.
                  </p>
                  <div className="mb-0 h5 fw-semibold">Savannah Nguyen</div>
                  <p className="mb-0">Writer</p>
                </div>
              </div>

              <div className="divider-sm"></div>

              {/* Comments */}
              <div className="blog-comments">
                <div className="h2 mb-4">2 Comments</div>

                <ul className="blog-comments-list">
                  <li className="single-comment">
                    <div className="d-flex gap-4">
                      <div>
                        <img src="assets/img/bg-img/92.jpg" alt="" />
                      </div>
                      <div>
                        <p className="mb-3">
                          Legal expertise and is client focused we enhance
                          entrepreneurial environment flexible supportive,
                          allowing our lawyers introduced.
                        </p>
                        <div className="mb-3">
                          <div className="mb-0 h5 fw-semibold">
                            Alexander Cameron
                          </div>
                          <p className="mb-0">Jan 28, 2024</p>
                        </div>
                        <Link to="#" className="btn btn-link">
                          <span>
                            Reply <i className="ti ti-arrow-up-right"></i>
                          </span>
                          <span>
                            Reply <i className="ti ti-arrow-up-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <ul>
                      <li className="single-comment">
                        <div className="d-flex gap-4">
                          <div>
                            <img src="assets/img/bg-img/93.jpg" alt="" />
                          </div>
                          <div>
                            <p className="mb-3">
                              Legal expertise and is client focused we enhance
                              entrepreneurial environment flexible supportive,
                              allowing our lawyers introduced.
                            </p>
                            <div className="mb-3">
                              <div className="mb-0 h5 fw-semibold">
                                Brooklyn Simmons
                              </div>
                              <p className="mb-0">Jan 28, 2024</p>
                            </div>
                            <Link to="#" className="btn btn-link">
                              <span>
                                Reply <i className="ti ti-arrow-up-right"></i>
                              </span>
                              <span>
                                Reply <i className="ti ti-arrow-up-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="divider-sm"></div>

              {/* Comment Form */}
              <div className="comment-form contact-form m-0 p-0">
                <div className="mb-4">
                  <div className="h2 fw-semibold mb-3">Leave a reply</div>
                  <p className="mb-0">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>

                {/* Form */}
                <form action="#" method="get">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        autoComplete="name"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select website"
                        name="website"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="20"
                        cols="30"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        <span>
                          Post Comment <i className="ti ti-arrow-up-right"></i>
                        </span>
                        <span>
                          Post Comment <i className="ti ti-arrow-up-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-4">
              <div className="d-flex flex-column gap-5">
                {/* Widget */}
                <div className="blog-widget">
                  <div className="h4 mb-4">Search Here</div>
                  {/* Form */}
                  <form action="#" method="get">
                    <input
                      type="search"
                      placeholder="Search here..."
                      className="form-control"
                      name="search"
                    />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
                          stroke="#1C1D20"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Widget */}
                <div className="blog-widget">
                  <div className="h4 mb-4">Categories</div>

                  <ul className="blog-list style-two">
                    <li>
                      <Link to="/BlogOne">
                        Criminal Justice
                        <span>(2)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/BlogOne">
                        Labor Law
                        <span>(18)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/BlogOne">
                        Cultural Schemas
                        <span>(4)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/BlogOne">
                        Pro Bono Work
                        <span>(8)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/BlogOne">
                        Legal Advise
                        <span>(11)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/BlogOne">
                        Insurance Law
                        <span>(5)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Widget */}
                <div className="blog-widget">
                  <div className="h4 mb-4">Recent Posts</div>

                  <div className="d-flex flex-column gap-4">
                    {/* Widget Blog Post */}
                    <div className="widget-blog-post">
                      <div className="blog-thumbnail">
                        <img src="assets/img/bg-img/41.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <Link to="/BlogDetails">
                          A Guide to Practicing Law in Multiple States
                        </Link>
                        <p className="mb-0">October 28, 2024</p>
                      </div>
                    </div>

                    {/* Widget Blog Post */}
                    <div className="widget-blog-post">
                      <div className="blog-thumbnail">
                        <img src="assets/img/bg-img/42.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <Link to="/BlogDetails">
                          How to Successfully Organize Your Legal Files
                        </Link>
                        <p className="mb-0">October 28, 2024</p>
                      </div>
                    </div>

                    {/* Widget Blog Post */}
                    <div className="widget-blog-post">
                      <div className="blog-thumbnail">
                        <img src="assets/img/bg-img/43.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <Link to="/BlogDetails">
                          Modern Offices in The Best District in Town
                        </Link>
                        <p className="mb-0">October 28, 2024</p>
                      </div>
                    </div>

                    {/* Widget Blog Post */}
                    <div className="widget-blog-post">
                      <div className="blog-thumbnail">
                        <img src="assets/img/bg-img/44.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <Link to="/BlogDetails">
                          Quick Solutions for Worst Legal Problems
                        </Link>
                        <p className="mb-0">October 28, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Widget */}
                <div className="blog-widget">
                  <div className="h4 mb-4">Tags</div>

                  <ul className="tag-list list-unstyled">
                    <li>
                      <Link to="#">Accident</Link>
                    </li>
                    <li>
                      <Link to="#">Consultation</Link>
                    </li>
                    <li>
                      <Link to="#">Family</Link>
                    </li>
                    <li>
                      <Link to="#">Law</Link>
                    </li>
                    <li>
                      <Link to="#">Business</Link>
                    </li>
                  </ul>
                </div>
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

export default BlogDetails;
