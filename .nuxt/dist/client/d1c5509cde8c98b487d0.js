(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{227:function(t,e,n){t.exports=n.p+"img/805b558.png"},228:function(t,e,n){t.exports=n.p+"img/c7acb0e.svg"},229:function(t,e,n){t.exports=n.p+"img/d19fd0f.png"},230:function(t,e,n){t.exports=n.p+"img/663612e.jpg"},231:function(t,e,n){t.exports=n.p+"img/d992bb9.jpg"},232:function(t,e,n){t.exports=n.p+"img/59a72d1.png"},233:function(t,e,n){t.exports=n.p+"img/4f62fe7.jpg"},234:function(t,e,n){t.exports=n.p+"img/16771fd.jpg"},235:function(t,e,n){t.exports=n.p+"img/c7333e7.jpg"},236:function(t,e,n){t.exports=n.p+"img/1a8557c.jpg"},237:function(t,e,n){t.exports=n.p+"img/db31825.png"},238:function(t,e,n){t.exports=n.p+"img/b81f40a.png"},239:function(t,e,n){t.exports=n.p+"img/3605c16.jpg"},240:function(t,e,n){t.exports=n.p+"img/d13d482.jpg"},241:function(t,e,n){var content=n(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("43b74622",content,!0,{sourceMap:!1})},253:function(t,e,n){var map={"./1st_album_02.png":227,"./1stfeb-thumbnail.jpg":230,"./dancingeye-thumbnail.jpg":231,"./day-after-cd-front.png":232,"./ghost-thumbnail.jpg":233,"./halfhour-exercise-set.svg":228,"./inbertywetrust-thumbnail.jpg":234,"./lostandfound_poster_v2-01.jpg":235,"./lunapark-thumbnail.jpg":236,"./set-2.png":237,"./set-23.png":238,"./soundyoung-ep-1-album-cover.png":229,"./thehiddenwatcher-thumbnail.jpg":239,"./yeti-thumbnail.jpg":240};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=253},386:function(t,e,n){"use strict";var r=n(241);n.n(r).a},387:function(t,e,n){(e=n(30)(!1)).push([t.i,".album-preview-grid[data-v-a6842f62]{border:.1px dotted #222;background-color:rgba(202,208,215,.74)}.album-title[data-v-a6842f62]{padding-top:5px;font-size:3vmin}@media only screen and (max-width:900px){.album-title[data-v-a6842f62]{padding-top:5px;font-size:18px}}.album-image-preview[data-v-a6842f62]{border:3px solid #fff;margin:1px;background-color:rgba(238,223,212,.548)}",""]),t.exports=e},388:function(t,e,n){var content=n(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("44db8151",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";var r={name:"albumGridSingle",props:{id:{type:String,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0},medium:{type:String,required:!0},year:{type:String,required:!0},category:{type:String,required:!0},albumArtist:{type:String,required:!0}},computed:{postLink:function(){return"/sound/"+this.id},postImage:function(){this.thumbnail.toLowerCase();return n(253)("./"+this.thumbnail)},postPreviewTitle:function(){return this.title}}},o=(n(386),n(25)),l={components:{albumGridSingle:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:t.postLink}},[n("b-col",{staticClass:"album-preview-grid"},[n("h6",{staticClass:"album-title"},[t._v(" "+t._s(t.title))]),t._v(" "),n("b-img",{staticClass:"album-image-preview",attrs:{src:t.postImage,"fluid-grow":""}}),t._v(" "),n("p",[t._v("\n              "+t._s(t.albumArtist)+"\n              "),n("br"),t._v("\n              "+t._s(t.year)+"  "+t._s(t.medium)+"\n              "),n("br"),t._v("\n              "+t._s(t.category)+"\n              "),n("br"),t._v("\n              "+t._s(t.PreviewText)+"\n          ")])],1)],1)}),[],!1,null,"a6842f62",null).exports},props:{posts:{type:Array,required:!0}}},c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{attrs:{cols:"2","cols-sm":"3","cols-md":"3"}},this._l(this.posts,(function(t){return e("albumGridSingle",{key:t.id,attrs:{id:t.id,thumbnail:t.thumbnail,title:t.title,PreviewText:t.previewText,medium:t.medium,year:t.year,category:t.category,albumArtist:t.albumArtist}})})),1)}),[],!1,null,"001cb595",null);e.a=c.exports},444:function(t,e,n){"use strict";var r=n(388);n.n(r).a},445:function(t,e,n){(e=n(30)(!1)).push([t.i,".album-container[data-v-4953885c]{background-image:linear-gradient(to right top,#90abb8,#6daba8,#72a67d,#99984e,#c87c42);justify-content:center;height:100%}.album-session-intro[data-v-4953885c]{color:azure;margin:5px}",""]),t.exports=e},493:function(t,e,n){"use strict";n.r(e);var r={components:{albumGrid:n(433).a},data:function(){return{albumList:[{id:"album/soundsheepsheep-ep-1",title:"坐這山 望這山",previewText:"",thumbnail:"soundyoung-ep-1-album-cover.png",albumArtist:"sound羊",year:"2016",medium:"EP | CD",category:"anti-folk?"},{id:"album/half-hour-exercise-1",title:"half-hour exercise #1",previewText:"I spent around 30mins to twist each freelance job session and play",thumbnail:"halfhour-exercise-set.svg",albumArtist:"wongchunhoi9",year:"2016",medium:"CD",category:"compilation"},{id:"album/day-after",title:"DAY AFTER 翌日 [2014. 9.29 - 12.12",previewText:"",thumbnail:"day-after-cd-front.png",albumArtist:"Publisher 出版｜soundpocket 聲音掏腰包",year:"2015",medium:"CD",category:"compilation"}]}}},o=(n(444),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-container",{staticClass:"album-container"},[n("b-row",[n("b-col",[n("h3",{staticClass:"album-session-intro"},[t._v(" Album ")])])],1),t._v(" "),n("albumGrid",{attrs:{posts:t.albumList}})],1),t._v(" "),n("br"),t._v(" "),n("b-container",{staticClass:"album-container"},[n("b-row",[n("b-col",[n("h3",{staticClass:"album-session-intro"},[t._v(" Sound Design ")])])],1),t._v(" "),n("albumGrid",{attrs:{posts:t.albumList}})],1)],1)}),[],!1,null,"4953885c",null);e.default=component.exports}}]);