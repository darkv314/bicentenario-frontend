import "./App.css";
import Home from "./pages/Home/Home";
import { Banner } from "./pages/InfoTuristica/Banner/Banner";
import InfoTuristica from "./pages/InfoTuristica/InfoTuristica";
import { Servicios } from "./pages/InfoTuristica/Servicios/Servicios";
import Turismo from "./pages/InfoTuristica/Turismo/Turismo";
import Layout from "./views/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "info-turistica",
                element: <InfoTuristica />,
                children: [
                    {
                        index: true,
                        element: <Banner />,
                    },
                    {
                        path: "servicios",
                        element: <Servicios />,
                    },
                    {
                        path: "turismo",
                        element: <Turismo />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
