import React from 'react';
import logo from '../../assets/react.svg';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo React" />
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="quem-somos">Quem Somos</Link>
        <Link to="contatos">Contatos</Link>
      </nav>
    </header>
  );
};

export default Header;
