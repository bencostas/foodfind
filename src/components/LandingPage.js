import logo from '../foodfind-logo.png';
import './LandingPage.css';
import React from 'react';
import {useHistory} from 'react-router-dom';
// import {
//   BrowserRouter as Router, Route, Switch, Link, BrowserRouter
// } from 'react-router-dom';


function LandingPage() {

  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" className="logo"/> 
        <p>
        Decide what you want to eat with your friends!
        </p>
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
