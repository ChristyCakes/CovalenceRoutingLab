import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Person from './Person'

class People extends Component {
    constructor() {
        super();
        this.state = { cards: [] }
    };

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(people => {
                this.setState({
                    cards: people.map(person => {
                        return (
                            <Card key={person.id}>
                                <CardContent>
                                    <Typography variant="headline">{person.name}</Typography>
                                    <Typography>{person.gender}</Typography>
                                    <Typography color="textSecondary">Age: {person.age}</Typography>
                                </CardContent>
                            </Card>)
                    })
                })
            })
            .catch(e => console.log(e));
            }
    

        render() {
                    return(
                <div>
                <div>{this.state.cards}</div>
                </div >
            );
    }
}

export default People;