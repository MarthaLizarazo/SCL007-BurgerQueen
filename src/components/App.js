// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import ContentMenu from './global/ContentMenu';
import Footer from './global/Footer';
import ButtonDinner from './global/ButtonDinner';
import ButtonBreakfast from './global/ButtonBreakfast';
import {desayunos, comida} from './global/Menus.json';
import Order from './global/Order';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
        desayunos,
        comida,
        order:[]
    }
}
  
  state = {
    client :[]
  }

nomClient = (client) => {
  this.setState({
    client
  })
  console.log(client);
}
  handleClick=(data)=>{
    console.log(data);
    this.state.order.push(data)
    this.setState({
      order: data
    });
    console.log(this.state.order);

  }
  render() {
    return (
        <div className="app container Header">
          <div className="jumbotrom text-white">
           <Header nomClient = {this.nomClient} /> 
              <h3>Cliente: {this.state.termino} SU PEDIDO ES</h3>
          </div>
          <div className="Content">
            <ul>
              <ContentMenu name="DESAYUNOS" comida={<ButtonBreakfast handleClick={this.handleClick}/>} />
              <ContentMenu name="ALMUERZOS-CENA" comida={<ButtonDinner handleClick={this.handleClick}/>} />
            </ul>
          </div>
            <Order order={this.state.order} />  
          <div className="Footer">
            <Footer />
          </div>
        </div>
    );
  }
}
export default App;
