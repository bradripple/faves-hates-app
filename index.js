const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
app.use('/faves', require('./controllers/faves'))
app.use('/hates', require('./controllers/hates'))

const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('home');
});







app.listen(PORT, () => {
    console.log('Server running on PORT:', PORT);
})