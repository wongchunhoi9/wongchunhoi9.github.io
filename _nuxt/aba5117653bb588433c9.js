(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{262:function(t,e,r){var map={"./2015-12-03-TenYearsReview.md":263,"./2015-12-22-sync-winter-3-years.md":264,"./2019-05-08-Concrete-wandering-c3a.md":265,"./2019-12-15-hardworking_circuit_1to4.md":266};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=262},277:function(t,e,r){t.exports=r.p+"img/7103359.jpg"},278:function(t,e,r){t.exports=r.p+"img/7103359.jpg"},491:function(t,e,r){var map={"./2019-09-22-veggies.jpg":277,"./carrots.jpg":278};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=491},533:function(t,e,r){"use strict";r.r(e);r(7),r(4),r(6),r(10);var n=r(0),c=(r(3),r(1),r(63),r(20));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={asyncData:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(262);case 2:return e=t.sent,t.next=5,e.keys().map((function(t){return l({},e(t),{path:"/blog/".concat(t.replace(".md","").replace("./",""))})}));case 5:return n=t.sent,t.abrupt("return",{posts:n.reverse()});case 7:case"end":return t.stop()}}),t)})))()},methods:{imgSrc:function(t){return r(491)("./".concat(t.attributes.hero))}}},v=r(25),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("\n    Blog Posts\n  ")]),t._v(" "),r("section",{staticClass:"posts"},t._l(t.posts,(function(e){return r("div",{key:e.attributes.title,staticClass:"columns"},[r("div",{staticClass:"column is-one-quarter"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:t.imgSrc(e),alt:e.attributes.title}})])]),t._v(" "),r("div",{staticClass:"column is-three-quarters"},[r("p",{staticClass:"title is-4"},[r("nuxt-link",{attrs:{to:e.path}},[t._v("\n            "+t._s(e.attributes.title)+"\n          ")])],1),t._v(" "),r("p",{staticClass:"subtitle is-6"},[t._v("\n          "+t._s(e.attributes.tags)+"\n        ")]),t._v(" "),r("div",{staticClass:"content"},[r("p",[t._v(t._s(e.attributes.excerpt))]),t._v(" "),r("p",[t._v(t._s(e.attributes.date))]),t._v(" "),r("nuxt-link",{attrs:{to:e.path}},[t._v("\n            Read\n          ")])],1)])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);