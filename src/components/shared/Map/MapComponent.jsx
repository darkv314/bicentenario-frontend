import { useRef, useEffect } from "react";
import "./MapComponent.css";

function MapComponent({ width, height, points }) {
    const mapContainer = useRef(null);
    let map = {};
    useEffect(() => {
        map = new maplibregl.Map({
            container: mapContainer.current,
            style: "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
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
                                coordinates: [-63, -18],
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
