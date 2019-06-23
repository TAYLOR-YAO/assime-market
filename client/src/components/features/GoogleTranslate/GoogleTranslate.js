import React, { Component } from "react";
import "./GoogleTranslate.css";

class GoogleTranslate extends Component {
    googleTranslateElementInit () {
        new window.google.translate.TranslateElement({pageLanguage: "en", layout: window.google.translate.TranslateElement.FloatPosition.BOTTOM_RIGHT}, "google_translate_element")
     }

    componentDidMount() {
        const addScript = document.createElement("script");
        addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");        
        document.body.appendChild(addScript);  
        window.googleTranslateElementInit = this.googleTranslateElementInit;
    }

    render() {
        return (
            <div id="google_translate_element"></div>
          );
     }
}

export default GoogleTranslate;