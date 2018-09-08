import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { FilmsCards } from './FilmsCards'

// ---------------- 1st Component: retrieve all films -------------------------------------
class FilmsArray extends Component {
    constructor() {
        super();
        this.state = { filmsArray: [] }
    }
    componentDidMount() {
        // when new page loads after clicking 'view films' button, fetch films data from API
        fetch("https://ghibliapi.herokuapp.com/films")
            // convert data from JSON to JS object
            .then(response => response.json())
            // take that object, which is an array of film objects, and set state with it
            .then(films => {
                this.setState({
                    // map over each film object in the array and send the info to FilmsCards component to display each film in a card
                    filmsArray: films.map(film =>
                        // set a key value with the film's pre-set id, use ...spread operator to grab all the objects for each film
                        <FilmsCards key={film.id} {...film} />
                    )
                });
            })
            .catch(e => console.log(e));
    };
    render() {
        // render cards by calling state between divs
        return (<div>{this.state.filmsArray}</div>)
    }
}

export { FilmsArray };