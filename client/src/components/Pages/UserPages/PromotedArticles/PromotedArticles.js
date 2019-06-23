import React from "react";
import { connect } from "react-redux";
import {Carousel} from "react-bootstrap";
// import ProductListItem from "./ProductListItem";
import ProductListItem from "../../../features/ProductListing/ProductListItem";
import "./PromotedArticles.css";


class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
            { this.props.products.map(product=>
                <Carousel.Item key = {product._id}>
                    <img
                    className="d-block w-100"
                    src={`${product.image}`}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <ProductListItem
                            addToCart = {this.props.addToCart}
                            removeFromCart = {this.props.removeFromCart}
                            cartItem = {this.props.cart.filter(cartItem => cartItem._id === product._id)[0]}
                            product = {product}
                            company = {product.company}
                            image = {product.image}
                            displayComoanyArticles = {this.props.displayComoanyArticles}
                            name = {product.name}
                            price = {product.price.$numberDecimal}
                            size = {product.size}
                            details = {product.details}
                            storeColor = {product.storeColor}
                            textColor = {product.textColor}
                        />
                    </Carousel.Caption>
                </Carousel.Item>
        
            )}
          
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);









//   import React from "react";
// import ProductListItem from "./ProductListItem";
// import { connect } from "react-redux";
// import "./indexStyle.css";

// function ProductListing(props){
//     return<ul className = "flex-container">
//         {
//             props.products.map(product=>
//             <li className="flex-idem" key = {product._id}>
//             <ProductListItem
//                 addToCart = {props.addToCart}
//                 removeFromCart = {props.removeFromCart}
//                 cartItem = {props.cart.filter(cartItem => cartItem._id === product._id)[0]}
//                 product = {product}
//                 company = {product.company}
//                 image = {product.image}
//                 displayComoanyArticles = {props.displayComoanyArticles}
//                 name = {product.name}
//                 price = {product.price.$numberDecimal}
//                 size = {product.size}
//                 details = {product.details}
//                 storeColor = {product.storeColor}
//                 textColor = {product.textColor}
//                 />
//             </li>
//             )

//         }

//     </ul>
// }

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

export default connect(mapStateToProps,mapDispatchToProps)(ControlledCarousel)