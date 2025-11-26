import React from "react";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <div>
      <section className="blog-section bg-white">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <div className="sub-title justify-content-center">
                  <img src="assets/img/core-img/hammer.png" alt="" />
                  Our Blog
                </div>
                <h2 className="mb-0">Latest News & Articles</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-5">
            {/* Blog Card */}
            <div className="col-12 col-md-6">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <img src="assets/img/bg-img/16.jpg" alt="" />
                <div className="blog-meta d-flex align-items-center gap-2">
                  <Link to="/">September 08, 2024</Link>
                  <div className="dot"></div>
                  <Link to="/">Family Law</Link>
                </div>
                <Link className="post-title" to="/BlogDetails">
                  A Guide to Practicing Law in Multiple States
                </Link>
              </div>
            </div>

            {/* Blog Card */}
            <div className="col-12 col-md-6">
              <div
                className="blog-card wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="800ms"
              >
                <img src="assets/img/bg-img/17.jpg" alt="" />
                <div className="blog-meta d-flex align-items-center gap-2">
                  <Link to="/">September 08, 2024</Link>
                  <div className="dot"></div>
                  <Link to="/">Family Law</Link>
                </div>
                <Link className="post-title" to="/BlogDetails">
                  A Guide to Practicing Law in Multiple States
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </section>
    </div>
  );
}

export default BlogSection;
