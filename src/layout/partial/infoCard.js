import React from 'react';
import { Link } from "react-router-dom";
import { loadJs } from '../../global';
import * as Yoshino from 'yoshino';
import { i18n as _, toc } from '../../global';
const { Card, Icon, Modal } = Yoshino;

class Fixed extends React.Component {
    render() {
        return (
            <div
                style={ {
                    backgroundColor: '#f5f5f5',
                    position: 'fixed',
                    top: '24px',
                    left: 'auto',
                    width: '20%',
                    margin: '0 0 0 24px'
                } }
                className={ this.props.className }
            >
                { this.props.children }
            </div>
        )
    }
}

class Search extends React.Component {
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

class PageInfo extends React.Component {
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


class PostInfo extends React.Component {
    componentDidMount() {
        if (window.initPostNav === undefined) {
            loadJs('postNav', true, () => {
                window.initPostNav();
            })
        } else {
            window.initPostNav();
        }
    }

    renderNav() {
        if (this.props.nav === null) return (<div>{ _('NoPostNav') }</div>)
        let html = toc(this.props.nav);

        return (
            <div className='post-toc'>
                <ol className='nav' style={ { lineHeight: '20px' } } dangerouslySetInnerHTML={ { __html: html } }>
                </ol>
            </div>
        )
    }

    render() {
        return (
            <Card title={ _('PostNav') }>
                <div className='post-toc-wrap'>
                    { this.renderNav() }
                </div>
            </Card>
        )
    }
}

export default class InfoCard extends React.Component {
    render() {
        return (    //用Row会报错不知道为什么
            <Fixed className={ 'yoshino-card-shadow' } >
                { this.props.type === 'page' &&
                    <PageInfo total={ this.props.total } />
                }

                { this.props.type === 'post' &&
                    <PostInfo nav={ this.props.nav } />
                }
            </Fixed>
        )
    }
}