const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = () =>
{
  return {
    // mode: 'development',
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.join( __dirname, 'dist' ), // public during dev 
      filename: "bundle.js",
    },
    module: {
      rules: [ {
        test: /\.js$|jsx/,
        loader: 'babel-loader',
        exclude: [
          path.resolve( __dirname, 'node_modules' ),
          path.resolve( __dirname, 'src/playground' )
        ],
        options: {
          presets: [ "@babel/preset-env", "@babel/preset-react" ],
          plugins: [ "@babel/plugin-proposal-class-properties", "react-hot-loader/babel" ],
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      ]
    },
    // devtool: 'eval-cheap-module-source-map', // (Only required during Dev)
    devtool: 'source-map',
    devServer: {
      contentBase: path.join( __dirname, 'dist' ),  // public during dev 
      inline: true,
      host: 'localhost',
      port: 8000,
      historyApiFallback: true, // Tells the dev-server to look for routes in the public folder
    },
    plugins: [
      new HtmlWebpackPlugin( {
        template: path.resolve( './public/index.html' ),
      } ),
      new MiniCssExtractPlugin( {
        filename: 'style.css',
        chunkFilename: '[id].css'
      } )
    ]
  };
};