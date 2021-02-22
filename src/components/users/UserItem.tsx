import React from "react";
import PropTypes from "prop-types";

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
    <div className=" text-center">
      <img className="card-img-top" src={avatar_url} alt=""></img>
      <div className="card-body">
        <h4 className="card-title">{login}</h4>
        <a href={html_url} className="btn btn-sm btn-info">
          more
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;