import React from 'react';
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";


const Results = ({type, results, onViewRepoClick, query}) => {
  return (
      <div className="result-list">
        {
          results.map((item) => {
            return type === 'USERS' ? <UserCard user={item} onViewRepoClick={onViewRepoClick} key={item.id}/> :
                <RepoCard repo={item} key={item.id}/>
          })
        }
      </div>
  )
};

export default Results;
