import React from 'react';
import ReactDOM from 'react-dom';
import LoadingGlobal from './layout/widget/loading/loadingGlobal';
import Route from './route';
import onError from './tools/onerror';
import { Site , Cache , i18nInit } from './global';
import 'yoshino/lib/index.css';
import './post.css'  //theme-next.org post-body

onError();

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: null,
            loading: true
        };
    }

    load() {
        Site.getconfig().then(info => {
            if (Cache.get('i18n') === null) {
                i18nInit(info.language).then( _ => {
                    Site.setTitle();
                    this.setState({
                        config: info,
                        loading: false
                    })
                });
            } else {
                Site.setTitle();
                this.setState({
                    config: info,
                    loading: false
                })
            }
        })
    }

    render() {
        if (this.state.config === null) this.load();

        return (
            <div>
                {   
                    Site.isCacheTimedOut() &&
                    Site.clearSiteCache() &&
                    Site.setSiteCacheTime() && 
                    <LoadingGlobal Loading={this.state.loading} />
                }

                <Route Loading={this.state.loading} />
            </div>
            
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

