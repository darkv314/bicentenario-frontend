import { ServiciosList } from "./Data/Data";
import "./Turismo.css";

function Turismo() {
    return (
        <div className="turismo">
            {ServiciosList.map((servicio) => (
                <Section
                    items={servicio.items}
                    title={servicio.title}
                    key={servicio.id}
                    image={servicio.image}
                    description={servicio.description}
                />
            ))}
        </div>
    );
}

export default Turismo;

function Section({ title, image, items, description }) {
    return (
        <div className="section-turismo">
            <h2>{title}</h2>
            <div className="section-items-turismo">
                <div className="section-img-turismo">
                    <img src={image} alt="" />
                </div>
                <div className="section-content-turismo">
                    <p>{description}</p>
                    <ul>
                        {items?.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
