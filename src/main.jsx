import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NavRefProvider } from "./context/NavRefProvider.jsx";
import { InfoCardProvider } from "./context/InfoCardContext.jsx";
import { register } from "swiper/element/bundle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

register();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <NavRefProvider>
                <InfoCardProvider>
                    <App />
                </InfoCardProvider>
            </NavRefProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
