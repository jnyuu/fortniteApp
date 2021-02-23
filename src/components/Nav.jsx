import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark " id="mainNav">
      <div className="container">
        <Link to="/" className="navbar-brand js-scroll-trigger">
          Main
        </Link>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link js-scroll-trigger"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shop"
                className="nav-link js-scroll-trigger"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav
