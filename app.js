const express = require('express')
const app = express()

const methodOverride = require('method-override')
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const reviews = require('./controllers/reviews')(app);
const comments = require('./controllers/comments')(app);
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
