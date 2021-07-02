const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.join( __dirname, 'public' ),
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [ {
      test: /\.js$/,
      include: [
        path.resolve( __dirname, 'src' )
      ],
      exclude: [
        path.resolve( __dirname, 'node_modules' ),
        path.resolve( __dirname, 'src/playground' )
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          [ "@babel/preset-env", "@babel/preset-react", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          } ]
        ],
        plugins: [ "@babel/plugin-proposal-class-properties", "react-hot-loader/babel" ],
      }
    },
    {
      test: /\.scss$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader' ],
    } ]
  },
  resolve: {
    extensions: [ '.json', '.js', '.jsx' ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join( __dirname, 'public' ),
    inline: true,
    host: 'localhost',
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.resolve( './public/index.html' ),
    } ),
  ]
};