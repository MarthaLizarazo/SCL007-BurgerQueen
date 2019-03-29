// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import ContentMenu from './global/ContentMenu';
import Footer from './global/Footer';
import MenuItem from './global/MenuItem';
import ButtonDinner from '../components/global/ButtonDinner';
import ButtonBreakfast from '../components/global/ButtonBreakfast';


class App extends Component {
  
  state = {
    termino : ' '
  }

nomClient = (termino) => {
  this.setState({
    termino
  })
  // console.log(termino);
}

  render() {
    return (
        <div className="app container">
          <div className="jumbotrom">
           <Header
            nomClient = {this.nomClient} /> 
            {this.state.termino}
            </div>
            <ul>
            <ContentMenu name="DESAYUNOS" comida={<ButtonBreakfast/>} />
            <ContentMenu name="ALMUERZOS-CENA" comida={<ButtonDinner/>} />
            </ul>
            <Footer />
          </div>
    );
  }
}
export default App;
