import React from "react";
import { Link } from "react-router-dom";

function WorkProcessSection() {
  return (
    <div>
      <section className="work-process-section bg-dark">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-5 col-xl-6">
              <div className="section-heading">
                <div className="sub-title text-white">
                  <img src="assets/img/core-img/hammer.png" alt="" />
                  Process
                </div>
                <h2 className="mb-5 text-white">
                  Our Streamlined Legal Process Tailored for Our Clients
                </h2>
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

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                {/* Work Process Card */}
                <div
                  className="process-card wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="number">1</div>
                  <div className="process-text">
                    <div className="process-title">Discovery call</div>
                    <p className="mb-0">
                      Etiam imperdiet imperdiet orci. Curabitur nisi. Discovery
                      call usually scheduled in advance to ensure that both the
                      potential client and our legal team can allocate
                      sufficient.
                    </p>
                  </div>
                </div>

                {/* Work Process Card */}
                <div
                  className="process-card wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="800ms"
                >
                  <div className="number">2</div>
                  <div className="process-text">
                    <div className="process-title">Case analysis</div>
                    <p className="mb-0">
                      Etiam imperdiet imperdiet orci. Curabitur nisi. Discovery
                      call usually scheduled in advance to ensure that both the
                      potential client and our legal team can allocate
                      sufficient.
                    </p>
                  </div>
                </div>

                {/* Work Process Card */}
                <div
                  className="process-card wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1000ms"
                >
                  <div className="number">3</div>
                  <div className="process-text">
                    <div className="process-title">Budgeting</div>
                    <p className="mb-0">
                      Etiam imperdiet imperdiet orci. Curabitur nisi. Discovery
                      call usually scheduled in advance to ensure that both the
                      potential client and our legal team can allocate
                      sufficient.
                    </p>
                  </div>
                </div>

                {/* Work Process Card */}
                <div
                  className="process-card wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <div className="number">4</div>
                  <div className="process-text">
                    <div className="process-title">Execution</div>
                    <p className="mb-0">
                      Etiam imperdiet imperdiet orci. Curabitur nisi. Discovery
                      call usually scheduled in advance to ensure that both the
                      potential client and our legal team can allocate
                      sufficient.
                    </p>
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

export default WorkProcessSection;
