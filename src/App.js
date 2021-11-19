import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Clients from './pages/Clients';
import AddClient from './pages/AddClient';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/"  component={Clients} />
            <Route path="/addclient"  component={AddClient} />
        </Switch>
    </Router>
  );
}

export default App;
