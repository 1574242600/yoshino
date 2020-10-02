import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <h2 
                style={this.props.style}
            >
                {this.props.children}
            </h2>
        )
    }
}