import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FilterPhase from './components/FilterPhase/App';
import BanPhase from './components/BanPhase';
import DecisionPhase from './components/decisionPhase';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {LandingPage} />
        <Route exact path="/filter" component = {FilterPhase} />
        <Route exact path='/ban' component = {BanPhase} />
        <Route exact path='/final' component = {DecisionPhase} />
      </Switch>
    </Router>
  );
}

export default App;
