import React from 'react';
import { NavLink } from 'react-router-dom';

const Help = () =>
(
    <div>
        <p>How to use the Budget App</p>
        <NavLink exact to="/dash" className="btn btn-outline-success">
            Dashboard
        </NavLink>
    </div>
);

export default Help;