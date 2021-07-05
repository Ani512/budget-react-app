import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
    <div>
        <h1>Invalid URL</h1>
        <p>Please check Page URL</p>
        <p>404 Error</p>
        <Link to="/">Return Home</Link>
    </div>
);
// to is just like an href 
// However, it uses client side routing instead of server side routing 

export default Page404;