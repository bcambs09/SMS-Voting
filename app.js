
/**
 * Module dependencies.
 */
console.log("First.");
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');
console.log("Set up express to path");
var app = express();
console.log("App equals express");
app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.urlencoded());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
console.log("first configure");
app.configure('development', function(){
  app.use(express.errorHandler());
});
console.log("second configure");
app.get('/', routes.index);
app.post('/vote/sms', routes.voteSMS);
console.log("Get and post");
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
