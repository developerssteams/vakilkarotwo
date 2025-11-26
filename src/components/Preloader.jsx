import React from "react";

function Preloader() {
  return (
    <div>
      <div className="preloader" id="preloader">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
