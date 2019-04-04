import React, { Component } from 'react';
import {desayunos} from '../global/Menus.json';
import ItemLista from '../global/ItemLista';

class ButtonBreakfast extends Component {
      constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
        this.state={
            desayunos,
            minuta:[]
        }
    }

    handleClick=(e) => {
      e.preventDefault();
     // console.log(e.target.value); //target : propiedades boton
      let list = e.target.value;
      this.state.minuta.push(list); // guardando el valor en mi minuta
     //console.log(this.state.minuta);
      this.props.handleClick(this.state.minuta); //enviando las propiedades de mi munuta al padre App
    }

  render(){

    return (
        <div className="ButtonBreakfast btn-group-vertical">
          <button className="btn btn-outline-secondary btn-lg"value="Cafe Americano $500" onClick={this.handleClick}>Cafe Americano $500</button>
          <button className="btn btn-outline-secondary btn-lg"value="Cafe con Leche $700" onClick={this.handleClick}>Cafe con Leche $700</button>
          <button className="btn btn-outline-secondary btn-lg"value="Sandwich de Jamón y Queso $1000" onClick={this.handleClick}>Sandwich de jamón y queso $1000</button>
          <button className="btn btn-outline-secondary btn-lg"value="Jugo Natural $700" onClick={this.handleClick}>Jugo natural $700</button>
          <ul>  
            
          </ul>
          </div>
      
    );
  }
}

export default ButtonBreakfast;



// {this.props.item}
//  onClick={this._add.bind(this)}
//{this.state.desayunos.map(
//  (item,index) =>
//    <ItemLista desayunos={item} key={index} onRemove={ () => this._remove(index)} />
//  )
//  }