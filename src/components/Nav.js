import React from 'react';
import '../styles/Nav.css';

function Nav({ handleCurrentPage, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-title">Odin Memory Card</div>
    </nav>
  );
}

export default Nav;