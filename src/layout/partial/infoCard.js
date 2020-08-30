import React from 'react';
import { Link } from "react-router-dom";
import { loadUtils } from '../../global';
import * as Yoshino from 'yoshino';
import { i18n as _ } from '../../global';
const { Card, Icon, Modal } = Yoshino;

class Fixed extends React.Component {
    render() {
        return (
            <div 
                style={{
                    backgroundColor: '#f5f5f5',
                    position: 'fixed',
                    top: '24px',
                    left: 'auto',
                    width: '20%',
                    margin: '0 0 0 24px'
                }}
                className={this.props.className}
            >
                {this.props.children}
            </div>
        )
    }
}

class Search extends React.Component {
    constructor(props){
        super(props);
        this.onClick.bind(this)
    }

    onClick() {
        Modal.confirm({
            icon: <Icon type='md-checkmark'/>,
            title: '这是一个标题！！！',
            content: '这是一个内容主题！这是一个内容主题！这是一个内容主题！这是一个内容主题！！',
            width: 400,
            showClose: true,
          });
    }

    render() {
        return (
            <span onClick={ this.onClick }>
                <Icon type="md-search" style={{color: '#51b26d', fontSize: 27}}/>
            </span>
        );
    }
}

class PageInfo extends React.Component {
    render() {
        return (
            <Card title={ _('SiteInfo') } extra={<Search />}>
                <ul style={{ lineHeight: '20px' }}>
                    <li>{ _('PostTotal') }: <Link to='/?/archives'>{this.props.total}</Link></li>
                </ul>
            </Card>
        )
    }
}


class PostInfo extends React.Component {
    componentDidMount(){
        loadUtils()
    }

    format(text) {
        text = text.replace(/-/,"fuck123456");        //我承认我不会写正则
        text = text.replace(/((?=[\x21-\x7e]+)[^A-Za-z0-9])/g,"");
        text = text.replace(/\s+/g,"-");
        text = text.replace(/-$/,"");
        text = text.replace(/fuck123456/, "-");
        return text.toLowerCase();
    }
    
    renderNav() {
        if(this.props.nav === null) return(<div>{_('NoPostNav')}</div>)
        let html = '';
        let count = [0,0,0,0,0,0];
        let lastLevel = this.props.nav[0][0];

        for (let index in this.props.nav){
            index = Number(index);
            let value = this.props.nav[index];
            let level = value[0];
            if (lastLevel === level) {
                count[level - 1]++;
                html += `
                    <li class="nav-item nav-level-${level}">
                        <a class="nav-link" href="#${this.format(value[1])}">
                            <span>${ count[level - 2] ? count[level - 1] + '.' + count[level - 2] : count[level - 1] + '.'}</span>${value[1]}
                        </a>`
                if ( !this.props.nav[index + 1] || this.props.nav[index + 1][0] === level ) { html += '</li>' };
                lastLevel = level;
                continue;
            }


            
            if (lastLevel < level) {
                count[level - 1]++;
                html +='<ol class="nav-child">';
                html += `
                    <li class="nav-item nav-level-${level}">
                        <a class="nav-link" href="#${this.format(value[1])}">
                            <span>${count[level - 2]}.${count[level - 1]}</span>${value[1]}
                        </a>
                    </li>`
                lastLevel = level;
                continue;
            }
            
            if (lastLevel > level) {
                count[level - 1]++;
                if (level > 2) count[level - 2] = 0;
                html += `
                    </ol>
                    <li class="nav-item nav-level-${level}">
                        <a class="nav-link" href="#${this.format(value[1])}">
                            <span>${count[level - 1]}.</span>${value[1]}
                        </a>
                    </li>
                     `
                    lastLevel = level;
            }
        }

        return (
            <div className='post-toc'>
                <ol className='nav' style={{ lineHeight: '20px' }} dangerouslySetInnerHTML={{__html: html}}>
                </ol>
            </div>
        )
    }

    render() {
        return (
            <Card title={ _('PostNav') }>
                <div className='post-toc-wrap'>
                    {this.renderNav()}
                </div>
            </Card>
        )
    }
}

export default class InfoCard extends React.Component {
    render() {
        return (    //用Row会报错不知道为什么
            <Fixed className={'yoshino-card-shadow'} >
                { this.props.type === 'page' &&
                    <PageInfo total={this.props.total} />
                }

                { this.props.type === 'post' &&
                    <PostInfo nav={this.props.nav} />
                }
            </Fixed>
        )
    }
}