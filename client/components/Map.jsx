import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  // useJsApiLoader,
  // DrawingManager,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import FormModal from "./FormModal";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPins,
  // addPin,
  // updateClickedPin,
  updateNoPinClicked,
} from "../state/pinSlice";
import {  updateLatitude,
  updateLongitude,
  updateAddress} from '../state/formSlice'



export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div> Loading...</div>;
  return <Map />;
}

function Map() {
  const dispatch = useDispatch();
  const [infoWindowID, setInfoWindowID] = useState("");

  // Initial pin data fetch to set state
  useEffect(() => {
    const fetchPins = async () => {
      const res = await fetch("/pin");
      const data = await res.json();
      dispatch(loadPins(data));
    };
    fetchPins();
  }, []);

  const allPins = useSelector((state) => state.pin.pins);

  // Map marker array
  const pinsToLoad = allPins.map((marker, index) => {
    // console.log(marker)
    const { latitude, longitude, name, _id, pin_name, address, content } = marker;
    if (name) {
      return (
        <Marker
          position={{ lat: Number(latitude), lng: Number(longitude) }}
          name={name}
          key={_id}
          icon={{
            url: require(`../assets/${name}.png`),
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          onClick={() => {
            setInfoWindowID(_id);
          }}
          className="Icon"
        >
          {infoWindowID === _id && (
            <InfoWindow onCloseClick={() => setInfoWindowID('')} >
              <div className="info-window" >
              <h3>{pin_name}</h3>
              <label><strong>Address: </strong></label>
                <p>{address}</p>
              <label><strong>Review: </strong></label>
                <p>{content}</p>
              </div>
          </InfoWindow>
          )}
          </Marker>
      );
    }
  });

  // // Clicked pin from state set by clicking on pin in Navbar
  const currentPin = useSelector((state) => state.pin.clickedPin);
  const noPinClicked = useSelector((state) => state.pin.noPinClicked);

  // Click on the map to add new pin to state and send POST request to add pin to database
    // Updated to set state with coordinates and address
      // Send POST request in new onSubmit function
  const handleClick = async (e) => {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();
    // const coordinates = e.latLng.lat() + "," + e.latLng.lng();
    const coordinates = latitude + ',' + longitude;
    const addFetch = await fetch("/pin/geocode", {
      method: "POST",
      body: JSON.stringify({ latlng: coordinates }),
      headers: { "Content-Type": "application/json" },
    });
    const address = await addFetch.json();

    dispatch(updateAddress(address));
    dispatch(updateLatitude(latitude));
    dispatch(updateLongitude(longitude));

    // Don't store in database unless pin has been selected
    if (!currentPin) {
      dispatch(updateNoPinClicked(true));
      return;
    }
  };

  const containerStyle = {
    width: "1000px",
    height: "600px",
  };

  const center = { lat: 40.7477503, lng: -73.9959531 };

  return (
    <>
      {noPinClicked && 
      <p style={{ color: 'red', fontSize: '36px' }} >Please select a pin</p>}
    <GoogleMap
      zoom={16}
      center={center}
      onClick={(e) => handleClick(e)}
      mapContainerClassName="map-container"
      mapContainerStyle={containerStyle}
      // option={options}
    >
      {/* <Marker position={{lat: 40.7477463, lng: -73.9933782}} icon={{ url: (require('../assets/codesmith.png')), scaledSize: new window.google.maps.Size(70, 70) }} /> */}
      {pinsToLoad}
      </GoogleMap>
      <FormModal/>
    </>
  );
}
