import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import onError from './tools/onerror';
import * as Sw from './serviceWorker';

onError();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

Sw.register();

