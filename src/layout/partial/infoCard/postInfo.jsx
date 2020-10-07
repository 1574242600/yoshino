import React from 'react';
import * as Yoshino from 'yoshino';
import { i18n as _, toc, loadJs } from '../../../global';
const { Card } = Yoshino;

export default class PostInfo extends React.Component {
    componentDidMount() {
        if (window.initPostNav === undefined) {
            loadJs('postNav', true, () => {
                window.initPostNav();
            })
        } else {
            window.initPostNav();
        }
    }

    componentWillUnmount() {
        if (window.destroyPostNav) window.destroyPostNav();
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