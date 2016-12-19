'use strict';

const got    = require('got');
const config = require('../server/config.js');

let port = config.port || 3000;

got.post(`http://localhost:${port}/encode/1`, {
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  	"input": [
  	  {
  	    "user": { "id": 1, "name": "Dalton", "prename": "John", "online": true },
  	    "project": { "id": 1, "name": "lodash"}
  	  },
  	  {
  	    "user": { "id": 1, "name": "Dalton", "prename": "John", "online": true },
  	    "project": { "id": 2, "name": "docdown"}
  	  }
  	]
  })
})
.then(response => {
  console.log('success', response.body);
})
.catch(error => {
  console.log('error', error.response.body);
});

got.post(`http://localhost:${port}/decode/1`, {
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
	   "input": [[ 1, 0, 0, 2, 1, 0 ],
  			       [ 1, 0, 0, 2, 2, 1 ]]
  })
})
.then(response => {
  console.log('success', response.body);
})
.catch(error => {
  console.log('error', error.response.body);
});
