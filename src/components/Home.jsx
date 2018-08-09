import React, { Component } from 'react';
import logo from '../assets/logo.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="logo" height="400px" />
            </div>
        );
    }
}

export default Home;