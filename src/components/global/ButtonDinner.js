import React, { Component } from 'react';

class ButtonDinner extends Component {
  render() {
    return (
      <div className="ButtonDinner btn-group-vertical">
            <button className="btn btn-outline-secondary btn-lg ">Hamburguesa Simple $1500</button>
            <button className="btn btn-outline-secondary btn-lg ">Hamburguesa Doble $2500</button>
            <button className="btn btn-outline-secondary btn-lg ">Papas Fritas $500</button>
            <button className="btn btn-outline-secondary btn-lg ">Onion Rings $500</button>
            <button className="btn btn-outline-secondary btn-lg ">Agua Mineral 500ml $500</button>
            <button className="btn btn-outline-secondary btn-lg ">Agua Mineral 750ml $850</button>
            <button className="btn btn-outline-secondary btn-lg ">Gaseosa 500ml $700</button>
            <button className="btn btn-outline-secondary btn-lg ">Gaseosa 750ml $1000</button>
        </div>
    );
  }
}
export default ButtonDinner;

