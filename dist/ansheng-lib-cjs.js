'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hello = function hello() {
  console.log('hello world');
};

hello();
var world = 'world'; // import util from './util'
// console.log(util.a)

var util = require("./util");

console.log(util);

exports.world = world;
