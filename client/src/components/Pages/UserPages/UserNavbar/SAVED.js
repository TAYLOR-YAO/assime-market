import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../../Utils/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
  const { user } = this.props.auth;
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          
          <div className="nav-wrapper gray">
            <h6>
              Assime-228
            </h6>
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);







// -----------------------------------------------------------------------------------------------




// import React from "react";
// import {connect} from "react-redux";
// import Checkout from "../../Checkout";
// // import {ButtonGroup, Button} from "react-bootstrap";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import PorductName from "../CartProducts/PorductName";
// import Subtotal from "../CartProducts/Subtotal/Subtotal";
// import EstimatedTotal from "../CartProducts/EstimatedTotal/EstimatedTotal";
// import ItemDetails from "../CartProducts/ItemDetails/ItemDetails";
// import ItemHandler from "../CartProducts/ItemHandler/ItemHandler";
// import TableView from './TableView/TableView';
// import ShipmentAddress from "../../Grgions/ShipmentAddress";
// import ShipmentChoice from "../Cart/ShipmentChoice"
// import "./Cart.css";

// // function percentage(partialValue, totalValue) {
// //   return (100 * partialValue) / totalValue;
// // }  

// const defaultSum = 0;
// let cartSum;

// function sortItemInCart(item){
//     return item.sort((a, b)=> a._id < b._id)
// }

// function Cart(props){
//     if(Array.isArray(props.cart) || props.cart.length){
//         cartSum = props.cart.map(item=>{
//             return (item.taxedPrice * item.quantity) + item.normalShipment
//         }).reduce((a, b) => a + b, 0).toFixed(2); 
//     } else {
//         cartSum = defaultSum.toFixed(2)
//     }
//     return <div id="main">
//             <aside style={{textAlign:"center"}}>

//                 <h1>Total Cost Card</h1>
//             </aside>
//             <article>

//                 <div >
//                     <ShipmentAddress/>               
//                     <TableView
//                         tableView ={
//                             <div className="table-data">
//                             <Table>
//                             <Thead>
//                                 <Tr>
//                                 <Th style={{padding:"0 10px"}}>Item</Th>
//                                 <Th style={{padding:"0 10px"}}>Qantity</Th>
//                                 <Th style={{padding:"0 10px"}}>Company</Th>
//                                 <Th style={{padding:"0 10px"}}>Unitary price</Th>
//                                 <Th style={{padding:"0 10px"}}>Total price</Th>                                         
//                                 <Th style={{padding:"0 10px"}}>Add qty</Th>
//                                 <Th style={{padding:"0 10px"}}>Reduce qty</Th>
//                                 <Th style={{padding:"0 10px"}}>Remove All</Th>                                                                                                                                                               
//                                 </Tr>
//                             </Thead>
//                             <Tbody className="item-card">
//                             { sortItemInCart(props.cart).map(item=>(
//                                 <Tr key={item._id} className="table-body-row">
//                                 <Td style={{padding:"0 10px"}}>{item.name}</Td>
//                                 <Td style={{padding:"0 10px"}}>{item.quantity}</Td>
//                                 <Td style={{padding:"0 10px"}}>{item.company}</Td>
//                                 <Td style={{padding:"0 10px"}}>${item.price.$numberDecimal}</Td>
//                                 <Td style={{padding:"0 10px"}}>${item.price.$numberDecimal * item.quantity}</Td>                                                            
//                                 <Td style={{padding:"0 10px"}}>
//                                     <button onClick={()=> props.addToCart(item)}>+</button>
//                                 </Td>
//                                 <Td style={{padding:"0 10px"}}>
//                                     <button onClick={()=> props.removeFromCart(item)}>-</button>
//                                 </Td>
//                                 <Td style={{padding:"0 10px"}}>
//                                 <button onClick={()=> props.removeAllFromCart(item)}>All</button>
//                                 </Td>                    
//                             </Tr>
//                             ))
//                             }
//                             </Tbody>
//                         </Table>
//                         </div>
//                         }
//                     />
//                 {
//                     props.cart.length > 0 ? (  <div className="item-wrapper">
//                     {
//                         sortItemInCart(props.cart).map(item=><div key={item._id}>
//                             <div className="order-item">
//                                 <div className="box">
//                                     <img className="item-photo" src={item.image} alt="Item"/>
//                                 </div>
//                                 <div className="box" id="sider">
//                                     <div className="view view-cascade gradient-card-header blue-gradient">
//                                         <h6 className="card-header-title mb-3">{item.company}</h6>
//                                         <div className="card-header-subtitle mb-0">
//                                             {/* <ButtonGroup size="sm" className="mt-3">
//                                                 <Button variant="success" onClick = {()=> props.addToCart(item)}>+</Button>
//                                                 <Button variant="danger" onClick = {()=> props.removeFromCart(item)} >-</Button>
//                                                 <Button variant="denger" onClick = {()=> props.removeAllFromCart(item)}>Remove</Button>
//                                             </ButtonGroup> */}



