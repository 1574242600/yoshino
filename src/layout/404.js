import React from 'react';
import { i18n as _ } from '../global';

export default class Notfound extends React.Component {
    render() {
        return ( 
            <div style={{textAlign: 'center', margin:'25% 0'}}>
                <div>404</div>
                <div>{_('404text')}</div>
            </div>
        )
    }
}