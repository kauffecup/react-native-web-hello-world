import React          from 'react';
import { render }     from 'react-dom';
import Root           from './app/Root';
import configureStore from './app/store/configureStore';

// load our css
require('./app/web/styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
