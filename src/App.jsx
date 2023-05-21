import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InfoTuristica from "./pages/InfoTuristica/InfoTuristica";
import Formacion from "./pages/Formacion/Formacion";
import Hoteles from "./pages/InfoTuristica/Hoteles/Hoteles";
import Restaurantes from "./pages/InfoTuristica/Restaurantes/Restaurantes";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/info-turistica" element={<InfoTuristica />} />
                <Route path="/formacion" element={<Formacion />}>
                    <Route path="/hoteles" element={<Hoteles />} />
                    <Route path="/restaurantes" element={<Restaurantes />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
