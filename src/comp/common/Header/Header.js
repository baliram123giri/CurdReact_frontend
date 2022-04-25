import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar pink_light navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          CURD-<span className="text-warning">OPRATION</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/adduser">
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
