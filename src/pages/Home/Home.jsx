import { Link } from "react-router-dom";
import { Banner } from "../../views/VideoBanner/VideoBanner";
import TimeLine from "../../views/TimeLine/TimeLine";
import "./Home.css";
import Sucre from "../../assets/timelineImages/sucre1.jpg";

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
            <div className="vision-content">
                <h2>Nuestra vision</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, eaque! Dicta expedita nihil magni alias inventore
                    deleniti itaque voluptatem eos modi repellat? A quos aperiam
                    exercitationem quo impedit commodi culpa.
                </p>
            </div>
            <div className="vision-img">
                <img src={Sucre} alt="" />
            </div>
        </div>
    );
}
