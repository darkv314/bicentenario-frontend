import { Banner } from "../../../views/VideoBanner/VideoBanner";
import TimeLine from "../../../views/TimeLine/TimeLine";
import About from "../../../assets/homeImages/about.jpg";
import portada from "../../../assets/logos/portada.jpg";
import logoQuique from "../../../assets/logos/quiqueHorizontal.png";
import { Link } from "react-router-dom";
import VideoBanner from "../../../assets/video/videoBanner.webm";

export const Landing = () => {
    return (
        <div className="home">
            <Banner src={VideoBanner} />
            <Vision />
            <TimeLine />
            <BookBanner />
            <Footer />
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
            <div className="background-banner">
                <div className="bookBanner-img">
                    <img src={portada} alt="" />
                </div>
                <div className="bookBanner-content">
                    <h2>El Horizonte del Bicentenario</h2>
                    <p>Descarga el libro en formato pdf y de forma gratuita</p>
                    <button onClick={handleClick}>Mira el libro aquí</button>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <div className="footer-img">
                <img src={logoQuique} alt="" />
            </div>
            <div className="line"></div>
            <div className="footer-content">
                Copyright 2023 © | Desarrollado por{" "}
                <Link to={"https://inextensosrl.com/"}>In Extenso S.R.L.</Link>
            </div>
        </footer>
    );
}
