

import React, {Component } from "react";
import {Button,  Collapse, Well, Panel} from "react-bootstrap";
export default class ShipmentChoice extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            collapse: false
        }
    }
    
    render(){
      const { collapse } = this.state.collapse;
        return(
            <div style={{marginTop:"15px"}}>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={()=>this.setState({
                        open: !this.state.open
                    })}
                >   
                  
                  {this.state.open === false ? `Want Faster Shipment? `:`Done `} {this.state.open === false ? ` $0` : ` √`}
                 
                  
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well >
                            <Panel >
                                <Panel.Body>
                                  <ul>
                                    <li>
                                        <Button 
                                        onClick={() => this.setState({ collapse: !collapse })}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={collapse}
                                      >
                                        Free Shipping
                                      </Button>
                                      <Collapse in={this.state.collapse}>
                                        <div id="example-collapse-text">
                                          Free shipping 10-15 days
                                        </div>
                                      </Collapse>
                                    </li>
                                    {/* <li>
                                      <Button 
                                        onClick={() => this.setState({ collapse: !collapse })}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={collapse}
                                      >
                                        Standar Shipping
                                      </Button>
                                      <Collapse in={this.state.collapse}>
                                        <div id="example-collapse-text">
                                          5-7 Bussiness days
                                        </div>
                                      </Collapse>
                                    </li>
                                    <li>
                                      <Button 
                                      onClick={() => this.setState({ collapse: !collapse })}
                                      aria-controls="example-collapse-text"
                                      aria-expanded={collapse}
                                    >
                                      Express
                                    </Button>
                                    <Collapse in={this.state.collapse}>
                                      <div id="example-collapse-text">
                                        1-3 Bussness Days 
                                      </div>
                                    </Collapse>

                                    </li> */}
                                    <li></li>
                                  </ul>

                                 

                                </Panel.Body>
                            </Panel>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}