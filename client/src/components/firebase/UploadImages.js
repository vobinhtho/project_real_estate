import React, { Component ,useState} from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const MyComponent =({ saveMarkers }) =>{
    const [pos, setPos] = useState(null)
    const map = useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setPos(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            saveMarkers([lat, lng]);
        }
    })
    
    return pos === null ? null : (
        <Marker position={pos} icon={icon}  removable editable>
            <Popup>This is your real estate location! </Popup>
        </Marker>
    )
}

const PointMap =()=> {
  
    const [posLat, setPoslat]=useState('');
    const [posLng, setPoslng]=useState('');
    const saveMarkers = (newMarkerCoords) => {
            setPoslat(newMarkerCoords[0]);
            setPoslng(newMarkerCoords[1]);
    };

    console.log(posLat+" "+posLng);
    return ( 
      <div>
        <MapContainer
                center={{ lat: 10.045162, lng: 105.746857 }}
                zoom={13}
                style={{ height: "400px", width: "" }}
                scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <MyComponent saveMarkers={saveMarkers} />
        </MapContainer>
      </div>
    );
}
export default PointMap;
