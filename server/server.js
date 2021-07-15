// Setting Up the Express Server for Deployment to Heroku

const express = require( 'express' );
const path = require( 'path' );
const app = express();

const publicPath = path.join( __dirname, '..', 'dist' );

app.use( express.static( publicPath ) );
app.get( '*', ( req, res ) =>
{
    res.sendFile( path.join( publicPath, 'index.html' ) );
} );

app.listen( 3000, () =>
{
    console.log( 'Server Running' );
} );