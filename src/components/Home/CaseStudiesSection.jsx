import React from "react";

function CaseStudiesSection() {
  return (
    <div>
      <section className="case-study-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-heading text-center">
                <div className="sub-title justify-content-center">
                  <img src="assets/img/core-img/hammer.png" alt="" />
                  Case Studies
                </div>
                <h2>Explore Latest Case Studies</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {/* Case Study Card */}
            <div className="col-12 col-sm-6">
              <div className="case-study-card">
                <img src="assets/img/bg-img/5.jpg" alt="" />

                {/* Video Button */}
                <div
                  className="video-btn"
                  data-video="https://youtu.be/4GUFkrHvZdE"
                >
                  <i className="ti ti-player-play"></i>
                  <span className="video-sonar"></span>
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="col-12 col-sm-6">
              <div className="case-study-card">
                <img src="assets/img/bg-img/6.jpg" alt="" />

                {/* Video Button */}
                <div
                  className="video-btn"
                  data-video="https://youtu.be/4GUFkrHvZdE"
                >
                  <i className="ti ti-player-play"></i>
                  <span className="video-sonar"></span>
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="case-study-card">
                <img src="assets/img/bg-img/7.jpg" alt="" />

                {/* Video Button */}
                <div
                  className="video-btn"
                  data-video="https://youtu.be/4GUFkrHvZdE"
                >
                  <i className="ti ti-player-play"></i>
                  <span className="video-sonar"></span>
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="case-study-card">
                <img src="assets/img/bg-img/8.jpg" alt="" />

                {/* Video Button */}
                <div
                  className="video-btn"
                  data-video="https://youtu.be/4GUFkrHvZdE"
                >
                  <i className="ti ti-player-play"></i>
                  <span className="video-sonar"></span>
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="case-study-card">
                <img src="assets/img/bg-img/9.jpg" alt="" />

                {/* Video Button */}
                <div
                  className="video-btn"
                  data-video="https://youtu.be/4GUFkrHvZdE"
                >
                  <i className="ti ti-player-play"></i>
                  <span className="video-sonar"></span>
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

export default CaseStudiesSection;
