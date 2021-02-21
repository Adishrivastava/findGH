import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar nav-light bg-primary p-2">
      <h3 className="m-0">
        <i className={icon} style={iStyle} aria-hidden="true"></i>
        {title}
      </h3>

      <ul className="nav">
        <li className="list-element ml-3">
          <Link to="/">Home</Link>
        </li>
        <li className="list-element ml-3 mr-3">
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const iStyle = {
  position: "relative",
  top: "4px",
  paddingLeft: "10px",
  paddingRight: "10px",
};

export default Navbar;
