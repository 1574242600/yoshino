import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'yoshino';
import { i18n as _ } from '../../../global';
import Search from '../../widget/search';

export default class PageInfo extends React.Component {
    render() {
        return (
            <Card title={ _('SiteInfo') } extra={ <Search /> }>
                <ul style={ { lineHeight: '20px' } }>
                    <li>{ _('PostTotal') }: <Link to='/?/archives'>{ this.props.total }</Link></li>
                </ul>
            </Card>
        );
    }
}

PageInfo.propTypes = {
    total: PropTypes.number
};