import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import RepoItem from './RepoItem';

export interface Props {
   searchText?: string
}

const Repos: React.FC<Props> = ({ searchText }) => {

   const { repos, getUserRepos } = useContext(GithubContext);

   const [searchedRepos, setSearchRepos] = useState(repos)

   // // if repo is empty
   // const handleNoRepos = async () => {
   //    await getUserRepos('ujjwalnahar');
   // }

   // seaarching by full_name and language
   const handleSearch = () => {
      const searchedRepos = repos.filter((repo: any) => ((repo.full_name.toLowerCase().search(searchText?.toLowerCase()) > -1) || (repo?.language?.toLowerCase().search(searchText?.toLowerCase()) > -1)))

      setSearchRepos([...searchedRepos])
   }

   useEffect(() => {
      if (repos.length === 0) {
         // handleNoRepos();
      }
      console.log(repos)
      setSearchRepos([...repos])


      if (repos.length === 0 && searchText) {
         handleSearch();
      }

   }, [repos, searchText])


   return (
      <div className="container p-5 repo-grid">
         {searchedRepos && searchedRepos.map((repo: any, index: number) => <RepoItem key={repo.id} index={index} repo={repo} />)}
      </div>

   );
}

export default Repos