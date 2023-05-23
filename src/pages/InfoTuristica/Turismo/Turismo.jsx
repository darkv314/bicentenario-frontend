import { Section } from "../../../views/Section/Section";
import { ServiciosList } from "./Data/Data";

function Turismo() {
    return (
        <div className="turismo">
            {ServiciosList.map((servicio) => (
                <Section
                    items={servicio.items}
                    title={servicio.title}
                    key={servicio.id}
                />
            ))}
        </div>
    );
}

export default Turismo;
