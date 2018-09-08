import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

const OnePerson = (props) => {
    let personDisplay = [];
    for (const [property, info] of props.person) {
        personDisplay.push(<div key={property}>{property}: {info}{'\n'}</div>)
    }
    return <div><hr />{personDisplay}</div>
}

export { OnePerson };