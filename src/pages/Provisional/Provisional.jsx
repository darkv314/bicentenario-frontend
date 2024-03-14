import React from "react";
import { Link } from "react-router-dom";
import "./Provisional.css";
import alcalde from "../../assets/previewImages/alcalde.png";
import corredor from "../../assets/previewImages/corredor.png";
import { Banner } from "../../views/VideoBanner/VideoBanner";
import VideoBanner from "../../assets/video/videoBannerEdit.mp4";

function Provisional() {
    const videoSrc =
        "https://drive.google.com/file/d/1qFmxKjK5q9M0faqkbjYe70mm6_zOOo0n/preview";
    return (
        <div className="provisional-container">
            <div className="corredor-container">
                <img src={corredor} alt="" />
                <Banner src={VideoBanner} />
            </div>
            <iframe
                style={{ height: "60dvh" }}
                src={videoSrc}
                width="100%"
                allow="autoplay"
                title="Corredor Urbano: Parques"
            ></iframe>
            <div className="alcalde-container">
                <img src={alcalde} alt="" />
            </div>
        </div>
    );
}

export default Provisional;
