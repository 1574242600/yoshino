import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div 
                style={{ 
                    marginTop: '8px',
                    textAlign: 'center' , 
                    fontSize: '25px',
                    color: '#444',
                    fontWeight: 700 
                }}
            >
                {this.props.value}
            </div>
        )
    }
}