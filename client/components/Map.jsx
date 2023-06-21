import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DrawingManager,
  Marker,
} from "@react-google-maps/api";
import { loadPins } from "../state/pinSlice";
import { useSelector, useDispatch } from "react-redux";


const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 40.747624,
  lng: -73.993109,
};

function Map() {
  const allPins = useSelector((state) => state.pin.pins);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAPfQJ7-LyDUy6Qhesv_iNeSGXUZzHc6sk"
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const arrPins = allPins.map((pin) => {
    // console.log(pin)
    return (
      <Marker draggable={true} position={{ lat: pin.lat, lng: pin.lng }} />
    );
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2.5}
      // gestureHandling= {"cooperative"}
      onLoad={onLoad}
      onUnmount={onUnmount}

      //       onClick={(event) =>
      //   setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() })
      // }
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* <Marker draggable={true} position={markerPosition} /> */}
      {arrPins}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
//AIzaSyAPfQJ7-LyDUy6Qhesv_iNeSGXUZzHc6sk
