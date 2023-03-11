import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.747592210736535,
  lng: -73.99312081547488
};

function MapDisplay() {
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
    <div>

    </div>
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapDisplay)