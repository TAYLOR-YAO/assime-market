import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import store from "./components/Config/Store";
import './index.css';
import App from './App';

const app = <Provider store ={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
ReactDOM.render(app, document.getElementById('root'));
