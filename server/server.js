var express = require('express');
var app = express();
var http = require('http');
var port = (process.env.NODE_ENV === 'development') ? 5000 : 4568;

// Enable React-Hot-Loader in development using webpack middleware
if (process.env.NODE_ENV === 'development') {

  // Packages required for React-Hot-Loader as follows:
  const webpack = require('webpack');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath,
    stats: {
      'colors': true,
      'chunks': false, // Reduces junk seen in terminal;
      'errors-only': true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));

}

require('./config/middleware.js')(app, express); // Middleware

app.set('port', port);
var server = http.createServer(app);
server.listen(port, () => {
  console.log('Server now listening on port: ' + port);
});

module.exports = app;