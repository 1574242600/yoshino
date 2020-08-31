import Cache from './tools/cache.class';
import Site from './tools/site.class';
import TimeToString from './tools/timeToString.class';
import toc from './tools/toc' ;
import i18n, { init as i18nInit } from './tools/i18n'

const loadHljs = async () => {
    if (window.hljs === undefined) {
        let hljs = document.createElement('script');

        let css = document.createElement('style');
        let cssContent = document.createTextNode('td.hljs-ln-code {padding-left: 5px;}');
        css.appendChild(cssContent);

        hljs.onload = () => {
            let number = document.createElement('script');

            number.onload = () => {
                window.hljs.initHighlighting()
                document.body.appendChild(css);
                window.hljs.initLineNumbersOnLoad();
            }

            number.src = '//cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js';
            document.body.appendChild(number);
        };

        hljs.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.3/highlight.min.js';
        document.body.appendChild(hljs);
    } else {
        window.hljs.initHighlighting.called = false;
        window.hljs.initHighlighting();
        window.hljs.initLineNumbersOnLoad();
    }
}

const loadUtils = async () => {
    if (window.initUtils === undefined) {
        let utils = document.createElement('script');
        utils.onload = () => {
            window.initUtils();
        }
        utils.src = './js/utils.js';
        document.body.appendChild(utils);
    } else {
        window.initUtils();
    }
}


export { Cache, Site, i18n, i18nInit, loadHljs, TimeToString, loadUtils, toc };
