import React, { Component } from 'react';

class ButtonBreakfast extends Component {
  getInitialState(){
    return{
      value:""
    }
  }
  render() {
    return (
        <div className="ButtonBreakfast">
        <p>
            <button className="btn btn-outline-secondary btn-lg btn-group-vertical">Cafe Americano $500</button>
            <button className="btn btn-outline-secondary btn-lg btn-group-vertical">Cafe con Leche $700</button>
            <button className="btn btn-outline-secondary btn-lg ">Sandwich de jamón y ques $1000</button>
            <button className="btn btn-outline-secondary btn-lg ">Jugo natural $700</button>
        </p>
        </div>
    );
  }
}

export default ButtonBreakfast;

