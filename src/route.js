import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Layout from './layout/layout';
import listener from './listener';

export default class Routers extends React.Component {
    render() {
        if (this.props.Loading) return false;
        listener()
        
        return (
            <Router>
                <Route component={ Layout }/>
            </Router>
        )
    }
} 

