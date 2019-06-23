import React from "react";
import {Switch, Route} from "react-router-dom";
import store from "../Config/Store";
import Login from "../Pages/UserPages/Login";
import Home from "../Pages/UserPages/HomePages";
import ShoppingCart from "../Pages/UserPages/ShopperCarts";
import Register from "../Pages/UserPages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "../Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../Utils/authActions";
import DummyCart from "../Pages/UserPages/DummyCart/DummyCart"

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

const Router =()=>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/home" component={Home} /> 
        <PrivateRoute exact path="/cart" component={ShoppingCart} />

        <PrivateRoute exact path="/test" component={DummyCart} />

    </Switch>
)

export default Router;