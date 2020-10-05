import * as React from 'react';
import AuthorCard from './authorCard';
import Memu from './memu';
import { Grid, Divider } from 'yoshino';
const { Col } = Grid;

export default class PcSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: '0'
        }
    }

    render() {

        return (
            <Col 
              xs={0}
              sm={0}
              md={0}
              lg={4}
              xxl={2}
              style={{
                  height: '100%',
                  position:'fixed',
                  top:'0px', 
                  left:'0px',
                  backgroundColor: '#f5f5f5'
                }}
            >
                <AuthorCard />
                <Divider />
                <Memu path={this.props.path} history={this.props.history} />
            </Col>
        )
    }
 
};