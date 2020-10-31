import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'yoshino';
import LoadingCard from './widget/loadingCard';
import RowPageCard from './widget/rowPageCard';
import PostCard from './partial/postMoreCard';
import Pagination from './partial/pagination';
import { loadHljs } from '../global';
import { Site } from '../global';
const InfoCard = React.lazy(() => import('./partial/infoCard'));
const { Row } = Grid;

export default class Pages extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            index: null,
            postsList: {},
            page: 0,
        };
    }

    getIndex() {
        return Site.getIndex();
    }

    getPostsList(page) {
        return Site.getPostsList(page);
    }

    renderPostCards() {
        let postCards = this.state.postsList.list.map((post, index) => {
            return (<PostCard key={ index } id={ post.id } data={ post.data } />);
        });

        return postCards;
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data.page !== state.page) {
            return {
                loading: true
            };
        }

        return null;
    }

    async init() {
        let state = this.state;
        let page = this.props.data.page;

        if (state.index === null) {state.index = await this.getIndex();}
        state.postsList = await this.getPostsList(page);
        state.page = page;

        state.loading = false;
        this.setState(state);
    }

    componentDidUpdate() {
        if (this.state.loading) {this.init();}
        loadHljs();
    }

    async componentDidMount() {
        this.init();
    }

    render() {
        return (
            <Row>
                <LoadingCard width='90%' loading={ this.state.loading }>
                    { !this.state.loading &&
                        <RowPageCard InfoCard={ <InfoCard type='page' total={ this.state.index.total } /> }>
                            { this.renderPostCards() }
                            <Pagination
                                page={ this.state.page + 1 }
                                history={ this.props.history }
                                total={ this.state.index.total }
                            />
                        </RowPageCard>
                    }
                </LoadingCard>
            </Row>
        );
    }
}


Pages.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.number
    }),
    history: PropTypes.object
};