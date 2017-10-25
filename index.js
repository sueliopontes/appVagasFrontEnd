var express = require('express');
var app = express();
var cons = require('consolidate');

var forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/vagas'));

app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views',__dirname+'/public/vagas');

app.get('/',function(req,res){
  res.render('index')});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
