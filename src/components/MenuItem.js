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
        <a className="btn btn-danger btn-lg mr-5 m-4 p-3 href='#'">{this.props.name}</a>
        </li>
       
      </div>
    );
  }
}

export default MenuItem;

