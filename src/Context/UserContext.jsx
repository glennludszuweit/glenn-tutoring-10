import React, { createContext, useState } from 'react';

const initialState = [
  { id: 1, name: 'John Doe', age: 32, email: 'john@doe.com' },
  { id: 2, name: 'Jane Lim', age: 32, email: 'Jane@Lim.com' },
  { id: 3, name: 'Mary Land', age: 32, email: 'Mary@Land.com' },
];

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const add = (newUser) => {
    setUser([...user, newUser]);
  };

  const edit = (id) => {
    user.map((user) => user.id === id);
  };

  return (
    <UserContext.Provider value={{ user, setUser, add, edit }}>
      {children}
    </UserContext.Provider>
  );
};
