import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Clients from './pages/Clients';
import AddClient from './pages/AddClient';
import EditClient from './pages/EditClient';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/"  component={Clients} />
            <Route path="/addclient"  component={AddClient} />
            <Route path="/editclient/:id" component={EditClient} />

        </Switch>
    </Router>
  );
}

export default App;
