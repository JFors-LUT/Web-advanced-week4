const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser'); 
const app = express();
//define routes
const recipeRouter = require('./routes/recipe');
const imagesRouter = require('./routes/images');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

//use routes
app.use('/recipe', recipeRouter);
app.use('/images', imagesRouter);
//app.use('/images', upload.array('images'), imagesRouter);


app.get('/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.js'));
});

app.listen(() => console.log(`Server started on port`));


module.exports = app;