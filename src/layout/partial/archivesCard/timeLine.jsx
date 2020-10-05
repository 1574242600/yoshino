import React from 'react';
import Title from '../../widget/title';
import PostLi from './postsLi';
export default class ArchiveTimeline extends React.Component {
    renderPostList(year) {
        return this.props.data[year].map(v => {
            return <PostLi data={v} />
        })
    }

    render() {
        const yearList = Object.keys(this.props.data).reverse();
        return (
            <div style={ { marginTop: '16px' } } className='archives' >
                <ul>
                    {
                        yearList.map(year => {
                            return (
                                <li>
                                    <Title style={ {
                                        textAlign: 'left',
                                        fontSize: '24px',
                                        color: '#666',
                              
                                    } }> {year} </Title>
                                    <ul className='archives-list' >{ this.renderPostList(year)}</ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}