(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{227:function(t,e,r){t.exports=r.p+"img/805b558.png"},228:function(t,e,r){t.exports=r.p+"img/c7acb0e.svg"},229:function(t,e,r){t.exports=r.p+"img/d19fd0f.png"},230:function(t,e,r){t.exports=r.p+"img/663612e.jpg"},231:function(t,e,r){t.exports=r.p+"img/111fcb9.jpg"},232:function(t,e,r){t.exports=r.p+"img/d992bb9.jpg"},233:function(t,e,r){t.exports=r.p+"img/59a72d1.png"},234:function(t,e,r){t.exports=r.p+"img/4f62fe7.jpg"},235:function(t,e,r){t.exports=r.p+"img/16771fd.jpg"},236:function(t,e,r){t.exports=r.p+"img/c7333e7.jpg"},237:function(t,e,r){t.exports=r.p+"img/1a8557c.jpg"},238:function(t,e,r){t.exports=r.p+"img/db31825.png"},239:function(t,e,r){t.exports=r.p+"img/b81f40a.png"},240:function(t,e,r){t.exports=r.p+"img/3605c16.jpg"},241:function(t,e,r){t.exports=r.p+"img/d13d482.jpg"},242:function(t,e,r){var content=r(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("43b74622",content,!0,{sourceMap:!1})},253:function(t,e,r){var map={"./1st_album_02.png":227,"./1stfeb-thumbnail.jpg":230,"./about-a-stalker.jpg":231,"./dancingeye-thumbnail.jpg":232,"./day-after-cd-front.png":233,"./ghost-thumbnail.jpg":234,"./halfhour-exercise-set.svg":228,"./inbertywetrust-thumbnail.jpg":235,"./lostandfound_poster_v2-01.jpg":236,"./lunapark-thumbnail.jpg":237,"./set-2.png":238,"./set-23.png":239,"./soundyoung-ep-1-album-cover.png":229,"./thehiddenwatcher-thumbnail.jpg":240,"./yeti-thumbnail.jpg":241};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=253},388:function(t,e,r){"use strict";var n=r(242);r.n(n).a},389:function(t,e,r){(e=r(30)(!1)).push([t.i,".album-preview-grid[data-v-a6842f62]{border:.1px dotted #222;background-color:rgba(202,208,215,.74)}.album-title[data-v-a6842f62]{padding-top:5px;font-size:3vmin}@media only screen and (max-width:900px){.album-title[data-v-a6842f62]{padding-top:5px;font-size:18px}}.album-image-preview[data-v-a6842f62]{border:3px solid #fff;margin:1px;background-color:rgba(238,223,212,.548)}",""]),t.exports=e},419:function(t,e,r){var content=r(456);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("e65a9a82",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";var n={name:"albumGridSingle",props:{id:{type:String,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0},medium:{type:String,required:!0},year:{type:String,required:!0},category:{type:String,required:!0},albumArtist:{type:String,required:!0}},computed:{postLink:function(){return"/sound/"+this.id},postImage:function(){this.thumbnail.toLowerCase();return r(253)("./"+this.thumbnail)},postPreviewTitle:function(){return this.title}}},o=(r(388),r(25)),l={components:{albumGridSingle:Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.postLink}},[r("b-col",{staticClass:"album-preview-grid"},[r("h6",{staticClass:"album-title"},[t._v(" "+t._s(t.title))]),t._v(" "),r("b-img",{staticClass:"album-image-preview",attrs:{src:t.postImage,"fluid-grow":""}}),t._v(" "),r("p",[t._v("\n              "+t._s(t.albumArtist)+"\n              "),r("br"),t._v("\n              "+t._s(t.year)+"  "+t._s(t.medium)+"\n              "),r("br"),t._v("\n              "+t._s(t.category)+"\n              "),r("br"),t._v("\n              "+t._s(t.PreviewText)+"\n          ")])],1)],1)}),[],!1,null,"a6842f62",null).exports},props:{posts:{type:Array,required:!0}}},c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{attrs:{cols:"2","cols-sm":"3","cols-md":"3"}},this._l(this.posts,(function(t){return e("albumGridSingle",{key:t.id,attrs:{id:t.id,thumbnail:t.thumbnail,title:t.title,PreviewText:t.previewText,medium:t.medium,year:t.year,category:t.category,albumArtist:t.albumArtist}})})),1)}),[],!1,null,"001cb595",null);e.a=c.exports},455:function(t,e,r){"use strict";var n=r(419);r.n(n).a},456:function(t,e,r){(e=r(30)(!1)).push([t.i,".album-container[data-v-1df73486]{background-image:linear-gradient(to right top,#90abb8,#6daba8,#72a67d,#99984e,#c87c42);justify-content:center;height:100%}.album-session-intro[data-v-1df73486]{color:azure;margin:5px}",""]),t.exports=e},497:function(t,e,r){"use strict";r.r(e);var n={components:{albumGrid:r(434).a},data:function(){return{albumList:[{id:"album/about-a-stalker",title:"about a stalker 路人崇拜",previewText:"",thumbnail:"about-a-stalker.jpg",albumArtist:"王和平 PEACE",year:"2019",medium:"CD",category:" ? ..  track 3: clarinet by hoi9 ...  "},{id:"album/soundsheepsheep-ep-1",title:"坐這山 望這山",previewText:"",thumbnail:"soundyoung-ep-1-album-cover.png",albumArtist:"sound羊",year:"2016",medium:"EP | CD",category:"anti-folk?"},{id:"album/half-hour-exercise-1",title:"half-hour exercise #1",previewText:"I spent around 30mins to twist each freelance job session and play",thumbnail:"halfhour-exercise-set.svg",albumArtist:"wongchunhoi9",year:"2016",medium:"CD",category:"compilation"},{id:"album/day-after",title:"DAY AFTER 翌日 [2014. 9.29 - 12.12",previewText:"",thumbnail:"day-after-cd-front.png",albumArtist:"Publisher 出版｜soundpocket 聲音掏腰包",year:"2015",medium:"CD",category:"compilation"}]}}},o=(r(455),r(25)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-container",{staticClass:"album-container"},[e("b-row",[e("b-col",[e("h3",{staticClass:"album-session-intro"},[this._v(" Album ")])])],1),this._v(" "),e("albumGrid",{attrs:{posts:this.albumList}})],1),this._v(" "),e("br")],1)}),[],!1,null,"1df73486",null);e.default=component.exports}}]);