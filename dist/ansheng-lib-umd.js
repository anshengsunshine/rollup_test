(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.anshengLib = {}));
}(this, (function (exports) { 'use strict';

    var hello = function hello() {
      console.log('hello world');
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = "body{color:green;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}";
    styleInject(css_248z);

    hello();
    var world = 'world';

    var util = require("./util");

    console.log(util);

    exports.world = world;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
