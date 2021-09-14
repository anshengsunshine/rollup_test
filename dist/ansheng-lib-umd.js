(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.anshengLib = {}));
}(this, (function (exports) { 'use strict';

    var hello = function hello() {
      console.log('hello world');
    };

    hello();
    var world = 'world';

    var util = require("./util");

    console.log(util);

    exports.world = world;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
