import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link } from 'react-router-dom';


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
                    filmsArray: films.map(film => {
                        return (
                            // set a key value with the film's pre-set id, use ...spread operator to grab all the objects for each film
                            <FilmsCards key={film.id} {...film} />
                        );
                    })
                });
            })
            .catch(e => console.log(e));
    };
    render() {
        // render cards by calling state between divs
        return (<div>{this.state.filmsArray}</div>)
    }
}


// ------------------- 2nd Component: display array of film cards  -------------------------------

// from all the objects in the film array, grab only 4 key/value properties 
const FilmsCards = ({ id, title, director, description }) => {
    return (
        <div>
            {/* make each card a link, using the film id as the endpoint */}
            <Link to={`/films/${id}`} style={{ textDecoration: "none" }}>
                <Card >
                    <CardContent>
                        <Typography variant="headline">{title}</Typography>
                        <Typography>Directed By: {director}</Typography>
                        <Typography color="textSecondary">{description}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}


// -------------------------  3rd Component retrieve, display one film when card is clicked -----------------
class Film extends Component {
    constructor() {
        super();
        this.state = { film: {} }
    }
    componentDidMount() {
        // retrieve API data on the clicked film (match is passed in the route)
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => {
                // store the individual film object details in state
                this.setState({ film: { ...film } })
            })
            .catch(e => console.log(e));
    }

    render() {
        let filmDeets = [];
        if (this.state) {
            for (let key in this.state.film) {
                if (this.state.film.hasOwnProperty(key)) {
                    let detail = key + ": " + this.state.film[key]
                    filmDeets.push(detail)
                }
            }
        }
        let display = filmDeets.join("\n")
        console.log(display)
        return <div>{display}</div>
    }
}

export { FilmsArray, FilmsCards, Film };

// Questions:
// how can I shorten this.props.match.params.id?
// should I create a 4th component to display the one clicked film?