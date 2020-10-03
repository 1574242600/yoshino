import React from 'react';
import * as Yoshino from 'yoshino';
import ColCenter from './widget/colCenter';
import ArchiveCard from './partial/archivesCard'
import Loading from './widget/loading/loadingPage';
import RowPageCard from './widget/rowPageCard';
import InfoCard from './partial/infoCard'
import { Site, TimeToString} from '../global';
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

    handleData(data) {
        let handledData = {};
        (function yaerSort() {
            data.forEach((value) => {
                let Time = new TimeToString(value.date)
                let year = Time.time.getFullYear();
                if (handledData[year] === undefined) handledData[year] = [];
                handledData[year].push({
                    id: value.id,
                    title: value.title,
                    timeString: Time.archive()
                })
            })
        })()

        return handledData;
    }

    async componentDidMount() {
        let state = this.state;
        state.data = this.handleData(await Site.getArchives());
        state.loading = false;
        Site.setMeta('description', Object.values(state.data)[0].slice(0, 5).map(v => v.timeString + '  ' + v.title).join("\n"))
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
                     <RowPageCard InfoCard={<InfoCard type='page' total={this.state.data.length} />}>
                        <ArchiveCard data={ this.state.data } />
                    </RowPageCard>
                }
                </ColCenter>
            </Row>
        )
    }
}