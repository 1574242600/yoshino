import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider } from 'yoshino';
import Drawer from './sidebar/drawer';
import AuthorCard from './sidebar/authorCard';
import Memu from './sidebar/memu';
const { Col, Row } = Grid;

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: '0'
        };
    }

    render() {
        const { open } = this.props;
        return (
            <Drawer open={open}>
                <Row style={{
                    height: '100%',
                    backgroundColor: '#f5f5f5'
                }}>
                    <Col>
                        <AuthorCard />
                        <Divider />
                        <Memu path={this.props.location.search} history={this.props.history} />
                    </Col>
                </Row>
            </Drawer>
        );
    }

}

Sidebar.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    open: PropTypes.bool,
};

