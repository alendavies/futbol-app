import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Prueba from "./prueba";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Prueba />
    </React.StrictMode>
);
