import { Link } from "react-router-dom";
import { Banner } from "../../views/VideoBanner/VideoBanner";
import TimeLine from "../../views/TimeLine/TimeLine";
import "./Home.css";
import useNav from "../../hooks/useNav";
import { useWindowWidth } from "@react-hook/window-size";

function Home() {
    return (
        <div className="home">
            <Banner />
            <Vision />
            <TimeLine />
        </div>
    );
}

export default Home;

function Vision() {
    return (
        <div className="vision">
            <h1>Nuestra vision</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                eaque! Dicta expedita nihil magni alias inventore deleniti
                itaque voluptatem eos modi repellat? A quos aperiam
                exercitationem quo impedit commodi culpa.
            </p>
        </div>
    );
}
