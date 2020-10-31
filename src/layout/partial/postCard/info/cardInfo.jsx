import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'yoshino';
import Time from './time';
const { Col, Row } = Grid;

export default class CardInfo extends React.Component {
    render() {
        return (
            <div
                style={ {
                    marginTop: '8px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#555'
                } }
            >
                <Row>
                    <Col style={ { lineHeight: '18px' } }>
                        <Time isUpdated={false} time={this.props.info.date}/>
                        { this.props.info.update && 
                            <Time isUpdated={true} time={this.props.info.update} />
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

CardInfo.propTypes = {
    info: PropTypes.shape({
        update: PropTypes.number,
        date: PropTypes.number
    })
};