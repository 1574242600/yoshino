import React from 'react';
import { i18n as _ } from '../global';

export default class Notfound extends React.Component {
    render() {
        return ( 
            <div style={{textAlign: 'center', margin:'20% 0'}}>
                <div style={{fontSize: '60px', color: '#51b26d'}}>404</div>
                <div style={{color: '#666'}}>{_('404text')}</div>
            </div>
        )
    }
}