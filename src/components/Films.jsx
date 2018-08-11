import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Film from './Film.jsx'


class Films extends Component {
    constructor() {
        super();
        this.state = { cards: [] }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(films => {
                this.setState({
                    cards: films.map(film => {
                        return (
                            <Link to={`/films/${film.id}`} style={{ textDecoration: "none" }} key={film.id}>
                                <Card >
                                    <CardContent>
                                        <Typography variant="headline">{film.title}</Typography>
                                        <Typography>Directed By: {film.director}</Typography>
                                        <Typography color="textSecondary">{film.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    }),
                });
            })
            .catch(e => console.log(e))
    };

    render() {
        return (
            <div>
                {this.state.cards}
                <Router >
                    <Fragment >
                        <Route path="/films/:id" component={Film} />
                    </Fragment>
                </Router>
            </div>
        )
    }
}

export default Films;