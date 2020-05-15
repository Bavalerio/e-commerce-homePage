import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const useEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`,
      );
      const resJson = await response.json();
      setUser(resJson[0]);
    };
    fetchFunc();
  }, [serchQuery]);

  return (
    <Card>
      <input
        type="search"
        value={serchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <p>No user Found</p>
      )}
    </Card>
  );
};

export default useEffectExample;
