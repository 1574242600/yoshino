import React from 'react';
import { Link } from "react-router-dom";
import * as Yoshino from 'yoshino';
import Title from './postCard/title';
import Content from './postCard/content';
import { MoreCardInfo } from './postCard/Info'
import { i18n as _ } from '../../global';
const { Row } = Yoshino.Grid;
const { Button } = Yoshino;

class More extends React.Component {
    render() {
        return (
            <Row style={{ margin: '24px 16px', textAlign: 'center'}}>
                <Button type='primary' style={{width: '80px'}}>
                    <Link to={`/?/post/${this.props.id}`} >
                        { _('More') }
                    </Link>
                </Button>
            </Row>
        );
    }
}

export default class PostCard extends React.Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#f5f5f5' , margin: '24px'}} className={'yoshino-card-shadow'} >
                <Title value={this.props.data.info.title} />
                <MoreCardInfo info={this.props.data.info} />
                <Content value={this.props.data.content} />
                <More id={this.props.id} />
            </Row>
        )
    }
} 