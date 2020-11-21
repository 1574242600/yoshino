import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'yoshino';
import Title from '../widget/title';
import Content from './postCard/content';
import CardShadow from '../widget/cardShadow';
import { MoreCardInfo } from './postCard/Info';
import { i18n as _ } from '../../global';
const { Row } = Grid;

class More extends React.Component {
    render() {
        return (
            <Row style={ { margin: '24px 16px', textAlign: 'center' } }>
                <Button type='primary' style={ { width: '80px' } }>
                    <Link to={ `/?/post/${this.props.id}` } >
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
            <CardShadow margin={ window.isLg ? '28px' : '0 0 16px' }>
                <Title
                    style={ {
                        marginTop: '8px',
                        textAlign: 'center',
                        fontSize: '25px',
                        color: '#444',
                        fontWeight: 700
                    } }
                >{ this.props.data.info.title }</Title>
                <MoreCardInfo info={ this.props.data.info } />
                <Content value={ this.props.data.content } />
                <More id={ this.props.id } />
            </CardShadow>
        );
    }
}


More.propTypes = {
    id: PropTypes.number,
};

PostCard.propTypes = {
    id: PropTypes.number,
    data: PropTypes.shape({
        info: PropTypes.object,
        content: PropTypes.string
    })
};