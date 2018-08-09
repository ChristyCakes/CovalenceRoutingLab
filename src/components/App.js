import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Home from './Home';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link className="Link" to="/">Go Home</Link> 
          <Link className="Link" to="/films">View Films</Link>
          <Link className="Link" to="/People">View People</Link>
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route path="/films" component={Films}/>
            <Route path="/people" component={People}/>
          </Switch>
        </Fragment>
      </Router>
    );
  };
};

export default App;