import { axiosInstance } from "./Instance";

export async function getGruposProyectos() {
    const response = axiosInstance.get("grupos", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        params: {
            "populate[proyectos][populate][imagenPrincipal][fields][0]": "url",
            "populate[proyectos][populate][galeria][fields]": "url",
            "populate[proyectos][populate][videoMaqueta][fields][0]": "url",
            "populate[colors]": "*",
        },
    });
    const data = (await response).data.data.map((grupoProyecto) =>
        formatGrupoProyecto(grupoProyecto)
    );
    return data;
}

function formatGrupoProyecto(grupoProyecto) {
    const grupoProyectoAttributes = grupoProyecto.attributes;
    return {
        titulo: grupoProyectoAttributes.titulo,
        colores: {
            bannerColor: grupoProyectoAttributes.colors.bannerColor,
            textColor: grupoProyectoAttributes.colors.textColor,
        },
        proyectos: grupoProyectoAttributes.proyectos.data?.map((proyecto) => {
            const proyectoAttributes = proyecto.attributes;
            return {
                titulo: proyectoAttributes.titulo,
                descripcion: proyectoAttributes.descripcion,
                montoInversion: proyectoAttributes.montoInversion,
                imagenPrincipal:
                    proyectoAttributes.imagenPrincipal.data.attributes.url,
                galeria: proyectoAttributes.galeria.data?.map((imagen) => {
                    return imagen.attributes.url;
                }),
                videoMaqueta:
                    proyectoAttributes.videoMaqueta.data?.attributes.url,
            };
        }),
    };
}
