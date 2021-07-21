import React from "react";
import GoogleMap from 'google-map-react';
import MarkerComponent from "./MarkerComponent";

export default function MapContainer({markers}) {
    return <GoogleMap
        bootstrapURLKeys={{key: ''}}
        defaultCenter={{lat: 40.4381311, lng: -3.8196194}}
        defaultZoom={7}
        yesIWantToUseGoogleMapApiInternals
    >
        {markers.map((marker, i) =>
            <MarkerComponent key={i}
                             lat={marker.position.lat}
                             lng={marker.position.lng}
                             marker={marker}/>
        )}
    </GoogleMap>
}