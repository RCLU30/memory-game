import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = (props) => (
  <header>
    <h2>Memory Game</h2>
    <nav>
      <li><a onClick={props.onNewGame} href="#blank" >New Game</a></li>
    </nav>
  </header>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired
};

export default Navbar;
