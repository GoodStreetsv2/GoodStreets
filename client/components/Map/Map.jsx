import React from 'react'
import { GoogleMap, useJsApiLoader,DrawingManager, Marker } from '@react-google-maps/api';
// require('dotenv').config();
// const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 40.7366741,
  lng: -73.987158,
};


const centers = [{
  lat: 37.772,
  lng: -122.214
},
{
  lat: 37.672,
  lng: -122.219
},
{
  lat: 37.832,
  lng: -122.424
}];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAPfQJ7-LyDUy6Qhesv_iNeSGXUZzHc6sk',
  })

  const [map, setMap] = React.useState(null)
const [markerPosition, setMarkerPosition] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centers[0]}
        zoom={2.5}
        // gestureHandling= {"cooperative"}
        onLoad={onLoad}
        onUnmount={onUnmount}
   
        onClick={(event) =>
    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() })
  }
>

        { /* Child components, such as markers, info windows, etc. */ }
  <Marker draggable={true} position={markerPosition} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
//AIzaSyAPfQJ7-LyDUy6Qhesv_iNeSGXUZzHc6sk

