import React from 'react';
import Since from './footer/since'
import { Site } from '../../global';
export default class Footer extends React.Component {
    render() {
        let siteName = Site.config.title;
        let author = Site.config.author;
        let year = (new Date()).getFullYear();
        

        return (
            <footer>
                <Since />
                <div>
                    © { year } { siteName }. 由 <a href="https://github.com/1574242600/1574242600.github.io-spa/tree/source">undefined</a> 强力驱动.
                    <span>Theme By <a href="https://github.com/1574242600/yoshino">yoshino v0.0.1 alpha dev</a></span>
                </div>
                <div>
                    Made with by { author }.
                </div>
            </footer>
        )
    }
}