import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from 'yoshino';

export default function Github(props) {
    return (
        <Tooltip title='github' placement='bottom'>
            <a href={ 'https://github.com/' + props.id } target={'_blank'} rel="noopener noreferrer">
                <Icon type='logo-github' style={{fontSize: 30}}/>
            </a>
        </Tooltip>
    );
}

Github.propTypes = {
    id: PropTypes.number
};