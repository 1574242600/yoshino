import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Layout from './layout/layout';
import listener from './listener';

export default class Routers extends React.Component {

    constructor(prors) {
        super(prors)
        this.state = {
            
        };
    }

    init() {
        if (window.location.search === '' || window.location.search === '?/') {
            window.location.search = '?/home';
        }
    }

    render() {
        this.init() 
        if (this.props.Loading) return false;
        listener()
        
        return (
            <Router>
                <Route component={ Layout }/>
            </Router>
        )
    }
} 

