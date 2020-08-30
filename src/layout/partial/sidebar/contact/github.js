import * as React from 'react';
import { Icon, Tooltip } from 'yoshino';

export default (props) => {
    return (
        <Tooltip title='github' placement='bottom'>
            <a href={ 'https://github.com/' + props.id } target={"_blank"} rel="noopener noreferrer">
                <Icon type='logo-github' style={{fontSize: 30}}/>
            </a>
        </Tooltip>
    )
}