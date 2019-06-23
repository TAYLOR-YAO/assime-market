import React ,{Component} from "react";
import {Row, Col} from "react-bootstrap";

export default class EstimatedTotal extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col md={6}>
                        <p>Qty:</p>
                    </Col>
                    <Col md={6}>
                        <p>{this.props.quantity}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h6>Est. Total:</h6>
                    </Col>
                    <Col md={6} >
                        <strong className="price-stike" style={{position:"relative",bottom:"-15px"}}>{`$${this.props.noTaxes}`}</strong>                                                                
                        <h6>{`$${this.props.price}`}</h6>
                    </Col>
                </Row>
            </div>
        )
    }
}
