(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-food-index"],{"059d":function(t,e,a){"use strict";a.r(e);var n=a("dc48"),i=a("1a61");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("7120");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"a75f7a08",null,!1,n["a"],void 0);e["default"]=s.exports},"0c9c":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={props:{}}},1622:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uOverlay:a("5537").default,uTransition:a("059d").default,uStatusBar:a("d3c4").default,uIcon:a("98c9").default,uSafeBottom:a("4dc7").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-popup"},[t.overlay?a("u-overlay",{attrs:{show:t.show,duration:t.overlayDuration,customStyle:t.overlayStyle,opacity:t.overlayOpacity},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.overlayClick.apply(void 0,arguments)}}}):t._e(),a("u-transition",{attrs:{show:t.show,customStyle:t.transitionStyle,mode:t.position,duration:t.duration},on:{afterEnter:function(e){arguments[0]=e=t.$handleEvent(e),t.afterEnter.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-popup__content",style:[t.contentStyle],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)}}},[t.safeAreaInsetTop?a("u-status-bar"):t._e(),t._t("default"),t.closeable?a("v-uni-view",{staticClass:"u-popup__content__close",class:["u-popup__content__close--"+t.closeIconPos],attrs:{"hover-class":"u-popup__content__close--hover","hover-stay-time":"150"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"close",color:"#909399",size:"18",bold:!0}})],1):t._e(),t.safeAreaInsetBottom?a("u-safe-bottom"):t._e()],2)],1)],1)},o=[]},"1a61":function(t,e,a){"use strict";a.r(e);var n=a("66cd"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"1ea0":function(t,e,a){"use strict";var n=a("217f"),i=a.n(n);i.a},"217f":function(t,e,a){var n=a("44a5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4ca58e46",n,!0,{sourceMap:!1,shadowMode:!1})},"2a70":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=n},"3c0b":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),o=n(a("1da1"));a("d3b7"),a("99af");n(a("baec"));var r=function(t){return{enter:"u-".concat(t,"-enter u-").concat(t,"-enter-active"),"enter-to":"u-".concat(t,"-enter-to u-").concat(t,"-enter-active"),leave:"u-".concat(t,"-leave u-").concat(t,"-leave-active"),"leave-to":"u-".concat(t,"-leave-to u-").concat(t,"-leave-active")}},s={methods:{clickHandler:function(){this.$emit("click")},vueEnter:function(){var t=this,e=r(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=e.enter,this.$nextTick((0,o.default)((0,i.default)().mark((function a(){return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,uni.$u.sleep(20);case 2:t.$emit("enter"),t.transitionEnded=!1,t.$emit("afterEnter"),t.classes=e["enter-to"];case 6:case"end":return a.stop()}}),a)}))))},vueLeave:function(){var t=this;if(this.display){var e=r(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=e.leave,this.$nextTick((function(){t.transitionEnded=!1,t.$emit("leave"),setTimeout(t.onTransitionEnd,t.duration),t.classes=e["leave-to"]}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=s},"41cf":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-30282a05], uni-scroll-view[data-v-30282a05], uni-swiper-item[data-v-30282a05]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-popup[data-v-30282a05]{flex:1}.u-popup__content[data-v-30282a05]{background-color:#fff;position:relative}.u-popup__content--round-top[data-v-30282a05]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.u-popup__content--round-left[data-v-30282a05]{border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:10px}.u-popup__content--round-right[data-v-30282a05]{border-top-left-radius:10px;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:0}.u-popup__content--round-bottom[data-v-30282a05]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}.u-popup__content--round-center[data-v-30282a05]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.u-popup__content__close[data-v-30282a05]{position:absolute}.u-popup__content__close--hover[data-v-30282a05]{opacity:.4}.u-popup__content__close--top-left[data-v-30282a05]{top:15px;left:15px}.u-popup__content__close--top-right[data-v-30282a05]{top:15px;right:15px}.u-popup__content__close--bottom-left[data-v-30282a05]{bottom:15px;left:15px}.u-popup__content__close--bottom-right[data-v-30282a05]{right:15px;bottom:15px}',""]),t.exports=e},"44a5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-b2a05bc2], uni-scroll-view[data-v-b2a05bc2], uni-swiper-item[data-v-b2a05bc2]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-overlay[data-v-b2a05bc2]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7)}',""]),t.exports=e},"468b":function(t,e,a){"use strict";a.r(e);var n=a("4e29"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"48fd":function(t,e,a){"use strict";a.r(e);var n=a("e051"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"4dc7":function(t,e,a){"use strict";a.r(e);var n=a("8117"),i=a("b7af");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("c4ac");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"eca591a4",null,!1,n["a"],void 0);e["default"]=s.exports},"4e29":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{active:0,id:0,show:!1,flag:!0,cut:!1,detailImg:"",detailName:"",detailValue:"",detailTips:"",bgColor:"#000",leftIconColor:"#fff",tabs:[{name:"Protein"},{name:"Carbs"},{name:"Veggies"},{name:"Fruits"}],titles:[[{title:"Choose a type of protein"}],[{title:"Choose a type of Carbs"}],[{title:"Choose a type of Veggies"}],[{title:"Choose a type of Fruits"}]],foods:[[{name:"Egg",image:"../../static/list/food_1.png",value:1,tips:"One large egg contains around 6 grams of protein, making it a good source of this essential nutrient.",checked:!1},{name:"Beef",image:"../../static/list/food_2.png",value:2,tips:"Opt for lean cuts of beef to minimize saturated fat intake while still benefiting from a good source of protein, iron, and vitamin B12.",checked:!1},{name:"Chicken",image:"../../static/list/food_3.png",value:3,tips:"Chicken is a lean source of protein, low in fat, high in niacin and selenium, and a good source of vitamin B6, phosphorus, and choline",checked:!1},{name:"Pork",image:"../../static/list/food_4.png",value:4,tips:"Pork is a good source of protein, thiamin, selenium, and vitamin B12, but it is also relatively high in fat, so it should be consumed in moderation as part of a balanced diet.",checked:!1},{name:"Lamb",image:"../../static/list/food_5.png",value:5,tips:"Lamb is a rich source of protein, vitamin B12, niacin, zinc, and selenium, but it is high in saturated fat, so it should be consumed in moderation as part of a balanced diet.",checked:!1},{name:"Fish",image:"../../static/list/food_6.png",value:6,tips:"Include fatty fish like salmon, mackerel, or sardines in your diet to benefit from heart-healthy omega-3 fatty acids.",checked:!1},{name:"Dairy",image:"../../static/list/food_7.png",value:7,tips:"Choose low-fat or skim milk to get essential nutrients like calcium, protein, and vitamin D without excessive saturated fat content.",checked:!1},{name:"Sea food",image:"../../static/list/food_8.png",value:8,tips:"Enjoy a variety of seafood like shrimp, crab, and oysters to obtain lean protein, omega-3 fatty acids, and important minerals while keeping calories in check.",checked:!1},{name:"Other",image:"../../static/list/food_9.png",value:9,tips:"Other",checked:!1}],[{name:"Rice",image:"../../static/list/food_10.png",value:10,tips:"Rice is naturally gluten-free, making it a great option for those with gluten intolerance or celiac disease.",checked:!1},{name:"Bread",image:"../../static/list/food_11.png",value:11,tips:"Choose whole-grain bread and watch portion sizes to benefit from the carbohydrates, fiber, and nutrients like B vitamins and iron, while being mindful of the sodium and calorie content.",checked:!1},{name:"Pasta",image:"../../static/list/food_12.png",value:12,tips:"Pasta can be a good source of carbohydrates, fiber, and some important nutrients like iron and B vitamins, but it is also high in calories and can be low in protein.",checked:!1},{name:"Corn",image:"../../static/list/food_13.png",value:13,tips:"Corn is a good source of fiber, vitamin C, thiamin, and folate, but it is also relatively high in carbohydrates and can be low in protein.",checked:!1},{name:"Cereal",image:"../../static/list/food_14.png",value:14,tips:"Choose cereals that are high in fiber and low in added sugars to keep you feeling full and satisfied throughout the morning.",checked:!1},{name:"Potato",image:"../../static/list/food_15.png",value:15,tips:"Potatoes are a good source of complex carbohydrates, vitamin C, and potassium, but choose to eat them boiled, baked, or roasted instead of fried to reduce the calorie and fat intake.",checked:!1},{name:"Bean",image:"../../static/list/food_16.png",value:16,tips:"Black beans are an excellent source of plant-based protein, fiber, and essential micronutrients such as iron and folate.",checked:!1},{name:"Noodle",image:"../../static/list/food_17.png",value:17,tips:"Choose whole-grain noodles for added fiber and nutrients, and avoid noodles that are high in sodium or refined carbohydrates.",checked:!1},{name:"Other",image:"../../static/list/food_9.png",value:9,tips:"Other",checked:!1}],[{name:"Tomato",image:"../../static/list/food_19.png",value:19,tips:"Tomatoes are an excellent source of vitamin C, lycopene, and potassium, and are low in calories, making them a healthy addition to your meals.",checked:!1},{name:"Onion",image:"../../static/list/food_20.png",value:20,tips:"Onions are a good source of fiber, vitamin C, and antioxidants, and they add flavor to your dishes without adding many calories.",checked:!1},{name:"Carrots",image:"../../static/list/food_21.png",value:21,tips:"Carrots are high in beta-carotene, which is important for eye health, and the're also a good source of fiber, vitamin K, and potassium.",checked:!1},{name:"Pepper",image:"../../static/list/food_22.png",value:22,tips:"Peppers contain antioxidants, which are beneficial compounds that can help to protect against cellular damage.",checked:!1},{name:"Broccoli",image:"../../static/list/food_23.png",value:23,tips:"Broccoli is a cruciferous vegetable that's rich in fiber, vitamin C, vitamin K, and folate, and it also contains phytonutrients that have anti-cancer properties.",checked:!1},{name:"Cucumber",image:"../../static/list/food_24.png",value:24,tips:"Cucumbers are low in calories and high in water content, making them a great addition to hydrating salads or as a snack.",checked:!1},{name:"Mushroom",image:"../../static/list/food_25.png",value:25,tips:"Mushrooms are a good source of protein, fiber, and micronutrients such as selenium and vitamin D.",checked:!1},{name:"Cabbage",image:"../../static/list/food_26.png",value:26,tips:"Cabbage is a cruciferous vegetable that's rich in fiber, vitamin C, vitamin K, and antioxidants, and it's also low in calories, making it a great addition to your meals.",checked:!1},{name:"Other",image:"../../static/list/food_9.png",value:9,tips:"Other",checked:!1}],[{name:"Banana",image:"../../static/list/food_28.png",value:28,tips:"Bananas are a good source of potassium, fiber, and vitamin C, and they make for a convenient and filling snack.",checked:!1},{name:"Grapes",image:"../../static/list/food_29.png",value:29,tips:"Grapes are a good source of fiber, which can help to improve digestive health and promote feelings of fullness.",checked:!1},{name:"Apple",image:"../../static/list/food_30.png",value:30,tips:"Apples are a good source of fiber and vitamin C, and they make for a crunchy and refreshing snack.",checked:!1},{name:"Melon",image:"../../static/list/food_31.png",value:31,tips:"Melons are high in water content, making them a hydrating snack, and they're also a good source of vitamin C, potassium, and antioxidants.",checked:!1},{name:"Orange",image:"../../static/list/food_32.png",value:32,tips:"Oranges are a good source of vitamin C, potassium, and fiber, and they're a juicy and refreshing snack.",checked:!1},{name:"Lemon",image:"../../static/list/food_33.png",value:33,tips:"Lemons are rich in vitamin C and antioxidants, and they add flavor and tang to dishes and beverages.",checked:!1},{name:"Berry",image:"../../static/list/food_34.png",value:34,tips:"Berries, such as strawberries, blueberries, and raspberries, are high in antioxidants and fiber, making them a great addition to breakfast or as a snack.",checked:!1},{name:"Avocados",image:"../../static/list/food_35.png",value:35,tips:"Avocados are high in healthy fats, fiber, and potassium, and they make for a creamy and satisfying addition to salads or as a spread.",checked:!1},{name:"Other",image:"../../static/list/food_9.png",value:9,tips:"Other",checked:!1}]]}},onLoad:function(t){console.log(t.id),void 0!=t.id&&(this.active=t.id),this.id=t.id},methods:{activeBtn:function(t,e){this.active=e,console.log(e)},navFood:function(){uni.navigateBack({delta:1})},open:function(){},close:function(){this.show=!1,this.flag=!0},tapDetaile:function(t,e){e==this.id&&(this.flag=!1,this.show=!0,this.detailImg=t.image,this.detailName=t.name,this.detailValue=t.value,this.detailTips=t.tips)},add:function(){this.cut&&(console.log(this.id),this.$store.dispatch("pushObj",{name:this.detailName,image:this.detailImg,value:this.detailValue,tips:this.detailTips,id:this.id}),uni.navigateBack({delta:2}))}}};e.default=n},"53bf":function(t,e,a){"use strict";var n=a("f915"),i=a.n(n);i.a},5537:function(t,e,a){"use strict";a.r(e);var n=a("c669"),i=a("48fd");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("1ea0");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"b2a05bc2",null,!1,n["a"],void 0);e["default"]=s.exports},"58c3":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-a75f7a08], uni-scroll-view[data-v-a75f7a08], uni-swiper-item[data-v-a75f7a08]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\r\n/**\r\n * vue版本动画内置的动画模式有如下：\r\n * fade：淡入\r\n * zoom：缩放\r\n * fade-zoom：缩放淡入\r\n * fade-up：上滑淡入\r\n * fade-down：下滑淡入\r\n * fade-left：左滑淡入\r\n * fade-right：右滑淡入\r\n * slide-up：上滑进入\r\n * slide-down：下滑进入\r\n * slide-left：左滑进入\r\n * slide-right：右滑进入\r\n */.u-fade-enter-active[data-v-a75f7a08],\r\n.u-fade-leave-active[data-v-a75f7a08]{transition-property:opacity}.u-fade-enter[data-v-a75f7a08],\r\n.u-fade-leave-to[data-v-a75f7a08]{opacity:0}.u-fade-zoom-enter[data-v-a75f7a08],\r\n.u-fade-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95);opacity:0}.u-fade-zoom-enter-active[data-v-a75f7a08],\r\n.u-fade-zoom-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.u-fade-down-enter-active[data-v-a75f7a08],\r\n.u-fade-down-leave-active[data-v-a75f7a08],\r\n.u-fade-left-enter-active[data-v-a75f7a08],\r\n.u-fade-left-leave-active[data-v-a75f7a08],\r\n.u-fade-right-enter-active[data-v-a75f7a08],\r\n.u-fade-right-leave-active[data-v-a75f7a08],\r\n.u-fade-up-enter-active[data-v-a75f7a08],\r\n.u-fade-up-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.u-fade-up-enter[data-v-a75f7a08],\r\n.u-fade-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.u-fade-down-enter[data-v-a75f7a08],\r\n.u-fade-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.u-fade-left-enter[data-v-a75f7a08],\r\n.u-fade-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.u-fade-right-enter[data-v-a75f7a08],\r\n.u-fade-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.u-slide-down-enter-active[data-v-a75f7a08],\r\n.u-slide-down-leave-active[data-v-a75f7a08],\r\n.u-slide-left-enter-active[data-v-a75f7a08],\r\n.u-slide-left-leave-active[data-v-a75f7a08],\r\n.u-slide-right-enter-active[data-v-a75f7a08],\r\n.u-slide-right-leave-active[data-v-a75f7a08],\r\n.u-slide-up-enter-active[data-v-a75f7a08],\r\n.u-slide-up-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-slide-up-enter[data-v-a75f7a08],\r\n.u-slide-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.u-slide-down-enter[data-v-a75f7a08],\r\n.u-slide-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-slide-left-enter[data-v-a75f7a08],\r\n.u-slide-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-slide-right-enter[data-v-a75f7a08],\r\n.u-slide-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-zoom-enter-active[data-v-a75f7a08],\r\n.u-zoom-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-zoom-enter[data-v-a75f7a08],\r\n.u-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95)}',""]),t.exports=e},"5caf":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uNavbar:a("7656").default,uIcon:a("98c9").default,uPopup:a("b72b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticStyle:{"margin-bottom":"80rpx"}},[a("u-navbar",{attrs:{title:"My List",autoBack:!1,bgColor:t.bgColor,titleStyle:{color:"#FFF"}},on:{leftClick:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}})],1),t.flag?a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"shop_cart"},[a("v-uni-view",{class:0==t.active?"back back1":1==t.active?"back back2":2==t.active?"back back3":"back back4"},[t._l(t.tabs,(function(e,n){return[a("v-uni-view",{class:t.active==n?"tab active":"tab",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.activeBtn(e,n)}}},[t._v(t._s(e.name))])]}))],2),a("v-uni-view",{staticClass:"hint"},[t._l(t.titles[t.active],(function(e,n){return[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))])]})),a("v-uni-view",{staticClass:"theme"},[t._l(t.foods[t.active],(function(e,n){return[a("v-uni-view",{staticClass:"Every_food",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tapDetaile(e,t.active)}}},[a("v-uni-view",{staticClass:"food_img"},[a("v-uni-image",{attrs:{src:e.image,mode:""}})],1),a("v-uni-view",{staticClass:"food_name"},[t._v(t._s(e.name))])],1)]}))],2)],2)],1),a("v-uni-view",{staticClass:"add",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navFood.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"arrow-leftward",color:"rgb(98,83,189)",size:"50"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"box2"},[a("u-popup",{attrs:{show:t.show,mode:"center",overlayOpacity:"0"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-image",{attrs:{src:t.detailImg,mode:""}}),a("v-uni-view",{class:0==t.active?"name name1":1==t.active?"name name2":2==t.active?"name name3":"name name4"},[t._v(t._s(0==t.active?"Protein":1==t.active?"Carb":2==t.active?"Veggie":"Fruit"))])],1),a("v-uni-view",{staticClass:"cut"},[a("v-uni-text",{class:t.cut?"cutactive":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cut=!0}}},[t._v(t._s(t.cut?t.detailName:"Type to add"))])],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-text",[t._v(t._s(t.detailName))]),a("v-uni-view",{staticClass:"content_detail"},[t._v(t._s(t.detailTips))])],1),a("v-uni-view",{staticClass:"footer"},[a("u-icon",{attrs:{name:"arrow-leftward",color:"rgb(106,106,106)",size:"40"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),a("v-uni-text"),a("u-icon",{attrs:{name:"checkbox-mark",color:t.cut?"rgb(102,187,106)":"rgb(179,221,180)",size:"40"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)},o=[]},"648c":function(t,e,a){var n=a("41cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4d3a29be",n,!0,{sourceMap:!1,shadowMode:!1})},6593:function(t,e,a){"use strict";a.r(e);var n=a("5caf"),i=a("468b");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("53bf");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"66e3dd37",null,!1,n["a"],void 0);e["default"]=s.exports},"66cd":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=n(a("2a70")),r=n(a("3c0b")),s={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return(0,i.default)((0,i.default)({transitionDuration:"".concat(this.duration,"ms"),transitionTimingFunction:this.timingFunction},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default,o.default],watch:{show:{handler:function(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}};e.default=s},6946:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.overlay.show},zIndex:{type:[String,Number],default:uni.$u.props.overlay.zIndex},duration:{type:[String,Number],default:uni.$u.props.overlay.duration},opacity:{type:[String,Number],default:uni.$u.props.overlay.opacity}}};e.default=n},7120:function(t,e,a){"use strict";var n=a("9b93"),i=a.n(n);i.a},7713:function(t,e,a){"use strict";a.r(e);var n=a("8552"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},8117:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-safe-bottom",class:[!this.isNvue&&"u-safe-area-inset-bottom"],style:[this.style]})},i=[]},8552:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("a0aa")),o={name:"u-popup",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{overlayDuration:this.duration+50}},watch:{show:function(t,e){}},computed:{transitionStyle:function(){var t={zIndex:this.zIndex,position:"fixed",display:"flex"};return t[this.mode]=0,"left"===this.mode||"right"===this.mode?uni.$u.deepMerge(t,{bottom:0,top:0}):"top"===this.mode||"bottom"===this.mode?uni.$u.deepMerge(t,{left:0,right:0}):"center"===this.mode?uni.$u.deepMerge(t,{alignItems:"center","justify-content":"center",top:0,left:0,right:0,bottom:0}):void 0},contentStyle:function(){var t={},e=uni.$u.sys();e.safeAreaInsets;if("center"!==this.mode&&(t.flex=1),this.bgColor&&(t.backgroundColor=this.bgColor),this.round){var a=uni.$u.addUnit(this.round);"top"===this.mode?(t.borderBottomLeftRadius=a,t.borderBottomRightRadius=a):"bottom"===this.mode?(t.borderTopLeftRadius=a,t.borderTopRightRadius=a):"center"===this.mode&&(t.borderRadius=a)}return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))},position:function(){return"center"===this.mode?this.zoom?"fade-zoom":"fade":"left"===this.mode?"slide-left":"right"===this.mode?"slide-right":"bottom"===this.mode?"slide-up":"top"===this.mode?"slide-down":void 0}},methods:{overlayClick:function(){this.closeOnClickOverlay&&this.$emit("close")},close:function(t){this.$emit("close")},afterEnter:function(){this.$emit("open")},clickHandler:function(){"center"===this.mode&&this.overlayClick(),this.$emit("click")}}};e.default=o},"92c1":function(t,e,a){var n=a("9d53");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("13f0b296",n,!0,{sourceMap:!1,shadowMode:!1})},"9b93":function(t,e,a){var n=a("58c3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("75ddeef2",n,!0,{sourceMap:!1,shadowMode:!1})},"9d53":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-safe-bottom[data-v-eca591a4]{width:100%}',""]),t.exports=e},a0aa:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.popup.show},overlay:{type:Boolean,default:uni.$u.props.popup.overlay},mode:{type:String,default:uni.$u.props.popup.mode},duration:{type:[String,Number],default:uni.$u.props.popup.duration},closeable:{type:Boolean,default:uni.$u.props.popup.closeable},overlayStyle:{type:[Object,String],default:uni.$u.props.popup.overlayStyle},closeOnClickOverlay:{type:Boolean,default:uni.$u.props.popup.closeOnClickOverlay},zIndex:{type:[String,Number],default:uni.$u.props.popup.zIndex},safeAreaInsetBottom:{type:Boolean,default:uni.$u.props.popup.safeAreaInsetBottom},safeAreaInsetTop:{type:Boolean,default:uni.$u.props.popup.safeAreaInsetTop},closeIconPos:{type:String,default:uni.$u.props.popup.closeIconPos},round:{type:[Boolean,String,Number],default:uni.$u.props.popup.round},zoom:{type:Boolean,default:uni.$u.props.popup.zoom},bgColor:{type:String,default:uni.$u.props.popup.bgColor},overlayOpacity:{type:[Number,String],default:uni.$u.props.popup.overlayOpacity}}};e.default=n},aab6:function(t,e,a){"use strict";var n=a("648c"),i=a.n(n);i.a},b580:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("0c9c")),o={name:"u-safe-bottom",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{safeAreaBottomHeight:0,isNvue:!1}},computed:{style:function(){return uni.$u.deepMerge({},uni.$u.addStyle(this.customStyle))}},mounted:function(){}};e.default=o},b72b:function(t,e,a){"use strict";a.r(e);var n=a("1622"),i=a("7713");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("aab6");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"30282a05",null,!1,n["a"],void 0);e["default"]=s.exports},b7af:function(t,e,a){"use strict";a.r(e);var n=a("b580"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},b8fe:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.main[data-v-66e3dd37]{padding:%?48?%}uni-text[data-v-66e3dd37]{font-weight:700}.shop_cart[data-v-66e3dd37]{width:100%;height:%?1000?%;\r\n  /* background-color: red; */border:1px solid #999;border-radius:%?40?%;margin-top:%?10?%;margin-bottom:%?10?%}.add[data-v-66e3dd37]{margin-top:%?20?%;display:flex;justify-content:center;width:%?180?%;border:10px solid #6253bd;border-radius:%?80?%;text-align:center;margin:auto}.hint[data-v-66e3dd37]{margin-top:%?60?%}.hint .title[data-v-66e3dd37]{text-align:center;color:#999}.hint .theme[data-v-66e3dd37]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around}.hint .theme .Every_food[data-v-66e3dd37]{margin-top:%?40?%;display:flex;flex-direction:column;align-items:center;flex:33%}.hint .theme .food_img[data-v-66e3dd37]{width:%?120?%;height:%?120?%;border-radius:%?40?%;display:flex;border:1px solid #999;align-items:center;justify-content:center}.hint .theme .food_img uni-image[data-v-66e3dd37]{width:%?70?%;height:%?70?%}.back[data-v-66e3dd37]{height:%?120?%;width:100%;border-radius:%?38?% %?38?% 0 0;display:flex;justify-content:space-around;align-items:center}.back1[data-v-66e3dd37]{background-image:linear-gradient(90deg,#fb4c62 10%,#fd968c 20%,#fec8cf 30%,#fff 40%)}.back2[data-v-66e3dd37]{background-image:linear-gradient(90deg,#ffb208 30%,#ffc749 40%,#fee8b3 50%,#fff 55%)}.back3[data-v-66e3dd37]{background-image:linear-gradient(90deg,#49ee7b 60%,#79f39e 70%,#c7fad7 80%,#fff 90%)}.back4[data-v-66e3dd37]{background-image:linear-gradient(90deg,#11bcb7 8%,#4fceca 12%,#b6ebe9 16%,#fff 20%)}.tab[data-v-66e3dd37]{width:%?120?%;height:%?60?%;background-color:#fff;font-size:%?24?%;border-radius:%?40?%;text-align:center;line-height:%?60?%}.active[data-v-66e3dd37]{background-color:#6253bd}.detail[data-v-66e3dd37]{width:%?540?%;height:%?600?%;padding:%?60?%;border-radius:%?20?%;border:3px solid #999}.detail .title[data-v-66e3dd37]{display:flex;justify-content:space-between;align-items:center}.detail .title uni-image[data-v-66e3dd37]{width:%?100?%;height:%?100?%}.detail .title .name[data-v-66e3dd37]{padding:%?10?%;width:%?120?%;height:%?50?%;text-align:center;line-height:%?50?%;border-radius:%?40?%}.detail .title .name1[data-v-66e3dd37]{background-color:#fb4c62}.detail .title .name2[data-v-66e3dd37]{background-color:#ffb208}.detail .title .name3[data-v-66e3dd37]{background-color:#49ee7b}.detail .title .name4[data-v-66e3dd37]{background-color:#11bcb7}.cut[data-v-66e3dd37]{width:100%;border-bottom:3px solid #999;padding-bottom:%?10?%;margin:%?30?% 0}.cut uni-text[data-v-66e3dd37]{font-size:%?60?%;color:#999}.cut .cutactive[data-v-66e3dd37]{color:#000}.content[data-v-66e3dd37]{width:95%;height:%?200?%;border:1px solid #999;padding:%?10?%;border-radius:%?20?%;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.content .content_detail[data-v-66e3dd37]{display:flex;align-items:center;justify-content:center;font-size:%?20?%;color:#6a6a6a}.footer[data-v-66e3dd37]{padding:%?50?% %?80?%;display:flex;justify-content:space-between;align-items:center}.footer uni-text[data-v-66e3dd37]{width:%?5?%;height:%?40?%;border-radius:%?10?%;background-color:#999}',""]),t.exports=e},baec:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}}},c4ac:function(t,e,a){"use strict";var n=a("92c1"),i=a.n(n);i.a},c669:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uTransition:a("059d").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-transition",{attrs:{show:t.show,"custom-class":"u-overlay",duration:t.duration,"custom-style":t.overlayStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},dc48:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inited?a("v-uni-view",{ref:"u-transition",staticClass:"u-transition",class:t.classes,style:[t.mergeStyle],on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},e051:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("6946")),o={name:"u-overlay",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],computed:{overlayStyle:function(){var t={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":"rgba(0, 0, 0, ".concat(this.opacity,")")};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{clickHandler:function(){this.$emit("click")}}};e.default=o},f915:function(t,e,a){var n=a("b8fe");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("063dcd6c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);