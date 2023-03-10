import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

import "./style.css";
function Header() {
  return (
    <div id="header">
      <div className="header_box">
        <NavLink
          to={"/"}
          className="navlink userName"
          style={{ textDecoration: "none" }}
        >
          <div className="dp_box">
            <div className="img">
              <img
                height={"100%"}
                width={"100%"}
                src="https://www.svgrepo.com/show/403775/letter-m.svg"
                alt="userName"
              />
            </div>
          </div>

          <span className="userName ">Muhammed savad</span>
        </NavLink>
        <div className="other">
          <NavLink
            to={"/"}
            className="navlink sub "
            style={{ textDecoration: "none" }}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to={"about"}
            className="navlink sub "
            style={{ textDecoration: "none" }}
          >
            <span>About</span>
          </NavLink>
          <NavLink
            to={"service"}
            className="navlink  sub"
            style={{ textDecoration: "none" }}
          >
            <span>Service</span>
          </NavLink>
          <NavLink
            to={"portfolio"}
            className="navlink  sub"
            style={{ textDecoration: "none" }}
          >
            <span>Portfolio</span>
          </NavLink>
        </div>

        <div className="contact_btn">
          <button>contact</button>
        </div>
      </div>

      <div className="oulet_box">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
