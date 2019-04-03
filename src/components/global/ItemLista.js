import React, { Component } from 'react';
import { desayunos } from './Menus.json';

class ItemLista extends Component{
    constructor(){
        super();
        this.state={
            desayunos
        }
    }
    _remove(){
        if(this.props.onRemove)
            this.props.onRemove();
    }
    render() {
        return (
        <li>
            <div className="name">
                <span className="item-name">{this.props.desayunos.item}</span>
                <span className="item-price">{this.props.desayunos.precio}</span>
                <button className="remove" onClick={this._remove.bind(this)}>
                <i  type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span>close</i>
            </button>
            </div>
        </li>  
            
        );
    }

}

 export default ItemLista;       