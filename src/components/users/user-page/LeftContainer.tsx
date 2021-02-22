import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import GithubContext from '../../../contexts/github/GithubContext'

interface Props {

}

const LeftContainer: React.FC<Props> = () => {

   const { user } = useContext(GithubContext)

   const { avatar_url, name, html_url, login, bio } = user

   return (
      <div className="col-lg-4 p-3 left-container" >
         <br />
         <img src={avatar_url} alt="user_image" />
         <br />
         <p className="txt1">{name} </p>
         <p className="txt2">{login}</p>
         <p className="bio">{bio}</p>
         <p>
            <a target="_blank" rel="noreferrer" href={html_url} className="more-btn">
               Visit {name} github <FontAwesomeIcon icon={faChevronRight} />
            </a>
         </p>
      </div>
   )
}

export default LeftContainer
