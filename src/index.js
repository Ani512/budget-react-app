import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';
import '../node_modules/three-dots/dist/three-dots.min.css';
import AppRouter from './routers/Router';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import { firebase, googleAuthProvider } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { history } from './routers/Router';

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
        <AppRouter />
    </Provider>
);

let hasRender = false;
const renderApp = () =>
{
    if ( !hasRender )
    {
        render( jsx, document.getElementById( 'root' ) );
        hasRender = true;
    }
};

render( loading, document.getElementById( 'root' ) );

firebase.auth().onAuthStateChanged( ( user ) =>
{
    if ( user )
    {
        console.log( `${ user.email } : Logged In` );
        store.dispatch( startSetExpenses() ).then( () =>
        {
            renderApp();
        } );
        if ( history.location.pathname === '/' ) history.push( `/dash` );
    } else
    {
        console.log( 'Logged Out' );
        renderApp();
        history.push( '/' );
    }
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
