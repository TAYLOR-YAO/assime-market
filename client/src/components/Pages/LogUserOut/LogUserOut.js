import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Utils/authActions";
import {IconButton, Menu, MenuItem} from "react-mdl"

class LogUserOut extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{position: 'relative'}}>
          <IconButton name="more_vert" id="demo-menu-lower-right" />
          <Menu target="demo-menu-lower-right" align="right">
              <MenuItem>Some Action</MenuItem>
              <MenuItem>Another Action</MenuItem>
              {user.name ? <MenuItem onClick={this.onLogoutClick}>Logout</MenuItem> : <MenuItem><a href="/login" style={{color:"#000"}}>login</a></MenuItem>}
          </Menu>
      </div>
    );
  }
}
LogUserOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(LogUserOut);
