import React from 'react';
import * as Yoshino from 'yoshino';
import ColCenter from './widget/colCenter';
import Loading from './widget/loading/loadingPage';
import InfoCard from './partial/infoCard';
import PostCard from './partial/postCard';
import RowPageCard from './widget/rowPageCard';
import Comment from './partial/comment';
import { loadHljs, Site } from '../global';
const { Row } = Yoshino.Grid;

export default class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: null,
            loading: true,
            data: {},
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data.id !== state.id) {
            return {
                loading: true
            }
        }

        return null;
    }

    componentDidUpdate() {
        loadHljs();
    }

    async getPostData(id) {
        return await Site.getPost(id)
    }

    async init() {
        let state = this.state;
        let id = this.props.data.id;

        if (this.state.loading) {
            state.data = await this.getPostData(id);
            state.id = id;
        }

        Site.setTitle(this.state.data.info.title);
        state.loading = false;
        this.setState(state);
    }

    render() {
        if (this.state.loading) this.init();

        return (
            <Row>
                <ColCenter width='100%'>
                { this.state.loading &&
                    <Loading Loading={ this.state.loading } />
                }
                <style>
                    
                </style>
                { !this.state.loading &&
                    <RowPageCard InfoCard={<InfoCard type='post' nav={this.state.data.nav} />}>
                        <PostCard data={this.state.data} />
                        <Comment id={this.state.id} />
                    </RowPageCard>
                }
                </ColCenter>
            </Row>
        );
    }
}