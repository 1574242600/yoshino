import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Pagination } from 'yoshino';
const { Row } = Grid;

export default class Pagin extends React.Component {

    render() {
        return (
            <Row style={{ margin: '0 0 24px 0', textAlign: 'center'}}>
                <Pagination
                    current={ this.props.page }
                    total={ this.props.total }
                    onChange={ (page) => {
                        this.props.history.push(`/?/page/${page - 1}`);
                    } }
                />
            </Row>
        );
    }
}

Pagin.propTypes = {
    page: PropTypes.number,
    total: PropTypes.number,
    history: PropTypes.object
};