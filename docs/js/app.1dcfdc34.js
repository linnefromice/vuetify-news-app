(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],m=0,f=[];m<i.length;m++)s=i[m],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106a":function(t,e,n){"use strict";var a=n("9e7e"),r=n.n(a);r.a},"1d07":function(t,e,n){t.exports=n.p+"img/logo_vue.82b9c7a5.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bc3a"),o=n.n(r),s={},i=o.a.create(s);i.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),i.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},a["a"].use(Plugin);Plugin;var c=n("bb71");n("da64");a["a"].use(c["a"],{iconfont:"md"});var l=n("ecee"),u=n("c074"),m=n("f2d1"),f=n("b702"),p=n("ad3d"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("Navigation"),n("v-content",[n("router-view")],1),n("Footer")],1)},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":"","clipped-right":""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v(t._s(t.basicInformation.main))]),n("v-spacer"),n("span",{staticClass:"font-weight-light"},[t._v(t._s(t.basicInformation.sub))])],1),n("v-spacer"),t._l(t.links,function(e,a){return n("v-btn",{key:a,attrs:{to:e.to}},[n("span",{staticClass:"mr-2 reference"},[t._v(" "+t._s(e.name)+" ")]),n("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1)}),n("v-btn",{attrs:{flat:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2 reference"},[t._v("Latest Release")])])],2)},g=[],h=n("cebc"),_=n("2f62"),w={name:"Header",data:function(){return{links:[{name:"NEWS",icon:"chat",to:"/news"},{name:"BOOKMARK",icon:"bookmark",to:"/bookmarkedNews"},{name:"ABOUT ME",icon:"question_answer",to:"/about"},{name:"ADV",icon:"info",to:"/advertisement"},{name:"TEST",icon:"info",to:"/test"}]}},computed:Object(h["a"])({},Object(_["b"])("basicInformation",{basicInformation:"getState"}))},x=w,k=(n("106a"),n("2877")),y=n("6544"),V=n.n(y),T=n("8336"),j=n("132d"),N=n("9910"),O=n("71d9"),C=n("2a7f"),E=Object(k["a"])(x,b,g,!1,null,null,null),S=E.exports;V()(E,{VBtn:T["a"],VIcon:j["a"],VSpacer:N["a"],VToolbar:O["a"],VToolbarTitle:C["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",fixed:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.links,function(e,a){return n("v-list-tile",{key:a,attrs:{to:e.to}},[n("v-list-tile-action",[n("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(" "+t._s(e.name)+" ")])],1)],1)}),1),n("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")])])],1)],1)},L=[],A={data:function(){return{links:[{name:"NEWS",icon:"chat",to:"/news"},{name:"BOOKMARK",icon:"bookmark",to:"/bookmarkedNews"},{name:"ABOUT ME",icon:"question_answer",to:"/about"},{name:"ADV",icon:"info",to:"/advertisement"},{name:"TEST",icon:"info",to:"/test"}],drawer:!0,mini:!0,right:null}}},I=A,$=n("8860"),F=n("ba95"),H=n("40fe"),M=n("5d23"),B=n("f774"),R=Object(k["a"])(I,P,L,!1,null,null,null),D=R.exports;V()(R,{VBtn:T["a"],VIcon:j["a"],VList:$["a"],VListTile:F["a"],VListTileAction:H["a"],VListTileContent:M["a"],VListTileTitle:M["c"],VNavigationDrawer:B["a"],VToolbar:O["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:"",height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._l(t.links,function(e){return n("v-btn",{key:e,attrs:{color:"white",flat:"",found:""}},[t._v("\n      "+t._s(e)+"\n    ")])}),n("v-flex",{attrs:{info:"","lighten-2":"","text-xs-center":"","white--text":"",xs12:""}},t._l(t.icons,function(t,e){return n("v-btn",{key:e,staticClass:"mx-3",attrs:{href:t.ref,dark:"",icon:""}},[n("font-awesome-icon",{attrs:{icon:[t.prefix,t.name],size:"2x"}})],1)}),1),n("v-flex",{attrs:{primary:"","lighten-2":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n        © "+t._s((new Date).getFullYear())+"\n    ")])],2)],1)},W=[],q={name:"Footer",data:function(){return{links:["Home","About","Team","Services","Blog","Contact Us"],icons:[{prefix:"fas",name:"school",ref:"https://www.pluralsight.com/codeschool"},{prefix:"fab",name:"twitter",ref:"https://twitter.com/twitterjp?lang=ja"},{prefix:"fab",name:"facebook",ref:"https://ja-jp.facebook.com/FacebookJapan/"},{prefix:"fab",name:"google-plus",ref:"https://plus.google.com/?hl=ja"},{prefix:"fab",name:"linkedin",ref:"https://jp.linkedin.com/"},{prefix:"fab",name:"instagram",ref:"https://www.instagram.com/instagramjapan/?hl=ja"}]}}},K=q,z=n("0e8f"),U=n("553a"),Y=n("a722"),G=Object(k["a"])(K,J,W,!1,null,null,null),X=G.exports;V()(G,{VBtn:T["a"],VFlex:z["a"],VFooter:U["a"],VLayout:Y["a"]});var Q={name:"App",components:{Header:S,Navigation:D,Footer:X},data:function(){return{}}},Z=Q,tt=n("7496"),et=n("549c"),nt=Object(k["a"])(Z,d,v,!1,null,null,null),at=nt.exports;V()(nt,{VApp:tt["a"],VContent:et["a"]});var rt=n("8c4f"),ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.processedPosts,function(e,a){return n("v-flex",{key:a,attrs:{xs6:""}},t._l(e,function(e,a){return n("v-card",{key:a,attrs:{target:"_blank"}},[n("v-card-title",[n("div",[n("span",{staticClass:"blue--text"},[t._v("TITLE : "+t._s(e.title))]),n("br"),n("span",{staticClass:"gray--text"},[t._v("SECTION : "+t._s(e.section))]),n("br"),n("span",{staticClass:"gray--text"},[t._v(t._s(e.byline))])])]),n("v-img",{attrs:{src:e.image_url,height:"200px"}}),n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.addNews(e)}}},[n("v-icon",[t._v("bookmark")])],1),n("v-btn",{attrs:{icon:"",href:e.url}},[n("v-icon",[t._v("link")])],1)],1),n("v-card-text",[n("span",{staticClass:"grey--text"},[t._v(t._s(e.abstract))])])],1)}),1)}),1)},st=[],it=(n("7514"),"https://api.nytimes.com/svc/topstories/v2/"),ct="pIqs56AsXPHFM7pjHHGORcsizWxggEhn";function lt(t){return it+t+".json?api-key="+ct}var ut={name:"News",data:function(){return{results:[]}},mounted:function(){this.getPosts("home")},methods:{addNews:function(t){this.$store.dispatch("bookmarkNews/addNews",t)},getPosts:function(t){var e=this,n=lt(t);axios.get(n).then(function(t){e.results=t.data.results}).catch(function(t){console.log(t)})}},computed:{processedPosts:function(){var t=this.results;t.map(function(t){var e=t.multimedia.find(function(t){return"superJumbo"===t.format});t.image_url=e?e.url:"http://placehold.it/300x200?text=N/A"});var e,n,a=[],r=4;for(e=0,n=0;e<t.length;e+=r,n++)a[n]=t.slice(e,e+r);return a}}},mt=ut,ft=n("b0af"),pt=n("99d9"),dt=n("12b2"),vt=n("adda"),bt=Object(k["a"])(mt,ot,st,!1,null,null,null),gt=bt.exports;V()(bt,{VBtn:T["a"],VCard:ft["a"],VCardActions:pt["a"],VCardText:pt["b"],VCardTitle:dt["a"],VFlex:z["a"],VIcon:j["a"],VImg:vt["a"],VLayout:Y["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:""}},t._l(t.posts,function(e,a){return n("v-card",{key:a},[n("v-card-title",[t._v("\n        "+t._s(e.title)+"\n      ")]),n("v-img",{attrs:{src:e.image_url,height:"200px"}}),n("v-card-actions"),n("v-card-text",[n("span",{staticClass:"grey--text"},[t._v(t._s(e.abstract))])])],1)}),1)],1)},_t=[],wt={name:"BookmarkedNews",computed:Object(h["a"])({},Object(_["b"])("bookmarkNews",{posts:"getNews"}))},xt=wt,kt=Object(k["a"])(xt,ht,_t,!1,null,null,null),yt=kt.exports;V()(kt,{VCard:ft["a"],VCardActions:pt["a"],VCardText:pt["b"],VCardTitle:dt["a"],VFlex:z["a"],VImg:vt["a"],VLayout:Y["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("v-layout",{attrs:{"text-xs-center":"","mt-5":"","px-3":"","py-3":""}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"display-2 font-weight-bold"},[t._v("About Me")])])],1),a("v-layout",{staticClass:"text-xs-center",attrs:{"mt-3":"","px-5":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-avatar",{attrs:{size:"250",color:"grey lighten-4"}},[a("v-img",{attrs:{src:n("9384"),alt:"avatar"}})],1),a("p",{staticClass:"headline font-weight mt-2"},[t._v(" "+t._s(t.user.name))]),a("p",{staticClass:"title font-weight-thin mt-3"},[t._v(t._s(t.user.introduction))])],1)],1)],1)},Tt=[],jt={name:"About",computed:Object(h["a"])({},Object(_["b"])("user",{user:"getState"}))},Nt=jt,Ot=n("8212"),Ct=Object(k["a"])(Nt,Vt,Tt,!1,null,null,null),Et=Ct.exports;V()(Ct,{VAvatar:Ot["a"],VFlex:z["a"],VImg:vt["a"],VLayout:Y["a"]});var St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-list",{attrs:{"two-line":""}},[t._l(t.techstacks,function(e,a){return[n("v-list-tile",{key:a,attrs:{href:e.url,target:"_blank",avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.image}})]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.description)}})],1)],1)]})],2)],1)},Pt=[],Lt={data:function(){return{techstacks:[{name:"Vuetify",image:n("9b19"),description:"design framework for Vue.js.",url:"https://vuetifyjs.com"},{name:"Vue Router",image:n("1d07"),description:"Vue.js's official router.",url:"https://router.vuejs.org/ja/"},{name:"axios",image:n("dbf9"),description:"Promise based HTTP client for the browser and node.js.",url:"https://github.com/axios/axios"},{name:"Font Awesome",image:n("e9c7"),description:"the web's most popular icon set and toolkit.",url:"https://fontawesome.com/"}]}}},At=Lt,It=n("a523"),$t=n("c954"),Ft=Object(k["a"])(At,St,Pt,!1,null,null,null),Ht=Ft.exports;V()(Ft,{VContainer:It["a"],VList:$["a"],VListTile:F["a"],VListTileAvatar:$t["a"],VListTileContent:M["a"],VListTileSubTitle:M["b"],VListTileTitle:M["c"]});var Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"counter"}},[n("div",[t._v("Test page")]),n("div",[t._v("Count: "+t._s(t.count))]),n("v-btn",{on:{click:t.decrement}},[t._v("-1")]),n("br"),n("v-btn",{on:{click:t.increment}},[t._v("+1")]),n("br")],1)},Bt=[],Rt={name:"Counter",computed:Object(h["a"])({},Object(_["b"])("counter",{count:"getNumber"})),methods:{increment:function(){this.$store.dispatch("counter/increment")},decrement:function(){this.$store.dispatch("counter/decrement")}}},Dt=Rt,Jt=Object(k["a"])(Dt,Mt,Bt,!1,null,null,null),Wt=Jt.exports;V()(Jt,{VBtn:T["a"]}),a["a"].use(rt["a"]);var qt=new rt["a"]({routes:[{path:"/news",name:"news",component:gt},{path:"/bookmarkedNews",name:"bookmarkedNews",component:yt},{path:"/about",name:"about",component:Et},{path:"/advertisement",name:"advertisement",component:Ht},{path:"/test",name:"test",component:Wt}]}),Kt={main:"NEWS SITE",sub:"The New York Times"},zt={getState:function(t){return t}},Ut={namespaced:!0,state:Kt,getters:zt},Yt={name:"linnefromice",introduction:"Hello I'm a Web Developer from Japan. Have 3 years work experience in IT Industry."},Gt={getState:function(t){return t}},Xt={namespaced:!0,state:Yt,getters:Gt},Qt={number:0},Zt={increment:function(t){console.log("TEST mutations.increment"),console.log(t),t.number++},decrement:function(t){console.log("TEST mutations.decrement"),console.log(t),t.number--}},te={increment:function(t){console.log("TEST actions.increment"),console.log(t),t.commit("increment")},decrement:function(t){console.log("TEST actions.decrement"),console.log(t),t.commit("decrement")}},ee={getNumber:function(t){return console.log("TEST getters.getNumber"),console.log(t),t.number}},ne={namespaced:!0,state:Qt,mutations:Zt,actions:te,getters:ee},ae={currentNumber:0,news:[]},re={addNews:function(t,e){t.currentNumber++,e.id=t.currentNumber,t.news.push(e)},removeNews:function(t){t.currentNumber+=0}},oe={addNews:function(t,e){var n={id:0,title:e.title,section:e.section,byline:e.byline,image_url:e.image_url,url:e.url};t.commit("addNews",n)},removeNews:function(t){t.commit("removeNews")}},se={getNews:function(t){return t.news}},ie={namespaced:!0,state:ae,mutations:re,actions:oe,getters:se};a["a"].use(_["a"]);var ce=new _["a"].Store({modules:{basicInformation:Ut,user:Xt,counter:ne,bookmarkNews:ie}});l["c"].add(u["a"],m["a"],f["a"]),a["a"].component("font-awesome-icon",p["a"]),a["a"].config.productionTip=!1,new a["a"]({router:qt,store:ce,render:function(t){return t(at)}}).$mount("#app")},9384:function(t,e,n){t.exports=n.p+"img/icon_account.ff7019f9.jpg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},"9e7e":function(t,e,n){},dbf9:function(t,e,n){t.exports=n.p+"img/logo_axios.0f8f07cb.png"},e9c7:function(t,e,n){t.exports=n.p+"img/logo_fontawesome.f1234720.svg"}});
//# sourceMappingURL=app.1dcfdc34.js.map