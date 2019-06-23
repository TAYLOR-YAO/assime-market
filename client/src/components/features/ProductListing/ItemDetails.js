import React, {Component } from "react";
import {Button,  Collapse, Well, Panel} from "react-bootstrap";
import "./ItemDetails.css";

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }
    handleOpenWeel (){
        this.setState({
            open: !this.state.open
        })
    }
    
    render(){
        return(
            <div className="itemDetailsWell">
                <Button
                    id="item-details-button"
                    bsStyle="link"
                    onClick={()=> this.handleOpenWeel()}
                >
                    {this.state.open === false ? `See `:`Hide `} Store Info
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well >
                            <Panel >
                                <Panel.Body>
                                    <div style={{textAlign:"left", overflow:"scroll"}}>
                                        <hr/>
                                        <p style={{textAlign:"center"}}><strong>{this.props.company}</strong></p>
                                        <hr/>
                                        <p><i className="fa fa-envelope mr-3"></i>{this.props.storeEmail}</p>
                                        <p><i className="fa fa-phone mr-3"></i> + 1 {this.props.storeTell}</p>
                                        {/* <p><i className="fa fa-home mr-3"></i> {this.props.storeAddress}</p> */}
                                        <hr/>
                                    </div>
                                </Panel.Body>
                            </Panel>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}