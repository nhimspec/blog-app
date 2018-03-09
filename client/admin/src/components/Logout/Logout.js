import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../api/Auth';

class Logout extends Component {
    constructor(props) {
        super(props);

        auth.logout();
    }

    render() {
        return (
            <Redirect to='/login' />
        );
    }
}

export default Logout;
