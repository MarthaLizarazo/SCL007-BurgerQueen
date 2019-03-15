import React, { Component } from 'react';

class ButtonDinner extends Component {
  render() {
    return (
      <div className="ButtonDinner btn-group-vertical">
            <button className="btn btn-outline-secondary btn-lg ">Cafe Americano $500</button>
            <button className="btn btn-outline-secondary btn-lg ">Cafe con Leche $700</button>
            <button className="btn btn-outline-secondary btn-lg ">Sandwich de jamón y queso $1000</button>
            <button className="btn btn-outline-secondary btn-lg ">Jugo natural $700</button>
        </div>
    );
  }
}
export default ButtonDinner;

