// Dependencias
import React, { Component } from 'react';

// Components
import {desayunos, comida} from '../global/Menus.json';
import './css/Content.css';

// cada li tiene un enlace
class MenuItem extends Component {

  render() {
    return (
      <div className="Content container form-group col-md-12">
        <li> 
        <div><a href="/" className="btn btn-danger btn-lg mr-5 m-4 p-3">{this.props.name}</a></div>
        </li>
       
      </div>
    );
  }
}

export default MenuItem

