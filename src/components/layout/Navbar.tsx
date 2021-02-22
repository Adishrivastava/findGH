import React from "react";
import { Link } from "react-router-dom";

interface Props {
  icon?: string,
  title?: string
}

const Navbar: React.FC<Props> = ({ icon = "fa fa-github", title = "Github Finder" }) => {

  return (
    <nav className="navbar nav-light bg-primary p-2">
      <h3 className="m-0">
        <i
          className={icon}
          style={{
            position: "relative",
            top: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          aria-hidden="true"></i>
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


export default Navbar;
