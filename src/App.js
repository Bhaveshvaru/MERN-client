import React from 'react';
import './App.css';
import Home from './container/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './container/Signin';
import Signup from './container/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
