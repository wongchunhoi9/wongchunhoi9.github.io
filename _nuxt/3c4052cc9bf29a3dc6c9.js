(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{540:function(t,e,r){var content=r(578);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("46396bb1",content,!0,{sourceMap:!1})},575:function(t,e,r){var map={"./2015-12-03-TenYearsReview.md":564,"./2015-12-22-sync-winter-3-years.md":565,"./2016-08-31-toy3plasticsingsing.md":566,"./2018-05-24-note-Art-for-Radio.md":567,"./2019-05-08-Concrete-wandering-c3a.md":568,"./2019-12-15-hardworking_circuit_1to4.md":569};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=575},576:function(t,e,r){var map={"./2-Prototype-set-up-draft-20140914.jpg":207,"./3-hardworkingcircuit1_workinprogress_1.jpg":208,"./4-hc-1-completeschematic.jpg":209,"./5-hwcimprove_1.jpg":210,"./8-Screen-Shot-2017-08-22-at-1.04.jpg":226,"./9-2-hw1p4-flipclock.jpg":211,"./C3A-orange-tree-1400x635.jpg":212,"./artforradiosymposiun.jpg":213,"./atoymoney.jpg":227,"./blog-syncwinter.jpg":228,"./hardworking-circuit-1-early-sketch.jpg":214,"./tenyearsrecordinginmystudio.jpg":215};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=576},577:function(t,e,r){"use strict";var o=r(540);r.n(o).a},578:function(t,e,r){(e=r(19)(!1)).push([t.i,".blog-page[data-v-06b3c0f8]{background:#fcf3d9}.blog-page-container[data-v-06b3c0f8]{justify-content:center;height:100%;max-width:1200px}.blog-page-container .row .col[data-v-06b3c0f8],.blog-page-container .row>[class^=col-][data-v-06b3c0f8]{border-width:1px 0;padding-top:5px;padding-bottom:5px}.blog-page-container .row .col[data-v-06b3c0f8]{margin-bottom:5px;margin-top:2px}.blog-intro[data-v-06b3c0f8]{margin:5px;color:#000}.blog-post[data-v-06b3c0f8]{padding-top:10px;padding-bottom:5px;margin-top:10px;margin-bottom:5px;border-bottom:dotted;border-width:3px;border-top-color:#fac22b;border-bottom-color:#fac22b}.blog-title[data-v-06b3c0f8]{color:#000}.blog-date[data-v-06b3c0f8]{text-align:right;color:rgba(0,0,0,.509)}.blog-excerpt[data-v-06b3c0f8]{color:#0a374e}.blog-image-container[data-v-06b3c0f8]{width:100%;height:auto;overflow:hidden}.blog-image[data-v-06b3c0f8]{width:100%;overflow:hidden;display:block}.blog-tagging[data-v-06b3c0f8]{color:#503e0e}a[data-v-06b3c0f8]:hover{color:#fac22b;text-decoration:none}",""]),t.exports=e},623:function(t,e,r){"use strict";r.r(e);r(7),r(5),r(6),r(11);var o=r(0),n=(r(4),r(2),r(63),r(23));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(575);case 2:return e=t.sent,t.next=5,e.keys().map((function(t){return l({},e(t),{path:"/blog/article?name=".concat(t.replace(".md","").replace("./",""))})}));case 5:return o=t.sent,t.abrupt("return",{posts:o.reverse()});case 7:case"end":return t.stop()}}),t)})))()},methods:{imgSrc:function(t){return r(576)("./".concat(t.attributes.hero))},PostDateConvertion:function(){}},data:function(){return{filterValue:""}}},f=(r(577),r(10)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-page"},[r("b-container",{staticClass:"blog-page-container"},[r("b-row",[r("b-col",[r("h3",{staticClass:"blog-intro"},[t._v("Blog")])]),t._v(" "),r("b-col")],1),t._v(" "),t._l(t.posts,(function(e){return r("div",{key:e.attributes.title,staticClass:"blog-post"},[r("nuxt-link",{attrs:{to:e.path}},[r("b-container",[r("b-row",[r("b-col",{attrs:{md:"4"}},[r("div",{staticClass:"blog-image-container"},[r("img",{staticClass:"blog-image",attrs:{src:t.imgSrc(e),alt:e.attributes.title}})])]),t._v(" "),r("b-col",[r("h3",{staticClass:"blog-title"},[t._v(t._s(e.attributes.title)+" ")]),t._v(" "),r("h4",{staticClass:"blog-date"},[t._v(t._s(t._f("date")(e.attributes.date))+" ")]),t._v(" "),r("hr",{staticClass:"solid"}),t._v(" "),r("p",{staticClass:"blog-excerpt"},[t._v(t._s(e.attributes.excerpt)+" ")]),t._v(" "),r("hr",{staticClass:"solid"}),t._v(" "),r("p",{staticClass:"blog-tagging"},[t._v(t._s(e.attributes.tags))])])],1)],1)],1)],1)}))],2)],1)}),[],!1,null,"06b3c0f8",null);e.default=component.exports}}]);