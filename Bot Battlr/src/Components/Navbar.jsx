
import React from 'react';
import './Navbar.css';

const Navbar = ({ showArmy, setShowArmy }) => {
  return (
    <nav className="navbar">
      <h1>Bot Battlr</h1>
      <div className="nav-links">
        <button onClick={() => setShowArmy(false)}>Home</button>
        <button onClick={() => setShowArmy(true)}>Your Bots</button>
      </div>
    </nav>
  );
};

export default Navbar;
