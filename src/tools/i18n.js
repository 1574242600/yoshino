import _fetch from './fetch';
import Cache from './cache.class';

export function init(language) {
    return _fetch('./i18n/' + language + '.json', 'i18n');
}

export default (key) => {
    let i18n = Cache.get('i18n');
    if (!i18n[key]) {return 'i18n error';}
    return i18n[key];
};


