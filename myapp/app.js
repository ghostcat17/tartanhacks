var express = require('express');
var path = require('path');

var ejs = require('ejs');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(8080);
app.get('/',function(req,res){
  res.render('pages/index')
});

