import React from "react";
import "./header.scss";
import { NETFLIX_LOGO } from "../../constants/images";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img src={NETFLIX_LOGO} alt="Logo " className="header__container__logo" />
      </div>
    </div>
  );
};

export default Header;
