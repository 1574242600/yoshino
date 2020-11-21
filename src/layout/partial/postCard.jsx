import React from 'react';
import PropTypes from 'prop-types';
import { CardInfo } from './postCard/Info';
import Content from './postCard/content';
import CardShadow from '../widget/cardShadow';
import Title from '../widget/title';
                
export default class PostCard extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <CardShadow margin={ window.isLg ? '28px' : '0' }>
                <Title 
                    style={{ 
                        marginTop: '8px',
                        textAlign: 'center' , 
                        fontSize: '25px',
                        color: '#444',
                        fontWeight: 700 
                    }}
                >{data.info.title}</Title>
                <div>
                    {!this.props.isPage && <CardInfo info={this.props.data.info} />}
                </div>
                <Content value={data.content} />
            </CardShadow>
        );
    }
}

PostCard.propTypes = {
    isPage: PropTypes.bool,
    data: PropTypes.shape({
        info: PropTypes.object,
        content: PropTypes.string 
    })
};