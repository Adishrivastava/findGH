import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  icon?: any,
  title?: string
}

const Navbar: React.FC<Props> = ({ icon = faGithub, title = "Github Finder" }) => {

  return (
    <nav className="navbar navbar-main navbar-fixed-top nav-dark">
      <h3 className="m-0">
        <FontAwesomeIcon icon={icon} className="mr-2" />
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
    </nav >
  );
};


export default Navbar;
