import React ,{Component} from "react";
import {Row, Col, Tooltip, OverlayTrigger} from "react-bootstrap";
var styles ={
    pickupsavings:{
        textDecoration:"underline"
    },
    totalSavings:{
        color:"red",
        fontWeight:"800"
    }
}
export default class PickUpSavings extends Component{
    render(){
        const tooltip =(
            <Tooltip id="tooltip">
                <p>
                    Picking up your order in the store helps cut costs, 
                    and we pass the savings to you.
                </p>
            </Tooltip>
        );
        return(
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickupsavings}>Pickup savings:</div>
                    </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        )
    }
}