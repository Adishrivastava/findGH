import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../../contexts/github/GithubContext';
import LeftContainer from '../users/user-page/LeftContainer';
import RightContainer from '../users/user-page/RightContainer';

export interface Props {
}

interface propParam {
   login: string
}

const UserPage: React.FC<Props> = () => {

   const { user, getUser, getUserRepos } = useContext(GithubContext);
   const { login } = useParams<propParam>();

   const handleNonUser = () => {
      getUser(login)
      getUserRepos(login)
   }

   useEffect(() => {
      if (Object.keys(user).length === 0 || user.login !== login) {
         handleNonUser()
      }
   }, [user])


   return (
      <div className="container-fluid user-page-div" style={{ paddingTop: '100px' }}>
         <div className="container-fluid user-main-container">
            <div className="row ">

               <LeftContainer />
               <RightContainer />

            </div>
         </div>
      </div>
   );
}

export default UserPage