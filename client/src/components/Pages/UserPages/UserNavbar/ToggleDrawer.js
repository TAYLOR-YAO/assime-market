import React from "react";
import "./ToggleDrawer.css"
const ToggleDrawer = props =>(
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
    </button>
);
export default ToggleDrawer;