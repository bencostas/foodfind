import logo from '../foodfind-logo.png';
import './LandingPage.css';
import FilterPhase from './FilterPhase/App';
import {
  BrowserRouter as Router, Route, Switch, Link, BrowserRouter
} from 'react-router-dom';


function LandingPage() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" className="logo"/> 
        <p>
        Decide what you want to eat with your friends!
        </p>
        <button className="startButton" onClick='./FilterPhase'>
          Start Search
        </button>
          <Link to='./FilterPhase' component={FilterPhase}>
            Start Search
          </Link>
      </header> 
    </div>
    </Router>
  );
}

export default LandingPage;
