import React from 'react'
import L from 'leaflet'
import { Marker, Polygon } from 'react-leaflet';

const RoadInner = ({details, coord, title}) => {
    const center = L.polyline(coord).getBounds().getCenter();
    const text = L.divIcon({html: details});

    return (
        <Marker position={center} icon={text} title={title} />
    )
}

export default RoadInner