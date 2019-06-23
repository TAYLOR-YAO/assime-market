import React from "react";
import "./SideDrawer.css";
import SideDrawerLogUserOut from "../../LogUserOut/SideDrawerLogUserOut";


const SideDrawer = props =>{
    let drawerClass ="side-drawer";
    if(props.show){
        drawerClass = "side-drawer open";
    }
    return(
    <nav className={drawerClass} >
        <div><h2>Assime-228</h2></div>
        <hr/>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/cart">My Cart</a></li>
            <li><SideDrawerLogUserOut/></li>                     
        </ul>
    </nav>
    );
};
export default SideDrawer