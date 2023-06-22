import React, { useMemo, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  // useJsApiLoader,
  // DrawingManager,
  Marker,
} from "@react-google-maps/api";
// import { loadPins } from "../state/pinSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadPins, addPin } from '../state/pinSlice';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div> Loading...</div>;
  return <Map />;
}

function Map() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPins = async () => {
      const res = await fetch('/pin');
      const data = await res.json();
      dispatch(loadPins(data));
    }
    fetchPins();
  }, []);


  const allPins = useSelector(state => state.pin.pins);
  // console.log(allPins)
  const pinsToLoad = allPins.map(marker => {
    const { latitude, longitude, name, _id } = marker;
    // label - MarkerLabel object
    // icon for foreground - string url?
    if (name) {
      return <Marker position={{ lat: Number(latitude), lng: Number(longitude) }} name={name} key={_id} icon={{ url: (require(`../assets/${name}.png`)), scaledSize: new window.google.maps.Size(60, 60) }} />
    } else {
      return <Marker position={{ lat: Number(latitude), lng: Number(longitude) }} key={_id} icon={{ scaledSize: new window.google.maps.Size(60, 60) }} />
    }

  });
  console.log(pinsToLoad);

  // Clicked pin from state set by clicking on pin in Navbar
  const currentPin = useSelector((state) => state.pin.clickedPin);

  // Click on the map to add new pin to state and send POST request to add pin to database
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

  const containerStyle = {
    width: '2000px',
    height: '1000px'
  };

  const center = {lat: 40.7477463, lng: -73.9933782}

  // const center = useMemo(() => ({ lat: 40.74, lng: -73.99 }), []);
  // console.log(center)
  return (
    <GoogleMap
      zoom={16}
      center={center}
      onClick={(e) => handleClick(e)}
      mapContainerClassName="map-container"
      mapContainerStyle = {containerStyle}
    >
      <Marker position={{lat: 40.7477463, lng: -73.9933782}} icon={{ url: (require('../assets/codesmith.png')), scaledSize: new window.google.maps.Size(187.2, 52.8) }} />
      {pinsToLoad}
    </GoogleMap>
  );
}
