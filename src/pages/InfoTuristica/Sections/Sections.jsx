import { Link } from "react-router-dom";
import Sucre from "../../../assets/timelineImages/sucre1.jpg";
import Sucre2 from "../../../assets/timelineImages/sucre2.jpg";
import "./Sections.css";
import { motion } from "framer-motion";

export const Sections = () => {
    return (
        <div className="infoTuristica">
            <SectionBanner
                title="Oferta de servicios turísticos"
                description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime veritatis nisi ullam pariatur dignissimos tempore eius eveniet ad corporis nesciunt, earum blanditiis. Praesentium commodi tempore architecto, repellendus placeat harum distinctio."
                }
                image={Sucre}
                to={"servicios"}
                place={"left"}
            />
            <SectionBanner
                title="Turismo Comunitario Vivencial"
                description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime veritatis nisi ullam pariatur dignissimos tempore eius eveniet ad corporis nesciunt, earum blanditiis. Praesentium commodi tempore architecto, repellendus placeat harum distinctio."
                }
                image={Sucre2}
                to={"turismo"}
                place={"right"}
            />
        </div>
    );
};

function SectionBanner({ title, description, image, to, place }) {
    return (
        <div className="sectionBanner">
            <div className={`sectionBanner-content`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={to}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.9,
                        }}
                    >
                        Ver más
                    </motion.button>
                </Link>
            </div>
            <div className={`sectionBanner-img ${place}`}>
                <img src={image} alt="" />
            </div>
        </div>
    );
}
