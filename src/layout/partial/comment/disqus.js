import React from 'react';
import LoadingComment from '../../widget/loading/loadingComment';

async function load(postId, id) {
    window.disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = postId;
    };
           
    (function() {
        var d = document, s = d.createElement('script');
        s.src = `//${id}.disqus.com/embed.js`;
        s.onerror = () => {
            let disqusDom = document.getElementById('disqus_thread');
            disqusDom.innerHTML = 'Disqus加载失败, 请检查您的地区是否支持Disqus';  //这个没必要i18n吧
        }
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
    })();
}

export default class Disqus extends React.Component {
    componentDidMount() {
        load(this.props.postId, this.props.id)
    }

    render() {
        return (
            <div id='disqus_thread'>
                <LoadingComment />
            </div>
        )
    }
}