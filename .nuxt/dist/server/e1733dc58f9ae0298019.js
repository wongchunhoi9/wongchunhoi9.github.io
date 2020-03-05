exports.ids=[17],exports.modules={236:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("36b84a12",content,!0,t)}},237:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("7b1c9fa3",content,!0,t)}},273:function(t,e,n){"use strict";n.r(e);var r=n(236),o=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,(function(){return r[t]}))}(d);e.default=o.a},274:function(t,e,n){(e=n(2)(!1)).push([t.i,".album-preview-grid[data-v-0779f45b]{border:.1px dotted #222;background-color:rgba(202,208,215,.74)}.album-title[data-v-0779f45b]{padding-top:5px;font-size:3vmin}@media only screen and (max-width:900px){.album-title[data-v-0779f45b]{padding-top:5px;font-size:18px}}.album-image-preview[data-v-0779f45b]{border:3px solid #fff;margin:1px;background-color:rgba(238,223,212,.548)}",""]),t.exports=e},275:function(t,e,n){"use strict";n.r(e);var r=n(237),o=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,(function(){return r[t]}))}(d);e.default=o.a},276:function(t,e,n){(e=n(2)(!1)).push([t.i,".album-container[data-v-3e4cabcc]{background-image:linear-gradient(to right top,#90abb8,#6daba8,#72a67d,#99984e,#c87c42);justify-content:center;height:100%}.album-session-intro[data-v-3e4cabcc]{color:azure;margin:5px}",""]),t.exports=e},306:function(t,e,n){"use strict";n.r(e);var r={name:"SoundDesignGridSingle",props:{id:{type:String,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0},medium:{type:String,required:!0},year:{type:String,required:!0},soundTask:{type:String,required:!0},collaborateArtist:{type:String,required:!0}},computed:{postLink(){return"/sound/"+this.id},postImage(){this.thumbnail.toLowerCase();return n(73)("./"+this.thumbnail)},postPreviewTitle(){return this.title}}},o=n(1);var d={components:{soundDesignGridSingle:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:t.postLink}},[n("b-col",{staticClass:"album-preview-grid"},[n("h6",{staticClass:"album-title"},[t._v(" "+t._s(t.title))]),t._v(" "),n("b-img",{staticClass:"album-image-preview",attrs:{src:t.postImage,"fluid-grow":""}}),t._v(" "),n("p",[t._v("\n              "+t._s(t.soundTask)+"\n              "),n("br"),t._v(" "),n("br"),t._v("\n              \n              "+t._s(t.collaborateArtist)+"\n              "),n("br"),t._v("\n              "+t._s(t.PreviewText)+"\n              "),n("br"),t._v("\n              "+t._s(t.year)+" || "+t._s(t.medium)+"\n              \n          ")])],1)],1)}),[],!1,(function(t){var e=n(273);e.__inject__&&e.__inject__(t)}),"0779f45b","68bb0a16").exports},props:{posts:{type:Array,required:!0}}};var l={components:{soundDesignGrid:Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{attrs:{cols:"2","cols-sm":"3","cols-md":"3"}},this._l(this.posts,(function(t){return e("soundDesignGridSingle",{key:t.id,attrs:{id:t.id,thumbnail:t.thumbnail,title:t.title,PreviewText:t.previewText,medium:t.medium,year:t.year,soundTask:t.soundTask,collaborateArtist:t.collaborateArtist}})})),1)}),[],!1,(function(t){}),"00da7aa3","19964b66").exports},data:()=>({albumList:[{id:"sound-design/ghost",title:"小鬼 – Ghost",thumbnail:"ghost-thumbnail.jpg",soundTask:"Sound design Wong Chun Hoi ",collaborateArtist:"Animation by Morph Workshop: Aplise Lee, Anna Li",year:"2018",medium:"Animation",previewText:" "},{id:"sound-design/myhiddenwatcher",title:"靈動之窗 – dancing eye",thumbnail:"dancingeye-thumbnail.jpg",soundTask:"Sound made by: Wong Chun Hoi ,Hody Law Sin Yan",collaborateArtist:"Animation by Morph Workshop: Aplise Lee, Anna Li",year:"2016",medium:"Animation",previewText:" "},{id:"sound-design/myhiddenwatcher",title:"Luna Park",thumbnail:"lunapark-thumbnail.jpg",soundTask:"Sound Design",collaborateArtist:"Artwork by Kingsley Ng",year:"2014",medium:"Multi-channel video and sound installation",previewText:" "},{id:"sound-design/myhiddenwatcher",title:"守宮物語 – My Hidden Watcher",thumbnail:"thehiddenwatcher-thumbnail.jpg",soundTask:"Sound Designer",collaborateArtist:"Animation by Morph Workshop",year:"2014",medium:"Animation",previewText:" "},{id:"sound-design/inbertywetrust",title:"In Berty We Trust!",thumbnail:"inbertywetrust-thumbnail.jpg",soundTask:"Sound Designer & Technical Supoort",collaborateArtist:"Concept and Visual: Angela Su || Animator: Flyingpig Wong",year:"2013",medium:"3-channel Video Installation",previewText:" "},{id:"sound-design/yeti",title:"Yeti",thumbnail:"yeti-thumbnail.jpg",soundTask:"Original music and sound design",collaborateArtist:"Animation by Joe Kwun, Treehouse Studio",year:"2013",medium:"Animation",previewText:" "},{id:"sound-design/1st-february",title:"1st February",thumbnail:"1stfeb-thumbnail.jpg",soundTask:"Sound design and Music ",collaborateArtist:"Directed and Animated by FlyingPig Wong Wing Shan",year:"2012",medium:"Animation",previewText:" "}]})};var c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-container",{staticClass:"album-container"},[e("b-row",[e("b-col",[e("h3",{staticClass:"album-session-intro"},[this._v(" Sound Design / Engineering ")])])],1),this._v(" "),e("soundDesignGrid",{attrs:{posts:this.albumList}})],1),this._ssrNode(" <br data-v-3e4cabcc>")],2)}),[],!1,(function(t){var e=n(275);e.__inject__&&e.__inject__(t)}),"3e4cabcc","4a41c0c3");e.default=c.exports},43:function(t,e,n){t.exports=n.p+"img/805b558.png"},44:function(t,e,n){t.exports=n.p+"img/c7acb0e.svg"},45:function(t,e,n){t.exports=n.p+"img/d19fd0f.png"},49:function(t,e,n){t.exports=n.p+"img/663612e.jpg"},50:function(t,e,n){t.exports=n.p+"img/111fcb9.jpg"},51:function(t,e,n){t.exports=n.p+"img/d992bb9.jpg"},52:function(t,e,n){t.exports=n.p+"img/59a72d1.png"},53:function(t,e,n){t.exports=n.p+"img/4f62fe7.jpg"},54:function(t,e,n){t.exports=n.p+"img/16771fd.jpg"},55:function(t,e,n){t.exports=n.p+"img/c7333e7.jpg"},56:function(t,e,n){t.exports=n.p+"img/1a8557c.jpg"},57:function(t,e,n){t.exports=n.p+"img/db31825.png"},58:function(t,e,n){t.exports=n.p+"img/b81f40a.png"},59:function(t,e,n){t.exports=n.p+"img/3605c16.jpg"},60:function(t,e,n){t.exports=n.p+"img/d13d482.jpg"},73:function(t,e,n){var map={"./1st_album_02.png":43,"./1stfeb-thumbnail.jpg":49,"./about-a-stalker.jpg":50,"./dancingeye-thumbnail.jpg":51,"./day-after-cd-front.png":52,"./ghost-thumbnail.jpg":53,"./halfhour-exercise-set.svg":44,"./inbertywetrust-thumbnail.jpg":54,"./lostandfound_poster_v2-01.jpg":55,"./lunapark-thumbnail.jpg":56,"./set-2.png":57,"./set-23.png":58,"./soundyoung-ep-1-album-cover.png":45,"./thehiddenwatcher-thumbnail.jpg":59,"./yeti-thumbnail.jpg":60};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=73}};