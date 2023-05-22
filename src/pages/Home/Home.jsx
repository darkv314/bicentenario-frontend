import { Link } from "react-router-dom";
import { Banner } from "../../views/VideoBanner/VideoBanner";
import TimeLine from "../../views/TimeLine/TimeLine";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Banner />
            <TimeLine />
        </div>
    );
}

export default Home;
