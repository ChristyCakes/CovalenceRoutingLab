import React, { Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Link } from 'react-router-dom';

// ------------------- 2nd Component: display array of film cards  -------------------------------

// from all the objects in the film array, grab only 4 key/value properties 
const FilmsCards = ({ id, title, director, description }) => {
    return (
        <Fragment >
            {/* make each card a link, using the film id as the route endpoint */}
            <Link to={`/films/${id}`} style={{ textDecoration: "none" }}>
                <Card >
                    <CardContent>
                        <Typography variant="headline">{title}</Typography>
                        <Typography>Directed By: {director}</Typography>
                        <Typography color="textSecondary">{description}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Fragment>
    )
}

export { FilmsCards };