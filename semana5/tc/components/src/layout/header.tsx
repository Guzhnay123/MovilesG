import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home 1</Link></li>
        <li><Link to="/home2">Home 2</Link></li>

      </ul>
    </nav>
  );
};

export default Header;
