import React from 'react';
import * as Yoshino from 'yoshino';
import { i18n as _, TimeToString } from '../../../global';
const { Col, Row } = Yoshino.Grid;
const { Icon } = Yoshino;

class Time extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            TimeToString: new TimeToString(this.props.time)
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.props.isl && <span>| </span>}
                <span>{ _(this.props.info) }</span>
                <time
                    dateTime={ this.state.TimeToString.ISO() }
                    itemProp="dateCreated datePublished"
                    style={ { margin: '4px' } }
                >
                    { this.state.TimeToString.loacl() }
                </time>
            </React.Fragment>
        )
    }
}


//todo tag
class MoreCardInfo extends React.Component {
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
                        <Time isl={false} info='Posted' time={this.props.info.date}/>
                    </Col>
                </Row>
            </div>
        );
    }
}


class CardInfo extends React.Component {
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
                        <Time isl={false} info='Posted' time={this.props.info.date}/>
                        { this.props.info.update && 
                            <Time isl={true} info='Updated' time={this.props.info.update} />
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}


export { MoreCardInfo, CardInfo };