import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [36.7173, 10.2881]; // Tunis coordinates
const zoom = 13;

function App() {
  return (
    <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Tunis</Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;

