import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'yoshino';
const { Col, Row } = Grid;

export default class Content extends React.Component {
    render() {
        return (
            <Row>
                <Col span={ 22 } offset={ 1 }>
                    <div dangerouslySetInnerHTML={ { __html: this.props.value } } style={ { marginTop: '24px' } } className='post-body'>
                    </div>
                </Col>
            </Row>
        );
    }
}

Content.propTypes = {
    value: PropTypes.string
};