//                                         <ItemHandler
//                                             addToCart = {()=> props.addToCart(item)}
//                                             removeFromCart = {()=> props.removeFromCart(item)}
//                                             removeAllFromCart = {()=> props.removeAllFromCart(item)}
//                                         />
//                                         </div>
//                                         <PorductName
//                                         name={item.name}
//                                         />

//                                         </div>
//                                         <div className="card-body card-body-cascade text-center">
//                                             <Subtotal price={`$${item.price.$numberDecimal}`}/>
                                            
//                                             <ItemDetails
//                                                 price={item.price.$numberDecimal}
//                                                 image={item.image}
//                                                 quantity={item.quantity}
//                                                 // otherDetailes = {
//                                                 //     <div>
//                                                 //         <TaxeFeeds
//                                                 //         taxes = {percentage(item.price.$numberDecimal * item.quantity).toFixed(2)}
//                                                 //         />
//                                                 //         <PickUpSavings price={`${savings}`}/>
//                                                 //     </div>
//                                                 // }
//                                                 estimetedPrice = {
//                                                     <EstimatedTotal 
//                                                         noTaxes = {(item.price.$numberDecimal * item.quantity).toFixed(2)}
//                                                         price={(item.price.$numberDecimal * item.quantity) + (item.price.$numberDecimal * item.quantity).toFixed(2)}
//                                                         quantity={item.quantity}
//                                                     />
//                                                 }
//                                             />
//                                             <hr/>
//                                             <div className="hidablePrice-detaile">
//                                                     <EstimatedTotal 
//                                                     noTaxes = {(item.price.$numberDecimal * item.quantity).toFixed(2)}
//                                                     price={(item.price.$numberDecimal * item.quantity).toFixed(2)}
//                                                     quantity={item.quantity}
//                                                     />
//                                             </div>
//                                             <ShipmentChoice/>
//                                         </div>                 
//                                     </div>
//                                 <hr/>                                                                                                                             
//                             </div>
//                         </div>
//                         )
//                     }
//                 </div> ) : (
//                     <div style={{height: "300px"}}>
//                         <h1> Your cart empty </h1>
//                     </div>
//                 )
//                 }   
                
//                 </div>
//                 {/* -------------------- */}
        
//             </article>
//         </div> 
//     }

// function mapStateToProps(state){
//     return{
//         cart:state.cart
//     }
// }
// function mapDispatchToProps(dispatch){
//     return{
//         addToCart:(item) =>{
//             dispatch({type: "ADD", payload:item})
//         },
//         removeFromCart:(item) =>{
//             dispatch({type: "REMOVE", payload:item})
//         },
//         removeAllFromCart:(item) =>{
//             dispatch({type: "REMOVE_All", payload:item})
//         },
//         clearCarts:(item) =>{
//             dispatch({type: "CLEAR_CARTS"})
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//          <p style={{position:"relative", top:"10px"}}>Select company</p>