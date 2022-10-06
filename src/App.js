import logo from './logo.svg';
import './App.css';
import Landing from './page/landing';
import Login from './page/login';
import Register from './page/register';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Profile from './page/Profile';
import Dashboard from './page/dashboard';
import Pengobatan from './page/Pengobatan';
import Dukun from './page/dukun';
import Tabib from './page/tabib';
import Penghusada from './page/penghusada';
import Balian from './page/balian';

function App() {
  return (
    <div className='App'> 
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/pengobatan" component={Pengobatan} />
        <Route exact path="/dukun" component={Dukun} />
        <Route exact path="/tabib" component={Tabib} />
        <Route exact path="/penghusada" component={Penghusada} />
        <Route exact path="/balian" component={Balian} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
