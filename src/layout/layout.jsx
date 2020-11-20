import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'yoshino';
import Sidebar from './partial/sidebar';
import BackTop from './widget/backTop';
import Footer from './partial/footer';
import MemuButton from './partial/memuButton';
import LoadingPage from './widget/loading/loadingPage';
import * as Index from './index';
import { Site, i18n as _ } from '../global';
const { Col, Row } = Grid;

let sub = {
    Pages: {
        isRender: false, page: 0,
        is: (path) => (path === '?/home' || path === '' || path.match(/\?\/page\/([0-9]+)/) !== null),
        init: (Lay) => {
            let match = Lay.state.path.match(/\?\/page\/([0-9]+)/);
            if (match !== null) {
                sub.Pages.page = Number(match[1]);
            } else {
                sub.Pages.page = 0;
            }

            Site.setTitle(sub.Pages.page === 0 ? _('Home') : `第${sub.Pages.page + 1}页`);
        }
    },
    Post: {
        isRender: false, id: 0,
        is: (path) => (path.match(/\?\/post\/([0-9]+)/) !== null),
        init: (Lay) => {
            let match = Lay.state.path.match(/\?\/post\/([0-9]+)/);
            sub.Post.id = Number(match[1]);
        }
    },
    Archives: {
        isRender: false,
        is: (path) => (path === '?/archives'),
        init: () => Site.setTitle(_('Archives'))
    },
    Link: {
        isRender: false,
        is: (path) => (path === '?/link'),
        init: () => Site.setTitle(_('Link'))
    },
    About: {
        isRender: false,
        is: (path) => (path === '?/about'),
        init: () => Site.setTitle(_('About'))
    }
};

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: this.props.location.search,
            sidebarStatus: window.isLg ? true : false
        };
        this.onMemuButtonClick = this.onMemuButtonClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.location.search !== state.path) {
            return {
                path: props.location.search
            };
        }

        return null;
    }


    onMemuButtonClick() {
        this.setState({
            sidebarStatus: !this.state.sidebarStatus
        });
    }

    match() {
        try {
            let mods = Object.keys(sub);
            for (let mod of mods) {
                if (sub[mod].is(this.state.path)) {
                    sub[mod].init(this);
                    let Match = Index[mod];
                    return <Match data={sub[mod]} history={this.props.history} />;
                }
            }

            return (<Index.Notfound />);
        } catch {
            return (<Index.Notfound />);
        }
    }

    render() {
        const { sidebarStatus } = this.state;
        const offset = sidebarStatus ? 4 : 0 ;
        const span = sidebarStatus ? 20 : 24;
        return (
            <Row>
                <MemuButton onClick={this.onMemuButtonClick} open={sidebarStatus}/>

                <Sidebar location={this.props.location}
                    history={this.props.history}
                    open={sidebarStatus}
                />

                <Suspense fallback={<LoadingPage loading={true} />}>w
                    <Col
                        xs={24}
                        lg={{ offset: offset, span: span }}
                        xxl={{ offset: offset, span: span - 4 }}
                        className={'width-transition'}
                        style={{ paddingTop: window.isLg ? undefined :'100px'}}
                    >
                        <div style={{ minHeight: 'calc(100vh - 79px)' }}>{this.match()}</div>
                    </Col>
                </Suspense>

                <Col
                    xs={24}
                    lg={{ offset: offset, span: span }}
                    className={'width-transition'}
                >
                    <Footer />
                </Col>
                <BackTop />
            </Row>
        );
    }
}

Layout.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string
    }),
    history: PropTypes.object
};


