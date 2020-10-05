import React from 'react';
import * as Yoshino from 'yoshino';
import Loading from './loading/loadingPage';
const { Col } = Yoshino.Grid;

export default class LoadingCard extends React.Component {
    render() {
        return (
            <Col
                style={ {
                    width: this.props.width,
                    display: 'block',
                    margin: '0 auto',

                } }
            >
                { this.props.loading &&
                    <Loading Loading={ this.props.loading } />
                }

                { this.props.children }
            </Col>
        )
    }
}

LoadingCard.defaultProps = {
    width: '100%'
}