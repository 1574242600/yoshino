import * as React from 'react';
import { Grid, Avatar } from 'yoshino';
import * as contacts from './contact/index';
import { Site } from '../../../global';
const { Row, Col } = Grid;


class AuthorAvatar extends React.Component {
    render() {
        return (
            <Col span={ 24 }>
                {<style>
                .yoshino-avatar-default img { '{' }
                    width: 100px;
                    height: 100px;
                    { '}' }
                </style>}

                <Avatar src={ Site.config.avatar }
                    style={ {
                        width: '100px',
                        height: '100px',
                        display: 'block',
                        margin: '8px auto'
                    } }
                />
            </Col>
        );
    }
}

class Introduction extends React.Component {
    render() {
        return (
            <Col span={ 24 } style={ { textAlign: 'center' } }>
                {Site.config.author }
                <br />
                <span style={ { color: 'rgba(0,0,0,0.5)' } }>一条咸鱼</span>
            </Col>
        );
    }
}

class Contact extends React.Component {

    getContacts() {
        return Object.keys(Site.config.contact);
    }

    renderContact(type) {
        let id = Site.config.contact[type];
        let YContact = contacts[type];

        return (
            <YContact key={ type } id={ id } />
        );
    }

    renderContacts() {
        return (this.getContacts()).map(type => {
            return this.renderContact(type);
        });
    }

    render() {
        if (Site.config.contact === null) {return false;}
        return (
            <Col span={ 24 }>
                <div style={ { textAlign: 'center', marginTop: '8px' } }>
                    { this.renderContacts() }
                </div>
            </Col>
        );
    }
}

export default class AuthorCard extends React.Component {
    render() {
        return (
            <Row>
                <Row>
                    <AuthorAvatar />
                </Row>
                <Row>
                    <Introduction />
                </Row>
                <Row>
                    <Contact />
                </Row>
            </Row>
        );
    }
}