import React from "react";
import ExTD1 from "../../assets/ExTD1.png";
import BCFD2 from "../../assets/BCFD2.png";
import BCFD3 from "../../assets/BCFD3.png";
import BCFD4 from "../../assets/BCFD4.png";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const ExploreTopDestination = () => {
  const cardDatas = [
    {
      id: 1,
      img: ExTD1,
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
  ];

  return (
    <div className="exploreTopDestination">
      <div className="bbb-container">
        <div className="destination-container">
          <div className="destination__header">
            <h1 className="destination__header--title">
              Explore Top Destination
            </h1>
            <div className="destination__header--text">
              Lorem ipsum is a placeholder text commonly Lorem ipsum is a
              placeholder text commonly
            </div>
          </div>
          <div className="destination-card-container">
            {cardDatas?.map((data) => (
              <div key={data?.id} className="destination__card">
                <div className="destination__image">
                  <img
                    className="destination__image--img"
                    src={data?.img}
                    alt=""
                  />
                </div>
                <div className="destination__text">
                  <h4 className="destination__text--title">India -Canada</h4>
                  <div className="destination__text__bottom">
                    <div className="destination__text--amount">$125.00</div>
                    <button className="destination__text--button">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="destination__buttons">
            <div className="destination__buttons--previous">
              <AiOutlineLeft />
            </div>
            <div className="destination__buttons--next">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTopDestination;
