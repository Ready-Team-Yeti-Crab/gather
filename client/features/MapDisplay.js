import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// DOCUMENTATION
// Places API
// https://developers.google.com/maps/documentation/places/web-service/search-nearby

// @react-google-maps/api - Careful! There is a google-maps-react package that is deprecated, make sure you're looking at this version if you check documentation
// https://react-google-maps-api-docs.netlify.app/

const containerStyle = {
  width: '800px',
  height: '800px',
  borderRadius: '10px',
  border: '1px solid grey',
};

const center = {
  lat: 40.747592210736535,
  lng: -73.99312081547488,
};

const onLoad = (marker) => {
  console.log('marker: ', marker);
};

function MapDisplay() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker
          onLoad={onLoad}
          position={center}
          animation='bounce'
          clickableIcons='./assets/gather_logo.png'
        />
      </GoogleMap>
    </LoadScript>
  );
}
// const HangTypes ={
// foodAndFun : "bar",
// study : "cafe",
// activity : "tourist_attraction",
// }

export default React.memo(MapDisplay);
