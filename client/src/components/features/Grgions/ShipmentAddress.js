import React, {Component } from "react";
import {Button,  Collapse, Well, Panel, Tab, Tabs} from "react-bootstrap";
import {Grid, Cell, Textfield} from "react-mdl";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class ShipmentAddress extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            email: "",
            tel: "",
            streetAddress: "",
            city: "",
            countryOrState: "",
            zip: "",
            country: "", 
            region: ""

        }
    }
    selectCountry (val) {
        this.setState({ country: val });
        
      }
     
    selectRegion (val) {
        this.setState({ region: val });
    }
    selectCity (val) {
        this.setState({ city: val });
    }

    handleInputsChanges = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }
    handleSignUpSubmit = event => {
        event.preventDefault();
        let fullAddress = `${this.state.streetAddress}, ${this.state.city}, ${this.state.countryOrState} ${this.state.zip} `
        localStorage.setItem("shipmentAddress", fullAddress)
        console.log(fullAddress)
    }
    render(){
        const { country, region } = this.state;
        return(
            <div style={{marginTop:"15px"}}>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={()=>this.setState({
                        open: !this.state.open
                    })}
                >
                    {this.state.open === false ? `Add a Different Shipment Address Or Nearest Warehouse Addess ?`:`Done `}
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well >
                            <Panel >
                                <Panel.Body>
                                    <Tabs justified defaultActiveKey={1} animation={false} id="noanim-tab-example">
                                        <Tab eventKey={1} title="Add Shipment Address" >
                                            
                                        <Grid className="demo-grid-1">
                                            <Cell col={4}>
                                                    <h6>Street Address</h6>
                                                <Textfield
                                                label="Street Address"
                                                floatingLabel
                                                style={{width: "100%"}}
                                                name="streetAddress"
                                                onChange={this.handleInputsChanges}
                                                />
                                            </Cell>

                                            <Cell col={3}>
                                                <h6>City</h6>
                                                <Textfield
                                                label="city"
                                                floatingLabel
                                                style={{width: '100%'}}
                                                name="city"
                                                onChange={this.handleInputsChanges}
                                                />
                                            </Cell>

                                            <Cell col={3}>
                                                <h6>State</h6>
                                                <Textfield
                                                label="State"
                                                floatingLabel
                                                style={{width: '100%'}}
                                                name="countryOrState"
                                                onChange={this.handleInputsChanges}
                                                />
                                            </Cell>

                                            <Cell col={2}>
                                                <h6>Zip</h6>
                                                <Textfield
                                                label="Zip"
                                                floatingLabel
                                                style={{width: "100%"}}
                                                name="zip"
                                                onChange={this.handleInputsChanges}
                                                />
                                            </Cell>
                                        </Grid>
                                        <Grid>
                                            <Cell col={4}>
                                                <h6>Email</h6>
                                                <Textfield
                                                label="Email"
                                                floatingLabel
                                                style={{width: '100%'}}
                                                name="email"
                                                onChange={this.handleInputsChanges}
                                                />
                                            </Cell>

                                            <Cell col={4}>
                                                <h6>Tel</h6>
                                                <Textfield
                                                label="Tel"
                                                floatingLabel
                                                style={{width: '100%'}}
                                                name="tel"
                                                onChange={this.handleInputsChanges}
                                                />
                                            </Cell>
                                            <Cell col={4}>
                                                <Button style={{background:"#6351ce", color:"#fff"}} onClick={this.handleSignUpSubmit}>Submit</Button>
                                            </Cell>
                                        </Grid>
                                    </Tab>

                                    <Tab eventKey={2} title="Pickup In The Nearest Warehouse Insdead" >
                                    <Grid className="demo-grid-1">
                                        <Cell col={12}>

                                        <div>
                                            <CountryDropdown
                                            value={country}
                                            onChange={(val) => this.selectCountry(val)} />
                                            <RegionDropdown
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.selectRegion(val)} />
                                        </div>
                                                   
                                        </Cell>
                                    </Grid>
                                    </Tab>
                                </Tabs>
                                </Panel.Body>
                            </Panel>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}