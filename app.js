var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get('/', function(req, res, next) {
    res.render('index', { title: 'Ravi Chandra' });
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
  res.render('error');
});

app.listen(5000);
module.exports = app;
