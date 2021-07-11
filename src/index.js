import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setFilterText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch( addExpense( { description: 'Water Bill', amount: 1000, createdAt: 21000 } ) );
store.dispatch( addExpense( { description: 'Wifi Bill', amount: 200, createdAt: 51000 } ) );
// store.dispatch( setFilterText( { text: 'water' } ) );

let state = store.getState();
getVisibleExpenses( state.expenses, state.filters );

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
