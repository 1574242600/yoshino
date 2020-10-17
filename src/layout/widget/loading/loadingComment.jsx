import React from 'react';
import { Loading } from 'yoshino';

export default class LoadingComment extends React.Component {

    render() {
        return (
            <div style={ {
                width: 'auto',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                fontSize: '50px',
            } }
            >
                <Loading size='auto' type='a' loading={ true } style={ { display: 'block' } } text='loading...' />
            </div>
        );
    }
}