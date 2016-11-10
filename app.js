'use strict';

const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const _              = require('lodash');

const Onehot = require('./server/onehot.js');

app.use(bodyParser.json());

app.post('/encode/:id', (req, res) => {
  let id = req.params.id;
  let input = req.body.input;

  Onehot.encode(id, input)
    .then(output => res.json(output))
    .catch(err => res.json(err));
});

app.post('/decode/:id', (req, res) => {
  let id = req.params.id;
  let input = req.body.input;

  Onehot.decode(id, input)
    .then(output => res.json(output))
    .catch(err => res.json(err));
});

const server = require('http').Server(app);
const port = 3000;

server.listen(port, function(){
  console.log(`listening on *:${port}`);
});
