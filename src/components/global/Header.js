import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';


class Header extends Component {

  clientRef = React.createRef(); // lee el valor del input cliente en react

  myClient = (event) => {
    event.preventDefault(); // evita la accion de enviar

    // Tomamos el valor del input
    const client = this.clientRef.current.value; // siempre que quiero leer un ref uso current.value
    
    // Lo enviamos al componente Padre (ppal)
    this.props.nomClient(client);
  }

  render() {
    return (
      <form onSubmit={this.myClient}>
        <div className="row Header">
           <div className="Logo">
              <img src={logo} alt="Logo" className="container form-group row-6 col-md-6"/> </div>
                <h3 className="font-weight-bold text-white container form-group row-col-md-6">BURGUER QUEEN</h3>
                  <div className="form-group col-md-6"> 
                    <input ref={this.clientRef} type="text"className="form-control" placeholder="Nombre del Cliente" />
                    <div className="row-col-md-6"> 
                       <input type="submit"className="btn btn-danger" value="Realizar Orden" />
                    </div> 
                  </div>
        </div>
      </form>
    );
  }
}
export default Header;

