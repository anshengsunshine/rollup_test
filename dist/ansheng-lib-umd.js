!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).anshengLib={})}(this,(function(e){"use strict";function t(e,t,n,o,s,r,i,l,a,d){"boolean"!=typeof i&&(a=l,l=i,i=!1);const c="function"==typeof n?n.options:n;let p;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),o&&(c._scopeId=o),r?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=p):t&&(p=i?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),p)if(c.functional){const e=c.render;c.render=function(t,n){return p.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,p):[p]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,t)=>function(e,t){const o=n?t.media||"default":e,i=r[o]||(r[o]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(n),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{const e=i.ids.size-1,t=document.createTextNode(n),o=i.element.childNodes;o[e]&&i.element.removeChild(o[e]),o.length?i.element.insertBefore(t,o[e]):i.element.appendChild(t)}}}(e,t)}let s;const r={};const i={name:"Hello",data:function(){return{msg:"hello lib !"}}};var l=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"hello"},[e._v("\n  "+e._s(e.msg)+"\n")])};l._withStripped=!0;const a=t({render:l,staticRenderFns:[]},(function(e){e&&e("data-v-414428eb_0",{source:"\n.hello[data-v-414428eb] {\r\n  color: red;\n}\r\n",map:{version:3,sources:["F:\\my_project\\rollup_test\\rollup_test\\src\\components\\Hello.vue"],names:[],mappings:";AAkBA;EACA,UAAA;AACA",file:"Hello.vue",sourcesContent:['<template>\r\n  <div class="hello">\r\n    {{ msg }}\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: "Hello",\r\n  data() {\r\n    return {\r\n      msg: "hello lib !",\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n\r\n<style scoped>\r\n.hello {\r\n  color: red;\r\n}\r\n</style>\r\n']},media:void 0})}),i,"data-v-414428eb",false,undefined,!1,o,void 0,void 0);e.install=function(e){e.component(a.name,a)},Object.defineProperty(e,"__esModule",{value:!0})}));
