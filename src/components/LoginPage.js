import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { connect } from 'react-redux';
import startLogin from '../actions/auth';

const LoginPage = ( props ) =>
(
    <div>
        <h2>Login to View Expenses</h2>
        <button className="btn btn-primary" onClick={ props.startLogin }><FiLogIn /> Login</button>
    </div>
);

const mapDispatchToProps = ( dispatch ) => (
    {
        startLogin: () => dispatch( startLogin() )
    } );

export default connect( undefined, mapDispatchToProps )( LoginPage );