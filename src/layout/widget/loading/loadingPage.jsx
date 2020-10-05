import React from 'react';
import { Loading } from 'yoshino';
import { Transitions } from 'yoshino';

const { Scale } = Transitions;

export default class LoadingPage extends React.Component {
    render() {
        return (
            <Scale timeout={300} active={this.props.Loading} >
                <div style={{ height: '100%' }}>
                    <Loading text='Loading....' size='auto' type='a' loading={ true } style={{ 
                            width: '100px', 
                            height: '100px', 
                            display: 'block',
                            margin: '25% auto',
                            fontSize: '100px',
                        }}/>
                </div>
            </Scale>
        );
    }
}