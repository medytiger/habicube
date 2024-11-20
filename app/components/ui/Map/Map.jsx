import React from 'react';
import ReactDOMServer from 'react-dom/server'; // Import ReactDOMServer to render JSX as HTML
import { DivIcon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from './Map.module.css';
import "leaflet/dist/leaflet.css";

// Create a custom icon using DivIcon
const CustomIcon = new DivIcon({
    html: ReactDOMServer.renderToString(<FaMapMarkerAlt style={{ color: '#eb026f', fontSize: '34px', position: "absolute", left: '-.75rem', top: '-1.6rem' }} />),
});

export default function Map({ center }) {
    return (
        <MapContainer
            center={center || [51.505, -0.09]} // Default to London if no center is passed
            zoom={center ? 4 : 2}
            scrollWheelZoom={false}
            className={styles.mapStyle}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {center && (
                <Marker position={center} icon={CustomIcon} />
            )}
        </MapContainer>
    );
}
