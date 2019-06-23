import React, {Component} from "react";
import Cart from "../../../features/CartPage/Cart";

class CartPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        cartTotal:this.props.sum,
        username:""
      }
    }

    render(){
  
        return (  
        <div style={{width: '90%', margin: 'auto', marginTop:"100px"}}>
            <Cart/>
        </div>) 
    }
}


export default CartPage;

