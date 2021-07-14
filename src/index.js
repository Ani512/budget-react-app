import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import 'normalize.css';

const store = configureStore();

let jsx = (
    <Provider store={ store }>
        <Router />
    </Provider>
);
render( jsx, document.getElementById( 'root' ) );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
