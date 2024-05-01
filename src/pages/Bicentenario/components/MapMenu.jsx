import electricidad from "../../../assets/bicentenarioImages/menuMap/electricidad.png";
import espacioVerde from "../../../assets/bicentenarioImages/menuMap/espacioVerde.png";
import movilidadUrbana from "../../../assets/bicentenarioImages/menuMap/movilidad.png";
import planes from "../../../assets/bicentenarioImages/menuMap/planes.png";
import { useRef, useEffect, useState } from "react";
import "./MapMenu.css";

function MapMenu() {
    const [activeSlide, setActiveSlide] = useState(0);
    const icons = [
        {
            icon: espacioVerde,
            title: "Mejora de Áreas verdes y espacios publicos",
        },
        {
            icon: movilidadUrbana,
            title: "Mejora de la Movilidad urbana",
        },
        {
            icon: electricidad,
            title: "Eficiencia energética e integración urbana",
        },
        {
            icon: planes,
            title: "Planes complementarios",
        },
    ];

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <section className="map-menu">
            <span className="map-menu-main">
                <IconSlider icons={icons} activeSlide={activeSlide} />
                <span className="titles">
                    {icons.map((icon, index) => (
                        <h3
                            key={`title ${icon.title}`}
                            onMouseEnter={() => handleSlideChange(index)}
                        >
                            {icon.title}
                        </h3>
                    ))}
                </span>
            </span>
        </section>
    );
}

export default MapMenu;

function IconSlider({ icons, activeSlide }) {
    const iconSwiper = useRef(null);

    useEffect(() => {
        const swiperParams = {
            slidesPerView: 1,
        };
        Object.assign(iconSwiper.current, swiperParams);
        iconSwiper.current.initialize();
    }, []);

    useEffect(() => {
        if (iconSwiper.current) iconSwiper.current.swiper.slideTo(activeSlide);
    }, [activeSlide]);

    return (
        <div className="icon-slide-container">
            <swiper-container
                init="false"
                direction="vertical"
                ref={iconSwiper}
            >
                {icons.map((icon) => (
                    <IconSlide key={icon.title} {...icon} />
                ))}
            </swiper-container>
        </div>
    );
}

function IconSlide({ icon, title }) {
    return (
        <swiper-slide>
            <div className="icon-slide">
                <img src={icon} alt={title} />
            </div>
        </swiper-slide>
    );
}
