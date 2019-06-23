import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Utils/authActions";
import {IconButton, Menu, MenuItem} from "react-mdl"
class SideDrawerLogUserOut extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
        <div style={{position: 'absolute', color:"#fff" }}>
            <IconButton name="more_vert" id="demo-menu-lower-left" />
            <Menu target="demo-menu-lower-left" valign="bottom" ripple>
                <MenuItem>Some Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                {user.name ? <MenuItem onClick={this.onLogoutClick}>Logout</MenuItem> : <MenuItem><a href="/login" style={{color:"#000"}}>login</a></MenuItem>}
            </Menu>
        </div>


    );
  }
}
SideDrawerLogUserOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(SideDrawerLogUserOut);


// <div style={{position: 'relative'}}>
// <IconButton name="more_vert" id="demo-menu-lower-right" />
// <Menu target="demo-menu-lower-right" align="right">
//     <MenuItem>Some Action</MenuItem>
//     <MenuItem>Another Action</MenuItem>
//     <MenuItem onClick={this.onLogoutClick}>Logout</MenuItem>
// </Menu>
// </div>