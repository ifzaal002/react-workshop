import React from 'react';
import './UserCard.css'


const UserCard = ({user, onViewRepoClick}) => {
  return (
      <div className="card user">
        <img src={user.avatar_url} alt="User Profile" width="100"/>
        <table className="info-table">
          <tbody>
          <tr>
            <td><strong>Login</strong></td>
            <td>{user.login}</td>
          </tr>
          <tr>
            <td><strong>URL</strong></td>
            <td><a href={user.html_url}>{user.login}</a></td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>{user.type}{user.site_admin && <strong> / Admin</strong>}</td>
          </tr>
          </tbody>
        </table>
        <button className="action-btn" onClick={() => {
          onViewRepoClick(user.repos_url)
        }}>View Repositories
        </button>
      </div>
  )
};

export default UserCard;
