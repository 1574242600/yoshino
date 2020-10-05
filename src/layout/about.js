import React from 'react';
import * as Yoshino from 'yoshino';
import ColCenter from './widget/colCenter';
import Loading from './widget/loading/loadingPage';
import InfoCard from './partial/infoCard';
import PostCard from './partial/postCard';
import RowPageCard from './widget/rowPageCard';
import Comment from './partial/comment';
import { Site } from '../global';
const { Row } = Yoshino.Grid;

export default class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: 'about',
            loading: true,
            data: {},
        }
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
                <ColCenter width='100%'>
                { this.state.loading &&
                    <Loading Loading={ this.state.loading } />
                }

                { !this.state.loading &&
                    <RowPageCard InfoCard={<InfoCard type='post' nav={this.state.data.nav} />}>
                        <PostCard data={this.state.data} isPage={true} />
                        <Comment postId={this.state.id} />
                    </RowPageCard>
                }
                </ColCenter>
            </Row>
        );
    }
}