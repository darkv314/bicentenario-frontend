import { Link } from "react-router-dom";
import "./LinkButton.css";
import { motion } from "framer-motion";

export const LinkButton = ({ content, link }) => {
    return (
        <Link to={link}>
            <motion.button
                className="linkButton"
                whileHover={{
                    scale: 1.03,
                }}
                whileTap={{ scale: 0.9 }}
            >
                {content}
            </motion.button>
        </Link>
    );
};
