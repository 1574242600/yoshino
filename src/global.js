import Cache from './tools/cache.class';
import Site from './tools/site.class';
import TimeToString from './tools/timeToString.class';
import toc from './tools/toc';
import i18n, { init as i18nInit } from './tools/i18n';

window.isLg = window.innerWidth > 992;

const loadJs = async (name, async = true, callback, errorCallback) => {
    let js = document.createElement('script');
    js.async = async;
    js.onload = callback;
    js.onerror = errorCallback;
    js.src = `./js/${name}.js`;
    document.body.appendChild(js);
};


export { Cache, Site, i18n, i18nInit, TimeToString, loadJs, toc };
