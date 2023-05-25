import { Banner } from "../../../views/VideoBanner/VideoBanner";
import TimeLine from "../../../views/TimeLine/TimeLine";
import About from "../../../assets/homeImages/about.jpg";
import portada from "../../../assets/logos/portada.jpg";
import libro from "../../../assets/docs/Cartilla7AsambleaConstituyenteBicentenario.pdf";

export const Landing = () => {
    return (
        <div className="home">
            <Banner />
            <Vision />
            <TimeLine />
            <BookBanner />
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

function BookBanner() {
    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/11qI6qw69--E1qJislqyfkQBUZ6nqF_IU/view?usp=share_link"
        );
    };
    return (
        <div className="bookBanner">
            <div className="bookBanner-img">
                <img src={portada} alt="" />
            </div>
            <div className="bookBanner-content">
                <h2>El Horizonte del Bicentenario</h2>
                <p>Descarga el libro en formato pdf y de forma gratuita</p>
                <button onClick={handleClick}>Mira el libro aquí</button>
            </div>
        </div>
    );
}
