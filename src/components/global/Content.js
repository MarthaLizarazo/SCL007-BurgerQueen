// Dependencias
import React, { Component } from 'react';
// Components
import ButtonDinner from'../global/ButtonDinner';
import OrderClient from'../global/OrderClient';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
            <OrderClient />
            <div className="btn-group-vertical">
            <p>
              <button className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={this.onClick}>DESAYUNO</button>
              <button className="btn btn-danger btn-lg mr-5 m-4 p-3" onClick={this.doClick}>ALMUERZO-CENA</button>
              <h4 className="float-right mr-5">**** TU PEDIDO ****</h4>
            <ButtonDinner />
            </p>
            </div>
        </div>
    );
  }
}

export default Content;
// <ButtonDinner /> Llamo a mis botones de Almuerzo-Cena

