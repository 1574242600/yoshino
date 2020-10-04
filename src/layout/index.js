import React from 'react';
const Pages = React.lazy(() => import('./page'));
const Post = React.lazy(() => import('./post'));
const Link = React.lazy(() => import('./link'));
const Archives = React.lazy(() => import('./archives'));
const About = React.lazy(() => import('./about'));
const Notfound = React.lazy(() => import('./404'));

export {Pages, Post, Link, Archives, Notfound, About}