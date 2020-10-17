import * as React from 'react';
import PropTypes from 'prop-types';
const { Suspense } = React;
const PcSidebar = React.lazy(() => import('./sidebar/pc'));
const MobileSidebar = React.lazy(() => import('./sidebar/mobile'));
export default class Sidebar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            activeKey: '0'
        };
    }

    render() {
        return (
            <Suspense fallback={ <div></div> }>
                {!window.isLg ?
                    <MobileSidebar path={ this.props.location.search } history={ this.props.history } />
                    :
                    <PcSidebar path={ this.props.location.search } history={ this.props.history } />
                }
            </Suspense>
        );
    }

}

Sidebar.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string
    }),
    history: PropTypes.object
};