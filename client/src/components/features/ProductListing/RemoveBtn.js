import React from "react";
export default function RemoveBtn(props){
    return <button style={{background:`${props.storeColor}`, color:`${props.textColor}`, fontSize:"12px", borderRadius:"5px"}} onClick={()=>props.removeFromCart(props.cartItem)} className="button">
        Remove
    </button>
}