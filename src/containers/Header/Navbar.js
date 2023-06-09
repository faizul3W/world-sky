import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuHide, setIsMenuHide] = useState(false);
  console.log(isMenuHide);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <img className="navbar__logo--img" src={logoImg} alt="" />
        </div>
        <div className="navbar-navigation">
          <menu className={`${isMenuHide ? "active_menu" : "menu"}`}>
            <ul className="navigation__list">
              <li className="navigation__list--item nav-link nav-link-ltr">
                Home
              </li>
              <li className="navigation__list--item nav-link nav-link-ltr">
                About
              </li>
              <li className="navigation__list--item nav-link nav-link-ltr">
                last Minute Flight
              </li>
              <li className="navigation__list--item nav-link nav-link-ltr">
                Offers
              </li>
              <li className="navigation__list--item nav-link nav-link-ltr">
                Contact us
              </li>
            </ul>
          </menu>
          <div className="navbar__buttons--mobile">
            <GiHamburgerMenu onClick={() => setIsMenuHide(!isMenuHide)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
