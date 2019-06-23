import React ,{Component} from "react";

export default class ItemHandler extends Component {
    render(){
        return(
            <div >
                <button style={{width:"30px", height: "30px"}} onClick={this.props.addToCart}>+</button>
                <button style={{width:"30px", height: "30px"}} onClick={this.props.removeFromCart}>-</button>
                <button style={{width:"70px", height: "30px"}} onClick={this.props.removeAllFromCart}>Remove</button>
            </div>
        )
    }
}