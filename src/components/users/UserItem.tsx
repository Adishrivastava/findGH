import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";

interface userProp {
  login?: string,
  avatar_url?: string,
  html_url?: string
}

interface Props {
  user: userProp
}

const UserItem: React.FC<Props> = ({ user: { login, avatar_url, html_url } }) => {

  const history = useHistory();

  return (
    <div className="text-center cards" onClick={() => history.push(`user/${login}`)}>
      <img className="card-img-top" src={avatar_url} alt=""></img>
      <div className="card-body" onClick={() => { }}>
        <h4 className="card-title" style={{ fontWeight: 'bold' }}>{login}</h4>
        <p>Learn more <FontAwesomeIcon icon={faChevronRight} /></p>
        {/* <a target="_blank" rel="noreferrer" href={html_url} className="more-btn">
          {'Learn more '}<FontAwesomeIcon icon={faAngleDoubleRight} />
        </a> */}
      </div>
    </div>
  );
};

export default UserItem;
