import React, { Component } from "react";
//stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="bagde badge-pill bagde-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
