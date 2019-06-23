import React, {Component } from "react";
import {Button,  Collapse, Well, Panel} from "react-bootstrap";
export default class TableView extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }
    
    render(){
        return(
            <div style={{marginTop:"15px"}}>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={()=>this.setState({
                        open: !this.state.open
                    })}
                >
                    {this.state.open === false ? `Get `:`Hide `} table view
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well >
                            <Panel >
                                <Panel.Body>{this.props.tableView}</Panel.Body>
                            </Panel>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}