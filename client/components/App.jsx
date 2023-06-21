import React from "react";
import NavBar from './NavBar.jsx';
import Map from './Map.jsx';

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
