import React, { Component } from 'react';

class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            order:[]
        }
    }
    render(){
        let variable= '+++' + this.props.order + '+++';
        console.log(variable);
        return(
    <div>
        {variable}

        
    </div>
    
    );

}
}
export default Order;
