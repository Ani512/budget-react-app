import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ( props ) => (
    <div>
        <div>
            <h1 className="text-center">Budget Calculator</h1>
        </div>
        <div>
            <NavLink to="/dash" className="btn-toDash m-2" activeClassName="h-active">
                Dashboard
            </NavLink>
            <NavLink to="/create" className="btn-toCreate m-2" activeClassName="h-active">
                Create Expense
            </NavLink>
            <NavLink to="/help" className="btn-toHelp m-2" activeClassName="h-active">
                Help
            </NavLink>
            <button className="btn btn-secondary btn-sm m-2" onClick={ props.startLogout }>Logout</button>
        </div>
    </div>
);

const mapDispatchToProps = ( dispatch ) => (
    {
        startLogout: () => dispatch( startLogout() )
    }
);

export default connect( undefined, mapDispatchToProps )( Header );