import Home from "./pages/Home/Home";
import InfoTuristica from "./pages/InfoTuristica/InfoTuristica";
import { Sections } from "./pages/InfoTuristica/Sections/Sections";
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
                        element: <Sections />,
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
