var path = require('path');
module.exports = {

    entry: {
      javascript: path.resolve(__dirname, 'src/app/index.js'),
      html:path.resolve(__dirname, 'src/index.html')
    },

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module:{
      loaders:[
        {
          test: /\.html$/,
          loader: "file?name=[name].[ext]",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',

        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel',
          query:
          {
            presets:['react']
          }
        }
      ]
/*var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }]
*/
    }
};
