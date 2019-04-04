import React, { Component } from 'react';

class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            order:[]
        }
    }
    render(){
        let pedido= this.props.order;
        console.log(pedido);
        return(
    <div>
        {pedido}
    </div>
    
    );

}
}
export default Order;
