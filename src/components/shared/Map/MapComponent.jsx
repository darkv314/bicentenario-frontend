import { useRef, useEffect } from "react";
import "./MapComponent.css";

function MapComponent({ width, height, points }) {
    const mapContainer = useRef(null);
    let map = {};
    useEffect(() => {
        map = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/hybrid/style.json?key=${
                import.meta.env.VITE_MAP_KEY
            }`,
        });
        map.on("load", async () => {
            const image = await map.loadImage(
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png"
            );
            map.addImage("cat", image.data);
            // TODO: Add logic to implement points sent as props
            map.addSource("point", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [-65.25964, -19.04806],
                            },
                        },
                    ],
                },
            });
            map.addSource("lines", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            properties: {
                                color: "#F7455D", // red
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
                    ],
                },
            });
            // map.rotateTo(-45);
            map.addLayer({
                id: "points",
                type: "symbol",
                source: "point",
                layout: {
                    "icon-image": "cat",
                    "icon-size": 0.25,
                },
            });
            map.addLayer({
                id: "lines",
                type: "line",
                source: "lines",
                paint: {
                    "line-width": 5,
                    // Use a get expression (https://maplibre.org/maplibre-style-spec/expressions/#get)
                    // to set the line-color to a feature property value.
                    "line-color": ["get", "color"],
                },
            });
            let bounds = [
                [-65.28734823752468, -19.060206862382344],
                [-65.22051542193562, -19.04404422838823],
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
