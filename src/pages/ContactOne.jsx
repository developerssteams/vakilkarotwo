import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import MagnetCursor from "../components/MagnetCursor.jsx";

function ContactOne() {
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
              Contact Us
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
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      {/* Contact Wrapper */}
      <div className="contact-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-12 col-md-6">
              {/* Contact Form */}
              <div
                className="contact-form style-two bg-dark wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="500ms"
              >
                <div className="mb-4 contact-title text-white">
                  Send Us Message
                </div>

                {/* Form */}
                <form>
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
                          Send Message <i className="ti ti-arrow-up-right"></i>
                        </span>
                        <span>
                          Send Message <i className="ti ti-arrow-up-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-5">
              {/* Contact Small Card */}
              <div
                className="contact-small-card mb-4 wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="500ms"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1367)">
                    <mask
                      id="mask0_1_1367"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="44"
                      height="44"
                    >
                      <path
                        d="M0 3.8147e-06H44V44H0V3.8147e-06Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1_1367)">
                      <path
                        d="M39.6294 19.8746V5.09241H18.3906V42.1875H39.6294V27.4623"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3888 42.1875H4.01172V19.3733H18.3888V42.1875Z"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.859375 42.1875H43.1406"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <path
                      d="M9.93155 19.3711H4.00977V15.8139H9.93155V19.3711Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <mask
                      id="mask1_1_1367"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="44"
                      height="44"
                    >
                      <path
                        d="M0 3.8147e-06H44V44H0V3.8147e-06Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_1_1367)">
                      <path
                        d="M36.6567 5.08984H21.582V1.81356H36.6567V5.08984Z"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <path
                      d="M26.678 13.5312H23.0352V9.88845H26.678V13.5312Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.7326 13.5312H31.0898V9.88845H34.7326V13.5312Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.678 21.043H23.0352V17.4002H26.678V21.043Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.7326 21.0469H31.0898V17.4041H34.7326V21.0469Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.678 28.5586H23.0352V24.9158H26.678V28.5586Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.7326 28.5586H31.0898V24.9158H34.7326V28.5586Z"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <mask
                      id="mask2_1_1367"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="44"
                      height="44"
                    >
                      <path
                        d="M0 3.8147e-06H44V44H0V3.8147e-06Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask2_1_1367)">
                      <path
                        d="M31.7386 42.1875H26.1348V34.1829H31.7386V42.1875Z"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0504 42.1875H9.24023V37.4002H13.0504V42.1875Z"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <path
                      d="M7.61719 23.0694V33.8359"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.1328 23.0694V33.8359"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6543 23.0694V33.8359"
                      stroke="#E8BF96"
                      strokeWidth="1.71875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1367">
                      <rect width="44" height="44" rx="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Head Branch</div>
                  <p className="mb-0">
                    Plot No.-16, Ganesh Nagar, Shankar Vihar Extension, Jamna Puri, Jaipur, Rajasthan 302039
                  </p>
                </div>
              </div>

              {/* Contact Small Card */}
              <div
                className="contact-small-card mb-4 wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1410)">
                    <mask
                      id="mask0_1_1410"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="44"
                      height="44"
                    >
                      <path
                        d="M0 3.8147e-06H44V44H0V3.8147e-06Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1_1410)">
                      <path
                        d="M38.5 10.3125L43.1406 14.9531V39.7031C43.1406 41.6016 41.6016 43.1406 39.7031 43.1406H4.29688C2.39843 43.1406 0.859375 41.6016 0.859375 39.7031V14.9531L5.5 10.3125"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M42.8817 15.2113L21.9603 36.1328L1.13477 15.3073"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.94922 42.0547L14.9157 29.0882"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41.8086 41.8086L29.0469 29.0469"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.1051 0.862012H5.5V19.4531"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.5003 19.4531V0.862012H25.8398"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.9173 14.8019C24.9173 17.3051 23.3812 19.1797 21.5419 19.1797C19.7027 19.1797 18.0762 17.3312 18.0762 14.828C18.0762 12.3248 19.793 10.6569 21.6323 10.6569C23.4715 10.6569 24.9173 12.2988 24.9173 14.8019Z"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.8215 23.4141C18.1633 23.3129 14.8277 20.837 13.8372 17.0709C12.6941 12.7241 15.1944 8.18405 19.4772 6.82074C24.007 5.37879 28.8244 7.92718 30.1931 12.4619C30.6773 14.2764 30.3947 15.8549 29.7529 17.4686C29.4984 18.1085 28.6593 19.6063 26.7924 19.6063C25.7734 19.6063 24.9238 18.6295 24.9293 17.5047V10.3996"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1410">
                      <rect width="44" height="44" rx="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <div>Email Us</div>
                  <p className="mb-0">
                    We're usually replying within 24 hours <br />
                    help@vakilkaro.co.in
                  </p>
                </div>
              </div>

              {/* Contact Small Card */}
              <div
                className="contact-small-card wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_1438)">
                    <mask
                      id="mask0_1_1438"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="44"
                      height="44"
                    >
                      <path
                        d="M0 3.8147e-06H44V44H0V3.8147e-06Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1_1438)">
                      <path
                        d="M25.0449 0.86907C35.0231 0.86907 43.1408 8.98673 43.1408 18.9648"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.0449 6.03899C32.1718 6.03899 37.9708 11.838 37.9708 18.9648"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.0449 11.2099C29.3213 11.2099 32.7999 14.6886 32.7999 18.9648"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.0449 16.3798C26.4723 16.3798 27.6299 17.5375 27.6299 18.9648"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.1055 27.9141C16.1055 28.3887 15.7207 28.7734 15.2461 28.7734C14.7715 28.7734 14.3867 28.3887 14.3867 27.9141C14.3867 27.4395 14.7715 27.0547 15.2461 27.0547C15.7207 27.0547 16.1055 27.4395 16.1055 27.9141Z"
                        fill="#E8BF96"
                      />
                      <path
                        d="M12.7375 24.9742C12.1923 24.2581 11.6756 23.5186 11.189 22.7572C10.5497 21.7561 10.7431 20.4301 11.5826 19.5905L14.5003 16.6728C15.1284 16.0456 15.1284 15.0272 14.5003 14.3998L7.6338 7.53347C7.00645 6.90518 5.98818 6.90518 5.36084 7.53347L3.62309 9.27104C0.802711 12.0907 0.0404452 16.3944 1.81076 19.9677C4.96037 26.3262 11.4418 36.0732 23.9285 42.1963C27.5129 43.9529 31.8365 43.2078 34.6586 40.3857L36.4358 38.6084C37.064 37.9811 37.064 36.9628 36.4358 36.3345L29.5693 29.469C28.942 28.8407 27.9237 28.8407 27.2964 29.469L24.3788 32.3866C23.5391 33.2261 22.2132 33.4195 21.2119 32.7802C20.1289 32.088 19.0894 31.3345 18.0986 30.5243"
                        stroke="#E8BF96"
                        strokeWidth="1.71875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1438">
                      <rect width="44" height="44" rx="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <div>Call Us</div>
                  <p className="mb-0">
                    Talk to us and see how we can work together <br />
                    +91 9828123489
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        <br />
        <section>
          <div className="container">

            <div className="cs-grid">

              {/* Murlipura  */}
              <div
                className="contact-small-card wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                <div style={{ textAlign: "center" }}>
                  <div className="branch-title">Murlipura Branch</div>
                  <p className="mb-2">
                    Plot No - 16, Ganesh Nagar, Shankar Vihar Extension, Jamna Puri, Jaipur, Rajasthan <br />
                    302039
                  </p>

                  <a
                    href="https://www.google.com/maps/place/Vakilkaro/@26.9760386,75.7502595,17z/data=!3m1!4b1!4m6!3m5!1s0x396db30392c8ae4b:0xac13f2c13ea153c4!8m2!3d26.9760338!4d75.7528344!16s%2Fg%2F11xz0z4qtb?entry=tts&g_ep=EgoyMDI1MTExMi4wIPu8ASoASAFQAw%3D%3D&skid=a0eee0db-c3eb-4015-af3f-e6db3854ae93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-btn"
                  >
                    Get Directions
                  </a>


                </div>
              </div>





              <div
                className="contact-small-card wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >


                <div>
                  <div>Civil Line Branch</div>
                  <p className="mb-0">
                    Mukhya Nagar, Near Geetanjali Towers Geetaanjali Tower, Madrampur, Civil Lines , Jaipur, Rajasthan  <br />
                    302006
                  </p>

                  <a
                    href="https://www.google.com/maps?q=Vakilkaro+Civil+Lines+Jaipur&ll=26.9076723,75.7793371&z=17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-btn"
                  >
                    Get Directions
                  </a>
                </div>

              </div>

              <div
                className="contact-small-card wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >


                <div>
                  <div>Haryana Branch</div>
                  <p className="mb-0">
                    Plot No- 916, Garhi Sarai, Road, Near New Subzi Mandi, Sonipat, Gohana, Haryana  <br />
                    131301
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Vakilkaro-Best+Online+Legal+Services+Providers+Company/@29.1330545,76.7155881,19z/data=!4m6!3m5!1s0x390df75b09b52575:0x769d94d589046f41!8m2!3d29.1330557!4d76.7162246!16s%2Fg%2F11r3ff73xw?entry=tts&g_ep=EgoyMDI1MTExMi4wIPu8ASoASAFQAw%3D%3D&skid=cefbc8e0-ff7a-4112-9b89-428a2099a814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-btn"
                  >
                    Get Directions
                  </a>


                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="divider"></div>
      </div>



      {/* Google Maps */}
      <div className="google-maps-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.713054701233!2d75.75285020333588!3d26.97598478262582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30392c8ae4b%3A0xac13f2c13ea153c4!2sVakilkaro!5e0!3m2!1sen!2sin!4v1764050033915!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Vakilkaro Location Map"
        ></iframe>
      </div>


      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Magnet Cursor */}
      <MagnetCursor />
    </div>
  );
}

export default ContactOne;
