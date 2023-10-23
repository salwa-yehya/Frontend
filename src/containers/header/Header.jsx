import React from "react";
import Button from "../../component/button/Button";
import "./header.css";
const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header__content section__margin">
        <h1>Get help. Gain happiness.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        </p>
        <div className="header__button">
        <Button txt="Get Help Today" />
        </div>
      </div>
    </div>
  );
};

export default Header;
