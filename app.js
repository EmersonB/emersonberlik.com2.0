
var express = require('express');
var path = require('path')
var app = express();
var Handlebars = require('handlebars');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded());



app.set('port', process.env.PORT || 8080);

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});

app.get('/', function(req, res) {

  res.sendFile(__dirname+'/home.html');

});

app.get('/.well-known/acme-challenge/mgicD-bfw1BkGhVPjlGjqo7hhRnprOLkIrDqxAheHDo', function(req, res) {

  res.send('mgicD-bfw1BkGhVPjlGjqo7hhRnprOLkIrDqxAheHDo.G6lO1BSz-SrVAiDgA3Z6-o9sdUlLxl_N1YBRTCIpQIQ');

});


app.get('/risktyle/privatepolicy', function(req, res) {

  res.sendFile(__dirname+'/files/BerlikLabsPrivatePolicy.docx');

});

app.get('/privatepolicy', function(req, res) {

  res.sendFile(__dirname+'/files/BerlikLabsPrivatePolicy.docx');

});

app.get('/resume', function(req, res) {

  res.sendFile(__dirname+'/files/emersonberlikresume.pdf');

});
