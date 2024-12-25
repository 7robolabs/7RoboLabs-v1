import React, { useState } from "react";
import "./NavItem.styles.scss";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "./constants";

const NavItem = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="mainContainer">
      <div className="logoContainer">
        <img
          className="logoImage"
          src="./images/logo.png"
          alt="robotic-7-logo"
        />
      </div>
      <div className="menuIconContainer" onClick={toggleOverlay}>
        <div className="menuIcon">☰</div>
      </div>
      <div className="navItemsContainer">
        {NAV_ITEMS.map((item, index) => (
          <Link
            className="navItemLink"
            to={item.pathName}
            key={`${item.label}-${index}`}
          >
            <div className="navItem">{item.label}</div>
          </Link>
        ))}
      </div>
      {isOverlayOpen && (
        <div className="overlay">
          <div className="overlayHeader">
            <button className="closeButton" onClick={toggleOverlay}>
              ×
            </button>
          </div>
          <div className="overlayNavItems">
            {NAV_ITEMS.map((item, index) => (
              <Link
                className="overlayNavItemLink"
                to={item.pathName}
                key={`${item.label}-overlay-${index}`}
                onClick={toggleOverlay}
              >
                <div className="overlayNavItem">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
