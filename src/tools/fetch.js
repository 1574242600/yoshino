import Cache from './cache.class' ;

export default function _fetch(url, key, init = {}) {
    if (key) {
        let data = Cache.get(key);
        if (data) {return data;}
    }

    return fetch(url, init).then(async response => {
        let data = await response.json();
        if (key) {Cache.set(key, JSON.stringify(data));}
        return data;
    }).catch( e => {
        console.error('请求错误: \n' + e);
    });
}