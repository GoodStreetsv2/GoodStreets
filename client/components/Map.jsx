import React, { useMemo } from "react";
require("dotenv").config();

import {
  GoogleMap,
  useLoadScript,
  // useJsApiLoader,
  // DrawingManager,
  Marker,
} from "@react-google-maps/api";
// import { loadPins } from "../state/pinSlice";
// import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const { isLoaded } = useLoadScript({
    //WE CAN'T FIGURE OUT DOTENV
    googleMapsApiKey: "AIzaSyAghnr9bGclN1B-LAkwKOYfHpyqPiZtZKk",
    // googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div> Loading...</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: 40.74, lng: -73.99 }), []);
  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
