import "./ProjectBanner.css";
import { useState } from "react";
import EmblaSlider from "../../../components/shared/EmblaSlider/EmblaSlider";
import { IconoirProvider, Cancel } from "iconoir-react";
import { BarLoader } from "react-spinners";

function ProjectBanner({ titulo, proyectos, bannerColor, textColor }) {
    const [modal, setModal] = useState(false);
    const [project, setProject] = useState(null);

    const onClick = (project) => {
        setProject(project);
        setModal(true);
    };

    return (
        <>
            {modal && (
                <ProjectModal
                    project={project}
                    color={textColor}
                    setModal={setModal}
                    bannerColor={bannerColor}
                />
            )}
            <div
                className="banner-container"
                style={{
                    backgroundColor: bannerColor,
                    color: textColor,
                }}
            >
                <h1 style={{ color: textColor }}>{titulo}</h1>
                <EmblaSlider buttonColor={textColor}>
                    {proyectos?.map((project, index) => (
                        <div
                            className="embla__slide"
                            key={`${project.titulo}${titulo}${index}`}
                        >
                            <ProjectCard
                                onClick={() => onClick(project)}
                                titulo={project.titulo}
                                imagenPrincipal={project.imagenPrincipal}
                                color={textColor}
                            />
                        </div>
                    ))}
                </EmblaSlider>
            </div>
        </>
    );
}

export default ProjectBanner;

function ProjectCard({ titulo, imagenPrincipal, color, onClick }) {
    return (
        <div onClick={onClick} className="embla__slide">
            <div className="project-card" style={{ color }}>
                <span
                    className="project-img-container"
                    style={{
                        border: `3px solid ${color}`,
                        padding: "0.65rem",
                    }}
                >
                    <img
                        src={`${
                            import.meta.env.VITE_API_URL
                        }${imagenPrincipal}`}
                        alt={titulo}
                    />
                </span>
                <div className="project-title">
                    <h2>{titulo}</h2>
                    <span className="project-decoration">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: color,
                                }}
                            ></span>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}

function ProjectModal({ project, color, setModal, bannerColor }) {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div
            onClick={() => setModal(false)}
            className="modal-container"
            style={{ color }}
        >
            <div onClick={(e) => e.stopPropagation()} className="project-modal">
                <button
                    onClick={() => setModal(false)}
                    className="close-modal-button"
                >
                    <IconoirProvider>
                        <Cancel color="red" />
                    </IconoirProvider>
                </button>
                <h1>{project?.titulo}</h1>
                <p style={{ border: `${color} 3px solid` }}>
                    Monto de inversión: {project?.montoInversion}Bs.
                </p>
                <section className="project-components">
                    <h2>Componentes</h2>
                    <EmblaSlider>
                        {project?.galeria?.map((imagen, index) => (
                            <div
                                className="embla__slide"
                                key={`${imagen}${index}`}
                            >
                                <div className="project-image-container">
                                    {isLoading && (
                                        <BarLoader color={bannerColor} />
                                    )}
                                    <img
                                        src={`${import.meta.env.VITE_API_URL}${
                                            imagen.url
                                        }`}
                                        alt={imagen.caption}
                                        onLoad={() => setIsLoading(false)} // Image loaded, hide icon
                                        style={{
                                            display: isLoading
                                                ? "none"
                                                : "block",
                                        }} // Hide image initially
                                    />
                                    <span className="img-caption">
                                        {imagen.caption}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </EmblaSlider>
                    <div
                        className="project-key-words"
                        style={{ backgroundColor: bannerColor, color }}
                    >
                        <EmblaSlider buttonColor={color}>
                            {project?.palabrasClave?.map(
                                (palabraClave, index) => (
                                    <div
                                        className="embla__slide"
                                        key={`${palabraClave}${index}`}
                                    >
                                        <span key={index}>{palabraClave}</span>
                                    </div>
                                )
                            )}
                        </EmblaSlider>
                    </div>
                    <video
                        className="project-video"
                        controls
                        src={`${import.meta.env.VITE_API_URL}${
                            project?.videoMaqueta
                        }`}
                    ></video>
                </section>
            </div>
        </div>
    );
}
