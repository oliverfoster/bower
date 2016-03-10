var express = require('express');
var exphbs  = require('express-handlebars');
var path = require("path");
global.app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static( path.join(__dirname, '../public')));

app.set('views', path.join(__dirname ,'../views'));

app.engine('.hbs', exphbs({
	extname: ".hbs"
}));
app.set('view engine', '.hbs');

app.get('/', function(request, response) {
  response.render('pages/index');
});


var packages = require('../lib/routes/packages');



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});