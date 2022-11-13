import React from "react";
import {BrowserRouter as Router } from "react-router-dom"
import NavBarC from "./components/NavBarC.js";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterC from "./components/FooterC.js";
import './App.css';

function App() {

    return (
        <Router>
                <NavBarC/>
                <FooterC/>
        </Router>
    );
}

export default App;
