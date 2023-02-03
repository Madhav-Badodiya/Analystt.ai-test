import React, { useState, useEffect } from 'react';
import  "./userDetails.scss";

const UserDetails = () => {
  const [showDetails, setShowDetails] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <section className="user-details">
      {users.map(user => (
        <div key={user.id} className="user-details__item">
          <div className="user-details__name"> <span className='name'>{user.company.name} </span></div>
          <div className="user-details__name"> <span className='name'> Contact</span>{user.name}  </div>
          <div className="user-details__name"> <span className='name'> City </span>{user.address.city}  </div>
          <button onClick={() => setShowDetails({ ...showDetails, [user.id]: !showDetails[user.id] })} className="user-details__button">
            {showDetails[user.id] ? 'Hide Details' : 'View details'}
          </button>
          {showDetails[user.id] && (
            <div className={`user-details__info ${showDetails[user.id] ? 'show' : ''}`}>
              <h4> <span>Contact Person</span>  : {user.name}</h4>
              <h4> <span>Designation</span>  : {user.company.bs} </h4>
              <h4> <span>Email</span>  : {user.email}</h4>
              <h4> <span>Phone</span>   : {user.phone} </h4>
              <h4> <span>Address</span>   : {user.address.street} {user.address.suite} </h4>
              <h4> <span>City</span>   : {user.address.city} </h4>
              <h4> <span>Website</span>   : {user.website} </h4>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default UserDetails;
