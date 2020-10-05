import React from 'react';
import { Link } from "react-router-dom";
import * as Yoshino from 'yoshino';
import { i18n as _ } from '../../../global';
import Search from '../../widget/search';
const { Card } = Yoshino;

export default class PageInfo extends React.Component {
    render() {
        return (
            <Card title={ _('SiteInfo') } extra={ <Search /> }>
                <ul style={ { lineHeight: '20px' } }>
                    <li>{ _('PostTotal') }: <Link to='/?/archives'>{ this.props.total }</Link></li>
                </ul>
            </Card>
        )
    }
}