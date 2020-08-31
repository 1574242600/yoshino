import React from 'react';
import { CardInfo } from './postCard/Info'
import Content from './postCard/content';
import CardShadow from '../widget/cardShadow';

class Title extends React.Component {
    render() {
        return (
            <div 
                style={{ 
                    marginTop: '8px',
                    textAlign: 'center' , 
                    fontSize: '25px',
                    color: '#444',
                    fontWeight: 700 
                }}
            >
                {this.props.value}
            </div>
        )
    }
}

export default class PostCard extends React.Component {
    render() {
        let data = this.props.data;
        let isLg = window.innerWidth > 992;
        return (
            <CardShadow margin={ isLg ? '24px' : '0' }>
                <Title value={data.info.title} />
                <div>
                    {
                        //不加div 会报错 
                    }
                    {!this.props.isPage && <CardInfo info={this.props.data.info} />}
                </div>
                <Content value={data.content} />
            </CardShadow>
        )
    }
} 