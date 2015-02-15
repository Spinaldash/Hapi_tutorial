'use strict';
module.exports = [
  {method: 'get', path: '/', config: require('../routes/home')},
  {method: 'get', path: '/dogs', config: dogs},
  {method: 'get', path: '/mj', config: mj}
];
