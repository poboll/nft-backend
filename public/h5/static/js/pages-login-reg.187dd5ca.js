(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-reg"],{"096e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAyFJREFUaEPtWD1oFEEU/t6eGvZIJJcmXRoro6ioaKsBBUHRwsZCm0ggRlBCvNnTZhq9nVWDgj8QTKOFjYWiICgkliIqUWJS2dilyYUk3JHo7QsTbsMhd/uTJZiV3Xa+9+Z973v75s0QEv5RwuNHSuBfK5gqkCoQMwNpCcVMYGzzVIFaCsmyrH0AjjPzfmbuJqJOANtr6/PMPENEU0T0FcA727YnAHBcCWIpIKVsL5fL/UTUC2BHxGB+MvNoNpt9LKWci2i7Bl8Xgb6+vq0dHR2DrutaRNS+3s21HTPPGYZhz87ODo+MjPyO6isygUKh0F2tVp8T0Z6om/nhmfl7JpM5VywWp6L4jUQgn8+fIaJnAFqjbBIBu8jM5x3HeRnWJjQBIcQFAKMAtoR1vk7cHwC9SqmnYexDERBCnAbwIkzwzDxJRE8Mw3jf0tLySwextLTU5bruMWa+SES7QwSmSZxVSr0KwgYS0DXvuu5HAG0BzpYBDJqmqbuK2wgrpTQqlUo/gGEA2wL8LTDzYcdxpv1wvgR0t8nlcp8A6B7v9y0T0QnbtseCMqbXLcvqYea3IUhMlEqlQ37dyZeAEGIIwO0QQV1WSj30cIVC4WS1Wh0kooO1Vvk5k8kMF4vFNx5GCDEA4EEI39eUUnea4ZoSkFK2VioVXcO5gPY3mc1m93plI4S4CeB6E5tbSqkbek2XU7lc/hbinyiZptklpVxs5LMpAcuyLjHzWlZ9SFxVSt3X6zrzruu+9iNsGMYpTwkhxBUA94JUIKIB27YfRSIghBgHcCTIuWEYu7zDJ5/PjxHR0QDFxh3H6akR1g3iR9AeAD4opRr6baqAEGI+ROeBaZptnrwhbRaUUqtDXq1MF0IQWLP5G/tfE0h2CSX+J058G9U/y2Y4yIhoyLbtu5EPMm2Q+FGirlcnc5irm1uSO07XkUjuhcYjkegrZd2onNxLvUci0c8q9f04sQ9bDQ6V+qfFA0S0E0AnM69OnUSkJ9sZZp4moi+b5mkxxBi84ZDAV4kNjyDmBimBmAmMbZ4qEDuFMR2kCsRMYGzzVIHYKYzpYAUl9OpATOWOKAAAAABJRU5ErkJggg=="},"17f7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{phone:"",code:"",password:"",password_re:"",uuid:"",btnMsg:"获取验证码",tim:"",flag:!1,flag1:!1,disabled:!1,isRed:!1}},onShow:function(){},onLoad:function(t){t.invite&&(this.uuid=t.invite,this.disabled=!0)},methods:{sub:function(){var t=this;if(this.phone)if(this.code)if(this.password)if(this.password_re)if(this.password_re==this.password)if(this.isRed){var e={phone:this.phone,code:this.code,password:this.password,password_re:this.password_re,uuid:this.uuid};this.$http.post("login/register",e).then((function(e){1==e.code?(t.toast(e.msg),setTimeout((function(){uni.reLaunch({url:"login"})}),1e3)):t.toast(e.msg)}))}else this.toast("请阅读并同意协议");else this.toast("两次密码输入不一致");else this.toast("请再次输入登录密码");else this.toast("请输入登录密码");else this.toast("请输入验证码");else this.toast("请输入正确的手机号码")},getCode:function(){var t=this;""==this.tim&&(this.phone?this.$http.post("login/sendCode",{phone:this.phone,type:"1"}).then((function(e){if(1==e.code){t.toast(e.msg),t.tim=120;var i=setInterval((function(){t.tim>0?(t.btnMsg=t.tim+"s后重新获取",t.tim--):(t.btnMsg="获取验证码",t.tim="",clearInterval(i))}),1e3)}else t.toast(e.msg)})):this.toast("请输入正确的手机号码"))}}};e.default=a},"37db":function(t,e,i){"use strict";var a=i("6bf7"),n=i.n(a);n.a},"49fd":function(t,e,i){"use strict";i.r(e);var a=i("17f7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"4de6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-6ce1a1c7]{background-color:#23272c}body.?%PAGE?%[data-v-6ce1a1c7]{background-color:#23272c}",""]),t.exports=e},"6bf7":function(t,e,i){var a=i("4de6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3a5c913f",a,!0,{sourceMap:!1,shadowMode:!1})},"7b1f":function(t,e,i){"use strict";var a=i("f3a8"),n=i.n(a);n.a},"7f4e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"tBox"},[a("v-uni-view",{staticClass:"msg"},[t._v("手机号注册")])],1),a("v-uni-view",{staticClass:"iptItem"},[a("v-uni-view",{staticClass:"label"},[t._v("手机号")]),a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-text",{staticClass:"left"},[t._v("+86")]),a("v-uni-input",{staticClass:"ipt",attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号","placeholder-class":"iptP"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),a("v-uni-view",{staticClass:"iptItem"},[a("v-uni-view",{staticClass:"label"},[t._v("验证码")]),a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"number",placeholder:"请输入验证码","placeholder-class":"iptP"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),a("v-uni-view",{staticClass:"codeBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.btnMsg))])],1)],1),a("v-uni-view",{staticClass:"iptItem "},[a("v-uni-view",{staticClass:"label"},[t._v("登录密码")]),t.flag?t._e():a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"password",placeholder:"请输入登录密码","placeholder-class":"iptP"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-uni-image",{staticClass:"rightIcon",attrs:{src:i("c2658"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.flag=!t.flag}}})],1),t.flag?a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请输入登录密码","placeholder-class":"iptP"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-uni-image",{staticClass:"rightIcon",attrs:{src:i("096e"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.flag=!t.flag}}})],1):t._e()],1),a("v-uni-view",{staticClass:"iptItem"},[a("v-uni-view",{staticClass:"label"},[t._v("确认密码")]),t.flag1?t._e():a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"password",placeholder:"请再次输入登录密码","placeholder-class":"iptP"},model:{value:t.password_re,callback:function(e){t.password_re=e},expression:"password_re"}}),a("v-uni-image",{staticClass:"rightIcon",attrs:{src:i("c2658"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.flag1=!t.flag1}}})],1),t.flag1?a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请再次输入登录密码","placeholder-class":"iptP"},model:{value:t.password_re,callback:function(e){t.password_re=e},expression:"password_re"}}),a("v-uni-image",{staticClass:"rightIcon",attrs:{src:i("096e"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.flag1=!t.flag1}}})],1):t._e()],1),a("v-uni-view",{staticClass:"iptItem"},[a("v-uni-view",{staticClass:"label"},[t._v("邀请码（选填）")]),a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"text",disabled:t.disabled,placeholder:"请输入邀请码","placeholder-class":"iptP"},model:{value:t.uuid,callback:function(e){t.uuid=e},expression:"uuid"}})],1)],1),a("v-uni-view",{staticClass:"psdBox flexBox"},[t.isRed?t._e():a("v-uni-image",{staticClass:"rememberIcon",attrs:{src:i("e199"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isRed=!t.isRed}}}),t.isRed?a("v-uni-image",{staticClass:"rememberIcon",attrs:{src:i("e369"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isRed=!t.isRed}}}):t._e(),a("v-uni-view",{staticClass:"remeberBox"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isRed=!t.isRed}}},[t._v("我已阅读并同意")]),a("v-uni-view",{staticClass:"red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("privacyPolicy?type=1")}}},[t._v("《用户协议》")]),a("v-uni-view",{staticClass:"red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("privacyPolicy?type=2")}}},[t._v("《隐私政策》")])],1)],1),a("v-uni-view",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)}}},[t._v("立即注册")]),a("v-uni-view",{staticClass:"loginBox flex_ct",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("login")}}},[t._v("已有账号?"),a("v-uni-text",[t._v("直接登录")])],1)],1)},o=[]},c19b:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-6ce1a1c7]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}.content[data-v-6ce1a1c7]{position:relative;padding:0 %?40?% %?200?%}.content .tBox[data-v-6ce1a1c7]{padding:%?30?% 0}.content .tBox .msg[data-v-6ce1a1c7]{font-size:%?50?%;margin-bottom:%?20?%;font-weight:500;color:#fff}.content .tBox .sMsg[data-v-6ce1a1c7]{font-size:%?24?%;color:#aaa}.content .loginBox[data-v-6ce1a1c7]{position:absolute;left:0;bottom:%?50?%;width:100%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;color:#aaa}.content .loginBox uni-text[data-v-6ce1a1c7]{color:#ae3523}.content .iptItem[data-v-6ce1a1c7]{margin-bottom:%?20?%}.content .iptItem .label[data-v-6ce1a1c7]{color:#fff;font-size:%?26?%;font-weight:500;margin-bottom:%?10?%}.content .iptItem .iptBox[data-v-6ce1a1c7]{padding:0 %?30?%;background:#383b3f;height:%?100?%;border-radius:%?50?%;font-size:%?30?%}.content .iptItem .iptBox .left[data-v-6ce1a1c7]{color:#aaa;margin-right:%?40?%}.content .iptItem .iptBox .ipt[data-v-6ce1a1c7]{flex:1;height:100%;font-size:%?30?%;font-weight:500;color:#aaa}.content .iptItem .iptBox .iptP[data-v-6ce1a1c7]{color:#aaa;font-size:%?30?%;font-weight:500}.content .iptItem .iptBox .rightIcon[data-v-6ce1a1c7]{width:%?48?%;height:%?48?%;padding:%?10?%}.content .iptItem .iptBox .codeBtn[data-v-6ce1a1c7]{width:%?220?%;height:%?68?%;line-height:%?68?%;text-align:center;border-radius:%?34?%;font-size:%?30?%;font-weight:500;color:#f0ba55}.content .psdBox[data-v-6ce1a1c7]{width:100%;height:%?60?%;line-height:%?60?%}.content .psdBox .rememberIcon[data-v-6ce1a1c7]{width:%?32?%;height:%?32?%;padding:%?10?%}.content .psdBox .remeberBox[data-v-6ce1a1c7]{display:flex;color:#aaa;font-size:%?24?%;font-weight:400}.content .psdBox .remeberBox .red[data-v-6ce1a1c7]{color:#f0ba55}.content .subBtn[data-v-6ce1a1c7],\n.content .subBtn1[data-v-6ce1a1c7]{width:%?600?%;height:%?100?%;line-height:%?100?%;text-align:center;border-radius:%?50?%;color:#ffdd9d;font-size:%?32?%;font-weight:500;margin:%?80?% auto %?40?%;background:#ae3523;box-shadow:%?0?% %?8?% %?40?% %?0?% rgba(174,53,35,.4)}.content .subBtn1[data-v-6ce1a1c7]{color:#777;background:#fff;border:none;box-shadow:none;margin:0 auto;justify-content:center}.content .subBtn1 uni-image[data-v-6ce1a1c7]{width:%?40?%;height:%?32?%;margin-right:%?20?%}',""]),t.exports=e},c2658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA4pJREFUaEPtV0uIHEUY/v5qJ9qzq6vrxRwCinoxHnwgKlGQiIKCSyDm4CGewhJvWdneql4RS4nTXd1C8GRYcjIH8XVYBQ8+8KBBRXwcgggqCjnEi67Pac3Y9UtJB2TZnemZ6kVWeqBPXd/X3+PvvxnCNv/RNteP1sB/3WDbQNuAZwLtCHkG6A1vG/CO0JOgbcAzQG9424B3hJ4EbQOeAXrD/78NLC4uTk1PT5da6z+8Y/IgWFhYCGdmZkhr3d+IZtMGpJRfA+haa+/P8/xzDw0TQ6MoukEI8QaAvjHmmrEMKKVWmXkOwM/M/HCWZa9NrGQCoJTyAQAnAcwAWDXG7BvLwPz8fGd2dvaEEw+AAZwQQsRJkvwwgZ7akDiOL7fWJgAOAf/85X1+bW3t0MrKymAsA+cPx3F8xFr7tBsnAD8x8zNBEBxv2ogTXpblYSJaBHCpGxtmfizLsmerADcModYWiqLoWiHERwAuq1gKAC8DeCUMw7cmfdG11hcVRXEPgAcBHAAQVvxr1tpb8zz/alR1tQxIKY8BOOJSAfAegLsBXFCR/w7gYwAfEtFpZv52MBicsdb+2u/33T10u90pIcTFnU5nFxFdxczXA7gNwC0ApiqevwC8A+DOqu1jxphHvQ0opY66KgH8SURzaZq+uby8vLMsy4NVcjf+y8yo562/70R/5poMguBkr9c7q5S6l5ndwrgQwFFjzOPDSIc2IKVcAmAAuBfogDFmdT2Z1nq6KIo9RPQEM98O4HsALvlLqstBfqkul/YVzPwBET0ZhuEprfVv6zmXlpb2EdFLADoApDEm28zEKANuZHYQ0cE0TV8YlkT13bg6CIK9vV7v3Y3OKqX2MrMbk2822+vncUqph5jZrdFzxhi3QMZ/iaWU9xHRIE3Tt4eJj6JojxDifWY+0+12r9Ra243Oa61Fv9//joh2WWvvyPP81DBepdRd1togyzJnenwDdQdaKfUcMx8GkBpj4hFNuR2viOh4mqaP1H3GlhnQWu8oiuIsgFkhxO4kSb4YYWA3gNMAfgzDcKfW+pyPiVprdIQg98l3W+NTY8zNdcRIKT8BcBOAOWPM63UwW9ZAHMfXlWX5ohBCp2n6ah0xSqn9AJ4iov1JknxZB7NlBnwe3gTWe4SaEOHD0RrwSa8JbNtAEyn6cLQN+KTXBLZtoIkUfTjaBnzSawLbNtBEij4c276BvwGLjTJAeah8QwAAAABJRU5ErkJggg=="},c8d6:function(t,e,i){"use strict";i.r(e);var a=i("7f4e"),n=i("49fd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("37db"),i("7b1f");var s,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6ce1a1c7",null,!1,a["a"],s);e["default"]=l.exports},e199:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAbJJREFUOE+tlD9IW1EUh7+ThECgOBQCglstFDLp1KXoEB2KSyXJfR0LouDq5mopiDg61RYcWiH3EVxKl6pgJp2F0EBXlww66JAhuafc8FJe43s2Be947znf/Z2/QsIJw7AMBKo6B0xFJlci0gTqtVrtZNRN4hfW2ufAZ8ADUo+qNkVkxRjza2j0B9RoNOb6/f4R8PQhSOztOpvNLlcqFa+SAShScvEfkCHvGnjplQ1BZ/8K5wGVTWPMvNTr9QUR+TFmOIiIOuf2RGQJeDYIS2RBwjD8qKqr44KALeCDiJyr6mwE2hdr7U/gxTggEflUrVbXrLWHIvI25tP2oFvgSXR5A1ym5Osb8AbYATZGPr4bBZ22Wq3FUqnke+ldzPi8UCiUu93uuqruJqgfgP4KTVV3jDGb1tqvkfx2r9d7lc/nF51zX4BMAqidluytYrH4vtPp7DnntnO53LSqfgfySbkUkX0PKqvqcYLBpjFm21o7A/g+m0gryKD8UWffa0jfL8CBqr4GJtMgfu6CIJh/3BHxvz3K0A5lj7tGAD/xyWskngM/f5lMxiQtNuecDYLgXnF+A5BgvV+d+gA0AAAAAElFTkSuQmCC"},e369:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA3lJREFUSEudVktIVFEY/v4z13FRRkYL0TG9OqE9FM2gZS2KNGNKogmjiIiEUqFdL6WJNrWILI1IiehBrcIK7aWTtYqCcJIeSsYQPla9yIKsmfPHvXPvzJ07c006y3O+833//c7/uIQZ1q1VXg9FsQngWkkoF4yFGlwSPoExJEC97MKdLc9Hx51oKN3Bzcr8XEVxB8DYzcyKHWNeYgBEFAHjckT+DtQPjk06YeP7Nyu9PiH4OoOzoDFoyx5Gmn0CpqTkHfWD4btWkaSrN6qKm8HcBkDMZN0MZxJEB7a//NBuYuIC1ypVH0Dd9P/kOicDEuC6ncaX6AKXNM85Y5iALGt0phP/8jUNbipCf0r3DI5N6gJXKoo7JXhvyqezk4T5NjEDiAhZOdn4Pvk5TiEIXbtC4QbqKvd6BMkwkJots3kHlzsDaw9tRV5FEV5cCeL17WdGUlBEslCpq0JthERHMpk1EZ1lXG4F6w774ako0kEvrgYx1P0scUGgiTrLiu4xuMZ4oCS2tEViILTI1x/ZGicfCb7C044ewGIrEd2nC2VF48ycZ2UWgjAvZwG+GZ7ahbTIq4/6kW9EPhx8hSftPWDbmxHRBJ1fpv5iINMqsHpfNZbXrMS7vhAGzveAZeJUcSvYoJFXxmx5FwxhQCO3YMzCJGCa2tMIrNlfg7LqKp3gbX8Ij/XoAI289qgfiwxy7SzYrtliBpCcdQSaprZlheNgJFmkuDOwscWPAgvRwMUH2HgksffGIGdpJbUlB2GCziwtvCcZ+iObS4O5MjPga/Gj0BD5+fUH5mTP1SGv+0PoO5vw3CkZiHCfTi9RGyWzLU1jUkqmgs2t2+IiOnlfCA8t5HqhGZHZy1IQNdEpr9dDSjSst+U0oWi+17X6oa4oxtCjQTw815vIlhm6rdbGOeJSdcqTpQWdzJTaKozISBDm52Tj6+SX2RS3jiHirkPDHxt0gVMl+bkRdg3D1uxS2ewmOJlDUwpFSw+OGM1OIzpRovpYym7rLCCbu070tkAkhKhrHYkNniTXTyxWmyXLNjZnwuxakpVfukgcaH0fTh04JirgVX0SfB3MidnglIfJJTAlIHcERsecR6YpcqwkPzcaFQEAu8FIGfq2mokQ4TJNy8DxsVkMfevlY948TxTKJmbUMlAOxH5bAHwiYIgIvS5E7hwfnXD8bfkLhqhLIJNSmO0AAAAASUVORK5CYII="},f3a8:function(t,e,i){var a=i("c19b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("409361b0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);