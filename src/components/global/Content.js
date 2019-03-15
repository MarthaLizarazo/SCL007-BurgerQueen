// Dependencias
import React, { Component } from 'react';
// Components
import ButtonDinner from'../global/ButtonDinner';
import OrderClient from'../global/OrderClient';
import {desayunos, comida} from '../global/Menus.json';
import './css/Content.css';

class Content extends Component {
  constructor(props){
  super(props);
   this.state={
     value:'',
     desayunos,
     comida,
     drawDinner: false,
     drawBreakfast:false,
   };
   this.drawDinner=this.drawDinner.bind(this);
   this.drawBreakfast =this.drawBreakfast.bind(this);
  }
  drawDinner(){
    this.setState({
      drawDinner: !this.state.drawDinner
    })
  }
  drawBreakfast(){
    this.setState({
      drawBreakfast: !this.state.drawBreakfast
    })
  }
  render() {
    return (
      <div className="Content">
            <OrderClient />
              <button className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={this.drawDinner}>DESAYUNO</button>
              <button className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={this.drawBreakfast}>ALMUERZO-CENA</button>
              <h4 className="float-right mr-5">**** TU PEDIDO ****</h4>
        </div>
    );
  }
}

export default Content;
// <ButtonDinner /> Llamo a mis botones de Almuerzo-Cena

