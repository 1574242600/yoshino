import React from 'react';
import * as Yoshino from 'yoshino';
import ColCenter from './widget/colCenter';
import RowPageCard from './widget/rowPageCard';
import Loading from './widget/loading/loadingPage';
import PostCard from './partial/postMoreCard';
import Pagination from './partial/pagination';
import { loadHljs } from '../global';
import { Site } from '../global';
const InfoCard = React.lazy(() => import('./partial/infoCard'));
const { Row } = Yoshino.Grid;

export default class Pages extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            index: null,
            postsList: {},
            page: 0,
        }
    }

    async getIndex() {
        return await Site.getIndex();
    }

    async getPostsList(page) {
        return await Site.getPostsList(page);
    }

    renderPostCards() {
        let postCards =  this.state.postsList.list.map((post, index) => {
            return (<PostCard key={index} id={post.id} data={ post.data } />)
        })

        return postCards;
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data.page !== state.page) {
            return {
                loading: true
            }
        }

        return null;
    }

    async init() {
        let state = this.state;
        let page = this.props.data.page;

        if (state.index === null) state.index = await this.getIndex();
        state.postsList = await this.getPostsList(page);
        state.page = page;

        state.loading = false;
        this.setState(state);
    }

    componentDidUpdate() {
        if (this.state.loading) this.init()
        loadHljs();
    }

    async componentDidMount() {
        this.init()
    }

    render() {
        return (
            <Row>
                <ColCenter width='90%'>
                    { this.state.loading &&
                        <Loading Loading={ this.state.loading } />
                    }
                    
                        { !this.state.loading &&
                            <RowPageCard InfoCard={<InfoCard type='page' total={this.state.index.total} />}>
                                { this.renderPostCards() }
                                <Pagination 
                                    page={this.state.page + 1}
                                    history={this.props.history}
                                    total={this.state.index.total}
                                />
                            </RowPageCard>
                        }
                </ColCenter>
            </Row>
        );
    }
}
