import React from "react";
import logo from "../assets/icon.png";
import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <img src={logo} alt="logo" />
            <div>Electron App</div>
        </div>
    );
};

export default App;
