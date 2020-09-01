import React from 'react';
import LoadingComment from '../../widget/loading/loadingComment';

async function error() {
    try {
        let disqusDom = document.getElementById('disqus_thread');
        disqusDom.innerHTML = 'Disqus加载失败, 请检查您的地区是否支持Disqus';//这个没必要i18n吧
    } catch (e) {
        console.log(e);
    }
}

async function load(postId, id) {
    window.disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = postId;
    };

    if (window.DISQUS === undefined) {
        window.accessDisqus = true;
        (async () => {
            var d = document, s = d.createElement('script');
            s.src = `//${id}.disqus.com/embed.js`;
            s.async = true;
            s.onerror = () => {
                window.accessDisqus = false;
                window.DISQUS = 0;
                error()
            }
            s.setAttribute('data-timestamp', + new Date());
            (d.head || d.body).appendChild(s);
        })()
    } else {
        
        if (!window.accessDisqus) {
            error();
            return false;
        }

        window.DISQUS.reset({
            reload: true,
            config: function() {
                this.page.identifier = postId;
                this.page.url = window.location.href;
            }
        });
        
    };
}

export default class Disqus extends React.Component {

    componentDidMount() {
        load(this.props.postId, this.props.id)
    }

    render() {
        return (
            <div id='disqus_thread'>
                {window.DISQUS === undefined && <LoadingComment />}
            </div>
        )
    }
}