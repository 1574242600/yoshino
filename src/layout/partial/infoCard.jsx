import React from 'react';
import Fixed from './infoCard/fixed';
import PageInfo from './infoCard/pageInfo';
import PostInfo from './infoCard/postInfo';
export default class InfoCard extends React.Component {
    render() {
        if (!window.isLg) return (<div></div>)
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