function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(){return p("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?d(e):h(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return p(e)}function x(t){return y(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function _(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let k;function A(t){k=t}function N(){if(!k)throw new Error("Function called outside component initialization");return k}const P=[],R=[],L=[],O=[],C=Promise.resolve();let T=!1;function V(t){L.push(t)}let U=!1;const j=new Set;function q(){if(!U){U=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];A(e),B(e.$$)}for(P.length=0;R.length;)R.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];j.has(e)||(j.add(e),e())}L.length=0}while(P.length);for(;O.length;)O.pop()();T=!1,U=!1,j.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const I=new Set;let D;function M(){D={r:0,c:[],p:D}}function z(){D.r||o(D.c),D=D.p}function H(t,e){t&&t.i&&(I.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),D.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),V(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(V)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(P.push(t),T||(T=!0,C.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,a,i,l=[-1]){const u=k;A(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=s?s(e,h,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&Q(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),W(e,n.target,n.anchor),q()}A(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={};function ot(e){let n,r,o,s,c,a,i,g,w,S,k,A,N,P,R,L,O,C,T,V,U,j,q,B,I,D,M,z,H,J,K;return{c(){n=h("nav"),r=h("a"),o=d("svg"),s=d("path"),c=m(),a=h("span"),i=p("Velo.club"),g=m(),w=h("div"),S=h("button"),k=d("svg"),A=d("title"),N=p("Menu"),P=d("path"),R=m(),L=h("div"),O=h("div"),C=h("button"),T=p("Blog"),V=m(),U=h("div"),j=h("a"),q=p("Nos velos"),B=m(),I=h("button"),D=p("Vos questions"),M=m(),z=h("button"),H=p("Access membre"),this.h()},l(t){n=b(t,"NAV",{class:!0,style:!0});var e=$(n);r=b(e,"A",{href:!0,class:!0});var l=$(r);o=b(l,"svg",{class:!0,width:!0,height:!0,viewBox:!0,xmlns:!0},1);var u=$(o);s=b(u,"path",{d:!0},1),$(s).forEach(f),u.forEach(f),c=x(l),a=b(l,"SPAN",{class:!0});var h=$(a);i=y(h,"Velo.club"),h.forEach(f),l.forEach(f),g=x(e),w=b(e,"DIV",{class:!0});var d=$(w);S=b(d,"BUTTON",{class:!0});var p=$(S);k=b(p,"svg",{class:!0,viewBox:!0,xmlns:!0},1);var m=$(k);A=b(m,"title",{},1);var v=$(A);N=y(v,"Menu"),v.forEach(f),P=b(m,"path",{d:!0},1),$(P).forEach(f),m.forEach(f),p.forEach(f),d.forEach(f),R=x(e),L=b(e,"DIV",{class:!0});var E=$(L);O=b(E,"DIV",{class:!0});var _=$(O);C=b(_,"BUTTON",{class:!0});var J=$(C);T=y(J,"Blog"),J.forEach(f),_.forEach(f),V=x(E),U=b(E,"DIV",{});var K=$(U);j=b(K,"A",{href:!0,class:!0});var F=$(j);q=y(F,"Nos velos"),F.forEach(f),B=x(K),I=b(K,"BUTTON",{class:!0});var Y=$(I);D=y(Y,"Vos questions"),Y.forEach(f),M=x(K),z=b(K,"BUTTON",{class:!0});var G=$(z);H=y(G,"Access membre"),G.forEach(f),K.forEach(f),E.forEach(f),e.forEach(f),this.h()},h(){v(s,"d","M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"),v(o,"class","w-8 h-8 mr-2 fill-current"),v(o,"width","54"),v(o,"height","54"),v(o,"viewBox","0 0 54 54"),v(o,"xmlns","http://www.w3.org/2000/svg"),v(a,"class","text-xl font-semibold tracking-tight"),v(r,"href","."),v(r,"class","flex items-center flex-shrink-0 mr-6 text-white"),v(P,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),v(k,"class","w-3 h-3 fill-current"),v(k,"viewBox","0 0 20 20"),v(k,"xmlns","http://www.w3.org/2000/svg"),v(S,"class","flex items-center px-3 py-2 border border-teal-400 rounded text-white-200 hover:text-teal hover:border-white"),v(w,"class","block lg:hidden"),v(C,"class","block mt-4 text-white lg:inline-block lg:mt-0 hover:text-teal"),v(O,"class","text-sm lg:flex-grow"),v(j,"href","offres"),v(j,"class","inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-teal hover:text-teal-500 hover:bg-white lg:mt-0"),v(I,"class","inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-teal hover:text-teal-500 hover:bg-white lg:mt-0"),v(z,"class","inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-teal hover:text-teal-500 hover:bg-white lg:mt-0"),v(L,"class","flex-grow block w-full lg:flex lg:items-center lg:w-auto"),_(L,"hidden",e[0]),v(n,"class","flex flex-wrap items-center justify-between p-6"),E(n,"background","linear-gradient(90deg, #667eea 0%, #764ba2 100%)")},m(t,f){var h,d,p,m;u(t,n,f),l(n,r),l(r,o),l(o,s),l(r,c),l(r,a),l(a,i),l(n,g),l(n,w),l(w,S),l(S,k),l(k,A),l(A,N),l(k,P),l(n,R),l(n,L),l(L,O),l(O,C),l(C,T),l(L,V),l(L,U),l(U,j),l(j,q),l(U,B),l(U,I),l(I,D),l(U,M),l(U,z),l(z,H),J||(h=S,d="click",p=e[1],h.addEventListener(d,p,m),K=()=>h.removeEventListener(d,p,m),J=!0)},p(t,[e]){1&e&&_(L,"hidden",t[0])},i:t,o:t,d(t){t&&f(n),J=!1,K()}}}function st(t,e,n){let r=!0;return[r,()=>n(0,r=!r)]}class ct extends tt{constructor(t){super(),Z(this,t,st,ot,c,{})}}function at(e){let n,r,o;return{c(){n=h("footer"),r=h("p"),o=p("Copyright © 2020 Velo Club SAS"),this.h()},l(t){n=b(t,"FOOTER",{class:!0});var e=$(n);r=b(e,"P",{class:!0});var s=$(r);o=y(s,"Copyright © 2020 Velo Club SAS"),s.forEach(f),e.forEach(f),this.h()},h(){v(r,"class","container max-w-4xl p-10 text-lg text-gray-600"),v(n,"class","bg-gray-200")},m(t,e){u(t,n,e),l(n,r),l(r,o)},p:t,i:t,o:t,d(t){t&&f(n)}}}class it extends tt{constructor(t){super(),Z(this,t,null,at,c,{})}}function lt(t){let e,n,r,o,s,c,d;n=new ct({props:{segment:t[0]}});const p=t[2].default,g=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(p,t,t[1],null);return c=new it({}),{c(){e=h("div"),Y(n.$$.fragment),r=m(),o=h("main"),g&&g.c(),s=m(),Y(c.$$.fragment)},l(t){e=b(t,"DIV",{});var a=$(e);G(n.$$.fragment,a),r=x(a),o=b(a,"MAIN",{});var i=$(o);g&&g.l(i),i.forEach(f),s=x(a),G(c.$$.fragment,a),a.forEach(f)},m(t,a){u(t,e,a),W(n,e,null),l(e,r),l(e,o),g&&g.m(o,null),l(e,s),W(c,e,null),d=!0},p(t,[e]){const r={};1&e&&(r.segment=t[0]),n.$set(r),g&&g.p&&2&e&&i(g,p,t,t[1],e,null,null)},i(t){d||(H(n.$$.fragment,t),H(g,t),H(c.$$.fragment,t),d=!0)},o(t){J(n.$$.fragment,t),J(g,t),J(c.$$.fragment,t),d=!1},d(t){t&&f(e),X(n),g&&g.d(t),X(c)}}}function ut(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ft extends tt{constructor(t){super(),Z(this,t,ut,lt,c,{segment:0})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=p(r)},l(t){e=b(t,"PRE",{});var o=$(e);n=y(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&f(e)}}}function dt(e){let n,r,o,s,c,a,i,d,E,_=e[1].message+"";document.title=n=e[0];let k=e[2]&&e[1].stack&&ht(e);return{c(){r=m(),o=h("h1"),s=p(e[0]),c=m(),a=h("p"),i=p(_),d=m(),k&&k.c(),E=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=x(t),o=b(t,"H1",{class:!0});var n=$(o);s=y(n,e[0]),n.forEach(f),c=x(t),a=b(t,"P",{class:!0});var l=$(a);i=y(l,_),l.forEach(f),d=x(t),k&&k.l(t),E=g(),this.h()},h(){v(o,"class","svelte-be3lyz"),v(a,"class","svelte-be3lyz")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,d,e),k&&k.m(t,e),u(t,E,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(s,t[0]),2&e&&_!==(_=t[1].message+"")&&w(i,_),t[2]&&t[1].stack?k?k.p(t,e):(k=ht(t),k.c(),k.m(E.parentNode,E)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(d),k&&k.d(t),t&&f(E)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class mt extends tt{constructor(t){super(),Z(this,t,pt,dt,c,{status:0,error:1})}}function gt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&G(n.$$.fragment,t),r=g()},m(t,e){n&&W(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?K(s,[F(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){M();const t=n;J(t.$$.fragment,1,0,()=>{X(t,1)}),z()}c?(n=new c(a()),Y(n.$$.fragment),H(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&J(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&X(n,t)}}}function vt(t){let e,n;return e=new mt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function $t(t){let e,n,r,o;const s=[vt,gt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(M(),J(c[i],1,1,()=>{c[i]=null}),z(),n=c[e],n||(n=c[e]=s[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){o||(H(n),o=!0)},o(t){J(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function bt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){Y(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?K(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function yt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,h;return u=l,N().$$.after_update.push(u),f=rt,h=r,N().$$.context.set(f,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class xt extends tt{constructor(t){super(),Z(this,t,yt,bt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[],Et=[{js:()=>import("./index.c8b4aa06.js"),css:[]},{js:()=>import("./offres.15a8ee74.js"),css:[]}],_t=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/offres\/?$/,parts:[{i:1}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function St(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function kt(t,e={noscroll:!1,replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Kt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,Pt,Rt,Lt=!1,Ot=[],Ct="{}";const Tt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(At&&At.session)};let Vt,Ut;Tt.session.subscribe(t=>St(void 0,void 0,void 0,(function*(){if(Vt=t,!Lt)return;Ut=!0;const e=Ht(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=yield Yt(e);n===Pt&&(r?yield kt(r.location,{replaceState:!0}):yield Ft(s,o,e.page))})));let jt,qt=null;let Bt,It=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Mt={};function zt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At.baseUrl))return null;let e=t.pathname.slice(At.baseUrl.length);if(""===e&&(e="/"),!wt.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],o=r.pattern.exec(e);if(o){const n=zt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Jt(){return{x:pageXOffset,y:pageYOffset}}function Kt(t,e,n,r){return St(this,void 0,void 0,(function*(){if(e)Bt=e;else{const t=Jt();Mt[Bt]=t,e=Bt=++It,Mt[Bt]=n?t:{x:0,y:0}}Bt=e,Nt&&Tt.preloading.set(!0);const o=qt&&qt.href===t.href?qt.promise:Yt(t);qt=null;const s=Pt={},c=yield o,{redirect:a}=c;if(s===Pt){if(a)yield kt(a.location,{replaceState:!0});else{const{props:e,branch:n}=c;yield Ft(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Mt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Mt[Bt]=t,t&&(a?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Ft(t,e,n){return St(this,void 0,void 0,(function*(){Tt.page.set(n),Tt.preloading.set(!1),Nt?Nt.$set(e):(e.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},e.level0={props:yield Rt},e.notify=Tt.page.notify,Nt=new xt({target:jt,props:e,hydrate:!0})),Ot=t,Ct=JSON.stringify(n.query),Lt=!0,Ut=!1}))}function Yt(t){return St(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Rt){const t=()=>{};Rt=At.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Vt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map((e,a)=>St(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Ct)return!0;const o=Ot[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const h=i++;if(!Ut&&!u&&Ot[a]&&Ot[a].part===e.i)return Ot[a];u=!1;const{default:d,preload:p}=yield function(t){const e="string"==typeof t.css?[]:t.css.map(Gt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Et[e.i]);let m;return m=Lt||!At.preloaded[a+1]?p?yield p.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Vt):{}:At.preloaded[a+1],s["level"+h]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}function Gt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Wt(t){const e=Ht(new URL(t,document.baseURI));if(e)return qt&&t===qt.href||function(t,e){qt={href:t,promise:e}}(t,Yt(e)),qt.promise}let Xt;function Qt(t){clearTimeout(Xt),Xt=setTimeout(()=>{Zt(t)},20)}function Zt(t){const e=ee(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function te(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ht(o);if(s){Kt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Dt.pushState({id:Bt},"",o.href)}}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ne(t){if(Mt[Bt]=Jt(),t.state){const e=Ht(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else It=It+1,function(t){Bt=t}(It),Dt.replaceState({id:Bt},"",location.href)}var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Dt.scrollRestoration="auto"}),addEventListener("load",()=>{Dt.scrollRestoration="manual"}),function(t){jt=t}(re.target),addEventListener("click",te),addEventListener("popstate",ne),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:It},"",e);const n=new URL(location.href);if(At.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=At;Rt||(Rt=s&&s[0]),Ft([],{error:a,status:c,session:o,level0:{props:Rt},level1:{props:{status:c,error:a},component:mt},segments:s},{host:e,path:n,query:zt(r),params:{}})}();const r=Ht(n);return r?Kt(r,It,!0,t):void 0});export{tt as S,m as a,b,x as c,f as d,h as e,$ as f,y as g,v as h,Z as i,E as j,u as k,l,t as n,S as q,c as s,p as t};
