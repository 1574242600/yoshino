import Cache from './cache.class' ;

export default async function _fetch(url, key, init = {}) {
    if (key) {
        let data = Cache.get(key);
        if (data) return data;
    }

    return await fetch(url, init).then(async response => {
        let data = await response.json();
        if (key) Cache.set(key, JSON.stringify(data));
        return data;
    })
}