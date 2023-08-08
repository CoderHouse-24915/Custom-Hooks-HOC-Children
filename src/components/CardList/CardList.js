// import React, { useState, useEffect } from 'react';

// import axios from 'axios';

import CardComponent from '../CardComponent/CardComponent';
import Spinner from '../Spinner/Spinner';

// CUSTOM HOOK
import useFetch from '../../hooks/useFetch';

const CardList = () => {
  // const [users, setUsers] = useState([]);
  const url = 'https://api.github.com/users';
  const { data, loading } = useFetch(url);

  // useEffect(() => {
  //   axios('https://api.github.com/users').then((json) => setUsers(json.data));
  // }, []);

  if (loading) return <Spinner />;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyContent: 'center',
        gap: 15,
        margin: 20,
      }}
    >
      {/*       {users.map((user) => (
        <CardComponent key={user.id} data={user} />
      ))}
    */}

      {data &&
        data.map((user) => {
          return (
            <div key={user.id}>
              <CardComponent data={user} />
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
