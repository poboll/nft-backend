(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-mySaleDetail"],{"03f5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uniPopup:i("0582").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"Box"},[o("v-uni-view",{staticClass:"rotateBox",style:"background-image: url("+t.info.image+");background-size: 100% 100%"},[o("v-uni-image",{staticClass:"image",attrs:{src:i("970a")}})],1)],1),o("v-uni-view",{staticClass:"Box1"},[o("v-uni-image",{staticClass:"img",attrs:{src:i("0ce2"),mode:""}}),o("v-uni-view",{staticClass:"center"},[o("v-uni-view",{staticClass:"goodsName"},[t._v(t._s(t.info.name))]),o("v-uni-view",{staticClass:"flexBox LimitBox"},[o("v-uni-view",{staticClass:"Limit"},[t._v("限量")]),o("v-uni-view",{staticClass:"stock"},[t._v(t._s(t.info.surplus)+"份")])],1)],1),o("v-uni-image",{staticClass:"img",attrs:{src:i("fcdb"),mode:""}})],1),o("v-uni-view",{staticClass:"msgBox"},[o("v-uni-view",{staticClass:"priceBox"},[t._v("当前价:"),o("v-uni-text",[t._v("¥"+t._s(t.info.price))])],1),o("v-uni-view",{staticClass:"describe"},[t._v(t._s(t.info.title))])],1),o("v-uni-view",{staticClass:"goodsinfo"},[o("v-uni-view",{staticClass:"iptBox  flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("创作者")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.creator))])],1),o("v-uni-view",{staticClass:"iptBox flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("拥有者")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.owner)),o("v-uni-image",{staticClass:"copy",attrs:{src:i("f00a"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.info.owner)}}})],1)],1),o("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("铸造平台")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_name))])],1),o("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("铸造时间")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_time))])],1),o("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("TokenID")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.token_id)),t.info.token_id?o("v-uni-image",{staticClass:"copy",attrs:{src:i("f00a"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.info.token_id)}}}):t._e()],1)],1),t.info.number?o("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("购买编号")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.number))])],1):t._e(),o("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("合约地址")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.contract_address)),o("v-uni-image",{staticClass:"copy",attrs:{src:i("f00a"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.info.contract_address)}}})],1)],1),o("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[o("v-uni-view",{staticClass:"label"},[t._v("区块链")]),o("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.blockchain))])],1)],1),t.info.content?o("v-uni-view",{staticClass:"descBox"},[o("v-uni-view",{staticClass:"item"},[t._v("藏品介绍")]),o("v-uni-view",{staticClass:"desinfo",domProps:{innerHTML:t._s(t.util.checkImg(t.info.content))}})],1):t._e(),o("v-uni-view",{staticClass:"footerBox flex_bt"},[o("v-uni-view",{staticClass:"subBtn subBtn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSalePopup()}}},[t._v("修改信息")]),2==t.info.status&&1==t.info.is_show?o("v-uni-view",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.offSale("0")}}},[t._v("下 架")]):t._e(),2==t.info.status&&0==t.info.is_show?o("v-uni-view",{staticClass:"subBtn subBtn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.offSale("1")}}},[t._v("上 架")]):t._e()],1),o("uni-popup",{ref:"salePopup",attrs:{type:"center","mask-click":!1}},[o("v-uni-view",{staticClass:"specs_boxs"},[o("v-uni-view",{staticClass:"flex"},[o("v-uni-input",{staticClass:"ipt",attrs:{type:"digit","placeholder-class":"iptP",placeholder:"请输入商品价格"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),o("v-uni-view",{staticClass:"btnBox flex"},[o("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeSalePopup()}}},[t._v("取消")]),o("v-uni-view",{staticClass:"btn btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifyPrice()}}},[t._v("确定")])],1)],1)],1)],1)},a=[]},"3c31":function(t,e,i){"use strict";i.r(e);var o=i("03f5"),n=i("689a");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("b5c1"),i("c64c");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"b814ff78",null,!1,o["a"],s);e["default"]=r.exports},"4b4c":function(t,e,i){var o=i("24fb"),n=i("1de5"),a=i("1417"),s=i("61c4");e=o(!1);var c=n(a),r=n(s);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-b814ff78]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}@-webkit-keyframes myfirst-data-v-b814ff78{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}@keyframes myfirst-data-v-b814ff78{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}.content[data-v-b814ff78]{padding-bottom:%?200?%}.content .Box[data-v-b814ff78]{width:100%;height:%?680?%;padding-bottom:%?50?%;background:url('+c+") no-repeat 0 0;background-size:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.content .Box .rotateBox[data-v-b814ff78]{width:%?540?%;height:%?540?%;-webkit-animation:myfirst-data-v-b814ff78 10s linear .15s 100;animation:myfirst-data-v-b814ff78 10s linear .15s 100}.content .Box .rotateBox .image[data-v-b814ff78]{width:%?540?%;height:%?540?%}.content .Box1[data-v-b814ff78]{width:100%;height:%?360?%;margin-top:%?-100?%;padding-bottom:%?30?%;background:url("+r+") no-repeat top;background-size:%?620?%;display:flex;justify-content:center;align-items:flex-end}.content .Box1 .img[data-v-b814ff78]{width:%?84?%;height:%?152?%;margin:0 %?15?%}.content .Box1 .center[data-v-b814ff78]{max-width:%?500?%;height:%?152?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.content .Box1 .center .goodsName[data-v-b814ff78]{color:#fff;font-size:%?30?%;text-align:center;overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .Box1 .center .LimitBox[data-v-b814ff78]{height:%?40?%;line-height:%?40?%;background:#4c464a;border-radius:%?6?%;font-size:12px;text-align:center}.content .Box1 .center .LimitBox .Limit[data-v-b814ff78]{width:%?60?%;padding:0 %?10?%;border-radius:%?6?%;color:#010101;background-color:#f1e2bc}.content .Box1 .center .LimitBox .stock[data-v-b814ff78]{padding:0 %?10?%;color:#f1e2bc}.content .specs_boxs[data-v-b814ff78]{padding:%?50?% 0 %?10?%;width:%?600?%;background:#fff;border-radius:%?12?%;margin:0 auto}.content .specs_boxs .ipt[data-v-b814ff78]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?28?%;font-weight:500;color:#333;background-color:#f7f7f7;padding-left:%?30?%;margin:0 %?30?%}.content .specs_boxs .iptP[data-v-b814ff78]{color:#777;font-weight:400}.content .specs_boxs .btnBox[data-v-b814ff78]{margin-top:%?20?%}.content .specs_boxs .btnBox .btn[data-v-b814ff78]{flex:1;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?30?%}.content .specs_boxs .btnBox .btn1[data-v-b814ff78]{color:#427afc}.content .banner[data-v-b814ff78]{width:100%;height:%?500?%;background-color:#23272c}.content .banner .uni-swiper-wrapper[data-v-b814ff78]{z-index:10}.content .banner uni-image[data-v-b814ff78]{width:100%;height:%?500?%}.content .msgBox[data-v-b814ff78]{background-color:#23272c;padding:%?30?%}.content .msgBox .goodsName[data-v-b814ff78]{color:#fff;font-size:%?36?%;font-weight:500;margin-bottom:%?20?%}.content .msgBox .describe[data-v-b814ff78]{color:#aaa;font-size:%?24?%;line-height:%?36?%;font-weight:500;margin-top:%?20?%}.content .msgBox .priceBox[data-v-b814ff78]{color:#ae3523;font-size:%?24?%;font-weight:500}.content .msgBox .priceBox uni-text[data-v-b814ff78]{font-weight:500;font-size:%?36?%;margin-left:%?10?%}.content .descBox[data-v-b814ff78]{padding:%?20?% %?30?%;background-color:#23272c;color:#aaa}.content .descBox .item[data-v-b814ff78]{font-size:%?26?%;font-weight:500;color:#fff;margin-bottom:%?10?%}.content .goodsinfo[data-v-b814ff78]{padding:0 %?30?%;background-color:#23272c;margin:%?20?% 0}.content .goodsinfo .iptBox[data-v-b814ff78]{padding:%?20?% 0}.content .goodsinfo .iptBox .label[data-v-b814ff78]{width:20%;font-size:%?24?%;color:#aaa}.content .goodsinfo .iptBox .center[data-v-b814ff78]{width:75%;color:#fff;font-size:%?24?%;line-height:%?44?%;word-break:break-word;position:relative}.content .goodsinfo .iptBox .copy[data-v-b814ff78]{width:%?44?%;height:%?44?%;position:absolute}.content .goodsinfo .iptBox1 .center[data-v-b814ff78]{color:#aaa;font-weight:500}.content .footerBox[data-v-b814ff78]{position:fixed;left:0;bottom:0;z-index:10;width:100%;height:%?120?%;background-color:#23272c;box-shadow:%?0?% %?-4?% %?32?% %?0?% hsla(0,0%,70.6%,.5)}.content .footerBox .subBtn[data-v-b814ff78]{width:%?320?%;height:%?88?%;line-height:%?88?%;text-align:center;color:#ffdd9d;font-size:%?32?%;font-weight:500;background:#ae3523;border-radius:%?44?%;border:%?2?% solid #ae3523;margin:0 %?30?%}.content .footerBox .subBtn1[data-v-b814ff78]{background:#383b3f;color:#fff;border:%?2?% solid #333}",""]),t.exports=e},"4b7e":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-b814ff78]{background-color:#23272c}body.?%PAGE?%[data-v-b814ff78]{background-color:#23272c}",""]),t.exports=e},"5e83":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{goodsId:"",banner:{},info:{},msg:"",price:"",saleFlag:!1}},onLoad:function(t){this.goodsId=t.goodsId,this.getData()},onShow:function(){},methods:{openSalePopup:function(){this.saleFlag=!0,this.$refs.salePopup.open()},closeSalePopup:function(){this.price="",this.saleFlag=!1,this.$refs.salePopup.close()},modifyPrice:function(){var t=this;if(this.price){var e={id:this.goodsId,price:this.price};this.$http.post("order/checkPrice",e).then((function(e){1==e.code?(t.toast(e.msg),t.closeSalePopup(),setTimeout((function(){t.getData()}),600)):t.toast(e.msg)}))}else this.toast("请输入商品价格")},offSale:function(t){var e=this;this.saleFlag&&this.closeSalePopup(),this.msg="1"==t?"确认上架？":"确认下架？",this.confirm("提示",this.msg,(function(){var i={id:e.goodsId,is_show:t};e.$http.post("order/checkShow",i).then((function(t){1==t.code?(e.toast(t.msg),setTimeout((function(){e.getData()}),600)):e.toast(t.msg)}))}))},getData:function(){var t=this;this.$http.get("order/collectionDetail",{id:this.goodsId}).then((function(e){1==e.code&&(t.banner=e.data.images,t.info=e.data)}))}}};e.default=o},"5ef6":function(t,e,i){var o=i("4b7e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("1a2358e2",o,!0,{sourceMap:!1,shadowMode:!1})},"689a":function(t,e,i){"use strict";i.r(e);var o=i("5e83"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"7f0c":function(t,e,i){var o=i("4b4c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("1c1f590d",o,!0,{sourceMap:!1,shadowMode:!1})},b5c1:function(t,e,i){"use strict";var o=i("5ef6"),n=i.n(o);n.a},c64c:function(t,e,i){"use strict";var o=i("7f0c"),n=i.n(o);n.a}}]);