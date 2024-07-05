import { Ubicacion } from "../../components/shared/Map/MapComponent";
import MapComponent from "../../components/shared/Map/MapComponent";
import HomeCarousel from "./components/HomeCarousel";
import ubicacionVerde from "../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionVerde.png";
import ubicacionMorada from "../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionMorada.png";
import ubicacionNaranja from "../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionNaranja.png";
import banerAlcalde from "../../assets/bicentenarioImages/bannerAlcalde.png";
import "./Bicentenario.css";
import MapMenu from "./components/MapMenu";
import ProjectBanner from "./components/ProjectBanner";
import PlanesComplementarios from "./components/PlanesComplementarios";
import { useQuery } from "@tanstack/react-query";
import { getGruposProyectos } from "../../services/GroupoProyectos";

function Bicentenario() {
    const { data } = useQuery({
        queryKey: ["gruposProyectos"],
        queryFn: () => getGruposProyectos(),
    });

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
            </section>
            <HomeCarousel />
            <MapSection />
            <MapMenu />
            {data?.length &&
                data.map((grupoProyecto) => (
                    <ProjectBanner
                        key={grupoProyecto.titulo}
                        bannerColor={`var(--${grupoProyecto.colores.bannerColor})`}
                        textColor={`var(--${grupoProyecto.colores.textColor})`}
                        titulo={grupoProyecto.titulo}
                        proyectos={grupoProyecto.proyectos}
                    />
                ))}
            <PlanesComplementarios />
            <img src={banerAlcalde} alt="Baner alcalde" />
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
            title: "Centro histórico",
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
                        <li>Comunicación social estratégica</li>
                        <li>Fortalecimiento de la gestión municipal</li>
                    </ul>
                </span>
            </section>
        </div>
    );
}
