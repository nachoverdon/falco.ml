var express = require('express');
var favicon = require('serve-favicon');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('assets'));
app.use(favicon(__dirname + '/assets/images/favicon.ico'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/falco', function(req, res) {
  var http = require('http'),
    querystring = require('querystring'),
    fs = require('fs'),
    StringDecoder = require('string_decoder').StringDecoder;



  var falco = {},
    host = 'smashlounge.com',
    path = '/api/attack/char/5'; // 5 = falco


  function performReq(endpoint, method, data, success) {
    var dataString = JSON.stringify(data),
      headers = {};

    if (method == 'GET') {
      endpoint += querystring.stringify(data);
    } else {
      headers = {
        'Content-Type': 'application/json',
        'Content-Length': dataString.length
      };
    }

    var options = {
      host: host,
      path: endpoint,
      method: method,
      headers: headers
    };

    var request = http.request(options, function(response) {
      response.setEncoding('utf-8');
      var responeString = '';

      console.log('statusCode: ', response.statusCode);
      falco.data = [];

      response.on('data', function(data) {
        responeString += data;
      });

      response.on('end', function() {
        //console.log(responeString);
        var responeObject = JSON.parse(responeString);
        success(responeObject);
      });
    });

    request.write(dataString);
    request.end();
  }

  // performReq(path, 'GET', {}, function(data) {
  //   var falcoFrameData = require('./app/falcoFrameData.js');
  //   console.log(data.attacks.smash);
  //   res.render('falco', {
  //     falcoData: data,
  //     falcoFrameData: falcoFrameData
  //   });
  // });
  var falcoFrameData = require('./app/falcoFrameData.js');
  res.render('falco', {
    falcoFrameData: falcoFrameData
  });

});

app.get('/:page', function(req, res) {
  var page = req.params.page;
  res.render(page);
});

// var htmlRoutes = express.Router();

// app.use('/html', htmlRoutes);

// htmlRoutes.route('')
//   .get(function(req, res) {
//     res.render('html/index');
//   });

app.listen(port, function(err) {
  console.log('running server on port ' + port);
});