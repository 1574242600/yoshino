import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon } from 'yoshino';
import Time from './time';
const { Col, Row } = Grid;

//todo tag
export default class MoreCardInfo extends React.Component {
    render() {
        return (
            <div
                style={ {
                    marginTop: '8px',
                    //textAlign: 'center',
                    fontSize: '12px',
                    color: '#555'
                } }
            >
                <Row>
                    <Col xs={ 9 } md={ 11 } style={ { textAlign: 'right' } }>
                        <Icon type='md-calendar' style={ { color: '#51b26d', fontSize: 16, marginRight: '2px' } } />
                    </Col>

                    <Col xs={ 15 } md={ 12 } style={ { textAlign: 'left', lineHeight: '18px' } }>
                        <Time isUpdated={false} info='Posted' time={this.props.info.date}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

MoreCardInfo.propTypes = {
    info: PropTypes.shape({
        date: PropTypes.number
    })
};