import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

// class Film extends Component {
//     componentDidMount() {
//         fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(e => console.log(e));
//     }

//     render() {
//         return (
//             <div>
//                 <p>one movie displayed here</p>
//             </div>
//         )

//     }
// }

const Film = ({ match }) => {
    console.log(match.params.id)
    return <h1>Hello {match.params.id}</h1>
}


export default Film;