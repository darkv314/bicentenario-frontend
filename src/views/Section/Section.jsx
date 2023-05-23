import { Link } from "react-router-dom";
import "./Section.css";
import { LinkButton } from "../../components/button/LinkButton/LinkButton";

export const Section = ({ title, items }) => {
    return (
        <div className="section">
            <h2>{title}</h2>
            <div className="section-items">
                {items?.map((item) => (
                    <ItemSection
                        img={item.image}
                        description={item.description}
                        link={item.link}
                        title={item.title}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

function ItemSection({ img, title, description, link }) {
    return (
        <div className="itemSection">
            <div className="itemSection-img">
                <img src={img} alt="" />
            </div>
            <div className="itemSection-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <LinkButton content="Ver más" link={link} />
            </div>
        </div>
    );
}
