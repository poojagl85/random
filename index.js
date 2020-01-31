const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const landing = require('./controllers/landing');
app.use('/', landing);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on ${PORT}`));
