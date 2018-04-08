
/**
 * Module dependencies.
 */

const express = require('express');

const app = module.exports = express();

const routes = require('./routes');
const { env: { PORT = 3000 } } = process;

// config
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

// Routes mount
app.use('/', routes);

// initialize
app.listen(PORT, function(){
  console.log(`Application started at port: ${PORT}`);
});
