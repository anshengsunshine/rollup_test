var e,t;(e=self.document)&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t));function n(e,t,n,s,o,r,l,i,a,d){"boolean"!=typeof l&&(a=i,i=l,l=!1);const c="function"==typeof n?n.options:n;let m;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),s&&(c._scopeId=s),r?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=m):t&&(m=l?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),m)if(c.functional){const e=c.render;c.render=function(t,n){return m.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,m):[m]}return n}const s="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,t)=>function(e,t){const n=s?t.media||"default":e,o=l[n]||(l[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(n),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{const e=o.ids.size-1,t=document.createTextNode(n),s=o.element.childNodes;s[e]&&o.element.removeChild(s[e]),s.length?o.element.insertBefore(t,s[e]):o.element.appendChild(t)}}}(e,t)}let r;const l={};const i={name:"Hello",data:function(){return{msg:"hello lib !"}}};var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"hello"},[e._v("\n  "+e._s(e.msg)+"\n")])};a._withStripped=!0;const d=n({render:a,staticRenderFns:[]},(function(e){e&&e("data-v-414428eb_0",{source:"\n.hello[data-v-414428eb] {\r\n  color: red;\n}\r\n",map:{version:3,sources:["F:\\my_project\\rollup_test\\rollup_test\\src\\components\\Hello.vue"],names:[],mappings:";AAkBA;EACA,UAAA;AACA",file:"Hello.vue",sourcesContent:['<template>\r\n  <div class="hello">\r\n    {{ msg }}\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: "Hello",\r\n  data() {\r\n    return {\r\n      msg: "hello lib !",\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n\r\n<style scoped>\r\n.hello {\r\n  color: red;\r\n}\r\n</style>\r\n']},media:void 0})}),i,"data-v-414428eb",false,undefined,!1,o,void 0,void 0);function c(e){e.component(d.name,d)}export{c as install};
