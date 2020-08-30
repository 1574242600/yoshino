import React from 'react';
import * as Yoshino from 'yoshino';
const { Col } = Yoshino.Grid;

export default class ColCenter extends React.Component {
    render() {
        return (
            <Col
                style={ {
                    width: this.props.width,
                    display: 'block',
                    margin: '0 auto',

                } }
            >
                {this.props.children}
            </Col>
        )
    }
}