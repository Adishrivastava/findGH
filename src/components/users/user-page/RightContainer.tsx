import { faCheck, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import GithubContext from '../../../contexts/github/GithubContext';
import Repos from '../Repos';

interface Props {

}

const RightContainer: React.FC<Props> = () => {

   const { user, repos } = useContext(GithubContext);
   const { following, followers, hireable } = user;

   const [repoSearch, setRepoSearch] = useState<string>('')

   return (
      <div className="col-lg-8 right-container">
         <div className="row top-grid">
            <div className="col-3">
               <p className="top-grid-head">Followers</p>
               <p className="top-grid-text">{followers} 🐱‍🏍</p>
            </div>
            <div className="col-3">
               <p className="top-grid-head">Following</p>
               <p className="top-grid-text">{following} 🚀 </p>
            </div>
            <div className="col-3">
               <p className="top-grid-head">Total repos</p>
               <p className="top-grid-text">{repos.length} 😎</p></div>
            <div className="col-3">
               <p className="top-grid-head">Hireable</p>
               <p className="top-grid-text">{hireable ? (<FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} />) : (<FontAwesomeIcon style={{ color: 'rgb(159, 18, 60)' }} icon={faTimes} />)}</p></div>
         </div>


         <h1 className="repo-line text-center">
            Repositories 🚀
         </h1>
         <form className="repo-form" onSubmit={(evt: any) => { evt.preventDefault(); console.log(`repo search ${repoSearch}`); }}>
            <input type="text" placeholder="Search by Repository or language" className="repo-input" value={repoSearch} onChange={(evt) => setRepoSearch(evt.target.value)} />
            {/* <button type="submit" className="btn btn-submit form-control repo-sbt"><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} /></button> */}
         </form>

         <Repos searchText={repoSearch} />

      </div>
   )
}

export default RightContainer
