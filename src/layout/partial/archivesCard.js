import React from 'react';
import Title from '../widget/title';
import CardShadow from '../widget/cardShadow';
import TimeLine from './archivesCard/timeLine';
import { i18n as _ } from '../../global';


export default class ArchiveCard extends React.Component {
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
                    <TimeLine data={ this.props.data } />
                </div>
            </CardShadow>
        )
    }
}