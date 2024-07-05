import carousel1 from "../../../assets/bicentenarioImages/carousel/carousel1.png";
import carousel2 from "../../../assets/bicentenarioImages/carousel/carousel2.png";
import carousel3 from "../../../assets/bicentenarioImages/carousel/carousel3.png";
import "./HomeCarousel.css";
import { useState, useRef, useEffect } from "react";

function HomeCarousel() {
    const slides = [
        {
            img: carousel1,
            title: "Slide 1",
        },
        {
            img: carousel2,
            title: "Slide 2",
        },
        {
            img: carousel3,
            title: "Slide 3",
        },
    ];
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperParams = {
            autoplay: {
                delay: 5000,
            },
        };
        Object.assign(swiperRef.current, swiperParams);
        swiperRef.current.initialize();
    }, []);

    return (
        <div className="homeCarousel">
            <swiper-container init="false" navigation ref={swiperRef} loop>
                {slides.map((slide) => (
                    <HomeCarouselSlide key={slide.title} {...slide} />
                ))}
                <div className="swiper-pagination"></div>
            </swiper-container>
        </div>
    );
}

export default HomeCarousel;

function HomeCarouselSlide({ img, title }) {
    return (
        <swiper-slide>
            <div key={title} className="homeCarouselSlide">
                <img src={img} alt={title} />
            </div>
        </swiper-slide>
    );
}
