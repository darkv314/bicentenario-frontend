import VideoBanner from "../../assets/video/videoBanner.webm";
import "./VideoBanner.css";
import { useWindowWidth } from "@react-hook/window-size";
import useNav from "../../hooks/useNav";
import LogoBlanco from "../../assets/logos/bicVB.png";

export const Banner = () => {
    const navRef = useNav();
    const navHeight = navRef?.current?.offsetHeight;
    const style = {
        height: `calc(100svh - ${navHeight}px)`,
    };
    return (
        <div className="banner" style={style}>
            <video src={VideoBanner} autoPlay muted loop></video>
            <div className="banner-content">
                <div className="banner-img">
                    <img src={LogoBlanco} alt="" />
                </div>
            </div>
        </div>
    );
};
