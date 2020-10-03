import React from 'react';
import * as Yoshino from 'yoshino';
import ColCenter from './widget/colCenter';
import ArchiveCard from './partial/archivesCard'
import Loading from './widget/loading/loadingPage';
import RowPageCard from './widget/rowPageCard';
import InfoCard from './partial/infoCard'
import { Site } from '../global';
const { Row } = Yoshino.Grid;

export default class Archives extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,      //todo: 分页
            data: {},
            page: 0
        }
    }

    async componentDidMount() {
        let state = this.state;
        state.data = await Site.getArchives();
        state.loading = false;
        this.setState(state);
    }

    render() {
        return (
            <Row>
                <ColCenter width='95%'>
                { this.state.loading &&
                    <Loading Loading={ this.state.loading } />
                }

                { !this.state.loading && 
                    
                        <ArchiveCard data={ this.state.data } />
                   
                }
                </ColCenter>
            </Row>
        )
    }
}