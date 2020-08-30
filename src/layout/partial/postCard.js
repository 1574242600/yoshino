import React from 'react';
import { Link } from "react-router-dom";
import * as Yoshino from 'yoshino';
import { CardInfo } from './postCard/Info'
import Content from '../partial/postCard/content';
const { Row } = Yoshino.Grid;

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
            <Row style={{ backgroundColor: '#f5f5f5', margin: isLg ? '24px' : '0' }} className={'yoshino-card-shadow'} >
                <Title value={data.info.title} />
                <CardInfo info={this.props.data.info} />
                <Content value={data.content} />
            </Row>
        )
    }
} 