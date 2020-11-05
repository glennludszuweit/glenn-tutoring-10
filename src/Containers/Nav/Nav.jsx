import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <div className='nav-bar'>
      <div className='logo'>Brand</div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/list'>Users</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/add'>Add</Link>
      </div>
    </div>
  );
};

export default Nav;
