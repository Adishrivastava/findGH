import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisV, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {
  icon?: any,
  title?: string
}

export const ListMenu: React.FC = () => {

  console.log('listed')

  return (<ul className="nav">
    <li className="list-element ml-3">
      <Link to="/">Home</Link>
    </li>
    <li className="list-element ml-3 mr-3">
      <Link to="/About">About</Link>
    </li>
  </ul>)
}

export const IconMenu: React.FC = () => (<Fragment>
  <FontAwesomeIcon icon={faEllipsisV} />
</Fragment>)

const Navbar: React.FC<Props> = ({ icon = faGithub, title = "FindInGH" }) => {

  const history = useHistory();

  const [width, setWidth] = useState<number>(0);
  // console.log(width)

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWidth]);



  return (
    <nav className="navbar navbar-main navbar-fixed-top nav-dark">
      <h3 className="m-0" onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {title}
      </h3>

      {width > 990 && (<ListMenu />)}

    </nav >
  );
};




export default Navbar;
