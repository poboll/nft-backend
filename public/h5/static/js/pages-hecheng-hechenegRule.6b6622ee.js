(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hecheng-hechenegRule"],{2614:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{composeConfig:{}}},onLoad:function(){this.getComposeConfig()},methods:{getComposeConfig:function(){var n=this;this.$http.post("compose/getComposeConfig").then((function(t){1==t.code&&(n.composeConfig=t.data)}))}}};t.default=o},3712:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"rule",domProps:{innerHTML:n._s(n.composeConfig.rule)}})],1)},i=[]},"3ff6":function(n,t,e){"use strict";e.r(t);var o=e("2614"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=r.a},"775f":function(n,t,e){var o=e("24fb");t=o(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-29156561]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}.rule[data-v-29156561]{padding:%?30?%;color:#fff}',""]),n.exports=t},"84c8":function(n,t,e){"use strict";e.r(t);var o=e("3712"),r=e("3ff6");for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("d96e");var a,s=e("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"29156561",null,!1,o["a"],a);t["default"]=c.exports},d96e:function(n,t,e){"use strict";var o=e("f1d6"),r=e.n(o);r.a},f1d6:function(n,t,e){var o=e("775f");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e("4f06").default;r("4efba1f2",o,!0,{sourceMap:!1,shadowMode:!1})}}]);