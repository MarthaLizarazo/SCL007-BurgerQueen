import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';


class Header extends Component {

  clientRef = React.createRef(); // lee el valor del input cliente en react

  myClient = (e) => {
    e.preventDefault(); // evita la accion de enviar

    // Tomamos el valor del input
    const termino = this.clientRef.current.value; // siempre que quiero leer un ref uso current.value
    
    // Lo enviamos al componente Padre (ppal)
    this.props.nomClient(termino);
  }

  render() {
    return (
      <form onSubmit={this.myClient}>
        <div className="row Header">
           <div className="Logo">
              <img src={logo} alt="Logo" className="form-group col-md-4"/>
                <h3 className="font-weight-bold text-white form-group col-md-8">BURGUER QUEEN</h3>
                  <div className="form-group col-md-8"> 
                    <input ref={this.clientRef} type="text"className="form-control" placeholder="Nombre del Cliente" />
                  </div>
                  <div className="form-group col-md-4"> 
                    <input type="submit"className="btn btn-danger btn-block" value="Realizar Orden" />
                  </div> 
            </div>
        </div>
      </form>
    );
  }
}
export default Header;

