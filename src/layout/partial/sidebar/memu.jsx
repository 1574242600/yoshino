import * as React from 'react';
import { Menu } from 'yoshino';
import Site from '../../../tools/site.class';
import { i18n as _ } from '../../../global' ;


export default class Memu extends React.Component {
    //todo 子菜單
    mods = {}
    homeMatch = [/\?\/page\/([0-9]+)/ , '1']

    constructor(props) {
        super(props);
        this.mods = this.parseSiteMemu();
    }

    parseSiteMemu() {
        let memu = Site.config.menu;
        let mods = {};
        let i = 1;

        for (let name in memu) {
            let path = '?' + memu[name];
            mods[path] = String(i) ;
            i++;
        }

        return mods;
    }

    getPath(key) {
        return Object.keys(this.mods)[key - 1];
    }

    getActiveKey(path) {
        if (path === '') return this.homeMatch[1];
        if (this.homeMatch[0].test(path)) return this.homeMatch[1];
        

        return this.mods[path] ? this.mods[path] : '-1';
    }
    
    renderItem(name, key) {
        return (
            <Menu.Item key={ key }> 
                { _(name) }
            </Menu.Item>
        )
    }

    renderAllItem() {
        let memuList = Object.keys(Site.config.menu);
        
        return memuList.map((name, i) => {
            return this.renderItem(name, i + 1)
        });
    }

    render() {

        let activeKey = this.getActiveKey(this.props.path);

        return (
            //defaultActiveKey='1' defaultOpenKeys={['sub1']}
            <Menu 
                activeKey={ activeKey } 
                onSelect={
                    (key) => {
                        this.props.history.push(this.getPath(key))
                    }
                }
            >
              { this.renderAllItem() }
            </Menu>
        )
    }
 
};
