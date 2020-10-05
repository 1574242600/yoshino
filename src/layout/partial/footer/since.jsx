import React from 'react';
import Clock from './clock'
import { Site, i18n as _ } from '../../../global';


export default class Since extends React.Component {
    render() {
        if (!Site.config.since) return false;
        return (
            <div>
                <span>{ _('SiteSince') }</span>
                <Clock />
            </div>
        )
    }
}