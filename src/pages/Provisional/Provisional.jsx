import React from "react";
import { Link } from "react-router-dom";
import "./Provisional.css";
import alcalde from "../../assets/previewImages/alcalde.png";
import corredor from "../../assets/previewImages/corredor.png";

function Provisional() {
    const videoSrc =
        "https://drive.google.com/file/d/16DabOYJUpY0ncP5q4TIFdoETKXgmJrO0/preview";
    return (
        <div className="provisional-container">
            <div className="corredor-container">
                <img src={corredor} alt="" />
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
