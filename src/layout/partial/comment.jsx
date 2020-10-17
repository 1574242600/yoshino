import React from 'react';
import PropTypes from 'prop-types';
import CardShadow from '../widget/cardShadow';
import { Site } from '../../global';
import * as modIndex from './comment/index';

export default class Comment extends React.Component {
    renderMod() {
        let postId = this.props.postId;

        for (let name in Site.config.comment){
            let Mod = modIndex[name];
            if (Site.config.comment[name].enable) {
                return (<Mod postId={postId} id={Site.config.comment[name].id} />);
            }
        }

        return (<div>null</div>);
    }

    render() {
        let isLg = window.innerWidth > 992;
        
        return (
            <CardShadow margin={ isLg ? '24px' : '0' }>
                <div id='comment' style={{padding: '10px'}}>
                    { this.renderMod() }
                </div>
            </CardShadow>
        );
    }
}

Comment.propTypes = {
    postId: PropTypes.number
};