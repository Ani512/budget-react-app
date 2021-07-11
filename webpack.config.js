const path = require( 'path' );

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join( __dirname, 'public' ),
    filename: "bundle.js",
  },
  module: {
    rules: [ {
      test: /\.js$|jsx/,
      loader: 'babel-loader',
      exclude: [
        path.resolve( __dirname, 'node_modules' ),
        // path.resolve( __dirname, 'src/playground' )
      ],
      options: {
        presets: [ "@babel/preset-env", "@babel/preset-react" ],
        plugins: [ "@babel/plugin-proposal-class-properties", "react-hot-loader/babel" ],
      }
    },
    {
      test: /\.s?css$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader' ],
    } ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join( __dirname, 'public' ),
    inline: true,
    host: 'localhost',
    port: 8000,
    historyApiFallback: true, // Tells the dev-server to look for routes in the public folder
  },
};