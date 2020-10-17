import React from 'react';
import PropTypes from 'prop-types';
import PageInfo from './infoCard/pageInfo';
import PostInfo from './infoCard/postInfo';

export default class InfoCard extends React.Component {
    render() {
        if (!window.isLg) {return (<div></div>);}
        return (    //用Row会报错不知道为什么
            <div className={ 'yoshino-card-shadow info-card-fixed' } >
                { this.props.type === 'page' &&
                    <PageInfo total={ this.props.total } />
                }

                { this.props.type === 'post' &&
                    <PostInfo nav={ this.props.nav } />
                }
            </div>
        );
    }
}

InfoCard.propTypes = {
    type: PropTypes.string,
    nav: PropTypes.array,
    total: PropTypes.number
};