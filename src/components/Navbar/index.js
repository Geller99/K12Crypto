import React from "react";
// import Logo from "../../assets/svgs/k12logo.svg";
import Logo2 from "../../assets/Icons/logo-mobile.svg";
import arrow from "../../assets/svgs/arrow.svg";
import world from "../../assets/svgs/world.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={Logo2} className="logo" alt="k12-logo" />
          </div>
          <div className="navbar-section-list">
            <div className="navbar-list-item active-link active">Home</div>
            <Link to="learn">
              {" "}
              <div className="navbar-list-item">Quick Learn</div>{" "}
            </Link>
            <Link to="courses">
              <div className="navbar-list-item">Courses</div>
            </Link>
            <Link to="aboutk12">
              <div className="navbar-list-item">About</div>
            </Link>

            <div className="navbar-list-item bold-item">
              {" "}
              <span className="world-img">
                <img src={world} alt="" />
              </span>
              ENG{" "}
              <span className="arrow-img">
                <img src={arrow} alt="" />
              </span>
            </div>
          </div>
        </div>

        {/*   For Mobile devices  */}

        <div className="nav-bar-mobile">
          <div className="logo">
            <img src={Logo2} className="nav-logo" alt="k12-logo" />
          </div>
          <nav className="lp-nav-bar-mobile">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link to="/">
                  <div className="mobile-nav-list-item">Home</div>
                </Link>
                <Link to="learn">
                  <div className="mobile-nav-list-item">Quick Learn</div>
                </Link>
                <Link to="courses">
                  <div className="mobile-nav-list-item">Courses</div>
                </Link>
                <Link to="aboutk12">
                  <div className="mobile-nav-list-item">About</div>
                </Link>
                <div className="mobile-nav-list-item">ENG</div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
