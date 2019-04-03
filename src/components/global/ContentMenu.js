// Dependencias
import React, { Component } from 'react';
// Components
import {desayunos, comida} from '../global/Menus.json';
import './css/Content.css';


class ContentMenu extends Component {

// inincializa el estado

  constructor(props){
  super(props);
   this.state={
     visible : false
   }
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      visible:!this.state.visible
    })
  }
 
  render() {
    return (
      <div className="ContentMenu Content container form-group col-md-12">
        <li>
        <h3 className="btn btn-danger btn-lg mr-3 m-3 p-2" onClick={this.handleClick.bind(this)}>{this.props.name}</h3>
        <ul className={this.state.visible ? 'visible' : 'no-visible'}>
        {this.props.comida}
        </ul>
        </li>  
      </div>
    );
  }
}

export default ContentMenu;

// menu= {<ButtonDinner/>}
// this.props.comida

// Función que recorre el map
//  {comida.map(function(e){
//  return <MenuItem key={e} name={e.item}/>
//})}