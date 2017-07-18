module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /(s-alert-default.css|s-alert-css-effects|normalize.css)/,
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
      },
      {
        test: /\.css$/,
        include: /(s-alert-default.css|s-alert-css-effects|normalize.css)/,
        loader: 'style-loader!css-loader?sourceMap',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
    ]
  }
};
