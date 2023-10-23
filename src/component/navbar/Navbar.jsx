import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import Button from "../button/Button";


const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">services</a>
    </p>
    
  </>
)
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h1>LOGO</h1>
        </div>
      </div> 
      <div className="navbar-links_container">
          <Menu />
        </div>
      <div className="navbar-sign">
        <Button txt='sign in'/>
      </div>
      {/* menu for mobile  */}
      <div className="navbar-menu">
        {toggleMenu ? (
          <AiOutlineClose
            color="#000"
            size={27}
            onClick={() => settoggleMenu(false)}
          />
        ) : (
          <AiOutlineAlignRight
            color="#000"
            size={27}
            onClick={() => settoggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
            <Button txt='sign in'/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
