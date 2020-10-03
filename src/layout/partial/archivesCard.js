import React from 'react';
import Title from '../widget/title';
import CardShadow from '../widget/cardShadow';
import TimeLine from './archivesCard/timeLine';
import { i18n as _, TimeToString } from '../../global';


export default class ArchiveCard extends React.Component {
    handledData = {};

    constructor (props) {
        super(props);
        this.handleData(this.props.data);
    }

    handleData(data) {
        (function yaerSortToHandledData(it) {
            data.forEach((value) => {
                let Time = new TimeToString(value.date)
                let year = Time.time.getFullYear();
                if (it.handledData[year] === undefined) it.handledData[year] = [];
                it.handledData[year].push({
                    id: value.id,
                    title: value.title,
                    timeString: Time.archive()
                })
            })
        })(this)
    }

    render() {
        return (
            <CardShadow margin={ window.isLg ? '24px' : '0' }>
                <div style={{marginLeft: '16px'}}>
                    <Title
                        style={ {
                            marginTop: '8px',
                            textAlign: 'left',
                            fontSize: '36px',
                            color: '#444',
                            fontWeight: 700,
                        } }
                    >{ _('Archives') }</Title>
                    <TimeLine data={ this.handledData } />
                </div>
            </CardShadow>
        )
    }
}