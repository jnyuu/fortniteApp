import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark " id="mainNav">
        <div className="container">
          <Link to="/fortniteApp" className="navbar-brand js-scroll-trigger">
            Main
          </Link>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/fortniteApp/about"
                  className="nav-link js-scroll-trigger"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/fortniteApp/shop"
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
}
