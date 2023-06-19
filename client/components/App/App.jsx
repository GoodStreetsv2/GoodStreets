import React from "react";
import NavBar from "C/NavBar";
import Map from "C/Map";

function App() {
  return (
    <div className="App">
      <h1>Good Streets</h1>
      <div className="navbar">
        <NavBar />
      </div>
      <Map />
    </div>
  );
}

export default App;
