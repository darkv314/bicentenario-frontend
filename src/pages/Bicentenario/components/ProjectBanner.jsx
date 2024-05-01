import "./ProjectBanner.css";
import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IconoirProvider, NavArrowLeft, NavArrowRight } from "iconoir-react";

function ProjectBanner({ title, projects, bannerColor, textColor }) {
    const [emblaRef, emblaRefObject] = useEmblaCarousel({
        align: "start",
        loop: true,
    });

    return (
        <div
            className="banner-container"
            style={{
                backgroundColor: bannerColor,
                color: textColor,
            }}
        >
            <h1 style={{ color: textColor }}>{title}</h1>
            <div className="embla">
                <button
                    onClick={() => emblaRefObject.scrollPrev()}
                    style={{
                        color: textColor,
                    }}
                    className="nav-carousel-button"
                >
                    <IconoirProvider>
                        <NavArrowLeft />
                    </IconoirProvider>
                </button>
                <button
                    onClick={() => emblaRefObject.scrollNext()}
                    style={{
                        color: textColor,
                    }}
                    className="nav-carousel-button button-right"
                >
                    <IconoirProvider>
                        <NavArrowRight />
                    </IconoirProvider>
                </button>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {projects.map((project, index) => (
                            <div className="embla__slide" key={index}>
                                <ProjectCard
                                    title={project.title}
                                    img={project.img}
                                    color={textColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectBanner;

function ProjectCard({ title, img, color }) {
    return (
        <div className="embla__slide">
            <div className="project-card" style={{ color }}>
                <span
                    className="project-img-container"
                    style={{
                        border: `3px solid ${color}`,
                        padding: "0.65rem",
                    }}
                >
                    <img src={img} alt={title} />
                </span>
                <div className="project-title">
                    <h2>{title}</h2>
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
