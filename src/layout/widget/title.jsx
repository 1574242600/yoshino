import React from 'react';
import PropTypes from 'prop-types';
export default class Title extends React.Component {
    render() {
        return (
            <h2 
                style={this.props.style}
            >
                {this.props.children}
            </h2>
        );
    }
}

Title.propTypes = {
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};
