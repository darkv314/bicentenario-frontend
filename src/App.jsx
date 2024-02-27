import Home from "./pages/Home/Home";
import { Landing } from "./pages/Home/Landing/Landing";
import InfoTuristica from "./pages/InfoTuristica/InfoTuristica";
import { Sections } from "./pages/InfoTuristica/Sections/Sections";
import { Servicios } from "./pages/InfoTuristica/Servicios/Servicios";
import Turismo from "./pages/InfoTuristica/Turismo/Turismo";
import Provisional from "./pages/Provisional/Provisional";
import { InfoCard } from "./views/InfoCard/InfoCard";
import Layout from "./views/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Provisional />,
            },
            {
                path: "historia",
                element: <Home />,
                children: [
                    {
                        index: true,
                        element: <Landing />,
                    },
                    {
                        path: ":id",
                        element: <InfoCard />,
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
