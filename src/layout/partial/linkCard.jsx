import React from 'react';
import * as Yoshino from 'yoshino';
const { Col } = Yoshino.Grid;

export default class LinkCard extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <Col xs={ 12 } lg={ 6 } sm={ 8} style={{padding: '16px '}}>
                <a href={ data.url } style={{ textDecoration: 'none'}} >
                    <img src={ data.avatar } alt={ data.title } style={{width:'100px',height: '100px'}}/>
                    <h3 style={{color: '#555', fontSize: '16px'}} >{ data.name }</h3>
                    <span style={{fontSize: '12px'}}>{ data.intr }</span>
                </a>
            </Col>
        )
    }
}