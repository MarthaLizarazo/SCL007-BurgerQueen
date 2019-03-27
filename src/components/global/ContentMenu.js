// Dependencias
import React, { Component } from 'react';
// Components
import MenuItem from '../global/MenuItem.js';
import {desayunos, comida} from '../global/Menus.json';
import './css/Content.css';

class ContentMenu extends Component {

// inincializa el estado
  constructor(props){
  super(props);
   this.state = {
     visible : false,
     value:'',
     desayunos,
     comida,
   };
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      visible:!this.state.visible
    })
  }

  render() {
    return (
      <div className="Content container form-group col-md-12">
        <li>
        <h3 className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={this.handleClick.bind(this)}>{this.props.name}</h3>
        <ul className={this.state.visible ? 'visible' : 'no-visible'}>
        {this.props.items.map=(item) => { 
          return <MenuItem name={item} key={item} />
        }}
        </ul>
        </li>  
      </div>
    );
  }
}

export default ContentMenu;
//{this.props.items.map((item) => { 

