import React, { Component } from 'react';

class ButtonDinner extends Component {
  constructor(props) {
    super(props);
    this.state={value:' '};
    
    this.doClick = this.doClick.bind(this);
  }
 doClick(e){
   console.log(e);
 }
  render() {
    return (
      <div className="ButtonDinner btn-group-vertical">
          <p>
            <button className="btn btn-outline-secondary btn-lg mr-5 ml-4 p-3 row">Cafe Americano $500</button>
            <button className="btn btn-outline-secondary btn-lg mr-5 ml-4 p-3 row">Cafe con Leche $700</button>
            <button className="btn btn-outline-secondary btn-lg mr-5 ml-4 p-3 row">Sandwich de jamón y ques $1000</button>
            <button className="btn btn-outline-secondary btn-lg mr-5 ml-4 p-3 row">Jugo natural $700</button>
          </p>
        </div>
    );
  }
}
export default ButtonDinner;

