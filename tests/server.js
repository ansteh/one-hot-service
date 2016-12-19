'use strict';

const got    = require('got');
const config = require('../server/config.js');

let port = config.port || 3000;

got.post(`http://localhost:${port}/encode/1`, {
  body: {
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
  }
})
.then(response => {
    console.log(response.body);
})
.catch(error => {
  console.log(error.response.body);
});
