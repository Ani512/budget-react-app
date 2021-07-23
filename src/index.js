import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import '../node_modules/three-dots/dist/three-dots.min.css';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

let loading = (
    <div>
        <h3>Loading</h3>
        <div className="dot-elastic ms-5"></div>
        <p>Getting Data from Firebase</p>
    </div>
);


let jsx = (
    <Provider store={ store }>
        <Router />
    </Provider>
);

render( loading, document.getElementById( 'root' ) );

store.dispatch( startSetExpenses() ).then( () =>
{
    render( jsx, document.getElementById( 'root' ) );
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
