import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';
// Imagen
import img from '../Header/github-logo.png';

const Header = ({ title, children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://api.github.com/users').then((json) => setUsers(json.data));
  }, []);

  return (
    <div className='Header'>
      <h1>{title}</h1>
      <img src={img} alt='Logo Github' width='200px' />
      <p>Total Users: {users.length} </p>
      {children}
    </div>
  );
};

Header.defaultProps = {
  title: 'Github App',
};

export default Header;
