import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class PeopleArray extends Component {
    constructor() {
        super();
        this.state = { peopleArray: [] }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peopleArray: data.map(person =>
                        <PeopleCards key={person.id} {...person} />
                    )
                });
            })
            .catch(e => console.log(e));
    };
    render() {
        return (<div>{this.state.peopleArray}</div>)
    }
}

const PeopleCards = ({ id, name, gender, age }) => {
    return (
        <div>
            <Link to={`/people/${id}`} style={{ textDecoration: "none" }}>
                <Card >
                    <CardContent>
                        <Typography variant="headline">{name}</Typography>
                        <Typography>Gender: {gender}</Typography>
                        <Typography color="textSecondary">Age: {age}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}

class Person extends Component {
    constructor() {
        super();
        this.state = { person: [] }
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(person => {
                this.setState({ person: Object.entries(person) })
            })
            .catch(e => console.log(e));
    }
    render() {

        return <OnePerson person={this.state.person} />
    }
}

const OnePerson = (props) => {
    let personDisplay = [];
    for (const [property, info] of props.person) {
        personDisplay.push(<div key={property}>{property}: {info}{'\n'}</div>)
    }
    return <div><hr />{personDisplay}</div>
}

export { PeopleArray, Person };