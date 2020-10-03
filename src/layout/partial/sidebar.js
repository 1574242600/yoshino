import * as React from 'react';
import AuthorCard from './sidebar/authorCard';
import Memu from './sidebar/memu';
import MobileSidebar from './sidebar/mobile';
import { Grid, Divider } from 'yoshino';
const { Col } = Grid;


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: '0'
        }
    }

    render() {
        if (!window.isLg) return <MobileSidebar path={this.props.location.search} history={this.props.history} />

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
                <Memu path={this.props.location.search} history={this.props.history} />
            </Col>
        )
    }
 
};