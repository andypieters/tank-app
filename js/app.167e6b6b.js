(function(e){function t(t){for(var r,s,a=t[0],c=t[1],l=t[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tank-app/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("Navigation")],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Application")])],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[e._v("© 2019")])])],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:"",to:"/"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Home")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/session/add"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Sessie toevoegen")])],1)],1)],1)},a=[],c=n("2877"),l=n("6544"),u=n.n(l),f=n("132d"),p=n("8860"),d=n("da13"),v=n("1800"),b=n("5d23"),m={},O=Object(c["a"])(m,s,a,!1,null,null,null),y=O.exports;u()(O,{VIcon:f["a"],VList:p["a"],VListItem:d["a"],VListItemAction:v["a"],VListItemContent:b["a"],VListItemTitle:b["c"]});var S={props:{source:String},components:{Navigation:y},created:function(){this.$store.commit("initialiseStore")},data:function(){return{drawer:null}}},g=S,h=n("7496"),j=n("40dc"),w=n("5bc1"),V=n("a75b"),P=n("553a"),_=n("f774"),k=n("2a7f"),x=Object(c["a"])(g,o,i,!1,null,null,null),T=x.exports;u()(x,{VApp:h["a"],VAppBar:j["a"],VAppBarNavIcon:w["a"],VContent:V["a"],VFooter:P["a"],VNavigationDrawer:_["a"],VToolbarTitle:k["a"]});var $=n("9483");Object($["a"])("".concat("/tank-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var E=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[e._v("Tank sessies")]),n("v-spacer"),n("v-btn",{attrs:{link:"",to:"/session/add",icon:""}},[n("v-icon",[e._v("mdi-plus")])],1)],1),n("v-list",e._l(e.fuelSessions,(function(t){return n("v-list-item",{key:t.id},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.odo))]),n("v-list-item-subtitle",[e._v(e._s(t.liters)+" x "+e._s(t.pricePerLiter))])],1),n("v-list-item-action",[n("span",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.editSession(t)}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("mdi-pencil")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.deleteSession(t)}}},[n("v-icon",{attrs:{color:"red lighten-1"}},[e._v("mdi-delete")])],1)],1)])],1)})),1)],1)],1)],1)],1)},L=[],C=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),D=n("2f62");function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(C["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={name:"home",computed:A({},Object(D["c"])(["fuelSessions"])),methods:{editSession:function(e){this.$router.push({name:"editSession",params:{id:e.id}})},deleteSession:function(e){this.$store.commit("deleteFuelSession",e)}}},B=N,J=n("8336"),M=n("b0af"),R=n("62ad"),q=n("a523"),H=n("0fd9"),K=n("2fa4"),Z=n("71d9"),z=Object(c["a"])(B,I,L,!1,null,null,null),G=z.exports;u()(z,{VBtn:J["a"],VCard:M["a"],VCol:R["a"],VContainer:q["a"],VIcon:f["a"],VList:p["a"],VListItem:d["a"],VListItemAction:v["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:H["a"],VSpacer:K["a"],VToolbar:Z["a"],VToolbarTitle:k["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SessionForm",{on:{cancel:e.cancel,save:e.saveSession}})},U=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[e._v("Tanksessie toevoegen")])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Km stand",name:"odo",type:"number",step:"0.1"},model:{value:e.fuelSession.odo,callback:function(t){e.$set(e.fuelSession,"odo",t)},expression:"fuelSession.odo"}}),n("v-text-field",{attrs:{label:"Liters",name:"liters",type:"number",step:"0.001"},model:{value:e.fuelSession.liters,callback:function(t){e.$set(e.fuelSession,"liters",t)},expression:"fuelSession.liters"}}),n("v-text-field",{attrs:{label:"Literprijs",name:"pricePerLiter",type:"number",step:"0.001"},model:{value:e.fuelSession.pricePerLiter,callback:function(t){e.$set(e.fuelSession,"pricePerLiter",t)},expression:"fuelSession.pricePerLiter"}}),n("v-select",{attrs:{label:"Brandstof",items:e.fuelTypes},model:{value:e.fuelSession.fuelType,callback:function(t){e.$set(e.fuelSession,"fuelType",t)},expression:"fuelSession.fuelType"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{link:"",to:"/"}},[e._v("Annuleren")]),n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.save}},[e._v("Opslaan")])],1)],1)],1)],1)],1)},X=[],Y=(n("0d03"),n("11c1")),ee=n.n(Y);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(C["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=r["default"].extend({methods:{cancel:function(){this.$emit("cancel")},save:function(){this.$emit("save",this.$props.fuelSession)}},data:function(){return{isNew:!1}},computed:ne({},Object(D["c"])(["fuelTypes"])),props:{fuelSession:{type:Object,default:function(){return{id:ee()(),createdAt:new Date}}}}}),oe=re,ie=n("99d9"),se=n("4bd4"),ae=n("b974"),ce=n("8654"),le=Object(c["a"])(oe,W,X,!1,null,null,null),ue=le.exports;u()(le,{VBtn:J["a"],VCard:M["a"],VCardActions:ie["a"],VCardText:ie["b"],VCol:R["a"],VContainer:q["a"],VForm:se["a"],VRow:H["a"],VSelect:ae["a"],VSpacer:K["a"],VTextField:ce["a"],VToolbar:Z["a"],VToolbarTitle:k["a"]});var fe=r["default"].extend({components:{SessionForm:ue},methods:{cancel:function(){this.$router.push("/")},saveSession:function(e){this.$store.commit("saveFuelSession",e),this.$router.push("/")}}}),pe=fe,de=Object(c["a"])(pe,Q,U,!1,null,null,null),ve=de.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SessionForm",{attrs:{fuelSession:e.session},on:{cancel:e.cancel,save:e.saveSession}})},me=[];function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(C["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=r["default"].extend({computed:ye({},Object(D["b"])(["getSessionById"]),{session:function(){return this.getSessionById(this.$route.params.id)}}),methods:{cancel:function(){this.$router.push("/")},saveSession:function(e){this.$store.commit("saveFuelSession",e),this.$router.push("/")}},components:{SessionForm:ue}}),ge=Se,he=Object(c["a"])(ge,be,me,!1,null,null,null),je=he.exports;r["default"].use(E["a"]);var we=[{path:"/",name:"home",component:G},{path:"/session/add",name:"addSession",component:ve},{path:"/session/edit/:id",name:"editSession",component:je}],Ve=new E["a"]({routes:we}),Pe=Ve;n("7db0"),n("c975"),n("a434"),n("ac1f");r["default"].use(D["a"]);var _e=new D["a"].Store({state:{fuelTypes:["E10 Euro95","E10 Euro98","E5 Euro95","E5 Euro98"],fuelSessions:Array()},mutations:{saveFuelSession:function(e,t){var n=e.fuelSessions.find((function(e){return e.id==t.id}));if(n){var r=e.fuelSessions.indexOf(n);e.fuelSessions[r]=t}else e.fuelSessions.push(t)},deleteFuelSession:function(e,t){var n=e.fuelSessions.find((function(e){return e.id==t.id}));if(n){var r=e.fuelSessions.indexOf(n);e.fuelSessions.splice(r,1)}},initialiseStore:function(e){if(localStorage.getItem("store")){var t=localStorage.getItem("store");if(!t)return;this.replaceState(Object.assign(e,JSON.parse(t,ke)))}}},getters:{getSessionById:function(e){return function(t){return e.fuelSessions.find((function(e){return e.id==t}))}}},actions:{},modules:{}}),ke=function(e,t){var n;return"string"===typeof t&&(n=/((?:2|1)\d{3}(?:-|\/)(?:(?:0[1-9])|(?:1[0-2]))(?:-|\/)(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1]))(?:T|\s)(?:(?:[0-1][0-9])|(?:2[0-3])):(?:[0-5][0-9]):(?:[0-5][0-9]))(\.)(\d){3}(Z)/.exec(t),n)?new Date(t):t},xe=n("ce5b"),Te=n.n(xe);n("bf40"),n("d1e78");r["default"].use(Te.a);var $e=new Te.a({icons:{iconfont:"md"}});_e.subscribe((function(e,t){localStorage.setItem("store",JSON.stringify(t))})),r["default"].config.productionTip=!1,new r["default"]({router:Pe,store:_e,vuetify:$e,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.167e6b6b.js.map