import "./InfoCard.css";
import useNav from "../../hooks/useNav";
import useInfoCard from "../../hooks/useInfoCard";
import { IconoirProvider, Cancel } from "iconoir-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function InfoCard() {
    const { infoCard, setInfoCard } = useInfoCard();
    const { title, content, image } = infoCard;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="infoCard">
            <div className="infoContent">
                <Link to="/..">
                    <button
                        className="infoCard-close"
                        onClick={() => {
                            setInfoCard({ clicked: false });
                        }}
                    >
                        <IconoirProvider>
                            <Cancel />
                        </IconoirProvider>
                    </button>
                </Link>
                <div className="infoCard-img">
                    <img src={image} alt="" />
                    <div className="infoCard-title">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="infoCard-content">
                    {content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
