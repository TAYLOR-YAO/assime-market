import React from "react";

export default function AddAndRemoveBtn(props){
    return <button style={{background:`${props.storeColor}`, color:`${props.textColor}`, fontSize:"12px", borderRadius:"5px"}} className="button" onClick={()=>props.addToCart(props.product)} >
        Add to cart({
        (props.cartItem && props.cartItem.quantity) || 0
        })
    </button>
}