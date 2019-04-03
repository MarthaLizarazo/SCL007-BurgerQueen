import React, { Component } from 'react';
import {comida} from '../global/Menus.json';

class ButtonDinner extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
    this.state={
        comida,
        minuta:[]
    }
}

  handleClick=(e) => {
    e.preventDefault();
   // console.log(e.target.value); target : propiedades boton
    let list = e.target.value;
    this.state.minuta.push(list); // guardando el valor a mi minuta
   //console.log(this.state.minuta);
    this.props.handleClick(this.state.minuta); //enviando las propiedades de mi munuta al padre App
  }

  render() {
    return (
      <div className="ButtonDinner btn-group-vertical">
            <button className="btn btn-outline-secondary btn-lg" value="Hamburguesa Simple $1500" onClick={this.handleClick}>Hamburguesa Simple $1500</button>
            <button className="btn btn-outline-secondary btn-lg" value="Hamburguesa Doble $2500" onClick={this.handleClick}>Hamburguesa Doble $2500</button>
            <button className="btn btn-outline-secondary btn-lg" value="Papas Fritas $500" onClick={this.handleClick}>Papas Fritas $500</button>
            <button className="btn btn-outline-secondary btn-lg" value="Onion Rings $500" onClick={this.handleClick}>Onion Rings $500</button>
            <button className="btn btn-outline-secondary btn-lg" value="Agua Mineral 500ml $500" onClick={this.handleClick}>Agua Mineral 500ml $500</button>
            <button className="btn btn-outline-secondary btn-lg" value="Agua Mineral 750ml $850" onClick={this.handleClick}>Agua Mineral 750ml $850</button>
            <button className="btn btn-outline-secondary btn-lg" value="Gaseosa 500ml $700" onClick={this.handleClick}>Gaseosa 500ml $700</button>
            <button className="btn btn-outline-secondary btn-lg" value="Gaseosa 750ml $1000" onClick={this.handleClick}>Gaseosa 750ml $1000</button>
        </div>
    );
  }
}
export default ButtonDinner;

