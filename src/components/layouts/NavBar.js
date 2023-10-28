import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-white">
      <div className="container">
        <a href="/" className="navbar-brand fancy">
          Expense Tracker App
        </a>
        <div className="d-flex align-items-center gap-4">
          <div className="position-relative">
            <i className="fa fa-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </div>
          <div>
            <i className="fa fa-user-o"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
