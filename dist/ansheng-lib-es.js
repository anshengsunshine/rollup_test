var hello = function hello() {
  console.log('hello world');
};

hello();
var world = 'world'; // import util from './util'
// console.log(util.a)

var util = require("./util");

console.log(util);

export { world };
