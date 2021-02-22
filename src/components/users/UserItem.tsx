import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface userProp {
  login?: string,
  avatar_url?: string,
  html_url?: string
}

interface Props {
  user: userProp
}

const UserItem: React.FC<Props> = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="text-center cards">
      <img className="card-img-top" src={avatar_url} alt=""></img>
      <div className="card-body">
        <h4 className="card-title">{login}</h4>
        <a target="_blank" rel="noreferrer" href={html_url} className="more-btn">
          {'Learn more '}<FontAwesomeIcon icon={faAngleDoubleRight} />
        </a>
      </div>
    </div>
  );
};

export default UserItem;
