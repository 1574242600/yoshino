import React from 'react';

export default class Fixed extends React.Component {
    render() {
        return (
            <div
                style={ {
                    backgroundColor: '#f5f5f5',
                    position: 'fixed',
                    top: '24px',
                    left: 'auto',
                    width: '20%',
                    margin: '0 0 0 24px'
                } }
                className={ this.props.className }
            >
                { this.props.children }
            </div>
        )
    }
}