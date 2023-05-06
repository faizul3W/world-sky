import React from "react";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <div className="bbb-container">
        <div className="filter-container">
          <div className="filter-wrapper">
            <div className="filter-top">
              <div className="top__left">
                <div className="top__left--item">
                  <span></span>
                  <p>One way</p>
                </div>
                <div className="top__left--item">
                  <span></span>
                  <p>Round Trip</p>
                </div>
                <div className="top__left--item">
                  <span></span>
                  <p>Multiplicit</p>
                </div>
              </div>
              <div className="top__right">
                <p className="top__right__text">
                  Looking for Tour package{" "}
                  <span className="top__right__text--yellow">Explore here</span>{" "}
                </p>
              </div>
            </div>
            <div className="filter-input">
              <input
                className="filter-input__filed"
                type="text"
                placeholder="One way"
              />
            </div>
            <div className="filter-bottom">
              <div className="bottom__left"></div>
              <div className="bottom__right">
                <div className="bottom__right--item">
                  <span></span>
                  <p>My Booking</p>
                </div>
                <div className="bottom__right--item">
                  <span></span>
                  <p>Flight Status</p>
                </div>
                <div className="bottom__right--item">
                  <span></span>
                  <p>Upcoming Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
