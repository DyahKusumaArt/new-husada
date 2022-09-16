import logo from './logo.svg';
import './App.css';
import Landing from './opening/landing';
import Login from './opening/login';
import Register from './opening/register';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
