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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/pengobatan" component={Pengobatan} />
      </Switch>
    </Router>
  );
}

export default App;
