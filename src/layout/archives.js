import React from 'react';
export default class Archives extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: 'about',
            loading: true,
            data: {},
        }
    }

    async init() {
        let state = this.state;
        state.loading = false;
        this.setState(state);
    }

    render() {
        return (<div></div>)
    }
}