import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import { PeopleCards } from './PeopleCards'

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

export { PeopleArray };