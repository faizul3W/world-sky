import React from "react";
import Header from "../../containers/Header";
import BestCheapFlightDeals from "../../containers/BestCheapFlightDeals";
import DealsTicket from "../../containers/DealsTicket";
import ExploreTopDestination from "../../containers/ExploreTopDestination";
import SubscribeSection from "../../containers/SubscribeSection";
import Footer from "../../containers/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <BestCheapFlightDeals />
      <DealsTicket />
      <ExploreTopDestination />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Home;
