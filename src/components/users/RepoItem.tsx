import { faCheck, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';

interface repoProp {
   html_url: string,
   description: string,
   forks: number,
   fork: Boolean,
   name: string,
   full_name: string,
   language: string | null
}

export interface Props {
   repo: repoProp;
   index: number
}

const RepoItem: React.FC<Props> = ({ repo, index }) => {

   const { full_name, name, description, html_url, forks, fork, language } = repo;

   return (
      <Fragment>
         <div className="repo-container pt-3 pl-3 pr-3">
            <h5 className="d-flex justify-content-between">
               {index + 1} . {name}
               <small className="name_links">
                  <a target="_blank" rel="noreferrer" href={html_url}>{full_name}</a>
                  <FontAwesomeIcon style={{ color: 'rgb(86, 88, 108)', marginLeft: '10px', fontSize: '1em', paddingTop: '1px' }} icon={faChevronRight} />
               </small>

            </h5>
            {description && (<p className="pt-3">{description}</p>)}
            <p className="mt-3">
               <small className="mr-3">fork
               <span className="repo-bottom-list">
                     <FontAwesomeIcon className="icons_repo" style={fork ? ({ color: 'green' }) : ({ color: 'rgb(159, 18, 60)' })} icon={fork ? faCheck : faTimes} />
                  </span>
               </small>
               <small className="mr-3">forks
               <span className="repo-bottom-list">{forks}</span></small>
               {language && (<small>language

                  <span className="repo-bottom-list">
                     {language}
                  </span>
               </small>)}
            </p>
         </div>
         <br />
      </Fragment>


   );
}

export default RepoItem