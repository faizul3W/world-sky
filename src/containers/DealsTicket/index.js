import React from "react";
import DealsBg from "../../assets/DealsBg.png";

const DealsTicket = () => {
  return (
    <div className="dealsTicket">
      <div className="bbb-container">
        <div className="dealsTicket-container">
          <div className="dealsTicket__left">
            <h3 className="dealsTicket__title">Best Cheap Flight Deals</h3>
            <h1 className="dealsTicket__price">
              Start at <span className="dealsTicket__price--red">₹4999.00</span>
            </h1>
          </div>
          <div className="dealsTicket__right">
            <img className="dealsTicket__right--img" src={DealsBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsTicket;
