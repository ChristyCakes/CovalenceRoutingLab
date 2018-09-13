import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { FilmsArray, Film, Person, PeopleArray, Home } from '../components/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      // set up router routes
      <Router>
        <Fragment >
          <div className='container'>
            {/* use NavLink and activeClassName to enable highlight current page in css.  Make 3 buttons */}
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