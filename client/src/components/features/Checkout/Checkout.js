import React,{Component} from "react";
import { connect } from "react-redux";
import {Modal, Row, Col} from "react-bootstrap";
import StipeCheckout from "./StripeCheckout";
import ShipmentAddress from "../Grgions/ShipmentAddress";
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
        <div className="modal-container" >
            <div className="summary-checkout">
              <button className="checkout-cta" onClick={() => this.setState({ show: true })}>Go to Secure Checkout</button>
            </div>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Select your payment method!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <h3>Total: ${this.state.total.toFixed(2)}</h3>
                </Row>                
                <Row >
                    <Col md={3}>
                        <h6> Credit & debit</h6>
                        <hr/>
                        <br/>
                        <div style={{position:"relative", bottom:"15px"}}>
                          <StipeCheckout/>
                        </div>
                        
                    </Col>
                    <Col md={3} style={{borderLeft:"3px solid #333"}}>
                        <h6>Fooz</h6>
                        <hr/> 
                        <img className="payement-logo" src="http://anoumabo.ci/wp-content/uploads/2017/06/moov-1.png" alt="Flooz"/>                      
                    </Col> 
                    <Col md={3} style={{borderLeft:"3px solid #333"}}>
                        <h6>Tmoney</h6>
                        <hr/>  
                        <img className="payement-logo" src="https://lh3.googleusercontent.com/q3m20-lF305VIaIYR9q7PwpvWadez2P_fE1E3Dq3rV7pXlqwBik-Jq88lRnghLlJcA" alt="Tmoney" />                      
                    </Col>
                    <Col md={3} style={{borderLeft:"3px solid #333"}}>
                        <h6>MTN Money</h6>
                        <hr/>
                        <img className="payement-logo" src="https://www.paymentscardsandmobile.com/wp-content/uploads/2013/09/MTN-Mobile-Money.jpg" alt="Mtn money"/>                                                                      
                    </Col>                                                                                                  
                </Row> 
                <button className="btn-close" onClick={this.handleHide}  style={{float:"right"}} >Close</button>

                <Row>
                  <ShipmentAddress/>
                </Row>
            </Modal.Body>
          </Modal>
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