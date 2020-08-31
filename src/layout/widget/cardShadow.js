import React from 'react';
import * as Yoshino from 'yoshino';
const { Row } = Yoshino.Grid;

export default class CardShadow extends React.Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#f5f5f5', margin: this.props.margin }} className={'yoshino-card-shadow'} >
                {this.props.children}
            </Row>
        )
    }
}