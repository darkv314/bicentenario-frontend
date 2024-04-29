import { useEffect, useRef } from "react";
import { Ubicacion } from "../../components/shared/Map/MapComponent";
import MapComponent from "../../components/shared/Map/MapComponent";
import electricidad from "../../assets/bicentenarioImages/menuMap/electricidad.png";
import HomeCarousel from "./components/HomeCarousel";
import ubicacionVerde from "../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionVerde.png";
import ubicacionMorada from "../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionMorada.png";
import ubicacionNaranja from "../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionNaranja.png";

import "./Bicentenario.css";
import MapMenu from "./components/MapMenu";

function Bicentenario() {
    return (
        <div className="bicentenario-container">
            <section className="header-bicentenario">
                <span className="titles-bicentenario">
                    <h1>Corredor urbano</h1>
                    <span>
                        del <h1>Bicentenario</h1>
                    </span>

                    <span>
                        de <h1>Bolivia</h1>
                    </span>
                </span>

                {/* Add carousel here */}
            </section>
            <HomeCarousel />
            <MapSection />
            <MapMenu />
        </div>
    );
}

export default Bicentenario;

function MapSection() {
    const referencias = [
        {
            img: ubicacionVerde,
            title: "Espacios verdes",
        },
        {
            img: ubicacionMorada,
            title: "Movilidad urbana",
        },
        {
            img: ubicacionNaranja,
            title: "Centro historico",
        },
    ];

    return (
        <div className="mapSection">
            <MapComponent width="100%" height="40dvh" />
            <section className="mapContent">
                <span className="referencias">
                    {referencias.map((referencia) => (
                        <Ubicacion key={referencia.title} {...referencia} />
                    ))}
                </span>
                <span className="planes">
                    <h3>Planes Complementarios</h3>
                    <ul>
                        <li>Ordenamiento territorial</li>
                        <li>Movilidad urbana</li>
                        <li>Comunicación social estrategica</li>
                        <li>Fortalecimiento de la gestión municipal</li>
                    </ul>
                </span>
            </section>
        </div>
    );
}
