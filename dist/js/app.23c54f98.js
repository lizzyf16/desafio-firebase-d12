(function(){"use strict";var e={1377:function(e,n,t){t.d(n,{j2:function(){return s},eJ:function(){return o.eJ},hg:function(){return o.hg},x9:function(){return o.x9},CI:function(){return o.CI}});var o=t(114),r=t(6400);const a={apiKey:"AIzaSyAI3Iy8c2VWsHCv69JVtaPkFfjn-SWrseM",authDomain:"desafio-dia12-8738d.firebaseapp.com",projectId:"desafio-dia12-8738d",storageBucket:"desafio-dia12-8738d.appspot.com",messagingSenderId:"269354149845",appId:"1:269354149845:web:4670edf80587a021257f5c"},i=(0,r.Wp)(a);var u=i;let s=(0,o.xI)(u)},5723:function(e,n,t){var o=t(5130),r=t(6768);const a={class:"app"},i={class:"navbar navbar-expand-lg bg-dark border-bottom border-body","data-bs-theme":"dark"},u={class:"container-fluid"},s=(0,r.Lk)("a",{class:"navbar-brand",href:""},"Control de Ususarios",-1),c=(0,r.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r.Lk)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav ms-auto"},d={class:"nav-item mx-2"},p={key:0,class:"nav-item mx-2"},v={key:1,class:"nav-item mx-2"},m={key:2,class:"nav-item mx-2"},b={key:3,class:"nav-item mx-2"};function g(e,n,t,g,h,k){const y=(0,r.g2)("router-link"),L=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("nav",i,[(0,r.Lk)("div",u,[s,c,(0,r.Lk)("div",l,[(0,r.Lk)("ul",f,[(0,r.Lk)("li",d,[e.usuario?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(y,{key:0,to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}))]),e.usuario?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("li",p,[(0,r.bF)(y,{to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Sign Up")])),_:1})])),e.usuario?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("li",v,[(0,r.bF)(y,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})])),e.usuario?((0,r.uX)(),(0,r.CE)("li",m,[(0,r.bF)(y,{to:"/usuario"},{default:(0,r.k6)((()=>[(0,r.eW)("Usuario")])),_:1})])):(0,r.Q3)("",!0),e.usuario?((0,r.uX)(),(0,r.CE)("li",b,[(0,r.Lk)("a",{href:"",onClick:n[0]||(n[0]=(0,o.D$)(((...e)=>k.logout&&k.logout(...e)),["prevent"]))},"Logout")])):(0,r.Q3)("",!0)])])])]),(0,r.eW)(),(0,r.bF)(L)])}t(4114);var h=t(1377),k=t(782),y={name:"app",components:{},computed:{...(0,k.aH)(["usuario"])},methods:{async logout(){try{await(0,h.CI)(h.j2),alert("Sesión cerrada con éxito"),this.$router.push("/")}catch(e){console.log(e),alert("Error al cerrar sesión")}}}},L=t(1241);const C=(0,L.A)(y,[["render",g]]);var E=C,O=t(1387);const j={class:"home"},A=(0,r.Lk)("header",null,[(0,r.Lk)("h1",{class:"my-3"},"Bienvenido al Sistema")],-1),w=(0,r.Lk)("main",null,[(0,r.Lk)("p",null,"Esto es el Home."),(0,r.Lk)("p",null,"Para ver la vista Usuario; por favor Iniciar sesión ó Registráte como nuevo usuario")],-1),x=[A,w];function _(e,n,t,o,a,i){return(0,r.uX)(),(0,r.CE)("div",j,x)}var I={name:"HomeView",components:{}};const S=(0,L.A)(I,[["render",_]]);var U=S,T=(0,k.y$)({state:{usuario:null},getters:{},mutations:{AUTH_USUARIO(e,n){e.usuario=n},CLEAR_USUARIO(e){e.usuario=null}},actions:{},modules:{}});const W=[{path:"/",name:"home",component:U},{path:"/login",name:"login",component:()=>t.e(966).then(t.bind(t,2655))},{path:"/signup",name:"signup",component:()=>t.e(787).then(t.bind(t,938))},{path:"/usuario",name:"usuario",component:()=>t.e(9).then(t.bind(t,7009)),meta:{login:!0}}],P=(0,O.aE)({history:(0,O.LA)("/"),routes:W});P.beforeEach((async(e,n,t)=>{let o=e.meta.login,r=T.state.usuario;o?r?t():t("/login"):t()}));var F=P;let H;(0,h.hg)(h.j2,(e=>{e?T.commit("AUTH_USUARIO",e):T.commit("CLEAR_USUARIO"),H||(H=(0,o.Ef)(E).use(T).use(F).mount("#app"))}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({787:"signup",966:"login"}[e]||e)+"."+{9:"d711432d",787:"391bf2fb",966:"38884ff5"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="desafio-firebease-d12:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var l=s(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkdesafio_firebease_d12"]=self["webpackChunkdesafio_firebease_d12"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(5723)}));o=t.O(o)})();
//# sourceMappingURL=app.23c54f98.js.map