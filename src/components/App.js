import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { FilmsArray, Film } from './Films';
import { PeopleArray, Person } from './People';
import Home from './Home';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment >
          <div className='container'>
            <NavLink exact to="/" activeClassName="active"><button>Go Home</button></NavLink>
            <NavLink to="/films" activeClassName="active"><button>View Films</button></NavLink>
            <NavLink to="/People" activeClassName="active"><button>View People</button></NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/films/:id" component={Film} />
            <Route path="/films" component={FilmsArray} />
            <Route path="/people/:id" component={Person} />
            <Route path="/people" component={PeopleArray} />
          </Switch>
        </Fragment>
      </Router>
    );
  };
};

export default App;