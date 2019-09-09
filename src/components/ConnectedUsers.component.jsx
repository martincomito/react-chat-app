import React from 'react';

const ConnectedUsers = ({ connectedUsers }) => (
  <div
    style={{
      border: '1px solid #ced4da',
      height: '91%',
      borderRadius: '5px',
    }}
    className='mt-5 ml-2'
  >
    <p className='mt-2 ml-3'>
      <strong>Connected users:</strong>
    </p>
    <ul className='mt-2 ml-2'>
      {connectedUsers.map(user => (
        <li
          style={{ listStyle: 'none', paddingInlineStart: '1rem' }}
          key={user.id}
        >
          {user.name}
        </li>
      ))}
    </ul>
  </div>
);

export default ConnectedUsers;
