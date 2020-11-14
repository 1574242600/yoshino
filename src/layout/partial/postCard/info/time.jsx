import React from 'react';
import PropTypes from 'prop-types';
import { i18n as _, TimeToString } from '../../../../global';

export default class Time extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            TimeToString: new TimeToString(this.props.time)
        };
    }

    render() {
        return (
            <React.Fragment>
                { this.props.isUpdated && <span>| </span>}
                <span>{ _( this.props.isUpdated ? 'Updated' : 'Posted') }</span>
                <time
                    dateTime={ this.state.TimeToString.ISO() }
                    itemProp="dateCreated datePublished"
                    style={ { margin: '4px' } }
                >
                    { this.state.TimeToString.loacl() }
                </time>
            </React.Fragment>
        );
    }
}

Time.propTypes = {
    isUpdated: PropTypes.bool,
    time: PropTypes.number
};