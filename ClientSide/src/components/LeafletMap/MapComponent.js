import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icons for markers
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = ({ originLatLng, destinationLatLng }) => {
  // Array of positions for the polyline
  const positionArray = [
    [originLatLng.latitude, originLatLng.longitude],
    [destinationLatLng.latitude, destinationLatLng.longitude],
  ];

  // Center the map between the origin and destination
  const center = [
    (originLatLng.latitude + destinationLatLng.latitude) / 2,
    (originLatLng.longitude + destinationLatLng.longitude) / 2,
  ];

  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{ height: "14rem", width: "100%" }}
    >
      {/* Add a TileLayer (the background map) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Origin Marker */}
      <Marker position={positionArray[0]} icon={markerIcon}></Marker>

      {/* Destination Marker */}
      <Marker position={positionArray[1]} icon={markerIcon}></Marker>

      {/* Line between origin and destination */}
      <Polyline positions={positionArray} color="blue" />
    </MapContainer>
  );
};

export default MapComponent;
