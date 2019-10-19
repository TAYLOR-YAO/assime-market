import React,{Component} from "react";
import { connect } from "react-redux";
import StipeCheckout from "./StripeCheckout";
// import ShipmentAddress from "../Grgions/ShipmentAddress";
import PaypalCheckout from "./PaypalCheckout/PaypalCheckout";
import "./Checkout.css";

let tax = 8.7;
let discountRate = 5;
let defaultSum = 0;
let cartSum = 0;
let shipping;
const defaultShipping = 0;

function percentage(tax, subTotal) {
  return (tax * subTotal) / 100;
}  

function discount(rate, total) {
    return (rate * total) / 100;
}  

class Trigger extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false,
        total: 0
      };
    }

    componentDidMount (){
      if(Array.isArray(this.props.cart) || this.props.cart.length){

          cartSum = this.props.cart.map(item=>{
              return item.price.$numberDecimal * item.quantity
          }).reduce((a, b) => a + b, 0).toFixed(2);

          shipping = this.props.cart.map(item=>{
            return parseFloat(item.shipping.$numberDecimal)
          }).reduce((a, b) => a + b, 0)

      } else {
          cartSum = defaultSum.toFixed(2)
          shipping = defaultShipping.toFixed(2)
      }
   
      const  discountAmount = discount(discountRate, cartSum).toFixed(2)
      const  taxAmount =  percentage(tax, cartSum).toFixed(2)
      const sum = (parseFloat(cartSum)  -  parseFloat(discountAmount)) + parseFloat(taxAmount) + parseFloat(shipping)
      this.setState({
        total : sum
      })
  
    }


    handleHide(event) {
      this.setState({ show: false });
    }
    render() {
      return (
        <div >
            
          <section class="methodes">
              <div class="one"><StipeCheckout/> </div>
              <div class="or"><h1>Or</h1></div>
              <div class="two"><PaypalCheckout/></div>
          </section>

          {/* <StipeCheckout/> 
          <PaypalCheckout/> */}

{/* Add Mobile payment later */}
  
        </div>
      );
    }
  }
function mapStateToProps(state){

    return{
        cart:state.cart
    }
  }
  function mapDispatchToProps(dispatch){
    return{
  
      getAllCarts:(item) =>{
            dispatch({type: "GET_All_CARTS", payload:item})
        },
        clearCarts:(item) =>{
            dispatch({type: "CLEAR_CARTS"})
        }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Trigger); 