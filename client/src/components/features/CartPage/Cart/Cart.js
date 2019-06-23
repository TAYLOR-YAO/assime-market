
import React from "react";
import {connect} from "react-redux";
import Checkout from "../../Checkout";
import "./Cart.css";
const tax = 8.7;
const discountRate = 5;
const defaultSum = 0;
let cartSum; 
let shipping;
const defaultShipping = 0;
function percentage(tax, subTotal) {
  return (tax * subTotal) / 100;
}  

function discount(rate, total) {
    return (rate * total) / 100;
}

function sortItemInCart(item){
    return item.sort((a, b)=> a._id < b._id)
}

function Cart(props){

    if(Array.isArray(props.cart) || props.cart.length){
        // ------Cart Sum ---------- 
        cartSum = props.cart.map(item=>{
            return item.price.$numberDecimal * item.quantity
        }).reduce((a, b) => a + b, 0).toFixed(2);
        // ------Shippping---------- 
        shipping = props.cart.map(item=>{
            return parseFloat(item.shipping.$numberDecimal)
        }).reduce((a, b) => a + b, 0)
    } else {
        cartSum = defaultSum.toFixed(2)
        shipping = defaultShipping.toFixed(2)
    }
    
    const  discountAmount = discount(discountRate, cartSum).toFixed(2)
   
    const  taxAmount =  percentage(tax, cartSum).toFixed(2)
    const total = (parseFloat(cartSum)  -  parseFloat(discountAmount)) + parseFloat(taxAmount) + parseFloat(shipping)

    return <main>
            { props.cart.length > 0 ?
                <div className="basket">

                    <div className="basket-module">
                        <label htmlFor="promo-code">Enter a promotional code</label>
                        <input id="promo-code" type="text" name="promo-code" maxLength="5" className="promo-code-field"/>
                        <button className="promo-code-cta">Apply</button>
                        <a className="cartLink" href="/home">Continue Shopping</a>

                    </div>

                    {
                        sortItemInCart(props.cart).map(item=><div key={item._id}>
                            <div className="basket-labels">
                                <ul>
                                <li className="item item-heading">Item</li>
                                <li className="price">Price</li>
                                <li className="quantity">Quantity</li>
                                <li className="subtotal">Subtotal</li>

                                </ul>
                            </div>
                            <div className="basket-product">
                                <div className="item">
                                <div className="product-image">
                                    <img src={item.image} alt={item.name} className="product-frame"/>
                                </div>
                                <div className="product-details">
                                <strong style={{fontSize:"18px"}}>{item.name}</strong>
                                    <p><strong>{ item.color ? `Color: ${item.color}`: "" }</strong></p>
                                    <hr/>
                                    {item.size ? 
                                         <div id="sizeTypes">
                                         <strong>Slect Size:</strong>
                                             {item.size.map(size=>
                                             <div className="sizes" key={size.repeat(2)} >
                                                 < div className="size"  > <button style={{borderRadius:"50%"}} value={size} onClick={(event)=> {item.size = [event.target.value]}}>{size}</button></div>
                                            </div> 

                                             )}
                                     </div>
                                      : " "}

                                    <br/>
                                    <br/>
                                    <hr/>
                                    <p>{item.details}</p>

                                </div>
                                </div>
                                <div className="price"> <span className="mobileTitles">Price: </span>{`$${item.price.$numberDecimal}`}</div>
                                <div className="quantity"> <span className="mobileTitles">Qty: </span>{item.quantity}</div>
                                <div className="subtotal"><span className="mobileTitles">subtotal: </span>{`$${(item.price.$numberDecimal * item.quantity).toFixed(2)}`}</div>
                                
                                <div className="remove">
                                    <button variant="success" onClick = {()=> props.addToCart(item)}>+</button>
                                    <button variant="danger" onClick = {()=> props.removeFromCart(item)}  >-</button>
                                    <button variant="denger" onClick = {()=> props.removeAllFromCart(item)} style={{width:"70px", padding:"5px", background:"#6351ce", color:"#fff"}}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            :   <div>
                    <h1 style={{fontSize:"24px", textAlign:"center"}}>Oops, Your Cart Is Empty</h1>
                </div>
            }
            <aside>
            <div className="summary">
                <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
                <div className="summary-subtotal">
                <div className="subtotal-title">Subtotal:</div>
                <div className="subtotal-value final-value" id="basket-subtotal">{`$${cartSum}`}</div>
                <div className="subtotal-title">Tax:</div>
                <div className="subtotal-value final-value" id="basket-tax">{`+ $${taxAmount}`}</div>

                <div className="subtotal-title">Handling & Shopping: </div>
                <div className="subtotal-value final-value" id="basket-discount">{`$${shipping.toFixed(2)}`}</div>

                <div className="subtotal-title">Discount:</div>
                <div className="subtotal-value final-value" id="basket-discount">{`- $${discountAmount}`}</div>
                    <div className="summary-promo hide">
                        <div className="promo-title">Promotion:</div>
                        <div className="promo-value final-value" id="basket-promo"></div>
                    </div>
                </div>

                <div className="summary-total">
                <div className="total-title">Total:</div>
                <div className="total-value final-value" id="basket-total"><strong>{`$${total.toFixed(2)}`}</strong></div>
                </div>
                <div className="summary-checkout">
                <Checkout/>
                </div>
            </div>
            </aside>
            { 
                props.cart.length > 5 ? <div></div>: <div style={{marginBottom:"500px"}}></div> 
            }
        </main>
    }

function mapStateToProps(state){
    return{
        cart:state.cart
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart:(item) =>{
            dispatch({type: "ADD", payload:item})
        },
        removeFromCart:(item) =>{
            dispatch({type: "REMOVE", payload:item})
        },
        removeAllFromCart:(item) =>{
            dispatch({type: "REMOVE_All", payload:item})
        },
        clearCarts:(item) =>{
            dispatch({type: "CLEAR_CARTS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
      


