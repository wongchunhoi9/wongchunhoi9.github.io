(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{226:function(e,t,r){e.exports=r.p+"img/805b558.png"},227:function(e,t,r){e.exports=r.p+"img/c7acb0e.svg"},228:function(e,t,r){e.exports=r.p+"img/d19fd0f.png"},229:function(e,t,r){e.exports=r.p+"img/59a72d1.png"},230:function(e,t,r){e.exports=r.p+"img/db31825.png"},231:function(e,t,r){e.exports=r.p+"img/b81f40a.png"},233:function(e,t,r){var content=r(260);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("6c4406de",content,!0,{sourceMap:!1})},234:function(e,t,r){e.exports=r.p+"img/2ab35a3.svg"},235:function(e,t,r){e.exports=r.p+"img/0f81ea1.svg"},236:function(e,t,r){var map={"./About/profile-picture-draw.svg":234,"./About/profile-picture-wong-chun-hoi-2.jpg":247,"./Dream-machine-conceptsketch-thumbnail.svg":248,"./Extremelyusefulsystem0_sketch.svg":249,"./extremelyusefulsystem_01_sketchingthumbnail.svg":250,"./footer/footerBackground.svg":105,"./footer/wave.svg":251,"./hardworking-circuit-1-2-connectionsketch.svg":252,"./hardworking-circuit-1-4-conceptsketch.svg":253,"./hardworking-circuit-1p3sketch-03-770x232.png":254,"./hardworking-circuit-1p3sketch-03.svg":235,"./hardworkingcircuitsurplus-thumbnail.svg":255,"./lethardplasticbeelectrocuted_connectionweb.svg":256,"./orange5-p1-200px.gif":257,"./sound/1st_album_02.png":226,"./sound/day-after-cd-front.png":229,"./sound/halfhour-exercise-set.svg":227,"./sound/set-2.png":230,"./sound/set-23.png":231,"./sound/soundyoung-ep-1-album-cover.png":228,"./those-orange-work-sketch-copy-300px-width.png":258};function o(e){var t=n(e);return r(t)}function n(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=n,e.exports=o,o.id=236},237:function(e,t,r){"use strict";var o={name:"workPreviewCard",props:{id:{type:String,required:!0},title:{type:String,required:!0},PreviewText:{type:String,required:!0},thumbnail:{type:String,required:!0},medium:{type:String,required:!0},year:{type:String,required:!0},category:{type:String,required:!0}},computed:{postLink:function(){return"/work/"+this.id},postImage:function(){this.thumbnail.toLowerCase();return r(236)("./"+this.thumbnail)},postPreviewTitle:function(){return this.title}}},n=r(25),c={components:{workPreviewCard:Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nuxt-link",{staticClass:"post-preview",attrs:{to:e.postLink}},[r("article",[r("b-card",{staticStyle:{"max-width":"20rem","margin-bottom":"10px",position:"relative",display:"flex","background-color":"#E8A87C41","border-width":"5px"},attrs:{title:e.postPreviewTitle,"img-src":e.postImage}},[r("b-card-sub-title",{attrs:{aligh:"right"}},[e._v(" "+e._s(e.medium)+"\n                  "),r("br"),e._v("\n                  "+e._s(e.year))]),e._v(" "),r("b-card-text",[r("br"),e._v("\n                 "+e._s(e.PreviewText)+"\n                ")]),e._v(" "),r("b-card-footer",[e._v("\n                      "+e._s(e.category)+"\n                      ")])],1)],1)])],1)}),[],!1,null,"5ada4ba6",null).exports},props:{posts:{type:Array,required:!0}}},l=(r(259),Object(n.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("div",[t("b-card-group",{attrs:{deck:""}},this._l(this.posts,(function(e){return t("workPreviewCard",{key:e.id,attrs:{id:e.id,thumbnail:e.thumbnail,title:e.title,PreviewText:e.previewText,medium:e.medium,year:e.year,category:e.category}})})),1)],1)])}),[],!1,null,"69ec00ba",null));t.a=l.exports},247:function(e,t,r){e.exports=r.p+"img/b3799ba.jpg"},248:function(e,t,r){e.exports=r.p+"img/1c2668e.svg"},249:function(e,t,r){e.exports=r.p+"img/883bb2e.svg"},250:function(e,t,r){e.exports=r.p+"img/b2200d9.svg"},251:function(e,t,r){e.exports=r.p+"img/a3a9f6a.svg"},252:function(e,t,r){e.exports=r.p+"img/e384a37.svg"},253:function(e,t,r){e.exports=r.p+"img/a25e5bc.svg"},254:function(e,t,r){e.exports=r.p+"img/dc66574.png"},255:function(e,t,r){e.exports=r.p+"img/b2e5d56.svg"},256:function(e,t,r){e.exports=r.p+"img/e018b45.svg"},257:function(e,t,r){e.exports=r.p+"img/fac2cf4.gif"},258:function(e,t,r){e.exports=r.p+"img/b4d229b.png"},259:function(e,t,r){"use strict";var o=r(233);r.n(o).a},260:function(e,t,r){(t=r(30)(!1)).push([e.i,".post-list[data-v-69ec00ba]{display:flex;padding:0;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),e.exports=t},261:function(e,t,r){var content=r(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("bd21adee",content,!0,{sourceMap:!1})},262:function(e,t,r){var content=r(283);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("27bb56c4",content,!0,{sourceMap:!1})},280:function(e,t,r){"use strict";var o=r(261);r.n(o).a},281:function(e,t,r){(t=r(30)(!1)).push([e.i,".container[data-v-3735760a]{margin:auto;width:50%}",""]),e.exports=t},282:function(e,t,r){"use strict";var o=r(262);r.n(o).a},283:function(e,t,r){(t=r(30)(!1)).push([e.i,".work-page-container[data-v-3b4788cc]{background-color:rgba(200,124,66,.062);height:100%;padding:3px;display:flex;flex-wrap:wrap;justify-content:center;margin:auto}.work-page-grid-backgroundcolor .row>[class^=col-][data-v-3b4788cc]{background-color:rgba(144,171,184,.219);border-left-style:solid;border-right-style:solid;border-width:0;border-top:1px solid #6c7c81;border-bottom:1px solid #6c7c81;padding-top:5px;padding-bottom:5px}.home-page-row-backgroundcolor .row .col[data-v-3b4788cc]{background-color:rgba(200,124,66,.192);border-left-style:solid;border-right-style:solid;border-width:0;padding-top:5px;padding-bottom:5px;margin-bottom:2px;margin-top:2px;border-top:1px solid #e8a87c;border-bottom:1px solid #e8a87c}",""]),e.exports=t},302:function(e,t,r){"use strict";r.r(t);r(104);var o=r(237),n=(r(18),{computed:{crumbs:function(){var e=this,t=this.$route.path.split("/");return t.shift(),t.reduce((function(t,path,r){return t.push({path:path,to:t[r-1]?"/"+t[r-1].path+"/"+path:"/"+path,text:e.$route.matched[r].meta.breadCrumb||path}),t}),[])}}}),c=(r(280),r(25)),l=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"container"},[t("b-breadcrumb",{attrs:{items:this.crumbs}})],1)])}),[],!1,null,"3735760a",null).exports,d={components:{workPreviewList:o.a,TheRoute:l},data:function(){return{filterValue:"",filterWorkPost:[{}],WorkloadedPosts:[{id:"hardworking-circuit-1-4",title:"hardworking circuit #1.4 勤力電路＃1.4",previewText:"",thumbnail:"hardworking-circuit-1-4-conceptsketch.svg",medium:"electronics",year:"2018",category:"installation | electronics | stupid  | toy"},{id:"those-oranges-you-cannot-eat-installation",title:"冚街橙  | Those oranges you cannot eat  ",previewText:"A assemblage I did during C3A Residency @ Cordoba, Spain",thumbnail:"those-orange-work-sketch-copy-300px-width.png",medium:"electronics , found objects",year:"2019",category:"sound | electronics | installation | assemblage"},{id:"those-oranges-you-cannot-eat-3Dscan",title:"冚街橙 立體掃描 | Those oranges you cannot eat (3D scanned object) ",previewText:"Collection of bitter orange @ C3A Residency @ Cordoba, Spain",thumbnail:"orange5-p1-200px.gif",medium:"digital 3D Objects , found objects, video",year:"2019",category:"3D Objects | found objects | food"},{id:"Dream-Machine-L306D-Dream-team",title:"Dream Machine 夢幻機器 ",previewText:"by L305D Dream Team Collectives",thumbnail:"Dream-machine-conceptsketch-thumbnail.svg",medium:"installation",year:"2019",category:"video | sound | patching"},{id:"hardworking-circuit-1-3",title:"hardworking circuit #1.3 勤力電路＃1.3 ",previewText:"",thumbnail:"hardworking-circuit-1p3sketch-03-770x232.png",medium:"electronics",year:"2017-2019",category:"nstallation | electronics | stupid  | toy | performance"},{id:"hardworking-circuit-1-surplus",title:"hardworking circuit #1 - surplus 勤力電路＃1 剩物 ",previewText:"",thumbnail:"hardworkingcircuitsurplus-thumbnail.svg",medium:"digital image",year:"2016",category:"electronics | rubbish | scan | image | 2D"},{id:"hardworking-circuit-1-2",title:"hardworking circuit #1.2 24VDC  勤力電路＃1.2 直流電24伏特 ",previewText:"",thumbnail:"hardworking-circuit-1-2-connectionsketch.svg",medium:"electronics",year:"2016",category:"electronics | "},{id:"let-hard-plastic-get-electrocuted",title:"Let hard plastic get electrocuted ！讓硬塑料被電吧！",previewText:"",thumbnail:"lethardplasticbeelectrocuted_connectionweb.svg",medium:"electronics",year:"2011-2016",category:"electronics | game"},{id:"extremely-useful-system-0-hanger",title:"extremely useful system #0 – hanger | 終極有用系統 #0 – 衣架",previewText:"",thumbnail:"Extremelyusefulsystem0_sketch.svg",medium:"electronics, Micro processor, IR sensor, Stepper motor, hanger, gloves",year:"2016-01",category:"electronics | installatiom"},{id:"extremely-useful-system-1-firewood",title:"extremely useful system #1 – firewood ｜終極有用系統 #1 – 柴火",previewText:"",thumbnail:"extremelyusefulsystem_01_sketchingthumbnail.svg",medium:"electronics | servo motos, micro controller, wood, magnetic glass",year:"2016",category:"electronics | installation | burn "}]}},computed:{filterdWorks:function(){var e=this;return this.WorkloadedPosts.filter((function(t){return t.category.match(e.filterValue)}))}}},m=(r(282),Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"work-page-container"},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("h3",[e._v("works")]),e._v(" "),r("div",[r("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"search work category"},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}}),e._v(" "),r("p",[e._v("filterValue: "+e._s(e.filterValue)+"  ")])],1)])],1),e._v(" "),r("b-row",[r("b-col",[r("workPreviewList",{attrs:{posts:e.filterdWorks}})],1)],1)],1)],1)}),[],!1,null,"3b4788cc",null));t.default=m.exports}}]);