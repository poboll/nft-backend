(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-share"],{"2c4e":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-8244165a]{background:#fff}body.?%PAGE?%[data-v-8244165a]{background:#fff}",""]),t.exports=a},4382:function(t,a,e){var n=e("a73b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("2e2b4ecf",n,!0,{sourceMap:!1,shadowMode:!1})},"4de9":function(t,a,e){t.exports=e.p+"static/img/bg.4cff061f.jpg"},6171:function(t,a,e){var n=e("2c4e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("0d09557e",n,!0,{sourceMap:!1,shadowMode:!1})},"9ed7":function(t,a,e){t.exports=e.p+"static/img/11.3af05331.png"},a73b:function(t,a,e){var n=e("24fb"),i=e("1de5"),o=e("4de9"),r=e("9ed7"),s=e("efc0");a=n(!1);var c=i(o),d=i(r),u=i(s);a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-8244165a]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}.container[data-v-8244165a]{background:#181818;background-image:url('+c+");background-repeat:no-repeat;background-size:100% auto;padding-bottom:%?100?%}.container .info[data-v-8244165a]{width:%?654?%;height:%?186?%;margin:%?200?% auto 0}.container .erweima[data-v-8244165a]{width:%?564?%;height:%?680?%;background:url("+d+') no-repeat;background-size:%?564?% %?680?%;margin:0 auto 0;padding:%?68?% %?130?% 0;box-sizing:border-box}.container .list[data-v-8244165a]{width:%?694?%;margin:%?60?% auto 0}.container .list .title[data-v-8244165a]{height:%?68?%;position:relative;width:100%}.container .list .title[data-v-8244165a]::after{position:absolute;bottom:0;content:"";width:100%;height:%?30?%;left:0;z-index:8;background:#3c3c3c}.container .list .title[data-v-8244165a]::before{position:absolute;bottom:0;content:"";width:100%;height:%?68?%;left:%?204?%;background:url('+u+") no-repeat;background-size:%?286?% %?68?%;z-index:9}.container .list .con[data-v-8244165a]{padding-top:%?30?%;background:#3c3c3c;box-sizing:border-box}.container .list .con .listcon[data-v-8244165a]{border-bottom:%?2?% solid #434343}.container .list .userimg[data-v-8244165a]{width:%?50?%;height:%?50?%;margin-right:%?20?%;border-radius:50%}.container .w560[data-v-8244165a]{width:%?564?%;margin:%?30?% auto %?50?%}.container .bg1[data-v-8244165a]{background:#a4805c;border-radius:%?8?%}.container .bg2[data-v-8244165a]{background:#f9c21a;border-radius:%?8?%}",""]),t.exports=a},bb79:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"img center mb-60"},[e("v-uni-view",{staticClass:"info"})],1),e("v-uni-view",{staticClass:"erweima  mb-30"},[e("qrcode",{ref:"qrcode",attrs:{val:t.register_url,size:t.size,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,lv:t.lv,onval:t.onval,loadMake:t.loadMake},on:{result:function(a){arguments[0]=a=t.$handleEvent(a),t.qrR.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"flex flex-between  w560"},[e("v-uni-view",{staticClass:"ptb-16 plr-50 size-28 white bg1",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.save.apply(void 0,arguments)}}},[t._v("保存二维码")]),e("v-uni-view",{staticClass:"ptb-16 plr-50 size-28 white bg2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copy(t.register_url)}}},[t._v("分享链接")])],1),t.team.length>0?e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"title"}),e("v-uni-view",{staticClass:"con plr-24"},t._l(t.team,(function(a,n){return e("v-uni-view",{key:n,staticClass:"flex bb ptb-28 listcon"},[e("v-uni-image",{staticClass:"userimg",attrs:{src:a.head_image,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"size-28 white"},[t._v(t._s(a.phone))]),e("v-uni-view",{staticClass:"size-28 white autor"},[t._v(t._s(a.create_time))])],1)})),1)],1):t._e()],1)},o=[]},bc4d:function(t,a,e){"use strict";(function(t){var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("a159")),o={data:function(){return{team:[],register_url:"",qr_code_img:"",val:"",size:300,background:"#ffffff",foreground:"#000000",pdground:"#000000",icon:"",iconsize:50,lv:3,onval:!0,loadMake:!0,src:""}},components:{qrcode:i.default},onLoad:function(){var a=this;this.$http.get("user/team").then((function(e){1==e.code&&(a.team=e.data,t("log",e," at pages/my/share.vue:58"))})),this.$http.get("user/share ").then((function(e){1==e.code&&(a.register_url=e.data.register_url,a.qr_code_img=e.data.qr_code_img,t("log",e," at pages/my/share.vue:65"))}))},methods:{creatQrcode:function(){this.$refs.qrcode._makeCode()},qrR:function(t){this.src=t},save:function(){t("log",this.qr_code_img," at pages/my/share.vue:78"),uni.downloadFile({url:this.qr_code_img,success:function(a){t("log",a," at pages/my/share.vue:82"),200===a.statusCode&&uni.saveImageToPhotosAlbum({filePath:a.tempFilePath,success:function(){uni.showToast({title:"保存成功"})}})}})}}};a.default=o}).call(this,e("0de9")["log"])},c052:function(t,a,e){"use strict";e.r(a);var n=e("bb79"),i=e("e71f");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("de5b"),e("fd94");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"8244165a",null,!1,n["a"],r);a["default"]=c.exports},de5b:function(t,a,e){"use strict";var n=e("6171"),i=e.n(n);i.a},e71f:function(t,a,e){"use strict";e.r(a);var n=e("bc4d"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},efc0:function(t,a,e){t.exports=e.p+"static/img/list.8521aaf5.png"},fd94:function(t,a,e){"use strict";var n=e("4382"),i=e.n(n);i.a}}]);