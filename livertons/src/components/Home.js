import React from "react";
import Bg1 from "../assets/img/surface-unsplash.jpg";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={Bg1} className="card-img" alt=" Background" />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS{" "}
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
