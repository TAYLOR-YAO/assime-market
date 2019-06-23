import React ,{Component} from "react";
import {Row, Col} from "react-bootstrap";

export default class TaxeFeeds extends Component{
    render(){
        return(
            <Row className="show-grid">
                <Col md={6}>
                    Est. taxes & Fees:
                </Col>
                <Col md={6}>
                    {`$${this.props.taxes}`}
                </Col>
            </Row>
        )
    }
}