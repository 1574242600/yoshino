import React from 'react';
import * as Yoshino from 'yoshino';
import { i18n as _ } from '../../global';
const { Icon, Modal } = Yoshino;

export default class Search extends React.Component {
    constructor (props) {
        super(props);
        this.onClick.bind(this)
    }

    onClick() {
        Modal.confirm({
            icon: <Icon type='md-checkmark' />,
            title: '这是一个标题！！！',
            content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',
            width: 400,
            showClose: true,
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