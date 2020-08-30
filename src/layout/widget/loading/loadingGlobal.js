import React from 'react';
import { Loading } from 'yoshino';
import { Transitions } from 'yoshino';

const { Scale } = Transitions;

export default class LoadingGlobal extends React.Component {
    render() {
        return (
            <Scale timeout={300} active={this.props.Loading}>
                <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    display: 'block',
                    margin: '15% auto',
                    fontSize: '100px',
                }}>
                    <Loading text='Loading....' size='auto' type='a' loading={ true } />
                </div>
            </Scale>
        );
    }
}

