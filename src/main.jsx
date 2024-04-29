import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NavRefProvider } from "./context/NavRefProvider.jsx";
import { InfoCardProvider } from "./context/InfoCardContext.jsx";
import { register } from "swiper/element/bundle";

register();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NavRefProvider>
            <InfoCardProvider>
                <App />
            </InfoCardProvider>
        </NavRefProvider>
    </React.StrictMode>
);
