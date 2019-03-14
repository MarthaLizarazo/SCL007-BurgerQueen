import React, { Component } from 'react';

class OrderClient extends Component {
  render() {
    return (
      <div className="OrderClient ml-4">
          <label>Cliente :</label>
          <input type=" text" />
         <input type="submit" value="Ordenar Comida"/>
        </div>
    );
  }
}
export default OrderClient;

