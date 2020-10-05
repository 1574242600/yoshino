import React from 'react';
import * as Yoshino from 'yoshino';
import LoadingCard from './widget/loadingCard';
import LinkCard from './partial/linkCard';
import Title from './widget/title';
import { Site, i18n as _ } from '../global';
import CardShadow from './widget/cardShadow';
const { Row } = Yoshino.Grid;

export default class Links extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            list: [],
            //total: 0
        }
    }

    async componentDidMount() {
        let state = this.state;
        state.list = await Site.getPage('link');
        state.loading = false;
        Site.setMeta('description', '我的朋友们')
        this.setState(state);
    }

    renderLinkCard() {
        return this.state.list.map((v, index) => {
            return (<LinkCard data={ v } key={ index } />);
        })
    }

    render() {
        return (
            <Row>
                <LoadingCard width='95%' loading={ this.state.loading } >
                    { !this.state.loading &&
                        <CardShadow margin={ window.isLg ? '24px' : '0' }>
                            <Title style={ {
                                    fontSize: '36px',
                                    color: '#444',
                                    fontWeight: 700,
                                    paddingLeft: '16px '
                            } }>{_('Links')}</Title>

                            <Row style={ { margin: '24px' } }>
                                { this.renderLinkCard() }
                            </Row>
                        </CardShadow>
                    }
                </LoadingCard>
            </Row>
        )
    }
}