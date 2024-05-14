import React from "react";
import "./EmblaSlider.css";
import useEmblaCarousel from "embla-carousel-react";
import { IconoirProvider, NavArrowLeft, NavArrowRight } from "iconoir-react";

function EmblaSlider({ children, buttonColor }) {
    const [emblaRef, emblaRefObject] = useEmblaCarousel({
        align: "start",
        loop: true,
    });
    return (
        <div className="embla">
            <button
                onClick={() => emblaRefObject.scrollPrev()}
                style={{
                    color: buttonColor || "black",
                }}
                className="embla-slider-button"
            >
                <IconoirProvider>
                    <NavArrowLeft />
                </IconoirProvider>
            </button>
            <button
                onClick={() => emblaRefObject.scrollNext()}
                style={{
                    color: buttonColor || "black",
                }}
                className="embla-slider-button button-right"
            >
                <IconoirProvider>
                    <NavArrowRight />
                </IconoirProvider>
            </button>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">{children}</div>
            </div>
        </div>
    );
}

export default EmblaSlider;
