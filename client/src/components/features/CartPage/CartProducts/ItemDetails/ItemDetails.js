import React, {Component } from "react";
import {Button,  Collapse, Well, Media, Row, Col} from "react-bootstrap";
import "./ItemDetails.css";
export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }
    
    render(){
        return(
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={()=>this.setState({
                        open: !this.state.open
                    })}
                >
                    {this.state.open === false ? `See `:`Hide `} Item details
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img width={100}
                                    height={100}
                                    src={this.props.image}
                                    alt="Item"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p>{this.props.details}</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br/>
                                            <strong className="price-stike">{`$${this.props.price}`}</strong>                                            
                                        </Col>
                                        <Col md={6}>
                                        <strong>Qty: {this.props.quantity}</strong>
                                        </Col>
                                    </Row>                                       
                                </Media.Body>
                            </Media>
                            <Row className="show-grid">
                                {this.props.otherDetailes}
                            </Row> 
                            <Row className="show-grid">
                                {this.props.estimetedPrice}
                            </Row> 
                        </Well>

                    </div>
                </Collapse>
            </div>
        )
    }
}