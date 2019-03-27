// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import ContentMenu from './global/ContentMenu';
import Footer from './global/Footer';

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
            <ul>
            <ContentMenu name="DESAYUNOS" items = {['Cafe Americano $500','Cafe con Leche $700',
            'Sandwich de jamón y queso $1000','Jugo natural $700']}/>
            <ContentMenu name="ALMUERZOS-CENA"/>
            </ul>
            <Footer />
          </div>
        </div>
    );
  }
}
export default App;
