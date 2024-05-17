import { useRef, useEffect } from "react";
import "./MapComponent.css";
import { coordenadas } from "./data";
import ubicacionMorada from "../../../assets/bicentenarioImages/menuMap/ubicaciones/ubicacionMorada.png"

function MapComponent({ width, height, points }) {
    const mapContainer = useRef(null);
    let map = {};
    useEffect(() => {
        map = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/hybrid/style.json?key=${import.meta.env.VITE_MAP_KEY
                }`,
        });
        map.on("load", async () => {
            coordenadas.forEach((coordenada) => {
                const newTooltip = document.createElement("div");
                newTooltip.className = "map-tooltip";
                newTooltip.id = `tooltip${coordenada.nombre}`;
                newTooltip.innerHTML = `<p>${coordenada.nombre}</p>`
                const newMarker = document.createElement("div");
                newMarker.className = "map-marker";
                newMarker.style.backgroundImage = `url(${coordenada.img})`;
                newMarker.popovertarget = `tooltip${coordenada.nombre}`
                new maplibregl.Marker({ element: newMarker })
                    .setLngLat([coordenada.lng, coordenada.lat])
                    .addTo(map);
            })
            map.addSource("lines", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            properties: {
                                color: "#EA5A03", // orange
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: [
                                    [-65.26046744934783, -19.047941788253148],
                                    [-65.25951940050415, -19.048730027863545],
                                    [-65.2587796096432, -19.047804757266437],
                                    [-65.25967953815822, -19.047071359402775],
                                    [-65.26046744934783, -19.047941788253148],
                                ],
                            },
                        },
                        {
                            type: "Feature",
                            properties: {
                                color: "#571F7A", // purple
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: [
                                    [-65.27026584785065, -19.042878703368427],
                                    [-65.27147055541329, -19.043525100665324],
                                    [-65.2715475569165, -19.044030317553975],
                                    [-65.2713798757463, -19.04461363428182],
                                    [-65.27206775839177, -19.04571118517324],
                                    [-65.27203682480472, -19.045934257374405],
                                    [-65.27171049353754, -19.04660611719074],
                                    [-65.27168279353756, -19.046873775700227],
                                    [-65.27182071562521, -19.047186981752148],
                                    [-65.27379100848225, -19.04821417308675],
                                    [-65.27351890405386, -19.049596839438],
                                    [-65.27393707920059, -19.05028067892264],
                                    [-65.27504705985947, -19.051087342897134],
                                    [-65.27511160431436, -19.05193803906496],
                                    [-65.27488255793615, -19.052775263610776],
                                    [-65.27494269598849, -19.05306573995818],
                                    [-65.27562588623135, -19.054148809896127],
                                    [-65.27562817143097, -19.05448994561201],
                                    [-65.27518159293544, -19.055399659311554],
                                    [-65.27524024934327, -19.05610856366158],
                                    [-65.27488451377974, -19.056762674944192],
                                    [-65.27424546137986, -19.057167696241745],
                                ],
                            },
                        },
                    ],
                },
            });
            map.addLayer({
                id: "lines",
                type: "line",
                source: "lines",
                paint: {
                    "line-width": 5,
                    "line-color": ["get", "color"],
                },
            });
            let bounds = [
                [-65.28734823752468, -19.062206862382344],
                [-65.23051542193562, -19.04104422838823],
            ];
            map.setMaxBounds(bounds);
        });
    }, []);
    return (
        <div
            ref={mapContainer}
            style={{
                width,
                height,
            }}
            id="map"
        ></div>
    );
}

export default MapComponent;

export function Ubicacion({ img, title }) {
    return (
        <span className="ubicacion">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </span>
    );
}
