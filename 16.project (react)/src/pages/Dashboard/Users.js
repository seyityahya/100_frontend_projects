import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className='user'>
      <h2>Kullanıcılar</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`} state={user} className='link'>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users