'use strict';
const Autoincrement = require('../server/auto-increment');

Autoincrement.encode(1, [{
  path: 'id',
  value: 1
}, {
  path: 'category.id',
  value: 5
}], [{}, {}, {}])
.then(console.log)
.catch(console.log)
