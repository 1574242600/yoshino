import React from 'react';
import { Site, i18n as _ } from '../../global';

class Clock extends React.Component { 
    id;

    constructor(props) {
        super(props)
        this.state = {
            Date: new Date()
        }
    }

    componentWillMount() {
        this.id = setInterval(() => {
            this.setState({
                Date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    show() {
        var BirthDay = new Date(Site.config.since);
        var today = this.state.Date;
        var timeold = (today.getTime() - BirthDay.getTime());
        var msPerDay = 24 * 60 * 60 * 1000;
        var e_daysold = timeold / msPerDay;
        var daysold = Math.floor(e_daysold);
        var e_hrsold = (e_daysold - daysold) * 24;
        var hrsold = Math.floor(e_hrsold);
        var e_minsold = (e_hrsold - hrsold) * 60;
        var minsold = Math.floor((e_hrsold - hrsold) * 60);
        var seconds = Math.floor((e_minsold - minsold) * 60);
        return (daysold + _('Day') + hrsold + _('Hour') + minsold + _('Minute') + seconds + _('Second'));
    }

    render() {
        return (
            <span>
                {this.show()}
            </span>
        )
    }
}

class Since extends React.Component {
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

export default class Footer extends React.Component {
    render() {
        let siteName = Site.config.title;
        let author = Site.config.author;
        let year = (new Date()).getFullYear();

        return (
            <footer>
                <Since />
                <div>
                    © { year } { siteName }. 由 <a href="https://github.com/1574242600/1574242600.github.io">undefined</a> 强力驱动.
                    <span>Theme By <a href="https://github.com/1574242600/yoshino">yoshino v0.0.1 alpha</a></span>
                    <span><a href="./sitemap.xml">站点地图</a></span>
                </div>
                <div>
                    Made with by { author }.
                </div>
            </footer>
        )
    }
}