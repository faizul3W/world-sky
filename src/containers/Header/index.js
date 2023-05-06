import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import FilterSection from "./FilterSection";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Banner />
      <FilterSection />
    </div>
  );
};

export default Header;
