import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../widget/title';
import PostLi from './postsLi';

export default class ArchiveTimeline extends React.Component {
    renderPostList(year) {
        return this.props.data[year].map((v, index)=> {
            return <PostLi data={v} key={index} />;
        });
    }

    render() {
        const yearList = Object.keys(this.props.data).reverse();
        return (
            <div style={ { marginTop: '16px' } } className='archives' >
                <ul>
                    {
                        yearList.map((year, index) => {
                            return (
                                <li key={index} >
                                    <Title style={ {
                                        textAlign: 'left',
                                        fontSize: '24px',
                                        color: '#666',
                              
                                    } }> {year} </Title>
                                    <ul className='archives-list' >{ this.renderPostList(year)}</ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

ArchiveTimeline.propTypes = {
    data: PropTypes.object
};