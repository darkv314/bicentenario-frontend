import { axiosInstance } from "./Instance";

export async function getGruposProyectos() {
    const response = axiosInstance.get("grupos", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        params: {
            "populate[proyectos][populate][imagenPrincipal][fields]": "url",
            "populate[proyectos][populate][galeria][fields][0]": "url",
            "populate[proyectos][populate][galeria][fields][1]": "caption",
            "populate[proyectos][populate][videoMaqueta][fields]": "url",
            "populate[proyectos][populate][palabrasClave][fields]":
                "palabraClave",
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
                    proyectoAttributes?.imagenPrincipal?.data?.attributes.url,
                galeria: proyectoAttributes?.galeria?.data?.map((imagen) => {
                    return {
                        url: imagen.attributes.url,
                        caption: imagen.attributes.caption,
                    };
                }),
                videoMaqueta:
                    proyectoAttributes?.videoMaqueta?.data?.attributes.url,
                palabrasClave: proyectoAttributes?.palabrasClave?.map(
                    (palabraClave) => palabraClave?.palabraClave
                ),
            };
        }),
    };
}
