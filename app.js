'use strict';

const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const _              = require('lodash');

const Onehot         = require('./server/onehot.js');
const Autoincrement  = require('./server/auto-increment');

app.use(bodyParser.json());

app.post('/encode/:id', (req, res) => {
  let id = req.params.id;
  let input = req.body.input;
  let options = req.body.options;

  Autoincrement.create(id, options)
    .then(() => Onehot.encode(id, input))
    .then(output => res.json(output))
    .catch(err => res.json(err));
});

app.post('/decode/:id', (req, res) => {
  let id = req.params.id;
  let input = req.body.input;
  let options = req.body.options;

  Onehot.decode(id, input)
    .then(output => Autoincrement.encode(id, options, output))
    .then(output => res.json(output))
    .catch(err => res.json(err));
});

const server = require('http').Server(app);
const config = require('./server/config.js');


let port = config.port || 3000;

server.listen(port, function(){
  console.log(`listening on *:${port}`);
});
