import React from "react";
import ProductListItem from "./ProductListItem";
import { connect } from "react-redux";
import "./indexStyle.css";

function ProductListing(props){
    return<ul className = "flex-container">
        {
            props.products.map(product=>
            <li className="flex-idem" key = {product._id}>
            <ProductListItem
                addToCart = {props.addToCart}
                removeFromCart = {props.removeFromCart}
                cartItem = {props.cart.filter(cartItem => cartItem._id === product._id)[0]}
                product = {product}
                company = {product.company}
                image = {product.image}
                displayComoanyArticles = {props.displayComoanyArticles}
                name = {product.name}
                price = {product.price.$numberDecimal}
                size = {product.size}
                details = {product.details}
                storeColor = {product.storeColor}
                textColor = {product.textColor}
                storeTell = {product.storeTell}
                storeEmail = {product.storeEmail}
                />
            </li>
            )

        }

    </ul>
}

function mapStateToProps(state){
    return {
        cart:state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart:(item)=>{
            dispatch({type:"ADD", payload:item})
        },
        removeFromCart:(item)=>{
            dispatch({type:"REMOVE", payload:item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)