(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-couponDetail"],{"1aa4":function(n,o,t){var e=t("e927");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=t("4f06").default;a("1ff2c9ec",e,!0,{sourceMap:!1,shadowMode:!1})},"30fc":function(n,o){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABP5JREFUaEPtmkuIHFUUhv9TU5OFOMioq0jUKCq6kwzxATE7QQxGNK2SgIuZrnuH3ik+gvGRqBFf6K6Ze6tnIxjU1mAkIrhTMQ+ZITsliooZdBUdJOIi011H7tA93O6pZ0/dJkLXZmDq1Dnnq3Pufx/VhCFdQRDcR0TKhGNmGYbhF8MITcMIYmIIIc4B2NKJt6S1vnYYsYcJyDaQ1noosYcSpFPBEaCLlh1V0Kif53kHmPl2AJfleMtLcSophEhtUUtlu0KUFupfIjoTRdHhLDVOreDs7Oy+KIreA+DlALNN1qlkFmCfyuYNF3me9/jc3Nz7SQ8kAk5PT0/4vv8rgKvyRrPshgVoQv7p+/719Xr9n7g8EwGllIKZVyfmgtcwWrQnJSKSSildFHCBmbd1HyKil5VSLxWEXTPPatEifqWUh5j5RSu3RaXUVG7AarW6zfO8BeuBtu/7W+v1+lKRRGzbMgFrtdqWVqtlhs9YN0YURVONRmOxP7/YFhVCmNYUlvHnWutdg8K5mOiFEMcB3G/lpLXWMhOwVqtd3mq1/gAw0TVm5t1hGH52KQEGQfAAER2zcrrg+/7mfrFZV8EYcfl9eXn5umaz2b6UACuVytjk5ORvAK6xxuI6sVkHGATBAhGVJi7d4GWOwa7PfrFh5sUwDHvEpgcwTlwA3KC1NludDV0uAIUQZsv1S5rY9AC6EBeXFeyIV6rYrAG6EhfXgFliswboSlxcA2aJzRqgC3GpVCqbms3mxbR50LYZdJCnic0qoAtxEUK8AeBJAOeY+TEi+s4GYObtRPQBACMU72itnx0UME1sVgHLFpcgCG4morNWwn8DuKIPoOd/zHxLGIY/bgAyVmzIhbjEvdGMxM0iYkPTUZLYkCtxEUI8B+Bwzooc0Fq/ltM21ixJbEgI8S2Au63lzoa2RXZ0IYTZXh3MSPyg1vrQRuCSVjYAThjAnrOSQQP5vj8Rt6vOgIyF6wybC4PmYj9XGmCaSCRAJlYuRqQGZi0NEMA+rfWRpEyEEPsBvNK5/4LW+vUU270AEg+SitCWBkhEHymlHk0LPjMzc6W5Pz8//1eanZTyQ2Z+pAhIku06wLzfDKSU9zDzV5Zjs2K5TWv980YSE0LcCOB7AJss4duplPo6j99+TRkYEICZYn4wY89K5KhS6uE8iSTZSCk/YeaHLJ9nlVK3mq9uefyWCQgp5R5mbvaoFtHTSqm38yTTbyOlfIqZ3+rzV1FKfZzXX6mAJqiU8iQz32kl0Cai/UUhO3BGeNZOyojolFLqrrxwxq50wGq1utXzPLOQvrrvzR9l5meyxqQZc0T0pt2WHT/noyja3mg0zPFg7qt0QBM5CIKdRPSlLQydjC4S0afMfIyZF8bHx81pHVZWVjYT0RQR7WbmB+OeY+Z7wzC0RSwXpBNAC9KMlZ5K5sqq1+g8M+8ZBM5Ji9q5mXYdGxs70jcmczOaMddut/cWbUs7gLMK2kGMugJ41Z5C0ig7e8fni6hlkr+hAHaCm3lyBzPvIiKjsjcx86S5R0TLAH5i5lNEdFwp9U3eeS6rHYYJmJWLk/sjwLxrUSevvwSnowqOKlhCG7l0MWrRUYu67K8SfI9adNSiJbSRSxdxLWo+fBT9sZ3LHMv0HZlTtRMACp17lJmBY18nDeAdAMx2ZdxxsGG7XwGwo/sB1EC+C8D8/b+3awTgNIAntNan/wN3EiDMe4bIDwAAAABJRU5ErkJggg=="},"65d8":function(n,o,t){"use strict";t.d(o,"b",(function(){return a})),t.d(o,"c",(function(){return i})),t.d(o,"a",(function(){return e}));var e={tkiQrcode:t("f7f9").default},a=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"couponBox "},[e("v-uni-view",{staticClass:"couponTop flex_bt"},[e("v-uni-view",{},[e("v-uni-view",{staticClass:"name"},[n._v(n._s(n.couponDetail.name))]),e("v-uni-view",{staticClass:"time"},[n._v("有效期至:"+n._s(n.couponDetail.end_time))])],1),e("v-uni-view",{staticClass:"price"},[n._v("¥"+n._s(n.couponDetail.money))])],1),e("v-uni-view",{staticClass:"flex_column"},[e("tki-qrcode",{ref:"qrcode",attrs:{cid:"qrcode1",val:n.couponDetail.order_num,size:n.size,unit:"upx",background:n.background,foreground:n.foreground,pdground:n.pdground,onval:n.onval,loadMake:n.loadMake,usingComponents:!0},on:{result:function(o){arguments[0]=o=n.$handleEvent(o),n.qrR.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"number"},[n._v("券码:"),e("v-uni-text",[n._v(n._s(n.couponDetail.order_num))])],1)],1)],1),e("v-uni-view",{staticClass:"btnBox flex_ar"},[e("v-uni-view",{staticClass:"btnItem",on:{click:function(o){arguments[0]=o=n.$handleEvent(o),n.saveQrcode.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"img",attrs:{src:t("30fc"),mode:""}}),e("v-uni-view",{},[n._v("保存图片")])],1)],1)],1)},i=[]},"6ab2":function(n,o,t){"use strict";var e=t("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=e(t("f7f9")),i={components:{tkiQrcode:a.default},data:function(){return{couponDetail:{},qrcodesrc:"",ifShow:!0,val:"二维码",size:400,background:"#ffffff",foreground:"#000000",pdground:"#000000",onval:!1,loadMake:!0}},onLoad:function(){this.couponDetail=uni.getStorageSync("Coupon")},methods:{saveQrcode:function(){this.$refs.qrcode._saveCode()},qrR:function(n){this.qrcodesrc=n},save:function(n){uni.downloadFile({url:this.qrcode,success:function(n){console.log(n),200==n.statusCode&&uni.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"none"})},fail:function(n){console.log(n)}})}})}}};o.default=i},"723e":function(n,o,t){"use strict";t.r(o);var e=t("65d8"),a=t("a008");for(var i in a)"default"!==i&&function(n){t.d(o,n,(function(){return a[n]}))}(i);t("ee73"),t("a227");var c,r=t("f0c5"),u=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"0f90330e",null,!1,e["a"],c);o["default"]=u.exports},"7d8f":function(n,o,t){n.exports=t.p+"static/img/coupon3.cde51e3d.png"},"7f14":function(n,o,t){var e=t("24fb"),a=t("1de5"),i=t("7d8f");o=e(!1);var c=a(i);o.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-0f90330e]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}.tki-qrcode[data-v-0f90330e]{width:%?400?%;height:%?400?%;margin:%?40?% auto}.content[data-v-0f90330e]{padding-top:%?30?%}.content .couponBox[data-v-0f90330e]{padding:%?30?% %?54?%;height:%?870?%;background:url('+c+") no-repeat;background-size:100% 100%;display:flex;flex-direction:column}.content .couponBox .couponTop[data-v-0f90330e]{height:%?200?%;margin-bottom:%?40?%}.content .couponBox .couponTop .name[data-v-0f90330e]{color:#333;font-size:%?48?%;font-weight:500;margin-bottom:%?10?%}.content .couponBox .couponTop .time[data-v-0f90330e]{color:#999;font-size:%?24?%;font-weight:500}.content .couponBox .couponTop .price[data-v-0f90330e]{color:#f0ba55;font-size:%?60?%;font-weight:500}.content .couponBox .qrcode[data-v-0f90330e]{width:%?400?%;height:%?400?%;margin:%?40?% auto}.content .couponBox .number[data-v-0f90330e]{text-align:center;font-size:%?40?%;color:#777;margin-top:%?50?%}.content .couponBox .number uni-text[data-v-0f90330e]{color:#ae3523}.content .btnBox[data-v-0f90330e]{margin-top:%?100?%}.content .btnBox .btnItem[data-v-0f90330e]{color:#666;font-size:%?32?%;text-align:center}.content .btnBox .btnItem .img[data-v-0f90330e]{width:%?56?%;height:%?56?%;margin-bottom:%?10?%}",""]),n.exports=o},a008:function(n,o,t){"use strict";t.r(o);var e=t("6ab2"),a=t.n(e);for(var i in e)"default"!==i&&function(n){t.d(o,n,(function(){return e[n]}))}(i);o["default"]=a.a},a227:function(n,o,t){"use strict";var e=t("f2b4"),a=t.n(e);a.a},e927:function(n,o,t){var e=t("24fb");o=e(!1),o.push([n.i,"uni-page-body[data-v-0f90330e]{background-color:#23272c}body.?%PAGE?%[data-v-0f90330e]{background-color:#23272c}",""]),n.exports=o},ee73:function(n,o,t){"use strict";var e=t("1aa4"),a=t.n(e);a.a},f2b4:function(n,o,t){var e=t("7f14");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=t("4f06").default;a("3d99e434",e,!0,{sourceMap:!1,shadowMode:!1})}}]);