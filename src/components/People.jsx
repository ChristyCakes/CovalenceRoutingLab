import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class People extends Component {

    componentDidMount() {
        let peopleInfo = [];
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => {
                return response.json();
            })
            .then(peopleArray => {
                for (let i of peopleArray) {
                    i = {
                        key: i.id,
                        name: i.name,
                        gender: i.gender,
                        age: i.age,
                    }
                    peopleInfo.push(i);
                }
            }
            )
    }




    render() {
        return (
            <div>
                <h1>People</h1>
            </div>
        )
    }
}

export default People;