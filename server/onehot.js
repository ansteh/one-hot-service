'use strict';
const _ = require('lodash');
const encoders = new Map([]);
const Onehot = require('one-hot-json');

const encode = (id, input) => {
  return new Promise((resolve, reject) => {
    try {
      let encoder;
      if(encoders.has(id)) {
        encoder = encoders.get(id);
      } else {
        let sample = _.first(input);
        encoder = Onehot(sample)
      }
      let encoded = encoder.encode(input);
      encoders.set(id, encoder);
      resolve(encoded);
    } catch(err) {
      reject(err);
    }
  });
};

const decode = (id, input) => {
  return new Promise((resolve, reject) => {
    try {
      if(encoders.has(id)) {
        resolve(encoders.get(id).decode(input));
      } else {
        reject({ msg: `no encoder found by id: ${id}` });
      }
    } catch(err) {
      reject(err);
    }
  });
};

module.exports = {
  encode: encode,
  decode: decode
};
