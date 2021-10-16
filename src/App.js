import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FilterPhase from './components/FilterPhase/App';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {LandingPage} />
        <Route exact path="/filter" component = {FilterPhase} />
      </Switch>
    </Router>
  );
}

export default App;
