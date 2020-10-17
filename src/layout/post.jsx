import React from 'react';
import PropTypes from 'prop-types';
import * as Yoshino from 'yoshino';
import LoadingCard from './widget/loadingCard';
import PostCard from './partial/postCard';
import RowPageCard from './widget/rowPageCard';
import Comment from './partial/comment';
import { loadHljs, Site } from '../global';
const InfoCard = React.lazy(() => import('./partial/infoCard'));
const { Row } = Yoshino.Grid;

export default class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: null,
            loading: true,
            data: {},
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data.id !== state.id) {
            return {
                loading: true
            };
        }

        return null;
    }

    componentDidUpdate() {
        loadHljs();
    }

    getPostData(id) {
        return Site.getPost(id);
    }

    async componentDidMount() {
        let state = this.state;
        let id = this.props.data.id;
        
        state.data = await this.getPostData(id);
        state.id = id;
        
        Site.setTitle(this.state.data.info.title);
        Site.setMeta('description', this.state.data.content.slice(0, 80).replace(/<[^>]+>/g, ''));
        state.loading = false;
        this.setState(state);
    }

    render() {
        return (
            <Row>
                <LoadingCard width='100%' loading={ this.state.loading }>
                    { !this.state.loading &&
                    <RowPageCard InfoCard={<InfoCard type='post' nav={this.state.data.nav} />}>
                        <PostCard data={this.state.data} isPage={false} />
                        <Comment postId={this.state.id} />
                    </RowPageCard>
                    }
                </LoadingCard>
            </Row>
        );
    }
}

Post.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number
    })
};