import React from "react";

const SubscribeSection = () => {
  return (
    <div className="subscribeSection">
      <div className="bbb-container">
        <div className="subscribe-container">
          <div className="subscribe-form">
            <input
              className="subscribe-form__input"
              type="email"
              placeholder="  Enter Your Email Address.."
            />
            <button className="subscribe-form__button">
              Subscribe <span>For Great Deals</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
