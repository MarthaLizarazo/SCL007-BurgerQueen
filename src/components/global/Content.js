// Dependencias
import React, { Component } from 'react';
// Components
import ButtonDinner from'../global/ButtonDinner';
import {desayunos, comida} from '../global/Menus.json';
import './css/Content.css';
import ButtonBreakfast from '../global/ButtonBreakfast';

class Content extends Component {
  constructor(props){
  super(props);
   this.state={
     value:'',
     desayunos,
     comida,
   };
  }
  onClick1 = () => {
   // this.props.onClick(e);
    console.log("has presionado Desayuno")
  }
  render() {
    return (
      <div className="Content container form-group col-md-12">
        <button className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={(this.onClick1.bind(this))}>DESAYUNO</button>
        <button className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={this.onClick}>ALMUERZO-CENA</button>
      </div>
    );
  }
}

export default Content;
// <ButtonDinner /> Llamo a mis botones de Almuerzo-Cena

