import React from "react";
import Trustpilot from "../../assets/Trustpilot.png";
import IataLogo from "../../assets/iataLogo.png";
import BannerBg from "../../assets/bannerBg.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="bbb-container">
        <div className="banner-container">
          <div className="banner-text">
            <div className="banner-text__heading">
              <h1 className="banner-text__heading--title">
                Life is short & <br />
                The world is wide!
              </h1>
            </div>
            <div className="banner-text__logos">
              <img
                className="banner-text__logos--trustpilot"
                src={Trustpilot}
                alt=""
              />
              <img className="banner-text__logos--iata" src={IataLogo} alt="" />
            </div>
          </div>
          <div className="banner__image">
            <img className="banner__image--img" src={BannerBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
