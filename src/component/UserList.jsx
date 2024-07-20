import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to create this CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const displayedUsers = users.slice(0, page * usersPerPage);

  return (
    <div className="user-container">
      <h1 className="user-title">User List</h1>
      <ul className="user-list">
        {displayedUsers.map(user => (
          <li key={user.id} className="user-item">
            {user.name}
          </li>
        ))}
      </ul>
      {users.length > displayedUsers.length && (
        <button className="load-more-btn" onClick={loadMore}>Load More</button>
      )}
      <div className="user-footer">
        <p>Total Users: {users.length}</p>
        <p>Page {page} of {Math.ceil(users.length / usersPerPage)}</p>
      </div>
    </div>
  );
};

export default UserList;