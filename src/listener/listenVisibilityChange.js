import { Site } from '../global';

export default () => {
    //改变标题
    if (Site.config.listener.visibilitychange.enable ? 'true' : 'false') {
        let OriginTitile = document.title;
        // eslint-disable-next-line init-declarations
        let titleTime;
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.title = Site.config.listener.visibilitychange.hide_text;
                clearTimeout(titleTime);
            } else {
                document.title = Site.config.listener.visibilitychange.show_text;
                titleTime = setTimeout(function () {
                    document.title = OriginTitile;
                }, 2000);
            }
        });
    }
};
