const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

// make server
const app = express();

// middleware
app.use(bodyParser.json()); // checks if its json first
app.use(bodyParser.urlencoded({ extended: true })); // then checks this

// serve static files to directory
app.use(express.static(path.join(__dirname, '../../client')));

app.use('/api', routes);
app.use('/*', (req, res) => res.status(404).send('This page does not exist.'));

app.listen(3000, (req, res) => console.log('Listening on port 3000...'));