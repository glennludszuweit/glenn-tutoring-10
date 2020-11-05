import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

const List = () => {
  const { user } = useContext(UserContext);

  return (
    <ul>
      {user.map((el, index) => {
        return <li key={index}>{el.name}</li>;
      })}
    </ul>
  );
};

export default List;
