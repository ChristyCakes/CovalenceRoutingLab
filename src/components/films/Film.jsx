import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { OneFilm } from './OneFilm'

// -------------------------  3rd Component retrieve one film when card is clicked -----------------
class Film extends Component {
    constructor() {
        super();
        this.state = { film: [] }
    }
    componentDidMount() {
        // retrieve API data on the clicked film (match is passed in the route)
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => {
                // set state with the film objects by converting it to an array of arrays
                this.setState({ film: Object.entries(film) })
            })
            .catch(e => console.log(e));
    }
    render() {
        // pass film data to next component
        return <OneFilm film={this.state.film} />
    }
}

export { Film };