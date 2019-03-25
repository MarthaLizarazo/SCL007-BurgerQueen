// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import Content from './global/Content';
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
            nomClient = {this.nomClient}          
          />
           {this.state.termino}
            <Content />
            <Footer />
          </div>
      </div>
    );
  }
}
export default App;
