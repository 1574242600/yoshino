import React from 'react';
import PropTypes from 'prop-types';
import * as Yoshino from 'yoshino';
const { Row } = Yoshino.Grid;

export default class CardShadow extends React.Component {
    render() {
        return (
            <Row style={{ backgroundColor: '#f5f5f5', margin: this.props.margin}} className={'yoshino-card-shadow'} >
                {this.props.children}
            </Row>
        );
    }
}

CardShadow.defaultProps = {
    margin: '0'
};

CardShadow.propTypes = {
    margin: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};