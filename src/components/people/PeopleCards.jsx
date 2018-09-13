import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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

export { PeopleCards };