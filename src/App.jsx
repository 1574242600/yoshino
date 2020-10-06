import React from 'react';
import Route from './route';
import { Site , Cache , i18nInit } from './global';
import 'yoshino/lib/index.css';
import './post.css'  //theme-next.org post-body

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: null,
            loading: true
        };
    }

    componentDidMount() {
        Site.getConfig().then(config => {
            if (Cache.get('i18n') === null) {
                i18nInit(config.language).then( _ => {
                    Site.setTitle();
                    Site.setMeta('author', config.author)
                    Site.setMeta('description', config.description)
                    Site.setMeta('keywords', config.keywords)

                    this.setState({
                        config: config,
                        loading: false
                    })
                });
            } else {
                Site.setTitle();
                this.setState({
                    config: config,
                    loading: false
                })
            }
        })
    }

    render() {
        return (
            <div>
                {
                    Site.isCacheTimedOut() &&
                    Site.clearSiteCache() &&
                    Site.setSiteCacheTime() 
                }

                {!this.state.loading && <Route />}
            </div>
            
        );
    }
}

