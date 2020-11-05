import React, { useContext, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { UserContext } from '../../Context/UserContext';

const Add = () => {
  const { add } = useContext(UserContext);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);

  const addUser = () => {
    const obj = {};
    obj.id = uuid();
    obj.name = nameRef.current.value;
    obj.age = ageRef.current.value;
    obj.email = emailRef.current.value;
    console.log(obj);
    add(obj);
  };

  return (
    <div>
      <input type='text' placeholder='name' ref={nameRef} />
      <input type='number' placeholder='age' ref={ageRef} />
      <input type='email' placeholder='email' ref={emailRef} />
      <button onClick={addUser}>Save</button>
    </div>
  );
};

export default Add;
