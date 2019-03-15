import React, { Component } from 'react';

class OrderClient extends Component {
  getInitialState(){
    return{
      value:" ",
      state: "value"
    }
  };
  onClick(event){
   console.log(event.target.type)
  }
  onChange(event){
  this.setState({
  value: event.target.value
  })
  };
  render() {
    return (
      <div className="OrderClient ml-4">
         <label>Cliente :</label>
         <input type="text" />
         <button type="button" >Hacer Pedido</button>
        </div>
    );
  }
}
export default OrderClient;

