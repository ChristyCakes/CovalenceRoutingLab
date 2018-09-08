import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { OnePerson } from './OnePerson';

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

export { Person };