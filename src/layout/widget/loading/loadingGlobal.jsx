import React from 'react';
import { Transitions } from 'yoshino';
const { Scale } = Transitions;
export default class LoadingGlobal extends React.Component {
    render() {
        return (
            <Scale timeout={ 1000 } active={ this.props.loading }>
                <div>
                    <div style={ {
                        background: '#ffffff',
                        position: 'fixed',
                        inset: '0px',
                        height: '100vh',
                        width: '100vw',
                        zIndex: 9999
                    } }></div>
                    <div style={ {
                        color: '#51b26d',
                        position: 'fixed',
                        height: '100vh',
                        width: '100vw',
                        margin: '15% auto',
                        fontSize: '100px',
                        textAlign: 'center',
                        zIndex: 99999
                    } }
                    >
                        Loading......
                    </div>
                </div>
            </Scale>
        );
    }
}