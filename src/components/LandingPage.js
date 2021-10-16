import logo from '../foodfind-logo.png';
import './LandingPage.css';
import FilterPhase from './FilterPhase';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" className="logo"/> 
        <p>
        Decide what you want to eat with your friends!
        </p>
        <button className="startButton" onclick={FilterPhase}>
          Start Search
        </button>
      </header> 
    </div>
  );
}

export default LandingPage;
