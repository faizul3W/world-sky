import React from "react";
import BCFD1 from "../../assets/BCFD1.png";
import BCFD2 from "../../assets/BCFD2.png";
import BCFD3 from "../../assets/BCFD3.png";
import BCFD4 from "../../assets/BCFD4.png";
import BCFD5 from "../../assets/BCFD5.png";
import BCFD6 from "../../assets/BCFD6.png";
import BCFD7 from "../../assets/BCFD7.png";
import BCFD8 from "../../assets/BCFD8.png";

const BestCheapFlightDeals = () => {
  const cardDatas = [
    {
      id: 1,
      img: BCFD1,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 2,
      img: BCFD2,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 3,
      img: BCFD3,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 4,
      img: BCFD4,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 5,
      img: BCFD5,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 6,
      img: BCFD6,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 7,
      img: BCFD7,
      title: "India -Canada",
      amount: 125.0,
    },
    {
      id: 8,
      img: BCFD8,
      title: "India -Canada",
      amount: 125.0,
    },
  ];

  return (
    <div className="bestCheapFlightDeals">
      <div className="bbb-container">
        <div className="deals-container">
          <div className="deals__header">
            <h1 className="deals__header--title">Best Cheap Flight Deals</h1>
            <div className="deals__filter">
              <div className="deals__filter--item selected">All Deals</div>
              <div className="deals__filter--item">Canada</div>
              <div className="deals__filter--item">USA</div>
              <div className="deals__filter--item">Australia</div>
              <div className="deals__filter--item">Europe</div>
            </div>
          </div>
          <div className="deals-card-container">
            {cardDatas?.map((data) => (
              <div key={data?.id} className="deals__card">
                <div className="deals__image">
                  <img className="deals__image--img" src={data?.img} alt="" />
                </div>
                <div className="deals__text">
                  <h4 className="deals__text--title">India -Canada</h4>
                  <div className="deals__text__bottom">
                    <div className="deals__text--amount">$125.00</div>
                    <button className="deals__text--button">Book Now!</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCheapFlightDeals;
