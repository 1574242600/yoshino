import Cache from './cache.class' ;
import _fetch from './fetch';

export default class Site {
    static async getConfig() {
        this.config = await _fetch('./config.json', 'config');
        return this.config;
    }

    static setTitle(title = undefined) {
        document.title = title ? `${title} | ${this.config.title}` : this.config.title;
    }

    static setMeta(name, content = undefined) {
        let element = document.querySelector(`meta[name='${ name }']`);
        if (element === null) {return false;}
        element.content = content;
        return true;
    }

    static setSiteCacheTime(time = 86400) { // 一天
        Cache.set('cacheTime', Math.ceil(Date.now() / 1000) + time);
        return true;
    }

    static isCacheTimedOut() {
        let time = Cache.get('cacheTime');
        if (time === null) {return true;} 
        return time < Math.ceil(Date.now() / 1000);
    }

    static clearSiteCache() {
        Cache.clear();
        return true;
    }
    
   
    static getPostsList(page) {
        return _fetch(`./post/${page}/index.json`, `page-${page}`);
    }

    static async getPost(id) {
        let index = await Site.getIndex();
        let page = Math.floor((index.total + -id) / index.per_page);

        // eslint-disable-next-line no-return-await
        return await _fetch(`./post/${page}/${id}.json`);
    }

    static getIndex() {
        return _fetch('./post/index.json', 'index');
    }

    static getPage(name) {
        return _fetch(`./${name}.json`, name);
    }
}

Site.config = null;

