import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <div>
            InfoTuristica
            <Link to="servicios">Servicios</Link>
            <Link to="turismo">Turismo</Link>
        </div>
    );
};
