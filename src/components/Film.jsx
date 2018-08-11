import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Film extends Component {
    constructor() {
        super();
        this.state = { film: {} }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ film: {...data} }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div>
                {/* <p>{this.state.film}</p> */}
                <h1>Individual Film Component</h1>
            </div>
        )

    }
}

export default Film;