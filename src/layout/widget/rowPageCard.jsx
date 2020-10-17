import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import * as Yoshino from 'yoshino';
const { Col, Row } = Yoshino.Grid;

export default class RowPageCard extends React.Component {
    render() {
        return (
            <Row>
                <Col
                    xs={ 24 }
                    xl={ 17 }
                    xxl={ 22 }
                >
                    { this.props.children }
                </Col>
                <Col xs={ 0 } xl={ 7 } xxl={ 2 }>
                    <Suspense fallback={ <div> Loading... </div> }>
                        { this.props.InfoCard }
                    </Suspense>
                </Col>
            </Row>
        );
    }
}

RowPageCard.defaultProps = {
    InfoCard: <div></div>
};

RowPageCard.propTypes = {
    InfoCard: PropTypes.element.isRequired,
    children: PropTypes.element
};