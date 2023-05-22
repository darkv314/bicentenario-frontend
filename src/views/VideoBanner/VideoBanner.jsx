import BannerVideo from "../../assets/video/banner.webm";
import "./VideoBanner.css";

export const Banner = () => {
    return (
        <div className="banner">
            <video src={BannerVideo} autoPlay muted loop></video>
            <div className="banner-content">
                <h1>Bicentenario</h1>
            </div>
        </div>
    );
};
