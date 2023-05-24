import { Banner } from "../../../views/VideoBanner/VideoBanner";
import TimeLine from "../../../views/TimeLine/TimeLine";
import About from "../../../assets/homeImages/about.jpg";

export const Landing = () => {
    return (
        <div className="home">
            <Banner />
            <Vision />
            <TimeLine />
        </div>
    );
};

function Vision() {
    return (
        <div className="vision">
            <div className="vision-content">
                <h2 style={{ fontFamily: `"Agency FB", sans-serif` }}>
                    Sucre, sede del Bicentenario
                </h2>
                <p>
                    El Bicentenario del advenimiento de Bolivia, actual Estado
                    Plurinacional, debe entenderse como la oportunidad para
                    lograr un espacio de inserción de nuestra ciudad en el
                    ámbito mundial, con una mirada renovada.
                </p>
            </div>
            <div className="vision-img">
                <img src={About} alt="" />
            </div>
        </div>
    );
}
