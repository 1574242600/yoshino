import React from 'react';
import { Grid } from 'yoshino';
import LoadingCard from './widget/loadingCard';
import InfoCard from './partial/infoCard';
import PostCard from './partial/postCard';
import RowPageCard from './widget/rowPageCard';
import Comment from './partial/comment';
import { Site } from '../global';
const { Row } = Grid;

export default class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: 'about',
            loading: true,
            data: {},
        };
    }

    async componentDidMount() {
        let state = this.state;
        state.data = await Site.getPage('about');
        state.loading = false;
        this.setState(state);
    }

    render() {

        return (
            <Row>
                <LoadingCard width={ window.isLg ? undefined : '100%'} loading={ this.state.loading }>
                    { !this.state.loading &&
                    <RowPageCard InfoCard={<InfoCard type='post' nav={this.state.data.nav} />}>
                        <PostCard data={this.state.data} isPage={true} />
                        <Comment postId={this.state.id} />
                    </RowPageCard>
                    }
                </LoadingCard>
            </Row>
        );
    }
}