import React from 'react'
import L from 'leaflet'
import { Marker, Polygon } from 'react-leaflet';

const RoadInner = ({details, coord}) => {
    const center = L.polyline(coord).getBounds().getCenter();
    const text = L.divIcon({html: details});

    return (
        <Marker position={center} icon={text} />
    )
}

export default RoadInner