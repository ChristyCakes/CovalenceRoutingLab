import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Film from './Film.jsx'


class Films extends Component {
    constructor() {
        super();
        this.state = { filmCards: [] }
    };

    componentDidMount() {
        let filmInfo = [];
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(filmsArray => {
                for (let i of filmsArray) {
                    i = {
                        key: i.id,
                        title: i.title,
                        director: i.director,
                        description: i.description
                    }
                    filmInfo.push(i);
                }
            }).then(() => {
                this.setState(
                    {
                        filmCards:
                            (filmInfo).map(obj => {
                                return (
                                    <div key={obj.key}>
                                        <Card >
                                            <CardContent>
                                                <Typography variant="headline">{obj.title}</Typography>
                                                <Typography>Directed By: {obj.director}</Typography>
                                                <Typography color="textSecondary">{obj.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })
                    }
                );
            }).catch(e => console.log(e));
    };

    render() {
        return (
            <div>
                <Router>
                    <Fragment >
                        <Link to="/films/:id" style={{ textDecoration: "none" }}><div>{this.state.filmCards}</div></Link>
                        <Switch>
                            <Route path="/films/:id" component={Film} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>

        );
    }
}

export default Films;