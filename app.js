
var express = require('express');
var path = require('path')
var app = express();
var Handlebars = require('handlebars');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded());

app.use(require('./controllers'));





app.set('port', process.env.PORT || 8080);

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});

app.get('/', function(req, res) {

  res.sendFile(__dirname+'/index.html');

});

app.get('/about', function(req, res) {

  res.sendFile(__dirname+'/about.html');

});

app.get('/risktyle/privatepolicy', function(req, res) {

  res.sendFile(__dirname+'/files/BerlikLabsPrivatePolicy.docx');

});
