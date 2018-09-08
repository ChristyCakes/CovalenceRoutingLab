import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
// route stops here with display of film, so no component to import

// -------------------------  4th Component display one film after card is clicked -----------------
const OneFilm = (props) => {
    // destructure state array for display
    let filmDisplay = [];
    // loop through film data (nested array) to display each pair of info
    for (const [property, info] of props.film) {
        filmDisplay.push(<div key={property}>{property}: {info}{'\n'}</div>)
    }
    return <div><hr />{filmDisplay}</div>
}

export { OneFilm };