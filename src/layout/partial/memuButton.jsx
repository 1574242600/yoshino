import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'yoshino';


export default function MemuButton(props) {
    const { open } = props;
    const isLg = window.isLg;
    const lg_mW = open ? undefined : '50px';
    const lg_TB = open ? 'auto' : 0 ;
    const m_mW = open ? undefined : '1280px';
    
    return (
        <div className={'drawer width-transition'}
            style={{
                textAlign: 'right',
                zIndex: 10001,
                top: isLg ? lg_TB : 'auto',
                bottom: isLg ? lg_TB : 'auto',
                left: 'auto',
                width: isLg ? undefined : '100%',
                maxWidth: isLg ? lg_mW : m_mW,
                maxHeight: !isLg ? '50px' : undefined,
                backgroundColor: open ? '' : '#f5f5f5',
            }}>
            <Icon type='md-menu' style={{ color: '#51b26d', fontSize: 50 }} onClick={props.onClick} />
        </div>
    );
}

MemuButton.propTypes = {
    onClick: PropTypes.func,
    open: PropTypes.bool
};