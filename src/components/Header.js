import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <div>
            <h1 className="text-center">Budget Calculator</h1>
        </div>
        <div>
            <NavLink exact to="/dash" className="btn-toDash m-2" activeClassName="h-active">
                Dashboard
            </NavLink>
            <NavLink to="/create" className="btn-toCreate m-2" activeClassName="h-active">
                Create Expense
            </NavLink>
            <NavLink to="/help" className="btn-toHelp m-2" activeClassName="h-active">
                Help
            </NavLink>
        </div>
    </div>
);

export default Header;