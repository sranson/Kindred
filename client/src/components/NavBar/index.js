import React from "react";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../utils/auth";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Kindred
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/profile"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/search"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/matches"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Matches
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/settings"
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Settings
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  onClick={Auth.logout}
                  // activeStyle={{ fontWeight: "bold" }}
                >
                  Logout
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
