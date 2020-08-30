import React from 'react';
import * as Yoshino from 'yoshino';
import Sidebar  from './partial/sidebar';
import BackTop from './widget/backTop';
import * as Index from './index';
const { Col, Row } = Yoshino.Grid;


export default class Layout extends React.Component {
    sub = {
        Pages: { isRender: false, page: 0 },
        Post: { isRender: false, id: 0 },
        Archives: { isRender: false },
        Link: { isRender: false }
    }

    constructor (props) {
        super(props)
        this.state = {
            path: this.props.location.search,
        }
    }

    initRenderPages() {
        if (this.state.path === '?/home') {
            this.sub.Pages.isRender = true;
            return true;
        }

        let match = this.state.path.match(/\?\/page\/([0-9]+)/);
        if (match !== null) {
            this.sub.Pages.isRender = true;
            this.sub.Pages.page = Number(match[1]);
            return true;
        };

        return false;
    }

    initRenderPost() {
        let match = this.state.path.match(/\?\/post\/([0-9]+)/);

        if (match !== null) {
            this.sub.Post.isRender = true;
            this.sub.Post.id = Number(match[1]);
            return true;
        };

        return false;
    }

    initRenderArchives() {
        if (this.state.path === '?/archives') {
            this.sub.Archives.isRender = true;
            return true;
        }

        return false;
    }

    initRenderLink() {
        if (this.state.path === '?/link') {
            this.sub.Link.isRender = true;
            return true;
        }

        return false;
    }

    static getDerivedStateFromProps(props, state) {
        if (props.location.search !== state.path) {
            return {
                path: props.location.search
            }
        }

        return null;
    }

    match() {
        let mods = Object.keys(this.sub);
        for (let mod of mods) {
            if ( this['initRender'+ mod]()) {
               let Match = Index[mod]; 
               if (this.sub[mod].isRender) {
                    return <Match data={this.sub[mod]} history={ this.props.history } />
                } 
            }
        }

        return (<Index.Notfound />)
    }

    render() {
        return (
            <Row>
                <Sidebar location={ this.props.location } history={ this.props.history } />
                <Col
                    xs={ 24 }
                    lg={ { offset: 4, span: 20 } }
                    xxl={ { offset: 2, span: 22 } }
                >

                    { this.match() }
                </Col>

                <BackTop />
            </Row>
        );
    }
}



