import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ErrorComponent from './ErrorComponent.jsx';
import MyMapComponent from './MyMapComponent.jsx';
import Spinner from './Spinner.jsx';

function Map() {


  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;




const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <MyMapComponent center={center} zoom={zoom} />;
  }
};




  return (
    <div>  <Wrapper apiKey={"AIzaSyAPfQJ7-LyDUy6Qhesv_iNeSGXUZzHc6sk"} render={render} />

    </div>
  );
}

export default Map;


//AIzaSyAPfQJ7-LyDUy6Qhesv_iNeSGXUZzHc6sk

