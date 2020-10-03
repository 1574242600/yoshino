let postNav = {
    registerSidebarTOC: function () {
        const navItems = document.querySelectorAll('.post-toc li');
        const sections = [
            ...navItems
        ].map(element => {
            var link = element.querySelector('a.nav-link');
            link.addEventListener('click', event => {
                event.preventDefault();
                var target = document.getElementById(event.currentTarget.getAttribute('href').replace('#', ''));
                var offset = target.getBoundingClientRect().top + window.scrollY;
                window.anime({
                    targets: document.scrollingElement,
                    duration: 500,
                    easing: 'linear',
                    scrollTop: offset + 10
                });
            });
            return document.getElementById(link.getAttribute('href').replace('#', ''));
        });
        var tocElement = document.querySelector('.post-toc-wrap');

        function activateNavByIndex(target) {
            if (target.classList.contains('active-current')) return;
            document.querySelectorAll('.post-toc .active').forEach(element => {
                element.classList.remove('active', 'active-current');
            });
            target.classList.add('active', 'active-current');
            var parent = target.parentNode;
            while (!parent.matches('.post-toc')) {
                if (parent.matches('li')) parent.classList.add('active');
                parent = parent.parentNode;
            }
            window.anime({
                targets: tocElement,
                duration: 200,
                easing: 'linear',
                scrollTop: tocElement.scrollTop - (tocElement.offsetHeight / 2) + target.getBoundingClientRect().top - tocElement.getBoundingClientRect().top
            });
        }

        function findIndex(entries) {
            let index = 0;
            let entry = entries[index];
            if (entry.boundingClientRect.top > 0) {
                index = sections.indexOf(entry.target);
                return index === 0 ? 0 : index - 1;
            }
            for (; index < entries.length; index++) {
                if (entries[index].boundingClientRect.top <= 0) {
                    entry = entries[index];
                } else {
                    return sections.indexOf(entry.target);
                }
            }
            return sections.indexOf(entry.target);
        }

        function createIntersectionObserver(marginTop) {
            marginTop = Math.floor(marginTop + 10000);
            window.intersectionObservers = new IntersectionObserver((entries, observe) => {
                let scrollHeight = document.documentElement.scrollHeight + 100;
                if (scrollHeight > marginTop) {
                    observe.disconnect();
                    createIntersectionObserver(scrollHeight);
                    return;
                }
                let index = findIndex(entries);
                activateNavByIndex(navItems[index]);
            }, {
                rootMargin: marginTop + 'px 0px -100% 0px',
                threshold: 0
            });
            sections.forEach(element => {
                element && window.intersectionObservers.observe(element);
            });
        }

        createIntersectionObserver(document.documentElement.scrollHeight);
    }
};

window.initPostNav = async () => {
    if (window.anime === undefined) {
        let anime = document.createElement('script');
            anime.onload = () => {
            postNav.registerSidebarTOC();
        }
        
        anime.async = true;
        anime.src = '//cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js'
        document.body.appendChild(anime);
    } else {
        postNav.registerSidebarTOC();
    }
}


window.destroyPostNav = () => {
    try {
        window.intersectionObservers.disconnect();
    } catch {
    }
}


