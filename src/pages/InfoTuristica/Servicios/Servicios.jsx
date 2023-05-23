import { Section } from "../../../views/Section/Section";
import { ServiciosList } from "./Data/Data";

export const Servicios = () => {
    return (
        <div className="servicios">
            {ServiciosList.map((servicio) => (
                <Section
                    items={servicio.items}
                    title={servicio.title}
                    key={servicio.id}
                />
            ))}
        </div>
    );
};
