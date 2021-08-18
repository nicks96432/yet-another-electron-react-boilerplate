import React, { useEffect } from "react";
import logo from "../assets/icon.png";
import "./App.scss";

const App = () => {
    useEffect(() => {
        const timeoutId = setInterval(
            () => window.electron.ipc.testIpc(),
            5000
        );
        window.electron.ipc.on("test-channel", (data: string) =>
            console.log(data)
        );

        return () => clearInterval(timeoutId);
    });

    return (
        <div className="app">
            <img src={logo} alt="logo" />
            <div>Electron App</div>
        </div>
    );
};

export default App;
