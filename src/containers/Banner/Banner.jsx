import React from "react";
import "./Banner.css";
import banner from "./../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner__img">
      <img src={banner} alt="banner" />
      <div className="banner__blur">
        <div className="banner__blur-text">
          It's time to invest in your future now
        </div>
      </div>
    </div>
  );
};

export default Banner;
