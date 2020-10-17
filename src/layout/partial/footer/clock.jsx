import React from 'react';
import { Site, i18n as _ } from '../../../global';

export default class Clock extends React.Component { 
    id;

    constructor(props) {
        super(props);
        this.state = {
            Date: new Date()
        };
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                Date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    show() {
        const BirthDay = new Date(Site.config.since);
        const today = this.state.Date;
        const timeold = (today.getTime() - BirthDay.getTime());
        const msPerDay = 24 * 60 * 60 * 1000;
        const e_daysold = timeold / msPerDay;
        const daysold = Math.floor(e_daysold);
        const e_hrsold = (e_daysold - daysold) * 24;
        const hrsold = Math.floor(e_hrsold);
        const e_minsold = (e_hrsold - hrsold) * 60;
        const minsold = Math.floor((e_hrsold - hrsold) * 60);
        const seconds = Math.floor((e_minsold - minsold) * 60);
        return (daysold + _('Day') + hrsold + _('Hour') + minsold + _('Minute') + seconds + _('Second'));
    }

    render() {
        return (
            <span>
                {this.show()}
            </span>
        );
    }
}