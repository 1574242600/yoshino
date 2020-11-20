import * as React from 'react';
import PropTypes from 'prop-types';
import { Transitions } from 'yoshino';
const { Slide } = Transitions;

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const open = this.props.open;
        return (
            <Slide timeout={500}
                active={open}
                direction='left'
                appear={false}
            >
                <div className={'drawer'}>
                    {this.props.children}
                </div>
            </Slide>
        );
    }
}

Drawer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    open: PropTypes.bool
};