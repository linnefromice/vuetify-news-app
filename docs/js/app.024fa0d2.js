(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106a":function(t,e,n){"use strict";var a=n("9e7e"),r=n.n(a);r.a},"1d07":function(t,e,n){t.exports=n.p+"img/logo_vue.82b9c7a5.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bc3a"),o=n.n(r),i={},s=o.a.create(i);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var l=n("bb71");n("da64");a["a"].use(l["a"],{iconfont:"md"});var c=n("ecee"),u=n("c074"),f=n("f2d1"),p=n("b702"),v=n("ad3d"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("Navigation"),n("v-content",[n("router-view")],1),n("Footer")],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":"","clipped-right":""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("NEWS SITE")]),n("v-spacer"),n("span",{staticClass:"font-weight-light"},[t._v("The New York Times")])],1),n("v-spacer"),t._l(t.links,function(e,a){return n("v-btn",{key:a,attrs:{to:e.to}},[n("span",{staticClass:"mr-2 reference"},[t._v(" "+t._s(e.name)+" ")]),n("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1)}),n("v-btn",{attrs:{flat:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2 reference"},[t._v("Latest Release")])])],2)},g=[],b={data:function(){return{links:[{name:"NEWS",icon:"chat",to:"/news"},{name:"ABOUT ME",icon:"question_answer",to:"/about"},{name:"ADV",icon:"info",to:"/advertisement"}]}}},x=b,_=(n("106a"),n("2877")),w=n("6544"),y=n.n(w),V=n("8336"),j=n("132d"),k=n("9910"),T=n("71d9"),C=n("2a7f"),P=Object(_["a"])(x,h,g,!1,null,null,null),O=P.exports;y()(P,{VBtn:V["a"],VIcon:j["a"],VSpacer:k["a"],VToolbar:T["a"],VToolbarTitle:C["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",fixed:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.links,function(e,a){return n("v-list-tile",{key:a,attrs:{to:e.to}},[n("v-list-tile-action",[n("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(" "+t._s(e.name)+" ")])],1)],1)}),1),n("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")])])],1)],1)},A=[],E={data:function(){return{links:[{name:"NEWS",icon:"chat",to:"/news"},{name:"ABOUT ME",icon:"question_answer",to:"/about"},{name:"ADV",icon:"info",to:"/advertisement"}],drawer:!0,mini:!0,right:null}}},S=E,F=n("8860"),H=n("ba95"),M=n("40fe"),I=n("5d23"),$=n("f774"),N=Object(_["a"])(S,L,A,!1,null,null,null),B=N.exports;y()(N,{VBtn:V["a"],VIcon:j["a"],VList:F["a"],VListTile:H["a"],VListTileAction:M["a"],VListTileContent:I["a"],VListTileTitle:I["c"],VNavigationDrawer:$["a"],VToolbar:T["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:"",height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._l(t.links,function(e){return n("v-btn",{key:e,attrs:{color:"white",flat:"",found:""}},[t._v("\n      "+t._s(e)+"\n    ")])}),n("v-flex",{attrs:{info:"","lighten-2":"","text-xs-center":"","white--text":"",xs12:""}},t._l(t.icons,function(t,e){return n("v-btn",{key:e,staticClass:"mx-3",attrs:{href:t.ref,dark:"",icon:""}},[n("font-awesome-icon",{attrs:{icon:[t.prefix,t.name],size:"2x"}})],1)}),1),n("v-flex",{attrs:{primary:"","lighten-2":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n        © "+t._s((new Date).getFullYear())+"\n    ")])],2)],1)},J=[],W={name:"Footer",data:function(){return{links:["Home","About","Team","Services","Blog","Contact Us"],icons:[{prefix:"fas",name:"school",ref:"https://www.pluralsight.com/codeschool"},{prefix:"fab",name:"twitter",ref:"https://twitter.com/twitterjp?lang=ja"},{prefix:"fab",name:"facebook",ref:"https://ja-jp.facebook.com/FacebookJapan/"},{prefix:"fab",name:"google-plus",ref:"https://plus.google.com/?hl=ja"},{prefix:"fab",name:"linkedin",ref:"https://jp.linkedin.com/"},{prefix:"fab",name:"instagram",ref:"https://www.instagram.com/instagramjapan/?hl=ja"}]}}},q=W,R=n("0e8f"),z=n("553a"),U=n("a722"),Y=Object(_["a"])(q,D,J,!1,null,null,null),G=Y.exports;y()(Y,{VBtn:V["a"],VFlex:R["a"],VFooter:z["a"],VLayout:U["a"]});var X={name:"App",components:{Header:O,Navigation:B,Footer:G},data:function(){return{}}},K=X,Q=n("7496"),Z=n("549c"),tt=Object(_["a"])(K,m,d,!1,null,null,null),et=tt.exports;y()(tt,{VApp:Q["a"],VContent:Z["a"]});var nt=n("8c4f"),at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.processedPosts,function(e,a){return n("v-flex",{key:a,attrs:{xs12:""}},t._l(e,function(e,a){return n("v-card",{key:a,attrs:{href:e.url,target:"_blank"}},[n("v-card-title",[n("span",{staticClass:"blue--text"},[t._v(t._s(e.title))])]),n("v-card-actions",[n("v-img",{attrs:{src:e.image_url,height:"200px",contain:""}})],1),n("v-card-text",[n("span",{staticClass:"grey--text"},[t._v(t._s(e.abstract))])])],1)}),1)}),1)},rt=[],ot=(n("7514"),"https://api.nytimes.com/svc/topstories/v2/"),it="pIqs56AsXPHFM7pjHHGORcsizWxggEhn";function st(t){return ot+t+".json?api-key="+it}var lt={data:function(){return{results:[]}},mounted:function(){this.getPosts("home")},methods:{getPosts:function(t){var e=this,n=st(t);axios.get(n).then(function(t){e.results=t.data.results}).catch(function(t){console.log(t)})}},computed:{processedPosts:function(){var t=this.results;t.map(function(t){var e=t.multimedia.find(function(t){return"superJumbo"===t.format});t.image_url=e?e.url:"http://placehold.it/300x200?text=N/A"});var e,n,a=[],r=4;for(e=0,n=0;e<t.length;e+=r,n++)a[n]=t.slice(e,e+r);return a}}},ct=lt,ut=n("b0af"),ft=n("99d9"),pt=n("12b2"),vt=n("adda"),mt=Object(_["a"])(ct,at,rt,!1,null,null,null),dt=mt.exports;y()(mt,{VCard:ut["a"],VCardActions:ft["a"],VCardText:ft["b"],VCardTitle:pt["a"],VFlex:R["a"],VImg:vt["a"],VLayout:U["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("v-layout",{attrs:{"text-xs-center":"","mt-5":"","px-3":"","py-3":""}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"display-2 font-weight-bold"},[t._v("About Me")])])],1),a("v-layout",{staticClass:"text-xs-center",attrs:{"mt-3":"","px-5":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-avatar",{attrs:{size:"250",color:"grey lighten-4"}},[a("v-img",{attrs:{src:n("9384"),alt:"avatar"}})],1),a("p",{staticClass:"headline font-weight mt-2"},[t._v(" "+t._s(t.name))]),a("p",{staticClass:"title font-weight-thin mt-3"},[t._v(t._s(t.introduction))])],1)],1)],1)},gt=[],bt={data:function(){return{name:"linnefromice",introduction:"Hello I'm a Web Developer from Japan. Have 3 years work experience in IT Industry."}}},xt=bt,_t=n("8212"),wt=Object(_["a"])(xt,ht,gt,!1,null,null,null),yt=wt.exports;y()(wt,{VAvatar:_t["a"],VFlex:R["a"],VImg:vt["a"],VLayout:U["a"]});var Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-list",{attrs:{"two-line":""}},[t._l(t.techstacks,function(e,a){return[n("v-divider",{key:a}),n("v-list-tile",{key:a,attrs:{href:e.url,target:"_blank",avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.image}})]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.description)}})],1)],1),n("v-divider",{key:a})]})],2)],1)},jt=[],kt={data:function(){return{techstacks:[{name:"Vuetify",image:n("9b19"),description:"design framework for Vue.js.",url:"https://vuetifyjs.com"},{name:"Vue Router",image:n("1d07"),description:"Vue.js's official router.",url:"https://router.vuejs.org/ja/"},{name:"axios",image:n("dbf9"),description:"Promise based HTTP client for the browser and node.js.",url:"https://github.com/axios/axios"},{name:"Font Awesome",image:n("e9c7"),description:"the web's most popular icon set and toolkit.",url:"https://fontawesome.com/"}]}}},Tt=kt,Ct=n("a523"),Pt=n("ce7e"),Ot=n("c954"),Lt=Object(_["a"])(Tt,Vt,jt,!1,null,null,null),At=Lt.exports;y()(Lt,{VContainer:Ct["a"],VDivider:Pt["a"],VList:F["a"],VListTile:H["a"],VListTileAvatar:Ot["a"],VListTileContent:I["a"],VListTileSubTitle:I["b"],VListTileTitle:I["c"]}),a["a"].use(nt["a"]);var Et=new nt["a"]({routes:[{path:"/news",name:"news",component:dt},{path:"/about",name:"about",component:yt},{path:"/advertisement",name:"advertisement",component:At}]});c["c"].add(u["a"],f["a"],p["a"]),a["a"].component("font-awesome-icon",v["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Et,render:function(t){return t(et)}}).$mount("#app")},9384:function(t,e,n){t.exports=n.p+"img/icon_account.ff7019f9.jpg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},"9e7e":function(t,e,n){},dbf9:function(t,e,n){t.exports=n.p+"img/logo_axios.0f8f07cb.png"},e9c7:function(t,e,n){t.exports=n.p+"img/logo_fontawesome.f1234720.svg"}});
//# sourceMappingURL=app.024fa0d2.js.map