import React from 'react';
import '../css/Header.css'

const Header = ({title}) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;