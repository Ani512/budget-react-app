import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRouter = ( {
    isAuthenticated,
    component: Component,
    ...rest
} ) => (
    // rest contains all the remaining props 
    <Route { ...rest } component={ ( props ) =>
    (
        isAuthenticated ?
            (
                <div>
                    <Header />
                    <Component { ...props } />
                </div>
            ) : <Redirect to='/' />
    ) } />
);

const mapStateToProps = ( state ) => (
    {
        isAuthenticated: state.auth.uid ? true : false
    } );

export default connect( mapStateToProps )( PrivateRouter );
