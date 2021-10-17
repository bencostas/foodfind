import logo from '../foodfind-logo.png';
import './LandingPage.css';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import useGeolocation from './useGeoLocation';
// import {
//   BrowserRouter as Router, Route, Switch, Link, BrowserRouter
// } from 'react-router-dom';



function LandingPage() {

  let history = useHistory();
  const location = useGeolocation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" className="logo"/> 
        <p>
        Decide what you want to eat with your friends!
        </p>

        <div className = "locationTest">{
          location.loaded ? JSON.stringify(location) 
          : "Location data not available"
        }</div>
        <button onClick={() => {
          history.push("/filter");
        }} className="startButton" > 
          Start Search
        </button>
      </header> 
    </div>
  );
}

export default LandingPage;
