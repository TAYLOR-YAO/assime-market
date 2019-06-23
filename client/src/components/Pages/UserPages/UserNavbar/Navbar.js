import React, { Component } from "react";
import "./Navbar.css";
import ToggleDrawer from "./ToggleDrawer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../Utils/authActions";
import LogUserOut from "../../LogUserOut/LogUserOut";

class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
      const { user } = this.props.auth;
      console.log(user)
    return (
      <header className="toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/home">Assime-228</a></div>
          <div className="spacer"></div>
          <div className="toolBar-links">
            <ul>
            {/* <li><a href="/test">TEST</a></li> */}
              <li><a href="/home">Happy shopping, {`${user.name}`}</a></li>
              <li><a href="/home">Home</a></li>
              <li><a href="/cart">My Cart</a></li>
             <LogUserOut/>
            </ul>
          </div> 
          <div className="toolBar-toggle-button">
            <ToggleDrawer click={this.props.drawerClickHandler}/>
          </div>
        </nav>
      </header>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

