import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navBar-container">
          <Link to="/" className="navBar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
