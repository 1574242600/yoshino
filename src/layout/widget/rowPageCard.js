import React from 'react';
import * as Yoshino from 'yoshino';
const { Col, Row } = Yoshino.Grid;

export default class RowPageCard extends React.Component {
    render() {
        return (
            <Row>
                <Col 
                xs={24}
                xl={17}
                xxl={22}
            >
                {this.props.children}
            </Col>
            <Col xs={0} xl={7} xxl={2}>
                {this.props.InfoCard}
            </Col>
            </Row>
        );
    }
}