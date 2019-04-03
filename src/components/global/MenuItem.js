// Dependencias
import React, { Component } from 'react';

// Components
import './css/Content.css';

// cada li tiene un enlace
class MenuItem extends Component {

  render() {
    return (
      <div className="Content container form-group col-md-12">
        <li> 
        <a href='/'>{this.props.name}</a>
        </li>
       
      </div>
    );
  }
}

export default MenuItem;

