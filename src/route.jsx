import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Layout from './layout/layout';


export default class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Route component={ Layout }/>
            </Router>
        );
    }
} 

