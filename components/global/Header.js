import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">
         <div className="Logo">
         <img src={logo} alt="logo"/>
        </div>
        <h4>BURGUER QUEEN</h4>
      </div>
    );
  }
}
export default Header;

