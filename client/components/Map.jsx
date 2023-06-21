import React, { useMemo } from "react";

import {
  GoogleMap,
  useLoadScript,
  // useJsApiLoader,
  // DrawingManager,
  Marker,
} from "@react-google-maps/api";
// import { loadPins } from "../state/pinSlice";
import { useSelector, useDispatch } from "react-redux";
import { addPin } from '../state/pinSlice';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div> Loading...</div>;
  return <Map />;
}
function Map() {
  const currentPin = useSelector((state) => state.pin.clickedPin);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());
    // create action object
    const pins = {
      pin_name: "new_pin",
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
      address: "",
      content: "",
      created_by: "",
      // grab category id from local state
      category_id: currentPin,
    };
    // dispatch action object
    dispatch(addPin(pins));
    // separately, make a post request to /pin
    const res = await fetch("/pin", {
      method: "POST",
      body: JSON.stringify(pins),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };


  const center = useMemo(() => ({ lat: 40.74, lng: -73.99 }), []);
  return (
    <GoogleMap
      zoom={14}
      center={center}
      onClick={(e) => handleClick(e)} mapContainerClassName="map-container"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
