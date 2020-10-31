import React from 'react';
import { Icon, Modal, Input } from 'yoshino';
import { i18n as _, Site } from '../../global';

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.onClick.bind(this);
    }

    onClick() {
        Modal.confirm({
            title: _('Search'),
            content: <form id='search' action="//google.com/search" method="get" acceptCharset="UTF-8" className="search-form" style={{paddingTop: '8px'}}>
                <Input type="text" name="q" placeholder="Search"/>
                <input type="hidden" name="sitesearch" value={Site.config.url} />
            </form>,
            width: 400,
            showClose: true,
            onOk: () => {
                document.getElementById('search').submit();
                return true;
            } 
        });
    }

    render() {
        return (
            <span onClick={ this.onClick }>
                <Icon type="md-search" style={ { color: '#51b26d', fontSize: 27 } } />
            </span>
        );
    }
}