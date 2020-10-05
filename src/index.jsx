import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import onError from './tools/onerror';

onError();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

