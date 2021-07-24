import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRouter = ( {
    isAuthenticated,
    component: Component,
    ...rest
} ) => (
    // rest contains all the remaining props 
    <Route { ...rest } component={ ( props ) =>
    (
        isAuthenticated ? <Redirect to='/dash' /> : ( <Component { ...props } /> )
    ) } />
);

const mapStateToProps = ( state ) => (
    {
        isAuthenticated: state.auth.uid ? true : false
    } );

export default connect( mapStateToProps )( PublicRouter );
