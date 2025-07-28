function e(e,t){for(var n=0;n<t.e;n++){const r=t[n]
if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){
const n=Object.getOwnPropertyDescriptor(r,t)
n&&Object.defineProperty(e,t,n.t?n:{n:1,t(){return r[t]}})}}
return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{r:"Module"}))}
function t(e){return e&&e.i&&{}.s.o(e,"default")?e.a:e}function n(e){var t,n
return e.i?e:("function"==typeof(t=e.a)?(n=function e(){
return this instanceof e?Reflect.construct(t,arguments,this.l):t.c(this,arguments)
},n.u=t.u):n={},Object.defineProperty(n,"i",{r:1}),Object.h(e).d((t=>{
var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.t?r:{n:1,t(){return e[t]}})})),n)}function r(e,t,n){
this.f=e,this.p=t,this.m=Pp,this.v=n||Op}function i(){}function o(e,t,n){
this.f=e,this.p=t,this.m=Pp,this.v=n||Op}function s(e,t,n){
var r,i,o,s,a={},l=null,c=null
if(null!=t)for(r in void 0!==t.y&&(c=t.y),void 0!==t.g&&(l=""+t.g),t)Ip.o(t,r)&&!$p.s(r)&&(a[r]=t[r])
if(1==(i=arguments.e-2))a.w=n
else if(i>1){for(o=Array(i),s=0;i>s;s++)o[s]=arguments[s+2]
a.w=o}if(e&&e.b)for(r in i=e.b)void 0===a[r]&&(a[r]=i[r])
return{x:gp,k:e,g:l,y:c,f:a,N:Rp.S}}function a(e){
return"object"==typeof e&&null!==e&&e.x===gp}function l(e,t){
return"object"==typeof e&&null!==e&&null!=e.g?(e=>{var t={_:"=0",T:"=2"}
return"$"+e.E(/[=:]/g,(e=>t[e]))})(""+e.g):t.C(36)}function c(e,t,n,r,i){
var o,s,u,d=typeof e
if("undefined"!==d&&"boolean"!==d||(e=null),o=0,null===e)o=1
else switch(d){case"string":case"number":o=1
break
case"object":switch(e.x){case gp:case wp:o=1}}
if(o)return i=i(o=e),e=""===r?"."+l(o,0):r,
Dp(i)?(n="",null!=e&&(n=e.E(Fp,"$&/")+"/"),
c(i,t,n,"",(e=>e))):null!=i&&(a(i)&&(i=((e,t)=>({x:gp,k:e.k,g:t,y:e.y,f:e.f,
N:e.N}))(i,n+(!i.g||o&&o.g===i.g?"":(""+i.g).E(Fp,"$&/")+"/")+e)),t.M(i)),1
if(o=0,r=""===r?".":r+":",Dp(e))for(s=0;s<e.e;s++)o+=c(d=e[s],t,n,u=r+l(d,s),i)
else if(u=(e=>null===e||"object"!=typeof e?null:"function"==typeof(e=Mp&&e[Mp]||e["O"])?e:null)(e),
"function"==typeof u)for(e=u.o(e),
s=0;!(d=e.P()).j;)o+=c(d=d.r,t,n,u=r+l(d,s++),i)
else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"==(t=e+"")?"object with keys {"+Object.h(e).A(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")
return o}function u(e,t,n){if(null==e)return e
var r=[],i=0
return c(e,r,"","",(e=>t.o(n,e,i++))),r}function d(e){if(-1===e.D){var t=e.I
;(t=t()).R((t=>{0!==e.D&&-1!==e.D||(e.D=1,e.I=t)}),(t=>{
0!==e.D&&-1!==e.D||(e.D=2,e.I=t)})),-1===e.D&&(e.D=0,e.I=t)}
if(1===e.D)return e.I.a
throw e.I}function h(){
throw Error("act(...) is not supported in production builds of React.")}
function f(e,t,n){var r,i={},o=null,s=null
for(r in void 0!==n&&(o=""+n),void 0!==t.g&&(o=""+t.g),void 0!==t.y&&(s=t.y),t)qp.o(t,r)&&!Kp.s(r)&&(i[r]=t[r])
if(e&&e.b)for(r in t=e.b)void 0===i[r]&&(i[r]=t[r])
return{x:Hp,k:e,g:o,y:s,f:i,N:Yp.S}}function p(e){
for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;arguments.e>n;n++)t+="&args[]="+encodeURIComponent(arguments[n])
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){
for(im[e]=t,e=0;e<t.e;e++)rm.$(t[e])}function y(e,t,n,r,i,o,s){
this.F=2===t||3===t||4===t,
this.L=r,this.z=i,this.U=n,this.B=e,this.k=t,this.V=o,this.H=s}function g(e){
return e[1].W()}function w(e,t,n,r){var i=um.s(t)?um[t]:null
;(null!==i?0!==i.k:r||2>=t.e||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(((e,t,n,r)=>{
if(null==t||((e,t,n,r)=>{if(null!==n&&0===n.k)return 0
switch(typeof t){case"function":case"symbol":return 1
case"boolean":return r?0:null!==n?!n.F:"data-"!==(e=e.Y().q(0,5))&&"aria-"!==e
default:return 0}})(e,t,n,r))return 1
if(r)return 0
if(null!==n)switch(n.k){case 3:return!t
case 4:return 0==t
case 5:return isNaN(t)
case 6:return isNaN(t)||1>t}return 0
})(t,n,i,r)&&(n=null),r||null===i?(e=>sm.o(cm,e)?1:sm.o(lm,e)?0:am.K(e)?cm[e]=1:(lm[e]=1,
0))(t)&&(null===n?e.G(t):e.J(t,""+n)):i.U?e[i.B]=null===n?3===i.k?0:"":n:(t=i.L,
r=i.z,
null===n?e.G(t):(n=3===(i=i.k)||4===i&&1==n?"":""+n,r?e.X(r,t,n):e.J(t,n))))}
function b(e){
return null===e||"object"!=typeof e?null:"function"==typeof(e=Tm&&e[Tm]||e["O"])?e:null
}function x(e){if(void 0===Cm)try{throw Error()}catch(n){
var t=n.ee.Z().Q(/\n( *(at )?)/)
Cm=t&&t[1]||""}return"\n"+Cm+e}function k(e,t){var n,r,i,o,s,a,l
if(!e||Mm)return""
Mm=1,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0
try{if(t)if(Object.defineProperty((t=()=>{throw Error()}).u,"f",{te(){
throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{
Reflect.construct(t,[])}catch(c){r=c}Reflect.construct(e,[],t)}else{try{t.o()
}catch(c){r=c}e.o(t.u)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){
if(c&&r&&"string"==typeof c.ee){
for(i=c.ee.ne("\n"),o=r.ee.ne("\n"),s=i.e-1,a=o.e-1;s>=1&&a>=0&&i[s]!==o[a];)a--
for(;s>=1&&a>=0;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{
if(s--,0>--a||i[s]!==o[a])return l="\n"+i[s].E(" at new "," at "),
e.re&&l.ie("<anonymous>")&&(l=l.E("<anonymous>",e.re)),l}while(s>=1&&a>=0)
break}}}finally{Mm=0,Error.prepareStackTrace=n}return(e=e?e.re||e.oe:"")?x(e):""
}function N(e){switch(e.se){case 5:return x(e.k)
case 16:return x("Lazy")
case 13:return x("Suspense")
case 19:return x("SuspenseList")
case 0:case 2:case 15:return k(e.k,0)
case 11:return k(e.k.ae,0)
case 1:return k(e.k,1)
default:return""}}function S(e){if(null==e)return null
if("function"==typeof e)return e.re||e.oe||null
if("string"==typeof e)return e
switch(e){case mm:return"Fragment"
case pm:return"Portal"
case ym:return"Profiler"
case vm:return"StrictMode"
case xm:return"Suspense"
case km:return"SuspenseList"}if("object"==typeof e)switch(e.x){case wm:
return(e.re||"Context")+".Consumer"
case gm:return(e.le.re||"Context")+".Provider"
case bm:var t=e.ae
return(e=e.re)||(e=""!==(e=t.re||t.oe||"")?"ForwardRef("+e+")":"ForwardRef"),e
case Nm:return null!==(t=e.re||null)?t:S(e.k)||"Memo"
case Sm:t=e.ce,e=e.ue
try{return S(e(t))}catch(n){}}return null}function _(e){var t=e.k
switch(e.se){case 24:return"Cache"
case 9:return(t.re||"Context")+".Consumer"
case 10:return(t.le.re||"Context")+".Provider"
case 18:return"DehydratedFragment"
case 11:
return e=(e=t.ae).re||e.oe||"",t.re||(""!==e?"ForwardRef("+e+")":"ForwardRef")
case 7:return"Fragment"
case 5:return t
case 4:return"Portal"
case 3:return"Root"
case 6:return"Text"
case 16:return S(t)
case 8:return t===vm?"StrictMode":"Mode"
case 22:return"Offscreen"
case 12:return"Profiler"
case 21:return"Scope"
case 13:return"Suspense"
case 19:return"SuspenseList"
case 25:return"TracingMarker"
case 1:case 0:case 17:case 2:case 14:case 15:
if("function"==typeof t)return t.re||t.oe||null
if("string"==typeof t)return t}return null}function T(e){switch(typeof e){
case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function E(e){var t=e.k
return(e=e.de)&&"input"===e.Y()&&("checkbox"===t||"radio"===t)}function C(e){
e.he||(e.he=(function(e){
var t,n,r=E(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.l.u,r),o=""+e[r]
if(!e.s(r)&&void 0!==i&&"function"==typeof i.t&&"function"==typeof i.te)return t=i.t,
n=i.te,Object.defineProperty(e,r,{fe:1,t(){return t.o(this)},te(e){
o=""+e,n.o(this,e)}}),Object.defineProperty(e,r,{n:i.n}),{pe:()=>o,me(e){o=""+e
},ve(){e.he=null,delete e[r]}}})(e))}function M(e){var t,n,r
return e?(t=e.he)?(n=t.pe(),r="",e&&(r=E(e)?e.ye?"true":"false":e.r),(e=r)!==n?(t.me(e),
1):0):1:0}function O(e){
if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.ge||e.we}catch(t){return e.we}}function j(e,t){var n=t.ye
return Em({},t,{be:void 0,xe:void 0,r:void 0,ye:null!=n?n:e.Ne.ke})}
function P(e,t){var n=null==t.xe?"":t.xe,r=null!=t.ye?t.ye:t.be
n=T(null!=t.r?t.r:n),e.Ne={ke:r,Se:n,
_e:"checkbox"===t.k||"radio"===t.k?null!=t.ye:null!=t.r}}function A(e,t){
null!=(t=t.ye)&&w(e,"checked",t,0)}function D(e,t){A(e,t)
var n=T(t.r),r=t.k
if(null!=n)"number"===r?(0===n&&""===e.r||e.r!=n)&&(e.r=""+n):e.r!==""+n&&(e.r=""+n)
else if("submit"===r||"reset"===r)return void e.G("value")
t.s("value")?R(e,t.k,n):t.s("defaultValue")&&R(e,t.k,T(t.xe)),null==t.ye&&null!=t.be&&(e.be=!!t.be)
}function I(e,t,n){if(t.s("value")||t.s("defaultValue")){var r=t.k
if(!("submit"!==r&&"reset"!==r||void 0!==t.r&&null!==t.r))return
t=""+e.Ne.Se,n||t===e.r||(e.r=t),e.xe=t}""!==(n=e.oe)&&(e.oe=""),e.be=!!e.Ne.ke,
""!==n&&(e.oe=n)}function R(e,t,n){
"number"===t&&O(e.Te)===e||(null==n?e.xe=""+e.Ne.Se:e.xe!==""+n&&(e.xe=""+n))}
function $(e,t,n,r){if(e=e.Ee,t){t={}
for(var i=0;i<n.e;i++)t["$"+n[i]]=1
for(n=0;n<e.e;n++)i=t.s("$"+e[n].r),e[n].Ce!==i&&(e[n].Ce=i),i&&r&&(e[n].Me=1)
}else{for(n=""+T(n),t=null,i=0;i<e.e;i++){
if(e[i].r===n)return e[i].Ce=1,void(r&&(e[i].Me=1))
null!==t||e[i].Oe||(t=e[i])}null!==t&&(t.Ce=1)}}function F(e,t){
if(null!=t.je)throw Error(p(91))
return Em({},t,{r:void 0,xe:void 0,w:""+e.Ne.Se})}function L(e,t){var n=t.r
if(null==n){if(n=t.w,t=t.xe,null!=n){if(null!=t)throw Error(p(92))
if(Om(n)){if(n.e>1)throw Error(p(93))
n=n[0]}t=n}null==t&&(t=""),n=t}e.Ne={Se:T(n)}}function z(e,t){
var n=T(t.r),r=T(t.xe)
null!=n&&((n=""+n)!==e.r&&(e.r=n),null==t.xe&&e.xe!==n&&(e.xe=n)),null!=r&&(e.xe=""+r)
}function U(e){var t=e.Pe
t===e.Ne.Se&&""!==t&&null!==t&&(e.r=t)}function B(e){switch(e){case"svg":
return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}function V(e,t){
return null==e||"http://www.w3.org/1999/xhtml"===e?B(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e
}function H(e,t){if(t){var n=e.Ae
if(n&&n===e.De&&3===n.Ie)return void(n.Re=t)}e.Pe=t}function W(e,t,n){
return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Am.s(e)&&Am[e]?(""+t).Z():t+"px"
}function q(e,t){var n,r,i
for(n in e=e.$e,t)t.s(n)&&(r=0===n.Fe("--"),i=W(n,t[n],r),"float"===n&&(n="cssFloat"),
r?e.Le(n,i):e[n]=i)}function Y(e,t){if(t){
if(Im[e]&&(null!=t.w||null!=t.je))throw Error(p(137,e))
if(null!=t.je){if(null!=t.w)throw Error(p(60))
if("object"!=typeof t.je||!("ze"in t.je))throw Error(p(61))}
if(null!=t.$e&&"object"!=typeof t.$e)throw Error(p(62))}}function K(e,t){
if(-1===e.Fe("-"))return"string"==typeof t.Ue
switch(e){case"annotation-xml":case"color-profile":case"font-face":
case"font-face-src":case"font-face-uri":case"font-face-format":
case"font-face-name":case"missing-glyph":return 0
default:return 1}}function G(e){
return(e=e.Ve||e.He||window).Be&&(e=e.Be),3===e.Ie?e.We:e}function J(e){
if(e=Ot(e)){if("function"!=typeof $m)throw Error(p(280))
var t=e.qe
t&&(t=Pt(t),$m(e.qe,e.k,t))}}function X(e){Fm?Lm?Lm.M(e):Lm=[e]:Fm=e}
function Q(){if(Fm){var e=Fm,t=Lm
if(Lm=Fm=null,J(e),t)for(e=0;e<t.e;e++)J(t[e])}}function Z(e,t){return e(t)}
function ee(){}function te(e,t,n){if(zm)return e(t,n)
zm=1
try{return Z(e,t,n)}finally{zm=0,(null!==Fm||null!==Lm)&&(ee(),Q())}}
function ne(e,t){var n,r=e.qe
if(null===r)return null
if(null===(n=Pt(r)))return null
r=n[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":
case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":
case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":
case"onMouseUpCapture":case"onMouseEnter":
(n=!n.Oe)||(n=!("button"===(e=e.k)||"input"===e||"select"===e||"textarea"===e)),
e=!n
break e
default:e=0}if(e)return null
if(r&&"function"!=typeof r)throw Error(p(231,t,typeof r))
return r}function re(e,t,n,r,i,o,s,a,l){var c=[].q.o(arguments,3)
try{t.c(n,c)}catch(u){this.Ye(u)}}function ie(e,t,n,r,i,o,s,a,l){
Vm=0,Hm=null,re.c(Ym,arguments)}function oe(e,t,n,r,i,o,s,a,l){
if(ie.c(this,arguments),Vm){if(!Vm)throw Error(p(198))
var c=Hm
Vm=0,Hm=null,Wm||(Wm=1,qm=c)}}function se(e){var t=e,n=e
if(e.Ke)for(;t.Ge;)t=t.Ge
else{e=t
do{!!(4098&(t=e).Je)&&(n=t.Ge),e=t.Ge}while(e)}return 3===t.se?n:null}
function ae(e){if(13===e.se){var t=e.Xe
if(null===t&&null!==(e=e.Ke)&&(t=e.Xe),null!==t)return t.Qe}return null}
function le(e){if(se(e)!==e)throw Error(p(188))}function ce(e){
return null!==(e=(e=>{var t,n,r,i,o,s,a=e.Ke
if(!a){if(null===(a=se(e)))throw Error(p(188))
return a!==e?null:e}for(t=e,n=a;null!==(r=t.Ge);){if(null===(i=r.Ke)){
if(null!==(n=r.Ge)){t=n
continue}break}if(r.Ze===i.Ze){for(i=r.Ze;i;){if(i===t)return le(r),e
if(i===n)return le(r),a
i=i.et}throw Error(p(188))}if(t.Ge!==n.Ge)t=r,n=i
else{for(o=0,s=r.Ze;s;){if(s===t){o=1,t=r,n=i
break}if(s===n){o=1,n=r,t=i
break}s=s.et}if(!o){for(s=i.Ze;s;){if(s===t){o=1,t=i,n=r
break}if(s===n){o=1,n=i,t=r
break}s=s.et}if(!o)throw Error(p(189))}}if(t.Ke!==n)throw Error(p(190))}
if(3!==t.se)throw Error(p(188))
return t.qe.S===t?e:a})(e))?ue(e):null}function ue(e){
if(5===e.se||6===e.se)return e
for(e=e.Ze;null!==e;){var t=ue(e)
if(null!==t)return t
e=e.et}return null}function de(e){switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:
case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:
case 1048576:case 2097152:return 4194240&e
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:
return 130023424&e
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 1073741824
default:return e}}function he(e,t){var n,r,i,o,s,a=e.tt
if(0===a)return 0
if(n=0,r=e.nt,i=e.rt,0!=(o=268435455&a)?0!==(s=o&~r)?n=de(s):0!==(i&=o)&&(n=de(i)):0!==(o=a&~r)?n=de(o):0!==i&&(n=de(i)),
0===n)return 0
if(0!==t&&t!==n&&0===(t&r)&&((r=n&-n)>=(i=t&-t)||16===r&&4194240&i))return t
if(4&n&&(n|=16&a),0!==(t=e.it))for(e=e.ot,t&=n;t>0;)r=1<<(a=31-av(t)),n|=e[a],t&=~r
return n}function fe(e,t){switch(e){case 1:case 2:case 4:return t+250
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:
case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:
case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function pe(e){
return 0!=(e=-1073741825&e.tt)?e:1073741824&e?1073741824:0}function me(){
var e=uv
return!(4194240&(uv<<=1))&&(uv=64),e}function ve(e){
for(var t=[],n=0;31>n;n++)t.M(e)
return t}function ye(e,t,n){
e.tt|=t,536870912!==t&&(e.nt=0,e.rt=0),(e=e.st)[t=31-av(t)]=n}function ge(e,t){
var n,r,i=e.it|=t
for(e=e.ot;i;)(r=1<<(n=31-av(i)))&t|e[n]&t&&(e[n]|=t),i&=~r}function we(e){
return(e&=-e)>1?e>4?268435455&e?16:536870912:4:1}function be(e,t){switch(e){
case"focusin":case"focusout":bv=null
break
case"dragenter":case"dragleave":xv=null
break
case"mouseover":case"mouseout":kv=null
break
case"pointerover":case"pointerout":Nv.at(t.lt)
break
case"gotpointercapture":case"lostpointercapture":Sv.at(t.lt)}}
function xe(e,t,n,r,i,o){return null===e||e.ct!==o?(e={ut:t,dt:n,ht:r,ct:o,
ft:[i]
},null!==t&&null!==(t=Ot(t))&&pv(t),e):(e.ht|=r,t=e.ft,null!==i&&-1===t.Fe(i)&&t.M(i),
e)}function ke(e){var t,n=Mt(e.Ve)
if(null!==n&&null!==(t=se(n)))if(13===(n=t.se)){
if(null!==(n=ae(t)))return e.ut=n,void yv(e.pt,(()=>{mv(t)}))
}else if(3===n&&t.qe.S.Xe.mt)return void(e.ut=3===t.se?t.qe.vt:null)
e.ut=null}function Ne(e){var t,n,r
if(null!==e.ut)return 0
for(t=e.ft;t.e>0;){
if(null!==(n=je(e.dt,e.ht,t[0],e.ct)))return null!==(t=Ot(n))&&pv(t),e.ut=n,0
r=new(n=e.ct).l(n.k,n),Rm=r,n.Ve.yt(r),Rm=null,t.gt()}return 1}
function Se(e,t,n){Ne(e)&&n.at(t)}function _e(){
gv=0,null!==bv&&Ne(bv)&&(bv=null),
null!==xv&&Ne(xv)&&(xv=null),null!==kv&&Ne(kv)&&(kv=null),Nv.d(Se),Sv.d(Se)}
function Te(e,t){e.ut===t&&(e.ut=null,gv||(gv=1,nm.wt(nm.bt,_e)))}
function Ee(e){function t(t){return Te(t,e)}var n,r
if(wv.e>0)for(Te(wv[0],e),n=1;n<wv.e;n++)(r=wv[n]).ut===e&&(r.ut=null)
for(null!==bv&&Te(bv,e),null!==xv&&Te(xv,e),null!==kv&&Te(kv,e),Nv.d(t),Sv.d(t),
n=0;n<_v.e;n++)(r=_v[n]).ut===e&&(r.ut=null)
for(;_v.e>0&&null===(n=_v[0]).ut;)ke(n),null===n.ut&&_v.gt()}
function Ce(e,t,n,r){var i=hv,o=Ev.xt
Ev.xt=null
try{hv=1,Oe(e,t,n,r)}finally{hv=i,Ev.xt=o}}function Me(e,t,n,r){var i=hv,o=Ev.xt
Ev.xt=null
try{hv=4,Oe(e,t,n,r)}finally{hv=i,Ev.xt=o}}function Oe(e,t,n,r){var i,o
if(Cv)if(null===(i=je(e,t,n,r)))vt(e,t,r,Mv,n),be(e,r)
else if(((e,t,n,r,i)=>{switch(t){case"focusin":return bv=xe(bv,e,t,n,r,i),1
case"dragenter":return xv=xe(xv,e,t,n,r,i),1
case"mouseover":return kv=xe(kv,e,t,n,r,i),1
case"pointerover":var o=i.lt
return Nv.te(o,xe(Nv.t(o)||null,e,t,n,r,i)),1
case"gotpointercapture":return o=i.lt,Sv.te(o,xe(Sv.t(o)||null,e,t,n,r,i)),1}
return 0})(i,e,t,n,r))r.kt()
else if(be(e,r),4&t&&Tv.Fe(e)>-1){
for(;null!==i&&(null!==(o=Ot(i))&&fv(o),null===(o=je(e,t,n,r))&&vt(e,t,r,Mv,n),
o!==i);)i=o
null!==i&&r.kt()}else vt(e,t,r,null,n)}function je(e,t,n,r){
if(Mv=null,null!==(e=Mt(e=G(r))))if(null===(t=se(e)))e=null
else if(13===(n=t.se)){if(null!==(e=ae(t)))return e
e=null}else if(3===n){if(t.qe.S.Xe.mt)return 3===t.se?t.qe.vt:null
e=null}else t!==e&&(e=null)
return Mv=e,null}function Pe(e){switch(e){case"cancel":case"click":case"close":
case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":
case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":
case"input":case"invalid":case"keydown":case"keypress":case"keyup":
case"mousedown":case"mouseup":case"paste":case"pause":case"play":
case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":
case"reset":case"resize":case"seeked":case"submit":case"touchcancel":
case"touchend":case"touchstart":case"volumechange":case"change":
case"selectionchange":case"textInput":case"compositionstart":
case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":
case"beforeinput":case"blur":case"fullscreenchange":case"focus":
case"hashchange":case"popstate":case"select":case"selectstart":return 1
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":
case"mousemove":case"mouseout":case"mouseover":case"pointermove":
case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":
case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":
case"pointerleave":return 4
case"message":switch(Zm()){case ev:return 1
case tv:return 4
case nv:case rv:return 16
case iv:return 536870912
default:return 16}default:return 16}}function Ae(){var e,t,n,r,i,o,s
if(Pv)return Pv
n=(t=jv).e,o=(i="r"in Ov?Ov.r:Ov.Pe).e
for(e=0;n>e&&t[e]===i[e];e++);for(s=n-e,r=1;s>=r&&t[n-r]===i[o-r];r++);
return Pv=i.q(e,r>1?1-r:void 0)}function De(e){var t=e.Nt
return"St"in e?0===(e=e.St)&&13===t&&(e=13):e=t,10===e&&(e=13),32>e&&13!==e?0:e}
function Ie(){return 1}function Re(){return 0}function $e(e){
function t(t,n,r,i,o){
for(var s in this._t=t,this.Tt=r,this.k=n,this.ct=i,this.Ve=o,
this.Et=null,e)e.s(s)&&(t=e[s],this[s]=t?t(i):i[s])
return this.Ct=(null!=i.Mt?i.Mt:0==i.Ot)?Ie:Re,this.jt=Re,this}return Em(t.u,{
Pt(){this.Mt=1
var e=this.ct
e&&(e.Pt?e.Pt():"unknown"!=typeof e.Ot&&(e.Ot=0),this.Ct=Ie)},kt(){var e=this.ct
e&&(e.kt?e.kt():"unknown"!=typeof e.At&&(e.At=1),this.jt=Ie)},Dt(){},It:Ie}),t}
function Fe(e){var t=this.ct
return t.Rt?t.Rt(e):(e=ey[e])?!!t[e]:0}function Le(){return Fe}function ze(e,t){
switch(e){case"keyup":return-1!==dy.Fe(t.Nt)
case"keydown":return 229!==t.Nt
case"keypress":case"mousedown":case"focusout":return 1
default:return 0}}function Ue(e){
return"object"==typeof(e=e.$t)&&"Ft"in e?e.Ft:null}function Be(e){
var t=e&&e.de&&e.de.Y()
return"input"===t?!!wy[e.k]:"textarea"===t?1:0}function Ve(e,t,n,r){
X(r),(t=gt(t,"onChange")).e>0&&(n=new Dv("onChange","change",null,n,r),e.M({
Lt:n,zt:t}))}function He(e){dt(e,0)}function We(e){if(M(jt(e)))return e}
function qe(e,t){if("change"===e)return t}function Ye(){
by&&(by.Ut("onpropertychange",Ke),xy=by=null)}function Ke(e){
if("value"===e.B&&We(xy)){var t=[]
Ve(t,xy,e,G(e)),te(He,t)}}function Ge(e,t,n){
"focusin"===e?(Ye(),xy=n,(by=t).Bt("onpropertychange",Ke)):"focusout"===e&&Ye()}
function Je(e){
if("selectionchange"===e||"keyup"===e||"keydown"===e)return We(xy)}
function Xe(e,t){if("click"===e)return We(t)}function Qe(e,t){
if("input"===e||"change"===e)return We(t)}function Ze(e,t){var n,r,i
if(Ty(e,t))return 1
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return 0
if(n=Object.h(e),r=Object.h(t),n.e!==r.e)return 0
for(r=0;r<n.e;r++)if(i=n[r],!sm.o(t,i)||!Ty(e[i],t[i]))return 0
return 1}function et(e){for(;e&&e.Ae;)e=e.Ae
return e}function tt(e,t){var n,r=et(e)
for(e=0;r;){if(3===r.Ie){if(n=e+r.Pe.e,t>=e&&n>=t)return{Vt:r,Ht:t-e}
e=n}e:{for(;r;){if(r.Wt){r=r.Wt
break e}r=r.We}r=void 0}r=et(r)}}function nt(e,t){
return e&&t?e===t?1:e&&3===e.Ie?0:t&&3===t.Ie?nt(e,t.We):"qt"in e?e.qt(t):e.Yt?!!(16&e.Yt(t)):0:0
}function rt(){var e,t,n
for(e=window,t=O();t instanceof e.Kt;){try{n="string"==typeof t.Xt.Jt.Gt
}catch(r){n=0}if(!n)break
t=O((e=t.Xt).Qt)}return t}function it(e){var t=e&&e.de&&e.de.Y()
return t&&("input"===t&&("text"===e.k||"search"===e.k||"tel"===e.k||"url"===e.k||"password"===e.k)||"textarea"===t||"true"===e.Zt)
}function ot(e){var t,n,r,i=rt(),o=e.en,s=e.tn
if(i!==o&&o&&o.Te&&nt(o.Te.nn,o)){
null!==s&&it(o)&&(i=s.rn,void 0===(e=s.in)&&(e=i),
"on"in o?(o.on=i,o.sn=Math.an(e,o.r.e)):(e=(i=o.Te||document)&&i.cn||window).ln&&(e=e.ln(),
t=o.Pe.e,
n=Math.an(s.rn,t),s=void 0===s.in?n:Math.an(s.in,t),!e.un&&n>s&&(t=s,s=n,
n=t),t=tt(o,n),
r=tt(o,s),t&&r&&(1!==e.dn||e.hn!==t.Vt||e.fn!==t.Ht||e.pn!==r.Vt||e.mn!==r.Ht)&&((i=i.yn()).vn(t.Vt,t.Ht),
e.gn(),n>s?(e.wn(i),e.un(r.Vt,r.Ht)):(i.bn(r.Vt,r.Ht),e.wn(i))))),i=[]
for(e=o;e=e.We;)1===e.Ie&&i.M({xn:e,kn:e.Nn,Sn:e._n})
for("function"==typeof o.Tn&&o.Tn(),o=0;o<i.e;o++)(e=i[o]).xn.Nn=e.kn,e.xn._n=e.Sn
}}function st(e,t,n){var r=n.En===n?n.Qt:9===n.Ie?n:n.Te
jy||null==Cy||Cy!==O(r)||(r="on"in(r=Cy)&&it(r)?{rn:r.on,in:r.sn}:{
hn:(r=(r.Te&&r.Te.cn||window).ln()).hn,fn:r.fn,pn:r.pn,mn:r.mn
},Oy&&Ze(Oy,r)||(Oy=r,
(r=gt(My,"onSelect")).e>0&&(t=new Dv("onSelect","select",null,t,n),e.M({Lt:t,
zt:r}),t.Ve=Cy)))}function at(e,t){var n={}
return n[e.Y()]=t.Y(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}
function lt(e){if(Ay[e])return Ay[e]
if(!Py[e])return e
var t,n=Py[e]
for(t in n)if(n.s(t)&&t in Dy)return Ay[e]=n[t]
return e}function ct(e,t){Ly.te(e,t),m(t,[e])}function ut(e,t,n){
var r=e.k||"unknown-event"
e.Et=n,oe(r,t,void 0,e),e.Et=null}function dt(e,t){var n,r,i,o,s,a,l,c
for(t=!!(4&t),n=0;n<e.e;n++){i=(r=e[n]).Lt,r=r.zt
e:if(o=void 0,t)for(s=r.e-1;s>=0;s--){
if(l=(a=r[s]).Cn,c=a.Et,a=a.Mn,l!==o&&i.jt())break e
ut(i,a,c),o=l}else for(s=0;s<r.e;s++){
if(l=(a=r[s]).Cn,c=a.Et,a=a.Mn,l!==o&&i.jt())break e
ut(i,a,c),o=l}}if(Wm)throw e=qm,Wm=0,qm=null,e}function ht(e,t){var n,r=t[ig]
void 0===r&&(r=t[ig]=new Set),n=e+"__bubble",r.On(n)||(mt(t,e,2,0),r.$(n))}
function ft(e,t,n){var r=0
t&&(r|=4),mt(n,e,r,t)}function pt(e){if(!e[Wy]){e[Wy]=1,rm.d((t=>{
"selectionchange"!==t&&(Hy.On(t)||ft(t,0,e),ft(t,1,e))}))
var t=9===e.Ie?e:e.Te
null===t||t[Wy]||(t[Wy]=1,ft("selectionchange",0,t))}}function mt(e,t,n,r){
switch(Pe(t)){case 1:var i=Ce
break
case 4:i=Me
break
default:i=Oe}
n=i.jn(null,t,n,e),i=void 0,!Um||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=1),
r?void 0!==i?e.Pn(t,n,{An:1,Dn:i}):e.Pn(t,n,1):void 0!==i?e.Pn(t,n,{Dn:i
}):e.Pn(t,n,0)}function vt(e,t,n,r,i){var o,s,a,l=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
if(3===(o=r.se)||4===o){if((s=r.qe.vt)===i||8===s.Ie&&s.We===i)break
if(4===o)for(o=r.Ge;null!==o;){
if((3===(a=o.se)||4===a)&&((a=o.qe.vt)===i||8===a.Ie&&a.We===i))return
o=o.Ge}for(;null!==s;){if(null===(o=Mt(s)))return
if(5===(a=o.se)||6===a){r=l=o
continue e}s=s.We}}r=r.Ge}te((()=>{var r,i,o,s,a,c,u,d,h,f,p,m,v,y=l,g=G(n),w=[]
e:if(void 0!==(r=Ly.t(e))){switch(i=Dv,o=e,e){case"keypress":
if(0===De(n))break e
case"keydown":case"keyup":i=ny
break
case"focusin":o="focus",i=Wv
break
case"focusout":o="blur",i=Wv
break
case"beforeblur":case"afterblur":i=Wv
break
case"click":if(2===n.In)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":
case"mouseout":case"mouseover":case"contextmenu":i=Uv
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":
case"dragover":case"dragstart":case"drop":i=Vv
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":i=sy
break
case Iy:case Ry:case $y:i=Yv
break
case Fy:i=ly
break
case"scroll":i=Rv
break
case"wheel":i=uy
break
case"copy":case"cut":case"paste":i=Gv
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":
case"pointerdown":case"pointermove":case"pointerout":case"pointerover":
case"pointerup":i=iy}
for(a=!(s=!!(4&t))&&"scroll"===e,c=s?null!==r?r+"Capture":null:r,
s=[],u=y;null!==u&&(h=(d=u).qe,
5===d.se&&null!==h&&(d=h,null!==c&&null!=(h=ne(u,c))&&s.M(yt(u,h,d))),
!a);)u=u.Ge
s.e>0&&(r=new i(r,o,null,n,g),w.M({Lt:r,zt:s}))}if(!(7&t)){
if(i="mouseout"===e||"pointerout"===e,
(!(r="mouseover"===e||"pointerover"===e)||n===Rm||!(o=n.Rn||n.$n)||!Mt(o)&&!o[rg])&&(i||r)&&(r=g.En===g?g:(r=g.Te)?r.cn||r.Fn:window,
i?(i=y,
null!==(o=(o=n.Rn||n.Ln)?Mt(o):null)&&(o!==(a=se(o))||5!==o.se&&6!==o.se)&&(o=null)):(i=null,
o=y),i!==o)){
if(s=Uv,h="onMouseLeave",c="onMouseEnter",u="mouse","pointerout"!==e&&"pointerover"!==e||(s=iy,
h="onPointerLeave",
c="onPointerEnter",u="pointer"),a=null==i?r:jt(i),d=null==o?r:jt(o),
(r=new s(h,u+"leave",i,n,g)).Ve=a,
r.Rn=d,h=null,Mt(g)===y&&((s=new s(c,u+"enter",o,n,g)).Ve=d,
s.Rn=a,h=s),a=h,i&&o)e:{for(c=o,u=0,d=s=i;d;d=wt(d))u++
for(d=0,h=c;h;h=wt(h))d++
for(;u-d>0;)s=wt(s),u--
for(;d-u>0;)c=wt(c),d--
for(;u--;){if(s===c||null!==c&&s===c.Ke)break e
s=wt(s),c=wt(c)}s=null}else s=null
null!==i&&bt(w,r,i,s,0),null!==o&&null!==a&&bt(w,a,o,s,1)}
switch("select"===(i=(r=y?jt(y):window).de&&r.de.Y())||"input"===i&&"file"===r.k?f=qe:Be(r)?ky?f=Qe:(f=Je,
p=Ge):(i=r.de)&&"input"===i.Y()&&("checkbox"===r.k||"radio"===r.k)&&(f=Xe),
f&&(f=f(e,y))?Ve(w,f,n,g):(p&&p(e,r,y),
"focusout"===e&&(p=r.Ne)&&p._e&&"number"===r.k&&R(r,"number",r.r)),
p=y?jt(y):window,e){case"focusin":(Be(p)||"true"===p.Zt)&&(Cy=p,My=y,Oy=null)
break
case"focusout":Oy=My=Cy=null
break
case"mousedown":jy=1
break
case"contextmenu":case"mouseup":case"dragend":jy=0,st(w,n,g)
break
case"selectionchange":if(Ey)break
case"keydown":case"keyup":st(w,n,g)}if(hy)e:{switch(e){case"compositionstart":
v="onCompositionStart"
break e
case"compositionend":v="onCompositionEnd"
break e
case"compositionupdate":v="onCompositionUpdate"
break e}v=void 0
}else gy?ze(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.Nt&&(v="onCompositionStart")
v&&(my&&"ko"!==n.zn&&(gy||"onCompositionStart"!==v?"onCompositionEnd"===v&&gy&&(m=Ae()):(jv="r"in(Ov=g)?Ov.r:Ov.Pe,
gy=1)),(p=gt(y,v)).e>0&&(v=new Xv(v,e,null,n,g),w.M({Lt:v,zt:p
}),(m||null!==(m=Ue(n)))&&(v.Ft=m))),(m=py?((e,t)=>{switch(e){
case"compositionend":return Ue(t)
case"keypress":return 32!==t.Un?null:(yy=1,vy)
case"textInput":return(e=t.Ft)===vy&&yy?null:e
default:return null}})(e,n):((e,t)=>{
if(gy)return"compositionend"===e||!hy&&ze(e,t)?(e=Ae(),
Pv=jv=Ov=null,gy=0,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.Bn||t.Vn||t.Hn)||t.Bn&&t.Vn){if(t.Wn&&t.Wn.e>1)return t.Wn
if(t.Un)return String.fromCharCode(t.Un)}return null
case"compositionend":return my&&"ko"!==t.zn?null:t.Ft}
})(e,n))&&(y=gt(y,"onBeforeInput")).e>0&&(g=new Xv("onBeforeInput","beforeinput",null,n,g),
w.M({Lt:g,zt:y}),g.Ft=m)}dt(w,t)}))}function yt(e,t,n){return{Cn:e,Mn:t,Et:n}}
function gt(e,t){var n,r,i,o
for(n=t+"Capture",r=[];null!==e;)o=(i=e).qe,5===i.se&&null!==o&&(i=o,null!=(o=ne(e,n))&&r.qn(yt(e,o,i)),
null!=(o=ne(e,t))&&r.M(yt(e,o,i))),e=e.Ge
return r}function wt(e){if(null===e)return null
do{e=e.Ge}while(e&&5!==e.se)
return e||null}function bt(e,t,n,r,i){var o,s,a,l,c
for(o=t._t,s=[];null!==n&&n!==r&&(l=(a=n).Ke,c=a.qe,null===l||l!==r);)5===a.se&&null!==c&&(a=c,
i?null!=(l=ne(n,o))&&s.qn(yt(n,l,a)):i||null!=(l=ne(n,o))&&s.M(yt(n,l,a))),
n=n.Ge
0!==s.e&&e.M({Lt:t,zt:s})}function xt(e){
return("string"==typeof e?e:""+e).E(qy,"\n").E(Yy,"")}function kt(e,t,n){
if(t=xt(t),xt(e)!==t&&n)throw Error(p(425))}function Nt(){}function St(e,t){
return"textarea"===e||"noscript"===e||"string"==typeof t.w||"number"==typeof t.w||"object"==typeof t.je&&null!==t.je&&null!=t.je.ze
}function _t(e){setTimeout((()=>{throw e}))}function Tt(e,t){var n,r=t,i=0
do{if(n=r.Wt,e.Yn(r),n&&8===n.Ie)if("/$"===(r=n.Ft)){
if(0===i)return e.Yn(n),void Ee(t)
i--}else"$"!==r&&"$?"!==r&&"$!"!==r||i++
r=n}while(r)
Ee(t)}function Et(e){for(;null!=e;e=e.Wt){var t=e.Ie
if(1===t||3===t)break
if(8===t){if("$"===(t=e.Ft)||"$!"===t||"$?"===t)break
if("/$"===t)return null}}return e}function Ct(e){var t,n
for(e=e.Kn,t=0;e;){if(8===e.Ie)if("$"===(n=e.Ft)||"$!"===n||"$?"===n){
if(0===t)return e
t--}else"/$"===n&&t++
e=e.Kn}return null}function Mt(e){var t,n=e[tg]
if(n)return n
for(t=e.We;t;){if(n=t[rg]||t[tg]){
if(t=n.Ke,null!==n.Ze||null!==t&&null!==t.Ze)for(e=Ct(e);null!==e;){
if(t=e[tg])return t
e=Ct(e)}return n}t=(e=t).We}return null}function Ot(e){
return!(e=e[tg]||e[rg])||5!==e.se&&6!==e.se&&13!==e.se&&3!==e.se?null:e}
function jt(e){if(5===e.se||6===e.se)return e.qe
throw Error(p(33))}function Pt(e){return e[ng]||null}function At(e){return{S:e}}
function Dt(e){0>lg||(e.S=ag[lg],ag[lg]=null,lg--)}function It(e,t){
lg++,ag[lg]=e.S,e.S=t}function Rt(e,t){var n,r,i,o=e.k.Gn
if(!o)return cg
if((n=e.qe)&&n.Jn===t)return n.Xn
for(i in r={},o)r[i]=t[i]
return n&&((e=e.qe).Jn=t,e.Xn=r),r}function $t(e){return null!=e.Qn}
function Ft(){Dt(dg),Dt(ug)}function Lt(e,t,n){if(ug.S!==cg)throw Error(p(168))
It(ug,t),It(dg,n)}function zt(e,t,n){var r,i=e.qe
if(t=t.Qn,"function"!=typeof i.Zn)return n
for(r in i=i.Zn())if(!(r in t))throw Error(p(108,_(e)||"Unknown",r))
return Em({},n,i)}function Ut(e){
return e=(e=e.qe)&&e.er||cg,hg=ug.S,It(ug,e),It(dg,dg.S),1}function Bt(e,t,n){
var r=e.qe
if(!r)throw Error(p(169))
n?(e=zt(e,t,hg),r.er=e,Dt(dg),Dt(ug),It(ug,e)):Dt(dg),It(dg,n)}function Vt(e){
null===fg?fg=[e]:fg.M(e)}function Ht(){var e,t,n,r
if(!mg&&null!==fg){mg=1,e=0,t=hv
try{for(n=fg,hv=1;e<n.e;e++){r=n[e]
do{r=r(1)}while(null!==r)}fg=null,pg=0}catch(i){throw null!==fg&&(fg=fg.q(e+1)),
Km(ev,Ht),i}finally{hv=t,mg=0}}return null}function Wt(e,t){
vg[yg++]=wg,vg[yg++]=gg,gg=e,wg=t}function qt(e,t,n){var r,i,o,s
bg[xg++]=Ng,bg[xg++]=Sg,bg[xg++]=kg,kg=e,r=Ng,e=Sg,r&=~(1<<(i=32-av(r)-1)),n+=1,
(o=32-av(t)+i)>30?(o=(r&(1<<(s=i-i%5))-1).C(32),
r>>=s,i-=s,Ng=1<<32-av(t)+i|n<<i|r,Sg=o+e):(Ng=1<<o|n<<i|r,Sg=e)}function Yt(e){
null!==e.Ge&&(Wt(e,1),qt(e,1,0))}function Kt(e){
for(;e===gg;)gg=vg[--yg],vg[yg]=null,wg=vg[--yg],vg[yg]=null
for(;e===kg;)kg=bg[--xg],bg[xg]=null,Sg=bg[--xg],bg[xg]=null,Ng=bg[--xg],bg[xg]=null
}function Gt(e,t){var n=Xi(5,null,null,0)
n.tr="DELETED",n.qe=t,n.Ge=e,null===(t=e.nr)?(e.nr=[n],e.Je|=16):t.M(n)}
function Jt(e,t){switch(e.se){case 5:var n=e.k
return null!==(t=1!==t.Ie||n.Y()!==t.de.Y()?null:t)?(e.qe=t,_g=e,Tg=Et(t.Ae),1):0
case 6:return null!==(t=""===e.rr||3!==t.Ie?null:t)?(e.qe=t,_g=e,Tg=null,1):0
case 13:return null!==(t=8!==t.Ie?null:t)?(n=null!==kg?{ir:Ng,or:Sg}:null,e.Xe={
Qe:t,sr:n,ar:1073741824},(n=Xi(18,null,null,0)).qe=t,n.Ge=e,e.Ze=n,_g=e,Tg=null,
1):0
default:return 0}}function Xt(e){return!(!(1&e.lr)||128&e.Je)}function Qt(e){
var t,n,r
if(Eg)if(t=Tg){if(n=t,!Jt(e,t)){if(Xt(e))throw Error(p(418))
t=Et(n.Wt),r=_g,t&&Jt(e,t)?Gt(r,n):(e.Je=-4097&e.Je|2,Eg=0,_g=e)}}else{
if(Xt(e))throw Error(p(418))
e.Je=-4097&e.Je|2,Eg=0,_g=e}}function Zt(e){
for(e=e.Ge;null!==e&&5!==e.se&&3!==e.se&&13!==e.se;)e=e.Ge
_g=e}function en(e){var t,n
if(e!==_g)return 0
if(!Eg)return Zt(e),Eg=1,0
if((t=3!==e.se)&&!(t=5!==e.se)&&(t="head"!==(t=e.k)&&"body"!==t&&!St(e.k,e.cr)),
t&&(t=Tg)){if(Xt(e))throw tn(),Error(p(418))
for(;t;)Gt(e,t),t=Et(t.Wt)}if(Zt(e),13===e.se){
if(!(e=null!==(e=e.Xe)?e.Qe:null))throw Error(p(317))
e:{for(e=e.Wt,t=0;e;){if(8===e.Ie)if("/$"===(n=e.Ft)){if(0===t){Tg=Et(e.Wt)
break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++
e=e.Wt}Tg=null}}else Tg=_g?Et(e.qe.Wt):null
return 1}function tn(){for(var e=Tg;e;)e=Et(e.Wt)}function nn(){Tg=_g=null,Eg=0}
function rn(e){null===Cg?Cg=[e]:Cg.M(e)}function on(e,t,n){var r,i,o
if(null!==(e=n.y)&&"function"!=typeof e&&"object"!=typeof e){if(n.N){if(n=n.N){
if(1!==n.se)throw Error(p(309))
r=n.qe}if(!r)throw Error(p(147,e))
return i=r,o=""+e,null!==t&&null!==t.y&&"function"==typeof t.y&&t.y.ur===o?t.y:((t=e=>{
var t=i.m
null===e?delete t[o]:t[o]=e}).ur=o,t)}if("string"!=typeof e)throw Error(p(284))
if(!n.N)throw Error(p(290,e))}return e}function sn(e,t){
throw e={}.C.o(t),Error(p(31,"[object Object]"===e?"object with keys {"+Object.h(t).A(", ")+"}":e))
}function an(e){return(0,e.ue)(e.ce)}function ln(e){function t(t,n){if(e){
var r=t.nr
null===r?(t.nr=[n],t.Je|=16):r.M(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.et
return null}function r(e,t){
for(e=new Map;null!==t;)null!==t.g?e.te(t.g,t):e.te(t.dr,t),t=t.et
return e}function i(e,t){return(e=Zi(e,t)).dr=0,e.et=null,e}function o(t,n,r){
return t.dr=r,
e?null!==(r=t.Ke)?n>(r=r.dr)?(t.Je|=2,n):r:(t.Je|=2,n):(t.Je|=1048576,n)}
function s(t){return e&&null===t.Ke&&(t.Je|=2),t}function a(e,t,n,r){
return null===t||6!==t.se?((t=ro(n,e.lr,r)).Ge=e,t):((t=i(t,n)).Ge=e,t)}
function l(e,t,n,r){var o=n.k
return o===mm?u(e,t,n.f.w,r,n.g):null!==t&&(t.tr===o||"object"==typeof o&&null!==o&&o.x===Sm&&an(o)===t.k)?((r=i(t,n.f)).y=on(e,t,n),
r.Ge=e,r):((r=eo(n.k,n.g,n.f,null,e.lr,r)).y=on(e,t,n),r.Ge=e,r)}
function c(e,t,n,r){
return null===t||4!==t.se||t.qe.vt!==n.vt||t.qe.hr!==n.hr?((t=io(n,e.lr,r)).Ge=e,
t):((t=i(t,n.w||[])).Ge=e,t)}function u(e,t,n,r,o){
return null===t||7!==t.se?((t=to(n,e.lr,r,o)).Ge=e,t):((t=i(t,n)).Ge=e,t)}
function d(e,t,n){
if("string"==typeof t&&""!==t||"number"==typeof t)return(t=ro(""+t,e.lr,n)).Ge=e,
t
if("object"==typeof t&&null!==t){switch(t.x){case fm:
return(n=eo(t.k,t.g,t.f,null,e.lr,n)).y=on(e,null,t),n.Ge=e,n
case pm:return(t=io(t,e.lr,n)).Ge=e,t
case Sm:return d(e,(0,t.ue)(t.ce),n)}
if(Om(t)||b(t))return(t=to(t,e.lr,n,null)).Ge=e,t
sn(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.g:null
if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.x){case fm:
return n.g===i?l(e,t,n,r):null
case pm:return n.g===i?c(e,t,n,r):null
case Sm:return h(e,t,(i=n.ue)(n.ce),r)}
if(Om(n)||b(n))return null!==i?null:u(e,t,n,r,null)
sn(e,n)}return null}function f(e,t,n,r,i){
if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.t(n)||null,""+r,i)
if("object"==typeof r&&null!==r){switch(r.x){case fm:
return l(t,e=e.t(null===r.g?n:r.g)||null,r,i)
case pm:return c(t,e=e.t(null===r.g?n:r.g)||null,r,i)
case Sm:return f(e,t,n,(0,r.ue)(r.ce),i)}
if(Om(r)||b(r))return u(t,e=e.t(n)||null,r,i,null)
sn(t,r)}return null}return function a(l,c,u,m){
if("object"==typeof u&&null!==u&&u.k===mm&&null===u.g&&(u=u.f.w),
"object"==typeof u&&null!==u){switch(u.x){case fm:e:{
for(var v=u.g,y=c;null!==y;){if(y.g===v){if((v=u.k)===mm){if(7===y.se){
n(l,y.et),(c=i(y,u.f.w)).Ge=l,l=c
break e}}else if(y.tr===v||"object"==typeof v&&null!==v&&v.x===Sm&&an(v)===y.k){
n(l,y.et),(c=i(y,u.f)).y=on(l,y,u),c.Ge=l,l=c
break e}n(l,y)
break}t(l,y),y=y.et}
u.k===mm?((c=to(u.f.w,l.lr,m,u.g)).Ge=l,l=c):((m=eo(u.k,u.g,u.f,null,l.lr,m)).y=on(l,c,u),
m.Ge=l,l=m)}return s(l)
case pm:e:{for(y=u.g;null!==c;){if(c.g===y){
if(4===c.se&&c.qe.vt===u.vt&&c.qe.hr===u.hr){n(l,c.et),(c=i(c,u.w||[])).Ge=l,l=c
break e}n(l,c)
break}t(l,c),c=c.et}(c=io(u,l.lr,m)).Ge=l,l=c}return s(l)
case Sm:return a(l,c,(y=u.ue)(u.ce),m)}if(Om(u))return((i,s,a,l)=>{
var c,u,p,m,v,y
for(c=null,u=null,p=s,m=s=0,v=null;null!==p&&m<a.e;m++){
if(p.dr>m?(v=p,p=null):v=p.et,null===(y=h(i,p,a[m],l))){null===p&&(p=v)
break}e&&p&&null===y.Ke&&t(i,p),s=o(y,s,m),null===u?c=y:u.et=y,u=y,p=v}
if(m===a.e)return n(i,p),Eg&&Wt(i,m),c
if(null===p){
for(;m<a.e;m++)null!==(p=d(i,a[m],l))&&(s=o(p,s,m),null===u?c=p:u.et=p,u=p)
return Eg&&Wt(i,m),c}
for(p=r(i,p);m<a.e;m++)null!==(v=f(p,i,m,a[m],l))&&(e&&null!==v.Ke&&p.at(null===v.g?m:v.g),
s=o(v,s,m),null===u?c=v:u.et=v,u=v)
return e&&p.d((e=>t(i,e))),Eg&&Wt(i,m),c})(l,c,u,m)
if(b(u))return((i,s,a,l)=>{var c,u,m,v,y,g,w=b(a)
if("function"!=typeof w)throw Error(p(150))
if(null==(a=w.o(a)))throw Error(p(151))
for(c=w=null,u=s,m=s=0,v=null,y=a.P();null!==u&&!y.j;m++,y=a.P()){
if(u.dr>m?(v=u,u=null):v=u.et,null===(g=h(i,u,y.r,l))){null===u&&(u=v)
break}e&&u&&null===g.Ke&&t(i,u),s=o(g,s,m),null===c?w=g:c.et=g,c=g,u=v}
if(y.j)return n(i,u),Eg&&Wt(i,m),w
if(null===u){
for(;!y.j;m++,y=a.P())null!==(y=d(i,y.r,l))&&(s=o(y,s,m),null===c?w=y:c.et=y,
c=y)
return Eg&&Wt(i,m),w}
for(u=r(i,u);!y.j;m++,y=a.P())null!==(y=f(u,i,m,y.r,l))&&(e&&null!==y.Ke&&u.at(null===y.g?m:y.g),
s=o(y,s,m),null===c?w=y:c.et=y,c=y)
return e&&u.d((e=>t(i,e))),Eg&&Wt(i,m),w})(l,c,u,m)
sn(l,u)}
return"string"==typeof u&&""!==u||"number"==typeof u?(u=""+u,null!==c&&6===c.se?(n(l,c.et),
(c=i(c,u)).Ge=l,l=c):(n(l,c),(c=ro(u,l.lr,m)).Ge=l,l=c),s(l)):n(l,c)}}
function cn(){Ig=Dg=Ag=null}function un(e){var t=Pg.S
Dt(Pg),e.fr=t}function dn(e,t,n){for(;null!==e;){var r=e.Ke
if((e.pr&t)!==t?(e.pr|=t,null!==r&&(r.pr|=t)):null!==r&&(r.pr&t)!==t&&(r.pr|=t),
e===n)break
e=e.Ge}}function hn(e,t){
Ag=e,Ig=Dg=null,null!==(e=e.mr)&&null!==e.vr&&(0!==(e.yr&t)&&(aw=1),e.vr=null)}
function fn(e){var t=e.fr
if(Ig!==e)if(e={p:e,gr:t,P:null},null===Dg){if(null===Ag)throw Error(p(308))
Dg=e,Ag.mr={yr:0,vr:e}}else Dg=Dg.P=e
return t}function pn(e){null===Rg?Rg=[e]:Rg.M(e)}function mn(e,t,n,r){var i=t.wr
return null===i?(n.P=n,pn(t)):(n.P=i.P,i.P=n),t.wr=n,vn(e,r)}function vn(e,t){
e.yr|=t
var n=e.Ke
for(null!==n&&(n.yr|=t),n=e,e=e.Ge;null!==e;)e.pr|=t,null!==(n=e.Ke)&&(n.pr|=t),
n=e,e=e.Ge
return 3===n.se?n.qe:null}function yn(e){e.br={xr:e.Xe,kr:null,Nr:null,Sr:{
_r:null,wr:null,yr:0},Tr:null}}function gn(e,t){e=e.br,t.br===e&&(t.br={xr:e.xr,
kr:e.kr,Nr:e.Nr,Sr:e.Sr,Tr:e.Tr})}function wn(e,t){return{Er:e,Cr:t,se:0,
Mr:null,Or:null,P:null}}function bn(e,t,n){var r,i=e.br
return null===i?null:(i=i.Sr,2&Sw?(null===(r=i._r)?t.P=t:(t.P=r.P,r.P=t),i._r=t,
vn(e,n)):(null===(r=i.wr)?(t.P=t,pn(i)):(t.P=r.P,r.P=t),i.wr=t,vn(e,n)))}
function xn(e,t,n){if(null!==(t=t.br)&&(t=t.Sr,4194240&n)){var r=t.yr
n|=r&=e.tt,t.yr=n,ge(e,n)}}function kn(e,t){var n,r,i,o=e.br,s=e.Ke
if(null!==s&&o===(s=s.br)){if(n=null,r=null,null!==(o=o.kr)){do{i={Er:o.Er,
Cr:o.Cr,se:o.se,Mr:o.Mr,Or:o.Or,P:null},null===r?n=r=i:r=r.P=i,o=o.P
}while(null!==o)
null===r?n=r=t:r=r.P=t}else n=r=t
return o={xr:s.xr,kr:n,Nr:r,Sr:s.Sr,Tr:s.Tr},void(e.br=o)}
null===(e=o.Nr)?o.kr=t:e.P=t,o.Nr=t}function Nn(e,t,n,r){
var i,o,s,a,l,c,u,d,h,f,p,m=e.br
if($g=0,i=m.kr,o=m.Nr,null!==(s=m.Sr._r)&&(m.Sr._r=null,l=(a=s).P,a.P=null,null===o?i=l:o.P=l,
o=a,
null!==(c=e.Ke)&&(s=(c=c.br).Nr)!==o&&(null===s?c.kr=l:s.P=l,c.Nr=a)),null!==i){
for(u=m.xr,o=0,c=l=a=null,s=i;;){if(d=s.Cr,h=s.Er,(r&d)===d){null!==c&&(c=c.P={
Er:h,Cr:0,se:s.se,Mr:s.Mr,Or:s.Or,P:null})
e:switch(f=e,d=t,h=n,(p=s).se){case 1:if("function"==typeof(f=p.Mr)){
u=f.o(h,u,d)
break e}u=f
break e
case 3:f.Je=-65537&f.Je|128
case 0:if(null==(d="function"==typeof(f=p.Mr)?f.o(h,u,d):f))break e
u=Em({},u,d)
break e
case 2:$g=1}null!==s.Or&&0!==s.Cr&&(e.Je|=64,null===(d=m.Tr)?m.Tr=[s]:d.M(s))
}else h={Er:h,Cr:d,se:s.se,Mr:s.Mr,Or:s.Or,P:null},null===c?(l=c=h,a=u):c=c.P=h,
o|=d
if(null===(s=s.P)){if(null===(s=m.Sr._r))break
s=(d=s).P,d.P=null,m.Nr=d,m.Sr._r=null}}if(null===c&&(a=u),m.xr=a,m.kr=l,m.Nr=c,
null!==(t=m.Sr.wr)){m=t
do{o|=m.Cr,m=m.P}while(m!==t)}else null===i&&(m.Sr.yr=0)
Pw|=o,e.yr=o,e.Xe=u}}function Sn(e,t,n){
if(e=t.Tr,t.Tr=null,null!==e)for(t=0;t<e.e;t++){var r=e[t],i=r.Or
if(null!==i){if(r.Or=null,r=n,"function"!=typeof i)throw Error(p(191,i))
i.o(r)}}}function _n(e){if(e===Fg)throw Error(p(174))
return e}function Tn(e,t){switch(It(Ug,t),It(zg,e),It(Lg,Fg),e=t.Ie){case 9:
case 11:t=(t=t.nn)?t.jr:V(null,"")
break
default:t=V(t=(e=8===e?t.We:t).jr||null,e=e.Pr)}Dt(Lg),It(Lg,t)}function En(){
Dt(Lg),Dt(zg),Dt(Ug)}function Cn(e){var t,n
_n(Ug.S),(t=_n(Lg.S))!==(n=V(t,e.k))&&(It(zg,e),It(Lg,n))}function Mn(e){
zg.S===e&&(Dt(Lg),Dt(zg))}function On(e){var t,n
for(t=e;null!==t;){if(13===t.se){
if(null!==(n=t.Xe)&&(null===(n=n.Qe)||"$?"===n.Ft||"$!"===n.Ft))return t
}else if(19===t.se&&void 0!==t.cr.Ar){if(128&t.Je)return t}else if(null!==t.Ze){
t.Ze.Ge=t,t=t.Ze
continue}if(t===e)break
for(;null===t.et;){if(null===t.Ge||t.Ge===e)return null
t=t.Ge}t.et.Ge=t.Ge,t=t.et}return null}function jn(){
for(var e=0;e<Vg.e;e++)Vg[e].Dr=null
Vg.e=0}function Pn(){throw Error(p(321))}function An(e,t){if(null===t)return 0
for(var n=0;n<t.e&&n<e.e;n++)if(!Ty(e[n],t[n]))return 0
return 1}function Dn(e,t,n,r,i,o){
if(qg=o,Yg=t,t.Xe=null,t.br=null,t.yr=0,Hg.S=null===e||null===e.Xe?tw:nw,
e=n(r,i),Xg){o=0
do{if(Xg=0,Qg=0,o>=25)throw Error(p(301))
o+=1,Gg=Kg=null,t.br=null,Hg.S=rw,e=n(r,i)}while(Xg)}
if(Hg.S=ew,t=null!==Kg&&null!==Kg.P,
qg=0,Gg=Kg=Yg=null,Jg=0,t)throw Error(p(300))
return e}function In(){var e=0!==Qg
return Qg=0,e}function Rn(){var e={Xe:null,xr:null,Ir:null,Rr:null,P:null}
return null===Gg?Yg.Xe=Gg=e:Gg=Gg.P=e,Gg}function $n(){var e,t
if(e=null===Kg?null!==(e=Yg.Ke)?e.Xe:null:Kg.P,null!==(t=null===Gg?Yg.Xe:Gg.P))Gg=t,
Kg=e
else{if(null===e)throw Error(p(310))
e={Xe:(Kg=e).Xe,xr:Kg.xr,Ir:Kg.Ir,Rr:Kg.Rr,P:null
},null===Gg?Yg.Xe=Gg=e:Gg=Gg.P=e}return Gg}function Fn(e,t){
return"function"==typeof t?t(e):t}function Ln(e){
var t,n,r,i,o,s,a,l,c,u=$n(),d=u.Rr
if(null===d)throw Error(p(311))
if(d.$r=e,n=(t=Kg).Ir,null!==(r=d._r)&&(null!==n&&(i=n.P,n.P=r.P,r.P=i),t.Ir=n=r,
d._r=null),null!==n){r=n.P,t=t.xr,o=i=null,s=null,a=r
do{l=a.Cr,(qg&l)===l?(null!==s&&(s=s.P={Cr:0,Fr:a.Fr,Lr:a.Lr,zr:a.zr,P:null
}),t=a.Lr?a.zr:e(t,a.Fr)):(c={Cr:l,Fr:a.Fr,Lr:a.Lr,zr:a.zr,P:null
},null===s?(o=s=c,i=t):s=s.P=c,Yg.yr|=l,Pw|=l),a=a.P}while(null!==a&&a!==r)
null===s?i=t:s.P=o,Ty(t,u.Xe)||(aw=1),u.Xe=t,u.xr=i,u.Ir=s,d.Ur=t}
if(null!==(e=d.wr)){n=e
do{r=n.Cr,Yg.yr|=r,Pw|=r,n=n.P}while(n!==e)}else null===n&&(d.yr=0)
return[u.Xe,d.Br]}function zn(e){var t,n,r,i,o=$n(),s=o.Rr
if(null===s)throw Error(p(311))
if(s.$r=e,t=s.Br,n=s._r,r=o.Xe,null!==n){s._r=null,i=n=n.P
do{r=e(r,i.Fr),i=i.P}while(i!==n)
Ty(r,o.Xe)||(aw=1),o.Xe=r,null===o.Ir&&(o.xr=r),s.Ur=r}return[r,t]}
function Un(){}function Bn(e,t){var n=Yg,r=$n(),i=t(),o=!Ty(r.Xe,i)
if(o&&(r.Xe=i,aw=1),r=r.Rr,er(Wn.jn(null,n,r,e),[e]),r.Vr!==t||o||null!==Gg&&1&Gg.Xe.se){
if(n.Je|=2048,
Gn(9,Hn.jn(null,n,r,i,t),void 0,null),null===_w)throw Error(p(349))
30&qg||Vn(n,t,i)}return i}function Vn(e,t,n){e.Je|=16384,e={Vr:t,r:n
},null===(t=Yg.br)?(t={Hr:null,Wr:null
},Yg.br=t,t.Wr=[e]):null===(n=t.Wr)?t.Wr=[e]:n.M(e)}function Hn(e,t,n,r){
t.r=n,t.Vr=r,qn(t)&&Yn(e)}function Wn(e,t,n){return n((()=>{qn(t)&&Yn(e)}))}
function qn(e){var t,n=e.Vr
e=e.r
try{return t=n(),!Ty(e,t)}catch(r){return 1}}function Yn(e){var t=vn(e,1)
null!==t&&ki(t,e,1,-1)}function Kn(e){var t=Rn()
return"function"==typeof e&&(e=e()),t.Xe=t.xr=e,e={_r:null,wr:null,yr:0,Br:null,
$r:Fn,Ur:e},t.Rr=e,e=e.Br=hr.jn(null,Yg,e),[t.Xe,e]}function Gn(e,t,n,r){
return e={se:e,qr:t,Yr:n,Kr:r,P:null},null===(t=Yg.br)?(t={Hr:null,Wr:null
},Yg.br=t,t.Hr=e.P=e):null===(n=t.Hr)?t.Hr=e.P=e:(r=n.P,n.P=e,e.P=r,t.Hr=e),e}
function Jn(){return $n().Xe}function Xn(e,t,n,r){var i=Rn()
Yg.Je|=e,i.Xe=Gn(1|t,n,void 0,void 0===r?null:r)}function Qn(e,t,n,r){
var i,o,s=$n()
r=void 0===r?null:r,i=void 0,null!==Kg&&(i=(o=Kg.Xe).Yr,null!==r&&An(r,o.Kr))?s.Xe=Gn(t,n,i,r):(Yg.Je|=e,
s.Xe=Gn(1|t,n,i,r))}function Zn(e,t){return Xn(8390656,8,e,t)}function er(e,t){
return Qn(2048,8,e,t)}function tr(e,t){return Qn(4,2,e,t)}function nr(e,t){
return Qn(4,4,e,t)}function rr(e,t){return"function"==typeof t?(e=e(),t(e),()=>{
t(null)}):null!=t?(e=e(),t.S=e,()=>{t.S=null}):void 0}function ir(e,t,n){
return n=null!=n?n.Gr([e]):null,Qn(4,4,rr.jn(null,t,e),n)}function or(){}
function sr(e,t){var n,r=$n()
return t=void 0===t?null:t,null!==(n=r.Xe)&&null!==t&&An(t,n[1])?n[0]:(r.Xe=[e,t],
e)}function ar(e,t){var n,r=$n()
return t=void 0===t?null:t,null!==(n=r.Xe)&&null!==t&&An(t,n[1])?n[0]:(e=e(),r.Xe=[e,t],
e)}function lr(e,t,n){
return 21&qg?(Ty(n,t)||(n=me(),Yg.yr|=n,Pw|=n,e.xr=1),t):(e.xr&&(e.xr=0,
aw=1),e.Xe=n)}function cr(e,t){var n,r=hv
hv=0!==r&&4>r?r:4,e(1),n=Wg.xt,Wg.xt={}
try{e(0),t()}finally{hv=r,Wg.xt=n}}function ur(){return $n().Xe}
function dr(e,t,n){var r=xi(e)
n={Cr:r,Fr:n,Lr:0,zr:null,P:null
},fr(e)?pr(t,n):null!==(n=mn(e,t,n,r))&&(ki(n,e,r,bi()),mr(n,t,r))}
function hr(e,t,n){var r,i,o,s,a=xi(e),l={Cr:a,Fr:n,Lr:0,zr:null,P:null}
if(fr(e))pr(t,l)
else{if(r=e.Ke,0===e.yr&&(null===r||0===r.yr)&&null!==(r=t.$r))try{
if(o=r(i=t.Ur,n),
l.Lr=1,l.zr=o,Ty(o,i))return null===(s=t.wr)?(l.P=l,pn(t)):(l.P=s.P,
s.P=l),void(t.wr=l)}catch(c){}
null!==(n=mn(e,t,l,a))&&(ki(n,e,a,l=bi()),mr(n,t,a))}}function fr(e){var t=e.Ke
return e===Yg||null!==t&&t===Yg}function pr(e,t){Xg=Jg=1
var n=e._r
null===n?t.P=t:(t.P=n.P,n.P=t),e._r=t}function mr(e,t,n){if(4194240&n){
var r=t.yr
n|=r&=e.tt,t.yr=n,ge(e,n)}}function vr(e,t){if(e&&e.b){
for(var n in t=Em({},t),e=e.b)void 0===t[n]&&(t[n]=e[n])
return t}return t}function yr(e,t,n,r){
n=null==(n=n(r,t=e.Xe))?t:Em({},t,n),e.Xe=n,0===e.yr&&(e.br.xr=n)}
function gr(e,t,n,r,i,o,s){
return"function"==typeof(e=e.qe).Jr?e.Jr(r,o,s):t.u&&t.u.Xr?!Ze(n,r)||!Ze(i,o):1
}function wr(e,t,n){var r=0,i=cg,o=t.Qr
return"object"==typeof o&&null!==o?o=fn(o):(i=$t(t)?hg:ug.S,o=(r=null!=(r=t.Gn))?Rt(e,i):cg),
t=new t(n,o),
e.Xe=null!==t.Zr&&void 0!==t.Zr?t.Zr:null,t.v=iw,e.qe=t,t.ei=e,r&&((e=e.qe).Jn=i,
e.Xn=o),t}function br(e,t,n,r){
e=t.Zr,"function"==typeof t.ti&&t.ti(n,r),"function"==typeof t.ni&&t.ni(n,r),
t.Zr!==e&&iw.ri(t,t.Zr,null)}function xr(e,t,n,r){var i,o=e.qe
o.f=n,o.Zr=e.Xe,o.m={},yn(e),"object"==typeof(i=t.Qr)&&null!==i?o.p=fn(i):(i=$t(t)?hg:ug.S,
o.p=Rt(e,i)),
o.Zr=e.Xe,"function"==typeof(i=t.ii)&&(yr(e,t,i,n),o.Zr=e.Xe),"function"==typeof t.ii||"function"==typeof o.oi||"function"!=typeof o.si&&"function"!=typeof o.ai||(t=o.Zr,
"function"==typeof o.ai&&o.ai(),
"function"==typeof o.si&&o.si(),t!==o.Zr&&iw.ri(o,o.Zr,null),
Nn(e,n,o,r),o.Zr=e.Xe),"function"==typeof o.li&&(e.Je|=4194308)}
function kr(e,t){var n,r,i
try{n="",r=t
do{n+=N(r),r=r.Ge}while(r)
i=n}catch(o){i="\nError generating stack: "+o.ci+"\n"+o.ee}return{r:e,ui:t,ee:i,
di:null}}function Nr(e,t,n){return{r:e,ui:null,ee:null!=n?n:null,
di:null!=t?t:null}}function Sr(e,t,n){(n=wn(-1,n)).se=3,n.Mr={xn:null}
var r=t.r
return n.Or=()=>{zw||(zw=1,Uw=r)},n}function _r(e,t,n){var r,i,o
return(n=wn(-1,n)).se=3,"function"==typeof(r=e.k.hi)&&(i=t.r,n.Mr=()=>r(i),n.Or=()=>{}),
null!==(o=e.qe)&&"function"==typeof o.fi&&(n.Or=function(){
"function"!=typeof r&&(null===Bw?Bw=new Set([this]):Bw.$(this))
var e=t.ee
this.fi(t.r,{pi:null!==e?e:""})}),n}function Tr(e,t,n){var r,i=e.mi
null===i?(i=e.mi=new ow,r=new Set,i.te(t,r)):void 0===(r=i.t(t))&&(r=new Set,i.te(t,r)),
r.On(n)||(r.$(n),e=Wi.jn(null,e,t,n),t.R(e,e))}function Er(e){do{var t
if((t=13===e.se)&&(t=null!==(t=e.Xe)?null!==t.Qe?1:0:1),t)return e
e=e.Ge}while(null!==e)
return null}function Cr(e,t,n,r,i){
return 1&e.lr?(e.Je|=65536,e.yr=i,e):(e===t?e.Je|=65536:(e.Je|=128,n.Je|=131072,
n.Je&=-52805,
1===n.se&&(null===n.Ke?n.se=17:((t=wn(-1,1)).se=2,bn(n,t,1))),n.yr|=1),e)}
function Mr(e,t,n,r){t.Ze=null===e?jg(t,null,n,r):Og(t,e.Ze,n,r)}
function Or(e,t,n,r,i){n=n.ae
var o=t.y
return hn(t,i),r=Dn(e,t,n,r,o,i),n=In(),null===e||aw?(Eg&&n&&Yt(t),t.Je|=1,Mr(e,t,r,i),
t.Ze):(t.br=e.br,t.Je&=-2053,e.yr&=~i,Kr(e,t,i))}function jr(e,t,n,r,i){var o,s
return null===e?"function"!=typeof(o=n.k)||Qi(o)||void 0!==o.b||null!==n.vi||void 0!==n.b?((e=eo(n.k,null,r,t,t.lr,i)).y=t.y,
e.Ge=t,
t.Ze=e):(t.se=15,t.k=o,Pr(e,t,o,r,i)):(o=e.Ze,0===(e.yr&i)&&(s=o.cr,(n=null!==(n=n.vi)?n:Ze)(s,r)&&e.y===t.y)?Kr(e,t,i):(t.Je|=1,
(e=Zi(o,r)).y=t.y,e.Ge=t,t.Ze=e))}function Pr(e,t,n,r,i){if(null!==e){var o=e.cr
if(Ze(o,r)&&e.y===t.y){if(aw=0,t.rr=r=o,0===(e.yr&i))return t.yr=e.yr,Kr(e,t,i)
131072&e.Je&&(aw=1)}}return Ir(e,t,n,r,i)}function Ar(e,t,n){
var r=t.rr,i=r.w,o=null!==e?e.Xe:null
if("hidden"===r.lr)if(1&t.lr){
if(!(1073741824&n))return e=null!==o?o.yi|n:n,t.yr=t.pr=1073741824,t.Xe={yi:e,
gi:null,wi:null},t.br=null,It(Mw,Cw),Cw|=e,null
t.Xe={yi:0,gi:null,wi:null},r=null!==o?o.yi:n,It(Mw,Cw),Cw|=r}else t.Xe={yi:0,
gi:null,wi:null},It(Mw,Cw),Cw|=n
else null!==o?(r=o.yi|n,t.Xe=null):r=n,It(Mw,Cw),Cw|=r
return Mr(e,t,i,n),t.Ze}function Dr(e,t){var n=t.y
;(null===e&&null!==n||null!==e&&e.y!==n)&&(t.Je|=512,t.Je|=2097152)}
function Ir(e,t,n,r,i){var o=$t(n)?hg:ug.S
return o=Rt(t,o),hn(t,i),n=Dn(e,t,n,r,o,i),r=In(),null===e||aw?(Eg&&r&&Yt(t),t.Je|=1,
Mr(e,t,n,i),t.Ze):(t.br=e.br,t.Je&=-2053,e.yr&=~i,Kr(e,t,i))}
function Rr(e,t,n,r,i){var o,s,a,l,c,u,d,h,f,p
return $t(n)?(o=1,Ut(t)):o=0,hn(t,i),null===t.qe?(Yr(e,t),wr(t,n,r),xr(t,n,r,i),
r=1):null===e?(s=t.qe,
a=t.cr,s.f=a,l=s.p,c="object"==typeof(c=n.Qr)&&null!==c?fn(c):Rt(t,c=$t(n)?hg:ug.S),
(d="function"==typeof(u=n.ii)||"function"==typeof s.oi)||"function"!=typeof s.ni&&"function"!=typeof s.ti||(a!==r||l!==c)&&br(t,s,r,c),
$g=0,
h=t.Xe,s.Zr=h,Nn(t,r,s,i),l=t.Xe,a!==r||h!==l||dg.S||$g?("function"==typeof u&&(yr(t,n,u,r),
l=t.Xe),
(a=$g||gr(t,n,a,r,h,l,c))?(d||"function"!=typeof s.si&&"function"!=typeof s.ai||("function"==typeof s.ai&&s.ai(),
"function"==typeof s.si&&s.si()),
"function"==typeof s.li&&(t.Je|=4194308)):("function"==typeof s.li&&(t.Je|=4194308),
t.cr=r,
t.Xe=l),s.f=r,s.Zr=l,s.p=c,r=a):("function"==typeof s.li&&(t.Je|=4194308),
r=0)):(s=t.qe,
gn(e,t),a=t.cr,c=t.k===t.tr?a:vr(t.k,a),s.f=c,d=t.rr,h=s.p,l="object"==typeof(l=n.Qr)&&null!==l?fn(l):Rt(t,l=$t(n)?hg:ug.S),
(u="function"==typeof(f=n.ii)||"function"==typeof s.oi)||"function"!=typeof s.ni&&"function"!=typeof s.ti||(a!==d||h!==l)&&br(t,s,r,l),
$g=0,
h=t.Xe,s.Zr=h,Nn(t,r,s,i),p=t.Xe,a!==d||h!==p||dg.S||$g?("function"==typeof f&&(yr(t,n,f,r),
p=t.Xe),
(c=$g||gr(t,n,c,r,h,p,l)||0)?(u||"function"!=typeof s.bi&&"function"!=typeof s.xi||("function"==typeof s.xi&&s.xi(r,p,l),
"function"==typeof s.bi&&s.bi(r,p,l)),
"function"==typeof s.ki&&(t.Je|=4),"function"==typeof s.oi&&(t.Je|=1024)):("function"!=typeof s.ki||a===e.cr&&h===e.Xe||(t.Je|=4),
"function"!=typeof s.oi||a===e.cr&&h===e.Xe||(t.Je|=1024),
t.cr=r,t.Xe=p),s.f=r,s.Zr=p,
s.p=l,r=c):("function"!=typeof s.ki||a===e.cr&&h===e.Xe||(t.Je|=4),
"function"!=typeof s.oi||a===e.cr&&h===e.Xe||(t.Je|=1024),r=0)),$r(e,t,n,r,o,i)}
function $r(e,t,n,r,i,o){var s,a
return Dr(e,t),s=!!(128&t.Je),r||s?(r=t.qe,sw.S=t,a=s&&"function"!=typeof n.hi?null:r.ae(),
t.Je|=1,
null!==e&&s?(t.Ze=Og(t,e.Ze,null,o),t.Ze=Og(t,null,a,o)):Mr(e,t,a,o),t.Xe=r.Zr,
i&&Bt(t,n,1),t.Ze):(i&&Bt(t,n,0),Kr(e,t,o))}function Fr(e){var t=e.qe
t.Ni?Lt(0,t.Ni,t.Ni!==t.p):t.p&&Lt(0,t.p,0),Tn(e,t.vt)}function Lr(e,t,n,r,i){
return nn(),rn(i),t.Je|=256,Mr(e,t,n,r),t.Ze}function zr(e){return{yi:e,gi:null,
wi:null}}function Ur(e,t,n){var r,i,o=t.rr,s=Bg.S,a=0,l=!!(128&t.Je)
return(r=l)||(r=null!==e&&null===e.Xe?0:!!(2&s)),r?(a=1,t.Je&=-129):null!==e&&null===e.Xe||(s|=1),
It(Bg,1&s),
null===e?(Qt(t),null!==(e=t.Xe)&&null!==(e=e.Qe)?(1&t.lr?"$!"===e.Ft?t.yr=8:t.yr=1073741824:t.yr=1,
null):(l=o.w,e=o.Si,a?(o=t.lr,a=t.Ze,l={lr:"hidden",w:l
},1&o||null===a?a=no(l,o,0,null):(a.pr=0,a.rr=l),e=to(e,o,n,null),a.Ge=t,e.Ge=t,
a.et=e,
t.Ze=a,t.Ze.Xe=zr(n),t.Xe=lw,e):Br(t,l))):null!==(s=e.Xe)&&null!==(r=s.Qe)?((e,t,n,r,i,o,s)=>{
if(n)return 256&t.Je?(t.Je&=-257,
Vr(e,t,s,r=Nr(Error(p(422))))):null!==t.Xe?(t.Ze=e.Ze,
t.Je|=128,null):(o=r.Si,i=t.lr,r=no({lr:"visible",w:r.w
},i,0,null),(o=to(o,i,s,null)).Je|=2,
r.Ge=t,o.Ge=t,r.et=o,t.Ze=r,1&t.lr&&Og(t,e.Ze,null,s),t.Ze.Xe=zr(s),t.Xe=lw,o)
if(!(1&t.lr))return Vr(e,t,s,null)
if("$!"===i.Ft){if(r=i.Wt&&i.Wt._i)var a=r.Ti
return r=a,Vr(e,t,s,r=Nr(o=Error(p(419)),r,void 0))}if(a=0!==(s&e.pr),aw||a){
if(null!==(r=_w)){switch(s&-s){case 4:i=2
break
case 16:i=8
break
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:
case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:
case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:
case 67108864:i=32
break
case 536870912:i=268435456
break
default:i=0}
0!==(i=0!==(i&(r.nt|s))?0:i)&&i!==o.ar&&(o.ar=i,vn(e,i),ki(r,e,i,-1))}
return Ii(),Vr(e,t,s,r=Nr(Error(p(421))))}
return"$?"===i.Ft?(t.Je|=128,t.Ze=e.Ze,
t=Yi.jn(null,e),i.Ei=t,null):(e=o.sr,Tg=Et(i.Wt),
_g=t,Eg=1,Cg=null,null!==e&&(bg[xg++]=Ng,
bg[xg++]=Sg,bg[xg++]=kg,Ng=e.ir,Sg=e.or,kg=t),(t=Br(t,r.w)).Je|=4096,t)
})(e,t,l,o,r,s,n):a?(a=o.Si,l=t.lr,r=(s=e.Ze).et,i={lr:"hidden",w:o.w
},1&l||t.Ze===s?(o=Zi(s,i)).Ci=14680064&s.Ci:((o=t.Ze).pr=0,
o.rr=i,t.nr=null),null!==r?a=Zi(r,a):(a=to(a,l,n,null)).Je|=2,
a.Ge=t,o.Ge=t,o.et=a,t.Ze=o,o=a,a=t.Ze,l=null===(l=e.Ze.Xe)?zr(n):{yi:l.yi|n,
gi:null,wi:l.wi},a.Xe=l,a.pr=e.pr&~n,t.Xe=lw,o):(e=(a=e.Ze).et,o=Zi(a,{
lr:"visible",w:o.w
}),!(1&t.lr)&&(o.yr=n),o.Ge=t,o.et=null,null!==e&&(null===(n=t.nr)?(t.nr=[e],
t.Je|=16):n.M(e)),t.Ze=o,t.Xe=null,o)}function Br(e,t){return(t=no({
lr:"visible",w:t},e.lr,0,null)).Ge=e,e.Ze=t}function Vr(e,t,n,r){
return null!==r&&rn(r),Og(t,e.Ze,null,n),(e=Br(t,t.rr.w)).Je|=2,t.Xe=null,e}
function Hr(e,t,n){e.yr|=t
var r=e.Ke
null!==r&&(r.yr|=t),dn(e.Ge,t,n)}function Wr(e,t,n,r,i){var o=e.Xe
null===o?e.Xe={Mi:t,Oi:null,ji:0,Pi:r,Ai:n,Di:i
}:(o.Mi=t,o.Oi=null,o.ji=0,o.Pi=r,o.Ai=n,o.Di=i)}function qr(e,t,n){
var r=t.rr,i=r.Ar,o=r.Ai
if(Mr(e,t,r.w,n),2&(r=Bg.S))r=1&r|2,t.Je|=128
else{if(null!==e&&128&e.Je)e:for(e=t.Ze;null!==e;){
if(13===e.se)null!==e.Xe&&Hr(e,n,t)
else if(19===e.se)Hr(e,n,t)
else if(null!==e.Ze){e.Ze.Ge=e,e=e.Ze
continue}if(e===t)break e
for(;null===e.et;){if(null===e.Ge||e.Ge===t)break e
e=e.Ge}e.et.Ge=e.Ge,e=e.et}r&=1}if(It(Bg,r),1&t.lr)switch(i){case"forwards":
for(n=t.Ze,i=null;null!==n;)null!==(e=n.Ke)&&null===On(e)&&(i=n),n=n.et
null===(n=i)?(i=t.Ze,t.Ze=null):(i=n.et,n.et=null),Wr(t,0,i,n,o)
break
case"backwards":for(n=null,i=t.Ze,t.Ze=null;null!==i;){
if(null!==(e=i.Ke)&&null===On(e)){t.Ze=i
break}e=i.et,i.et=n,n=i,i=e}Wr(t,1,n,null,o)
break
case"together":Wr(t,0,null,null,void 0)
break
default:t.Xe=null}else t.Xe=null
return t.Ze}function Yr(e,t){!(1&t.lr)&&null!==e&&(e.Ke=null,t.Ke=null,t.Je|=2)}
function Kr(e,t,n){if(null!==e&&(t.mr=e.mr),Pw|=t.yr,0===(n&t.pr))return null
if(null!==e&&t.Ze!==e.Ze)throw Error(p(153))
if(null!==t.Ze){
for(n=Zi(e=t.Ze,e.rr),t.Ze=n,n.Ge=t;null!==e.et;)e=e.et,(n=n.et=Zi(e,e.rr)).Ge=t
n.et=null}return t.Ze}function Gr(e,t){var n,r
if(!Eg)switch(e.Di){case"hidden":for(t=e.Ai,n=null;null!==t;)null!==t.Ke&&(n=t),
t=t.et
null===n?e.Ai=null:n.et=null
break
case"collapsed":for(n=e.Ai,r=null;null!==n;)null!==n.Ke&&(r=n),n=n.et
null===r?t||null===e.Ai?e.Ai=null:e.Ai.et=null:r.et=null}}function Jr(e){
var t,n=null!==e.Ke&&e.Ke.Ze===e.Ze,r=0,i=0
if(n)for(t=e.Ze;null!==t;)r|=t.yr|t.pr,i|=14680064&t.Ci,i|=14680064&t.Je,t.Ge=e,
t=t.et
else for(t=e.Ze;null!==t;)r|=t.yr|t.pr,i|=t.Ci,i|=t.Je,t.Ge=e,t=t.et
return e.Ci|=i,e.pr=r,n}function Xr(e,t,n){var r,i,o,s,a,l=t.rr
switch(Kt(t),t.se){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:
case 9:case 14:return Jr(t),null
case 1:case 17:return $t(t.k)&&Ft(),Jr(t),null
case 3:
return l=t.qe,En(),Dt(dg),Dt(ug),jn(),l.Ni&&(l.p=l.Ni,l.Ni=null),null!==e&&null!==e.Ze||(en(t)?t.Je|=4:null===e||e.Xe.mt&&!(256&t.Je)||(t.Je|=1024,
null!==Cg&&(Ti(Cg),Cg=null))),uw(e,t),Jr(t),null
case 5:
if(Mn(t),r=_n(Ug.S),n=t.k,null!==e&&null!=t.qe)dw(e,t,n,l,r),e.y!==t.y&&(t.Je|=512,
t.Je|=2097152)
else{if(!l){if(null===t.qe)throw Error(p(166))
return Jr(t),null}if(e=_n(Lg.S),en(t)){
switch(l=t.qe,n=t.k,i=t.cr,l[tg]=t,l[ng]=i,e=!!(1&t.lr),n){case"dialog":
ht("cancel",l),ht("close",l)
break
case"iframe":case"object":case"embed":ht("load",l)
break
case"video":case"audio":for(r=0;r<Vy.e;r++)ht(Vy[r],l)
break
case"source":ht("error",l)
break
case"img":case"image":case"link":ht("error",l),ht("load",l)
break
case"details":ht("toggle",l)
break
case"input":P(l,i),ht("invalid",l)
break
case"select":l.Ne={Ii:!!i.Ri},ht("invalid",l)
break
case"textarea":L(l,i),ht("invalid",l)}
for(o in Y(n,i),r=null,i)i.s(o)&&(s=i[o],"children"===o?"string"==typeof s?l.Pe!==s&&(1!=i.$i&&kt(l.Pe,s,e),
r=["children",s]):"number"==typeof s&&l.Pe!==""+s&&(1!=i.$i&&kt(l.Pe,s,e),
r=["children",""+s]):im.s(o)&&null!=s&&"onScroll"===o&&ht("scroll",l))
switch(n){case"input":C(l),I(l,i,1)
break
case"textarea":C(l),U(l)
break
case"select":case"option":break
default:"function"==typeof i.Fi&&(l.Li=Nt)}l=r,t.br=l,null!==l&&(t.Je|=4)}else{
o=9===r.Ie?r:r.Te,
"http://www.w3.org/1999/xhtml"===e&&(e=B(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.Ui("div")).zi="<script><\/script>",
e=e.Yn(e.Ae)):"string"==typeof l.Ue?e=o.Ui(n,{Ue:l.Ue
}):(e=o.Ui(n),"select"===n&&(o=e,
l.Ri?o.Ri=1:l.Bi&&(o.Bi=l.Bi))):e=o.Vi(e,n),e[tg]=t,e[ng]=l,cw(e,t,0,0),t.qe=e
e:{switch(o=K(n,l),n){case"dialog":ht("cancel",e),ht("close",e),r=l
break
case"iframe":case"object":case"embed":ht("load",e),r=l
break
case"video":case"audio":for(r=0;r<Vy.e;r++)ht(Vy[r],e)
r=l
break
case"source":ht("error",e),r=l
break
case"img":case"image":case"link":ht("error",e),ht("load",e),r=l
break
case"details":ht("toggle",e),r=l
break
case"input":P(e,l),r=j(e,l),ht("invalid",e)
break
case"option":default:r=l
break
case"select":e.Ne={Ii:!!l.Ri},r=Em({},l,{r:void 0}),ht("invalid",e)
break
case"textarea":L(e,l),r=F(e,l),ht("invalid",e)}
for(i in Y(n,r),s=r)s.s(i)&&(a=s[i],
"style"===i?q(e,a):"dangerouslySetInnerHTML"===i?null!=(a=a?a.ze:void 0)&&Pm(e,a):"children"===i?"string"==typeof a?("textarea"!==n||""!==a)&&H(e,a):"number"==typeof a&&H(e,""+a):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(im.s(i)?null!=a&&"onScroll"===i&&ht("scroll",e):null!=a&&w(e,i,a,o)))
switch(n){case"input":C(e),I(e,l,0)
break
case"textarea":C(e),U(e)
break
case"option":null!=l.r&&e.J("value",""+T(l.r))
break
case"select":
e.Ri=!!l.Ri,null!=(i=l.r)?$(e,!!l.Ri,i,0):null!=l.xe&&$(e,!!l.Ri,l.xe,1)
break
default:"function"==typeof r.Fi&&(e.Li=Nt)}switch(n){case"button":case"input":
case"select":case"textarea":l=!!l.Hi
break e
case"img":l=1
break e
default:l=0}}l&&(t.Je|=4)}null!==t.y&&(t.Je|=512,t.Je|=2097152)}
return Jr(t),null
case 6:if(e&&null!=t.qe)hw(e,t,e.cr,l)
else{if("string"!=typeof l&&null===t.qe)throw Error(p(166))
if(n=_n(Ug.S),_n(Lg.S),en(t)){
if(l=t.qe,n=t.cr,l[tg]=t,(i=l.Re!==n)&&null!==(e=_g))switch(e.se){case 3:
kt(l.Re,n,!!(1&e.lr))
break
case 5:1!=e.cr.$i&&kt(l.Re,n,!!(1&e.lr))}i&&(t.Je|=4)
}else(l=(9===n.Ie?n:n.Te).Wi(l))[tg]=t,t.qe=l}return Jr(t),null
case 13:if(Dt(Bg),l=t.Xe,null===e||null!==e.Xe&&null!==e.Xe.Qe){
if(Eg&&null!==Tg&&1&t.lr&&!(128&t.Je))tn(),nn(),t.Je|=98560,i=0
else if(i=en(t),null!==l&&null!==l.Qe){if(null===e){if(!i)throw Error(p(318))
if(!(i=null!==(i=t.Xe)?i.Qe:null))throw Error(p(317))
i[tg]=t}else nn(),!(128&t.Je)&&(t.Xe=null),t.Je|=4
Jr(t),i=0}else null!==Cg&&(Ti(Cg),Cg=null),i=1
if(!i)return 65536&t.Je?t:null}
return 128&t.Je?(t.yr=n,t):((l=null!==l)!=(null!==e&&null!==e.Xe)&&l&&(t.Ze.Je|=8192,
1&t.lr&&(null===e||1&Bg.S?0===Ow&&(Ow=3):Ii())),
null!==t.br&&(t.Je|=4),Jr(t),null)
case 4:return En(),uw(e,t),null===e&&pt(t.qe.vt),Jr(t),null
case 10:return un(t.k.le),Jr(t),null
case 19:if(Dt(Bg),null===(i=t.Xe))return Jr(t),null
if(l=!!(128&t.Je),null===(o=i.Oi))if(l)Gr(i,0)
else{if(0!==Ow||null!==e&&128&e.Je)for(e=t.Ze;null!==e;){if(null!==(o=On(e))){
for(t.Je|=128,
Gr(i,0),null!==(l=o.br)&&(t.br=l,t.Je|=4),t.Ci=0,l=n,n=t.Ze;null!==n;)e=l,
(i=n).Je&=14680066,
null===(o=i.Ke)?(i.pr=0,i.yr=e,i.Ze=null,i.Ci=0,i.cr=null,i.Xe=null,
i.br=null,i.mr=null,
i.qe=null):(i.pr=o.pr,i.yr=o.yr,i.Ze=o.Ze,i.Ci=0,i.nr=null,i.cr=o.cr,
i.Xe=o.Xe,i.br=o.br,i.k=o.k,e=o.mr,i.mr=null===e?null:{yr:e.yr,vr:e.vr}),n=n.et
return It(Bg,1&Bg.S|2),t.Ze}e=e.et}null!==i.Ai&&Qm()>Fw&&(t.Je|=128,l=1,Gr(i,0),
t.yr=4194304)}else{if(!l)if(null!==(e=On(o))){
if(t.Je|=128,l=1,null!==(n=e.br)&&(t.br=n,
t.Je|=4),Gr(i,1),null===i.Ai&&"hidden"===i.Di&&!o.Ke&&!Eg)return Jr(t),null
}else 2*Qm()-i.ji>Fw&&1073741824!==n&&(t.Je|=128,l=1,Gr(i,0),t.yr=4194304)
i.Mi?(o.et=t.Ze,t.Ze=o):(null!==(n=i.Pi)?n.et=o:t.Ze=o,i.Pi=o)}
return null!==i.Ai?(t=i.Ai,
i.Oi=t,i.Ai=t.et,i.ji=Qm(),t.et=null,n=Bg.S,It(Bg,l?1&n|2:1&n),t):(Jr(t),null)
case 22:case 23:
return ji(),l=null!==t.Xe,null!==e&&null!==e.Xe!==l&&(t.Je|=8192),
l&&1&t.lr?!!(1073741824&Cw)&&(Jr(t),6&t.Ci&&(t.Je|=8192)):Jr(t),null
case 24:case 25:return null}throw Error(p(156,t.se))}function Qr(e,t){
switch(Kt(t),t.se){case 1:
return $t(t.k)&&Ft(),65536&(e=t.Je)?(t.Je=-65537&e|128,t):null
case 3:
return En(),Dt(dg),Dt(ug),jn(),65536&(e=t.Je)&&!(128&e)?(t.Je=-65537&e|128,
t):null
case 5:return Mn(t),null
case 13:if(Dt(Bg),null!==(e=t.Xe)&&null!==e.Qe){
if(null===t.Ke)throw Error(p(340))
nn()}return 65536&(e=t.Je)?(t.Je=-65537&e|128,t):null
case 19:return Dt(Bg),null
case 4:return En(),null
case 10:return un(t.k.le),null
case 22:case 23:return ji(),null
default:return null}}function Zr(e,t){var n=e.y
if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Hi(e,t,r)}else n.S=null
}function ei(e,t,n){try{n()}catch(r){Hi(e,t,r)}}function ti(e,t,n){
var r,i,o=t.br
if(null!==(o=null!==o?o.Hr:null)){r=o=o.P
do{(r.se&e)===e&&(i=r.Yr,r.Yr=void 0,void 0!==i&&ei(t,n,i)),r=r.P}while(r!==o)}}
function ni(e,t){var n,r
if(null!==(t=null!==(t=t.br)?t.Hr:null)){n=t=t.P
do{(n.se&e)===e&&(r=n.qr,n.Yr=r()),n=n.P}while(n!==t)}}function ri(e){
var t,n=e.y
null!==n&&(t=e.qe,e.se,e=t,"function"==typeof n?n(e):n.S=e)}function ii(e){
var t=e.Ke
null!==t&&(e.Ke=null,ii(t)),e.Ze=null,e.nr=null,e.et=null,5===e.se&&null!==(t=e.qe)&&(delete t[tg],
delete t[ng],
delete t[ig],delete t[og],delete t[sg]),e.qe=null,e.Ge=null,e.mr=null,e.cr=null,
e.Xe=null,e.rr=null,e.qe=null,e.br=null}function oi(e){
return 5===e.se||3===e.se||4===e.se}function si(e){e:for(;;){for(;null===e.et;){
if(null===e.Ge||oi(e.Ge))return null
e=e.Ge}for(e.et.Ge=e.Ge,e=e.et;5!==e.se&&6!==e.se&&18!==e.se;){
if(2&e.Je)continue e
if(null===e.Ze||4===e.se)continue e
e.Ze.Ge=e,e=e.Ze}if(!(2&e.Je))return e.qe}}function ai(e,t,n){var r=e.se
if(5===r||6===r)e=e.qe,t?8===n.Ie?n.We.qi(e,t):n.qi(e,t):(8===n.Ie?(t=n.We).qi(e,n):(t=n).Yi(e),
null!=(n=n.Ki)||null!==t.Li||(t.Li=Nt))
else if(4!==r&&null!==(e=e.Ze))for(ai(e,t,n),e=e.et;null!==e;)ai(e,t,n),e=e.et}
function li(e,t,n){var r=e.se
if(5===r||6===r)e=e.qe,t?n.qi(e,t):n.Yi(e)
else if(4!==r&&null!==(e=e.Ze))for(li(e,t,n),e=e.et;null!==e;)li(e,t,n),e=e.et}
function ci(e,t,n){for(n=n.Ze;null!==n;)ui(e,t,n),n=n.et}function ui(e,t,n){
var r,i,o,s
if(sv&&"function"==typeof sv.Gi)try{sv.Gi(ov,n)}catch(a){}switch(n.se){case 5:
pw||Zr(n,t)
case 6:
r=gw,i=ww,gw=null,ci(e,t,n),ww=i,null!==(gw=r)&&(ww?(e=gw,n=n.qe,8===e.Ie?e.We.Yn(n):e.Yn(n)):gw.Yn(n.qe))
break
case 18:
null!==gw&&(ww?(e=gw,n=n.qe,8===e.Ie?Tt(e.We,n):1===e.Ie&&Tt(e,n),Ee(e)):Tt(gw,n.qe))
break
case 4:r=gw,i=ww,gw=n.qe.vt,ww=1,ci(e,t,n),gw=r,ww=i
break
case 0:case 11:case 14:case 15:if(!pw&&null!==(r=n.br)&&null!==(r=r.Hr)){i=r=r.P
do{s=(o=i).Yr,o=o.se,void 0!==s&&(2&o||4&o)&&ei(n,t,s),i=i.P}while(i!==r)}
ci(e,t,n)
break
case 1:if(!pw&&(Zr(n,t),"function"==typeof(r=n.qe).Ji))try{
r.f=n.cr,r.Zr=n.Xe,r.Ji()}catch(a){Hi(n,t,a)}ci(e,t,n)
break
case 21:ci(e,t,n)
break
case 22:1&n.lr?(pw=(r=pw)||null!==n.Xe,ci(e,t,n),pw=r):ci(e,t,n)
break
default:ci(e,t,n)}}function di(e){var t,n=e.br
null!==n&&(e.br=null,null===(t=e.qe)&&(t=e.qe=new mw),n.d((n=>{
var r=Ki.jn(null,e,n)
t.On(n)||(t.$(n),n.R(r,r))})))}function hi(e,t){var n,r,i,o,s,a,l=t.nr
if(null!==l)for(n=0;n<l.e;n++){r=l[n]
try{i=e,s=o=t
e:for(;null!==s;){switch(s.se){case 5:gw=s.qe,ww=0
break e
case 3:case 4:gw=s.qe.vt,ww=1
break e}s=s.Ge}if(null===gw)throw Error(p(160))
ui(i,o,r),gw=null,ww=0,null!==(a=r.Ke)&&(a.Ge=null),r.Ge=null}catch(c){Hi(r,t,c)
}}if(12854&t.Ci)for(t=t.Ze;null!==t;)fi(t,e),t=t.et}function fi(e,t){
var n,r,i,o,s,a,l,c,u,d,h,f=e.Ke,m=e.Je
switch(e.se){case 0:case 11:case 14:case 15:if(hi(t,e),pi(e),4&m){try{
ti(3,e,e.Ge),ni(3,e)}catch(v){Hi(e,e.Ge,v)}try{ti(5,e,e.Ge)}catch(v){
Hi(e,e.Ge,v)}}break
case 1:hi(t,e),pi(e),512&m&&null!==f&&Zr(f,f.Ge)
break
case 5:if(hi(t,e),pi(e),512&m&&null!==f&&Zr(f,f.Ge),32&e.Je){n=e.qe
try{H(n,"")}catch(v){Hi(e,e.Ge,v)}}
if(4&m&&null!=(n=e.qe)&&(r=e.cr,i=null!==f?f.cr:r,
o=e.k,s=e.br,e.br=null,null!==s))try{
for("input"===o&&"radio"===r.k&&null!=r.oe&&A(n,r),
K(o,i),a=K(o,r),i=0;i<s.e;i+=2)l=s[i],
c=s[i+1],"style"===l?q(n,c):"dangerouslySetInnerHTML"===l?Pm(n,c):"children"===l?H(n,c):w(n,l,c,a)
switch(o){case"input":D(n,r)
break
case"textarea":z(n,r)
break
case"select":
u=n.Ne.Ii,n.Ne.Ii=!!r.Ri,null!=(d=r.r)?$(n,!!r.Ri,d,0):u!==!!r.Ri&&(null!=r.xe?$(n,!!r.Ri,r.xe,1):$(n,!!r.Ri,r.Ri?[]:"",0))
}n[ng]=r}catch(v){Hi(e,e.Ge,v)}break
case 6:if(hi(t,e),pi(e),4&m){if(null===e.qe)throw Error(p(162))
n=e.qe,r=e.cr
try{n.Re=r}catch(v){Hi(e,e.Ge,v)}}break
case 3:if(hi(t,e),pi(e),4&m&&null!==f&&f.Xe.mt)try{Ee(t.vt)}catch(v){
Hi(e,e.Ge,v)}break
case 4:default:hi(t,e),pi(e)
break
case 13:
hi(t,e),pi(e),8192&(n=e.Ze).Je&&(r=null!==n.Xe,n.qe.Xi=r,!r||null!==n.Ke&&null!==n.Ke.Xe||($w=Qm())),
4&m&&di(e)
break
case 22:
if(l=null!==f&&null!==f.Xe,1&e.lr?(pw=(a=pw)||l,hi(t,e),pw=a):hi(t,e),pi(e),
8192&m){if(a=null!==e.Xe,(e.qe.Xi=a)&&!l&&1&e.lr)for(vw=e,l=e.Ze;null!==l;){
for(c=vw=l;null!==vw;){switch(d=(u=vw).Ze,u.se){case 0:case 11:case 14:case 15:
ti(4,u,u.Ge)
break
case 1:if(Zr(u,u.Ge),"function"==typeof(h=u.qe).Ji){m=u,f=u.Ge
try{t=m,h.f=t.cr,h.Zr=t.Xe,h.Ji()}catch(v){Hi(m,f,v)}}break
case 5:Zr(u,u.Ge)
break
case 22:if(null!==u.Xe){gi(c)
continue}}null!==d?(d.Ge=u,vw=d):gi(c)}l=l.et}e:for(l=null,c=e;;){if(5===c.se){
if(null===l){l=c
try{
n=c.qe,a?"function"==typeof(r=n.$e).Le?r.Le("display","none","important"):r.Qi="none":(o=c.qe,
i=null!=(s=c.cr.$e)&&s.s("display")?s.Qi:null,o.$e.Qi=W("display",i))}catch(v){
Hi(e,e.Ge,v)}}}else if(6===c.se){if(null===l)try{c.qe.Re=a?"":c.cr}catch(v){
Hi(e,e.Ge,v)}}else if((22!==c.se&&23!==c.se||null===c.Xe||c===e)&&null!==c.Ze){
c.Ze.Ge=c,c=c.Ze
continue}if(c===e)break e
for(;null===c.et;){if(null===c.Ge||c.Ge===e)break e
l===c&&(l=null),c=c.Ge}l===c&&(l=null),c.et.Ge=c.Ge,c=c.et}}break
case 19:hi(t,e),pi(e),4&m&&di(e)
case 21:}}function pi(e){var t,n,r,i,o=e.Je
if(2&o){try{e:{for(t=e.Ge;null!==t;){if(oi(t)){n=t
break e}t=t.Ge}throw Error(p(160))}switch(n.se){case 5:r=n.qe,32&n.Je&&(H(r,""),
n.Je&=-33),li(e,si(e),r)
break
case 3:case 4:i=n.qe.vt,ai(e,si(e),i)
break
default:throw Error(p(161))}}catch(s){Hi(e,e.Ge,s)}e.Je&=-3}
4096&o&&(e.Je&=-4097)}function mi(e){vw=e,vi(e)}function vi(e){var t,n,r,i,o,s,a
for(t=!!(1&e.lr);null!==vw;)if(r=(n=vw).Ze,22===n.se&&t){
if(!(i=null!==n.Xe||fw)){
if(s=null!==(o=n.Ke)&&null!==o.Xe||pw,o=fw,a=pw,fw=i,(pw=s)&&!a)for(vw=n;null!==vw;)s=(i=vw).Ze,
22===i.se&&null!==i.Xe?wi(n):null!==s?(s.Ge=i,vw=s):wi(n)
for(;null!==r;)vw=r,vi(r),r=r.et
vw=n,fw=o,pw=a}yi(e)}else 8772&n.Ci&&null!==r?(r.Ge=n,vw=r):yi(e)}
function yi(e){for(var t,n,r,i,o,s,a,l,c,u,d;null!==vw;){if(8772&(t=vw).Je){
n=t.Ke
try{if(8772&t.Je)switch(t.se){case 0:case 11:case 15:pw||ni(5,t)
break
case 1:
r=t.qe,4&t.Je&&!pw&&(null===n?r.li():(i=t.tr===t.k?n.cr:vr(t.k,n.cr),r.ki(i,n.Xe,r.Zi))),
null!==(o=t.br)&&Sn(t,o,r)
break
case 3:if(null!==(s=t.br)){if(n=null,null!==t.Ze)switch(t.Ze.se){case 5:case 1:
n=t.Ze.qe}Sn(t,s,n)}break
case 5:if(a=t.qe,null===n&&4&t.Je)switch(n=a,l=t.cr,t.k){case"button":
case"input":case"select":case"textarea":l.Hi&&n.Tn()
break
case"img":l.eo&&(n.eo=l.eo)}break
case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break
case 13:null===t.Xe&&null!==(c=t.Ke)&&null!==(u=c.Xe)&&null!==(d=u.Qe)&&Ee(d)
break
default:throw Error(p(163))}pw||512&t.Je&&ri(t)}catch(h){Hi(t,t.Ge,h)}}
if(t===e){vw=null
break}if(null!==(n=t.et)){n.Ge=t.Ge,vw=n
break}vw=t.Ge}}function gi(e){for(var t,n;null!==vw;){if((t=vw)===e){vw=null
break}if(null!==(n=t.et)){n.Ge=t.Ge,vw=n
break}vw=t.Ge}}function wi(e){for(var t,n,r,i,o,s,a;null!==vw;){t=vw
try{switch(t.se){case 0:case 11:case 15:n=t.Ge
try{ni(4,t)}catch(l){Hi(t,n,l)}break
case 1:if("function"==typeof(r=t.qe).li){i=t.Ge
try{r.li()}catch(l){Hi(t,i,l)}}o=t.Ge
try{ri(t)}catch(l){Hi(t,o,l)}break
case 5:s=t.Ge
try{ri(t)}catch(l){Hi(t,s,l)}}}catch(l){Hi(t,t.Ge,l)}if(t===e){vw=null
break}if(null!==(a=t.et)){a.Ge=t.Ge,vw=a
break}vw=t.Ge}}function bi(){return 6&Sw?Qm():-1!==Kw?Kw:Kw=Qm()}function xi(e){
return 1&e.lr?2&Sw&&0!==Ew?Ew&-Ew:null!==Mg.xt?(0===Gw&&(Gw=me()),
Gw):0!==(e=hv)?e:e=void 0===(e=window.Lt)?16:Pe(e.k):1}function ki(e,t,n,r){
if(qw>50)throw qw=0,Yw=null,Error(p(185))
ye(e,n,r),2&Sw&&e===_w||(e===_w&&(!(2&Sw)&&(Aw|=n),4===Ow&&Ei(e,Ew)),Ni(e,r),1===n&&0===Sw&&!(1&t.lr)&&(Fw=Qm()+500,
pg&&Ht()))}function Ni(e,t){var n,r=e.to
if(((e,t)=>{var n,r,i,o,s,a,l
for(n=e.nt,r=e.rt,i=e.no,o=e.tt;o>0;)a=1<<(s=31-av(o)),-1===(l=i[s])?0!==(a&n)&&0===(a&r)||(i[s]=fe(a,t)):t>=l&&(e.ro|=a),
o&=~a})(e,t),0===(n=he(e,e===_w?Ew:0)))null!==r&&Gm(r),e.to=null,e.io=0
else if(t=n&-n,e.io!==t){if(null!=r&&Gm(r),1===t)0===e.se?(e=>{pg=1,Vt(e)
})(Ci.jn(null,e)):Vt(Ci.jn(null,e)),Zy((()=>{!(6&Sw)&&Ht()})),r=null
else{switch(we(n)){case 1:r=ev
break
case 4:r=tv
break
case 16:default:r=nv
break
case 536870912:r=iv}r=Gi(r,Si.jn(null,e))}e.io=t,e.to=r}}function Si(e,t){
var n,r,i,o,s
if(Kw=-1,Gw=0,6&Sw)throw Error(p(327))
if(n=e.to,Bi()&&e.to!==n)return null
if(0===(r=he(e,e===_w?Ew:0)))return null
if(30&r||0!==(r&e.ro)||t)t=Ri(e,r)
else{
for(t=r,i=Sw,Sw|=2,o=Di(),_w===e&&Ew===t||(Lw=null,Fw=Qm()+500,Pi(e,t));;)try{
Fi()
break}catch(a){Ai(e,a)}cn(),xw.S=o,Sw=i,null!==Tw?t=0:(_w=null,Ew=0,t=Ow)}
if(0!==t){
if(2===t&&0!==(i=pe(e))&&(r=i,t=_i(e,i)),1===t)throw n=jw,Pi(e,0),Ei(e,r),
Ni(e,Qm()),n
if(6===t)Ei(e,r)
else{if(i=e.S.Ke,!(30&r||(e=>{var t,n,r,i,o
for(t=e;;){if(16384&t.Je&&null!==(n=t.br)&&null!==(n=n.Wr))for(r=0;r<n.e;r++){
o=(i=n[r]).Vr,i=i.r
try{if(!Ty(o(),i))return 0}catch(s){return 0}}
if(n=t.Ze,16384&t.Ci&&null!==n)n.Ge=t,t=n
else{if(t===e)break
for(;null===t.et;){if(null===t.Ge||t.Ge===e)return 1
t=t.Ge}t.et.Ge=t.Ge,t=t.et}}return 1
})(i)||(t=Ri(e,r),2===t&&(o=pe(e),0!==o&&(r=o,
t=_i(e,o))),1!==t)))throw n=jw,Pi(e,0),Ei(e,r),Ni(e,Qm()),n
switch(e.oo=i,e.so=r,t){case 0:case 1:throw Error(p(345))
case 2:case 5:Ui(e,Rw,Lw)
break
case 3:if(Ei(e,r),(130023424&r)===r&&(t=$w+500-Qm())>10){if(0!==he(e,0))break
if(((i=e.nt)&r)!==r){bi(),e.rt|=e.nt&i
break}e.ao=Jy(Ui.jn(null,e,Rw,Lw),t)
break}Ui(e,Rw,Lw)
break
case 4:if(Ei(e,r),(4194240&r)===r)break
for(t=e.st,i=-1;r>0;)o=1<<(s=31-av(r)),(s=t[s])>i&&(i=s),r&=~o
if(r=i,(r=(120>(r=Qm()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bw(r/1960))-r)>10){
e.ao=Jy(Ui.jn(null,e,Rw,Lw),r)
break}Ui(e,Rw,Lw)
break
default:throw Error(p(329))}}}return Ni(e,Qm()),e.to===n?Si.jn(null,e):null}
function _i(e,t){var n=Iw
return e.S.Xe.mt&&(Pi(e,t).Je|=256),2!==(e=Ri(e,t))&&(t=Rw,Rw=n,null!==t&&Ti(t)),
e}function Ti(e){null===Rw?Rw=e:Rw.M.c(Rw,e)}function Ei(e,t){for(t&=~Dw,t&=~Aw,
e.nt|=t,e.rt&=~t,e=e.no;t>0;){var n=31-av(t),r=1<<n
e[n]=-1,t&=~r}}function Ci(e){var t,n,r
if(6&Sw)throw Error(p(327))
if(Bi(),!(1&(t=he(e,0))))return Ni(e,Qm()),null
if(n=Ri(e,t),0!==e.se&&2===n&&0!==(r=pe(e))&&(t=r,n=_i(e,r)),1===n)throw n=jw,Pi(e,0),
Ei(e,t),Ni(e,Qm()),n
if(6===n)throw Error(p(345))
return e.oo=e.S.Ke,e.so=t,Ui(e,Rw,Lw),Ni(e,Qm()),null}function Mi(e,t){var n=Sw
Sw|=1
try{return e(t)}finally{0===(Sw=n)&&(Fw=Qm()+500,pg&&Ht())}}function Oi(e){
var t,n,r
null!==Hw&&0===Hw.se&&!(6&Sw)&&Bi(),t=Sw,Sw|=1,n=Nw.xt,r=hv
try{if(Nw.xt=null,hv=1,e)return e()}finally{hv=r,Nw.xt=n,!(6&(Sw=t))&&Ht()}}
function ji(){Cw=Mw.S,Dt(Mw)}function Pi(e,t){var n,r,i,o,s
if(e.oo=null,e.so=0,-1!==(n=e.ao)&&(e.ao=-1,Xy(n)),null!==Tw)for(n=Tw.Ge;null!==n;){
switch(Kt(r=n),r.se){case 1:null!=(r=r.k.Qn)&&Ft()
break
case 3:En(),Dt(dg),Dt(ug),jn()
break
case 5:Mn(r)
break
case 4:En()
break
case 13:case 19:Dt(Bg)
break
case 10:un(r.k.le)
break
case 22:case 23:ji()}n=n.Ge}
if(_w=e,Tw=e=Zi(e.S,null),Ew=Cw=t,Ow=0,jw=null,Dw=Aw=Pw=0,Rw=Iw=null,null!==Rg){
for(t=0;t<Rg.e;t++)null!==(r=(n=Rg[t]).wr)&&(n.wr=null,
i=r.P,null!==(o=n._r)&&(s=o.P,o.P=i,r.P=s),n._r=r)
Rg=null}return e}function Ai(e,t){for(var n,r,i,o,s,a,l,c,u,d,h,f,m,v,y,g,w;;){
n=Tw
try{if(cn(),Hg.S=ew,Jg){for(r=Yg.Xe;null!==r;)null!==(i=r.Rr)&&(i._r=null),r=r.P
Jg=0}if(qg=0,Gg=Kg=Yg=null,Xg=0,Qg=0,kw.S=null,null===n||null===n.Ge){Ow=1,jw=t,
Tw=null
break}e:{
if(o=e,s=n.Ge,l=t,t=Ew,(a=n).Je|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.R){
if(c=l,d=(u=a).se,1&u.lr||0!==d&&11!==d&&15!==d||((h=u.Ke)?(u.br=h.br,u.Xe=h.Xe,
u.yr=h.yr):(u.br=null,u.Xe=null)),null!==(f=Er(s))){
f.Je&=-257,Cr(f,s,a,0,t),1&f.lr&&Tr(o,c,t),
l=c,null===(m=(t=f).br)?((v=new Set).$(l),t.br=v):m.$(l)
break e}if(!(1&t)){Tr(o,c,t),Ii()
break e}l=Error(p(426))}else if(Eg&&1&a.lr&&null!==(y=Er(s))){
!(65536&y.Je)&&(y.Je|=256),Cr(y,s,a,0,t),rn(kr(l,a))
break e}o=l=kr(l,a),4!==Ow&&(Ow=2),null===Iw?Iw=[o]:Iw.M(o),o=s
do{switch(o.se){case 3:o.Je|=65536,t&=-t,o.yr|=t,kn(o,Sr(0,l,t))
break e
case 1:
if(a=l,g=o.k,w=o.qe,!(128&o.Je||"function"!=typeof g.hi&&(null===w||"function"!=typeof w.fi||null!==Bw&&Bw.On(w)))){
o.Je|=65536,t&=-t,o.yr|=t,kn(o,_r(o,a,t))
break e}}o=o.Ge}while(null!==o)}zi(n)}catch(b){t=b,Tw===n&&null!==n&&(Tw=n=n.Ge)
continue}break}}function Di(){var e=xw.S
return xw.S=ew,null===e?ew:e}function Ii(){
0!==Ow&&3!==Ow&&2!==Ow||(Ow=4),null===_w||!(268435455&Pw)&&!(268435455&Aw)||Ei(_w,Ew)
}function Ri(e,t){var n,r=Sw
for(Sw|=2,n=Di(),_w===e&&Ew===t||(Lw=null,Pi(e,t));;)try{$i()
break}catch(i){Ai(e,i)}if(cn(),Sw=r,xw.S=n,null!==Tw)throw Error(p(261))
return _w=null,Ew=0,Ow}function $i(){for(;null!==Tw;)Li(Tw)}function Fi(){
for(;null!==Tw&&!Jm();)Li(Tw)}function Li(e){var t=Jw(e.Ke,e,Cw)
e.cr=e.rr,null===t?zi(e):Tw=t,kw.S=null}function zi(e){var t,n=e
do{if(t=n.Ke,e=n.Ge,32768&n.Je){
if(null!==(t=Qr(t,n)))return t.Je&=32767,void(Tw=t)
if(null===e)return Ow=6,void(Tw=null)
e.Je|=32768,e.Ci=0,e.nr=null}else if(null!==(t=Xr(t,n,Cw)))return void(Tw=t)
if(null!==(n=n.et))return void(Tw=n)
Tw=n=e}while(null!==n)
0===Ow&&(Ow=5)}function Ui(e,t,n){var r=hv,i=Nw.xt
try{Nw.xt=null,hv=1,((e,t,n,r)=>{var i,o,s,a
do{Bi()}while(null!==Hw)
if(6&Sw)throw Error(p(327))
if(n=e.oo,i=e.so,null===n)return null
if(e.oo=null,e.so=0,n===e.S)throw Error(p(177))
if(e.to=null,e.io=0,((e,t)=>{var n,r,i,o=e.tt&~t
for(e.tt=t,e.nt=0,e.rt=0,e.ro&=t,e.lo&=t,e.it&=t,t=e.ot,n=e.st,e=e.no;o>0;)i=1<<(r=31-av(o)),
t[r]=0,n[r]=-1,e[r]=-1,o&=~i
})(e,o=n.yr|n.pr),e===_w&&(Tw=_w=null,Ew=0),!(2064&n.Ci)&&!(2064&n.Je)||Vw||(Vw=1,
Gi(nv,(()=>(Bi(),
null)))),o=!!(15990&n.Je),15990&n.Ci||o?(o=Nw.xt,Nw.xt=null,s=hv,
hv=1,a=Sw,Sw|=4,kw.S=null,((e,t)=>{var n,r,i,o,s,a,l,c,u,d,h,f,m,v,y,g,w,b
if(Ky=Cv,it(e=rt())){if("on"in e)n={rn:e.on,in:e.sn}
else e:if((r=(n=(n=e.Te)&&n.cn||window).ln&&n.ln())&&0!==r.dn){
n=r.hn,i=r.fn,o=r.pn,r=r.mn
try{n.Ie,o.Ie}catch(x){n=null
break e}s=0,a=-1,l=-1,c=0,u=0,d=e,h=null
t:for(;;){
for(;d!==n||0!==i&&3!==d.Ie||(a=s+i),d!==o||0!==r&&3!==d.Ie||(l=s+r),3===d.Ie&&(s+=d.Re.e),
null!==(f=d.Ae);)h=d,d=f
for(;;){if(d===e)break t
if(h===n&&++c===i&&(a=s),h===o&&++u===r&&(l=s),null!==(f=d.Wt))break
h=(d=h).We}d=f}n=-1===a||-1===l?null:{rn:a,in:l}}else n=null
n=n||{rn:0,in:0}}else n=null
for(Gy={en:e,tn:n
},Cv=0,vw=t;null!==vw;)if(e=(t=vw).Ze,1028&t.Ci&&null!==e)e.Ge=t,vw=e
else for(;null!==vw;){t=vw
try{if(m=t.Ke,1024&t.Je)switch(t.se){case 0:case 11:case 15:case 5:case 6:
case 4:case 17:break
case 1:null!==m&&(v=m.cr,y=m.Xe,w=(g=t.qe).oi(t.tr===t.k?v:vr(t.k,v),y),g.Zi=w)
break
case 3:1===(b=t.qe.vt).Ie?b.Pe="":9===b.Ie&&b.nn&&b.Yn(b.nn)
break
default:throw Error(p(163))}}catch(x){Hi(t,t.Ge,x)}if(null!==(e=t.et)){
e.Ge=t.Ge,vw=e
break}vw=t.Ge}m=yw,yw=0
})(e,n),fi(n,e),ot(Gy),Cv=!!Ky,Gy=Ky=null,e.S=n,mi(n),Xm(),
Sw=a,hv=s,Nw.xt=o):e.S=n,Vw&&(Vw=0,Hw=e,Ww=i),0===(o=e.tt)&&(Bw=null),(e=>{
if(sv&&"function"==typeof sv.co)try{sv.co(ov,e,void 0,!(128&~e.S.Je))}catch(t){}
})(n.qe),Ni(e,Qm()),null!==t)for(r=e.uo,n=0;n<t.e;n++)r((i=t[n]).r,{pi:i.ee,
di:i.di})
if(zw)throw zw=0,e=Uw,Uw=null,e
!!(1&Ww)&&0!==e.se&&Bi(),1&(o=e.tt)?e===Yw?qw++:(qw=0,Yw=e):qw=0,Ht()})(e,t,n,r)
}finally{Nw.xt=i,hv=r}return null}function Bi(){
var e,t,n,r,i,o,s,a,l,c,u,d,h,f,m,v,y,g,w,b,x
if(null!==Hw){e=we(Ww),t=Nw.xt,n=hv
try{if(Nw.xt=null,hv=16>e?16:e,null===Hw)r=0
else{if(e=Hw,Hw=null,Ww=0,6&Sw)throw Error(p(331))
for(i=Sw,Sw|=4,vw=e.S;null!==vw;){if(s=(o=vw).Ze,16&vw.Je&&null!==(a=o.nr)){
for(l=0;l<a.e;l++)for(c=a[l],vw=c;null!==vw;){switch((u=vw).se){case 0:case 11:
case 15:ti(8,u,o)}if(null!==(d=u.Ze))d.Ge=u,vw=d
else for(;null!==vw;){if(h=(u=vw).et,f=u.Ge,ii(u),u===c){vw=null
break}if(null!==h){h.Ge=f,vw=h
break}vw=f}}if(null!==(m=o.Ke)&&null!==(v=m.Ze)){m.Ze=null
do{y=v.et,v.et=null,v=y}while(null!==v)}vw=o}if(2064&o.Ci&&null!==s)s.Ge=o,vw=s
else e:for(;null!==vw;){if(2048&(o=vw).Je)switch(o.se){case 0:case 11:case 15:
ti(9,o,o.Ge)}if(null!==(g=o.et)){g.Ge=o.Ge,vw=g
break e}vw=o.Ge}}
for(w=e.S,vw=w;null!==vw;)if(b=(s=vw).Ze,2064&s.Ci&&null!==b)b.Ge=s,vw=b
else e:for(s=w;null!==vw;){if(2048&(a=vw).Je)try{switch(a.se){case 0:case 11:
case 15:ni(9,a)}}catch(k){Hi(a,a.Ge,k)}if(a===s){vw=null
break e}if(null!==(x=a.et)){x.Ge=a.Ge,vw=x
break e}vw=a.Ge}if(Sw=i,Ht(),sv&&"function"==typeof sv.do)try{sv.do(ov,e)
}catch(k){}r=1}return r}finally{hv=n,Nw.xt=t}}return 0}function Vi(e,t,n){
e=bn(e,t=Sr(0,t=kr(n,t),1),1),t=bi(),null!==e&&(ye(e,1,t),Ni(e,t))}
function Hi(e,t,n){if(3===e.se)Vi(e,e,n)
else for(;null!==t;){if(3===t.se){Vi(t,e,n)
break}if(1===t.se){var r=t.qe
if("function"==typeof t.k.hi||"function"==typeof r.fi&&(null===Bw||!Bw.On(r))){
t=bn(t,e=_r(t,e=kr(n,e),1),1),e=bi(),null!==t&&(ye(t,1,e),Ni(t,e))
break}}t=t.Ge}}function Wi(e,t,n){var r=e.mi
null!==r&&r.at(t),t=bi(),e.rt|=e.nt&n,_w===e&&(Ew&n)===n&&(4===Ow||3===Ow&&(130023424&Ew)===Ew&&500>Qm()-$w?Pi(e,0):Dw|=n),
Ni(e,t)}function qi(e,t){
0===t&&(1&e.lr?(t=dv,!(130023424&(dv<<=1))&&(dv=4194304)):t=1)
var n=bi()
null!==(e=vn(e,t))&&(ye(e,t,n),Ni(e,n))}function Yi(e){var t=e.Xe,n=0
null!==t&&(n=t.ar),qi(e,n)}function Ki(e,t){var n,r,i=0
switch(e.se){case 13:n=e.qe,null!==(r=e.Xe)&&(i=r.ar)
break
case 19:n=e.qe
break
default:throw Error(p(314))}null!==n&&n.at(t),qi(e,i)}function Gi(e,t){
return Km(e,t)}function Ji(e,t,n,r){
this.se=e,this.g=n,this.et=this.Ze=this.Ge=this.qe=this.k=this.tr=null,
this.dr=0,
this.y=null,this.rr=t,this.mr=this.Xe=this.br=this.cr=null,this.lr=r,this.Ci=this.Je=0,
this.nr=null,this.pr=this.yr=0,this.Ke=null}function Xi(e,t,n,r){
return new Ji(e,t,n,r)}function Qi(e){return!(!(e=e.u)||!e.ho)}function Zi(e,t){
var n=e.Ke
return null===n?((n=Xi(e.se,t,e.g,e.lr)).tr=e.tr,n.k=e.k,n.qe=e.qe,n.Ke=e,e.Ke=n):(n.rr=t,
n.k=e.k,
n.Je=0,n.Ci=0,n.nr=null),n.Je=14680064&e.Je,n.pr=e.pr,n.yr=e.yr,n.Ze=e.Ze,
n.cr=e.cr,n.Xe=e.Xe,n.br=e.br,t=e.mr,n.mr=null===t?null:{yr:t.yr,vr:t.vr
},n.et=e.et,n.dr=e.dr,n.y=e.y,n}function eo(e,t,n,r,i,o){var s=2
if(r=e,"function"==typeof e)Qi(e)&&(s=1)
else if("string"==typeof e)s=5
else e:switch(e){case mm:return to(n.w,i,o,t)
case vm:s=8,i|=8
break
case ym:return(e=Xi(12,n,t,2|i)).tr=ym,e.yr=o,e
case xm:return(e=Xi(13,n,t,i)).tr=xm,e.yr=o,e
case km:return(e=Xi(19,n,t,i)).tr=km,e.yr=o,e
case _m:return no(n,i,o,t)
default:if("object"==typeof e&&null!==e)switch(e.x){case gm:s=10
break e
case wm:s=9
break e
case bm:s=11
break e
case Nm:s=14
break e
case Sm:s=16,r=null
break e}throw Error(p(130,null==e?e:typeof e,""))}
return(t=Xi(s,n,t,i)).tr=e,t.k=r,t.yr=o,t}function to(e,t,n,r){
return(e=Xi(7,e,r,t)).yr=n,e}function no(e,t,n,r){
return(e=Xi(22,e,r,t)).tr=_m,e.yr=n,e.qe={Xi:0},e}function ro(e,t,n){
return(e=Xi(6,e,null,t)).yr=n,e}function io(e,t,n){
return(t=Xi(4,null!==e.w?e.w:[],e.g,t)).yr=n,t.qe={vt:e.vt,fo:null,hr:e.hr},t}
function oo(e,t,n,r,i){
this.se=t,this.vt=e,this.oo=this.mi=this.S=this.fo=null,this.ao=-1,
this.to=this.Ni=this.p=null,
this.io=0,this.st=ve(0),this.no=ve(-1),this.it=this.so=this.lo=this.ro=this.rt=this.nt=this.tt=0,
this.ot=ve(0),this.po=r,this.uo=i,this.mo=null}function so(e,t,n,r,i,o,s,a,l){
return e=new oo(e,t,n,a,l),
1===t?(t=1,1==o&&(t|=8)):t=0,o=Xi(3,null,null,t),e.S=o,o.qe=e,o.Xe={xn:r,mt:n,
vo:null,wi:null,yo:null},yn(o),e}function ao(e){var t,n
if(!e)return cg
e:{if(se(e=e.ei)!==e||1!==e.se)throw Error(p(170))
t=e
do{switch(t.se){case 3:t=t.qe.p
break e
case 1:if($t(t.k)){t=t.qe.er
break e}}t=t.Ge}while(null!==t)
throw Error(p(171))}return 1===e.se&&$t(n=e.k)?zt(e,n,t):t}
function lo(e,t,n,r,i,o,s,a,l){return(e=so(n,r,1,e,0,o,0,a,l)).p=ao(null),n=e.S,
(o=wn(r=bi(),i=xi(n))).Or=null!=t?t:null,bn(n,o,i),e.S.yr=i,ye(e,i,r),Ni(e,r),e}
function co(e,t,n,r){var i=t.S,o=bi(),s=xi(i)
return n=ao(n),null===t.p?t.p=n:t.Ni=n,(t=wn(o,s)).Mr={xn:e
},null!==(r=void 0===r?null:r)&&(t.Or=r),
null!==(e=bn(i,t,s))&&(ki(e,i,s,o),xn(e,i,s)),s}function uo(e){
return(e=e.S).Ze?(e.Ze.se,e.Ze.qe):null}function ho(e,t){
if(null!==(e=e.Xe)&&null!==e.Qe){var n=e.ar
e.ar=0!==n&&t>n?n:t}}function fo(e,t){ho(e,t),(e=e.Ke)&&ho(e,t)}function po(e){
this.go=e}function mo(e){this.go=e}function vo(e){
return!(!e||1!==e.Ie&&9!==e.Ie&&11!==e.Ie)}function yo(e){
return!(!e||1!==e.Ie&&9!==e.Ie&&11!==e.Ie&&(8!==e.Ie||" react-mount-point-unstable "!==e.Re))
}function go(){}function wo(e,t,n,r,i){var o,s,a=n.Ki
return a?("function"==typeof i&&(s=i,i=()=>{var e=uo(o)
s.o(e)}),co(t,o=a,e,i)):o=((e,t,n,r,i)=>{var o,s,a,l
if(i)return"function"==typeof r&&(o=r,r=()=>{var e=uo(s)
o.o(e)}),s=lo(t,r,e,0,null,0,0,"",go),e.Ki=s,e[rg]=s.S,pt(8===e.Ie?e.We:e),Oi(),
s
for(;i=e.De;)e.Yn(i)
return"function"==typeof r&&(a=r,r=()=>{var e=uo(l)
a.o(e)
}),l=so(e,0,0,null,0,0,0,"",go),e.Ki=l,e[rg]=l.S,pt(8===e.Ie?e.We:e),Oi((()=>{
co(t,l,n,r)})),l})(n,t,e,i,r),uo(o)}function bo(e){BT=zT(BT,e),UT.d((e=>{e(BT)
}))}function xo({...e}){
const t=($T=($T+1)%Number.MAX_SAFE_INTEGER,$T.C()),n=()=>bo({k:"DISMISS_TOAST",
wo:t})
return bo({k:"ADD_TOAST",bo:{...e,ir:t,xo:1,ko(e){e||n()}}}),{ir:t,No:n,So(e){
return bo({k:"UPDATE_TOAST",bo:{...e,ir:t}})}}}function ko(){
const[e,t]=Bp._o(BT)
return Bp.To((()=>(UT.M(t),()=>{const e=UT.Fe(t)
e>-1&&UT.Eo(e,1)})),[e]),{...e,bo:xo,No(e){return bo({k:"DISMISS_TOAST",wo:e})}}
}function No(e,t,{Co:n=1}={}){return r=>{
if(null==e||e(r),0==n||!r.Mt)return null==t?void 0:t(r)}}function So(...e){
return t=>e.d((e=>((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.S=t)})(e,t)))}
function _o(...e){return Bp.Mo(So(...e),e)}function To(...e){const t=e[0]
if(1===e.e)return t
const n=()=>{const n=e.Oo((e=>({jo:e(),Po:e.Po})))
return e=>{const r=n.Ao(((t,{jo:n,Po:r})=>({...t,...n(e)["__scope"+r]})),{})
return Bp.Do((()=>({["__scope"+t.Po]:r})),[r])}}
return n.Po=t.Po,n}function Eo(e){return Bp.Io(e)&&e.k===ab}function Co(e,t){
const n={...t}
for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.K(r)?i&&o?n[r]=(...e)=>{
o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o
}:"className"===r&&(n[r]=[i,o].Ro(Boolean).A(" "))}return{...e,...n}}
function Mo(e){const t=e+"CollectionProvider",[n,r]=((e,t=[])=>{let n=[]
const r=()=>{const t=n.Oo((e=>Bp.$o(e)))
return n=>{const r=(null==n?void 0:n[e])||t
return Bp.Do((()=>({["__scope"+e]:{...n,[e]:r}})),[n,r])}}
return r.Po=e,[(t,r)=>{function i(t){
const{Fo:n,w:r,...i}=t,a=(null==n?void 0:n[e][s])||o,l=Bp.Do((()=>i),Object.Lo(i))
return Gp.zo(a.Uo,{r:l,w:r})}const o=Bp.$o(r),s=n.e
return n=[...n,r],i.re=t+"Provider",[i,(n,i)=>{
const a=(null==i?void 0:i[e][s])||o,l=Bp.Bo(a)
if(l)return l
if(void 0!==r)return r
throw Error(`\`${n}\` must be used within \`${t}\``)}]},To(r,...t)]
})(t),[i,o]=n(t,{Vo:{S:null},Ho:new Map}),s=e=>{
const{Fo:t,w:n}=e,r=DT.Wo(null),o=DT.Wo(new Map).S
return Gp.zo(i,{Fo:t,Ho:o,Vo:r,w:n})}
s.re=t
const a=e+"CollectionSlot",l=DT.qo(((e,t)=>{const{Fo:n,w:r}=e,i=_o(t,o(a,n).Vo)
return Gp.zo(ob,{y:i,w:r})}))
l.re=a
const c=e+"CollectionItemSlot",u="data-radix-collection-item",d=DT.qo(((e,t)=>{
const{Fo:n,w:r,...i}=e,s=DT.Wo(null),a=_o(t,s),l=o(c,n)
return DT.To((()=>(l.Ho.te(s,{y:s,...i}),()=>{l.Ho.at(s)}))),Gp.zo(ob,{[u]:"",
y:a,w:r})}))
return d.re=c,[{Uo:s,Yo:l,Ko:d},t=>{const n=o(e+"CollectionConsumer",t)
return DT.Mo((()=>{const e=n.Vo.S
if(!e)return[]
const t=Array.Go(e.Jo(`[${u}]`))
return Array.Go(n.Ho.Lo()).Xo(((e,n)=>t.Fe(e.y.S)-t.Fe(n.y.S)))}),[n.Vo,n.Ho])
},r]}function Oo(e,t=[]){let n=[]
const r=()=>{const t=n.Oo((e=>Bp.$o(e)))
return n=>{const r=(null==n?void 0:n[e])||t
return Bp.Do((()=>({["__scope"+e]:{...n,[e]:r}})),[n,r])}}
return r.Po=e,[(t,r)=>{const i=Bp.$o(r),o=n.e
n=[...n,r]
const s=t=>{var n
const{Fo:r,w:s,...a}=t,l=(null==(n=null==r?void 0:r[e])?void 0:n[o])||i,c=Bp.Do((()=>a),Object.Lo(a))
return Gp.zo(l.Uo,{r:c,w:s})}
return s.re=t+"Provider",[s,(n,s)=>{var a
const l=(null==(a=null==s?void 0:s[e])?void 0:a[o])||i,c=Bp.Bo(l)
if(c)return c
if(void 0!==r)return r
throw Error(`\`${n}\` must be used within \`${t}\``)}]},jo(r,...t)]}
function jo(...e){const t=e[0]
if(1===e.e)return t
const n=()=>{const n=e.Oo((e=>({jo:e(),Po:e.Po})))
return e=>{const r=n.Ao(((t,{jo:n,Po:r})=>({...t,...n(e)["__scope"+r]})),{})
return Bp.Do((()=>({["__scope"+t.Po]:r})),[r])}}
return n.Po=t.Po,n}function Po(e,t){e&&nb.Qo((()=>e.yt(t)))}function Ao(e){
const t=Bp.Wo(e)
return Bp.To((()=>{t.S=e})),Bp.Do((()=>(...e)=>{var n
return null==(n=t.S)?void 0:n.o(t,...e)}),[])}function Do(){
const e=new CustomEvent(cb)
document.yt(e)}function Io(e,t,n,{Zo:r}){const i=n.es.Ve,o=new CustomEvent(e,{
ts:0,ns:1,$t:n})
t&&i.Pn(e,t,{rs:1}),r?Po(i,o):i.yt(o)}function Ro(e){
return(null==e?void 0:e.is)||"none"}function $o({os:e,ss:t,as:n=()=>{}}){
const[r,i]=(({ss:e,as:t})=>{const n=Bp._o(e),[r]=n,i=Bp.Wo(r),o=Ao(t)
return Bp.To((()=>{i.S!==r&&(o(r),i.S=r)}),[r,i,o]),n})({ss:t,as:n
}),o=void 0!==e,s=o?e:r,a=Ao(n)
return[s,Bp.Mo((t=>{if(o){const n="function"==typeof t?t(e):t
n!==e&&a(n)}else i(t)}),[o,e,i,a])]}function Fo(e){const t=[]
return Array.Go(e.ls).d((e=>{
if(e.Ie===e.cs&&e.Pe&&t.M(e.Pe),(e=>e.Ie===e.us)(e)){
const n=e.ds||e.hs||"none"===e.$e.Qi,r=""===e._i.fs
if(!n)if(r){const n=e._i.ps
n&&t.M(n)}else t.M(...Fo(e))}})),t}function Lo(e,t,n,{Zo:r}){
const i=n.es.Et,o=new CustomEvent(e,{ts:1,ns:1,$t:n})
t&&i.Pn(e,t,{rs:1}),r?Po(i,o):i.yt(o)}function zo(e){
const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{ms(e){
const t="INPUT"===e.Pr&&"hidden"===e.k
return e.Oe||e.hs||t||0>e.vs?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}})
for(;n.ys();)t.M(n.gs)
return t}function Uo(e){const t=document.ge
return e.ws((e=>e===t?1:(e.Tn(),document.ge!==t)))}function Bo(e){var t,n,r,i=""
if("string"==typeof e||"number"==typeof e)i+=e
else if("object"==typeof e)if(Array.isArray(e))for(r=e.e,t=0;r>t;t++)e[t]&&(n=Bo(e[t]))&&(i&&(i+=" "),
i+=n)
else for(n in e)e[n]&&(i&&(i+=" "),i+=n)
return i}function Vo(){
for(var e,t,n=0,r="",i=arguments.e;i>n;n++)(e=arguments[n])&&(t=Bo(e))&&(r&&(r+=" "),
r+=t)
return r}function Ho(){let e,t,n=0,r=""
for(;arguments.e>n;)(e=arguments[n++])&&(t=dC(e))&&(r&&(r+=" "),r+=t)
return r}function Wo(e,...t){function n(e){const t=i(e)
if(t)return t
const n=((e,t)=>{const{bs:n,xs:r,ks:i}=t,o=[],s=e.Z().ne(uC)
let a=""
for(let l=s.e-1;l>=0;l-=1){const e=s[l],{Ns:t,Ss:c,_s:u,Ts:d}=n(e)
let h=!!d,f=r(h?u.Es(0,d):u)
if(!f){if(!h){a=e+(a.e>0?" "+a:a)
continue}if(f=r(u),!f){a=e+(a.e>0?" "+a:a)
continue}h=0}const p=cC(t).A(":"),m=c?p+"!":p,v=m+f
if(o.ie(v))continue
o.M(v)
const y=i(f,h)
for(let n=0;n<y.e;++n){const e=y[n]
o.M(m+e)}a=e+(a.e>0?" "+a:a)}return a})(e,r)
return o(e,n),n}let r,i,o,s=a=>{const l=t.Ao(((e,t)=>t(e)),e())
return r=(e=>({vo:aC(e.Cs),bs:lC(e),...QE(e)}))(l),i=r.vo.t,o=r.vo.te,s=n,n(a)}
return function(){return s(Ho.c(null,arguments))}}function qo(...e){
return UC(Vo(e))}function Yo(){const{Ms:e}=ko()
return Gp.Os(BC,{w:[e.Oo((({ir:e,js:t,Ps:n,Fr:r,...i})=>Gp.Os(WC,{...i,
w:[Gp.Os("div",{As:"grid gap-1",w:[t&&Gp.zo(YC,{w:t}),n&&Gp.zo(KC,{w:n})]
}),r,Gp.zo(qC,{})]},e))),Gp.zo(VC,{})]})}function Ko(e){return void 0!==e.Ds}
function Go(...e){return e.Ro(Boolean).A(" ")}function Jo(){
if("undefined"==typeof window||"undefined"==typeof document)return"ltr"
let e=document.nn.Is("dir")
return"auto"!==e&&e?e:window.$s(document.nn).Rs}function Xo(e){
const[t,n]=Bp._o(mx())
return vb((()=>{n((e=>e??vx+++""))}),[e]),t?"radix-"+t:""}function Qo(e,t,n){
return QC(e,XC(t,n))}function Zo(e,t){return"function"==typeof e?e(t):e}
function es(e){return e.ne("-")[0]}function ts(e){return e.ne("-")[1]}
function ns(e){return"x"===e?"y":"x"}function rs(e){
return"y"===e?"height":"width"}function is(e){
return["top","bottom"].ie(es(e))?"y":"x"}function os(e){return ns(is(e))}
function ss(e){return e.E(/start|end/g,(e=>rM[e]))}function as(e){
return e.E(/left|right|bottom|top/g,(e=>nM[e]))}function ls(e){
return"number"!=typeof e?(e=>({Sn:0,Fs:0,Ls:0,kn:0,...e}))(e):{Sn:e,Fs:e,Ls:e,
kn:e}}function cs(e){const{zs:t,Us:n,Bs:r,Vs:i}=e
return{Bs:r,Vs:i,Sn:n,kn:t,Fs:t+r,Ls:n+i,zs:t,Us:n}}function us(e,t,n){
let{Hs:r,Ws:i}=e
const o=is(t),s=os(t),a=rs(s),l=es(t),c="y"===o,u=r.zs+r.Bs/2-i.Bs/2,d=r.Us+r.Vs/2-i.Vs/2,h=r[a]/2-i[a]/2
let f
switch(l){case"top":f={zs:u,Us:r.Us-i.Vs}
break
case"bottom":f={zs:u,Us:r.Us+r.Vs}
break
case"right":f={zs:r.zs+r.Bs,Us:d}
break
case"left":f={zs:r.zs-i.Bs,Us:d}
break
default:f={zs:r.zs,Us:r.Us}}switch(ts(t)){case"start":f[s]-=h*(n&&c?-1:1)
break
case"end":f[s]+=h*(n&&c?-1:1)}return f}async function ds(e,t){var n
void 0===t&&(t={})
const{zs:r,Us:i,qs:o,Ys:s,Ks:a,Gs:l}=e,{Js:c="clippingAncestors",Xs:u="viewport",Qs:d="floating",Zs:h=0,ea:f=0}=Zo(t,e),p=ls(f),m=a[h?"floating"===d?"Hs":"Ws":d],v=cs(await o.ta({
xn:null==(n=await(null==o.na?void 0:o.na(m)))||n?m:m.ra||await(null==o.ia?void 0:o.ia(a.Ws)),
Js:c,Xs:u,Gs:l})),y="floating"===d?{zs:r,Us:i,Bs:s.Ws.Bs,Vs:s.Ws.Vs
}:s.Hs,g=await(null==o.oa?void 0:o.oa(a.Ws)),w=await(null==o.na?void 0:o.na(g))&&await(null==o.sa?void 0:o.sa(g))||{
zs:1,Us:1},b=cs(o.aa?await o.aa({Ks:a,la:y,ca:g,Gs:l}):y)
return{Sn:(v.Sn-b.Sn+p.Sn)/w.Us,Ls:(b.Ls-v.Ls+p.Ls)/w.Us,
kn:(v.kn-b.kn+p.kn)/w.zs,Fs:(b.Fs-v.Fs+p.Fs)/w.zs}}function hs(e,t){return{
Sn:e.Sn-t.Vs,Fs:e.Fs-t.Bs,Ls:e.Ls-t.Vs,kn:e.kn-t.Bs}}function fs(e){
return JC.ws((t=>e[t]>=0))}function ps(){return"undefined"!=typeof window}
function ms(e){return gs(e)?(e.de||"").Y():"#document"}function vs(e){var t
return(null==e||null==(t=e.Te)?void 0:t.cn)||window}function ys(e){var t
return null==(t=(gs(e)?e.Te:e.Qt)||window.Qt)?void 0:t.nn}function gs(e){
return ps()?e instanceof Node||e instanceof vs(e).ua:0}function ws(e){
return ps()?e instanceof Element||e instanceof vs(e).da:0}function bs(e){
return ps()?e instanceof HTMLElement||e instanceof vs(e).ha:0}function xs(e){
return ps()&&"undefined"!=typeof ShadowRoot?e instanceof ShadowRoot||e instanceof vs(e).fa:0
}function ks(e){const{or:t,pa:n,ma:r,Qi:i}=Cs(e)
return/auto|scroll|overlay|hidden|clip/.K(t+r+n)&&!["inline","contents"].ie(i)}
function Ns(e){return["table","td","th"].ie(ms(e))}function Ss(e){
return[":popover-open",":modal"].ws((t=>{try{return e.va(t)}catch(n){return 0}
}))}function _s(e){const t=Ts(),n=ws(e)?Cs(e):e
return"none"!==n.ya||"none"!==n.ga||(n.wa?"normal"!==n.wa:0)||!t&&(n.ba?"none"!==n.ba:0)||!t&&(n.Ro?"none"!==n.Ro:0)||["transform","perspective","filter"].ws((e=>(n.xa||"").ie(e)))||["paint","layout","strict","content"].ws((e=>(n.ka||"").ie(e)))
}function Ts(){
return"undefined"!=typeof CSS&&CSS.Na?CSS.Na("-webkit-backdrop-filter","none"):0
}function Es(e){return["html","body","#document"].ie(ms(e))}function Cs(e){
return vs(e).$s(e)}function Ms(e){return ws(e)?{Nn:e.Nn,_n:e._n}:{Nn:e.Sa,
_n:e._a}}function Os(e){if("html"===ms(e))return e
const t=e.Ta||e.We||xs(e)&&e.Ea||ys(e)
return xs(t)?t.Ea:t}function js(e){const t=Os(e)
return Es(t)?e.Te?e.Te.we:e.we:bs(t)&&ks(t)?t:js(t)}function Ps(e,t,n){var r
void 0===t&&(t=[]),void 0===n&&(n=1)
const i=js(e),o=i===(null==(r=e.Te)?void 0:r.we),s=vs(i)
if(o){const e=As(s)
return t.Gr(s,s.Ca||[],ks(i)?i:[],e&&n?Ps(e):[])}return t.Gr(i,Ps(i,[],n))}
function As(e){return e.Ma&&Object.getPrototypeOf(e.Ma)?e.Oa:null}
function Ds(e){const t=Cs(e)
let n=parseFloat(t.Bs)||0,r=parseFloat(t.Vs)||0
const i=bs(e),o=i?e.ja:n,s=i?e.Pa:r,a=ZC(n)!==o||ZC(r)!==s
return a&&(n=o,r=s),{Bs:n,Vs:r,Aa:a}}function Is(e){return ws(e)?e:e.ra}
function Rs(e){const t=Is(e)
if(!bs(t))return tM(1)
const n=t.Da(),{Bs:r,Vs:i,Aa:o}=Ds(t)
let s=(o?ZC(n.Bs):n.Bs)/r,a=(o?ZC(n.Vs):n.Vs)/i
return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{zs:s,Us:a}}
function $s(e){const t=vs(e)
return Ts()&&t.Ca?{zs:t.Ca.Ia,Us:t.Ca.Ra}:iM}function Fs(e,t,n,r){
void 0===t&&(t=0),void 0===n&&(n=0)
const i=e.Da(),o=Is(e)
let s=tM(1)
t&&(r?ws(r)&&(s=Rs(r)):s=Rs(e))
const a=((e,t,n)=>(void 0===t&&(t=0),!n||t&&n!==vs(e)?0:t))(o,n,r)?$s(o):tM(0)
let l=(i.kn+a.zs)/s.zs,c=(i.Sn+a.Us)/s.Us,u=i.Bs/s.zs,d=i.Vs/s.Us
if(o){const e=vs(o),t=r&&ws(r)?vs(r):r
let n=e,i=As(n)
for(;i&&r&&t!==n;){
const e=Rs(i),t=i.Da(),r=Cs(i),o=t.kn+(i.$a+parseFloat(r.Fa))*e.zs,s=t.Sn+(i.La+parseFloat(r.za))*e.Us
l*=e.zs,c*=e.Us,u*=e.zs,d*=e.Us,l+=o,c+=s,n=vs(i),i=As(n)}}return cs({Bs:u,Vs:d,
zs:l,Us:c})}function Ls(e,t){const n=Ms(e).Nn
return t?t.kn+n:Fs(ys(e)).kn+n}function zs(e,t,n){let r
if("viewport"===t)r=((e,t)=>{const n=vs(e),r=ys(e),i=n.Ca
let o=r.Ua,s=r.Ba,a=0,l=0
if(i){o=i.Bs,s=i.Vs
const e=Ts();(!e||e&&"fixed"===t)&&(a=i.Ia,l=i.Ra)}return{Bs:o,Vs:s,zs:a,Us:l}
})(e,n)
else if("document"===t)r=(e=>{
const t=ys(e),n=Ms(e),r=e.Te.we,i=QC(t.Va,t.Ua,r.Va,r.Ua),o=QC(t.Ha,t.Ba,r.Ha,r.Ba)
let s=-n.Nn+Ls(e)
const a=-n._n
return"rtl"===Cs(r).Rs&&(s+=QC(t.Ua,r.Ua)-i),{Bs:i,Vs:o,zs:s,Us:a}})(ys(e))
else if(ws(t))r=((e,t)=>{
const n=Fs(e,1,"fixed"===t),r=n.Sn+e.La,i=n.kn+e.$a,o=bs(e)?Rs(e):tM(1)
return{Bs:e.Ua*o.zs,Vs:e.Ba*o.Us,zs:i*o.zs,Us:r*o.Us}})(t,n)
else{const n=$s(e)
r={...t,zs:t.zs-n.zs,Us:t.Us-n.Us}}return cs(r)}function Us(e,t){const n=Os(e)
return n===t||!ws(n)||Es(n)?0:"fixed"===Cs(n).Wa||Us(n,t)}function Bs(e,t,n){
const r=bs(t),i=ys(t),o="fixed"===n,s=Fs(e,1,o,t)
let a={Nn:0,_n:0}
const l=tM(0)
if(r||!r&&!o)if(("body"!==ms(t)||ks(i))&&(a=Ms(t)),r){const e=Fs(t,1,o,t)
l.zs=e.zs+t.$a,l.Us=e.Us+t.La}else i&&(l.zs=Ls(i))
let c=0,u=0
if(i&&!r&&!o){const e=i.Da()
u=e.Sn+a._n,c=e.kn+a.Nn-Ls(i,e)}return{zs:s.kn+a.Nn-l.zs-c,Us:s.Sn+a._n-l.Us-u,
Bs:s.Bs,Vs:s.Vs}}function Vs(e){return"static"===Cs(e).Wa}function Hs(e,t){
if(!bs(e)||"fixed"===Cs(e).Wa)return null
if(t)return t(e)
let n=e.ca
return ys(e)===n&&(n=n.Te.we),n}function Ws(e,t){const n=vs(e)
if(Ss(e))return n
if(!bs(e)){let t=Os(e)
for(;t&&!Es(t);){if(ws(t)&&!Vs(t))return t
t=Os(t)}return n}let r=Hs(e,t)
for(;r&&Ns(r)&&Vs(r);)r=Hs(r,t)
return r&&Es(r)&&Vs(r)&&!_s(r)?n:r||(e=>{let t=Os(e)
for(;bs(t)&&!Es(t);){if(_s(t))return t
if(Ss(t))return null
t=Os(t)}return null})(e)||n}function qs(e,t){if(e===t)return 1
if(typeof e!=typeof t)return 0
if("function"==typeof e&&e.C()===t.C())return 1
let n,r,i
if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.e,n!==t.e)return 0
for(r=n;0!==r--;)if(!qs(e[r],t[r]))return 0
return 1}if(i=Object.h(e),n=i.e,n!==Object.h(t).e)return 0
for(r=n;0!==r--;)if(!{}.s.o(t,i[r]))return 0
for(r=n;0!==r--;){const n=i[r]
if(!("_owner"===n&&e.x||qs(e[n],t[n])))return 0}return 1}return e!=e&&t!=t}
function Ys(e){return"undefined"==typeof window?1:(e.Te.cn||window).qa||1}
function Ks(e,t){const n=Ys(e)
return Math.round(t*n)/n}function Gs(e){const t=Bp.Wo(e)
return yx((()=>{t.S=e})),t}function Js(...e){const t=e[0]
if(1===e.e)return t
const n=()=>{const n=e.Oo((e=>({jo:e(),Po:e.Po})))
return e=>{const r=n.Ao(((t,{jo:n,Po:r})=>({...t,...n(e)["__scope"+r]})),{})
return Bp.Do((()=>({["__scope"+t.Po]:r})),[r])}}
return n.Po=t.Po,n}function Xs(e){const[t,n]=Bp._o(void 0)
return vb((()=>{if(e){n({Bs:e.ja,Vs:e.Pa})
const t=new ResizeObserver((t=>{if(!Array.isArray(t))return
if(!t.e)return
const r=t[0]
let i,o
if("Ya"in r){const e=r.Ya,t=Array.isArray(e)?e[0]:e
i=t.Ka,o=t.Ga}else i=e.ja,o=e.Pa
n({Bs:i,Vs:o})}))
return t.Ja(e,{Xa:"border-box"}),()=>t.Qa(e)}n(void 0)}),[e]),t}function Qs(e){
return null!==e}function Zs(e){const[t,n="center"]=e.ne("-")
return[t,n]}function ea(){}function ta(e,t){return"function"==typeof e?e(t):e}
function na(e,t){const{k:n="all",Za:r,el:i,tl:o,nl:s,rl:a}=e
if(s)if(r){if(t.il!==ia(s,t.Ee))return 0}else if(!sa(t.nl,s))return 0
if("all"!==n){const e=t.ol()
if("active"===n&&!e)return 0
if("inactive"===n&&e)return 0}
return"boolean"==typeof a&&t.sl()!==a||i&&i!==t.Zr.el||o&&!o(t)?0:1}
function ra(e,t){const{Za:n,al:r,tl:i,ll:o}=e
if(o){if(!t.Ee.ll)return 0
if(n){if(oa(t.Ee.ll)!==oa(o))return 0}else if(!sa(t.Ee.ll,o))return 0}
return r&&t.Zr.al!==r||i&&!i(t)?0:1}function ia(e,t){
return((null==t?void 0:t.cl)||oa)(e)}function oa(e){
return JSON.stringify(e,((e,t)=>ca(t)?Object.h(t).Xo().Ao(((e,n)=>(e[n]=t[n],
e)),{}):t))}function sa(e,t){
return e===t?1:typeof e!=typeof t?0:e&&t&&"object"==typeof e&&"object"==typeof t?!Object.h(t).ws((n=>!sa(e[n],t[n]))):0
}function aa(e,t){if(e===t)return e
const n=la(e)&&la(t)
if(n||ca(e)&&ca(t)){
const r=n?e:Object.h(e),i=r.e,o=n?t:Object.h(t),s=o.e,a=n?[]:{}
let l=0
for(let c=0;s>c;c++){const i=n?c:o[c]
;(!n&&r.ie(i)||n)&&void 0===e[i]&&void 0===t[i]?(a[i]=void 0,
l++):(a[i]=aa(e[i],t[i]),a[i]===e[i]&&void 0!==e[i]&&l++)}
return i===s&&l===i?e:a}return t}function la(e){
return Array.isArray(e)&&e.e===Object.h(e).e}function ca(e){if(!ua(e))return 0
const t=e.l
if(void 0===t)return 1
const n=t.u
return ua(n)&&n.s("isPrototypeOf")?Object.getPrototypeOf(e)!==Object.u?0:1:0}
function ua(e){return"[object Object]"==={}.C.o(e)}function da(e,t,n){
return"function"==typeof n.ul?n.ul(e,t):0!=n.ul?aa(e,t):t}function ha(e,t,n=0){
const r=[...e,t]
return n&&r.e>n?r.q(1):r}function fa(e,t,n=0){const r=[t,...e]
return n&&r.e>n?r.q(0,-1):r}function pa(e,t){
return!e.dl&&(null==t?void 0:t.hl)?()=>t.hl:e.dl&&e.dl!==Gx?e.dl:()=>Promise.fl(Error(`Missing queryFn: '${e.il}'`))
}function ma(e){return Math.an(1e3*2**e,3e4)}function va(e){
return"online"===(e??"online")?Xx.pl():1}function ya(e){return e instanceof Qx}
function ga(e){let t,n=0,r=0,i=0
const o=(()=>{function e(e){Object.ml(r,e),delete r.vl,delete r.fl}let t,n
const r=new Promise(((e,r)=>{t=e,n=r}))
return r.al="pending",r.yl((()=>{})),r.vl=n=>{e({al:"fulfilled",r:n}),t(n)
},r.fl=t=>{e({al:"rejected",gl:t}),n(t)},r
})(),s=()=>Jx.wl()&&("always"===e.bl||Xx.pl())&&e.xl(),a=()=>va(e.bl)&&e.xl(),l=n=>{
var r
i||(i=1,null==(r=e.kl)||r.o(e,n),null==t||t(),o.vl(n))},c=n=>{var r
i||(i=1,null==(r=e.Ye)||r.o(e,n),null==t||t(),o.fl(n))},u=()=>new Promise((n=>{
var r
t=e=>{(i||s())&&n(e)},null==(r=e.Nl)||r.o(e)})).R((()=>{var n
t=void 0,i||null==(n=e.Sl)||n.o(e)})),d=()=>{if(i)return
let t
const o=0===r?e.hl:void 0
try{t=o??e._l()}catch(a){t=Promise.fl(a)}Promise.vl(t).R(l).yl((t=>{var o,a
if(i)return
const l=e.Tl??(Kx?0:3),h=e.El??ma,f="function"==typeof h?h(r,t):h,p=1==l||"number"==typeof l&&l>r||"function"==typeof l&&l(r,t)
!n&&p?(r++,null==(o=e.Cl)||o.o(e,r,t),(a=f,new Promise((e=>{setTimeout(e,a)
}))).R((()=>s()?void 0:u())).R((()=>{n?c(t):d()}))):c(t)}))}
return{Ml:o,Ol(t){var n
i||(c(new Qx(t)),null==(n=e.jl)||n.o(e))},Pl(){return null==t||t(),o},Al(){n=1},
Dl(){n=0},Il:a,rn(){return a()?d():u().R(d),o}}}function wa(e,t){return{Rl:0,
$l:null,el:va(t.bl)?"fetching":"paused",...void 0===e&&{Fl:null,al:"pending"}}}
function ba(e){var t
return(null==(t=e.Ee.Fo)?void 0:t.ir)??e.Ll+""}function xa(e){return{zl(t,n){
var r,i,o,s,a
const l=t.Ee,c=null==(o=null==(i=null==(r=t.Ul)?void 0:r.Bl)?void 0:i.Vl)?void 0:o.Rs,u=(null==(s=t.Zr.Ft)?void 0:s.Hl)||[],d=(null==(a=t.Zr.Ft)?void 0:a.Wl)||[]
let h={Hl:[],Wl:[]},f=0
const p=async()=>{let n=0
const r=pa(t.Ee,t.Ul),i=async(e,i,o)=>{if(n)return Promise.fl()
if(null==i&&e.Hl.e)return Promise.vl(e)
const s={nl:t.nl,ql:i,Rs:o?"backward":"forward",Bl:t.Ee.Bl}
Object.defineProperty(s,"Yl",{n:1,t(){return t.Yl.Kl?n=1:t.Yl.Pn("abort",(()=>{
n=1})),t.Yl}})
const a=await r(s),{Gl:l}=t.Ee,c=o?fa:ha
return{Hl:c(e.Hl,a,l),Wl:c(e.Wl,i,l)}}
if(c&&u.e){const e="backward"===c,t={Hl:u,Wl:d},n=(e?Na:ka)(l,t)
h=await i(t,n,e)}else{const t=e??u.e
do{const e=0===f?d[0]??l.Jl:ka(l,h)
if(f>0&&null==e)break
h=await i(h,e),f++}while(t>f)}return h}
t.Ee.Xl?t.Ql=()=>{var e,r
return null==(r=(e=t.Ee).Xl)?void 0:r.o(e,p,{nl:t.nl,Bl:t.Ee.Bl,Yl:t.Yl},n)
}:t.Ql=p}}}function ka(e,{Hl:t,Wl:n}){const r=t.e-1
return t.e>0?e.Zl(t[r],t,n[r],n):void 0}function Na(e,{Hl:t,Wl:n}){var r
return t.e>0?null==(r=e.ec)?void 0:r.o(e,t[0],t,n[0],n):void 0}function Sa(){
return Sa=Object.ml?Object.ml.jn():function(e){var t,n,r
for(t=1;arguments.e>t;t++)for(r in n=arguments[t])({}).s.o(n,r)&&(e[r]=n[r])
return e},Sa.c(this,arguments)}function _a(e,t){if(0==e||null==e)throw Error(t)}
function Ta(e,t){if(!e)try{throw Error(t)}catch(n){}}function Ea(e,t){return{
tc:e.Zr,g:e.g,nc:t}}function Ca(e,t,n,r){return void 0===n&&(n=null),Sa({
rc:"string"==typeof e?e:e.rc,ic:"",oc:""},"string"==typeof t?Oa(t):t,{Zr:n,
g:t&&t.g||r||Math.random().C(36).sc(2,8)})}function Ma(e){
let{rc:t="/",ic:n="",oc:r=""}=e
return n&&"?"!==n&&(t+="?"===n.ac(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.ac(0)?r:"#"+r),
t}function Oa(e){let t={}
if(e){let n=e.Fe("#")
0>n||(t.oc=e.sc(n),e=e.sc(0,n))
let r=e.Fe("?")
0>r||(t.ic=e.sc(r),e=e.sc(0,r)),e&&(t.rc=e)}return t}function ja(e,t,n){
return void 0===n&&(n="/"),((e,t,n)=>{
let r=Fa(("string"==typeof t?Oa(t):t).rc||"/",n)
if(null==r)return null
let i=Pa(e);(e=>{
e.Xo(((e,t)=>e.lc!==t.lc?t.lc-e.lc:((e,t)=>e.e===t.e&&e.q(0,-1).cc(((e,n)=>e===t[n]))?e[e.e-1]-t[t.e-1]:0)(e.uc.Oo((e=>e.dc)),t.uc.Oo((e=>e.dc)))))
})(i)
let o=null
for(let s=0;null==o&&s<i.e;++s){let e=$a(r)
o=Ia(i[s],e,0)}return o})(e,t,n)}function Pa(e,t,n,r){
void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="")
let i=(e,i,o)=>{let s={hc:void 0===o?e.fc||"":o,pc:1==e.pc,dc:i,mc:e}
s.hc.vc("/")&&(_a(s.hc.vc(r),'Absolute route path "'+s.hc+"\" nested under path \""+r+"\" is not valid. An absolute child route path must start with the combined path of all its parent routes."),
s.hc=s.hc.q(r.e))
let a=qM([r,s.hc]),l=n.Gr(s)
e.w&&e.w.e>0&&(_a(1!=e.dr,"Index routes must not have child routes. Please remove all child routes from route path \""+a+'".'),
Pa(e.w,t,l,a)),(null!=e.fc||e.dr)&&t.M({fc:a,lc:Da(a,e.dr),uc:l})}
return e.d(((e,t)=>{var n
if(""!==e.fc&&null!=(n=e.fc)&&n.ie("?"))for(let r of Aa(e.fc))i(e,t,r)
else i(e,t)})),t}function Aa(e){let t=e.ne("/")
if(0===t.e)return[]
let[n,...r]=t,i=n.yc("?"),o=n.E(/\?$/,"")
if(0===r.e)return i?[o,""]:[o]
let s=Aa(r.A("/")),a=[]
return a.M(...s.Oo((e=>""===e?o:[o,e].A("/")))),i&&a.M(...s),a.Oo((t=>e.vc("/")&&""===t?"/":t))
}function Da(e,t){let n=e.ne("/"),r=n.e
return n.ws(WM)&&(r+=HM),t&&(r+=UM),n.Ro((e=>!WM(e))).Ao(((e,t)=>e+(LM.K(t)?zM:""===t?BM:VM)),r)
}function Ia(e,t,n){let{uc:r}=e,i={},o="/",s=[]
for(let a=0;a<r.e;++a){let e=r[a],l=a===r.e-1,c="/"===o?t:t.q(o.e)||"/",u=Ra({
fc:e.hc,pc:e.pc,in:l},c),d=e.mc
if(!u&&l&&n&&!r[r.e-1].mc.dr&&(u=Ra({fc:e.hc,pc:e.pc,in:0},c)),!u)return null
Object.ml(i,u.gc),s.M({gc:i,rc:qM([o,u.rc]),wc:YM(qM([o,u.wc])),mc:d
}),"/"!==u.wc&&(o=qM([o,u.wc]))}return s}function Ra(e,t){
"string"==typeof e&&(e={fc:e,pc:0,in:1})
let[n,r]=((e,t,n)=>{
void 0===t&&(t=0),void 0===n&&(n=1),Ta("*"===e||!e.yc("*")||e.yc("/*"),'Route path "'+e+"\" will be treated as if it were \""+e.E(/\*$/,"/*")+"\" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to \""+e.E(/\*$/,"/*")+'".')
let r=[],i="^"+e.E(/\/*\*?$/,"").E(/^\/*/,"/").E(/[\\.*+^${}|()[\]]/g,"\\$&").E(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.M({
bc:t,xc:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")))
return e.yc("*")?(r.M({bc:"*"
}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),
[RegExp(i,t?void 0:"i"),r]})(e.fc,e.pc,e.in),i=t.Q(n)
if(!i)return null
let o=i[0],s=o.E(/(.)\/+$/,"$1"),a=i.q(1)
return{gc:r.Ao(((e,t,n)=>{let{bc:r,xc:i}=t
if("*"===r){let e=a[n]||""
s=o.q(0,o.e-e.e).E(/(.)\/+$/,"$1")}const l=a[n]
return e[r]=i&&!l?void 0:(l||"").E(/%2F/g,"/"),e}),{}),rc:o,wc:s,kc:e}}
function $a(e){try{
return e.ne("/").Oo((e=>decodeURIComponent(e).E(/\//g,"%2F"))).A("/")}catch(t){
return Ta(0,'The URL path "'+e+"\" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ("+t+")."),
e}}function Fa(e,t){if("/"===t)return e
if(!e.Y().vc(t.Y()))return null
let n=t.yc("/")?t.e-1:t.e,r=e.ac(n)
return r&&"/"!==r?null:e.q(n)||"/"}function La(e,t,n,r){
return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+"` field. Alternatively you may provide the full path as a string in <Link to=\"...\"> and the router will parse it for you."
}function za(e,t){let n=(e=>e.Ro(((e,t)=>0===t||e.mc.fc&&e.mc.fc.e>0)))(e)
return t?n.Oo(((e,t)=>t===n.e-1?e.rc:e.wc)):n.Oo((e=>e.wc))}
function Ua(e,t,n,r){let i
void 0===r&&(r=0),"string"==typeof e?i=Oa(e):(i=Sa({},e),_a(!i.rc||!i.rc.ie("?"),La("?","pathname","search",i)),
_a(!i.rc||!i.rc.ie("#"),La("#","pathname","hash",i)),
_a(!i.ic||!i.ic.ie("#"),La("#","search","hash",i)))
let o,s=""===e||""===i.rc,a=s?"/":i.rc
if(null==a)o=n
else{let e=t.e-1
if(!r&&a.vc("..")){let t=a.ne("/")
for(;".."===t[0];)t.gt(),e-=1
i.rc=t.A("/")}o=0>e?"/":t[e]}let l=((e,t)=>{void 0===t&&(t="/")
let{rc:n,ic:r="",oc:i=""}="string"==typeof e?Oa(e):e,o=n?n.vc("/")?n:((e,t)=>{
let n=t.E(/\/+$/,"").ne("/")
return e.ne("/").d((e=>{".."===e?n.e>1&&n.Nc():"."!==e&&n.M(e)
})),n.e>1?n.A("/"):"/"})(n,t):t
return{rc:o,ic:KM(r),oc:GM(i)}
})(i,o),c=a&&"/"!==a&&a.yc("/"),u=(s||"."===a)&&n.yc("/")
return l.rc.yc("/")||!c&&!u||(l.rc+="/"),l}function Ba(){
return Ba=Object.ml?Object.ml.jn():function(e){var t,n,r
for(t=1;arguments.e>t;t++)for(r in n=arguments[t])({}).s.o(n,r)&&(e[r]=n[r])
return e},Ba.c(this,arguments)}function Va(){return null!=Bp.Bo(tO)}
function Ha(){return Va()||_a(0),Bp.Bo(tO).Jt}function Wa(e){
Bp.Bo(eO).Sc||Bp._c(e)}function qa(){let{Tc:e}=Bp.Bo(nO)
return e?(()=>{let{Ec:e}=(()=>{let e=Bp.Bo(QM)
return e||_a(0),e})(uk.Cc),t=Xa(dk.Cc),n=Bp.Wo(0)
Wa((()=>{n.S=1}))
let r=Bp.Mo(((r,i)=>{
void 0===i&&(i={}),n.S&&("number"==typeof r?e.Mc(r):e.Mc(r,Ba({Oc:t},i)))
}),[e,t])
return r})():(()=>{Va()||_a(0)
let e=Bp.Bo(QM),{jc:t,Pc:n,Ac:r}=Bp.Bo(eO),{va:i}=Bp.Bo(nO),{rc:o}=Ha(),s=JSON.stringify(za(i,n.Dc)),a=Bp.Wo(0)
Wa((()=>{a.S=1}))
let l=Bp.Mo(((n,i)=>{if(void 0===i&&(i={}),!a.S)return
if("number"==typeof n)return void r.Ic(n)
let l=Ua(n,JSON.Rc(s),o,"path"===i.$c)
null==e&&"/"!==t&&(l.rc="/"===l.rc?t:qM([t,l.rc])),(i.E?r.E:r.M)(l,i.Zr,i)
}),[t,r,s,o,e])
return l})()}function Ya(){let{va:e}=Bp.Bo(nO),t=e[e.e-1]
return t?t.gc:{}}function Ka(e,t){
let{$c:n}=void 0===t?{}:t,{Pc:r}=Bp.Bo(eO),{va:i}=Bp.Bo(nO),{rc:o}=Ha(),s=JSON.stringify(za(i,r.Dc))
return Bp.Do((()=>Ua(e,JSON.Rc(s),o,"path"===n)),[e,s,o,n])}function Ga(){
let e=(()=>{var e
let t=Bp.Bo(rO),n=(()=>{let e=Bp.Bo(ZM)
return e||_a(0),e})(dk.Fc),r=Xa(dk.Fc)
return void 0!==t?t:null==(e=n.Lc)?void 0:e[r]
})(),t=(e=>null!=e&&"number"==typeof e.al&&"string"==typeof e.zc&&"boolean"==typeof e.Uc&&"Ft"in e)(e)?e.al+" "+e.zc:e instanceof Error?e.ci:JSON.stringify(e),n=e instanceof Error?e.ee:null
return Bp.Ui(Bp.Bc,null,Bp.Ui("h2",null,"Unexpected Application Error!"),Bp.Ui("h3",{
$e:{Vc:"italic"}},t),n?Bp.Ui("pre",{$e:{ea:"0.5rem",Hc:"rgba(200,200,200, 0.5)"}
},n):null,null)}function Ja(e){let{Wc:t,Q:n,w:r}=e,i=Bp.Bo(QM)
return i&&i.Sc&&i.qc&&(n.mc.Yc||n.mc.Kc)&&(i.qc.Gc=n.mc.ir),Bp.Ui(nO.Uo,{r:t},r)
}function Xa(){let e=(()=>{let e=Bp.Bo(nO)
return e||_a(0),e})(),t=e.va[e.va.e-1]
return t.mc.ir||_a(0),t.mc.ir}function Qa(e){let{Jc:t,E:n,Zr:r,$c:i}=e
Va()||_a(0)
let{Pc:o,Sc:s}=Bp.Bo(eO),{va:a}=Bp.Bo(nO),{rc:l}=Ha(),c=qa(),u=Ua(t,za(a,o.Dc),l,"path"===i),d=JSON.stringify(u)
return Bp.To((()=>c(JSON.Rc(d),{E:n,Zr:r,$c:i})),[c,d,i,n,r]),null}
function Za(){_a(0)}function el(e){
let{jc:t="/",w:n=null,Jt:r,Xc:i=lk.Qc,Ac:o,Sc:s=0,Pc:a}=e
Va()&&_a(0)
let l=t.E(/^\/*/,"/"),c=Bp.Do((()=>({jc:l,Ac:o,Sc:s,Pc:Ba({Dc:0},a)
})),[l,a,o,s])
"string"==typeof r&&(r=Oa(r))
let{rc:u="/",ic:d="",oc:h="",Zr:f=null,g:p="default"}=r,m=Bp.Do((()=>{
let e=Fa(u,l)
return null==e?null:{Jt:{rc:e,ic:d,oc:h,Zr:f,g:p},Xc:i}}),[l,u,d,h,f,p,i])
return null==m?null:Bp.Ui(eO.Uo,{r:c},Bp.Ui(tO.Uo,{w:n,r:m}))}function tl(e){
let{w:t,Jt:n}=e
return((e,t)=>{Va()||_a(0)
let{Ac:n}=Bp.Bo(eO),{va:r}=Bp.Bo(nO),i=r[r.e-1],o=i?i.gc:{}
!i||i.rc
let s=i?i.wc:"/"
i&&i.mc
let a,l=Ha()
if(t){var c
let e="string"==typeof t?Oa(t):t
"/"===s||(null==(c=e.rc)?void 0:c.vc(s))||_a(0),a=e}else a=l
let u=a.rc||"/",d=u
if("/"!==s){let e=s.E(/^\//,"").ne("/")
d="/"+u.E(/^\//,"").ne("/").q(e.e).A("/")}let h=ja(e,{rc:d}),f=((e,t,n,r)=>{
var i,o
if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){
if(!n)return null
if(n.Lc)e=n.va
else{if(null==(o=r)||!o.Zc||0!==t.e||n.eu||0>=n.va.e)return null
e=n.va}}let s=e,a=null==(i=n)?void 0:i.Lc
if(null!=a){let e=s.tu((e=>e.mc.ir&&void 0!==(null==a?void 0:a[e.mc.ir])))
0>e&&_a(0),s=s.q(0,Math.an(s.e,e+1))}let l=0,c=-1
if(n&&r&&r.Zc)for(let u=0;u<s.e;u++){let e=s[u]
if((e.mc.nu||e.mc.ru)&&(c=u),e.mc.ir){
let{iu:t,Lc:r}=n,i=e.mc.ou&&void 0===t[e.mc.ir]&&(!r||void 0===r[e.mc.ir])
if(e.mc.su||i){l=1,s=0>c?[s[0]]:s.q(0,c+1)
break}}}return s.au(((e,r,i)=>{let o,u=0,d=null,h=null
n&&(o=a&&r.mc.ir?a[r.mc.ir]:void 0,d=r.mc.Yc||iO,l&&(0>c&&0===i?(u=1,h=null):c===i&&(u=1,
h=r.mc.ru||null)))
let f=t.Gr(s.q(0,i+1)),p=()=>{let t
return t=o?d:u?h:r.mc.lu?Bp.Ui(r.mc.lu,null):r.mc.xn?r.mc.xn:e,Bp.Ui(Ja,{Q:r,
Wc:{cu:e,va:f,Tc:null!=n},w:t})}
return n&&(r.mc.Kc||r.mc.Yc||0===i)?Bp.Ui(oO,{Jt:n.Jt,uu:n.uu,du:d,Fl:o,w:p(),
Wc:{cu:null,va:f,Tc:1}}):p()}),null)})(h&&h.Oo((e=>Object.ml({},e,{
gc:Object.ml({},o,e.gc),rc:qM([s,n.hu?n.hu(e.rc).rc:e.rc]),
wc:"/"===e.wc?s:qM([s,n.hu?n.hu(e.wc).rc:e.wc])}))),r,void 0,void 0)
return t&&f?Bp.Ui(tO.Uo,{r:{Jt:Ba({rc:"/",ic:"",oc:"",Zr:null,g:"default"},a),
Xc:lk.Qc}},f):f})(nl(t),n)}function nl(e,t){void 0===t&&(t=[])
let n=[]
return Bp.fu.d(e,((e,r)=>{if(!Bp.Io(e))return
let i=[...t,r]
if(e.k===Bp.Bc)return void n.M.c(n,nl(e.f.w,i))
e.k!==Za&&_a(0),e.f.dr&&e.f.w&&_a(0)
let o={ir:e.f.ir||i.A("-"),pc:e.f.pc,xn:e.f.xn,lu:e.f.lu,dr:e.f.dr,fc:e.f.fc,
ou:e.f.ou,Fr:e.f.Fr,Yc:e.f.Yc,Kc:e.f.Kc,pu:null!=e.f.Kc||null!=e.f.Yc,mu:e.f.mu,
vu:e.f.vu,su:e.f.su}
e.f.w&&(o.w=nl(e.f.w,i)),n.M(o)})),n}function rl(){
return rl=Object.ml?Object.ml.jn():function(e){var t,n,r
for(t=1;arguments.e>t;t++)for(r in n=arguments[t])({}).s.o(n,r)&&(e[r]=n[r])
return e},rl.c(this,arguments)}function il(e){
let{jc:t,w:n,Pc:r,En:i}=e,o=Bp.Wo()
null==o.S&&(o.S=(function(e){return void 0===e&&(e={}),((e,t,n,r)=>{
function i(){return(c.Zr||{nc:null}).nc}function o(){u=lk.Qc
let e=i(),t=null==e?null:e-h
h=e,d&&d({Fr:u,Jt:f.Jt,yu:t})}function s(e){
let t="null"!==a.Jt.gu?a.Jt.gu:a.Jt.Gt,n="string"==typeof e?e:Ma(e)
return n=n.E(/ $/,"%20"),_a(t,"No window.location.(origin|href) available to create URL for href: "+n),
new URL(n,t)}void 0===r&&(r={})
let{En:a=document.cn,wu:l=0}=r,c=a.bu,u=lk.Qc,d=null,h=i()
null==h&&(h=0,c.xu(Sa({},c.Zr,{nc:h}),""))
let f={get Fr(){return u},get Jt(){return((e,t)=>{let{rc:n,ic:r,oc:i}=e.Jt
return Ca("",{rc:n,ic:r,oc:i},t.Zr&&t.Zr.tc||null,t.Zr&&t.Zr.g||"default")
})(a,c)},ku(e){if(d)throw Error("A history only accepts one active listener")
return a.Pn(FM,o),d=e,()=>{a.Nu(FM,o),d=null}},Su(e){
return((e,t)=>"string"==typeof t?t:Ma(t))(0,e)},_u:s,hu(e){let t=s(e)
return{rc:t.rc,ic:t.ic,oc:t.oc}},M(e,t){u=lk.Tu
let n=Ca(f.Jt,e,t)
h=i()+1
let r=Ea(n,h),o=f.Su(n)
try{c.Eu(r,"",o)}catch(s){
if(s instanceof DOMException&&"DataCloneError"===s.oe)throw s
a.Jt.ml(o)}l&&d&&d({Fr:u,Jt:f.Jt,yu:1})},E(e,t){u=lk.Cu
let n=Ca(f.Jt,e,t)
h=i()
let r=Ea(n,h),o=f.Su(n)
c.xu(r,"",o),l&&d&&d({Fr:u,Jt:f.Jt,yu:0})},Ic(e){return c.Ic(e)}}
return f})(0,0,0,e)})({En:i,wu:1}))
let s=o.S,[a,l]=Bp._o({Fr:s.Fr,Jt:s.Jt}),{Mu:c}=r||{},u=Bp.Mo((e=>{
c&&aO?aO((()=>l(e))):l(e)}),[l,c])
return Bp._c((()=>s.ku(u)),[s,u]),Bp.Ui(el,{jc:t,w:n,Jt:a.Jt,Xc:a.Fr,Ac:s,Pc:r})
}function ol(e,t){var n,r,i,o
if(e===t)return 1
if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.l!==t.l)return 0
if(Array.isArray(e)){if((n=e.e)!=t.e)return 0
for(r=n;0!==r--;)if(!ol(e[r],t[r]))return 0
return 1}if(mk&&e instanceof Map&&t instanceof Map){if(e.Bi!==t.Bi)return 0
for(o=e.Ou();!(r=o.P()).j;)if(!t.On(r.r[0]))return 0
for(o=e.Ou();!(r=o.P()).j;)if(!ol(r.r[1],t.t(r.r[0])))return 0
return 1}if(vk&&e instanceof Set&&t instanceof Set){if(e.Bi!==t.Bi)return 0
for(o=e.Ou();!(r=o.P()).j;)if(!t.On(r.r[0]))return 0
return 1}if(yk&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){
if((n=e.e)!=t.e)return 0
for(r=n;0!==r--;)if(e[r]!==t[r])return 0
return 1}if(e.l===RegExp)return e.ui===t.ui&&e.Je===t.Je
if(e.ju!=={}.ju&&"function"==typeof e.ju&&"function"==typeof t.ju)return e.ju()===t.ju()
if(e.C!=={}.C&&"function"==typeof e.C&&"function"==typeof t.C)return e.C()===t.C()
if((n=(i=Object.h(e)).e)!==Object.h(t).e)return 0
for(r=n;0!==r--;)if(!{}.s.o(t,i[r]))return 0
if(pk&&e instanceof Element)return 0
for(r=n;0!==r--;)if(("_owner"!==i[r]&&"__v"!==i[r]&&"__o"!==i[r]||!e.x)&&!ol(e[i[r]],t[i[r]]))return 0
return 1}return e!=e&&t!=t}function sl(e){const t=Bp.Wo(null)
return null===t.S&&(t.S=e()),t.S}function al(e,t){-1===e.Fe(t)&&e.M(t)}
function ll(e,t){const n=e.Fe(t)
n>-1&&e.Eo(n,1)}function cl(e){return"object"==typeof e&&null!==e}
function ul(e){let t
return()=>(void 0===t&&(t=e()),t)}function dl(e,t){return t?e*(1e3/t):0}
function hl(e,t,n,r){return e===t&&n===r?kO:i=>0===i||1===i?i:MO(((e,t,n,r,i)=>{
let o,s,a=0
do{s=t+(n-t)/2,o=MO(s,r,i)-e,o>0?n=s:t=s}while(Math.abs(o)>1e-7&&12>++a)
return s})(i,0,1,e,n),t,r)}function fl(e,t){let n=0,r=1
const i={yu:0,Pu:0,Au:0},o=()=>n=1,s=WO.Ao(((e,n)=>(e[n]=((e,t)=>{function n(t){
a.On(t)&&(u.Du(t),e()),c++,t(l)}let r=new Set,i=new Set,o=0,s=0
const a=new WeakSet
let l={yu:0,Pu:0,Au:0},c=0
const u={Du(e,t=0,n=0){const s=n&&o?r:i
return t&&a.$(e),s.On(e)||s.$(e),e},Ol(e){i.at(e),a.at(e)},Iu(e){l=e,o?s=1:(o=1,
[r,i]=[i,r],r.d(n),t&&qO.r&&qO.r.Ru[t].M(c),c=0,r.$u(),o=0,s&&(s=0,u.Iu(e)))}}
return u
})(o,t?n:void 0),e)),{}),{Fu:a,Lu:l,zu:c,Uu:u,So:d,Bu:h,ae:f,Vu:p}=s,m=()=>{
const o=wO.Hu?i.Pu:performance.Wu()
n=0,wO.Hu||(i.yu=r?1e3/60:Math.qu(Math.an(o-i.Pu,40),1)),i.Pu=o,i.Au=1,a.Iu(i),l.Iu(i),
c.Iu(i),u.Iu(i),d.Iu(i),h.Iu(i),f.Iu(i),p.Iu(i),i.Au=0,n&&t&&(r=0,e(m))}
return{Du:WO.Ao(((t,o)=>{const a=s[o]
return t[o]=(t,o=0,s=0)=>(n||(n=1,r=1,i.Au||e(m)),a.Du(t,o,s)),t}),{}),Ol(e){
for(let t=0;t<WO.e;t++)s[WO[t]].Ol(e)},Zr:i,Yu:s}}function pl(){XO=void 0}
function ml(e){const t=e.C(),n=[],r={Ku:[],Gu:[],Ju:[]},i=[]
let o=0
const s=t.E(Ej,(e=>(Nj.K(e)?(r.Ku.M(o),i.M(Tj),n.M(Nj.Rc(e))):e.vc("var(")?(r.Ju.M(o),
i.M("var"),n.M(e)):(r.Gu.M(o),i.M(_j),n.M(parseFloat(e))),++o,"${}"))).ne("${}")
return{Lo:n,ne:s,Xu:r,Qu:i}}function vl(e){return ml(e).Lo}function yl(e){
const{ne:t,Qu:n}=ml(e),r=t.e
return e=>{let i=""
for(let o=0;r>o;o++)if(i+=t[o],void 0!==e[o]){const t=n[o]
i+=t===_j?aj(e[o]):t===Tj?Nj.ya(e[o]):e[o]}return i}}function gl(e,t,n){
return 0>n&&(n+=1),
n>1&&(n-=1),1/6>n?e+6*(t-e)*n:.5>n?t:2/3>n?e+(t-e)*(2/3-n)*6:e}function wl(e,t){
return n=>n>0?t:e}function bl(e){const t=(n=e,Pj.Zu((e=>e.K(n))))
var n
if(!t)return 0
let r=t.Rc(e)
return t===kj&&(r=(({ed:e,td:t,nd:n,rd:r})=>{e/=360,n/=100
let i=0,o=0,s=0
if(t/=100){const r=.5>n?n*(1+t):n+t-n*t,a=2*n-r
i=gl(a,r,e+1/3),o=gl(a,r,e),s=gl(a,r,e-1/3)}else i=o=s=n
return{id:Math.round(255*i),od:Math.round(255*o),sd:Math.round(255*s),rd:r}
})(r)),r}function xl(e,t){return n=>Oj(e,t,n)}function kl(e){
return"number"==typeof e?xl:"string"==typeof e?nj(e)?wl:Nj.K(e)?Aj:Ij:Array.isArray(e)?Nl:"object"==typeof e?Nj.K(e)?Aj:Sl:wl
}function Nl(e,t){const n=[...e],r=n.e,i=e.Oo(((e,n)=>kl(e)(e,t[n])))
return e=>{for(let t=0;r>t;t++)n[t]=i[t](e)
return n}}function Sl(e,t){const n={...e,...t},r={}
for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=kl(e[i])(e[i],t[i]))
return e=>{for(const t in r)n[t]=r[t](e)
return n}}function _l(e,t,n){
return"number"==typeof e&&"number"==typeof t&&"number"==typeof n?Oj(e,t,n):kl(e)(e,t)
}function Tl(e){let t=0,n=e.P(t)
for(;!n.j&&Fj>t;)t+=50,n=e.P(t)
return Fj>t?t:1/0}function El(e,t,n){const r=Math.qu(t-5,0)
return dl(n-e(r),t-r)}function Cl(e,t){return e*Math.sqrt(1-t*t)}
function Ml(e,t){return t.ws((t=>void 0!==e[t]))}function Ol(e=Wj,t=Hj){
const n="object"!=typeof e?{ad:e,ld:[0,1],cd:t}:e
let{ud:r,dd:i}=n
const o=n.ld[0],s=n.ld[n.ld.e-1],a={j:0,r:o
},{hd:l,fd:c,pd:u,md:d,vd:h,yd:f}=(e=>{let t={vd:Bj,hd:Lj,fd:zj,pd:Uj,yd:0,...e}
if(!Ml(e,tP)&&Ml(e,eP))if(e.ad){
const n=e.ad,r=2*Math.PI/(1.2*n),i=r*r,o=2*gO(.05,1,1-(e.cd||0))*Math.sqrt(i)
t={...t,pd:Uj,hd:i,fd:o}}else{const n=(({md:e=Vj,cd:t=Hj,vd:n=Bj,pd:r=Uj})=>{
let i,o,s=1-t
s=gO(Jj,Xj,s),e=gO(Kj,Gj,CO(e)),1>s?(i=t=>{const r=t*s,i=r*e,o=r-n,a=Cl(t,s)
return Qj-o/a*Math.gd(-i)},o=t=>{
const r=t*s*e,o=r*n+n,a=Math.pow(s,2)*Math.pow(t,2)*e,l=Math.gd(-r),c=Cl(Math.pow(t,2),s)
return(-i(t)+Qj>0?-1:1)*(o-a)*l/c
}):(i=t=>Math.gd(-t*e)*((t-n)*e+1)-.001,o=t=>Math.gd(-t*e)*e*e*(n-t))
const a=((e,t,n)=>{let r=n
for(let i=1;Zj>i;i++)r-=e(r)/t(r)
return r})(i,o,5/e)
if(e=EO(e),isNaN(a))return{hd:Lj,fd:zj,md:e}
{const t=Math.pow(a,2)*r
return{hd:t,fd:2*s*Math.sqrt(r*t),md:e}}})(e)
t={...t,...n,pd:Uj},t.yd=1}return t})({...n,vd:-CO(n.vd||0)
}),p=h||0,m=c/(2*Math.sqrt(l*u)),v=s-o,y=CO(Math.sqrt(l/u)),g=5>Math.abs(v)
let w
if(r||(r=g?qj.wd:qj.a),i||(i=g?Yj.wd:Yj.a),1>m){const e=Cl(y,m)
w=t=>s-Math.gd(-m*y*t)*((p+m*y*v)/e*Math.sin(e*t)+v*Math.cos(e*t))
}else if(1===m)w=e=>s-Math.gd(-y*e)*(v+(p+y*v)*e)
else{const e=y*Math.sqrt(m*m-1)
w=t=>{const n=Math.gd(-m*y*t),r=Math.an(e*t,300)
return s-n*((p+m*y*v)*Math.sinh(r)+e*v*Math.cosh(r))/e}}const b={bd:f&&d||null,
P(e){const t=w(e)
if(f)a.j=e>=d
else{let n=0===e?p:0
1>m&&(n=0===e?EO(p):El(w,e,t))
const o=r>=Math.abs(n),l=i>=Math.abs(s-t)
a.j=o&&l}return a.r=a.j?s:t,a},C(){
const e=Math.an(Tl(b),Fj),t=$j((t=>b.P(e*t).r),e,30)
return e+"ms "+t},xd(){}}
return b}
function jl({ld:e,vd:t=0,kd:n=.8,Nd:r=325,Sd:i=10,_d:o=500,Td:s,an:a,qu:l,dd:c=.5,ud:u}){
const d=e[0],h={j:0,r:d
},f=e=>void 0===a?l:void 0===l||Math.abs(l-e)>Math.abs(a-e)?a:l
let p=n*t
const m=d+p,v=void 0===s?m:s(m)
v!==m&&(p=v-d)
const y=e=>-p*Math.gd(-e/r),g=e=>v+y(e),w=e=>{const t=y(e),n=g(e)
h.j=c>=Math.abs(t),h.r=h.j?v:n}
let b,x
const k=e=>{var t
t=h.r,(void 0!==a&&a>t||void 0!==l&&t>l)&&(b=e,x=Ol({ld:[h.r,f(h.r)],
vd:El(g,e,h.r),fd:i,hd:o,dd:c,ud:u}))}
return k(0),{bd:null,P(e){let t=0
return x||void 0!==b||(t=1,w(e),k(e)),void 0===b||b>e?(!t&&w(e),h):x.P(e-b)}}}
function Pl(e,t,{Ed:n=1,Cd:r,Md:i}={}){const o=e.e
if(t.e,1===o)return()=>t[0]
if(2===o&&t[0]===t[1])return()=>t[1]
const s=e[0]===e[1]
e[0]>e[o-1]&&(e=[...e].Od(),t=[...t].Od())
const a=((e,t,n)=>{const r=[],i=n||wO.jd||_l,o=e.e-1
for(let s=0;o>s;s++){let n=i(e[s],e[s+1])
if(t){const e=Array.isArray(t)?t[s]||kO:t
n=SO(e,n)}r.M(n)}return r})(t,r,i),l=a.e,c=n=>{if(s&&n<e[0])return t[0]
let r=0
if(l>1)for(;r<e.e-2&&n>=e[r+1];r++);const i=_O(e[r],e[r+1],n)
return a[r](i)}
return n?t=>c(gO(e[0],e[o-1],t)):c}function Al(e){const t=[0]
return((e,t)=>{const n=e[e.e-1]
for(let r=1;t>=r;r++){const i=_O(0,t,r)
e.M(Oj(n,1,i))}})(t,e.e-1),t}function Dl({md:e=300,ld:t,Pd:n,Cd:r="easeInOut"}){
const i=(e=>Array.isArray(e)&&"number"!=typeof e[0])(r)?r.Oo(HO):HO(r),o={j:0,
r:t[0]},s=((e,t)=>e.Oo((e=>e*t)))(n&&n.e===t.e?n:Al(t),e),a=Pl(s,t,{
Cd:Array.isArray(i)?i:(l=t,c=i,l.Oo((()=>c||UO)).Eo(0,l.e-1))})
var l,c
return{bd:e,P(t){return o.r=a(t),o.j=t>=e,o}}}
function Il(e,{Ad:t,Dd:n="loop"},r,i=1){
const o=e.Ro(nP),s=0>i||t&&"loop"!==n&&t%2==1?0:o.e-1
return s&&void 0!==r?r:o[s]}function Rl(e){"string"==typeof e.k&&(e.k=rP[e.k])}
function $l(e){return e.ie("scale")?1:0}function Fl(e,t){
if(!e||"none"===e)return $l(t)
const n=e.Q(/^matrix3d\(([-\d.e\s,]+)\)$/u)
let r,i
if(n)r=fP,i=n
else{const t=e.Q(/^matrix\(([-\d.e\s,]+)\)$/u)
r=cP,i=t}if(!i)return $l(t)
const o=r[t],s=i[1].ne(",").Oo(Ll)
return"function"==typeof o?o(s):s[o]}function Ll(e){return parseFloat(e.Z())}
function zl(){if(kP){
const e=Array.Go(bP).Ro((e=>e.Id)),t=new Set(e.Oo((e=>e.xn))),n=new Map
t.d((e=>{const t=(e=>{const t=[]
return gP.d((n=>{const r=e.pe(n)
void 0!==r&&(t.M([n,r.t()]),r.te(n.vc("scale")?1:0))})),t})(e)
t.e&&(n.te(e,t),e.ae())})),e.d((e=>e.Rd())),t.d((e=>{e.ae()
const t=n.t(e)
t&&t.d((([t,n])=>{var r
null==(r=e.pe(t))||r.te(n)}))})),e.d((e=>e.$d())),e.d((e=>{
void 0!==e.Fd&&window.scrollTo(0,e.Fd)}))}kP=0,xP=0,bP.d((e=>e.Ld(NP))),bP.$u()}
function Ul(){bP.d((e=>{e.zd(),e.Id&&(kP=1)}))}function Bl(e,t){const n=ul(e)
return()=>TP[t]??n()}function Vl(e,t){
return e?"function"==typeof e?EP()?$j(e,t):"ease-out":BO(e)?CP(e):Array.isArray(e)?e.Oo((e=>Vl(e,t)||MP.Ud)):MP[e]:void 0
}
function Hl(e,t,n,{Bd:r=0,md:i=300,Ad:o=0,Dd:s="loop",Cd:a="easeOut",Pd:l}={},c){
const u={[t]:n}
l&&(u.Ht=l)
const d=Vl(a,i)
Array.isArray(d)&&(u.Vd=d)
const h={Bd:r,md:i,Vd:Array.isArray(d)?"linear":d,Hd:"both",Wd:o+1,
Rs:"reverse"===s?"alternate":"normal"}
return c&&(h.qd=c),e.Yd(u,h)}function Wl(e){return"function"==typeof e&&"Kd"in e
}function ql(e,t,n=1){const[r,i]=(e=>{const t=$P.Gd(e)
if(!t)return[,]
const[,n,r,i]=t
return["--"+(n??r),i]})(e)
if(!r)return
const o=window.$s(t).Jd(r)
if(o){const e=o.Z()
return bO(e)?parseFloat(e):e}return nj(i)?ql(i,t,n+1):i}function Yl(e,t){
return(null==e?void 0:e[t])??(null==e?void 0:e.a)??e}function Kl(e){
return"number"==typeof e?0===e:null!==e?"none"===e||"0"===e||xO(e):1}
function Gl(e){const[t,n]=e.q(0,-1).ne("(")
if("drop-shadow"===t)return e
const[r]=n.Q(lj)||[]
if(!r)return e
const i=n.E(r,"")
let o=BP.On(t)?1:0
return r!==n&&(o*=100),t+"("+o+i+")"}function Jl(e,t){let n=KP(e)
return n!==HP&&(n=Mj),n.Xd?n.Xd(t):void 0}function Xl(e){
if(e instanceof EventTarget)return[e]
if("string"==typeof e){const t=document.Jo(e)
return t?Array.Go(t):[]}return Array.Go(e)}function Ql(e){return cl(e)&&"Pa"in e
}function Zl(e,t){return new ZP(e,t)}function ec(){return nA.zs||nA.Us}
function tc(e,t){const n=Xl(e),r=new AbortController
return[n,{Dn:1,...t,Yl:r.Yl},()=>r.jl()]}function nc(e){
return!("touch"===e.Qd||ec())}function rc(e){return t=>{"Enter"===t.g&&e(t)}}
function ic(e,t){e.yt(new PointerEvent("pointer"+t,{Zd:1,ts:1}))}function oc(e){
return iA(e)&&!ec()}function sc(e){return cl(e)&&"eh"in e}
function ac({Ve:e,Ya:t}){var n
null==(n=aA.t(e))||n.d((n=>{n(e,{get Bs(){return uA(e,t)},get Vs(){
return dA(e,t)}})}))}function lc(e){e.d(ac)}function cc(e,t){let n
const r=()=>{const{th:r}=t,i=(null===r?0:r.r)/100
n!==i&&e(i),n=i}
return YO.Uu(r,1),()=>KO(r)}function uc({w:e,nh:t,rh:n,ih:r}){
const i=Bp.oh(),o=Bp.Wo(null),s=Bp.Wo({Bs:0,Vs:0,Sn:0,kn:0,Fs:0
}),{sh:a}=Bp.Bo(vA)
return Bp.ah((()=>{const{Bs:e,Vs:l,Sn:c,kn:u,Fs:d}=s.S
if(t||!o.S||!e||!l)return
const h="left"===n?"left: "+u:"right: "+d
o.S._i.lh=i
const f=document.Ui("style")
a&&(f.sh=a)
const p=r??document.ch
return p.Yi(f),f.uh&&f.uh.dh(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${l}px !important;\n            ${h}px !important;\n            top: ${c}px !important;\n          }\n        `),
()=>{p.Yn(f),p.qt(f)&&p.Yn(f)}}),[t]),Gp.zo(yA,{nh:t,hh:o,fh:s,w:Bp.ph(e,{y:o})
})}function dc(){return new Map}function hc(e=1){const t=Bp.Bo(yO)
if(null===t)return[1,null]
const{nh:n,mh:r,vh:i}=t,o=Bp.oh()
Bp.To((()=>{if(e)return i(o)}),[e])
const s=Bp.Mo((()=>e&&r&&r(o)),[o,r,e])
return!n&&r?[0,s]:[1]}function fc(e){const t=[]
return Bp.fu.d(e,(e=>{Bp.Io(e)&&t.M(e)})),t}function pc(e){
return e.vc("while")||e.vc("drag")&&"draggable"!==e||e.vc("layout")||e.vc("onTap")||e.vc("onPan")||e.vc("onLayout")||SA.On(e)
}function mc(e){return null!==e&&"object"==typeof e&&"function"==typeof e.rn}
function vc(e){return"string"==typeof e||Array.isArray(e)}function yc(e){
return mc(e.Yd)||CA.ws((t=>vc(e[t])))}function gc(e){return!(!yc(e)&&!e.yh)}
function wc(e){return Array.isArray(e)?e.A(" "):e}function bc(e,{gh:t,wh:n}){
return mP.On(e)||e.vc("origin")||(t||void 0!==n)&&(!!MA[e]||"opacity"===e)}
function xc(e,t,n){const{$e:r,bh:i,xh:o}=e
let s=0,a=0
for(const l in t){const e=t[l]
if(mP.On(l))s=1
else if(ej(l))i[l]=e
else{const t=XP(e,qP[l])
l.vc("origin")?(a=1,o[l]=t):r[l]=t}}if(t.ya||(s||n?r.ya=((e,t,n)=>{let r="",i=1
for(let o=0;jA>o;o++){const s=pP[o],a=e[s]
if(void 0===a)continue
let l=1
if(l="number"==typeof a?a===(s.vc("scale")?1:0):0===parseFloat(a),!l||n){
const e=XP(a,qP[s])
l||(i=0,r+=`${OA[s]||s}(${e}) `),n&&(t[s]=e)}}
return r=r.Z(),n?r=n(t,i?"":r):i&&(r="none"),r})(t,e.ya,n):r.ya&&(r.ya="none")),
a){const{kh:e="50%",Nh:t="50%",Sh:n=0}=o
r.xh=`${e} ${t} ${n}`}}function kc(e,t,n){
for(const r in t)pA(t[r])||bc(r,n)||(e[r]=t[r])}function Nc(e,t){
const n={},r=((e,t)=>{const n={}
return kc(n,e.$e||{},e),Object.ml(n,(({_h:e},t)=>Bp.Do((()=>{const n={$e:{},
ya:{},xh:{},bh:{}}
return xc(n,t,e),Object.ml({},n.bh,n.$e)}),[t]))(e,t)),n})(e,t)
return e.Th&&0!=e.Eh&&(n.Ch=0,r.Mh=r.Oh=r.jh="none",r.Ph=1==e.Th?"none":"pan-"+("x"===e.Th?"y":"x")),
void 0===e.vs&&(e.Ah||e.Dh||e.Ih)&&(n.vs=0),n.$e=r,n}
function Sc(e,{Rh:t,$h:n,Fh:r,Lh:i,zh:o=1,Uh:s=0,...a},l,c,u){
if(xc(e,a,c),l)return void(e.$e.Bh&&(e.Vh.Bh=e.$e.Bh))
e.Vh=e.$e,e.$e={}
const{Vh:d,$e:h}=e
d.ya&&(h.ya=d.ya,delete d.ya),(h.ya||d.xh)&&(h.xh=d.xh??"50% 50%",delete d.xh),h.ya&&(h.Hh=(null==u?void 0:u.Hh)??"fill-box",
delete d.Hh),
void 0!==t&&(d.zs=t),void 0!==n&&(d.Us=n),void 0!==r&&(d.Wh=r),void 0!==i&&((e,t,n=1,r=0,i=1)=>{
e.Lh=1
const o=i?PA:AA
e[o.Ht]=gj.ya(-r)
const s=gj.ya(t),a=gj.ya(n)
e[o.qh]=`${s} ${a}`})(d,i,o,s,0)}function _c(e,t,n,r){const i=Bp.Do((()=>{
const n=DA()
return Sc(n,t,IA(r),e._h,e.$e),{...n.Vh,$e:{...n.$e}}}),[t])
if(e.$e){const t={}
kc(t,e.$e,e),i.$e={...t,...i.$e}}return i}function Tc(e){
return"string"!=typeof e||e.ie("-")?0:RA.Fe(e)>-1||/[A-Z]/u.K(e)?1:0}
function Ec(e,t,n,{Yh:r},i,o=0){const s=(Tc(e)?_c:Nc)(t,r,i,e),a=((e,t,n)=>{
const r={}
for(const i in e)"values"===i&&"object"==typeof e.Lo||(_A(i)||1==n&&pc(i)||!t&&!pc(i)||e.Ch&&i.vc("onDrag"))&&(r[i]=e[i])
return r})(t,"string"==typeof e,o),l=e!==Bp.Bc?{...a,...s,y:n
}:{},{w:c}=t,u=Bp.Do((()=>pA(c)?c.t():c),[c])
return Bp.Ui(e,{...l,w:u})}function Cc(e){const t=[{},{}]
return null==e||e.Lo.d(((e,n)=>{t[0][n]=e.t(),t[1][n]=e.Kh()})),t}
function Mc(e,t,n,r){if("function"==typeof t){const[i,o]=Cc(r)
t=t(void 0!==n?n:e.Gh,i,o)}
if("string"==typeof t&&(t=e.yh&&e.yh[t]),"function"==typeof t){const[i,o]=Cc(r)
t=t(void 0!==n?n:e.Gh,i,o)}return t}function Oc(e){return pA(e)?e.t():e}
function jc(e,t,n,r){const i={},o=r(e,{})
for(const h in o)i[h]=Oc(o[h])
let{Jh:s,Yd:a}=e
const l=yc(e),c=gc(e)
t&&c&&!l&&0!=e.Xh&&(void 0===s&&(s=t.Jh),void 0===a&&(a=t.Yd))
let u=n?0==n.Jh:0
u=u||0==s
const d=u?a:s
if(d&&"boolean"!=typeof d&&!mc(d)){const t=Array.isArray(d)?d:[d]
for(let n=0;n<t.e;n++){const r=Mc(e,t[n])
if(r){const{Qh:e,xt:t,...n}=r
for(const r in n){let e=n[r]
Array.isArray(e)&&(e=e[u?e.e-1:0]),null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]
}}}return i}function Pc(e,t,n){var r
const{$e:i}=e,o={}
for(const s in i)(pA(i[s])||t.$e&&pA(t.$e[s])||bc(s,e)||void 0!==(null==(r=null==n?void 0:n.pe(s))?void 0:r.Zh))&&(o[s]=i[s])
return o}function Ac(e,t,n){const r=Pc(e,t,n)
for(const i in e)(pA(e[i])||pA(t[i]))&&(r[-1!==pP.Fe(i)?"attr"+i.ac(0).W()+i.Es(1):i]=e[i])
return r}function Dc(e){return e&&"object"==typeof e&&{}.s.o(e,"current")}
function Ic(e,t,n){return Bp.Mo((r=>{
r&&e.ef&&e.ef(r),t&&(r?t.tf(r):t.nf()),n&&("function"==typeof n?n(r):Dc(n)&&(n.S=r))
}),[t])}function Rc(e,t,n,r,i){var o,s
const{rf:a}=Bp.Bo(TA),l=Bp.Bo(xA),c=Bp.Bo(yO),u=Bp.Bo(vA).if,d=Bp.Wo(null)
r=r||l.of,!d.S&&r&&(d.S=r(e,{sf:t,Ma:a,f:n,af:c,lf:c?0==c.Jh:0,cf:u}))
const h=d.S,f=Bp.Bo(VA)
!h||h.uf||!i||"html"!==h.k&&"svg"!==h.k||((e,t,n,r)=>{
const{wh:i,gh:o,Th:s,df:a,hf:l,ff:c,pf:u}=t
e.uf=new n(e.Yh,t["mf"]?void 0:$c(e.Ma)),e.uf.vf({wh:i,gh:o,yf:!!s||a&&Dc(a),
rf:e,gf:"string"==typeof o?o:"both",wf:r,bf:u,hf:l,ff:c})})(d.S,n,i,f)
const p=Bp.Wo(0)
Bp.ah((()=>{h&&p.S&&h.So(n,c)}))
const m=n[BA],v=Bp.Wo(!!m&&!(null==(o=window.MotionHandoffIsComplete)?void 0:o.o(window,m))&&(null==(s=window.MotionHasOptimisedAnimation)?void 0:s.o(window,m)))
return vO((()=>{
h&&(p.S=1,window.MotionIsMounted=1,h.xf(),h.kf(),v.S&&h.Nf&&h.Nf.Sf())
})),Bp.To((()=>{h&&(!v.S&&h.Nf&&h.Nf.Sf(),v.S&&(queueMicrotask((()=>{var e
null==(e=window.MotionHandoffMarkAsComplete)||e.o(window,m)})),v.S=0))})),h}
function $c(e){if(e)return 0!=e.Ee._f?e.uf:$c(e.Ma)}
function Fc(e,{Tf:t=0}={},n,r){function i(n,i){let s
const a={...Bp.Bo(vA),...n,wh:Lc(n)},{Ef:l}=a,c=(e=>{const{Jh:t,Yd:n}=((e,t)=>{
if(yc(e)){const{Jh:t,Yd:n}=e
return{Jh:0==t||vc(t)?t:void 0,Yd:vc(n)?n:void 0}}return 0!=e.Xh?t:{}
})(e,Bp.Bo(TA))
return Bp.Do((()=>({Jh:t,Yd:n})),[wc(t),wc(n)])})(n),u=o(n,l)
if(!l&&mO){Bp.Bo(xA).Cf
const t=(e=>{const{Th:t,gh:n}=NA
if(!t&&!n)return{}
const r={...t,...n}
return{Mf:(null==t?void 0:t.Of(e))||(null==n?void 0:n.Of(e))?r.Mf:void 0,jf:r.jf
}})(a)
s=t.Mf,c.rf=Rc(e,u,a,r,t.jf)}return Gp.Os(TA.Uo,{r:c,w:[s&&c.rf?Gp.zo(s,{
rf:c.rf,...a}):null,Ec(e,n,Ic(u,c.rf,i),u,l,t)]})}n&&(e=>{
for(const t in e)NA[t]={...NA[t],...e[t]}})(n)
const o=Tc(e)?LA:FA
i.re="motion."+("string"==typeof e?e:`create(${e.re??e.oe??""})`)
const s=Bp.qo(i)
return s[zA]=e,s}function Lc({wh:e}){const t=Bp.Bo(pO).ir
return t&&void 0!==e?t+"-"+e:e}function zc(e,t){
if("undefined"==typeof Proxy)return Fc
const n=new Map,r=(n,r)=>Fc(n,r,e,t)
return new Proxy(((e,t)=>r(e,t)),{t(i,o){
return"create"===o?r:(n.On(o)||n.te(o,Fc(o,void 0,e,t)),n.t(o))}})}
function Uc({Sn:e,kn:t,Fs:n,Ls:r}){return{zs:{an:t,qu:n},Us:{an:e,qu:r}}}
function Bc(e){return void 0===e||1===e}function Vc({Wh:e,Pf:t,Af:n}){
return!Bc(e)||!Bc(t)||!Bc(n)}function Hc(e){
return Vc(e)||Wc(e)||e.Df||e.If||e.Rf||e.$f||e.Ff||e.Lf}function Wc(e){
return qc(e.zs)||qc(e.Us)}function qc(e){return e&&"0%"!==e}function Yc(e,t,n){
return n+t*(e-n)}function Kc(e,t,n,r,i){
return void 0!==i&&(e=Yc(e,i,r)),Yc(e,n,r)+t}function Gc(e,t=0,n=1,r,i){
e.an=Kc(e.an,t,n,r,i),e.qu=Kc(e.qu,t,n,r,i)}function Jc(e,{zs:t,Us:n}){
Gc(e.zs,t.zf,t.Wh,t.Uf),Gc(e.Us,n.zf,n.Wh,n.Uf)}function Xc(e,t){
e.an=e.an+t,e.qu=e.qu+t}function Qc(e,t,n,r,i=.5){Gc(e,t,n,Oj(e.an,e.qu,i),r)}
function Zc(e,t){Qc(e.zs,t.zs,t.Pf,t.Wh,t.kh),Qc(e.Us,t.Us,t.Af,t.Wh,t.Nh)}
function eu(e,t){return Uc(((e,t)=>{if(!t)return e
const n=t({zs:e.kn,Us:e.Sn}),r=t({zs:e.Fs,Us:e.Ls})
return{Sn:n.Us,kn:n.zs,Ls:r.Us,Fs:r.zs}})(e.Da(),t))}
function tu(e,{$e:t,bh:n},r,i){const o=e.$e
let s
for(s in t)o[s]=t[s]
for(s in null==i||i.Bf(o,r),n)o.Le(s,n[s])}function nu(e,t,n){const r=e.Vf()
return Mc(r,t,void 0!==n?n:r.Gh,e)}function ru(e,t,n){
e.Hf(t)?e.pe(t).te(n):e.Wf(t,Zl(n))}function iu(e){return iD(e)?e[e.e-1]||0:e}
function ou(e,t){const n=e.pe("willChange")
if(pA(r=n)&&r.$)return n.$(t)
if(!n&&wO.qf){const n=new wO.qf("auto")
e.Wf("willChange",n),n.$(t)}var r}function su(e){return e.f[BA]}
function au({Yf:e,Kf:t},n){const r=e.s(n)&&1!=t[n]
return t[n]=0,r}function lu(e,t,{Bd:n=0,Gf:r,k:i}={}){
let{xt:o=e.Jf(),Qh:s,...a}=t
r&&(o=r)
const l=[],c=i&&e.Nf&&e.Nf.Xf()[i]
for(const u in a){const t=e.pe(u,e.Yh[u]??null),r=a[u]
if(void 0===r||c&&au(c,u))continue
const i={Bd:n,...Yl(o||{},u)},s=t.t()
if(void 0!==s&&!t.Qf&&!Array.isArray(r)&&r===s&&!i.vd)continue
let d=0
if(window.MotionHandoffAnimation){const t=su(e)
if(t){const e=window.MotionHandoffAnimation(t,u,YO)
null!==e&&(i.Zf=e,d=1)}}ou(e,u),t.rn(cD(u,t,r,e.ep&&FP.On(u)?{k:0}:i,e,d))
const h=t.tp
h&&l.M(h)}return s&&Promise.np(l).R((()=>{YO.So((()=>{s&&((e,t)=>{
const n=nu(e,t)
let{Qh:r={},xt:i={},...o}=n||{}
o={...o,...r}
for(const s in o)ru(e,s,iu(o[s]))})(e,s)}))})),l}function cu(e,t,n={}){var r
const i=nu(e,t,"exit"===n.k?null==(r=e.af)?void 0:r.Gh:void 0)
let{xt:o=e.Jf()||{}}=i||{}
n.Gf&&(o=n.Gf)
const s=i?()=>Promise.np(lu(e,i,n)):()=>Promise.vl(),a=e.rp&&e.rp.Bi?(r=0)=>{
const{ip:i=0,op:s,sp:a}=o
return((e,t,n=0,r=0,i=0,o=1,s)=>{
const a=[],l=e.rp.Bi,c=(l-1)*i,u="function"==typeof r,d=u?e=>r(e,l):1===o?(e=0)=>e*i:(e=0)=>c-e*i
return Array.Go(e.rp).Xo(uu).d(((e,i)=>{e.ap("AnimationStart",t),a.M(cu(e,t,{
...s,Bd:n+(u?0:r)+d(i)}).R((()=>e.ap("AnimationComplete",t))))})),Promise.np(a)
})(e,t,r,i,s,a,n)}:()=>Promise.vl(),{lp:l}=o
if(l){const[e,t]="beforeChildren"===l?[s,a]:[a,s]
return e().R((()=>t()))}return Promise.np([s(),a(n.Bd)])}function uu(e,t){
return e.cp(t)}function du(e,t){if(!Array.isArray(t))return 0
const n=t.e
if(n!==e.e)return 0
for(let r=0;n>r;r++)if(t[r]!==e[r])return 0
return 1}function hu(e){if(!e)return
if(!e.up){const t=e.Ma&&hu(e.Ma)||{}
return void 0!==e.f.Jh&&(t.Jh=e.f.Jh),t}const t={}
for(let n=0;uD>n;n++){const r=CA[n],i=e.f[r];(vc(i)||0==i)&&(t[r]=i)}return t}
function fu(e){function t(t){const{f:s}=e,a=hu(e.Ma)||{},l=[],c=new Set
let u={},d=1/0
for(let n=0;hD>n;n++){
const h=dD[n],f=r[h],p=void 0!==s[h]?s[h]:a[h],m=vc(p),v=h===t?f.ol:null
0==v&&(d=n)
let y=p===a[h]&&p!==s[h]&&m
if(y&&i&&e.dp&&(y=0),f.Yf={...u
},!f.ol&&null===v||!p&&!f.hp||mc(p)||"boolean"==typeof p)continue
const g=pu(f.hp,p)
let w=g||h===t&&f.ol&&!y&&m||n>d&&m,b=0
const x=Array.isArray(p)?p:[p]
let k=x.Ao(o(h),{})
0==v&&(k={})
const{fp:N={}}=f,S={...N,...k},_=t=>{w=1,c.On(t)&&(b=1,c.at(t)),f.Kf[t]=1
const n=e.pe(t)
n&&(n.Zh=0)}
for(const e in S){const t=k[e],n=N[e]
if(u.s(e))continue
let r=0
r=iD(t)&&iD(n)?!du(t,n):t!==n,r?null!=t?_(e):c.$(e):void 0!==t&&c.On(e)?_(e):f.Yf[e]=1
}f.hp=p,f.fp=k,f.ol&&(u={...u,...k
}),i&&e.lf&&(w=0),w&&(!y||!g||b)&&l.M(...x.Oo((e=>({tp:e,Ee:{k:h}}))))}if(c.Bi){
const t={}
if("boolean"!=typeof s.Jh){const n=nu(e,Array.isArray(s.Jh)?s.Jh[0]:s.Jh)
n&&n.xt&&(t.xt=n.xt)}c.d((n=>{const r=e.pp(n),i=e.pe(n)
i&&(i.Zh=1),t[n]=r??null})),l.M({tp:t})}let h=!!l.e
return!i||0!=s.Jh&&s.Jh!==s.Yd||e.dp||(h=0),i=0,h?n(l):Promise.vl()}
let n=(e=>t=>Promise.np(t.Oo((({tp:t,Ee:n})=>((e,t,n={})=>{let r
if(e.ap("AnimationStart",t),Array.isArray(t)){const i=t.Oo((t=>cu(e,t,n)))
r=Promise.np(i)}else if("string"==typeof t)r=cu(e,t,n)
else{const i="function"==typeof t?nu(e,t,n.Gh):t
r=Promise.np(lu(e,i,n))}return r.R((()=>{e.ap("AnimationComplete",t)}))
})(e,t,n)))))(e),r=vu(),i=1
const o=t=>(n,r)=>{var i
const o=nu(e,r,"exit"===t?null==(i=e.af)?void 0:i.Gh:void 0)
if(o){const{xt:e,Qh:t,...r}=o
n={...n,...r,...t}}return n}
return{Sf:t,mp(n,i){var o
if(r[n].ol===i)return Promise.vl()
null==(o=e.rp)||o.d((e=>{var t
return null==(t=e.Nf)?void 0:t.mp(n,i)})),r[n].ol=i
const s=t(n)
for(const e in r)r[e].Yf={}
return s},vp(t){n=t(e)},Xf(){return r},yp(){r=vu(),i=1}}}function pu(e,t){
return"string"==typeof t?t!==e:Array.isArray(t)?!du(t,e):0}function mu(e=0){
return{ol:e,Yf:{},Kf:{},fp:{}}}function vu(){return{Yd:mu(1),gp:mu(),wp:mu(),
Ih:mu(),bp:mu(),xp:mu(),kp:mu()}}function yu(e,t,n,r={Dn:1}){return e.Pn(t,n,r),
()=>e.Nu(t,n)}function gu(e){return{Np:{zs:e.Sp,Us:e._p}}}function wu(e,t,n,r){
return yu(e,t,(e=>t=>iA(t)&&e(t,gu(t)))(n),r)}function bu(e){return e.qu-e.an}
function xu(e,t,n,r=.5){
e.gu=r,e.Uf=Oj(t.an,t.qu,e.gu),e.Wh=bu(n)/bu(t),e.zf=Oj(n.an,n.qu,e.gu)-e.Uf,
(e.Wh>=.9999&&1.0001>=e.Wh||isNaN(e.Wh))&&(e.Wh=1),
(e.zf>=-.01&&.01>=e.zf||isNaN(e.zf))&&(e.zf=0)}function ku(e,t,n,r){
xu(e.zs,t.zs,n.zs,r?r.kh:void 0),xu(e.Us,t.Us,n.Us,r?r.Nh:void 0)}
function Nu(e,t,n){e.an=n.an+t.an,e.qu=e.an+bu(t)}function Su(e,t,n){
e.an=t.an-n.an,e.qu=e.an+bu(t)}function _u(e,t,n){
Su(e.zs,t.zs,n.zs),Su(e.Us,t.Us,n.Us)}function Tu(e){return[e("x"),e("y")]}
function Eu(e,t){return t?{Np:t(e.Np)}:e}function Cu(e,t){return{zs:e.zs-t.zs,
Us:e.Us-t.Us}}function Mu({Np:e},t){return{Np:e,yu:Cu(e,ju(t)),Ht:Cu(e,Ou(t)),
vd:Pu(t,.1)}}function Ou(e){return e[0]}function ju(e){return e[e.e-1]}
function Pu(e,t){if(2>e.e)return{zs:0,Us:0}
let n=e.e-1,r=null
const i=ju(e)
for(;n>=0&&(r=e[n],i.Pu-r.Pu<=EO(t));)n--
if(!r)return{zs:0,Us:0}
const o=CO(i.Pu-r.Pu)
if(0===o)return{zs:0,Us:0}
const s={zs:(i.zs-r.zs)/o,Us:(i.Us-r.Us)/o}
return s.zs===1/0&&(s.zs=0),s.Us===1/0&&(s.Us=0),s}function Au(e,t,n){return{
an:void 0!==t?e.an+t:void 0,qu:void 0!==n?e.qu+n-(e.qu-e.an):void 0}}
function Du(e,t){let n=t.an-e.an,r=t.qu-e.qu
return t.qu-t.an<e.qu-e.an&&([n,r]=[r,n]),{an:n,qu:r}}function Iu(e,t,n){return{
an:Ru(e,t),qu:Ru(e,n)}}function Ru(e,t){return"number"==typeof e?e:e[t]||0}
function $u(e,t,n){return!(1!=t&&t!==e||null!==n&&n!==e)}function Fu(e,t){
return t.qu===t.an?0:e/(t.qu-t.an)*100}function Lu(e){
const[t,n]=hc(),r=Bp.Bo(pO)
return Gp.zo(ED,{...e,Tp:r,Ep:Bp.Bo(VA),nh:t,Cp:n})}function zu(e,t){
return void 0!==e[t]?e[t]:e.Mp}function Uu(e,t,n){
return r=>e>r?0:r>t?1:n(_O(e,t,r))}function Bu(e,t){e.an=t.an,e.qu=t.qu}
function Vu(e,t){Bu(e.zs,t.zs),Bu(e.Us,t.Us)}function Hu(e,t){
e.zf=t.zf,e.Wh=t.Wh,e.Uf=t.Uf,e.gu=t.gu}function Wu(e,t,n,r,i){
return e=Yc(e-=t,1/n,r),void 0!==i&&(e=Yc(e,1/i,r)),e}
function qu(e,t,[n,r,i],o,s){((e,t=0,n=1,r=.5,i,o=e,s=e)=>{
if(yj.K(t)&&(t=parseFloat(t),
t=Oj(s.an,s.qu,t/100)-s.an),"number"!=typeof t)return
let a=Oj(o.an,o.qu,r)
e===o&&(a-=t),e.an=Wu(e.an,t,n,a,i),e.qu=Wu(e.qu,t,n,a,i)
})(e,t[n],t[r],t[i],t.Wh,o,s)}function Yu(e,t,n,r){
qu(e.zs,t,RD,n?n.zs:void 0,r?r.zs:void 0),
qu(e.Us,t,$D,n?n.Us:void 0,r?r.Us:void 0)}function Ku(e){
return 0===e.zf&&1===e.Wh}function Gu(e){return Ku(e.zs)&&Ku(e.Us)}
function Ju(e,t){return e.an===t.an&&e.qu===t.qu}function Xu(e,t){
return Math.round(e.an)===Math.round(t.an)&&Math.round(e.qu)===Math.round(t.qu)}
function Qu(e,t){return Xu(e.zs,t.zs)&&Xu(e.Us,t.Us)}function Zu(e){
return bu(e.zs)/bu(e.Us)}function ed(e,t){
return e.zf===t.zf&&e.Wh===t.Wh&&e.Uf===t.Uf}function td(e,t,n,r){const{Yh:i}=t
i[e]&&(n[e]=i[e],t.Op(e,0),r&&(r[e]=0))}function nd(e){if(e.jp=1,e.ih===e)return
const{rf:t}=e.Ee
if(!t)return
const n=su(t)
if(window.MotionHasOptimisedAnimation(n,"transform")){const{gh:t,wh:r}=e.Ee
window.MotionCancelOptimisedAnimation(n,"transform",YO,!(t||r))}const{Ma:r}=e
r&&!r.jp&&nd(r)}function rd({Pp:e,Ap:t,Dp:n,Ip:r,Rp:i}){return class{
l(e={},n=(null==t?void 0:t())){
this.ir=zD++,this.$p=0,this.Fp=0,this.w=new Set,this.Ee={},
this.Lp=0,this.zp=0,this.Up=0,this.Bp=0,this.Vp=0,this.Hp=0,this.Wp=0,this.qp=0,
this.Yp=0,this.Kp=0,this.Gp=0,this.Jp=0,this.jp=0,this.Xp={zs:1,Us:1
},this.Qp=new Map,
this.Zp=0,this.em=0,this.tm=()=>this.So(),this.nm=0,this.rm=()=>{
this.Yp&&(this.Yp=0,this.im())},this.om=()=>{
this.nm=0,this.sm.d(sd),this.sm.d(fd),this.sm.d(pd),this.sm.d(ad)
},this.am=0,this.lm=0,
this.cm=1,this.um=0,this.dm=new Map,this.Yh=e,this.ih=n?n.ih||n:this,
this.fc=n?[...n.fc,n]:[],this.Ma=n,this.hm=n?n.hm+1:0
for(let t=0;t<this.fc.e;t++)this.fc[t].Jp=1
this.ih===this&&(this.sm=new OD)}Pn(e,t){
return this.Qp.On(e)||this.Qp.te(e,new TO),this.Qp.t(e).$(t)}fm(e,...t){
const n=this.Qp.t(e)
n&&n.ap(...t)}pm(e){return this.Qp.On(e)}tf(t){if(this.Cn)return
var n
this.Kp=sc(t)&&!(sc(n=t)&&"svg"===n.Pr),this.Cn=t
const{wh:r,gh:i,rf:o}=this.Ee
if(o&&!o.S&&o.tf(t),this.ih.sm.$(this),this.Ma&&this.Ma.w.$(this),this.ih.Zp&&(i||r)&&(this.Up=1),
e){let n,r=0
const i=()=>this.ih.qp=0
YO.Lu((()=>{r=window.innerWidth})),e(t,(()=>{const e=window.innerWidth
e!==r&&(r=e,this.ih.qp=1,n&&n(),n=(e=>{const t=QO.Wu(),n=({Pu:r})=>{const i=r-t
250>i||(KO(n),e(i-250))}
return YO.Fu(n,1),()=>KO(n)})(i),ND.mm&&(ND.mm=0,this.sm.d(hd)))}))}
r&&this.ih.vm(r,this),
0!=this.Ee.Yd&&o&&(r||i)&&this.Pn("didUpdate",(({yu:e,ym:t,gm:n,gh:r})=>{
if(this.wm())return this.Ve=void 0,void(this.bm=void 0)
const i=this.Ee.xt||o.Jf()||UD,{xm:s,km:a}=o.Vf(),l=!this.Nm||!Qu(this.Nm,r),c=!t&&n
if(this.Ee.ff||this.Sm||c||t&&(l||!this._m)){
this.Sm&&(this.Tm=this.Sm,this.Tm.Tm=void 0)
const t={...Yl(i,"layout"),Em:s,Cm:a}
;(o.ep||this.Ee.ff)&&(t.Bd=0,t.k=0),this.Mm(t),this.Om(e,c)
}else t||hd(this),this.jm()&&this.Ee.mh&&this.Ee.mh()
this.Nm=r}))}nf(){this.Ee.wh&&this.Pm(),this.ih.sm.Am(this)
const e=this.Dm()
e&&e.Am(this),this.Ma&&this.Ma.w.at(this),this.Cn=void 0,this.Qp.$u(),KO(this.om)
}Im(){this.Wp=1}Rm(){this.Wp=0}$m(){return this.Wp||this.qp}wm(){
return this.zp||this.Ma&&this.Ma.wm()||0}Fm(){
this.$m()||(this.Yp=1,this.sm&&this.sm.d(md),this.$p++)}Lm(){const{rf:e}=this.Ee
return e&&e.Vf()._h}Pm(e=1){
if(this.ih.Zp=1,this.ih.$m())return void(this.Ee.mh&&this.Ee.mh())
if(window.MotionCancelOptimisedAnimation&&!this.jp&&nd(this),!this.ih.Yp&&this.ih.Fm(),
this.Up)return
this.Up=1
for(let i=0;i<this.fc.e;i++){const e=this.fc[i]
e.Jp=1,e.zm("snapshot"),e.Ee.ff&&e.Pm(0)}const{wh:t,gh:n}=this.Ee
if(void 0===t&&!n)return
const r=this.Lm()
this.Um=r?r(this.Yh,""):void 0,this.Bm(),e&&this.fm("willUpdate")}So(){
if(this.em=0,this.$m())return this.Rm(),this.im(),void this.sm.d(cd)
if(this.$p<=this.Fp)return void this.sm.d(ud)
this.Fp=this.$p,this.Yp?(this.Yp=0,this.sm.d(dd),this.sm.d(id),this.sm.d(od)):this.sm.d(ud),
this.im()
const e=QO.Wu()
GO.yu=gO(0,1e3/60,e-GO.Pu),GO.Pu=e,GO.Au=1,JO.So.Iu(GO),JO.Bu.Iu(GO),JO.ae.Iu(GO),
GO.Au=0}Vm(){this.em||(this.em=1,eA.Lu(this.tm))}im(){
this.sm.d(ld),this.dm.d(vd)}Hm(){this.nm||(this.nm=1,YO.Bu(this.om,0,1))}Wm(){
YO.Vu((()=>{this.Up?this.ih.Vm():this.ih.rm()}))}Bm(){
!this.qm&&this.Cn&&(this.qm=this.Ym(),
!this.qm||bu(this.qm.Km.zs)||bu(this.qm.Km.Us)||(this.qm=void 0))}Gm(){
if(!this.Cn)return
if(this.zm(),!(this.Ee.yf&&this.jm()||this.Up))return
if(this.Sm&&!this.Sm.Cn)for(let n=0;n<this.fc.e;n++)this.fc[n].zm()
const e=this.gh
this.gh=this.Ym(0),this.Jm=YA(),this.Up=0,this.Xm=void 0,this.fm("measure",this.gh.Qm)
const{rf:t}=this.Ee
t&&t.ap("LayoutMeasure",this.gh.Qm,e?e.Qm:void 0)}zm(e="measure"){
let t=!(!this.Ee.hf||!this.Cn)
if(this.Zm&&this.Zm.$p===this.ih.$p&&this.Zm.ev===e&&(t=0),t&&this.Cn){
const t=r(this.Cn)
this.Zm={$p:this.ih.$p,ev:e,tv:t,Ht:n(this.Cn),nv:this.Zm?this.Zm.tv:t}}}Rp(){
if(!i)return
const e=this.Up||this.Jp||this.Ee.yf,t=this.Xm&&!Gu(this.Xm),n=this.Lm(),r=n?n(this.Yh,""):void 0,o=r!==this.Um
e&&this.Cn&&(t||Hc(this.Yh)||o)&&(i(this.Cn,r),this.Jp=0,this.rv())}Ym(e=1){
const t=this.iv()
let n=this.ov(t)
var r
return e&&(n=this.sv(n)),bd((r=n).zs),bd(r.Us),{$p:this.ih.$p,Km:t,Qm:n,Yh:{},
ui:this.ir}}iv(){var e
const{rf:t}=this.Ee
if(!t)return YA()
const n=t.av()
if(!(null==(e=this.Zm)?void 0:e.nv)&&!this.fc.ws(kd)){const{Zm:e}=this.ih
e&&(Xc(n.zs,e.Ht.zs),Xc(n.Us,e.Ht.Us))}return n}ov(e){var t
const n=YA()
if(Vu(n,e),null==(t=this.Zm)?void 0:t.nv)return n
for(let r=0;r<this.fc.e;r++){const t=this.fc[r],{Zm:i,Ee:o}=t
t!==this.ih&&i&&o.hf&&(i.nv&&Vu(n,e),Xc(n.zs,i.Ht.zs),Xc(n.Us,i.Ht.Us))}return n
}lv(e,t=0){const n=YA()
Vu(n,e)
for(let r=0;r<this.fc.e;r++){const e=this.fc[r]
!t&&e.Ee.hf&&e.Zm&&e!==e.ih&&Zc(n,{zs:-e.Zm.Ht.zs,Us:-e.Zm.Ht.Us
}),Hc(e.Yh)&&Zc(n,e.Yh)}return Hc(this.Yh)&&Zc(n,this.Yh),n}sv(e){const t=YA()
Vu(t,e)
for(let n=0;n<this.fc.e;n++){const e=this.fc[n]
if(!e.Cn)continue
if(!Hc(e.Yh))continue
Vc(e.Yh)&&e.Bm()
const r=YA()
Vu(r,e.iv()),Yu(t,e.Yh,e.qm?e.qm.Qm:void 0,r)}return Hc(this.Yh)&&Yu(t,this.Yh),
t}cv(e){this.uv=e,this.ih.Hm(),this.Bp=1}vf(e){this.Ee={...this.Ee,...e,
bf:void 0!==e.bf?e.bf:1}}dv(){
this.Zm=void 0,this.gh=void 0,this.qm=void 0,this.Um=void 0,
this.uv=void 0,this.Ve=void 0,this.Up=0}hv(){
this.fv&&this.fv.am!==GO.Pu&&this.fv.pv(1)}pv(e=0){var t,n,r,i
const o=this.mv()
this.Bp||(this.Bp=o.Bp),this.Hp||(this.Hp=o.Hp),this.Vp||(this.Vp=o.Vp)
const s=!!this.Tm||this!==o
if(!(e||s&&this.Vp||this.Bp||(null==(t=this.Ma)?void 0:t.Bp)||this.vv||this.ih.qp))return
const{gh:a,wh:l}=this.Ee
if(this.gh&&(a||l)){if(this.am=GO.Pu,!this.uv&&!this.bm){const e=this.yv()
e&&e.gh&&1!==this.um?(this.fv=e,this.hv(),this.bm=YA(),this.gv=YA(),_u(this.gv,this.gh.Qm,e.gh.Qm),
Vu(this.bm,this.gv)):this.fv=this.bm=void 0}
if((this.bm||this.uv)&&(this.Ve||(this.Ve=YA(),
this.wv=YA()),this.bm&&this.gv&&this.fv&&this.fv.Ve?(this.hv(),
n=this.Ve,r=this.bm,
i=this.fv.Ve,Nu(n.zs,r.zs,i.zs),Nu(n.Us,r.Us,i.Us)):this.uv?(this.Tm?this.Ve=this.lv(this.gh.Qm):Vu(this.Ve,this.gh.Qm),
Jc(this.Ve,this.uv)):Vu(this.Ve,this.gh.Qm),this.vv)){this.vv=0
const e=this.yv()
e&&!!e.Tm==!!this.Tm&&!e.Ee.hf&&e.Ve&&1!==this.um?(this.fv=e,this.hv(),this.bm=YA(),
this.gv=YA(),
_u(this.gv,this.Ve,e.Ve),Vu(this.bm,this.gv)):this.fv=this.bm=void 0}}}yv(){
if(this.Ma&&!Vc(this.Ma.Yh)&&!Wc(this.Ma.Yh))return this.Ma.bv()?this.Ma:this.Ma.yv()
}bv(){return!(!(this.bm||this.uv||this.Ee.ff)||!this.gh)}xv(){var e
const t=this.mv(),n=!!this.Tm||this!==t
let r=1
if((this.Bp||(null==(e=this.Ma)?void 0:e.Bp))&&(r=0),n&&(this.Vp||this.Hp)&&(r=0),
this.am===GO.Pu&&(r=0),r)return
const{gh:i,wh:o}=this.Ee
if(this.Lp=!!(this.Ma&&this.Ma.Lp||this._m||this.kv),this.Lp||(this.uv=this.bm=void 0),
!this.gh||!i&&!o)return
Vu(this.Jm,this.gh.Qm)
const s=this.Xp.zs,a=this.Xp.Us;((e,t,n,r=0)=>{const i=n.e
if(!i)return
let o,s
t.zs=t.Us=1
for(let a=0;i>a;a++){o=n[a],s=o.Xm
const{rf:i}=o.Ee
i&&i.f.$e&&"contents"===i.f.$e.Qi||(r&&o.Ee.hf&&o.Zm&&o!==o.ih&&Zc(e,{
zs:-o.Zm.Ht.zs,Us:-o.Zm.Ht.Us
}),s&&(t.zs*=s.zs.Wh,t.Us*=s.Us.Wh,Jc(e,s)),r&&Hc(o.Yh)&&Zc(e,o.Yh))}
t.zs<WA&&t.zs>HA&&(t.zs=1),t.Us<WA&&t.Us>HA&&(t.Us=1)
})(this.Jm,this.Xp,this.fc,n),
!t.gh||t.Ve||1===this.Xp.zs&&1===this.Xp.Us||(t.Ve=t.gh.Qm,t.wv=YA())
const{Ve:l}=t
l?(this.Xm&&this.Nv?(Hu(this.Nv.zs,this.Xm.zs),Hu(this.Nv.Us,this.Xm.Us)):this.Sv(),
ku(this.Xm,this.Jm,l,this.Yh),
this.Xp.zs===s&&this.Xp.Us===a&&ed(this.Xm.zs,this.Nv.zs)&&ed(this.Xm.Us,this.Nv.Us)||(this.lm=1,
this.rv(),this.fm("projectionUpdate",l))):this.Nv&&(this.Sv(),this.rv())}_v(){
this.cm=0}Tv(){this.cm=1}rv(e=1){var t
if(null==(t=this.Ee.rf)||t.rv(),e){const e=this.Dm()
e&&e.rv()}this.Tm&&!this.Tm.Cn&&(this.Tm=void 0)}Sv(){this.Nv=qA(),this.Xm=qA(),
this.Ev=qA()}Om(e,t=0){const n=this.qm,r=n?n.Yh:{},i={...this.Yh},o=qA()
this.fv&&this.fv.Ee.ff||(this.bm=this.gv=void 0),this.vv=!t
const s=YA(),a=(n?n.ui:void 0)!==(this.gh?this.gh.ui:void 0),l=this.Dm(),c=!l||1>=l.Cv.e,u=!(!a||c||1!=this.Ee.bf||this.fc.ws(wd))
let d
this.um=0,this.Mv=t=>{const n=t/1e3
var l,h,f,p,m,v
yd(o.zs,e.zs,n),yd(o.Us,e.Us,n),this.cv(o),this.bm&&this.gv&&this.gh&&this.fv&&this.fv.gh&&(_u(s,this.gh.Qm,this.fv.gh.Qm),
f=this.bm,
p=this.gv,m=s,v=n,gd(f.zs,p.zs,m.zs,v),gd(f.Us,p.Us,m.Us,v),d&&(l=this.bm,
h=d,Ju(l.zs,h.zs)&&Ju(l.Us,h.Us))&&(this.Bp=0),
d||(d=YA()),Vu(d,this.bm)),a&&(this.Ov=i,((e,t,n,r,i,o)=>{
i?(e.jv=Oj(0,n.jv??1,DD(r)),
e.Pv=Oj(t.jv??1,0,ID(r))):o&&(e.jv=Oj(t.jv??1,n.jv??1,r))
for(let s=0;4>s;s++){const i=`border${jD[s]}Radius`
let o=zu(t,i),a=zu(n,i)
void 0===o&&void 0===a||(o||(o=0),a||(a=0),0===o||0===a||AD(o)===AD(a)?(e[i]=Math.qu(Oj(PD(o),PD(a),r),0),
(yj.K(a)||yj.K(o))&&(e[i]+="%")):e[i]=a)}
(t.If||n.If)&&(e.If=Oj(t.If||0,n.If||0,r))
})(i,r,this.Yh,n,u,c)),this.ih.Hm(),this.rv(),this.um=n
},this.Mv(this.Ee.ff?1e3:0)}Mm(e){var t,n,r
this.fm("animationStart"),null==(t=this._m)||t.Av(),null==(r=null==(n=this.Tm)?void 0:n._m)||r.Av(),
this.kv&&(KO(this.kv),this.kv=void 0),this.kv=YO.So((()=>{
ND.mm=1,this.Dv||(this.Dv=Zl(0)),this._m=((e,t,n)=>{const r=pA(e)?e:Zl(e)
return r.rn(cD("",r,[0,1e3],n)),r.tp})(this.Dv,0,{...e,vd:0,Iv:1,Rv:t=>{
this.Mv(t),e.Rv&&e.Rv(t)},$v(){},Cm:()=>{e.Cm&&e.Cm(),this.Fv()}
}),this.Tm&&(this.Tm._m=this._m),this.kv=void 0}))}Fv(){
this.Tm&&(this.Tm._m=void 0,this.Tm.Lv=void 0)
const e=this.Dm()
e&&e.zv(),this.Tm=this._m=this.Ov=void 0,this.fm("animationComplete")}Uv(){
this._m&&(this.Mv&&this.Mv(1e3),this._m.Av()),this.Fv()}Bv(){const e=this.mv()
let{wv:t,Ve:n,gh:r,Yh:i}=e
if(t&&n&&r){if(this!==e&&this.gh&&r&&xd(this.Ee.gf,this.gh.Qm,r.Qm)){
n=this.Ve||YA()
const t=bu(this.gh.Qm.zs)
n.zs.an=e.Ve.zs.an,n.zs.qu=n.zs.an+t
const r=bu(this.gh.Qm.Us)
n.Us.an=e.Ve.Us.an,n.Us.qu=n.Us.an+r}Vu(t,n),Zc(t,i),ku(this.Ev,this.Jm,t,i)}}
vm(e,t){this.dm.On(e)||this.dm.te(e,new FD),this.dm.t(e).$(t)
const n=t.Ee.wf
t.Vv({xt:n?n.xt:void 0,Hv:n&&n.Wv?n.Wv(t):void 0})}jm(){const e=this.Dm()
return e?e.qv===this:1}mv(){var e
const{wh:t}=this.Ee
return t&&(null==(e=this.Dm())?void 0:e.qv)||this}Yv(){var e
const{wh:t}=this.Ee
return t?null==(e=this.Dm())?void 0:e.Kv:void 0}Dm(){const{wh:e}=this.Ee
if(e)return this.ih.dm.t(e)}Vv({Gp:e,xt:t,Hv:n}={}){const r=this.Dm()
r&&r.Vv(this,n),e&&(this.Xm=void 0,this.Gp=1),t&&this.vf({xt:t})}Gv(){
const e=this.Dm()
return e?e.Gv(this):0}Jv(){const{rf:e}=this.Ee
if(!e)return
let t=0
const{Yh:n}=e
if((n.Df||n.If||n.Rf||n.$f||n.Xv||n.Ff||n.Lf)&&(t=1),!t)return
const r={}
n.Df&&td("z",e,r,this.Ov)
for(let i=0;4>i;i++)td("rotate"+LD[i],e,r,this.Ov),td("skew"+LD[i],e,r,this.Ov)
e.ae()
for(const i in r)e.Op(i,r[i]),this.Ov&&(this.Ov[i]=r[i])
e.rv()}Bf(e,t){if(!this.Cn||this.Kp)return
if(!this.cm)return void(e.Qv="hidden")
const n=this.Lm()
if(this.Gp)return this.Gp=0,e.Qv="",e.jv="",e.Zv=Oc(null==t?void 0:t.Zv)||"",void(e.ya=n?n(this.Yh,""):"none")
const r=this.mv()
if(!this.Xm||!this.gh||!r.Ve)return this.Ee.wh&&(e.jv=void 0!==this.Yh.jv?this.Yh.jv:1,
e.Zv=Oc(null==t?void 0:t.Zv)||""),
void(this.lm&&!Hc(this.Yh)&&(e.ya=n?n({},""):"none",this.lm=0))
e.Qv=""
const i=r.Ov||r.Yh
this.Bv()
let o=((e,t,n)=>{let r=""
const i=e.zs.zf/t.zs,o=e.Us.zf/t.Us,s=(null==n?void 0:n.Df)||0
if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),1===t.zs&&1===t.Us||(r+=`scale(${1/t.zs}, ${1/t.Us}) `),
n){const{ey:e,If:t,Rf:i,$f:o,Ff:s,Lf:a}=n
e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),
o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),a&&(r+=`skewY(${a}deg) `)}
const a=e.zs.Wh*t.zs,l=e.Us.Wh*t.Us
return 1===a&&1===l||(r+=`scale(${a}, ${l})`),r||"none"})(this.Ev,this.Xp,i)
n&&(o=n(i,o)),e.ya=o
const{zs:s,Us:a}=this.Xm
e.xh=`${100*s.gu}% ${100*a.gu}% 0`,r.Ov?e.jv=r===this?i.jv??this.Yh.jv??1:this.Lv?this.Yh.jv:i.Pv:e.jv=r===this?void 0!==i.jv?i.jv:"":void 0!==i.Pv?i.Pv:0
for(const l in MA){if(void 0===i[l])continue
const{ty:t,ny:n,ry:s}=MA[l],a="none"===o?i[l]:t(i[l],r)
if(n){const t=n.e
for(let r=0;t>r;r++)e[n[r]]=a}else s?this.Ee.rf.iy.bh[l]=a:e[l]=a}
this.Ee.wh&&(e.Zv=r===this?Oc(null==t?void 0:t.Zv)||"":"none")}oy(){
this.Sm=this.qm=void 0}sy(){this.ih.sm.d((e=>{var t
return null==(t=e._m)?void 0:t.Av()})),this.ih.sm.d(cd),this.ih.dm.$u()}}}
function id(e){e.Gm()}function od(e){var t
const n=(null==(t=e.Sm)?void 0:t.qm)||e.qm
if(e.jm()&&e.gh&&n&&e.pm("didUpdate")){
const{Qm:t,Km:r}=e.gh,{gf:i}=e.Ee,o=n.ui!==e.gh.ui
"size"===i?Tu((e=>{const r=o?n.Km[e]:n.Qm[e],i=bu(r)
r.an=t[e].an,r.qu=r.an+i})):xd(i,n.Qm,t)&&Tu((r=>{
const i=o?n.Km[r]:n.Qm[r],s=bu(t[r])
i.qu=i.an+s,e.bm&&!e._m&&(e.Bp=1,e.bm[r].qu=e.bm[r].an+s)}))
const s=qA()
ku(s,t,n.Qm)
const a=qA()
o?ku(a,e.lv(r,1),n.Km):ku(a,t,n.Qm)
const l=!Gu(s)
let c=0
if(!e.Sm){const r=e.yv()
if(r&&!r.Sm){const{qm:i,gh:o}=r
if(i&&o){const s=YA()
_u(s,n.Qm,i.Qm)
const a=YA()
_u(a,t,o.Qm),Qu(s,a)||(c=1),r.Ee.ff&&(e.bm=a,e.gv=s,e.fv=r)}}}e.fm("didUpdate",{
gh:t,qm:n,yu:a,ay:s,ym:l,gm:c})}else if(e.jm()){const{mh:t}=e.Ee
t&&t()}e.Ee.xt=void 0}function sd(e){
e.Ma&&(e.bv()||(e.Bp=e.Ma.Bp),e.Vp||(e.Vp=!!(e.Bp||e.Ma.Bp||e.Ma.Vp)),
e.Hp||(e.Hp=e.Ma.Hp))}function ad(e){e.Bp=e.Vp=e.Hp=0}function ld(e){e.oy()}
function cd(e){e.dv()}function ud(e){e.Up=0}function dd(e){const{rf:t}=e.Ee
t&&t.Vf().ly&&t.ap("BeforeLayoutMeasure"),e.Rp()}function hd(e){
e.Uv(),e.uv=e.bm=e.Ve=void 0,e.Bp=1}function fd(e){e.pv()}function pd(e){e.xv()}
function md(e){e.Jv()}function vd(e){e.cy()}function yd(e,t,n){
e.zf=Oj(t.zf,0,n),e.Wh=Oj(t.Wh,1,n),e.gu=t.gu,e.Uf=t.Uf}function gd(e,t,n,r){
e.an=Oj(t.an,n.an,r),e.qu=Oj(t.qu,n.qu,r)}function wd(e){
return e.Ov&&void 0!==e.Ov.Pv}function bd(e){e.an=VD(e.an),e.qu=VD(e.qu)}
function xd(e,t,n){
return"position"===e||"preserve-aspect"===e&&(r=Zu(t),i=Zu(n),
!(.2>=Math.abs(r-i)))
var r,i}function kd(e){var t
return e!==e.ih&&(null==(t=e.Zm)?void 0:t.nv)}function Nd(e,t,n){const{f:r}=e
e.Nf&&r.wp&&e.Nf.mp("whileHover","Start"===n)
const i=r["onHover"+n]
i&&YO.Vu((()=>i(t,gu(t))))}function Sd(e,t,n){const{f:r}=e
if(e.S instanceof HTMLButtonElement&&e.S.Oe)return
e.Nf&&r.Ih&&e.Nf.mp("whileTap","Start"===n)
const i=r["onTap"+("End"===n?"":n)]
i&&YO.Vu((()=>i(t,gu(t))))}function _d(e,t,n,r){
const i=n[t],{e:o,Wa:s}=tI[t],a=i.S,l=n.uy
i.S=e["scroll"+s],i.dy=e["scroll"+o]-e["client"+o],i.Ht.e=0,i.Ht[0]=0,i.Ht[1]=i.dy,
i.hy=_O(0,i.dy,i.S)
const c=r-l
i.vd=c>50?0:dl(i.S-a,c)}function Td(e,t,n=0){let r=0
if(e in nI&&(e=nI[e]),"string"==typeof e){const t=parseFloat(e)
e.yc("px")?r=t:e.yc("%")?e=t/100:e.yc("vw")?r=t/100*document.nn.Ua:e.yc("vh")?r=t/100*document.nn.Ba:e=t
}return"number"==typeof e&&(r=t*e),n+r}function Ed(e,t,n,r){
let i=Array.isArray(e)?e:rI,o=0,s=0
return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.Z()).ie(" ")?e.ne(" "):[e,nI[e]?e:"0"]),
o=Td(i[0],n,r),s=Td(i[1],t),o-s}
function Cd(e,{fy:t=document.scrollingElement,...n}={}){if(!t)return kO
let r=lI.t(t)
r||(r=new Set,lI.te(t,r))
const i=(function(e,t,n,r={}){return{Ym(t){((e,t=e,n)=>{
if(n.zs.py=0,n.Us.py=0,t!==e){let r=t
for(;r&&r!==e;)n.zs.py+=r.Ia,n.Us.py+=r.Ra,r=r.ca}
n.zs.my=t===e?t.Va:t.Ua,n.Us.my=t===e?t.Ha:t.Ba,n.zs.vy=e.Ua,n.Us.vy=e.Ba
})(e,r.Ve,n),((e,t,n)=>{_d(e,"x",t,n),_d(e,"y",t,n),t.uy=n
})(e,n,t),(r.Ht||r.Ve)&&((e,t,n)=>{
const{Ht:r=iI.yy}=n,{Ve:i=e,gy:o="y"}=n,s="y"===o?"height":"width",a=i!==e?((e,t)=>{
const n={zs:0,Us:0}
let r=e
for(;r&&r!==t;)if(Ql(r))n.zs+=r.Ia,n.Us+=r.Ra,r=r.ca
else if("svg"===r.Pr){const e=r.Da()
r=r.wy
const t=r.Da()
n.zs+=e.kn-t.kn,n.Us+=e.Sn-t.Sn}else{if(!(r instanceof SVGGraphicsElement))break
{const{zs:e,Us:t}=r.by()
n.zs+=e,n.Us+=t
let i=null,o=r.We
for(;!i;)"svg"===o.Pr&&(i=o),o=r.We
r=i}}return n})(i,e):oI,l=i===e?{Bs:e.Va,Vs:e.Ha
}:(e=>"by"in e&&"svg"!==e.Pr?e.by():{Bs:e.Ua,Vs:e.Ba})(i),c={Bs:e.Ua,Vs:e.Ba}
t[o].Ht.e=0
let u=!t[o].xy
const d=r.e
for(let h=0;d>h;h++){const e=Ed(r[h],c[s],l[s],a[o])
u||e===t[o].ky[h]||(u=1),t[o].Ht[h]=e}u&&(t[o].xy=Pl(t[o].Ht,Al(r),{Ed:0
}),t[o].ky=[...t[o].Ht]),t[o].hy=gO(0,1,t[o].xy(t[o].S))})(e,n,r)},ap:()=>t(n)}
})(t,e,{uy:0,zs:{S:0,Ht:[],hy:0,dy:0,py:0,my:0,vy:0,vd:0},Us:{S:0,Ht:[],hy:0,
dy:0,py:0,my:0,vy:0,vd:0}},n)
if(r.$(i),!sI.On(t)){const e=()=>{for(const e of r)e.Ym(GO.Pu)
YO.Uu(n)},n=()=>{for(const e of r)e.ap()},i=()=>YO.Lu(e)
sI.te(t,i)
const l=cI(t)
window.Pn("resize",i,{Dn:1
}),t!==document.nn&&aI.te(t,(a=i,"function"==typeof(s=t)?(o=s,
hA.$(o),fA||(fA=()=>{const e={get Bs(){return window.innerWidth},get Vs(){
return window.innerHeight}}
hA.d((t=>t(e)))},window.Pn("resize",fA)),()=>{
hA.at(o),hA.Bi||"function"!=typeof fA||(window.Nu("resize",fA),fA=void 0)
}):((e,t)=>{lA||"undefined"!=typeof ResizeObserver&&(lA=new ResizeObserver(lc))
const n=Xl(e)
return n.d((e=>{let n=aA.t(e)
n||(n=new Set,aA.te(e,n)),n.$(t),null==lA||lA.Ja(e)})),()=>{n.d((e=>{
const n=aA.t(e)
null==n||n.at(t),(null==n?void 0:n.Bi)||null==lA||lA.Qa(e)}))}
})(s,a))),l.Pn("scroll",i,{Dn:1}),i()}var o,s,a
const l=sI.t(t)
return YO.Lu(l,0,1),()=>{var e
KO(l)
const n=lI.t(t)
if(!n)return
if(n.at(i),n.Bi)return
const r=sI.t(t)
sI.at(t),r&&(cI(t).Nu("scroll",r),null==(e=aI.t(t))||e(),window.Nu("resize",r))}
}function Md({ui:e,fy:t,...n}){const{gy:r}=n
e&&(t=e)
const i=uI.t(t)??new Map
uI.te(t,i)
const o=n.Ve??"self",s=i.t(o)??{},a=r+(n.Ht??[]).A(",")
return s[a]||(s[a]=!n.Ve&&_P()?new ScrollTimeline({ui:t,gy:r}):(e=>{const t={r:0
},n=Cd((n=>{t.r=100*n[e.gy].hy}),e)
return{th:t,Ol:n}})({fy:t,...n})),s[a]}function Od({fy:e,Ve:t,...n}={}){
const r=sl(dI),i=Bp.Wo(null),o=Bp.Wo(0),s=Bp.Mo((()=>(i.S=((e,{gy:t="y",fy:n=document.scrollingElement,...r}={})=>{
if(!n)return kO
const i={gy:t,fy:n,...r}
return"function"==typeof e?((e,t)=>(e=>2===e.e)(e)?Cd((n=>{e(n[t.gy].hy,n)
}),t):cc(e,Md(t)))(e,i):((e,t)=>{const n=Md(t)
return e.Ny({Sy:t.Ve?void 0:n,Ja(e){return e._y(),cc((t=>{e.uy=e.md*t}),n)}})
})(e,i)})(((e,{zs:t,Us:n})=>{
r.Sa.te(t.S),r.Ty.te(t.hy),r._a.te(n.S),r.Ey.te(n.hy)}),{...n,
fy:(null==e?void 0:e.S)||void 0,Ve:(null==t?void 0:t.S)||void 0}),()=>{var e
null==(e=i.S)||e.o(i)})),[e,t,JSON.stringify(n.Ht)])
return vO((()=>(o.S=0,hI(e)||hI(t)?void(o.S=1):s())),[s]),Bp.To((()=>o.S?(hI(e),
hI(t),s()):void 0),[s]),r}function jd(e,t){const n=(e=>{
const t=sl((()=>Zl(e))),{Ef:n}=Bp.Bo(vA)
if(n){const[,n]=Bp._o(e)
Bp.To((()=>t.Cy("change",n)),[])}return t})(t()),r=()=>n.te(t())
return r(),vO((()=>{const t=()=>YO.Bu(r,0,1),n=e.Oo((e=>e.Cy("change",t)))
return()=>{n.d((e=>e())),KO(r)}})),n}function Pd(e,t,n,r){
if("function"==typeof e)return(e=>{QP.S=[],e()
const t=jd(QP.S,e)
return QP.S=void 0,t})(e)
const i="function"==typeof t?t:((...e)=>{
const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=Pl(e[1+n],e[2+n],e[3+n])
return t?i(r):i})(t,n,r)
return Array.isArray(e)?Ad(e,i):Ad([e],(([e])=>i(e)))}function Ad(e,t){
const n=sl((()=>[]))
return jd(e,(()=>{n.e=0
const r=e.e
for(let t=0;r>t;t++)n[t]=e[t].t()
return t(n)}))}function Dd({w:e,My:t="system",Oy:n="school-news-theme",...r}){
const[i,o]=Bp._o((()=>localStorage.jy(n)||t))
Bp.To((()=>{const e=window.Qt.nn
if(e.Py.Am("light","dark"),"system"===i){
const t=window.matchMedia("(prefers-color-scheme: dark)").va?"dark":"light"
return void e.Py.$(t)}e.Py.$(i)}),[i])
const s={Ay:i,Dy(e){localStorage.Iy(n,e),o(e)}}
return Gp.zo(pI.Uo,{...r,r:s,w:e})}function Id({w:e}){
const[t,n]=Bp._o(0),[r,i]=Bp._o("Loading...")
return Gp.zo(mI.Uo,{r:{Ry:t,$y:n,Fy:r,Ly:i},w:e})}function Rd(){
const e=Bp.Bo(mI)
if(void 0===e)throw Error("useLoading must be used within a LoadingProvider")
return e}function $d(e){return"object"==typeof e&&null!==e&&"zy"in e}
function Fd(e,t,n,r,i,o){return BN(this,void 0,void 0,(function*(){
return new Promise(((s,a)=>{e(n,((e,t,n,r)=>{const i={Uy:e,
By:(null==t?void 0:t.By)||{}}
return"GET"===e?i:(i.By=Object.ml({Vy:"application/json"
},null==t?void 0:t.By),r&&(i.we=JSON.stringify(r)),Object.ml(Object.ml({},i),n))
})(t,r,i,o)).R((e=>{if(!e.Hy)throw e
return(null==r?void 0:r.Wy)?e:e.qy()
})).R((e=>s(e))).yl((e=>((e,t,n)=>BN(void 0,void 0,void 0,(function*(){
const r=yield UN(void 0,void 0,void 0,(function*(){
return"undefined"==typeof Response?(yield yI((()=>Promise.vl().R((()=>CI))),void 0)).Yy:Response
}))
e instanceof r&&!(null==n?void 0:n.Wy)?e.qy().R((n=>{t(new gR(kR(n),e.al||500))
})).yl((e=>{t(new wR(kR(e),e))})):t(new wR(kR(e),e))})))(e,a,r)))}))}))}
function Ld(e,t,n,r){return BN(this,void 0,void 0,(function*(){
return Fd(e,"GET",t,n,r)}))}function zd(e,t,n,r,i){
return BN(this,void 0,void 0,(function*(){return Fd(e,"POST",t,r,i,n)}))}
function Ud(e,t,n,r,i){return BN(this,void 0,void 0,(function*(){
return Fd(e,"DELETE",t,r,i,n)}))}function Bd(e){
return"object"==typeof e&&null!==e&&"Ky"in e}function Vd(e){
return Bd(e)&&"AuthRetryableFetchError"===e.oe}function Hd(e,t,n){
if(null!==e)for(t.Rr=t.Rr<<8|e,t.Gy+=8;t.Gy>=6;){const e=t.Rr>>t.Gy-6&63
n(QR[e]),t.Gy-=6}else if(t.Gy>0)for(t.Rr=t.Rr<<6-t.Gy,t.Gy=6;t.Gy>=6;){
const e=t.Rr>>t.Gy-6&63
n(QR[e]),t.Gy-=6}}function Wd(e,t,n){const r=e$[e]
if(-1>=r){if(-2===r)return
throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}
for(t.Rr=t.Rr<<6|r,t.Gy+=6;t.Gy>=8;)n(t.Rr>>t.Gy-8&255),t.Gy-=8}function qd(e){
const t=[],n=e=>{t.M(String.fromCodePoint(e))},r={Jy:0,Xy:0},i={Rr:0,Gy:0
},o=e=>{((e,t,n)=>{if(0===t.Jy){if(127>=e)return void n(e)
for(let n=1;6>n;n+=1)if(!(e>>7-n&1)){t.Jy=n
break}if(2===t.Jy)t.Xy=31&e
else if(3===t.Jy)t.Xy=15&e
else{if(4!==t.Jy)throw Error("Invalid UTF-8 sequence")
t.Xy=7&e}t.Jy-=1}else if(t.Jy>0){if(127>=e)throw Error("Invalid UTF-8 sequence")
t.Xy=t.Xy<<6|63&e,t.Jy-=1,0===t.Jy&&n(t.Xy)}})(e,r,n)}
for(let s=0;s<e.e;s+=1)Wd(e.Qy(s),i,o)
return t.A("")}function Yd(e,t){if(e>127){
if(2047>=e)return t(192|e>>6),void t(128|63&e)
if(65535>=e)return t(224|e>>12),t(128|e>>6&63),void t(128|63&e)
if(1114111>=e)return t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),void t(128|63&e)
throw Error("Unrecognized Unicode codepoint: "+e.C(16))}t(e)}function Kd(e){
const t=[],n={Rr:0,Gy:0},r=e=>{t.M(e)}
for(let i=0;i<e.e;i+=1)Wd(e.Qy(i),n,r)
return new Uint8Array(t)}function Gd(e){const t=[],n={Rr:0,Gy:0},r=e=>{t.M(e)}
return e.d((e=>Hd(e,n,r))),Hd(null,n,r),t.A("")}function Jd(e){const t=e.ne(".")
if(3!==t.e)throw new XR("Invalid JWT structure")
for(let n=0;n<t.e;n++)if(!LR.K(t[n]))throw new XR("JWT not in base64url format")
return{Zy:JSON.Rc(qd(t[0])),Mr:JSON.Rc(qd(t[1])),eg:Kd(t[2]),tg:{Zy:t[0],Mr:t[1]
}}}function Xd(e){return("0"+e.C(16)).sc(-2)}async function Qd(e,t,n=0){
const r=(()=>{const e=new Uint32Array(56)
if("undefined"==typeof crypto){
const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",t=e.e
let n=""
for(let r=0;56>r;r++)n+=e.ac(Math.floor(Math.random()*t))
return n}return crypto.getRandomValues(e),Array.Go(e,Xd).A("")})()
let i=r
n&&(i+="/PASSWORD_RECOVERY"),await o$(e,t+"-code-verifier",i)
const o=await(async e=>{
if("undefined"==typeof crypto||void 0===crypto.ng||"undefined"==typeof TextEncoder)return e
const t=await(async e=>{
const t=(new TextEncoder).rg(e),n=await crypto.ng.di("SHA-256",t),r=new Uint8Array(n)
return Array.Go(r).Oo((e=>String.fromCharCode(e))).A("")})(e)
return btoa(t).E(/\+/g,"-").E(/\//g,"_").E(/=+$/,"")})(r)
return[o,r===o?"plain":"s256"]}function Zd(e){
if(!u$.K(e))throw Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}function eh(){return new Proxy({},{t(e,t){
if("__isUserNotAvailableProxy"===t)return 1
if("symbol"==typeof t){const e=t.C()
if("Symbol(Symbol.toPrimitive)"===e||"Symbol(Symbol.toStringTag)"===e||"Symbol(util.inspect.custom)"===e)return
}
throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)
},te(e,t){
throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
},ig(e,t){
throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
}})}async function th(e){var t,n
if(!("object"==typeof(n=e)&&null!==n&&"al"in n&&"Hy"in n&&"qy"in n&&"function"==typeof n.qy))throw new GR(d$(e),0)
if(h$.ie(e.al))throw new GR(d$(e),e.al)
let r,i
try{r=await e.qy()}catch(s){throw new BR(d$(s),s)}const o=(e=>{
const t=e.By.t($R)
if(!t)return null
if(!t.Q(c$))return null
try{return new Date(t+"T00:00:00.0Z")}catch(s){return null}})(e)
if(o&&o.og()>=FR.Pu&&"object"==typeof r&&r&&"string"==typeof r.sg?i=r.sg:"object"==typeof r&&r&&"string"==typeof r.ag&&(i=r.ag),
i){
if("weak_password"===i)throw new JR(d$(r),e.al,(null===(t=r.lg)||void 0===t?void 0:t.cg)||[])
if("session_not_found"===i)throw new HR
}else if("object"==typeof r&&r&&"object"==typeof r.lg&&r.lg&&Array.isArray(r.lg.cg)&&r.lg.cg.e&&r.lg.cg.Ao(((e,t)=>e&&"string"==typeof t),1))throw new JR(d$(r),e.al,r.lg.cg)
throw new UR(d$(r),e.al||500,i)}async function nh(e,t,n,r){var i
const o=Object.ml({},null==r?void 0:r.By)
o[$R]||(o[$R]=FR.oe),(null==r?void 0:r.ug)&&(o.dg="Bearer "+r.ug)
const s=null!==(i=null==r?void 0:r.hg)&&void 0!==i?i:{}
;(null==r?void 0:r.fg)&&(s.pg=r.fg)
const a=Object.h(s).e?"?"+new URLSearchParams(s).C():"",l=await(async(e,t,n,r,i,o)=>{
const s=((e,t,n,r)=>{const i={Uy:e,By:(null==t?void 0:t.By)||{}}
return"GET"===e?i:(i.By=Object.ml({Vy:"application/json;charset=UTF-8"
},null==t?void 0:t.By),i.we=JSON.stringify(r),Object.ml(Object.ml({},i),{}))
})(t,r,0,o)
let a
try{a=await e(n,Object.ml({},s))}catch(l){throw new GR(d$(l),0)}
if(a.Hy||await th(a),null==r?void 0:r.Wy)return a
try{return await a.qy()}catch(l){await th(l)}})(e,t,n+a,{By:o,
Wy:null==r?void 0:r.Wy},0,null==r?void 0:r.we)
return(null==r?void 0:r.mg)?null==r?void 0:r.mg(l):{Ft:Object.ml({},l),Fl:null}}
function rh(e){var t,n
let r=null
return(e=>e.vg&&e.yg&&e.gg)(e)&&(r=Object.ml({},e),e.wg||(r.wg=(n=e.gg,Math.round(Date.Wu()/1e3)+n))),
{Ft:{bg:r,xg:null!==(t=e.xg)&&void 0!==t?t:e},Fl:null}}function ih(e){
const t=rh(e)
return!t.Fl&&e.lg&&"object"==typeof e.lg&&Array.isArray(e.lg.cg)&&e.lg.cg.e&&e.lg.ci&&"string"==typeof e.lg.ci&&e.lg.cg.Ao(((e,t)=>e&&"string"==typeof t),1)&&(t.Ft.lg=e.lg),
t}function oh(e){var t
return{Ft:{xg:null!==(t=e.xg)&&void 0!==t?t:e},Fl:null}}function sh(e){return{
Ft:e,Fl:null}}function ah(e){
const{kg:t,Ng:n,Sg:r,pg:i,_g:o}=e,s=YN(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"])
return{Ft:{Tg:{kg:t,Ng:n,Sg:r,pg:i,_g:o},xg:Object.ml({},s)},Fl:null}}
function lh(e){return e}function ch(e={}){return{jy(t){return e[t]||null},
Iy(t,n){e[t]=n},Eg(t){delete e[t]}}}async function uh(e,t,n){
const r=new globalThis.AbortController
return t>0&&setTimeout((()=>{r.jl()
}),t),await Promise.vl().R((()=>globalThis.Ac.Cg.request(e,0===t?{
lr:"exclusive",Mg:1}:{lr:"exclusive",Yl:r.Yl},(async r=>{if(!r){
if(0===t)throw new y$(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`)
if(m$)try{await globalThis.Ac.Cg.hg()}catch(i){}return await n()}try{
return await n()}finally{}}))))}async function dh(e,t,n){return await n()}
function hh(){const e=Bp.Bo(_$)
if(void 0===e)throw Error("useAuth must be used within an AuthProvider")
return e}function fh({w:e}){
const[t,n]=Bp._o(null),[r,i]=Bp._o(null),[o,s]=Bp._o(1)
Bp.To((()=>{const{Ft:{Og:e}}=S$.Pg.jg(((e,t)=>{
i(t),n((null==t?void 0:t.xg)??null),s(0)}))
return S$.Pg.Ag().R((({Ft:{bg:e}})=>{i(e),n((null==e?void 0:e.xg)??null),s(0)
})),()=>e.Dg()}),[])
const a={xg:t,bg:r,async Ig(e,t){const{Fl:n}=await S$.Pg.Rg({$g:e,Fg:t})
return{Fl:n}},async Lg(e,t,n){const r=window.Jt.gu+"/",{Fl:i}=await S$.Pg.Lg({
$g:e,Fg:t,Ee:{zg:r,Ft:{Ug:n}}})
return{Fl:i}},async Bg(){await S$.Pg.Bg()},Vg:o}
return Gp.zo(_$.Uo,{r:a,w:e})}function ph(){const{Ay:e,Dy:t}=(()=>{
const e=Bp.Bo(pI)
if(void 0===e)throw Error("useTheme must be used within a ThemeProvider")
return e})()
return Gp.zo(E$,{Hg:"ghost",Bi:"icon",Fi(){return t("light"===e?"dark":"light")
},As:"w-8 h-8",Wg:"Toggle theme",w:"dark"===e?Gp.zo(ME,{As:"h-4 w-4"
}):Gp.zo(zE,{As:"h-4 w-4"})})}function mh(){const[e,t]=Bp._o(0),n=Ha()
return Gp.zo(eI.Zy,{Jh:{Us:-100},Yd:{Us:0},
As:"sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
w:Gp.Os("div",{As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.Os("div",{
As:"flex h-16 items-center justify-between",w:[Gp.zo(eI.qg,{Jh:{jv:0,zs:-20},
Yd:{jv:1,zs:0},xt:{Bd:.1},w:Gp.Os(uO,{Jc:"/",
As:"flex items-center space-x-2 hover-lift",w:[Gp.zo("div",{
As:"w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center",
w:Gp.zo(sE,{As:"h-5 w-5 text-white"})}),Gp.Os("div",{As:"hidden sm:block",
w:[Gp.zo("h1",{As:"font-playfair font-bold text-xl text-gradient",
w:"Homagama Maha Vidyalaya"}),Gp.zo("p",{
As:"text-xs text-muted-foreground -mt-1",w:"School News"})]})]})}),Gp.zo("nav",{
As:"hidden md:flex items-center space-x-8",w:I$.Oo(((e,t)=>{const r=n.rc===e.Gt
return Gp.zo(eI.qg,{Jh:{jv:0,Us:-20},Yd:{jv:1,Us:0},xt:{Bd:.1+.1*t},w:Gp.Os(uO,{
Jc:e.Gt,
As:"flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 "+(r?"bg-primary text-primary-foreground shadow-glow":"hover:bg-muted hover-lift"),
w:[Gp.zo(e.Yg,{As:"h-4 w-4"}),Gp.zo("span",{As:"font-medium",w:e.oe})]})},e.oe)
}))}),Gp.Os("div",{As:"flex items-center space-x-4",w:[Gp.zo(eI.qg,{Jh:{jv:0,
zs:20},Yd:{jv:1,zs:0},xt:{Bd:.2},w:Gp.zo(ph,{})}),Gp.zo(eI.qg,{Jh:{jv:0,zs:20},
Yd:{jv:1,zs:0},xt:{Bd:.3},As:"md:hidden",w:Gp.zo(E$,{Hg:"outline",Bi:"sm",Fi(){
return t(!e)},As:"w-9 h-9 px-0",w:e?Gp.zo(GE,{As:"h-4 w-4"}):Gp.zo(CE,{
As:"h-4 w-4"})})})]})]}),Gp.zo(bA,{w:e&&Gp.zo(eI.qg,{Jh:{jv:0,Vs:0},Yd:{jv:1,
Vs:"auto"},kp:{jv:0,Vs:0},
As:"md:hidden border-t border-border/40 mt-4 pt-4 pb-4",w:Gp.zo("nav",{
As:"space-y-2",w:I$.Oo(((e,r)=>{const i=n.rc===e.Gt
return Gp.zo(eI.qg,{Jh:{jv:0,zs:-20},Yd:{jv:1,zs:0},xt:{Bd:.1*r},w:Gp.Os(uO,{
Jc:e.Gt,Fi(){return t(0)},
As:"flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 "+(i?"bg-primary text-primary-foreground":"hover:bg-muted"),
w:[Gp.zo(e.Yg,{As:"h-5 w-5"}),Gp.zo("span",{As:"font-medium",w:e.oe})]})},e.oe)
}))})})})]})})}function vh(){return Gp.zo("footer",{
As:"bg-card border-t border-border pt-12 pb-6",w:Gp.Os("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.Os("div",{
As:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",w:[Gp.Os(eI.qg,{Jh:{
jv:0,Us:20},gp:{jv:1,Us:0},xt:{md:.5},As:"space-y-4",w:[Gp.Os(uO,{Jc:"/",
As:"flex items-center space-x-2 hover-lift",w:[Gp.zo("div",{
As:"w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center",
w:Gp.zo(sE,{As:"h-6 w-6 text-white"})}),Gp.Os("div",{w:[Gp.zo("h3",{
As:"font-playfair font-bold text-xl text-gradient",w:"Homagama Maha Vidyalaya"
}),Gp.zo("p",{As:"text-xs text-muted-foreground -mt-1",w:"School News"})]})]
}),Gp.zo("p",{As:"text-muted-foreground text-sm",
w:"Empowering students with knowledge, skills, and values to excel in a rapidly changing world."
}),Gp.zo("div",{As:"flex items-center space-x-4 pt-2",w:R$.Oo((e=>Gp.zo("a",{
Gt:e.Gt,Wg:e.oe,
As:"w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200",
w:Gp.zo(e.Yg,{As:"h-4 w-4"})},e.oe)))})]}),Gp.Os(eI.qg,{Jh:{jv:0,Us:20},gp:{
jv:1,Us:0},xt:{md:.5,Bd:.1},As:"space-y-4",w:[Gp.zo("h3",{
As:"font-bold text-lg",w:"Quick Links"}),Gp.zo("ul",{As:"space-y-2",
w:$$.Oo((e=>Gp.zo("li",{w:Gp.Os(uO,{Jc:e.Gt,
As:"text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2",
w:[Gp.zo(oE,{As:"h-3 w-3"}),Gp.zo("span",{w:e.oe})]})},e.oe)))})]
}),Gp.Os(eI.qg,{Jh:{jv:0,Us:20},gp:{jv:1,Us:0},xt:{md:.5,Bd:.2},As:"space-y-4",
w:[Gp.zo("h3",{As:"font-bold text-lg",w:"Contact Us"}),Gp.Os("ul",{
As:"space-y-3",w:[Gp.Os("li",{As:"flex items-start space-x-3",w:[Gp.zo(EE,{
As:"h-5 w-5 text-primary shrink-0 mt-0.5"}),Gp.zo("span",{
As:"text-muted-foreground text-sm",w:"123 School Lane, Homagama, Sri Lanka"})]
}),Gp.Os("li",{As:"flex items-center space-x-3",w:[Gp.zo(jE,{
As:"h-5 w-5 text-primary shrink-0"}),Gp.zo("span",{
As:"text-muted-foreground text-sm",w:"+94 11 2345 678"})]}),Gp.Os("li",{
As:"flex items-center space-x-3",w:[Gp.zo(TE,{As:"h-5 w-5 text-primary shrink-0"
}),Gp.zo("span",{As:"text-muted-foreground text-sm",w:"info@homagamamv.edu.lk"
})]})]})]}),Gp.Os(eI.qg,{Jh:{jv:0,Us:20},gp:{jv:1,Us:0},xt:{md:.5,Bd:.3},
As:"space-y-4",w:[Gp.zo("h3",{As:"font-bold text-lg",w:"Newsletter"
}),Gp.zo("p",{As:"text-muted-foreground text-sm",
w:"Subscribe to our newsletter for the latest updates."}),Gp.Os("div",{
As:"flex flex-col space-y-2",w:[Gp.zo("input",{k:"email",
Kg:"Your email address",
As:"h-10 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
}),Gp.zo(E$,{As:"w-full",w:"Subscribe"})]})]})]}),Gp.Os(eI.qg,{Jh:{jv:0},gp:{
jv:1},xt:{md:.5,Bd:.4},
As:"border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground",
w:[Gp.Os("p",{
w:["\xa9 ",(new Date).Gg()," Homagama Maha Vidyalaya. All rights reserved."]
}),Gp.Os("p",{As:"mt-1 flex items-center justify-center",
w:["Made with ",Gp.zo(bE,{As:"h-3 w-3 text-primary mx-1"})," for education"]})]
})]})})}function yh(){const{Fy:e}=Rd()
return Gp.zo(eI.qg,{Jh:{jv:0},Yd:{jv:1},kp:{jv:0},
As:"fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
w:Gp.Os("div",{As:"text-center",w:[Gp.zo(eI.qg,{
As:"inline-block w-16 h-16 mb-6 border-4 border-primary/20 border-t-primary rounded-full",
Yd:{If:360},xt:{md:1,Ad:1/0,Cd:"linear"}}),Gp.Os(eI.qg,{Jh:{Wh:.9,jv:0},Yd:{
Wh:1,jv:1},xt:{Bd:.2},As:"space-y-2",w:[Gp.zo("h2",{
As:"text-2xl font-playfair font-bold text-gradient",w:"Homagama Maha Vidyalaya"
}),Gp.zo("p",{As:"text-muted-foreground",w:e})]})]})})}function gh(){
return Gp.Os("section",{
As:"relative min-h-screen flex items-center justify-center overflow-hidden",
w:[Gp.Os("div",{As:"absolute inset-0 z-0",w:[Gp.zo("img",{
eo:"/assets/hero-school-C-DD387h.jpg",Jg:"Homagama Maha Vidyalaya Campus",
As:"w-full h-full object-cover"}),Gp.zo("div",{
As:"absolute inset-0 bg-black/40 dark:bg-black/60"}),Gp.zo("div",{
As:"absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
})]}),L$.Oo(((e,t)=>Gp.zo(eI.qg,{
As:"absolute w-2 h-2 bg-primary/30 rounded-full blur-sm",$e:{kn:20+20*t+"%",
Sn:30+10*t+"%"},Yd:{Us:[0,e.Xg,0],jv:[.3,.8,.3]},xt:{md:e.md,Ad:1/0,Bd:e.Bd,
Cd:"easeInOut"}},t))),Gp.zo("div",{
As:"relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center",
w:Gp.Os(eI.qg,{Jh:{jv:0,Us:30},Yd:{jv:1,Us:0},xt:{md:.8},As:"max-w-4xl mx-auto",
w:[Gp.zo(eI.qg,{Jh:{jv:0,Wh:.8},Yd:{jv:1,Wh:1},xt:{Bd:.2,md:.6},
As:"inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6",
w:Gp.zo("span",{As:"text-primary font-medium text-sm",
w:"\ud83c\udf93 Excellence in Education Since 1985"})}),Gp.Os(eI.Qg,{Jh:{jv:0,
Us:20},Yd:{jv:1,Us:0},xt:{Bd:.4,md:.8},
As:"text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-white leading-tight",
w:["Welcome to"," ",Gp.zo("span",{As:"text-gradient",w:"Homagama Maha Vidyalaya"
})]}),Gp.zo(eI.Zg,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{Bd:.6,md:.8},
As:"text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed",
w:"Discover the latest news, upcoming events, and celebrate the achievements of our vibrant school community. Excellence is our tradition."
}),Gp.Os(eI.qg,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{Bd:.8,md:.8},
As:"flex flex-col sm:flex-row gap-4 justify-center mb-16",w:[Gp.zo(E$,{ew:1,
Bi:"lg",
As:"group bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg shadow-glow hover-lift",
w:Gp.Os(uO,{Jc:"/news",w:["Latest News",Gp.zo(oE,{
As:"ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"})]})
}),Gp.zo(E$,{ew:1,Hg:"outline",Bi:"lg",
As:"px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm hover-lift",
w:Gp.zo(uO,{Jc:"/events",w:"View Events"})})]}),Gp.zo(eI.qg,{Jh:{jv:0,Us:30},
Yd:{jv:1,Us:0},xt:{Bd:1,md:.8},
As:"grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
w:F$.Oo(((e,t)=>Gp.Os(eI.qg,{Jh:{jv:0,Wh:.8},Yd:{jv:1,Wh:1},xt:{Bd:1.2+.1*t,
md:.6},As:"glass-card p-6 text-center hover-lift",w:[Gp.zo(e.Yg,{
As:"w-8 h-8 text-primary mx-auto mb-3"}),Gp.zo("div",{
As:"text-3xl font-bold text-white mb-1",w:e.r}),Gp.zo("div",{
As:"text-gray-300 text-sm font-medium",w:e.Ds})]},e.Ds)))})]})}),Gp.zo(eI.qg,{
Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{Bd:1.5,md:.8},
As:"absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"})]})}
function wh({As:e,Hg:t,...n}){return Gp.zo("div",{As:qo(z$({Hg:t}),e),...n})}
function bh({tw:e,dr:t,nw:n=0}){return Gp.zo(eI.qg,{Jh:{jv:0,Us:20},gp:{jv:1,
Us:0},xt:{Bd:.1*t,md:.6},rw:{rs:1},w:Gp.Os(C$,{
As:"glass-card h-full group hover-lift "+(n?"ring-2 ring-primary/20":""),
w:[Gp.zo(M$,{As:"p-0",w:Gp.Os("div",{As:"relative overflow-hidden rounded-t-lg",
w:[Gp.zo("img",{eo:e.iw,Jg:e.js,
As:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
}),Gp.zo("div",{
As:"absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
}),Gp.zo("div",{As:"absolute top-4 left-4",w:Gp.zo(wh,{As:(i=e.ow,({
sw:"bg-blue-500",aw:"bg-green-500",lw:"bg-purple-500",cw:"bg-orange-500"
}[i]||"bg-gray-500")+" text-white border-0"),w:e.ow.E("-"," ")})
}),n&&Gp.zo("div",{As:"absolute top-4 right-4",w:Gp.zo(wh,{
As:"bg-accent text-accent-foreground",w:"Featured"})})]})}),Gp.zo(P$,{As:"p-6",
w:Gp.Os("div",{As:"space-y-3",w:[Gp.Os("div",{
As:"flex items-center space-x-4 text-sm text-muted-foreground",w:[Gp.Os("div",{
As:"flex items-center space-x-1",w:[Gp.zo(aE,{As:"w-4 h-4"}),Gp.zo("span",{
w:(r=e.uw,new Date(r).toLocaleDateString("en-US",{dw:"numeric",hw:"long",
fw:"numeric"}))})]}),Gp.Os("div",{As:"flex items-center space-x-1",w:[Gp.zo(YE,{
As:"w-4 h-4"}),Gp.zo("span",{w:e.pw})]})]}),Gp.zo("h3",{
As:"font-playfair font-bold text-xl leading-tight group-hover:text-primary transition-colors",
w:e.js}),Gp.zo("p",{As:"text-muted-foreground leading-relaxed",w:e.mw
}),Gp.zo("div",{As:"flex flex-wrap gap-2",w:e.vw.q(0,3).Oo((e=>Gp.Os("div",{
As:"flex items-center space-x-1 text-xs text-muted-foreground",w:[Gp.zo(UE,{
As:"w-3 h-3"}),Gp.zo("span",{w:e})]},e)))})]})}),Gp.zo(A$,{As:"p-6 pt-0",
w:Gp.zo(E$,{ew:1,Hg:"outline",
As:"w-full group/btn hover:bg-primary hover:text-primary-foreground",
w:Gp.Os(uO,{Jc:"/news/"+e.ir,w:["Read More",Gp.zo(oE,{
As:"ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"})]})})})]})
})
var r,i}function xh(){const[e,t]=Bp._o([]),[n,r]=Bp._o(1),[i,o]=Bp._o(null)
return Bp.To((()=>{(async()=>{try{
const{Ft:e,Fl:n}=await S$.Go("news").ww("\n            *,\n            categories (id, name, slug),\n            profiles (id, full_name, email)\n          ").gw("published",1).yw("created_at",{
bw:0})
if(n)throw n
t(e||[])}catch(e){o(e instanceof Error?e.ci:"An error occurred")}finally{r(0)}
})()}),[]),{tw:e,Vg:n,Fl:i}}function kh(){
const[e,t]=Bp._o([]),[n,r]=Bp._o(1),[i,o]=Bp._o(null)
return Bp.To((()=>{(async()=>{try{
const{Ft:e,Fl:n}=await S$.Go("events").ww("\n            *,\n            categories (id, name, slug),\n            profiles (id, full_name, email)\n          ").gw("published",1).yw("event_date",{
bw:1})
if(n)throw n
t(e||[])}catch(e){o(e instanceof Error?e.ci:"An error occurred")}finally{r(0)}
})()
const e=S$.kw("schema-db-changes").Cy("postgres_changes",{Lt:"*",Nw:"public",
Sw:"events"},(e=>{if("INSERT"===e._w){const n=e.Tw
n.Ew&&S$.Go("events").ww("\n                  *,\n                  categories (id, name, slug),\n                  profiles (id, full_name, email)\n                ").gw("id",n.ir).gw("published",1).Cw().R((({Ft:e})=>{
e&&t((t=>[...t,e].Xo(((e,t)=>new Date(e.Mw).og()-new Date(t.Mw).og()))))}))
}else if("UPDATE"===e._w){const n=e.Tw
n.Ew?S$.Go("events").ww("\n                  *,\n                  categories (id, name, slug),\n                  profiles (id, full_name, email)\n                ").gw("id",n.ir).gw("published",1).Cw().R((({Ft:e})=>{
t(e?t=>t.Oo((t=>t.ir===e.ir?e:t)).Xo(((e,t)=>new Date(e.Mw).og()-new Date(t.Mw).og())):e=>e.Ro((e=>e.ir!==n.ir)))
})):t((e=>e.Ro((e=>e.ir!==n.ir))))}else if("DELETE"===e._w){const n=e.Ow
t((e=>e.Ro((e=>e.ir!==n.ir))))}})).xw()
return()=>{S$.jw(e)}}),[]),{lw:e,Vg:n,Fl:i}}function Nh({As:e,...t}){
return Gp.zo("div",{As:qo("animate-pulse rounded-md bg-muted",e),...t})}
function Sh(){const[e,t]=Bp._o(0),[n,r]=Bp._o(0)
return Bp.To((()=>{if("undefined"==typeof window)return
const e=window.matchMedia("(max-width: 767px)"),n=()=>{t(768>window.innerWidth)}
return t(768>window.innerWidth),r(1),e.Pn("change",n),()=>e.Nu("change",n)
}),[]),e}function _h({w:e,As:t=""}){const n=Bp.Wo(null),[r,i]=Bp._o(0)
Sh()
const{Ey:o}=Od({Ve:n,Ht:["start end","end start"]}),s=Pd(o,[0,1],[0,100])
return Bp.To((()=>{n.S&&i(n.S.Ha)}),[e]),Gp.Os("div",{y:n,As:"relative "+t,
w:[Gp.Os("div",{As:"hidden",w:[Gp.zo("div",{
As:"absolute left-6 sm:left-8 top-0 w-0.5 sm:w-1 h-full bg-muted/30 rounded-full"
}),Gp.zo(eI.qg,{
As:"absolute left-6 sm:left-8 top-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-accent/80 to-primary rounded-full shadow-glow origin-top",
$e:{Vs:Pd(s,(e=>e+"%")),
Pw:Pd(s,(e=>e>10?"0 0 20px rgba(var(--primary-rgb), 0.4)":"none"))}
}),Gp.zo(eI.qg,{
As:"absolute left-4 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full shadow-lg z-10",
$e:{Sn:Pd(s,(e=>e+"%")),jv:Pd(s,[0,10,90,100],[0,1,1,0])},w:Gp.zo("div",{
As:"absolute inset-0 bg-primary rounded-full animate-ping"})})]}),e]})}
function Th({Aw:e,Dw:t}){const n=Bp.Wo(null)
Sh()
const{Ey:r}=Od({Ve:n,Ht:["start end","end start"]}),i=Pd(r,[0,1],[0,100])
return Gp.zo("div",{y:n,As:"hidden",w:Gp.Os("div",{
As:"flex items-center space-x-2 sm:space-x-3 px-2 sm:px-4 py-1 sm:py-2",
w:[Gp.Os("span",{
As:"text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap",
w:[t+1," / ",e]}),Gp.zo("div",{
As:"w-16 sm:w-24 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden",
w:Gp.zo(eI.qg,{As:"h-full bg-gradient-to-r from-primary to-accent rounded-full",
$e:{Bs:Pd(i,(e=>e+"%"))}})}),Gp.zo("span",{
As:"text-xs sm:text-sm font-medium text-primary whitespace-nowrap hidden sm:inline",
w:"Events"})]})})}function Eh({Iw:e,Rw:t,$w:n,Fw:r}){return Sh(),Gp.Os("div",{
As:"hidden",w:[n&&Gp.zo(eI.qg,{Jh:{jv:0,zs:50},Yd:{jv:1,zs:0},kp:{jv:0,zs:50},
w:Gp.zo(E$,{Bi:"icon",Hg:"secondary",As:"rounded-full shadow-md",Fi:e,
w:Gp.zo(dE,{As:"w-5 h-5"})})}),r&&Gp.zo(eI.qg,{Jh:{jv:0,zs:50},Yd:{jv:1,zs:0},
kp:{jv:0,zs:50},w:Gp.zo(E$,{Bi:"icon",Hg:"secondary",
As:"rounded-full shadow-md",Fi:t,w:Gp.zo(cE,{As:"w-5 h-5"})})})]})}
function Ch(){
const{lw:e,Vg:t,Fl:n}=kh(),[r,i]=Bp._o(null),[o,s]=Bp._o(0),[a,l]=Bp._o(0),[c,u]=Bp._o(0),d=Bp.Wo(null)
if(Bp.To((()=>{if(e.e>o&&o>0){
const t=e.Ro((e=>new Date(e.Mw)>=new Date)).Xo(((e,t)=>new Date(e.Mw).og()-new Date(t.Mw).og()))
t.e>0&&(i(t[t.e-1].ir),setTimeout((()=>i(null)),2e3))}s(e.e)
}),[e.e,o]),Bp.To((()=>{const e=()=>{const e=window._a
u(e>500)}
return window.Pn("scroll",e),()=>window.Nu("scroll",e)
}),[]),t)return Gp.zo("div",{As:"space-y-8",
w:[...[,,,]].Oo(((e,t)=>Gp.Os("div",{As:"flex gap-6",w:[Gp.Os("div",{
As:"flex flex-col items-center",w:[Gp.zo(Nh,{As:"w-16 h-16 rounded-full"
}),Gp.zo(Nh,{As:"w-12 h-4 mt-2"})]}),Gp.zo("div",{As:"flex-1",w:Gp.zo(Nh,{
As:"h-32 w-full rounded-lg"})})]},t)))})
if(n)return Gp.zo(B$,{Hg:"destructive",w:Gp.Os(V$,{
w:["Error loading events: ",n]})})
const h=e.Ro((e=>new Date(e.Mw)>=new Date)).q(0,5).Xo(((e,t)=>new Date(e.Mw).og()-new Date(t.Mw).og()))
return 0===h.e?Gp.Os("div",{As:"text-center py-12",w:[Gp.zo(aE,{
As:"w-16 h-16 mx-auto mb-4 text-muted-foreground"}),Gp.zo("h3",{
As:"text-xl font-semibold mb-2",w:"No upcoming events"}),Gp.zo("p",{
As:"text-muted-foreground",w:"Check back later for new events!"})]
}):Gp.Os("div",{As:"relative",w:[Gp.zo(_h,{w:Gp.zo("div",{y:d,As:"space-y-0",
w:Gp.zo(bA,{lr:"popLayout",w:h.Oo(((e,t)=>{return Gp.zo(H$,{Lt:e,dr:t,
Lw:(n=e.ir,r===n)},e.ir)
var n}))})})}),Gp.zo(Th,{Aw:h.e,Dw:a}),Gp.zo(Eh,{Iw(){window.scrollTo({Sn:0,
zw:"smooth"})},Rw(){if(d.S){const e=d.S.w[a+1]
e&&(e.Uw({zw:"smooth",Bw:"center"}),l(a+1))}},$w:c,Fw:a<h.e-1}),Gp.zo(eI.qg,{
Jh:{jv:0,Us:20},gp:{jv:1,Us:0},xt:{Bd:.5,md:.6},As:"flex justify-center mt-12",
w:Gp.zo(E$,{ew:1,Bi:"lg",As:"group",w:Gp.Os(uO,{Jc:"/events",
w:["View All Events",Gp.zo(uE,{
As:"w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"})]})})})]})}
function Mh(){var e
const[t,n]=Bp._o("all"),[r,i]=Bp._o(""),{tw:o,Vg:s,Fl:a}=xh(),l=Bp.Do((()=>{
if(!o.e)return[{ir:"all",oe:"All News",Vw:0}]
const e=new Map
return e.te("all",{ir:"all",oe:"All News",Vw:o.e}),o.d((t=>{if(t.Hw){
const n=t.Hw,r=e.t(n.Ww)||{ir:n.Ww,oe:n.oe,Vw:0}
e.te(n.Ww,{...r,Vw:r.Vw+1})}})),Array.Go(e.Lo())}),[o]),c=Bp.Do((()=>{let e=o
return"all"!==t&&(e=e.Ro((e=>{var n
return(null==(n=e.Hw)?void 0:n.Ww)===t
}))),r&&(e=e.Ro((e=>e.js.Y().ie(r.Y())||e.mw&&e.mw.Y().ie(r.Y())||e.qw.Y().ie(r.Y())))),
e}),[o,t,r])
return s?Gp.zo("div",{As:"min-h-screen py-8 flex items-center justify-center",
w:Gp.Os("div",{As:"text-center",w:[Gp.zo(SE,{
As:"w-8 h-8 animate-spin mx-auto mb-4 text-primary"}),Gp.zo("p",{
As:"text-muted-foreground",w:"Loading news..."})]})}):a?Gp.zo("div",{
As:"min-h-screen py-8",w:Gp.zo("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:Gp.Os(B$,{Hg:"destructive",
As:"max-w-md mx-auto",w:[Gp.zo(hE,{As:"h-4 w-4"}),Gp.Os(V$,{
w:["Error loading news: ",a]})]})})}):Gp.zo("div",{As:"min-h-screen py-8",
w:Gp.Os("div",{As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.Os(eI.qg,{Jh:{
jv:0,Us:20},Yd:{jv:1,Us:0},xt:{md:.6},As:"text-center mb-12",w:[Gp.zo("div",{
As:"inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4",
w:Gp.zo("span",{As:"text-primary font-medium",w:"\ud83d\udcf0 School News"})
}),Gp.Os("h1",{As:"text-4xl md:text-6xl font-playfair font-bold mb-4",
w:["Latest ",Gp.zo("span",{As:"text-gradient",w:"News"})]}),Gp.zo("p",{
As:"text-xl text-muted-foreground max-w-2xl mx-auto",
w:"Stay updated with the latest happenings, achievements, and stories from Riverside High School."
})]}),Gp.zo(eI.qg,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{Bd:.2,md:.6},As:"mb-12",
w:Gp.Os("div",{
As:"flex flex-col md:flex-row gap-6 items-center justify-between",
w:[Gp.Os("div",{As:"relative w-full md:w-96",w:[Gp.zo(IE,{
As:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
}),Gp.zo(q$,{Kg:"Search news...",r,as(e){return i(e.Ve.r)},As:"pl-10"})]
}),Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(wE,{
As:"w-4 h-4 text-muted-foreground"}),Gp.zo("span",{
As:"text-sm font-medium text-muted-foreground",w:"Filter:"}),Gp.zo("div",{
As:"flex flex-wrap gap-2",w:l.Oo((e=>Gp.Os(E$,{Hg:t===e.ir?"default":"outline",
Bi:"sm",Fi(){return n(e.ir)},As:"hover-lift",w:[e.oe,Gp.zo(wh,{Hg:"secondary",
As:"ml-2",w:e.Vw})]},e.ir)))})]})]})}),Gp.zo(eI.qg,{Jh:{jv:0},Yd:{jv:1},xt:{
Bd:.3,md:.6},As:"mb-8",w:Gp.Os("p",{As:"text-muted-foreground",
w:["Showing ",c.e," ",1===c.e?"article":"articles",r&&` for "${r}"`,"all"!==t&&" in "+(null==(e=l.Zu((e=>e.ir===t)))?void 0:e.oe)]
})}),c.e>0?Gp.zo("div",{
As:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",w:c.Oo(((e,t)=>{
var n,r
return Gp.zo(bh,{tw:{ir:e.ir,js:e.js,mw:e.mw||"",qw:e.qw,
pw:(null==(n=e.Yw)?void 0:n.Ug)||"Unknown Author",uw:e.Kw.ne("T")[0],
ow:(null==(r=e.Hw)?void 0:r.Ww)||"general",
iw:e.Gw||"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
nw:e.nw||0,vw:[]},dr:t,nw:e.nw||0},e.ir)}))}):Gp.Os(eI.qg,{Jh:{jv:0,Us:20},Yd:{
jv:1,Us:0},xt:{Bd:.4,md:.6},As:"text-center py-16",w:[Gp.zo("div",{
As:"w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center",
w:Gp.zo(IE,{As:"w-12 h-12 text-muted-foreground"})}),Gp.zo("h3",{
As:"text-2xl font-playfair font-bold mb-2",w:"No articles found"}),Gp.zo("p",{
As:"text-muted-foreground mb-6",
w:"Try adjusting your search terms or filters to find what you're looking for."
}),Gp.zo(E$,{Fi(){i(""),n("all")},w:"Clear Filters"})]})]})})}
function Oh({Lt:e,dr:t,nw:n=0}){return Gp.zo(eI.qg,{Jh:{jv:0,Us:20},gp:{jv:1,
Us:0},xt:{Bd:.1*t,md:.6},rw:{rs:1},w:Gp.Os(C$,{
As:"glass-card h-full group hover-lift "+(n?"ring-2 ring-primary/20":""),
w:[Gp.zo(M$,{As:"p-0",w:Gp.Os("div",{As:"relative overflow-hidden rounded-t-lg",
w:[Gp.zo("img",{eo:e.iw,Jg:e.js,
As:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
}),Gp.zo("div",{
As:"absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
}),Gp.zo("div",{As:"absolute top-4 left-4",w:Gp.zo(wh,{As:(i=e.ow,({
Jw:"bg-primary",aw:"bg-accent text-accent-foreground",Xw:"bg-red-600",
Qw:"bg-orange-500",Zw:"bg-primary"}[i]||"bg-primary")+" text-white border-0"),
w:e.ow})}),Gp.Os("div",{As:"absolute top-4 right-4 space-y-2",w:[n&&Gp.zo(wh,{
As:"bg-accent text-accent-foreground block",w:"Featured"
}),new Date(e.uw)>=new Date&&Gp.zo(wh,{As:"bg-green-500 text-white block",
w:"Upcoming"})]})]})}),Gp.zo(P$,{As:"p-6",w:Gp.Os("div",{As:"space-y-3",
w:[Gp.zo("h3",{
As:"font-playfair font-bold text-xl leading-tight group-hover:text-primary transition-colors",
w:e.js}),Gp.zo("p",{As:"text-muted-foreground leading-relaxed",w:e.Ps
}),Gp.Os("div",{As:"space-y-2 text-sm",w:[Gp.Os("div",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo(aE,{
As:"w-4 h-4 text-primary"}),Gp.zo("span",{
w:(r=e.uw,new Date(r).toLocaleDateString("en-US",{dw:"numeric",hw:"long",
fw:"numeric"}))})]}),Gp.Os("div",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo(pE,{
As:"w-4 h-4 text-primary"}),Gp.zo("span",{w:e.uy})]}),Gp.Os("div",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo(EE,{
As:"w-4 h-4 text-primary"}),Gp.zo("span",{w:e.Jt})]}),e.eb&&Gp.Os("div",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo(KE,{
As:"w-4 h-4 text-primary"}),Gp.Os("span",{w:["Capacity: ",e.eb]})]})]
}),e.tb&&Gp.zo("div",{As:"mt-3",w:Gp.zo(wh,{Hg:"outline",
As:"border-yellow-500 text-yellow-600 dark:text-yellow-400",
w:"Registration Required"})})]})}),Gp.zo(A$,{As:"p-6 pt-0",w:Gp.zo(E$,{ew:1,
Hg:"outline",
As:"w-full group/btn hover:bg-primary hover:text-primary-foreground",
w:Gp.Os(uO,{Jc:"/events/"+e.ir,w:["View Details",Gp.zo(oE,{
As:"ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"})]})})})]})
})
var r,i}function jh(){var e
const[t,n]=Bp._o("all"),[r,i]=Bp._o(""),{lw:o,Vg:s,Fl:a}=kh(),l=Bp.Do((()=>{
if(!o.e)return[{ir:"all",oe:"All Events",Vw:0}]
const e=new Map
return e.te("all",{ir:"all",oe:"All Events",Vw:o.e}),o.d((t=>{if(t.Hw){
const n=t.Hw,r=e.t(n.Ww)||{ir:n.Ww,oe:n.oe,Vw:0}
e.te(n.Ww,{...r,Vw:r.Vw+1})}})),Array.Go(e.Lo())}),[o]),c=Bp.Do((()=>{let e=o
return"all"!==t&&(e=e.Ro((e=>{var n
return(null==(n=e.Hw)?void 0:n.Ww)===t
}))),r&&(e=e.Ro((e=>e.js.Y().ie(r.Y())||e.Ps.Y().ie(r.Y())||e.Jt&&e.Jt.Y().ie(r.Y())))),
e.Xo(((e,t)=>new Date(e.Mw).og()-new Date(t.Mw).og()))}),[o,t,r])
return s?Gp.zo("div",{As:"min-h-screen py-8 flex items-center justify-center",
w:Gp.Os("div",{As:"text-center",w:[Gp.zo(SE,{
As:"w-8 h-8 animate-spin mx-auto mb-4 text-primary"}),Gp.zo("p",{
As:"text-muted-foreground",w:"Loading events..."})]})}):a?Gp.zo("div",{
As:"min-h-screen py-8",w:Gp.zo("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:Gp.Os(B$,{Hg:"destructive",
As:"max-w-md mx-auto",w:[Gp.zo(hE,{As:"h-4 w-4"}),Gp.Os(V$,{
w:["Error loading events: ",a]})]})})}):Gp.zo("div",{As:"min-h-screen py-8",
w:Gp.Os("div",{As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.Os(eI.qg,{Jh:{
jv:0,Us:20},Yd:{jv:1,Us:0},xt:{md:.6},As:"text-center mb-12",w:[Gp.Os("div",{
As:"inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4",
w:[Gp.zo(aE,{As:"w-5 h-5 text-accent"}),Gp.zo("span",{
As:"text-accent font-medium",w:"School Events"})]}),Gp.Os("h1",{
As:"text-4xl md:text-6xl font-playfair font-bold mb-4",
w:["Upcoming ",Gp.zo("span",{As:"text-gradient",w:"Events"})]}),Gp.zo("p",{
As:"text-xl text-muted-foreground max-w-2xl mx-auto",
w:"Join us for exciting events, competitions, and celebrations throughout the school year."
})]}),Gp.zo(eI.qg,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{Bd:.2,md:.6},As:"mb-12",
w:Gp.Os("div",{
As:"flex flex-col md:flex-row gap-6 items-center justify-between",
w:[Gp.Os("div",{As:"relative w-full md:w-96",w:[Gp.zo(IE,{
As:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
}),Gp.zo(q$,{Kg:"Search events...",r,as(e){return i(e.Ve.r)},As:"pl-10"})]
}),Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(wE,{
As:"w-4 h-4 text-muted-foreground"}),Gp.zo("span",{
As:"text-sm font-medium text-muted-foreground",w:"Filter:"}),Gp.zo("div",{
As:"flex flex-wrap gap-2",w:l.Oo((e=>Gp.Os(E$,{Hg:t===e.ir?"default":"outline",
Bi:"sm",Fi(){return n(e.ir)},As:"hover-lift",w:[e.oe,Gp.zo(wh,{Hg:"secondary",
As:"ml-2",w:e.Vw})]},e.ir)))})]})]})}),Gp.zo(eI.qg,{Jh:{jv:0},Yd:{jv:1},xt:{
Bd:.3,md:.6},As:"mb-8",w:Gp.Os("p",{As:"text-muted-foreground",
w:["Showing ",c.e," ",1===c.e?"event":"events",r&&` for "${r}"`,"all"!==t&&" in "+(null==(e=l.Zu((e=>e.ir===t)))?void 0:e.oe)]
})}),c.e>0?Gp.zo("div",{
As:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",w:c.Oo(((e,t)=>{
var n,r
return Gp.zo(Oh,{Lt:{ir:e.ir,js:e.js,Ps:e.Ps,nb:e.Ps,uw:e.Mw.ne("T")[0],
uy:new Date(e.Mw).rb("en-US",{ib:"2-digit",ob:"2-digit"}),Jt:e.Jt||"TBD",
ow:(null==(n=e.Hw)?void 0:n.Ww)||"general",
iw:e.Gw||"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
sb:(null==(r=e.Yw)?void 0:r.Ug)||"Event Organizer",tb:0,nw:e.nw||0,vw:[]},dr:t,
nw:e.nw||0},e.ir)}))}):Gp.Os(eI.qg,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{Bd:.4,
md:.6},As:"text-center py-16",w:[Gp.zo("div",{
As:"w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center",
w:Gp.zo(aE,{As:"w-12 h-12 text-muted-foreground"})}),Gp.zo("h3",{
As:"text-2xl font-playfair font-bold mb-2",w:"No events found"}),Gp.zo("p",{
As:"text-muted-foreground mb-6",
w:"Try adjusting your search terms or filters to find what you're looking for."
}),Gp.zo(E$,{Fi(){i(""),n("all")},w:"Clear Filters"})]})]})})}function Ph(){
var e,t,n,r,i,o,s
const{ir:a}=Ya(),[l,c]=Bp._o(null),[u,d]=Bp._o([]),[h,f]=Bp._o(1)
if(Bp.To((()=>{(async()=>{if(a)try{
const{Ft:e,Fl:t}=await S$.Go("news").ww("\n            *,\n            categories (id, name, slug),\n            profiles (id, full_name, email)\n          ").gw("id",a).gw("published",1).Cw()
if(t)throw t
if(c(e),null==e?void 0:e.ab){
const{Ft:t}=await S$.Go("news").ww("\n              *,\n              categories (id, name, slug),\n              profiles (id, full_name, email)\n            ").gw("category_id",e.ab).gw("published",1).cb("id",a).lb(3)
d(t||[])}}catch(e){}finally{f(0)}})()}),[a]),h)return Gp.zo("div",{
As:"min-h-screen flex items-center justify-center",w:Gp.zo(SE,{
As:"w-8 h-8 animate-spin"})})
if(!l)return Gp.zo(Qa,{Jc:"/news",E:1})
const p=window.Jt.Gt,m="Check out this news from Riverside High School: "+l.js
return Gp.Os("div",{As:"min-h-screen py-8",w:[Gp.Os(dN,{w:[Gp.Os("title",{
w:[l.js," - Riverside High School News"]}),Gp.zo("meta",{oe:"description",
qw:l.mw}),Gp.zo("meta",{ub:"og:title",qw:l.js}),Gp.zo("meta",{
ub:"og:description",qw:l.mw}),Gp.zo("meta",{ub:"og:image",qw:l.iw
}),Gp.zo("meta",{ub:"og:url",qw:p}),Gp.zo("meta",{oe:"twitter:card",
qw:"summary_large_image"})]}),Gp.Os("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.zo(eI.qg,{Jh:{jv:0,zs:-20},
Yd:{jv:1,zs:0},xt:{md:.6},As:"mb-8",w:Gp.zo(E$,{ew:1,Hg:"outline",
As:"hover-lift",w:Gp.Os(uO,{Jc:"/news",w:[Gp.zo(iE,{As:"mr-2 w-4 h-4"
}),"Back to News"]})})}),Gp.Os("div",{
As:"grid grid-cols-1 lg:grid-cols-3 gap-12",w:[Gp.zo("div",{As:"lg:col-span-2",
w:Gp.Os(eI.db,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{md:.6},As:"space-y-8",
w:[Gp.Os("header",{As:"space-y-6",w:[Gp.zo(wh,{
As:(s=(null==(e=l.Hw)?void 0:e.Ww)||"general",({sw:"bg-blue-500",
aw:"bg-green-500",lw:"bg-purple-500",cw:"bg-orange-500"
}[s]||"bg-gray-500")+" text-white border-0"),
w:(null==(t=l.Hw)?void 0:t.oe)||"General"}),Gp.zo("h1",{
As:"text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight",
w:l.js}),Gp.Os("div",{
As:"flex flex-wrap items-center gap-6 text-muted-foreground",w:[Gp.Os("div",{
As:"flex items-center space-x-2",w:[Gp.zo(aE,{As:"w-4 h-4"}),Gp.zo("span",{
w:(o=l.Kw,new Date(o).toLocaleDateString("en-US",{dw:"numeric",hw:"long",
fw:"numeric"}))})]}),Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(YE,{
As:"w-4 h-4"}),Gp.Os("span",{
w:["By ",(null==(n=l.Yw)?void 0:n.Ug)||"Unknown Author"]})]})]}),Gp.Os("div",{
As:"relative overflow-hidden rounded-xl",w:[Gp.zo("img",{
eo:l.Gw||"/placeholder.svg",Jg:l.js,As:"w-full h-96 object-cover"
}),l.hb&&Gp.zo("div",{
As:"absolute inset-0 bg-black/50 flex items-center justify-center",w:Gp.zo(E$,{
Bi:"lg",As:"bg-white text-black hover:bg-white/90",w:"Play Video"})})]})]
}),Gp.zo("div",{As:"prose prose-lg max-w-none dark:prose-invert",w:Gp.zo("div",{
je:{ze:l.qw},As:"space-y-6 text-lg leading-relaxed"})}),l.Hw&&Gp.Os("div",{
As:"flex flex-wrap gap-2 pt-8 border-t border-border",w:[Gp.Os("span",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo(UE,{As:"w-4 h-4"
}),Gp.zo("span",{As:"font-medium",w:"Category:"})]}),Gp.zo(wh,{Hg:"outline",
w:l.Hw.oe})]}),Gp.Os("div",{
As:"flex items-center space-x-4 pt-6 border-t border-border",w:[Gp.Os("div",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo($E,{As:"w-4 h-4"
}),Gp.zo("span",{As:"font-medium",w:"Share:"})]}),Gp.Os("div",{
As:"flex space-x-2",w:[Gp.zo(E$,{Bi:"sm",Hg:"outline",Fi(){
return window.xo("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(p),"_blank")
},w:Gp.zo(yE,{As:"w-4 h-4"})}),Gp.zo(E$,{Bi:"sm",Hg:"outline",Fi(){
return window.xo(`https://twitter.com/intent/tweet?text=${encodeURIComponent(m)}&url=${encodeURIComponent(p)}`,"_blank")
},w:Gp.zo(qE,{As:"w-4 h-4"})}),Gp.zo(E$,{Bi:"sm",Hg:"outline",Fi(){
return window.xo("https://www.linkedin.com/sharing/share-offsite/?url="+encodeURIComponent(p),"_blank")
},w:Gp.zo(NE,{As:"w-4 h-4"})})]})]})]})}),Gp.zo("aside",{As:"space-y-8",
w:u.e>0&&Gp.Os(eI.qg,{Jh:{jv:0,zs:20},Yd:{jv:1,zs:0},xt:{Bd:.3,md:.6},
As:"space-y-6",w:[Gp.zo("h3",{As:"text-2xl font-playfair font-bold",
w:"Related News"}),Gp.zo("div",{As:"space-y-6",w:u.Oo(((e,t)=>{var n,r
return Gp.zo(bh,{tw:{ir:e.ir,js:e.js,mw:e.mw||"",qw:e.qw,
pw:(null==(n=e.Yw)?void 0:n.Ug)||"Unknown Author",uw:e.Kw.ne("T")[0],
ow:(null==(r=e.Hw)?void 0:r.Ww)||"general",iw:e.Gw||"/placeholder.svg",
nw:e.nw||0,vw:[]},dr:t},e.ir)}))}),Gp.zo("div",{As:"text-center pt-4",
w:Gp.zo(E$,{ew:1,Hg:"outline",w:Gp.Os(uO,{
Jc:"/news?category="+(null==(r=l.Hw)?void 0:r.Ww),
w:["View All ",null==(i=l.Hw)?void 0:i.oe," News"]})})})]})})]})]})]})}
function Ah(){var e,t,n,r,i,o,s
const{ir:a}=Ya(),[l,c]=Bp._o(null),[u,d]=Bp._o([]),[h,f]=Bp._o(1)
if(Bp.To((()=>{(async()=>{if(a)try{
const{Ft:e,Fl:t}=await S$.Go("events").ww("\n            *,\n            categories (id, name, slug),\n            profiles (id, full_name, email)\n          ").gw("id",a).gw("published",1).Cw()
if(t)throw t
if(c(e),null==e?void 0:e.ab){
const{Ft:t}=await S$.Go("events").ww("\n              *,\n              categories (id, name, slug),\n              profiles (id, full_name, email)\n            ").gw("category_id",e.ab).gw("published",1).cb("id",a).lb(3)
d(t||[])}}catch(e){}finally{f(0)}})()}),[a]),h)return Gp.zo("div",{
As:"min-h-screen flex items-center justify-center",w:Gp.zo(SE,{
As:"w-8 h-8 animate-spin"})})
if(!l)return Gp.zo(Qa,{Jc:"/events",E:1})
const p=()=>new Date(l.Mw)>=new Date,m=window.Jt.Gt,v="Check out this event at Riverside High School: "+l.js
return Gp.Os("div",{As:"min-h-screen py-8",w:[Gp.Os(dN,{w:[Gp.Os("title",{
w:[l.js," - Riverside High School Events"]}),Gp.zo("meta",{oe:"description",
qw:l.Ps}),Gp.zo("meta",{ub:"og:title",qw:l.js}),Gp.zo("meta",{
ub:"og:description",qw:l.Ps}),Gp.zo("meta",{ub:"og:image",qw:l.iw
}),Gp.zo("meta",{ub:"og:url",qw:m}),Gp.zo("meta",{oe:"twitter:card",
qw:"summary_large_image"})]}),Gp.Os("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.zo(eI.qg,{Jh:{jv:0,zs:-20},
Yd:{jv:1,zs:0},xt:{md:.6},As:"mb-8",w:Gp.zo(E$,{ew:1,Hg:"outline",
As:"hover-lift",w:Gp.Os(uO,{Jc:"/events",w:[Gp.zo(iE,{As:"mr-2 w-4 h-4"
}),"Back to Events"]})})}),Gp.Os("div",{
As:"grid grid-cols-1 lg:grid-cols-3 gap-12",w:[Gp.zo("div",{As:"lg:col-span-2",
w:Gp.Os(eI.db,{Jh:{jv:0,Us:20},Yd:{jv:1,Us:0},xt:{md:.6},As:"space-y-8",
w:[Gp.Os("header",{As:"space-y-6",w:[Gp.Os("div",{As:"flex flex-wrap gap-2",
w:[Gp.zo(wh,{As:(s=(null==(e=l.Hw)?void 0:e.Ww)||"general",({Jw:"bg-primary",
aw:"bg-accent text-accent-foreground",Xw:"bg-red-600",Qw:"bg-orange-500",
Zw:"bg-primary"}[s]||"bg-primary")+" text-white border-0"),
w:(null==(t=l.Hw)?void 0:t.oe)||"General"}),l.nw&&Gp.zo(wh,{
As:"bg-accent text-accent-foreground",w:"Featured"}),p()&&Gp.zo(wh,{
As:"bg-green-500 text-white",w:"Upcoming"}),l.tb&&Gp.zo(wh,{Hg:"outline",
As:"border-yellow-500 text-yellow-600 dark:text-yellow-400",
w:"Registration Required"})]}),Gp.zo("h1",{
As:"text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight",
w:l.js}),Gp.Os("div",{As:"grid grid-cols-1 md:grid-cols-2 gap-6 p-6 glass-card",
w:[Gp.Os("div",{As:"space-y-4",w:[Gp.Os("div",{As:"flex items-center space-x-3",
w:[Gp.zo(aE,{As:"w-5 h-5 text-primary"}),Gp.Os("div",{w:[Gp.zo("p",{
As:"font-medium",w:"Date"}),Gp.zo("p",{As:"text-muted-foreground",
w:(o=l.Mw,new Date(o).toLocaleDateString("en-US",{dw:"numeric",hw:"long",
fw:"numeric"}))})]})]}),Gp.Os("div",{As:"flex items-center space-x-3",
w:[Gp.zo(pE,{As:"w-5 h-5 text-primary"}),Gp.Os("div",{w:[Gp.zo("p",{
As:"font-medium",w:"Time"}),Gp.zo("p",{As:"text-muted-foreground",
w:new Date(l.Mw).rb("en-US",{ib:"2-digit",ob:"2-digit"})})]})]})]
}),Gp.Os("div",{As:"space-y-4",w:[Gp.Os("div",{As:"flex items-center space-x-3",
w:[Gp.zo(EE,{As:"w-5 h-5 text-primary"}),Gp.Os("div",{w:[Gp.zo("p",{
As:"font-medium",w:"Location"}),Gp.zo("p",{As:"text-muted-foreground",w:l.Jt})]
})]}),l.eb&&Gp.Os("div",{As:"flex items-center space-x-3",w:[Gp.zo(KE,{
As:"w-5 h-5 text-primary"}),Gp.Os("div",{w:[Gp.zo("p",{As:"font-medium",
w:"Capacity"}),Gp.Os("p",{As:"text-muted-foreground",w:[l.eb," people"]})]})]})]
})]}),Gp.zo("div",{As:"relative overflow-hidden rounded-xl",w:Gp.zo("img",{
eo:l.Gw||"/placeholder.svg",Jg:l.js,As:"w-full h-96 object-cover"})})]
}),Gp.Os("div",{As:"space-y-6",w:[Gp.zo("h2",{
As:"text-2xl font-playfair font-bold",w:"About This Event"}),Gp.zo("div",{
As:"prose prose-lg max-w-none dark:prose-invert",w:Gp.zo("div",{je:{ze:l.Ps},
As:"space-y-6 text-lg leading-relaxed"})})]}),Gp.Os("div",{
As:"grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/30 rounded-xl",
w:[Gp.Os("div",{w:[Gp.zo("h3",{As:"font-semibold mb-2",w:"Organizer"
}),Gp.zo("p",{As:"text-muted-foreground",
w:(null==(n=l.Yw)?void 0:n.Ug)||"Event Organizer"})]}),Gp.Os("div",{
w:[Gp.zo("h3",{As:"font-semibold mb-2",w:"Category"}),Gp.zo("div",{
As:"flex flex-wrap gap-2",w:l.Hw&&Gp.zo(wh,{Hg:"outline",w:l.Hw.oe})})]})]
}),p()&&Gp.Os("div",{As:"p-6 glass-card text-center space-y-4",w:[Gp.zo("h3",{
As:"text-xl font-playfair font-bold",w:"Ready to Join Us?"}),Gp.zo("p",{
As:"text-muted-foreground",
w:"No registration required. Just show up and be part of the experience!"
}),Gp.Os(E$,{Bi:"lg",As:"bg-gradient-primary hover-lift",w:[Gp.zo(fE,{
As:"mr-2 w-5 h-5"}),"Mark as Interested"]})]}),Gp.Os("div",{
As:"flex items-center space-x-4 pt-6 border-t border-border",w:[Gp.Os("div",{
As:"flex items-center space-x-2 text-muted-foreground",w:[Gp.zo($E,{As:"w-4 h-4"
}),Gp.zo("span",{As:"font-medium",w:"Share:"})]}),Gp.Os("div",{
As:"flex space-x-2",w:[Gp.zo(E$,{Bi:"sm",Hg:"outline",Fi(){
return window.xo("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(m),"_blank")
},w:Gp.zo(yE,{As:"w-4 h-4"})}),Gp.zo(E$,{Bi:"sm",Hg:"outline",Fi(){
return window.xo(`https://twitter.com/intent/tweet?text=${encodeURIComponent(v)}&url=${encodeURIComponent(m)}`,"_blank")
},w:Gp.zo(qE,{As:"w-4 h-4"})}),Gp.zo(E$,{Bi:"sm",Hg:"outline",Fi(){
return window.xo("https://www.linkedin.com/sharing/share-offsite/?url="+encodeURIComponent(m),"_blank")
},w:Gp.zo(NE,{As:"w-4 h-4"})})]})]})]})}),Gp.zo("aside",{As:"space-y-8",
w:u.e>0&&Gp.Os(eI.qg,{Jh:{jv:0,zs:20},Yd:{jv:1,zs:0},xt:{Bd:.3,md:.6},
As:"space-y-6",w:[Gp.zo("h3",{As:"text-2xl font-playfair font-bold",
w:"Related Events"}),Gp.zo("div",{As:"space-y-6",w:u.Oo(((e,t)=>{var n,r
return Gp.zo(Oh,{Lt:{ir:e.ir,js:e.js,Ps:e.Ps,nb:e.Ps,uw:e.Mw.ne("T")[0],
uy:new Date(e.Mw).rb("en-US",{ib:"2-digit",ob:"2-digit"}),Jt:e.Jt||"TBD",
ow:(null==(n=e.Hw)?void 0:n.Ww)||"general",iw:e.Gw||"/placeholder.svg",
sb:(null==(r=e.Yw)?void 0:r.Ug)||"Event Organizer",tb:0,nw:e.nw||0,vw:[]},dr:t
},e.ir)}))}),Gp.zo("div",{As:"text-center pt-4",w:Gp.zo(E$,{ew:1,Hg:"outline",
w:Gp.Os(uO,{Jc:"/events?category="+(null==(r=l.Hw)?void 0:r.Ww),
w:["View All ",null==(i=l.Hw)?void 0:i.oe," Events"]})})})]})})]})]})]})}
function Dh(){
const{xg:e,Ig:t,Vg:n}=hh(),{bo:r}=ko(),[i,o]=Bp._o(0),[s,a]=Bp._o(0),[l,c]=Bp._o(0),[u,d]=Bp._o(0),[h,f]=Bp._o(null),p=qa()
return Ha(),Bp.To((()=>{const e=localStorage.jy("auth_locked_until")
if(e){const t=new Date(e)
t>new Date?(d(1),f(t)):(localStorage.Eg("auth_locked_until"),localStorage.Eg("auth_attempts"))
}const t=localStorage.jy("auth_attempts")
t&&c(parseInt(t,10))
const n=sessionStorage.jy("authKeyUsed"),r=sessionStorage.jy("authToken"),i=sessionStorage.jy("authTimestamp")
let o=0
if("true"===n&&r&&i){const e=parseInt(i,10)
3e4>Date.Wu()-e&&(o=1)}if(o){
a(1),sessionStorage.Eg("authKeyUsed"),sessionStorage.Eg("authToken"),
sessionStorage.Eg("authTimestamp"),
document.cookie="auth_page_accessed=true; max-age=300; path=/; secure; samesite=strict"
const e=JSON.Rc(localStorage.jy("auth_access_log")||"[]")
e.M({Pu:(new Date).fb(),pb:1
}),e.e>10&&e.gt(),localStorage.Iy("auth_access_log",JSON.stringify(e))}else{
p("/",{E:1})
const e=JSON.Rc(localStorage.jy("auth_access_log")||"[]")
e.M({Pu:(new Date).fb(),pb:0
}),e.e>10&&e.gt(),localStorage.Iy("auth_access_log",JSON.stringify(e))}
}),[p]),e?Gp.zo(Qa,{Jc:"/cms",E:1}):s||n?n?Gp.zo("div",{
As:"min-h-screen flex items-center justify-center",w:Gp.zo(SE,{
As:"h-8 w-8 animate-spin"})}):Gp.zo("div",{
As:"min-h-screen flex items-center justify-center bg-background px-4",
w:Gp.Os(C$,{As:"w-full max-w-md",w:[Gp.Os(M$,{As:"space-y-1",w:[Gp.zo(O$,{
As:"text-2xl text-center",w:"CMS Access"}),Gp.zo(j$,{As:"text-center",
w:"Sign in with your credentials to manage content"})]}),Gp.Os(P$,{
w:[u&&h&&Gp.Os(B$,{Hg:"destructive",As:"mb-4",w:[Gp.zo(HE,{As:"h-4 w-4"
}),Gp.Os(V$,{
w:["Account locked due to too many failed attempts. Try again after ",h.rb(),"."]
})]}),Gp.zo("div",{As:"w-full",w:Gp.Os("form",{async mb(e){
if(e.Pt(),u)return void r({js:"Account Locked",
Ps:"Too many failed attempts. Please try again later.",Hg:"destructive"})
o(1)
const n=new FormData(e.Et),i=n.t("email"),s=n.t("password")
if(!i||!i.ie("@")||!s||6>s.e)return r({js:"Invalid Input",
Ps:"Please enter a valid email and password (min 6 characters).",
Hg:"destructive"}),void o(0)
const{Fl:a}=await t(i,s)
if(a){const e=l+1
if(c(e),localStorage.Iy("auth_attempts",e.C()),5>e)r({js:"Sign In Failed",
Ps:`${a.ci}. Attempts: ${e}/5`,Hg:"destructive"})
else{const e=new Date(Date.Wu()+9e5)
d(1),f(e),localStorage.Iy("auth_locked_until",e.fb()),r({js:"Account Locked",
Ps:"Too many failed attempts. Your account is locked for 15 minutes.",
Hg:"destructive"})}
}else c(0),localStorage.Eg("auth_attempts"),localStorage.Eg("auth_locked_until"),
r({js:"Welcome back!",Ps:"You have successfully signed in."})
o(0)},As:"space-y-4",w:[Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"email",
w:"Email"}),Gp.zo(q$,{ir:"email",oe:"email",k:"email",Kg:"editor@school.com",
yb:1})]}),Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"password",w:"Password"
}),Gp.zo(q$,{ir:"password",oe:"password",k:"password",yb:1})]}),Gp.Os(E$,{
k:"submit",As:"w-full",Oe:i,w:[i&&Gp.zo(SE,{As:"mr-2 h-4 w-4 animate-spin"
}),"Sign In"]})]})})]})]})}):Gp.zo(Qa,{Jc:"/",E:1})}function Ih({w:e}){
const{Bg:t}=hh(),n=Ha(),[r,i]=Bp._o(0),o=[{oe:"Dashboard",Gt:"/cms",Yg:xE},{
oe:"News",Gt:"/cms/news",Yg:gE},{oe:"Events",Gt:"/cms/events",Yg:aE
}],s=async()=>{await t()}
return Gp.Os("div",{As:"min-h-screen bg-background",w:[Gp.Os("div",{
As:"fixed inset-0 z-50 lg:hidden transition-all duration-300 "+(r?"block":"hidden"),
w:[Gp.zo("div",{As:"fixed inset-0 bg-black/50 backdrop-blur-sm",Fi(){return i(0)
}}),Gp.Os("nav",{
As:"fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-card border-r shadow-2xl transform transition-transform duration-300",
w:[Gp.Os("div",{
As:"flex items-center justify-between px-4 py-4 border-b bg-gradient-to-r from-primary/5 to-accent/5",
w:[Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo("div",{
As:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",w:Gp.zo(RE,{
As:"w-4 h-4 text-primary-foreground"})}),Gp.zo("h1",{
As:"text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
w:"CMS"})]}),Gp.zo(E$,{Hg:"ghost",Bi:"sm",Fi(){return i(0)},
As:"hover:bg-destructive/10 hover:text-destructive",w:Gp.zo(GE,{As:"h-5 w-5"})
})]}),Gp.zo("div",{As:"flex-1 px-4 py-6",w:Gp.zo("nav",{As:"space-y-2",
w:o.Oo((e=>{const t=n.rc===e.Gt
return Gp.Os(uO,{Jc:e.Gt,
As:"flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group "+(t?"bg-primary text-primary-foreground shadow-md transform scale-105":"text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:transform hover:scale-105"),
Fi(){return i(0)},w:[Gp.zo(e.Yg,{
As:"mr-3 h-5 w-5 transition-transform group-hover:scale-110 "+(t?"animate-pulse":"")
}),e.oe]},e.oe)}))})}),Gp.zo("div",{As:"p-4 border-t",w:Gp.Os(E$,{Hg:"ghost",
Fi:s,As:"w-full justify-start",w:[Gp.zo(_E,{As:"mr-3 h-5 w-5"}),"Sign Out"]})})]
})]}),Gp.Os("nav",{
As:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:bg-card lg:border-r lg:shadow-lg",
w:[Gp.zo("div",{
As:"flex items-center px-6 py-4 border-b bg-gradient-to-r from-primary/5 to-accent/5",
w:Gp.Os("div",{As:"flex items-center space-x-3",w:[Gp.zo("div",{
As:"w-10 h-10 bg-primary rounded-xl flex items-center justify-center",
w:Gp.zo(RE,{As:"w-5 h-5 text-primary-foreground"})}),Gp.Os("div",{
w:[Gp.zo("h1",{
As:"text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
w:"Content Management"}),Gp.zo("p",{As:"text-xs text-muted-foreground",
w:"Homagama Maha Vidyalaya"})]})]})}),Gp.Os("div",{
As:"flex-1 flex flex-col justify-between",w:[Gp.zo("div",{As:"px-6 py-6",
w:Gp.zo("nav",{As:"space-y-2",w:o.Oo((e=>{const t=n.rc===e.Gt
return Gp.Os(uO,{Jc:e.Gt,
As:"flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group "+(t?"bg-primary text-primary-foreground shadow-md transform scale-105":"text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:transform hover:scale-105"),
w:[Gp.zo(e.Yg,{
As:"mr-3 h-5 w-5 transition-transform group-hover:scale-110 "+(t?"animate-pulse":"")
}),e.oe]},e.oe)}))})}),Gp.Os("div",{As:"px-6 py-4 border-t",w:[Gp.Os(uO,{Jc:"/",
As:"flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors mb-2",
w:[Gp.zo(xE,{As:"mr-3 h-5 w-5"}),"View Website"]}),Gp.Os(E$,{Hg:"ghost",Fi:s,
As:"w-full justify-start",w:[Gp.zo(_E,{As:"mr-3 h-5 w-5"}),"Sign Out"]})]})]})]
}),Gp.Os("div",{As:"lg:pl-64",w:[Gp.Os("header",{
As:"sticky top-0 z-40 flex items-center justify-between px-4 py-4 border-b lg:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
w:[Gp.Os("div",{As:"flex items-center space-x-4",w:[Gp.zo(E$,{Hg:"ghost",
Bi:"sm",Fi(){return i(1)},As:"lg:hidden hover:bg-primary/10 hover:text-primary",
w:Gp.zo(CE,{As:"h-5 w-5"})}),Gp.Os("div",{As:"hidden sm:block",w:[Gp.zo("h2",{
As:"text-lg font-semibold",w:"Dashboard"}),Gp.zo("p",{
As:"text-sm text-muted-foreground",w:"Manage your content"})]})]}),Gp.zo("div",{
As:"flex items-center space-x-2",w:Gp.zo(E$,{Hg:"outline",Bi:"sm",ew:1,
w:Gp.Os(uO,{Jc:"/",As:"hidden sm:flex items-center",w:[Gp.zo(xE,{
As:"w-4 h-4 mr-2"}),"View Website"]})})})]}),Gp.zo("main",{As:"flex-1",w:e})]})]
})}function Rh(){const[e,t]=Bp._o({gb:0,Aw:0,wb:0,bb:0})
Bp.To((()=>{n()}),[])
const n=async()=>{try{const[e,n,r,i]=await Promise.np([S$.Go("news").ww("*",{
Vw:"exact",ch:1}),S$.Go("events").ww("*",{Vw:"exact",ch:1
}),S$.Go("news").ww("*",{Vw:"exact",ch:1
}).gw("published",1),S$.Go("events").ww("*",{Vw:"exact",ch:1
}).gw("published",1)])
t({gb:e.Vw||0,Aw:n.Vw||0,wb:r.Vw||0,bb:i.Vw||0})}catch(e){}},r=[{
js:"Total News Articles",r:e.gb,Ps:e.wb+" published",Yg:gE,Gt:"/cms/news"},{
js:"Total Events",r:e.Aw,Ps:e.bb+" published",Yg:aE,Gt:"/cms/events"},{
js:"Published Content",r:e.wb+e.bb,Ps:"Live on website",Yg:VE,Gt:"/"}]
return Gp.Os("div",{As:"p-6 space-y-6",w:[Gp.Os("div",{w:[Gp.zo("h1",{
As:"text-3xl font-bold",w:"Dashboard"}),Gp.zo("p",{As:"text-muted-foreground",
w:"Manage your website content"})]}),Gp.zo("div",{
As:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",w:r.Oo((e=>Gp.Os(C$,{
As:"hover:shadow-md transition-shadow",w:[Gp.Os(M$,{
As:"flex flex-row items-center justify-between space-y-0 pb-2",w:[Gp.zo(O$,{
As:"text-sm font-medium",w:e.js}),Gp.zo(e.Yg,{As:"h-4 w-4 text-muted-foreground"
})]}),Gp.Os(P$,{w:[Gp.zo("div",{As:"text-2xl font-bold",w:e.r}),Gp.zo("p",{
As:"text-xs text-muted-foreground",w:e.Ps}),Gp.zo(E$,{ew:1,As:"mt-3",
Hg:"outline",Bi:"sm",w:Gp.zo(uO,{Jc:e.Gt,w:"/"===e.Gt?"View Website":"Manage"})
})]})]},e.js)))}),Gp.Os("div",{As:"grid gap-6 md:grid-cols-2",w:[Gp.Os(C$,{
w:[Gp.Os(M$,{w:[Gp.zo(O$,{w:"Quick Actions"}),Gp.zo(j$,{w:"Common tasks"})]
}),Gp.Os(P$,{As:"space-y-3",w:[Gp.zo(E$,{ew:1,As:"w-full justify-start",
Hg:"outline",w:Gp.Os(uO,{Jc:"/cms/news",w:[Gp.zo(gE,{As:"mr-2 h-4 w-4"
}),"Create New Article"]})}),Gp.zo(E$,{ew:1,As:"w-full justify-start",
Hg:"outline",w:Gp.Os(uO,{Jc:"/cms/events",w:[Gp.zo(aE,{As:"mr-2 h-4 w-4"
}),"Add New Event"]})})]})]}),Gp.Os(C$,{w:[Gp.Os(M$,{w:[Gp.zo(O$,{
w:"Recent Activity"}),Gp.zo(j$,{w:"Latest updates"})]}),Gp.zo(P$,{
w:Gp.Os("div",{As:"space-y-3",w:[Gp.Os("div",{As:"flex items-center space-x-3",
w:[Gp.zo("div",{As:"w-2 h-2 bg-green-500 rounded-full"}),Gp.zo("span",{
As:"text-sm",w:"Database connected successfully"})]}),Gp.Os("div",{
As:"flex items-center space-x-3",w:[Gp.zo("div",{
As:"w-2 h-2 bg-blue-500 rounded-full"}),Gp.zo("span",{As:"text-sm",
w:"Sample content loaded"})]}),Gp.Os("div",{As:"flex items-center space-x-3",
w:[Gp.zo("div",{As:"w-2 h-2 bg-purple-500 rounded-full"}),Gp.zo("span",{
As:"text-sm",w:"CMS ready for use"})]})]})})]})]})]})}function $h(){
const{xg:e,Vg:t}=hh()
return t?Gp.zo("div",{w:"Loading..."}):e?Gp.zo(Ih,{w:Gp.zo(Rh,{})}):Gp.zo(Qa,{
Jc:"/auth",E:1})}function Fh(e){const t=Bp.Wo({r:e,xb:e})
return Bp.Do((()=>(t.S.r!==e&&(t.S.xb=t.S.r,t.S.r=e),t.S.xb)),[e])}
function Lh(e){return e?"checked":"unchecked"}function zh(e,[t,n]){
return Math.an(n,Math.qu(t,e))}function Uh(){const e=document.Ui("span")
return e.J("data-radix-focus-guard",""),e.vs=0,e.$e.kb="none",e.$e.jv="0",e.$e.Wa="fixed",
e.$e.Zv="none",e}function Bh(e){
const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{ms(e){
const t="INPUT"===e.Pr&&"hidden"===e.k
return e.Oe||e.hs||t||0>e.vs?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}})
for(;n.ys();)t.M(n.gs)
return t}function Vh(e,t){for(const n of e)if(!Hh(n,{Nb:t}))return n}
function Hh(e,{Nb:t}){if("hidden"===getComputedStyle(e).Qv)return 1
for(;e;){if(void 0!==t&&e===t)return 0
if("none"===getComputedStyle(e).Qi)return 1
e=e.wy}return 0}function Wh(e,{ww:t=0}={}){if(e&&e.Tn){const n=document.ge
e.Tn({Sb:1}),e!==n&&(e=>e instanceof HTMLInputElement&&"ww"in e)(e)&&t&&e.ww()}}
function qh(e,t){const n=[...e],r=n.Fe(t)
return-1!==r&&n.Eo(r,1),n}function Yh(e,t){var n,r,i={}
for(n in e)({}).s.o(e,n)&&0>t.Fe(n)&&(i[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(r=0,n=Object.getOwnPropertySymbols(e);r<n.e;r++)0>t.Fe(n[r])&&{}._b.o(e,n[r])&&(i[n[r]]=e[n[r]])
return i}function Kh(e,t){return"function"==typeof e?e(t):e&&(e.S=t),e}
function Gh(e){return e}function Jh(e){
for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.Ea,e=e.Ea),e=e.We
return t}function Xh(e){return""===e||void 0===e}function Qh(e){
const t=Ao(e),n=Bp.Wo(""),r=Bp.Wo(0),i=Bp.Mo((e=>{const i=n.S+e
t(i),(function e(t){
n.S=t,window.Tb(r.S),""!==t&&(r.S=window.Eb((()=>e("")),1e3))})(i)
}),[t]),o=Bp.Mo((()=>{n.S="",window.Tb(r.S)}),[])
return Bp.To((()=>()=>window.Tb(r.S)),[]),[n,i,o]}function Zh(e,t,n){
const r=t.e>1&&Array.Go(t).cc((e=>e===t[0]))?t[0]:t,i=n?e.Fe(n):-1
let o=(s=e,a=Math.qu(i,0),s.Oo(((e,t)=>s[(a+t)%s.e])))
var s,a
1===r.e&&(o=o.Ro((e=>e!==n)))
const l=o.Zu((e=>e.Cb.Y().vc(r.Y())))
return l!==n?l:void 0}function ef({tw:e,Mb:t}){
const{xg:n}=hh(),{bo:r}=ko(),[i,o]=Bp._o(0),[s,a]=Bp._o([]),[l,c]=Bp._o({js:"",
Ww:"",mw:"",qw:"",Gw:"",ab:"",Ew:0,nw:0})
Bp.To((()=>{u(),e&&c({js:e.js,Ww:e.Ww,mw:e.mw,qw:e.qw,Gw:e.Gw,ab:e.ab,Ew:e.Ew,
nw:e.nw})}),[e])
const u=async()=>{try{
const{Ft:e,Fl:t}=await S$.Go("categories").ww("*").yw("name")
if(t)throw t
a(e||[])}catch(e){r({js:"Error",Ps:e.ci,Hg:"destructive"})}}
return Gp.Os("div",{As:"p-6 space-y-6",w:[Gp.Os("div",{
As:"flex items-center space-x-4",w:[Gp.Os(E$,{Hg:"outline",Fi:t,w:[Gp.zo(iE,{
As:"mr-2 h-4 w-4"}),"Back"]}),Gp.Os("div",{w:[Gp.zo("h1",{
As:"text-3xl font-bold",
w:(null==e?void 0:e.ir)?"Edit Article":"Create New Article"}),Gp.zo("p",{
As:"text-muted-foreground",
w:(null==e?void 0:e.ir)?"Update your article":"Create a new news article"})]})]
}),Gp.Os("form",{async mb(i){i.Pt(),o(1)
try{
const{Ft:i}=await S$.Go("profiles").ww("id").gw("user_id",null==n?void 0:n.ir).Cw()
if(!i)throw Error("User profile not found")
const o={...l,Ob:i.ir}
let s
if(null==e?void 0:e.ir){const{Fl:t}=await S$.Go("news").So(o).gw("id",e.ir)
s=t}else{const{Fl:e}=await S$.Go("news").jb([o])
s=e}if(s)throw s
r({js:"Success",
Ps:`Article ${(null==e?void 0:e.ir)?"updated":"created"} successfully`}),t()
}catch(s){r({js:"Error",Ps:s.ci,Hg:"destructive"})}finally{o(0)}},
As:"space-y-6",w:[Gp.Os(C$,{w:[Gp.Os(M$,{w:[Gp.zo(O$,{w:"Article Details"
}),Gp.zo(j$,{w:"Basic information about the article"})]}),Gp.Os(P$,{
As:"space-y-4",w:[Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"title",w:"Title"
}),Gp.zo(q$,{ir:"title",r:l.js,as(e){return t=e.Ve.r,void c((e=>{return{...e,
js:t,Ww:(n=t,n.Y().E(/[^a-z0-9]+/g,"-").E(/(^-|-$)+/g,""))}
var n}))
var t},Kg:"Enter article title",yb:1})]}),Gp.Os("div",{As:"space-y-2",
w:[Gp.zo(G$,{vb:"slug",w:"Slug"}),Gp.zo(q$,{ir:"slug",r:l.Ww,as(e){
return c((t=>({...t,Ww:e.Ve.r})))},Kg:"article-url-slug",yb:1})]}),Gp.Os("div",{
As:"space-y-2",w:[Gp.zo(G$,{vb:"excerpt",w:"Excerpt"}),Gp.zo(J$,{ir:"excerpt",
r:l.mw,as(e){return c((t=>({...t,mw:e.Ve.r})))},
Kg:"Brief description of the article",Pb:3})]}),Gp.Os("div",{As:"space-y-2",
w:[Gp.zo(G$,{vb:"content",w:"Content"}),Gp.zo(J$,{ir:"content",r:l.qw,as(e){
return c((t=>({...t,qw:e.Ve.r})))},Kg:"Full article content",Pb:10,yb:1})]
}),Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"image_url",w:"Image URL"
}),Gp.zo(q$,{ir:"image_url",k:"url",r:l.Gw,as(e){return c((t=>({...t,Gw:e.Ve.r
})))},Kg:"https://example.com/image.jpg"})]}),Gp.Os("div",{As:"space-y-2",
w:[Gp.zo(G$,{vb:"category",w:"Category"}),Gp.Os(bF,{r:l.ab,Ab(e){return c((t=>({
...t,ab:e})))},w:[Gp.zo(kF,{w:Gp.zo(xF,{Kg:"Select a category"})}),Gp.zo(_F,{
w:s.Oo((e=>Gp.zo(TF,{r:e.ir,w:e.oe},e.ir)))})]})]})]})]}),Gp.Os(C$,{
w:[Gp.Os(M$,{w:[Gp.zo(O$,{w:"Publishing Options"}),Gp.zo(j$,{
w:"Control how this article appears"})]}),Gp.Os(P$,{As:"space-y-4",
w:[Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(tF,{ir:"published",
ye:l.Ew,Db(e){return c((t=>({...t,Ew:e})))}}),Gp.zo(G$,{vb:"published",
w:"Published"})]}),Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(tF,{
ir:"featured",ye:l.nw,Db(e){return c((t=>({...t,nw:e})))}}),Gp.zo(G$,{
vb:"featured",w:"Featured"})]})]})]}),Gp.Os("div",{
As:"flex justify-end space-x-4",w:[Gp.zo(E$,{k:"button",Hg:"outline",Fi:t,
w:"Cancel"}),Gp.zo(E$,{k:"submit",Oe:i,w:i?Gp.zo(Gp.Bc,{w:"Saving..."
}):Gp.Os(Gp.Bc,{w:[Gp.zo(DE,{As:"mr-2 h-4 w-4"
}),(null==e?void 0:e.ir)?"Update":"Create"," Article"]})})]})]})]})}
function tf(){
const[e,t]=Bp._o([]),[n,r]=Bp._o(null),[i,o]=Bp._o(0),[s,a]=Bp._o(1),{bo:l}=ko()
Bp.To((()=>{c()}),[])
const c=async()=>{try{
const{Ft:e,Fl:n}=await S$.Go("news").ww("\n          *,\n          categories (name)\n        ").yw("created_at",{
bw:0})
if(n)throw n
t(e||[])}catch(e){l({js:"Error",Ps:e.ci,Hg:"destructive"})}finally{a(0)}}
return i?Gp.zo(ef,{tw:n,Mb(){o(0),r(null),c()}}):s?Gp.zo("div",{As:"p-6",
w:"Loading..."}):Gp.Os("div",{As:"p-6 space-y-6",w:[Gp.Os("div",{
As:"flex justify-between items-center",w:[Gp.Os("div",{w:[Gp.zo("h1",{
As:"text-3xl font-bold",w:"News Management"}),Gp.zo("p",{
As:"text-muted-foreground",w:"Create and manage news articles"})]}),Gp.Os(E$,{
Fi(){r(null),o(1)},w:[Gp.zo(PE,{As:"mr-2 h-4 w-4"}),"New Article"]})]
}),Gp.zo("div",{As:"grid gap-6",w:0===e.e?Gp.zo(C$,{w:Gp.zo(P$,{
As:"p-6 text-center",w:Gp.zo("p",{As:"text-muted-foreground",
w:"No articles found. Create your first article!"})})}):e.Oo((e=>Gp.Os(C$,{
w:[Gp.zo(M$,{w:Gp.Os("div",{As:"flex justify-between items-start",
w:[Gp.Os("div",{As:"space-y-2",w:[Gp.zo(O$,{As:"text-xl",w:e.js}),Gp.zo(j$,{
w:e.mw}),Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(wh,{
Hg:e.Ew?"default":"secondary",w:e.Ew?"Published":"Draft"}),e.nw&&Gp.zo(wh,{
Hg:"outline",w:"Featured"}),e.Hw&&Gp.zo(wh,{Hg:"outline",w:e.Hw.oe})]})]
}),e.Gw&&Gp.zo("img",{eo:e.Gw,Jg:e.js,As:"w-20 h-20 object-cover rounded"})]})
}),Gp.zo(P$,{w:Gp.Os("div",{As:"flex justify-between items-center",
w:[Gp.Os("p",{As:"text-sm text-muted-foreground",
w:["Created: ",new Date(e.Kw).toLocaleDateString()]}),Gp.Os("div",{
As:"flex space-x-2",w:[Gp.zo(E$,{Hg:"outline",Bi:"sm",Fi(){return(async(e,t)=>{
try{const{Fl:n}=await S$.Go("news").So({Ew:!t}).gw("id",e)
if(n)throw n
l({js:"Success",Ps:`Article ${t?"unpublished":"published"} successfully`}),c()
}catch(n){l({js:"Error",Ps:n.ci,Hg:"destructive"})}})(e.ir,e.Ew)},
w:e.Ew?Gp.Os(Gp.Bc,{w:[Gp.zo(mE,{As:"mr-2 h-4 w-4"}),"Unpublish"]
}):Gp.Os(Gp.Bc,{w:[Gp.zo(vE,{As:"mr-2 h-4 w-4"}),"Publish"]})}),Gp.Os(E$,{
Hg:"outline",Bi:"sm",Fi(){return r(e),void o(1)},w:[Gp.zo(LE,{As:"mr-2 h-4 w-4"
}),"Edit"]}),Gp.Os(E$,{Hg:"destructive",Bi:"sm",Fi(){return(async e=>{
if(confirm("Are you sure you want to delete this article?"))try{
const{Fl:t}=await S$.Go("news").at().gw("id",e)
if(t)throw t
l({js:"Success",Ps:"Article deleted successfully"}),c()}catch(t){l({js:"Error",
Ps:t.ci,Hg:"destructive"})}})(e.ir)},w:[Gp.zo(BE,{As:"mr-2 h-4 w-4"}),"Delete"]
})]})]})})]},e.ir)))})]})}function nf(){const{xg:e,Vg:t}=hh()
return t?Gp.zo("div",{w:"Loading..."}):e?Gp.zo(Ih,{w:Gp.zo(tf,{})}):Gp.zo(Qa,{
Jc:"/auth",E:1})}function rf({Lt:e,Mb:t}){
const{xg:n}=hh(),{bo:r}=ko(),[i,o]=Bp._o(0),[s,a]=Bp._o([]),[l,c]=Bp._o({js:"",
Ww:"",Ps:"",Gw:"",Ib:"",Mw:"",Jt:"",ab:"",Ew:0,nw:0})
Bp.To((()=>{if(u(),e){const t=new Date(e.Mw).fb().q(0,16)
c({js:e.js,Ww:e.Ww,Ps:e.Ps,Gw:e.Gw,Ib:e.Ib,Mw:t,Jt:e.Jt,ab:e.ab,Ew:e.Ew,nw:e.nw
})}}),[e])
const u=async()=>{try{
const{Ft:e,Fl:t}=await S$.Go("categories").ww("*").yw("name")
if(t)throw t
a(e||[])}catch(e){r({js:"Error",Ps:e.ci,Hg:"destructive"})}}
return Gp.Os("div",{As:"p-6 space-y-6",w:[Gp.Os("div",{
As:"flex items-center space-x-4",w:[Gp.Os(E$,{Hg:"outline",Fi:t,w:[Gp.zo(iE,{
As:"mr-2 h-4 w-4"}),"Back"]}),Gp.Os("div",{w:[Gp.zo("h1",{
As:"text-3xl font-bold",w:(null==e?void 0:e.ir)?"Edit Event":"Create New Event"
}),Gp.zo("p",{As:"text-muted-foreground",
w:(null==e?void 0:e.ir)?"Update your event":"Create a new event"})]})]
}),Gp.Os("form",{async mb(i){i.Pt(),o(1)
try{
const{Ft:i}=await S$.Go("profiles").ww("id").gw("user_id",null==n?void 0:n.ir).Cw()
if(!i)throw Error("User profile not found")
const o=new Date(l.Mw).fb(),s={...l,Mw:o,Ob:i.ir}
let a
if(null==e?void 0:e.ir){const{Fl:t}=await S$.Go("events").So(s).gw("id",e.ir)
a=t}else{const{Fl:e}=await S$.Go("events").jb([s])
a=e}if(a)throw a
r({js:"Success",
Ps:`Event ${(null==e?void 0:e.ir)?"updated":"created"} successfully`}),t()
}catch(s){r({js:"Error",Ps:s.ci,Hg:"destructive"})}finally{o(0)}},
As:"space-y-6",w:[Gp.Os(C$,{w:[Gp.Os(M$,{w:[Gp.zo(O$,{w:"Event Details"
}),Gp.zo(j$,{w:"Basic information about the event"})]}),Gp.Os(P$,{
As:"space-y-4",w:[Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"title",w:"Title"
}),Gp.zo(q$,{ir:"title",r:l.js,as(e){return t=e.Ve.r,void c((e=>{return{...e,
js:t,Ww:(n=t,n.Y().E(/[^a-z0-9]+/g,"-").E(/(^-|-$)+/g,""))}
var n}))
var t},Kg:"Enter event title",yb:1})]}),Gp.Os("div",{As:"space-y-2",
w:[Gp.zo(G$,{vb:"slug",w:"Slug"}),Gp.zo(q$,{ir:"slug",r:l.Ww,as(e){
return c((t=>({...t,Ww:e.Ve.r})))},Kg:"event-url-slug",yb:1})]}),Gp.Os("div",{
As:"space-y-2",w:[Gp.zo(G$,{vb:"description",w:"Description"}),Gp.zo(J$,{
ir:"description",r:l.Ps,as(e){return c((t=>({...t,Ps:e.Ve.r})))},
Kg:"Event description",Pb:5,yb:1})]}),Gp.Os("div",{
As:"grid grid-cols-1 md:grid-cols-2 gap-4",w:[Gp.Os("div",{As:"space-y-2",
w:[Gp.zo(G$,{vb:"event_date",w:"Event Date & Time"}),Gp.zo(q$,{ir:"event_date",
k:"datetime-local",r:l.Mw,as(e){return c((t=>({...t,Mw:e.Ve.r})))},yb:1})]
}),Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"location",w:"Location"
}),Gp.zo(q$,{ir:"location",r:l.Jt,as(e){return c((t=>({...t,Jt:e.Ve.r})))},
Kg:"Event location"})]})]}),Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{
vb:"image_url",w:"Image URL"}),Gp.zo(q$,{ir:"image_url",k:"url",r:l.Gw,as(e){
return c((t=>({...t,Gw:e.Ve.r})))},Kg:"https://example.com/image.jpg"})]
}),Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"video_url",
w:"Video URL (Optional)"}),Gp.zo(q$,{ir:"video_url",k:"url",r:l.Ib,as(e){
return c((t=>({...t,Ib:e.Ve.r})))},Kg:"https://youtube.com/watch?v=..."})]
}),Gp.Os("div",{As:"space-y-2",w:[Gp.zo(G$,{vb:"category",w:"Category"
}),Gp.Os(bF,{r:l.ab,Ab(e){return c((t=>({...t,ab:e})))},w:[Gp.zo(kF,{
w:Gp.zo(xF,{Kg:"Select a category"})}),Gp.zo(_F,{w:s.Oo((e=>Gp.zo(TF,{r:e.ir,
w:e.oe},e.ir)))})]})]})]})]}),Gp.Os(C$,{w:[Gp.Os(M$,{w:[Gp.zo(O$,{
w:"Publishing Options"}),Gp.zo(j$,{w:"Control how this event appears"})]
}),Gp.Os(P$,{As:"space-y-4",w:[Gp.Os("div",{As:"flex items-center space-x-2",
w:[Gp.zo(tF,{ir:"published",ye:l.Ew,Db(e){return c((t=>({...t,Ew:e})))}
}),Gp.zo(G$,{vb:"published",w:"Published"})]}),Gp.Os("div",{
As:"flex items-center space-x-2",w:[Gp.zo(tF,{ir:"featured",ye:l.nw,Db(e){
return c((t=>({...t,nw:e})))}}),Gp.zo(G$,{vb:"featured",w:"Featured"})]})]})]
}),Gp.Os("div",{As:"flex justify-end space-x-4",w:[Gp.zo(E$,{k:"button",
Hg:"outline",Fi:t,w:"Cancel"}),Gp.zo(E$,{k:"submit",Oe:i,w:i?Gp.zo(Gp.Bc,{
w:"Saving..."}):Gp.Os(Gp.Bc,{w:[Gp.zo(DE,{As:"mr-2 h-4 w-4"
}),(null==e?void 0:e.ir)?"Update":"Create"," Event"]})})]})]})]})}
function of(e){const t={}.C.o(e)
return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.l(+e):new Date("number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?e:NaN)
}function sf(e,t){return e instanceof Date?new e.l(t):new Date(t)}function af(){
return CF}function lf(e,t){var n,r,i,o
const s=af(),a=(null==t?void 0:t.Rb)??(null==(r=null==(n=null==t?void 0:t.zn)?void 0:n.Ee)?void 0:r.Rb)??s.Rb??(null==(o=null==(i=s.zn)?void 0:i.Ee)?void 0:o.Rb)??0,l=of(e),c=l.$b(),u=(a>c?7:0)+c-a
return l.Fb(l.Lb()-u),l.zb(0,0,0,0),l}function cf(e){return lf(e,{Rb:1})}
function uf(e){const t=of(e),n=t.Gg(),r=sf(e,0)
r.Ub(n+1,0,4),r.zb(0,0,0,0)
const i=cf(r),o=sf(e,0)
o.Ub(n,0,4),o.zb(0,0,0,0)
const s=cf(o)
return t.og()<i.og()?t.og()<s.og()?n-1:n:n+1}function df(e){const t=of(e)
return t.zb(0,0,0,0),t}function hf(e){
const t=of(e),n=new Date(Date.UTC(t.Gg(),t.Bb(),t.Lb(),t.Vb(),t.Hb(),t.Wb(),t.qb()))
return n.Yb(t.Gg()),+e-+n}function ff(e){return(t={})=>{
const n=t.Bs?t.Bs+"":e.Kb
return e.Gb[n]||e.Gb[e.Kb]}}function pf(e){return(t,n)=>{let r
if("formatting"==((null==n?void 0:n.p)?n.p+"":"standalone")&&e.Jb){
const t=e.Xb||e.Kb,i=(null==n?void 0:n.Bs)?n.Bs+"":t
r=e.Jb[i]||e.Jb[t]}else{const t=e.Kb,i=(null==n?void 0:n.Bs)?n.Bs+"":e.Kb
r=e.Lo[i]||e.Lo[t]}return r[e.Qb?e.Qb(t):t]}}function mf(e){return(t,n={})=>{
const r=n.Bs,i=r&&e.Zb[r]||e.Zb[e.ex],o=t.Q(i)
if(!o)return null
const s=o[0],a=r&&e.tx[r]||e.tx[e.nx],l=Array.isArray(a)?((e,t)=>{
for(let n=0;n<e.e;n++)if(t(e[n]))return n})(a,(e=>e.K(s))):((e,t)=>{
for(const n in e)if({}.s.o(e,n)&&t(e[n]))return n})(a,(e=>e.K(s)))
let c
return c=e.rx?e.rx(l):l,c=n.rx?n.rx(c):c,{r:c,ix:t.q(s.e)}}}function vf(e,t){
var n,r,i,o
const s=of(e),a=s.Gg(),l=af(),c=(null==t?void 0:t.ox)??(null==(r=null==(n=null==t?void 0:t.zn)?void 0:n.Ee)?void 0:r.ox)??l.ox??(null==(o=null==(i=l.zn)?void 0:i.Ee)?void 0:o.ox)??1,u=sf(e,0)
u.Ub(a+1,0,c),u.zb(0,0,0,0)
const d=lf(u,t),h=sf(e,0)
h.Ub(a,0,c),h.zb(0,0,0,0)
const f=lf(h,t)
return s.og()<d.og()?s.og()<f.og()?a-1:a:a+1}function yf(e,t){
return(0>e?"-":"")+Math.abs(e).C().padStart(t,"0")}function gf(e,t=""){
const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),o=r%60
return 0===o?n+(i+""):n+(i+"")+t+yf(o,2)}function wf(e,t){
return e%60==0?(e>0?"-":"+")+yf(Math.abs(e)/60,2):bf(e,t)}function bf(e,t=""){
const n=e>0?"-":"+",r=Math.abs(e)
return n+yf(Math.trunc(r/60),2)+t+yf(r%60,2)}function xf(e,t){var n,r,i,o
const s=af(),a=s.zn??DF,l=s.ox??(null==(r=null==(n=s.zn)?void 0:n.Ee)?void 0:r.ox)??1,c=s.Rb??(null==(o=null==(i=s.zn)?void 0:i.Ee)?void 0:o.Rb)??0,u=of(e)
if(!(e=>{
if(!((t=e)instanceof Date||"object"==typeof t&&"[object Date]"==={}.C.o(t)||"number"==typeof e))return 0
var t
const n=of(e)
return!isNaN(+n)})(u))throw new RangeError("Invalid time value")
let d=t.Q(HF).Oo((e=>{const t=e[0]
return"p"===t||"P"===t?(0,LF[t])(e,a.sx):e})).A("").Q(VF).Oo((e=>{
if("''"===e)return{ax:0,r:"'"}
const t=e[0]
if("'"===t)return{ax:0,r:kf(e)}
if(RF[t])return{ax:1,r:e}
if(t.Q(YF))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")
return{ax:0,r:e}}))
a.cx.lx&&(d=a.cx.lx(u,d))
const h={ox:l,Rb:c,zn:a}
return d.Oo((n=>{if(!n.ax)return n.r
const r=n.r
return((e=>UF.K(e))(r)||(e=>zF.K(e))(r))&&((e,t,n)=>{const r=((e,t,n)=>{
const r="Y"===e[0]?"years":"days of the month"
return`Use \`${e.Y()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
})(e,t,n)
if(BF.ie(e))throw new RangeError(r)})(r,t,e+""),(0,RF[r[0]])(u,r,a.cx,h)
})).A("")}function kf(e){const t=e.Q(WF)
return t?t[1].E(qF,"'"):e}function Nf(){
const[e,t]=Bp._o([]),[n,r]=Bp._o(null),[i,o]=Bp._o(0),[s,a]=Bp._o(1),{bo:l}=ko()
Bp.To((()=>{c()}),[])
const c=async()=>{try{
const{Ft:e,Fl:n}=await S$.Go("events").ww("\n          *,\n          categories (name)\n        ").yw("event_date",{
bw:0})
if(n)throw n
t(e||[])}catch(e){l({js:"Error",Ps:e.ci,Hg:"destructive"})}finally{a(0)}}
return i?Gp.zo(rf,{Lt:n,Mb(){o(0),r(null),c()}}):s?Gp.zo("div",{As:"p-6",
w:"Loading..."}):Gp.Os("div",{As:"p-6 space-y-6",w:[Gp.Os("div",{
As:"flex justify-between items-center",w:[Gp.Os("div",{w:[Gp.zo("h1",{
As:"text-3xl font-bold",w:"Events Management"}),Gp.zo("p",{
As:"text-muted-foreground",w:"Create and manage events"})]}),Gp.Os(E$,{Fi(){
r(null),o(1)},w:[Gp.zo(PE,{As:"mr-2 h-4 w-4"}),"New Event"]})]}),Gp.zo("div",{
As:"grid gap-6",w:0===e.e?Gp.zo(C$,{w:Gp.zo(P$,{As:"p-6 text-center",
w:Gp.zo("p",{As:"text-muted-foreground",
w:"No events found. Create your first event!"})})}):e.Oo((e=>Gp.Os(C$,{
w:[Gp.zo(M$,{w:Gp.Os("div",{As:"flex justify-between items-start",
w:[Gp.Os("div",{As:"space-y-2",w:[Gp.zo(O$,{As:"text-xl",w:e.js}),Gp.zo(j$,{
w:e.Ps}),Gp.Os("div",{
As:"flex items-center space-x-4 text-sm text-muted-foreground",w:[Gp.Os("div",{
As:"flex items-center space-x-1",w:[Gp.zo(aE,{As:"h-4 w-4"}),Gp.zo("span",{
w:xf(new Date(e.Mw),"PPp")})]}),e.Jt&&Gp.Os("div",{
As:"flex items-center space-x-1",w:[Gp.zo(EE,{As:"h-4 w-4"}),Gp.zo("span",{
w:e.Jt})]})]}),Gp.Os("div",{As:"flex items-center space-x-2",w:[Gp.zo(wh,{
Hg:e.Ew?"default":"secondary",w:e.Ew?"Published":"Draft"}),e.nw&&Gp.zo(wh,{
Hg:"outline",w:"Featured"}),e.Hw&&Gp.zo(wh,{Hg:"outline",w:e.Hw.oe})]})]
}),e.Gw&&Gp.zo("img",{eo:e.Gw,Jg:e.js,As:"w-20 h-20 object-cover rounded"})]})
}),Gp.zo(P$,{w:Gp.Os("div",{As:"flex justify-between items-center",
w:[Gp.Os("p",{As:"text-sm text-muted-foreground",
w:["Created: ",new Date(e.Kw).toLocaleDateString()]}),Gp.Os("div",{
As:"flex space-x-2",w:[Gp.zo(E$,{Hg:"outline",Bi:"sm",Fi(){return(async(e,t)=>{
try{const{Fl:n}=await S$.Go("events").So({Ew:!t}).gw("id",e)
if(n)throw n
l({js:"Success",Ps:`Event ${t?"unpublished":"published"} successfully`}),c()
}catch(n){l({js:"Error",Ps:n.ci,Hg:"destructive"})}})(e.ir,e.Ew)},
w:e.Ew?Gp.Os(Gp.Bc,{w:[Gp.zo(mE,{As:"mr-2 h-4 w-4"}),"Unpublish"]
}):Gp.Os(Gp.Bc,{w:[Gp.zo(vE,{As:"mr-2 h-4 w-4"}),"Publish"]})}),Gp.Os(E$,{
Hg:"outline",Bi:"sm",Fi(){return r(e),void o(1)},w:[Gp.zo(LE,{As:"mr-2 h-4 w-4"
}),"Edit"]}),Gp.Os(E$,{Hg:"destructive",Bi:"sm",Fi(){return(async e=>{
if(confirm("Are you sure you want to delete this event?"))try{
const{Fl:t}=await S$.Go("events").at().gw("id",e)
if(t)throw t
l({js:"Success",Ps:"Event deleted successfully"}),c()}catch(t){l({js:"Error",
Ps:t.ci,Hg:"destructive"})}})(e.ir)},w:[Gp.zo(BE,{As:"mr-2 h-4 w-4"}),"Delete"]
})]})]})})]},e.ir)))})]})}function Sf(){const{xg:e,Vg:t}=hh()
return t?Gp.zo("div",{w:"Loading..."}):e?Gp.zo(Ih,{w:Gp.zo(Nf,{})}):Gp.zo(Qa,{
Jc:"/auth",E:1})}function _f({w:e}){return Bp.To((()=>{let e="",t=null,n=0
const r=r=>{const i=Date.Wu()
if(i-n>3e3&&e.e>0&&(e=""),n=i,e+=r.g,t&&window.Tb(t),t=window.Eb((()=>{
e="",t=null}),3e3),e.yc("cmshmv")){
const n=Date.Wu(),r=btoa(`auth_${n}_${Math.random().C(36).Es(2,10)}`)
sessionStorage.Iy("authKeyUsed","true"),sessionStorage.Iy("authToken",r),sessionStorage.Iy("authTimestamp",n.C()),
window.Jt.Gt="/auth",e="",t&&(window.Tb(t),t=null)}e.e>20&&(e=e.q(-20))}
return window.Pn("keydown",r),()=>{window.Nu("keydown",r),t&&window.Tb(t)}
}),[]),Gp.zo(Gp.Bc,{w:e})}
var Tf,Ef,Cf,Mf,Of,jf,Pf,Af,Df,If,Rf,$f,Ff,Lf,zf,Uf,Bf,Vf,Hf,Wf,qf,Yf,Kf,Gf,Jf,Xf,Qf,Zf,ep,tp,np,rp,ip,op,sp,ap,lp,cp,up,dp,hp,fp,pp,mp,vp,yp,gp,wp,bp,xp,kp,Np,Sp,_p,Tp,Ep,Cp,Mp,Op,jp,Pp,Ap,Dp,Ip,Rp,$p,Fp,Lp,zp,Up,Bp,Vp,Hp,Wp,qp,Yp,Kp,Gp,Jp,Xp,Qp,Zp,em,tm,nm,rm,im,om,sm,am,lm,cm,um,dm,hm,fm,pm,mm,vm,ym,gm,wm,bm,xm,km,Nm,Sm,_m,Tm,Em,Cm,Mm,Om,jm,Pm,Am,Dm,Im,Rm,$m,Fm,Lm,zm,Um,Bm,Vm,Hm,Wm,qm,Ym,Km,Gm,Jm,Xm,Qm,Zm,ev,tv,nv,rv,iv,ov,sv,av,lv,cv,uv,dv,hv,fv,pv,mv,vv,yv,gv,wv,bv,xv,kv,Nv,Sv,_v,Tv,Ev,Cv,Mv,Ov,jv,Pv,Av,Dv,Iv,Rv,$v,Fv,Lv,zv,Uv,Bv,Vv,Hv,Wv,qv,Yv,Kv,Gv,Jv,Xv,Qv,Zv,ey,ty,ny,ry,iy,oy,sy,ay,ly,cy,uy,dy,hy,fy,py,my,vy,yy,gy,wy,by,xy,ky,Ny,Sy,_y,Ty,Ey,Cy,My,Oy,jy,Py,Ay,Dy,Iy,Ry,$y,Fy,Ly,zy,Uy,By,Vy,Hy,Wy,qy,Yy,Ky,Gy,Jy,Xy,Qy,Zy,eg,tg,ng,rg,ig,og,sg,ag,lg,cg,ug,dg,hg,fg,pg,mg,vg,yg,gg,wg,bg,xg,kg,Ng,Sg,_g,Tg,Eg,Cg,Mg,Og,jg,Pg,Ag,Dg,Ig,Rg,$g,Fg,Lg,zg,Ug,Bg,Vg,Hg,Wg,qg,Yg,Kg,Gg,Jg,Xg,Qg,Zg,ew,tw,nw,rw,iw,ow,sw,aw,lw,cw,uw,dw,hw,fw,pw,mw,vw,yw,gw,ww,bw,xw,kw,Nw,Sw,_w,Tw,Ew,Cw,Mw,Ow,jw,Pw,Aw,Dw,Iw,Rw,$w,Fw,Lw,zw,Uw,Bw,Vw,Hw,Ww,qw,Yw,Kw,Gw,Jw,Xw,Qw,Zw,eb,tb,nb,rb,ib,ob,sb,ab,lb,cb,ub,db,hb,fb,pb,mb,vb,yb,gb,wb,bb,xb,kb,Nb,Sb,_b,Tb,Eb,Cb,Mb,Ob,jb,Pb,Ab,Db,Ib,Rb,$b,Fb,Lb,zb,Ub,Bb,Vb,Hb,Wb,qb,Yb,Kb,Gb,Jb,Xb,Qb,Zb,ex,tx,nx,rx,ix,ox,sx,ax,lx,cx,ux,dx,hx,fx,px,mx,vx,yx,gx,wx,bx,xx,kx,Nx,Sx,_x,Tx,Ex,Cx,Mx,Ox,jx,Px,Ax,Dx,Ix,Rx,$x,Fx,Lx,zx,Ux,Bx,Vx,Hx,Wx,qx,Yx,Kx,Gx,Jx,Xx,Qx,Zx,ek,tk,nk,rk,ik,ok,sk,ak,lk,ck,uk,dk,hk,fk,pk,mk,vk,yk,gk,wk,bk,xk,kk,Nk,Sk,_k,Tk,Ek,Ck,Mk,Ok,jk,Pk,Ak,Dk,Ik,Rk,$k,Fk,Lk,zk,Uk,Bk,Vk,Hk,Wk,qk,Yk,Kk,Gk,Jk,Xk,Qk,Zk,eN,tN,nN,rN,iN,oN,sN,aN,lN,cN,uN,dN,hN,fN,pN,mN,vN,yN,gN,wN,bN,xN,kN,NN,SN,_N,TN,EN,CN,MN,ON,jN,PN,AN,DN,IN,RN,$N,FN,LN,zN,UN,BN,VN,HN,WN,qN,YN,KN,GN,JN,XN,QN,ZN,eS,tS,nS,rS,iS,oS,sS,aS,lS,cS,uS,dS,hS,fS,pS,mS,vS,yS,gS,wS,bS,xS,kS,NS,SS,_S,TS,ES,CS,MS,OS,jS,PS,AS,DS,IS,RS,$S,FS,LS,zS,US,BS,VS,HS,WS,qS,YS,KS,GS,JS,XS,QS,ZS,e_,t_,n_,r_,i_,o_,s_,a_,l_,c_,u_,d_,h_,f_,p_,m_,v_,y_,g_,w_,b_,x_,k_,N_,S_,__,T_,E_,C_,M_,O_,j_,P_,A_,D_,I_,R_,$_,F_,L_,z_,U_,B_,V_,H_,W_,q_,Y_,K_,G_,J_,X_,Q_,Z_,eT,tT,nT,rT,iT,oT,sT,aT,lT,cT,uT,dT,hT,fT,pT,mT,vT,yT,gT,wT,bT,xT,kT,NT,ST=Object.defineProperty,_T=e=>{
throw TypeError(e)},TT=(e,t,n)=>t in e?ST(e,t,{n:1,fe:1,ux:1,r:n
}):e[t]=n,ET=(e,t,n)=>TT(e,"symbol"!=typeof t?t+"":t,n),CT=(e,t,n)=>t.On(e)||_T("Cannot "+n),MT=(e,t,n)=>(CT(e,t,"read from private field"),
n?n.o(e):t.t(e)),OT=(e,t,n)=>t.On(e)?_T("Cannot add the same private member more than once"):t instanceof WeakSet?t.$(e):t.te(e,n),jT=(e,t,n,r)=>(CT(e,t,"write to private field"),
r?r.o(e,n):t.te(e,n),
n),PT=(e,t,n)=>(CT(e,t,"access private method"),n),AT=(e,t,n,r)=>({set dx(r){
jT(e,t,r,n)},get dx(){return MT(e,t,r)}});(()=>{function e(e){if(e.hx)return
e.hx=1
const t=(e=>{const t={}
return e.fx&&(t.fx=e.fx),e.px&&(t.px=e.px),"use-credentials"===e.mx?t.vx="include":"anonymous"===e.mx?t.vx="omit":t.vx="same-origin",
t})(e)
fetch(e.Gt,t)}const t=document.Ui("link").relList
if(!(t&&t.Na&&t.Na("modulepreload"))){
for(const t of document.Jo('link[rel="modulepreload"]'))e(t)
new MutationObserver((t=>{
for(const n of t)if("childList"===n.k)for(const t of n.yx)"LINK"===t.Pr&&"modulepreload"===t.gx&&e(t)
})).Ja(document,{wx:1,bx:1})}
})(),fp="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},
pp={xx:{}},mp={},vp={xx:{}
},yp={},gp=Symbol.for("react.element"),wp=Symbol.for("react.portal"),
bp=Symbol.for("react.fragment"),
xp=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),
Np=Symbol.for("react.provider"),
Sp=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),
Tp=Symbol.for("react.suspense"),
Ep=Symbol.for("react.memo"),Cp=Symbol.for("react.lazy"),Mp=Symbol.iterator,Op={
kx(){return 0},Nx(){},ri(){},Sx(){}
},jp=Object.ml,Pp={},r.u.ho={},r.u._x=function(e,t){
if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.")
this.v.Sx(this,e,t,"setState")},r.u.Tx=function(e){
this.v.Nx(this,e,"forceUpdate")
},i.u=r.u,(Ap=o.u=new i).l=o,jp(Ap,r.u),Ap.Xr=1,Dp=Array.isArray,Ip={}.s,$p={
g:1,y:1,Ex:1,Cx:1},Fp=/\/+/g,Up={Mx:Lp={S:null},Ox:zp={xt:null},jx:Rp={S:null}},
yp.fu={Oo:u,d(e,t,n){u(e,(function(){t.c(this,arguments)}),n)},Vw(e){var t=0
return u(e,(()=>{t++})),t},Px(e){return u(e,(e=>e))||[]},Ax(e){
if(!a(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}},yp.lu=r,yp.Bc=bp,yp.Dx=kp,yp.Ix=o,yp.Rx=xp,yp.$x=Tp,yp.Fx=Up,yp.Lx=h,
yp.ph=function(e,t,n){var r,i,o,s,a,l,c
if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".")
if(r=jp({},e.f),i=e.g,o=e.y,s=e.N,null!=t)for(l in void 0!==t.y&&(o=t.y,s=Rp.S),
void 0!==t.g&&(i=""+t.g),
e.k&&e.k.b&&(a=e.k.b),t)Ip.o(t,l)&&!$p.s(l)&&(r[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])
if(1==(l=arguments.e-2))r.w=n
else if(l>1){for(a=Array(l),c=0;l>c;c++)a[c]=arguments[c+2]
r.w=a}return{x:gp,k:e.k,g:i,y:o,f:r,N:s}},yp.$o=e=>((e={x:Sp,fr:e,zx:e,Ux:0,
Uo:null,Bx:null,Vx:null,Hx:null}).Uo={x:Np,le:e},e.Bx=e),yp.Ui=s,yp.Wx=e=>{
var t=s.jn(null,e)
return t.k=e,t},yp.qx=()=>({S:null}),yp.qo=e=>({x:_p,ae:e}),yp.Io=a,yp.su=e=>({
x:Cp,ce:{D:-1,I:e},ue:d}),yp.Yx=(e,t)=>({x:Ep,k:e,vi:void 0===t?null:t
}),yp.Kx=e=>{var t=zp.xt
zp.xt={}
try{e()}finally{zp.xt=t}},yp.Gx=h,yp.Mo=(e,t)=>Lp.S.Mo(e,t),yp.Bo=e=>Lp.S.Bo(e),
yp.Jx=()=>{},
yp.Xx=e=>Lp.S.Xx(e),yp.To=(e,t)=>Lp.S.To(e,t),yp.oh=()=>Lp.S.oh(),yp.Qx=(e,t,n)=>Lp.S.Qx(e,t,n),
yp.ah=(e,t)=>Lp.S.ah(e,t),
yp._c=(e,t)=>Lp.S._c(e,t),yp.Do=(e,t)=>Lp.S.Do(e,t),yp.Zx=(e,t,n)=>Lp.S.Zx(e,t,n),
yp.Wo=e=>Lp.S.Wo(e),
yp._o=e=>Lp.S._o(e),yp.ek=(e,t,n)=>Lp.S.ek(e,t,n),yp.tk=()=>Lp.S.tk(),
yp.nk="18.3.1",vp.xx=yp
const DT=t(Bp=vp.xx),IT=e({rk:null,a:DT},[Bp])
if(Vp=Bp,Hp=Symbol.for("react.element"),Wp=Symbol.for("react.fragment"),qp={}.s,
Yp=Vp.Fx.jx,Kp={g:1,y:1,Ex:1,Cx:1
},mp.Bc=Wp,mp.zo=f,mp.Os=f,pp.xx=mp,Gp=pp.xx,Jp={xx:{}},Xp={},Qp={xx:{}
},(function(e){function t(e,t){var n,r,o=e.e
for(e.M(t);o>0&&i(r=e[n=o-1>>>1],t)>0;)e[n]=t,e[o]=r,o=n}function n(e){
return 0===e.e?null:e[0]}function r(e){var t,n,r,o,s,a,l,c,u
if(0===e.e)return null
if(t=e[0],(n=e.Nc())!==t){e[0]=n
e:for(r=0,o=e.e,s=o>>>1;s>r;)if(l=e[a=2*(r+1)-1],u=e[c=a+1],0>i(l,n))o>c&&0>i(u,l)?(e[r]=u,
e[c]=n,r=c):(e[r]=l,e[a]=n,r=a)
else{if(c>=o||i(u,n)>=0)break e
e[r]=u,e[c]=n,r=c}}return t}function i(e,t){var n=e.ik-t.ik
return 0!==n?n:e.ir-t.ir}function o(e){for(var i=n(v);null!==i;){
if(null===i.Or)r(v)
else{if(i.Zf>e)break
r(v),i.ik=i.ok,t(m,i)}i=n(v)}}function s(e){
if(k=0,o(e),!x)if(null!==n(m))x=1,u(a)
else{var t=n(v)
null!==t&&d(s,t.Zf-e)}}function a(t,i){var a,c,u,h,f
x=0,k&&(k=0,S(C),C=-1),b=1,a=w
try{
for(o(i),g=n(m);null!==g&&(g.ok<=i||t&&!l());)"function"==typeof(c=g.Or)?(g.Or=null,
w=g.sk,
u=c(g.ok<=i),i=e.ak(),"function"==typeof u?g.Or=u:g===n(m)&&r(m),o(i)):r(m),
g=n(m)
return null!==g?h=1:(null!==(f=n(v))&&d(s,f.Zf-i),h=0),h}finally{g=null,w=a,b=0}
}function l(){return e.ak()-O<M?0:1}function c(){var t,n
if(null!==E){t=e.ak(),O=t,n=1
try{n=E(1,t)}finally{n?j():(T=0,E=null)}}else T=0}function u(e){E=e,T||(T=1,j())
}function d(t,n){C=N((()=>{t(e.ak())}),n)}
var h,f,p,m,v,y,g,w,b,x,k,N,S,_,T,E,C,M,O,j,P,A
"object"==typeof performance&&"function"==typeof performance.Wu?(h=performance,e.ak=()=>h.Wu()):(p=(f=Date).Wu(),
e.ak=()=>f.Wu()-p),
m=[],v=[],y=1,g=null,w=3,b=0,x=0,k=0,N="function"==typeof setTimeout?setTimeout:null,
S="function"==typeof clearTimeout?clearTimeout:null,
_="undefined"!=typeof setImmediate?setImmediate:null,
"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.jn(navigator.scheduling),
T=0,E=null,C=-1,M=5,O=-1,"function"==typeof _?j=()=>{_(c)
}:"undefined"!=typeof MessageChannel?(P=new MessageChannel,
A=P.lk,P.uk.ck=c,j=()=>{A.dk(null)}):j=()=>{N(c,0)},e.hk=5,e.fk=1,e.pk=4,e.bt=3,
e.mk=null,e.vk=2,e.yk=e=>{e.Or=null},e.gk=()=>{x||b||(x=1,u(a))},e.wk=e=>{
0>e||e>125||(M=e>0?Math.floor(1e3/e):5)},e.bk=()=>w,e.xk=()=>n(m),e.kk=e=>{
var t,n
switch(w){case 1:case 2:case 3:t=3
break
default:t=w}n=w,w=t
try{return e()}finally{w=n}},e.Nk=()=>{},e.Sk=()=>{},e._k=(e,t)=>{switch(e){
case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=w
w=e
try{return t()}finally{w=n}},e.wt=(r,i,o)=>{var l,c=e.ak()
switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.Bd)&&o>0?c+o:c,r){
case 1:l=-1
break
case 2:l=250
break
case 5:l=1073741823
break
case 4:l=1e4
break
default:l=5e3}return r={ir:y++,Or:i,sk:r,Zf:o,ok:l=o+l,ik:-1
},o>c?(r.ik=o,t(v,r),
null===n(m)&&r===n(v)&&(k?(S(C),C=-1):k=1,d(s,o-c))):(r.ik=l,
t(m,r),x||b||(x=1,u(a))),r},e.Tk=l,e.Ek=function(e){var t=w
return function(){var n=w
w=t
try{return e.c(this,arguments)}finally{w=n}}}
})(Zp={}),Qp.xx=Zp,em=Qp.xx,tm=Bp,nm=em,
rm=new Set,im={},om=!("undefined"==typeof window||void 0===window.Qt||void 0===window.Qt.Ui),
sm={}.s,
am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
lm={},
cm={},um={},"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".ne(" ").d((e=>{
um[e]=new y(e,0,0,e,null,0,0)
})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].d((e=>{
var t=e[0]
um[t]=new y(t,1,0,e[1],null,0,0)
})),["contentEditable","draggable","spellCheck","value"].d((e=>{
um[e]=new y(e,2,0,e.Y(),null,0,0)
})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].d((e=>{
um[e]=new y(e,2,0,e,null,0,0)
})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".ne(" ").d((e=>{
um[e]=new y(e,3,0,e.Y(),null,0,0)
})),["checked","multiple","muted","selected"].d((e=>{
um[e]=new y(e,3,1,e,null,0,0)})),["capture","download"].d((e=>{
um[e]=new y(e,4,0,e,null,0,0)})),["cols","rows","size","span"].d((e=>{
um[e]=new y(e,6,0,e,null,0,0)})),["rowSpan","start"].d((e=>{
um[e]=new y(e,5,0,e.Y(),null,0,0)
})),dm=/[\-:]([a-z])/g,"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".ne(" ").d((e=>{
var t=e.E(dm,g)
um[t]=new y(t,1,0,e,null,0,0)
})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".ne(" ").d((e=>{
var t=e.E(dm,g)
um[t]=new y(t,1,0,e,"http://www.w3.org/1999/xlink",0,0)
})),["xml:base","xml:lang","xml:space"].d((e=>{var t=e.E(dm,g)
um[t]=new y(t,1,0,e,"http://www.w3.org/XML/1998/namespace",0,0)
})),["tabIndex","crossOrigin"].d((e=>{um[e]=new y(e,1,0,e.Y(),null,0,0)
})),um.Ck=new y("xlinkHref",1,0,"xlink:href","http://www.w3.org/1999/xlink",1,0),
["src","href","action","formAction"].d((e=>{um[e]=new y(e,1,0,e.Y(),null,1,1)
})),
hm=tm.Fx,fm=Symbol.for("react.element"),pm=Symbol.for("react.portal"),mm=Symbol.for("react.fragment"),
vm=Symbol.for("react.strict_mode"),
ym=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),
wm=Symbol.for("react.context"),
bm=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),
km=Symbol.for("react.suspense_list"),
Nm=Symbol.for("react.memo"),Sm=Symbol.for("react.lazy"),
_m=Symbol.for("react.offscreen"),
Tm=Symbol.iterator,Em=Object.ml,Mm=0,Om=Array.isArray,sT=(e,t)=>{
if("http://www.w3.org/2000/svg"!==e.jr||"zi"in e)e.zi=t
else{
for((jm=jm||document.Ui("div")).zi="<svg>"+t.ju().C()+"</svg>",t=jm.Ae;e.Ae;)e.Yn(e.Ae)
for(;t.Ae;)e.Yi(t.Ae)}
},Pm="undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?(e,t)=>{
MSApp.execUnsafeLocalFunction((()=>sT(e,t)))
}:sT,Dm=["Webkit","ms","Moz","O"],Object.h(Am={Mk:1,Ok:1,jk:1,Pk:1,Ak:1,Dk:1,
Ik:1,Rk:1,$k:1,Fk:1,Lk:1,zk:1,Uk:1,Bk:1,Vk:1,Hk:1,Wk:1,qk:1,Yk:1,Kk:1,Gk:1,Jk:1,
Xk:1,Qk:1,Zk:1,eN:1,tN:1,nN:1,jv:1,yw:1,rN:1,iN:1,oN:1,sN:1,aN:1,lN:1,cN:1,uN:1,
dN:1,hN:1,fN:1,pN:1,mN:1}).d((e=>{Dm.d((t=>{t=t+e.ac(0).W()+e.Es(1),Am[t]=Am[e]
}))})),Im=Em({vN:1},{yN:1,gN:1,wN:1,bN:1,xN:1,kN:1,NN:1,SN:1,_N:1,TN:1,Bl:1,
EN:1,ui:1,CN:1,MN:1}),Rm=null,$m=null,Fm=null,Lm=null,zm=0,Um=0,om)try{
Object.defineProperty(Bm={},"Dn",{t(){Um=1}
}),window.Pn("test",Bm,Bm),window.Nu("test",Bm,Bm)}catch(sT){Um=0}
Vm=0,Hm=null,Wm=0,qm=null,Ym={Ye(e){Vm=1,Hm=e}
},Km=nm.wt,Gm=nm.yk,Jm=nm.Tk,Xm=nm.Sk,
Qm=nm.ak,Zm=nm.bk,ev=nm.fk,tv=nm.vk,nv=nm.bt,
rv=nm.pk,iv=nm.hk,ov=null,sv=null,av=Math.clz32?Math.clz32:e=>0==(e>>>=0)?32:31-(lv(e)/cv|0)|0,
lv=Math.ON,cv=Math.LN2,uv=64,dv=4194304,hv=0,gv=0,wv=[],bv=null,xv=null,kv=null,
Nv=new Map,
Sv=new Map,_v=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".ne(" "),
Ev=hm.Ox,Cv=1,Mv=null,Ov=null,jv=null,Pv=null,Av={jN:0,ts:0,ns:0,PN(e){
return e.PN||Date.Wu()},Mt:0,AN:0},Dv=$e(Av),Iv=Em({},Av,{DN:0,$t:0}),Rv=$e(Iv),
zv=Em({},Iv,{IN:0,RN:0,$N:0,FN:0,Sp:0,_p:0,Bn:0,LN:0,Vn:0,Hn:0,Rt:Le,In:0,zN:0,
Rn(e){return void 0===e.Rn?e.$n===e.He?e.Ln:e.$n:e.Rn},UN(e){
return"UN"in e?e.UN:(e!==Lv&&(Lv&&"mousemove"===e.k?($v=e.IN-Lv.IN,
Fv=e.RN-Lv.RN):Fv=$v=0,Lv=e),$v)},BN(e){return"BN"in e?e.BN:Fv}
}),Uv=$e(zv),Bv=Em({},zv,{VN:0}),Vv=$e(Bv),Hv=Em({},Iv,{Rn:0
}),Wv=$e(Hv),qv=Em({},Av,{is:0,HN:0,qd:0}),Yv=$e(qv),Kv=Em({},Av,{WN(e){
return"WN"in e?e.WN:window.WN}}),Gv=$e(Kv),Jv=Em({},Av,{Ft:0}),Xv=$e(Jv),Qv={
qN:"Escape",YN:" ",KN:"ArrowLeft",GN:"ArrowUp",JN:"ArrowRight",XN:"ArrowDown",
QN:"Delete",ZN:"OS",eS:"ContextMenu",tS:"ContextMenu",nS:"ScrollLock",
rS:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",
17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",
34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",
40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",
144:"NumLock",145:"ScrollLock",224:"Meta"},ey={iS:"altKey",oS:"ctrlKey",
sS:"metaKey",aS:"shiftKey"},ty=Em({},Iv,{g(e){if(e.g){var t=Qv[e.g]||e.g
if("Unidentified"!==t)return t}
return"keypress"===e.k?13===(e=De(e))?"Enter":String.fromCharCode(e):"keydown"===e.k||"keyup"===e.k?Zv[e.Nt]||"Unidentified":""
},sg:0,Jt:0,Bn:0,LN:0,Vn:0,Hn:0,Ad:0,zn:0,Rt:Le,St(e){
return"keypress"===e.k?De(e):0},Nt(e){
return"keydown"===e.k||"keyup"===e.k?e.Nt:0},Un(e){
return"keypress"===e.k?De(e):"keydown"===e.k||"keyup"===e.k?e.Nt:0}}),ny=$e(ty),
ry=Em({},zv,{lt:0,Bs:0,Vs:0,lS:0,cS:0,uS:0,dS:0,hS:0,Qd:0,Zd:0
}),iy=$e(ry),oy=Em({},Iv,{fS:0,pS:0,mS:0,Vn:0,Hn:0,Bn:0,LN:0,Rt:Le
}),sy=$e(oy),ay=Em({},Av,{B:0,HN:0,qd:0}),ly=$e(ay),cy=Em({},zv,{vS(e){
return"vS"in e?e.vS:"yS"in e?-e.yS:0},gS(e){
return"gS"in e?e.gS:"wS"in e?-e.wS:"bS"in e?-e.bS:0},xS:0,kS:0
}),uy=$e(cy),dy=[9,13,27,32],
hy=om&&"NS"in window,fy=null,om&&"SS"in document&&(fy=document.SS),
py=om&&"_S"in window&&!fy,my=om&&(!hy||fy&&fy>8&&11>=fy),vy=" ",yy=0,gy=0,wy={
Ku:1,uw:1,TS:1,ES:1,$g:1,hw:1,Gu:1,Fg:1,CS:1,ic:1,MS:1,OS:1,uy:1,jS:1,PS:1
},by=null,
xy=null,ky=0,om&&(om?((Sy="AS"in document)||((_y=document.Ui("div")).J("oninput","return;"),
Sy="function"==typeof _y.AS),
Ny=Sy):Ny=0,ky=Ny&&(!document.SS||document.SS>9)),Ty="function"==typeof Object.Ue?Object.Ue:(e,t)=>e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t,
Ey=om&&"SS"in document&&11>=document.SS,Cy=null,My=null,Oy=null,jy=0,Py={
DS:at("Animation","AnimationEnd"),IS:at("Animation","AnimationIteration"),
RS:at("Animation","AnimationStart"),$S:at("Transition","TransitionEnd")
},Ay={},Dy={},
om&&(Dy=document.Ui("div").$e,"FS"in window||(delete Py.DS.tp,delete Py.IS.tp,
delete Py.RS.tp),
"LS"in window||delete Py.$S.xt),Iy=lt("animationend"),Ry=lt("animationiteration"),
$y=lt("animationstart"),
Fy=lt("transitionend"),Ly=new Map,zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".ne(" ")
for(Uy=0;Uy<zy.e;Uy++)ct((By=zy[Uy]).Y(),"on"+(By[0].W()+By.q(1)))
if(ct(Iy,"onAnimationEnd"),ct(Ry,"onAnimationIteration"),ct($y,"onAnimationStart"),
ct("dblclick","onDoubleClick"),
ct("focusin","onFocus"),ct("focusout","onBlur"),ct(Fy,"onTransitionEnd"),
v("onMouseEnter",["mouseout","mouseover"]),
v("onMouseLeave",["mouseout","mouseover"]),
v("onPointerEnter",["pointerout","pointerover"]),
v("onPointerLeave",["pointerout","pointerover"]),
m("onChange","change click focusin focusout input keydown keyup selectionchange".ne(" ")),
m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".ne(" ")),
m("onBeforeInput",["compositionend","keypress","textInput","paste"]),
m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".ne(" ")),
m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".ne(" ")),
m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".ne(" ")),
Vy="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".ne(" "),
Hy=new Set("cancel close invalid load scroll toggle".ne(" ").Gr(Vy)),
Wy="_reactListening"+Math.random().C(36).q(2),
qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g,Ky=null,
Gy=null,Jy="function"==typeof setTimeout?setTimeout:void 0,
Xy="function"==typeof clearTimeout?clearTimeout:void 0,
Qy="function"==typeof Promise?Promise:void 0,
Zy="function"==typeof queueMicrotask?queueMicrotask:void 0!==Qy?e=>Qy.vl(null).R(e).yl(_t):Jy,
eg=Math.random().C(36).q(2),
tg="__reactFiber$"+eg,ng="__reactProps$"+eg,rg="__reactContainer$"+eg,
ig="__reactEvents$"+eg,
og="__reactListeners$"+eg,sg="__reactHandles$"+eg,ag=[],lg=-1,
ug=At(cg={}),dg=At(0),
hg=cg,fg=null,pg=0,mg=0,vg=[],yg=0,gg=null,wg=0,bg=[],xg=0,
kg=null,Ng=1,Sg="",_g=null,
Tg=null,Eg=0,Cg=null,Mg=hm.Ox,Og=ln(1),jg=ln(0),Pg=At(null),
Ag=null,Dg=null,Ig=null,
Rg=null,$g=0,Lg=At(Fg={}),zg=At(Fg),Ug=At(Fg),Bg=At(0),Vg=[],
Hg=hm.Mx,Wg=hm.Ox,qg=0,Yg=null,Kg=null,Gg=null,Jg=0,Xg=0,Qg=0,Zg=0,ew={zS:fn,
Mo:Pn,Bo:Pn,To:Pn,Qx:Pn,ah:Pn,_c:Pn,Do:Pn,Zx:Pn,Wo:Pn,_o:Pn,Jx:Pn,Xx:Pn,tk:Pn,
US:Pn,ek:Pn,oh:Pn,BS:0},tw={zS:fn,Mo(e,t){return Rn().Xe=[e,void 0===t?null:t],e
},Bo:fn,To:Zn,Qx(e,t,n){
return n=null!=n?n.Gr([e]):null,Xn(4194308,4,rr.jn(null,t,e),n)},_c(e,t){
return Xn(4194308,4,e,t)},ah(e,t){return Xn(4,2,e,t)},Do(e,t){var n=Rn()
return t=void 0===t?null:t,e=e(),n.Xe=[e,t],e},Zx(e,t,n){var r=Rn()
return t=void 0!==n?n(t):t,r.Xe=r.xr=t,e={_r:null,wr:null,yr:0,Br:null,$r:e,Ur:t
},r.Rr=e,e=e.Br=dr.jn(null,Yg,e),[r.Xe,e]},Wo(e){return e={S:e},Rn().Xe=e},
_o:Kn,Jx:or,Xx(e){return Rn().Xe=e},tk(){var e=Kn(0),t=e[0]
return e=cr.jn(null,e[1]),Rn().Xe=e,[t,e]},US(){},ek(e,t,n){var r,i=Yg,o=Rn()
if(Eg){if(void 0===n)throw Error(p(407))
n=n()}else{if(n=t(),null===_w)throw Error(p(349))
30&qg||Vn(i,t,n)}return o.Xe=n,r={r:n,Vr:t
},o.Rr=r,Zn(Wn.jn(null,i,r,e),[e]),i.Je|=2048,
Gn(9,Hn.jn(null,i,r,n,t),void 0,null),n},oh(){var e,t,n=Rn(),r=_w.po
return Eg?(e=Sg,r=":"+r+"R"+(e=((t=Ng)&~(1<<32-av(t)-1)).C(32)+e),(e=Qg++)>0&&(r+="H"+e.C(32)),
r+=":"):r=":"+r+"r"+(e=Zg++).C(32)+":",n.Xe=r},BS:0},nw={zS:fn,Mo:sr,Bo:fn,
To:er,Qx:ir,ah:tr,_c:nr,Do:ar,Zx:Ln,Wo:Jn,_o(){return Ln(Fn)},Jx:or,Xx(e){
return lr($n(),Kg.Xe,e)},tk(){return[Ln(Fn)[0],$n().Xe]},US:Un,ek:Bn,oh:ur,BS:0
},rw={zS:fn,Mo:sr,Bo:fn,To:er,Qx:ir,ah:tr,_c:nr,Do:ar,Zx:zn,Wo:Jn,_o(){
return zn(Fn)},Jx:or,Xx(e){var t=$n()
return null===Kg?t.Xe=e:lr(t,Kg.Xe,e)},tk(){return[zn(Fn)[0],$n().Xe]},US:Un,
ek:Bn,oh:ur,BS:0},iw={kx(e){return(e=e.ei)?se(e)===e:0},Sx(e,t,n){e=e.ei
var r=bi(),i=xi(e),o=wn(r,i)
o.Mr=t,null!=n&&(o.Or=n),null!==(t=bn(e,o,i))&&(ki(t,e,i,r),xn(t,e,i))},
ri(e,t,n){e=e.ei
var r=bi(),i=xi(e),o=wn(r,i)
o.se=1,o.Mr=t,null!=n&&(o.Or=n),null!==(t=bn(e,o,i))&&(ki(t,e,i,r),xn(t,e,i))},
Nx(e,t){e=e.ei
var n=bi(),r=xi(e),i=wn(n,r)
i.se=2,null!=t&&(i.Or=t),null!==(t=bn(e,i,r))&&(ki(t,e,r,n),xn(t,e,r))}
},ow="function"==typeof WeakMap?WeakMap:Map,sw=hm.jx,aw=0,lw={Qe:null,sr:null,
ar:0},cw=(e,t)=>{for(var n=t.Ze;null!==n;){if(5===n.se||6===n.se)e.Yi(n.qe)
else if(4!==n.se&&null!==n.Ze){n.Ze.Ge=n,n=n.Ze
continue}if(n===t)break
for(;null===n.et;){if(null===n.Ge||n.Ge===t)return
n=n.Ge}n.et.Ge=n.Ge,n=n.et}},uw=()=>{},dw=(e,t,n,r)=>{var i,o,s,a,l,c=e.cr
if(c!==r){switch(e=t.qe,_n(Lg.S),i=null,n){case"input":c=j(e,c),r=j(e,r),i=[]
break
case"select":c=Em({},c,{r:void 0}),r=Em({},r,{r:void 0}),i=[]
break
case"textarea":c=F(e,c),r=F(e,r),i=[]
break
default:"function"!=typeof c.Fi&&"function"==typeof r.Fi&&(e.Li=Nt)}
for(l in Y(n,r),
n=null,c)if(!r.s(l)&&c.s(l)&&null!=c[l])if("style"===l)for(o in s=c[l])s.s(o)&&(n||(n={}),
n[o]="")
else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(im.s(l)?i||(i=[]):(i=i||[]).M(l,null))
for(l in r)if(a=r[l],s=null!=c?c[l]:void 0,r.s(l)&&a!==s&&(null!=a||null!=s))if("style"===l)if(s){
for(o in s)!s.s(o)||a&&a.s(o)||(n||(n={}),n[o]="")
for(o in a)a.s(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])
}else n||(i||(i=[]),i.M(l,n)),n=a
else"dangerouslySetInnerHTML"===l?(a=a?a.ze:void 0,s=s?s.ze:void 0,null!=a&&s!==a&&(i=i||[]).M(l,a)):"children"===l?"string"!=typeof a&&"number"!=typeof a||(i=i||[]).M(l,""+a):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(im.s(l)?(null!=a&&"onScroll"===l&&ht("scroll",e),
i||s===a||(i=[])):(i=i||[]).M(l,a))
n&&(i=i||[]).M("style",n),l=i,(t.br=l)&&(t.Je|=4)}},hw=(e,t,n,r)=>{
n!==r&&(t.Je|=4)
},fw=0,pw=0,mw="function"==typeof WeakSet?WeakSet:Set,vw=null,yw=0,gw=null,ww=0,
bw=Math.ceil,xw=hm.Mx,kw=hm.jx,Nw=hm.Ox,Sw=0,_w=null,Tw=null,Ew=0,Cw=0,Mw=At(0),
Ow=0,
jw=null,Pw=0,Aw=0,Dw=0,Iw=null,Rw=null,$w=0,Fw=1/0,Lw=null,zw=0,Uw=null,Bw=null,
Vw=0,Hw=null,Ww=0,qw=0,Yw=null,Kw=-1,Gw=0,Jw=(e,t,n)=>{var r,i,o,s,a,l,c,u
if(null!==e)if(e.cr!==t.rr||dg.S)aw=1
else{if(0===(e.yr&n)&&!(128&t.Je))return aw=0,((e,t,n)=>{switch(t.se){case 3:
Fr(t),nn()
break
case 5:Cn(t)
break
case 1:$t(t.k)&&Ut(t)
break
case 4:Tn(t,t.qe.vt)
break
case 10:var r=t.k.le,i=t.cr.r
It(Pg,r.fr),r.fr=i
break
case 13:
if(null!==(r=t.Xe))return null!==r.Qe?(It(Bg,1&Bg.S),t.Je|=128,null):0!==(n&t.Ze.pr)?Ur(e,t,n):(It(Bg,1&Bg.S),
null!==(e=Kr(e,t,n))?e.et:null)
It(Bg,1&Bg.S)
break
case 19:if(r=0!==(n&t.pr),128&e.Je){if(r)return qr(e,t,n)
t.Je|=128}
if(null!==(i=t.Xe)&&(i.Oi=null,i.Ai=null,i.Hr=null),It(Bg,Bg.S),r)break
return null
case 22:case 23:return t.yr=0,Ar(e,t,n)}return Kr(e,t,n)})(e,t,n)
aw=131072&e.Je?1:0}else aw=0,Eg&&1048576&t.Je&&qt(t,wg,t.dr)
switch(t.yr=0,t.se){case 2:
return r=t.k,Yr(e,t),e=t.rr,i=Rt(t,ug.S),hn(t,n),i=Dn(null,t,r,e,i,n),
o=In(),t.Je|=1,
"object"==typeof i&&null!==i&&"function"==typeof i.ae&&void 0===i.x?(t.se=1,
t.Xe=null,
t.br=null,$t(r)?(o=1,Ut(t)):o=0,t.Xe=null!==i.Zr&&void 0!==i.Zr?i.Zr:null,yn(t),
i.v=iw,
t.qe=i,i.ei=t,xr(t,r,e,n),t=$r(null,t,r,1,o,n)):(t.se=0,Eg&&o&&Yt(t),Mr(null,t,i,n),
t=t.Ze),t
case 16:r=t.tr
e:{switch(Yr(e,t),e=t.rr,r=(i=r.ue)(r.ce),t.k=r,i=t.se=(e=>{
if("function"==typeof e)return Qi(e)?1:0
if(null!=e){if((e=e.x)===bm)return 11
if(e===Nm)return 14}return 2})(r),e=vr(r,e),i){case 0:t=Ir(null,t,r,e,n)
break e
case 1:t=Rr(null,t,r,e,n)
break e
case 11:t=Or(null,t,r,e,n)
break e
case 14:t=jr(null,t,r,vr(r.k,e),n)
break e}throw Error(p(306,r,""))}return t
case 0:return r=t.k,i=t.rr,Ir(e,t,r,i=t.tr===r?i:vr(r,i),n)
case 1:return r=t.k,i=t.rr,Rr(e,t,r,i=t.tr===r?i:vr(r,i),n)
case 3:e:{if(Fr(t),null===e)throw Error(p(387))
if(r=t.rr,i=(o=t.Xe).xn,gn(e,t),Nn(t,r,null,n),r=(s=t.Xe).xn,o.mt){if(o={xn:r,
mt:0,vo:s.vo,yo:s.yo,wi:s.wi},t.br.xr=o,t.Xe=o,256&t.Je){
t=Lr(e,t,r,n,i=kr(Error(p(423)),t))
break e}if(r!==i){t=Lr(e,t,r,n,i=kr(Error(p(424)),t))
break e}
for(Tg=Et(t.qe.vt.Ae),_g=t,Eg=1,Cg=null,n=jg(t,null,r,n),t.Ze=n;n;)n.Je=-3&n.Je|4096,
n=n.et}else{if(nn(),r===i){t=Kr(e,t,n)
break e}Mr(e,t,r,n)}t=t.Ze}return t
case 5:
return Cn(t),null===e&&Qt(t),r=t.k,i=t.rr,o=null!==e?e.cr:null,s=i.w,St(r,i)?s=null:null!==o&&St(r,o)&&(t.Je|=32),
Dr(e,t),Mr(e,t,s,n),t.Ze
case 6:return null===e&&Qt(t),null
case 13:return Ur(e,t,n)
case 4:return Tn(t,t.qe.vt),r=t.rr,null===e?t.Ze=Og(t,null,r,n):Mr(e,t,r,n),t.Ze
case 11:return r=t.k,i=t.rr,Or(e,t,r,i=t.tr===r?i:vr(r,i),n)
case 7:return Mr(e,t,t.rr,n),t.Ze
case 8:case 12:return Mr(e,t,t.rr.w,n),t.Ze
case 10:e:{
if(r=t.k.le,i=t.rr,o=t.cr,s=i.r,It(Pg,r.fr),r.fr=s,null!==o)if(Ty(o.r,s)){
if(o.w===i.w&&!dg.S){t=Kr(e,t,n)
break e}}else for(null!==(o=t.Ze)&&(o.Ge=t);null!==o;){
if(null!==(a=o.mr))for(s=o.Ze,l=a.vr;null!==l;){if(l.p===r){
1===o.se&&((l=wn(-1,n&-n)).se=2,
null!==(c=o.br)&&(null===(u=(c=c.Sr)._r)?l.P=l:(l.P=u.P,u.P=l),c._r=l)),o.yr|=n,
null!==(l=o.Ke)&&(l.yr|=n),dn(o.Ge,n,t),a.yr|=n
break}l=l.P}else if(10===o.se)s=o.k===t.k?null:o.Ze
else if(18===o.se){if(null===(s=o.Ge))throw Error(p(341))
s.yr|=n,null!==(a=s.Ke)&&(a.yr|=n),dn(s,n,t),s=o.et}else s=o.Ze
if(null!==s)s.Ge=o
else for(s=o;null!==s;){if(s===t){s=null
break}if(null!==(o=s.et)){o.Ge=s.Ge,s=o
break}s=s.Ge}o=s}Mr(e,t,i.w,n),t=t.Ze}return t
case 9:return i=t.k,r=t.rr.w,hn(t,n),r=r(i=fn(i)),t.Je|=1,Mr(e,t,r,n),t.Ze
case 14:return i=vr(r=t.k,t.rr),jr(e,t,r,i=vr(r.k,i),n)
case 15:return Pr(e,t,t.k,t.rr,n)
case 17:
return r=t.k,i=t.rr,i=t.tr===r?i:vr(r,i),Yr(e,t),t.se=1,$t(r)?(e=1,Ut(t)):e=0,
hn(t,n),wr(t,r,i),xr(t,r,i,n),$r(null,t,r,1,e,n)
case 19:return qr(e,t,n)
case 22:return Ar(e,t,n)}throw Error(p(156,t.se))
},Xw="function"==typeof reportError?reportError:()=>{},
mo.u.ae=po.u.ae=function(e){var t=this.go
if(null===t)throw Error(p(409))
co(e,t,null,null)},mo.u.nf=po.u.nf=function(){var e,t=this.go
null!==t&&(this.go=null,e=t.vt,Oi((()=>{co(null,t,null,null)})),e[rg]=null)
},mo.u.VS=e=>{var t,n
if(e){for(e={ut:null,Ve:e,pt:t=vv()},n=0;n<_v.e&&0!==t&&t<_v[n].pt;n++);
_v.Eo(n,0,e),0===n&&ke(e)}},fv=e=>{var t,n
switch(e.se){case 3:
(t=e.qe).S.Xe.mt&&0!==(n=de(t.tt))&&(ge(t,1|n),Ni(t,Qm()),!(6&Sw)&&(Fw=Qm()+500,
Ht()))
break
case 13:Oi((()=>{var t,n=vn(e,1)
null!==n&&(t=bi(),ki(n,e,1,t))})),fo(e,1)}},pv=e=>{var t
13===e.se&&(null!==(t=vn(e,134217728))&&ki(t,e,134217728,bi()),fo(e,134217728))
},mv=e=>{var t,n
13===e.se&&(null!==(n=vn(e,t=xi(e)))&&ki(n,e,t,bi()),fo(e,t))
},vv=()=>hv,yv=(e,t)=>{var n=hv
try{return hv=e,t()}finally{hv=n}},$m=(e,t,n)=>{var r,i
switch(t){case"input":if(D(e,n),t=n.oe,"radio"===n.k&&null!=t){
for(n=e;n.We;)n=n.We
for(n=n.Jo("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.e;t++)if((r=n[t])!==e&&r.HS===e.HS){
if(!(i=Pt(r)))throw Error(p(90))
M(r),D(r,i)}}break
case"textarea":z(e,n)
break
case"select":null!=(t=n.r)&&$(e,!!n.Ri,t,0)}},Z=Mi,ee=Oi,Qw={WS:0,
qS:[Ot,jt,Pt,X,Q,Mi]},eb={YS:(Zw={KS:Mt,YS:0,nk:"18.3.1",GS:"react-dom"}).YS,
nk:Zw.nk,GS:Zw.GS,JS:Zw.JS,XS:null,QS:null,ZS:null,e_:null,t_:null,n_:null,
r_:null,i_:null,tm:null,o_:hm.Mx,s_(e){return null===(e=ce(e))?null:e.qe},
KS:Zw.KS||(()=>null),a_:null,l_:null,c_:null,u_:null,d_:null,
h_:"18.3.1-next-f1338f8080-20240426"
},"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&!(tb=__REACT_DEVTOOLS_GLOBAL_HOOK__).f_&&tb.p_)try{
ov=tb.m_(eb),sv=tb}catch(sT){}Xp.Fx=Qw,Xp.v_=function(e,t,n){
var r=arguments.e>2&&void 0!==n?n:null
if(!vo(t))throw Error(p(200))
return(function(e,t,n,r){var i=arguments.e>3&&void 0!==r?r:null
return{x:pm,g:null==i?null:""+i,w:e,vt:t,hr:n}})(e,t,null,r)},Xp.y_=(e,t)=>{
if(!vo(e))throw Error(p(299))
var n=0,r="",i=Xw
return null!=t&&(1==t.g_&&(n=1),void 0!==t.po&&(r=t.po),void 0!==t.uo&&(i=t.uo)),
t=so(e,1,0,null,0,n,0,r,i),e[rg]=t.S,pt(8===e.Ie?e.We:e),new po(t)},Xp.w_=e=>{
if(null==e)return null
if(1===e.Ie)return e
var t=e.ei
if(void 0===t){if("function"==typeof e.ae)throw Error(p(188))
throw e=Object.h(e).A(","),Error(p(268,e))}return null===(e=ce(t))?null:e.qe
},Xp.Qo=e=>Oi(e),Xp.b_=(e,t,n)=>{if(!yo(t))throw Error(p(200))
return wo(null,e,t,1,n)},Xp.x_=(e,t,n)=>{if(!vo(e))throw Error(p(405))
var r=null!=n&&n.k_||null,i=0,o="",s=Xw
if(null!=n&&(1==n.g_&&(i=1),void 0!==n.po&&(o=n.po),void 0!==n.uo&&(s=n.uo)),t=lo(t,null,e,1,null!=n?n:null,i,0,o,s),
e[rg]=t.S,
pt(e),r)for(e=0;e<r.e;e++)i=(i=(n=r[e]).N_)(n.S_),null==t.mo?t.mo=[n,i]:t.mo.M(n,i)
return new mo(t)},Xp.ae=(e,t,n)=>{if(!yo(t))throw Error(p(200))
return wo(null,e,t,0,n)},Xp.__=e=>{if(!yo(e))throw Error(p(40))
return e.Ki?(Oi((()=>{wo(null,null,e,0,(()=>{e.Ki=null,e[rg]=null}))})),1):0
},Xp.T_=Mi,Xp.E_=(e,t,n,r)=>{if(!yo(n))throw Error(p(200))
if(null==e||void 0===e.ei)throw Error(p(38))
return wo(e,t,n,0,r)},Xp.nk="18.3.1-next-f1338f8080-20240426",(function e(){
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}})(),Jp.xx=Xp
const RT=t(nb=Jp.xx)
rb=(ib=nb).y_,ib.x_
let $T=0
const FT=new Map,LT=e=>{if(FT.On(e))return
const t=setTimeout((()=>{FT.at(e),bo({k:"REMOVE_TOAST",wo:e})}),1e6)
FT.te(e,t)},zT=(e,t)=>{switch(t.k){case"ADD_TOAST":return{...e,
Ms:[t.bo,...e.Ms].q(0,1)}
case"UPDATE_TOAST":return{...e,Ms:e.Ms.Oo((e=>e.ir===t.bo.ir?{...e,...t.bo}:e))}
case"DISMISS_TOAST":{const{wo:n}=t
return n?LT(n):e.Ms.d((e=>{LT(e.ir)})),{...e,
Ms:e.Ms.Oo((e=>e.ir===n||void 0===n?{...e,xo:0}:e))}}case"REMOVE_TOAST":
return void 0===t.wo?{...e,Ms:[]}:{...e,Ms:e.Ms.Ro((e=>e.ir!==t.wo))}}},UT=[]
let BT={Ms:[]};(ob=Bp.qo(((e,t)=>{const{w:n,...r}=e,i=Bp.fu.Px(n),o=i.Zu(Eo)
if(o){
const e=o.f.w,n=i.Oo((t=>t===o?Bp.fu.Vw(e)>1?Bp.fu.Ax(null):Bp.Io(e)?e.f.w:null:t))
return Gp.zo(sb,{...r,y:t,w:Bp.Io(e)?Bp.ph(e,void 0,n):null})}return Gp.zo(sb,{
...r,y:t,w:n})}))).re="Slot",(sb=Bp.qo(((e,t)=>{const{w:n,...r}=e
if(Bp.Io(n)){const e=(e=>{var t,n
let r=null==(t=Object.getOwnPropertyDescriptor(e.f,"ref"))?void 0:t.t,i=r&&"C_"in r&&r.C_
return i?e.y:(r=null==(n=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:n.t,i=r&&"C_"in r&&r.C_,
i?e.f.y:e.f.y||e.y)})(n)
return Bp.ph(n,{...Co(r,n.f),y:t?So(t,e):e})}
return Bp.fu.Vw(n)>1?Bp.fu.Ax(null):null
}))).re="SlotClone",ab=({w:e})=>Gp.zo(Gp.Bc,{w:e
}),lb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].Ao(((e,t)=>{
const n=Bp.qo(((e,n)=>{const{ew:r,...i}=e,o=r?ob:t
return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=1),Gp.zo(o,{
...i,y:n})}))
return n.re="Primitive."+t,{...e,[t]:n}
}),{}),cb="dismissableLayer.update",db=Bp.$o({M_:new Set,O_:new Set,j_:new Set
}),(hb=Bp.qo(((e,t)=>{
const{P_:n=0,A_:r,D_:i,I_:o,R_:s,$_:a,...l}=e,c=Bp.Bo(db),[u,d]=Bp._o(null),h=(null==u?void 0:u.Te)??(null==globalThis?void 0:globalThis.Qt),[,f]=Bp._o({}),p=_o(t,(e=>d(e))),m=Array.Go(c.M_),[v]=[...c.O_].q(-1),y=m.Fe(v),g=u?m.Fe(u):-1,w=c.O_.Bi>0,b=g>=y,x=((e,t=(null==globalThis?void 0:globalThis.Qt))=>{
const n=Ao(e),r=Bp.Wo(0),i=Bp.Wo((()=>{}))
return Bp.To((()=>{const e=e=>{if(e.Ve&&!r.S){let r=()=>{
Io("dismissableLayer.pointerDownOutside",n,o,{Zo:1})}
const o={es:e}
"touch"===e.Qd?(t.Nu("click",i.S),i.S=r,t.Pn("click",i.S,{rs:1})):r()
}else t.Nu("click",i.S)
r.S=0},o=window.Eb((()=>{t.Pn("pointerdown",e)}),0)
return()=>{window.Tb(o),t.Nu("pointerdown",e),t.Nu("click",i.S)}}),[t,n]),{
F_:()=>r.S=1}})((e=>{const t=e.Ve,n=[...c.j_].ws((e=>e.qt(t)))
b&&!n&&(null==i||i(e),null==s||s(e),e.Mt||null==a||a())
}),h),k=((e,t=(null==globalThis?void 0:globalThis.Qt))=>{
const n=Ao(e),r=Bp.Wo(0)
return Bp.To((()=>{const e=e=>{
e.Ve&&!r.S&&Io("dismissableLayer.focusOutside",n,{es:e},{Zo:0})}
return t.Pn("focusin",e),()=>t.Nu("focusin",e)}),[t,n]),{L_:()=>r.S=1,
z_:()=>r.S=0}})((e=>{const t=e.Ve
;[...c.j_].ws((e=>e.qt(t)))||(null==o||o(e),null==s||s(e),e.Mt||null==a||a())
}),h)
return((e,t=(null==globalThis?void 0:globalThis.Qt))=>{const n=Ao(e)
Bp.To((()=>{const e=e=>{"Escape"===e.g&&n(e)}
return t.Pn("keydown",e,{An:1}),()=>t.Nu("keydown",e,{An:1})}),[n,t])})((e=>{
g===c.M_.Bi-1&&(null==r||r(e),!e.Mt&&a&&(e.Pt(),a()))}),h),Bp.To((()=>{
if(u)return n&&(0===c.O_.Bi&&(ub=h.we.$e.Zv,
h.we.$e.Zv="none"),c.O_.$(u)),c.M_.$(u),Do(),()=>{
n&&1===c.O_.Bi&&(h.we.$e.Zv=ub)}}),[u,h,n,c]),Bp.To((()=>()=>{
u&&(c.M_.at(u),c.O_.at(u),Do())}),[u,c]),Bp.To((()=>{const e=()=>f({})
return document.Pn(cb,e),()=>document.Nu(cb,e)}),[]),Gp.zo(lb.qg,{...l,y:p,$e:{
Zv:w?b?"auto":"none":void 0,...e.$e},L_:No(e.L_,k.L_),z_:No(e.z_,k.z_),
F_:No(e.F_,x.F_)})}))).re="DismissableLayer",(fb=Bp.qo(((e,t)=>{
const n=Bp.Bo(db),r=Bp.Wo(null),i=_o(t,r)
return Bp.To((()=>{const e=r.S
if(e)return n.j_.$(e),()=>{n.j_.at(e)}}),[n.j_]),Gp.zo(lb.qg,{...e,y:i})
}))).re="DismissableLayerBranch",
pb=hb,mb=fb,vb=(null==globalThis?void 0:globalThis.Qt)?Bp._c:()=>{},
(yb=Bp.qo(((e,t)=>{var n
const{fy:r,...i}=e,[o,s]=Bp._o(0)
vb((()=>s(1)),[])
const a=r||o&&(null==(n=null==globalThis?void 0:globalThis.Qt)?void 0:n.we)
return a?RT.v_(Gp.zo(lb.qg,{...i,y:t}),a):null}))).re="Portal",(gb=e=>{
const{U_:t,w:n}=e,r=(e=>{
const[t,n]=Bp._o(),r=Bp.Wo({}),i=Bp.Wo(e),o=Bp.Wo("none"),s=e?"mounted":"unmounted",[a,l]=((e,t)=>Bp.Zx(((e,n)=>t[e][n]??e),e))(s,{
B_:{V_:"unmounted",H_:"unmountSuspended"},W_:{q_:"mounted",Y_:"unmounted"},K_:{
q_:"mounted"}})
return Bp.To((()=>{const e=Ro(r.S)
o.S="mounted"===a?e:"none"}),[a]),vb((()=>{const t=r.S,n=i.S
if(n!==e){const r=o.S,s=Ro(t)
e?l("MOUNT"):"none"===s||"none"===(null==t?void 0:t.Qi)?l("UNMOUNT"):l(n&&r!==s?"ANIMATION_OUT":"UNMOUNT"),
i.S=e}}),[e,l]),vb((()=>{if(t){let e
const n=t.Te.cn??window,s=o=>{const s=Ro(r.S).ie(o.is)
if(o.Ve===t&&s&&(l("ANIMATION_END"),!i.S)){const r=t.$e.G_
t.$e.G_="forwards",e=n.Eb((()=>{"forwards"===t.$e.G_&&(t.$e.G_=r)}))}},a=e=>{
e.Ve===t&&(o.S=Ro(r.S))}
return t.Pn("animationstart",a),t.Pn("animationcancel",s),t.Pn("animationend",s),
()=>{
n.Tb(e),t.Nu("animationstart",a),t.Nu("animationcancel",s),t.Nu("animationend",s)
}}l("ANIMATION_END")}),[t,l]),{nh:["mounted","unmountSuspended"].ie(a),
y:Bp.Mo((e=>{e&&(r.S=getComputedStyle(e)),n(e)}),[])}
})(t),i="function"==typeof n?n({U_:r.nh}):Bp.fu.Ax(n),o=_o(r.y,(e=>{var t,n
let r=null==(t=Object.getOwnPropertyDescriptor(e.f,"ref"))?void 0:t.t,i=r&&"C_"in r&&r.C_
return i?e.y:(r=null==(n=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:n.t,i=r&&"C_"in r&&r.C_,
i?e.f.y:e.f.y||e.y)})(i))
return"function"==typeof n||r.nh?Bp.ph(i,{y:o}):null
}).re="Presence",(wb=Bp.qo(((e,t)=>Gp.zo(lb.J_,{...e,y:t,$e:{Wa:"absolute",X_:0,
Bs:1,Vs:1,ea:0,Q_:-1,or:"hidden",Z_:"rect(0, 0, 0, 0)",eT:"nowrap",tT:"normal",
...e.$e}})))).re="VisuallyHidden",bb=wb,xb="ToastProvider"
var[VT,HT,WT]=Mo("Toast"),[qT,YT]=Oo("Toast",[WT]),[KT,GT]=qT(xb);(kb=e=>{
const{nT:t,Ds:n="Notification",md:r=5e3,rT:i="right",iT:o=50,w:s}=e,[a,l]=Bp._o(null),[c,u]=Bp._o(0),d=Bp.Wo(0),h=Bp.Wo(0)
return n.Z(),Gp.zo(VT.Uo,{Fo:t,w:Gp.zo(KT,{Fo:t,Ds:n,md:r,rT:i,iT:o,oT:c,rw:a,
sT:l,aT:Bp.Mo((()=>u((e=>e+1))),[]),lT:Bp.Mo((()=>u((e=>e-1))),[]),cT:d,uT:h,w:s
})})
}).re=xb,Nb="ToastViewport",Sb=["F8"],_b="toast.viewportPause",Tb="toast.viewportResume",
(Eb=Bp.qo(((e,t)=>{
const{nT:n,dT:r=Sb,Ds:i="Notifications ({hotkey})",...o}=e,s=GT(Nb,n),a=HT(n),l=Bp.Wo(null),c=Bp.Wo(null),u=Bp.Wo(null),d=Bp.Wo(null),h=_o(t,d,s.sT),f=r.A("+").E(/Key/g,"").E(/Digit/g,""),p=s.oT>0
Bp.To((()=>{const e=e=>{var t
0!==r.e&&r.cc((t=>e[t]||e.sg===t))&&(null==(t=d.S)||t.Tn())}
return document.Pn("keydown",e),()=>document.Nu("keydown",e)}),[r]),Bp.To((()=>{
const e=l.S,t=d.S
if(p&&e&&t){const n=()=>{if(!s.uT.S){const e=new CustomEvent(_b)
t.yt(e),s.uT.S=1}},r=()=>{if(s.uT.S){const e=new CustomEvent(Tb)
t.yt(e),s.uT.S=0}},i=t=>{!e.qt(t.Rn)&&r()},o=()=>{e.qt(document.ge)||r()}
return e.Pn("focusin",n),e.Pn("focusout",i),e.Pn("pointermove",n),e.Pn("pointerleave",o),
window.Pn("blur",n),window.Pn("focus",r),()=>{
e.Nu("focusin",n),e.Nu("focusout",i),
e.Nu("pointermove",n),e.Nu("pointerleave",o),
window.Nu("blur",n),window.Nu("focus",r)}}}),[p,s.uT])
const m=Bp.Mo((({hT:e})=>{const t=a().Oo((t=>{const n=t.y.S,r=[n,...zo(n)]
return"forwards"===e?r:r.Od()}))
return("forwards"===e?t.Od():t).fT()}),[a])
return Bp.To((()=>{const e=d.S
if(e){const t=t=>{var n,r,i
const o=t.Vn||t.Bn||t.Hn
if("Tab"===t.g&&!o){const o=document.ge,s=t.LN
if(t.Ve===e&&s)return void(null==(n=c.S)||n.Tn())
const a=m({hT:s?"backwards":"forwards"}),l=a.tu((e=>e===o))
Uo(a.q(l+1))?t.Pt():s?null==(r=c.S)||r.Tn():null==(i=u.S)||i.Tn()}}
return e.Pn("keydown",t),()=>e.Nu("keydown",t)}}),[a,m]),Gp.Os(mb,{y:l,
pT:"region",Wg:i.E("{hotkey}",f),vs:-1,$e:{Zv:p?void 0:"none"},w:[p&&Gp.zo(Mb,{
y:c,mT(){Uo(m({hT:"forwards"}))}}),Gp.zo(VT.Yo,{Fo:n,w:Gp.zo(lb.vT,{vs:-1,...o,
y:h})}),p&&Gp.zo(Mb,{y:u,mT(){Uo(m({hT:"backwards"}))}})]})
}))).re=Nb,Cb="ToastFocusProxy",(Mb=Bp.qo(((e,t)=>{
const{nT:n,mT:r,...i}=e,o=GT(Cb,n)
return Gp.zo(wb,{yT:1,vs:0,...i,y:t,$e:{Wa:"fixed"},gT(e){var t
const n=e.Rn
!(null==(t=o.rw)?void 0:t.qt(n))&&r()}})
}))).re=Cb,Ob="Toast",(jb=Bp.qo(((e,t)=>{
const{wT:n,xo:r,bT:i,ko:o,...s}=e,[a=1,l]=$o({os:r,ss:i,as:o})
return Gp.zo(gb,{U_:n||a,w:Gp.zo(Pb,{xo:a,...s,y:t,Mb(){return l(0)},
Nl:Ao(e.Nl),xT:Ao(e.xT),kT:No(e.kT,(e=>{e.Et.J("data-swipe","start")})),
NT:No(e.NT,(e=>{const{zs:t,Us:n}=e.$t.yu
e.Et.J("data-swipe","move"),e.Et.$e.Le("--radix-toast-swipe-move-x",t+"px"),e.Et.$e.Le("--radix-toast-swipe-move-y",n+"px")
})),ST:No(e.ST,(e=>{
e.Et.J("data-swipe","cancel"),e.Et.$e._T("--radix-toast-swipe-move-x"),
e.Et.$e._T("--radix-toast-swipe-move-y"),
e.Et.$e._T("--radix-toast-swipe-end-x"),e.Et.$e._T("--radix-toast-swipe-end-y")
})),TT:No(e.TT,(e=>{const{zs:t,Us:n}=e.$t.yu
e.Et.J("data-swipe","end"),e.Et.$e._T("--radix-toast-swipe-move-x"),e.Et.$e._T("--radix-toast-swipe-move-y"),
e.Et.$e.Le("--radix-toast-swipe-end-x",t+"px"),
e.Et.$e.Le("--radix-toast-swipe-end-y",n+"px"),l(0)}))})})}))).re=Ob
var[JT,XT]=qT(Ob,{Mb(){}})
Pb=Bp.qo(((e,t)=>{
const{nT:n,k:r="foreground",md:i,xo:o,Mb:s,A_:a,Nl:l,xT:c,kT:u,NT:d,ST:h,TT:f,...p}=e,m=GT(Ob,n),[v,y]=Bp._o(null),g=_o(t,(e=>y(e))),w=Bp.Wo(null),b=Bp.Wo(null),x=i||m.md,k=Bp.Wo(0),N=Bp.Wo(x),S=Bp.Wo(0),{aT:_,lT:T}=m,E=Ao((()=>{
var e;(null==v?void 0:v.qt(document.ge))&&(null==(e=m.rw)||e.Tn()),s()
})),C=Bp.Mo((e=>{
e&&e!==1/0&&(window.Tb(S.S),k.S=(new Date).og(),S.S=window.Eb(E,e))}),[E])
Bp.To((()=>{const e=m.rw
if(e){const t=()=>{C(N.S),null==c||c()},n=()=>{const e=(new Date).og()-k.S
N.S=N.S-e,window.Tb(S.S),null==l||l()}
return e.Pn(_b,n),e.Pn(Tb,t),()=>{e.Nu(_b,n),e.Nu(Tb,t)}}
}),[m.rw,x,l,c,C]),Bp.To((()=>{o&&!m.uT.S&&C(x)}),[o,x,m.uT,C]),Bp.To((()=>(_(),
()=>T())),[_,T])
const M=Bp.Do((()=>v?Fo(v):null),[v])
return m.rw?Gp.Os(Gp.Bc,{w:[M&&Gp.zo(Ab,{nT:n,pT:"status",
ET:"foreground"===r?"assertive":"polite",CT:1,w:M}),Gp.zo(JT,{Fo:n,Mb:E,
w:nb.v_(Gp.zo(VT.Ko,{Fo:n,w:Gp.zo(pb,{ew:1,A_:No(a,(()=>{m.cT.S||E(),m.cT.S=0
})),w:Gp.zo(lb.MT,{pT:"status",ET:"off",CT:1,vs:0,OT:o?"open":"closed",jT:m.rT,
...p,y:g,$e:{Mh:"none",Ph:"none",...e.$e},PT:No(e.PT,(e=>{
"Escape"===e.g&&(null==a||a(e.ct),e.ct.Mt||(m.cT.S=1,E()))})),AT:No(e.AT,(e=>{
0===e.In&&(w.S={zs:e.$N,Us:e.FN})})),DT:No(e.DT,(e=>{if(!w.S)return
const t=e.$N-w.S.zs,n=e.FN-w.S.Us,r=!!b.S,i=["left","right"].ie(m.rT),o=["left","up"].ie(m.rT)?Math.an:Math.qu,s=i?o(0,t):0,a=i?0:o(0,n),l="touch"===e.Qd?10:2,c={
zs:s,Us:a},h={es:e,yu:c}
r?(b.S=c,Lo("toast.swipeMove",d,h,{Zo:0
})):zb(c,m.rT,l)?(b.S=c,Lo("toast.swipeStart",u,h,{Zo:0
}),e.Ve.IT(e.lt)):(Math.abs(t)>l||Math.abs(n)>l)&&(w.S=null)})),RT:No(e.RT,(e=>{
const t=b.S,n=e.Ve
if(n.$T(e.lt)&&n.FT(e.lt),b.S=null,w.S=null,t){const n=e.Et,r={es:e,yu:t}
zb(t,m.rT,m.iT)?Lo("toast.swipeEnd",f,r,{Zo:1}):Lo("toast.swipeCancel",h,r,{Zo:1
}),n.Pn("click",(e=>e.Pt()),{rs:1})}}))})})}),m.rw)})]}):null})),Ab=e=>{
const{nT:t,w:n,...r}=e,i=GT(Ob,t),[o,s]=Bp._o(0),[a,l]=Bp._o(0)
return((e=()=>{})=>{const t=Ao(e)
vb((()=>{let e=0,n=0
return e=window.requestAnimationFrame((()=>n=window.requestAnimationFrame(t))),()=>{
window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}}),[t])
})((()=>s(1))),Bp.To((()=>{const e=window.Eb((()=>l(1)),1e3)
return()=>window.Tb(e)}),[]),a?null:Gp.zo(yb,{ew:1,w:Gp.zo(wb,{...r,
w:o&&Gp.Os(Gp.Bc,{w:[i.Ds," ",n]})})})},(Db=Bp.qo(((e,t)=>{const{nT:n,...r}=e
return Gp.zo(lb.qg,{...r,y:t})}))).re="ToastTitle",(Ib=Bp.qo(((e,t)=>{
const{nT:n,...r}=e
return Gp.zo(lb.qg,{...r,y:t})}))).re="ToastDescription",(Rb=Bp.qo(((e,t)=>{
const{LT:n,...r}=e
return n.Z()?Gp.zo(Lb,{LT:n,ew:1,w:Gp.zo(Fb,{...r,y:t})}):null
}))).re="ToastAction",$b="ToastClose",(Fb=Bp.qo(((e,t)=>{
const{nT:n,...r}=e,i=XT($b,n)
return Gp.zo(Lb,{ew:1,w:Gp.zo(lb.In,{k:"button",...r,y:t,Fi:No(e.Fi,i.Mb)})})
}))).re=$b,Lb=Bp.qo(((e,t)=>{const{nT:n,LT:r,...i}=e
return Gp.zo(lb.qg,{zT:"",UT:r||void 0,...i,y:t})})),zb=(e,t,n=0)=>{
const r=Math.abs(e.zs),i=Math.abs(e.Us),o=r>i
return"left"===t||"right"===t?o&&r>n:!o&&i>n
},Ub=kb,Bb=Eb,Vb=jb,Hb=Db,Wb=Ib,qb=Rb,Yb=Fb
const QT=e=>"boolean"==typeof e?""+e:0===e?"0":e,ZT=Vo,eE=(e,t)=>n=>{var r
if(null==(null==t?void 0:t.yh))return ZT(e,null==n?void 0:n.BT,null==n?void 0:n.As)
const{yh:i,VT:o}=t,s=Object.h(i).Oo((e=>{
const t=null==n?void 0:n[e],r=null==o?void 0:o[e]
if(null===t)return null
const s=QT(t)||QT(r)
return i[e][s]})),a=n&&Object.Ou(n).Ao(((e,t)=>{let[n,r]=t
return void 0===r||(e[n]=r),e
}),{}),l=null==t||null===(r=t.HT)||void 0===r?void 0:r.Ao(((e,t)=>{
let{BT:n,As:r,...i}=t
return Object.Ou(i).cc((e=>{let[t,n]=e
return Array.isArray(n)?n.ie({...o,...a}[t]):{...o,...a}[t]===n}))?[...e,n,r]:e
}),[])
return ZT(e,s,l,null==n?void 0:n.BT,null==n?void 0:n.As)
},tE=(...e)=>e.Ro(((e,t,n)=>!!e&&""!==e.Z()&&n.Fe(e)===t)).A(" ").Z()
Kb={WT:"http://www.w3.org/2000/svg",Bs:24,Vs:24,Bh:"0 0 24 24",Hd:"none",
qT:"currentColor",mN:2,YT:"round",KT:"round"}
const nE=Bp.qo((({Ku:e="currentColor",Bi:t=24,mN:n=2,GT:r,As:i="",w:o,JT:s,...a},l)=>Bp.Ui("svg",{
y:l,...Kb,Bs:t,Vs:t,qT:e,mN:r?24*+n/+t:n,As:tE("lucide",i),...a
},[...s.Oo((([e,t])=>Bp.Ui(e,t))),...Array.isArray(o)?o:[o]]))),rE=(e,t)=>{
const n=Bp.qo((({As:n,...r},i)=>{return Bp.Ui(nE,{y:i,JT:t,As:tE("lucide-"+(o=e,
o.E(/([a-z0-9])([A-Z])/g,"$1-$2").Y()),n),...r})
var o}))
return n.re=""+e,n},iE=rE("ArrowLeft",[["path",{XT:"m12 19-7-7 7-7",g:"1l729n"
}],["path",{XT:"M19 12H5",g:"x3x0zl"}]]),oE=rE("ArrowRight",[["path",{
XT:"M5 12h14",g:"1ays0h"}],["path",{XT:"m12 5 7 7-7 7",g:"xquz4c"
}]]),sE=rE("BookOpen",[["path",{XT:"M12 7v14",g:"1akyts"}],["path",{
XT:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
g:"ruj8y"}]]),aE=rE("Calendar",[["path",{XT:"M8 2v4",g:"1cmpym"}],["path",{
XT:"M16 2v4",g:"4m81vk"}],["rect",{Bs:"18",Vs:"18",zs:"3",Us:"4",QT:"2",
g:"1hopcy"}],["path",{XT:"M3 10h18",g:"8toen8"}]]),lE=rE("Check",[["path",{
XT:"M20 6 9 17l-5-5",g:"1gmf2c"}]]),cE=rE("ChevronDown",[["path",{
XT:"m6 9 6 6 6-6",g:"qrunsl"}]]),uE=rE("ChevronRight",[["path",{
XT:"m9 18 6-6-6-6",g:"mthhwq"}]]),dE=rE("ChevronUp",[["path",{
XT:"m18 15-6-6-6 6",g:"153udz"}]]),hE=rE("CircleAlert",[["circle",{ZT:"12",
eE:"12",tE:"10",g:"1mglay"}],["line",{nE:"12",rE:"12",iE:"8",oE:"12",g:"1pkeuh"
}],["line",{nE:"12",rE:"12.01",iE:"16",oE:"16",g:"4dfq90"
}]]),fE=rE("CircleCheckBig",[["path",{XT:"M21.801 10A10 10 0 1 1 17 3.335",
g:"yps3ct"}],["path",{XT:"m9 11 3 3L22 4",g:"1pflzl"
}]]),pE=rE("Clock",[["circle",{ZT:"12",eE:"12",tE:"10",g:"1mglay"
}],["polyline",{sE:"12 6 12 12 16 14",g:"68esgv"}]]),mE=rE("EyeOff",[["path",{
XT:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
g:"ct8e1f"}],["path",{XT:"M14.084 14.158a3 3 0 0 1-4.242-4.242",g:"151rxh"
}],["path",{
XT:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
g:"13bj9a"}],["path",{XT:"m2 2 20 20",g:"1ooewy"}]]),vE=rE("Eye",[["path",{
XT:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
g:"1nclc0"}],["circle",{ZT:"12",eE:"12",tE:"3",g:"1v7zrd"
}]]),yE=rE("Facebook",[["path",{
XT:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
g:"1jg4f8"}]]),gE=rE("FileText",[["path",{
XT:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",g:"1rqfz7"
}],["path",{XT:"M14 2v4a2 2 0 0 0 2 2h4",g:"tnqrlb"}],["path",{XT:"M10 9H8",
g:"b1mrlr"}],["path",{XT:"M16 13H8",g:"t4e002"}],["path",{XT:"M16 17H8",
g:"z1uh3a"}]]),wE=rE("Filter",[["polygon",{
sE:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",g:"1yg77f"
}]]),bE=rE("Heart",[["path",{
XT:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
g:"c3ymky"}]]),xE=rE("House",[["path",{
XT:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",g:"5wwlr5"}],["path",{
XT:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
g:"1d0kgt"}]]),kE=rE("Instagram",[["rect",{Bs:"20",Vs:"20",zs:"2",Us:"2",QT:"5",
aE:"5",g:"2e1cvw"}],["path",{
XT:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",g:"9exkf1"}],["line",{
nE:"17.5",rE:"17.51",iE:"6.5",oE:"6.5",g:"r4j83e"
}]]),NE=rE("Linkedin",[["path",{
XT:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
g:"c2jq9f"}],["rect",{Bs:"4",Vs:"12",zs:"2",Us:"9",g:"mk3on5"}],["circle",{
ZT:"4",eE:"4",tE:"2",g:"bt5ra8"}]]),SE=rE("LoaderCircle",[["path",{
XT:"M21 12a9 9 0 1 1-6.219-8.56",g:"13zald"}]]),_E=rE("LogOut",[["path",{
XT:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",g:"1uf3rs"}],["polyline",{
sE:"16 17 21 12 16 7",g:"1gabdz"}],["line",{nE:"21",rE:"9",iE:"12",oE:"12",
g:"1uyos4"}]]),TE=rE("Mail",[["rect",{Bs:"20",Vs:"16",zs:"2",Us:"4",QT:"2",
g:"18n3k1"}],["path",{XT:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",g:"1ocrg3"
}]]),EE=rE("MapPin",[["path",{
XT:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
g:"1r0f0z"}],["circle",{ZT:"12",eE:"10",tE:"3",g:"ilqhr7"
}]]),CE=rE("Menu",[["line",{nE:"4",rE:"20",iE:"12",oE:"12",g:"1e0a9i"
}],["line",{nE:"4",rE:"20",iE:"6",oE:"6",g:"1owob3"}],["line",{nE:"4",rE:"20",
iE:"18",oE:"18",g:"yk5zj1"}]]),ME=rE("Moon",[["path",{
XT:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",g:"a7tn18"
}]]),OE=rE("Newspaper",[["path",{
XT:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
g:"7pis2x"}],["path",{XT:"M18 14h-8",g:"sponae"}],["path",{XT:"M15 18h-5",
g:"95g1m2"}],["path",{XT:"M10 6h8v4h-8V6Z",g:"smlsk5"
}]]),jE=rE("Phone",[["path",{
XT:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
g:"foiqr5"}]]),PE=rE("Plus",[["path",{XT:"M5 12h14",g:"1ays0h"}],["path",{
XT:"M12 5v14",g:"s699le"}]]),AE=rE("RefreshCw",[["path",{
XT:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",g:"v9h5vc"}],["path",{
XT:"M21 3v5h-5",g:"1q7to0"}],["path",{
XT:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",g:"3uifl3"}],["path",{
XT:"M8 16H3v5",g:"1cv678"}]]),DE=rE("Save",[["path",{
XT:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
g:"1c8476"}],["path",{XT:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",g:"1ydtos"
}],["path",{XT:"M7 3v4a1 1 0 0 0 1 1h7",g:"t51u73"
}]]),IE=rE("Search",[["circle",{ZT:"11",eE:"11",tE:"8",g:"4ej97u"}],["path",{
XT:"m21 21-4.3-4.3",g:"1qie3q"}]]),RE=rE("Settings",[["path",{
XT:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
g:"1qme2f"}],["circle",{ZT:"12",eE:"12",tE:"3",g:"1v7zrd"
}]]),$E=rE("Share2",[["circle",{ZT:"18",eE:"5",tE:"3",g:"gq8acd"}],["circle",{
ZT:"6",eE:"12",tE:"3",g:"w7nqdw"}],["circle",{ZT:"18",eE:"19",tE:"3",g:"1xt0gg"
}],["line",{nE:"8.59",rE:"15.42",iE:"13.51",oE:"17.49",g:"47mynk"}],["line",{
nE:"15.41",rE:"8.59",iE:"6.51",oE:"10.49",g:"1n3mei"
}]]),FE=rE("Sparkles",[["path",{
XT:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
g:"4pj2yx"}],["path",{XT:"M20 3v4",g:"1olli1"}],["path",{XT:"M22 5h-4",
g:"1gvqau"}],["path",{XT:"M4 17v2",g:"vumght"}],["path",{XT:"M5 18H3",g:"zchphs"
}]]),LE=rE("SquarePen",[["path",{
XT:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",g:"1m0v6g"
}],["path",{
XT:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
g:"ohrbg2"}]]),zE=rE("Sun",[["circle",{ZT:"12",eE:"12",tE:"4",g:"4exip2"
}],["path",{XT:"M12 2v2",g:"tus03m"}],["path",{XT:"M12 20v2",g:"1lh1kg"
}],["path",{XT:"m4.93 4.93 1.41 1.41",g:"149t6j"}],["path",{
XT:"m17.66 17.66 1.41 1.41",g:"ptbguv"}],["path",{XT:"M2 12h2",g:"1t8f8n"
}],["path",{XT:"M20 12h2",g:"1q8mjw"}],["path",{XT:"m6.34 17.66-1.41 1.41",
g:"1m8zz5"}],["path",{XT:"m19.07 4.93-1.41 1.41",g:"1shlcs"
}]]),UE=rE("Tag",[["path",{
XT:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
g:"vktsd0"}],["circle",{ZT:"7.5",eE:"7.5",tE:".5",Hd:"currentColor",g:"kqv944"
}]]),BE=rE("Trash2",[["path",{XT:"M3 6h18",g:"d0wm0j"}],["path",{
XT:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",g:"4alrt4"}],["path",{
XT:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",g:"v07s0e"}],["line",{nE:"10",rE:"10",
iE:"11",oE:"17",g:"1uufr5"}],["line",{nE:"14",rE:"14",iE:"11",oE:"17",g:"xtxkd"
}]]),VE=rE("TrendingUp",[["polyline",{sE:"22 7 13.5 15.5 8.5 10.5 2 17",
g:"126l90"}],["polyline",{sE:"16 7 22 7 22 13",g:"kwv8wd"
}]]),HE=rE("TriangleAlert",[["path",{
XT:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
g:"wmoenq"}],["path",{XT:"M12 9v4",g:"juzpu7"}],["path",{XT:"M12 17h.01",
g:"p32p05"}]]),WE=rE("Trophy",[["path",{XT:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
g:"17hqa7"}],["path",{XT:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",g:"lmptdp"}],["path",{
XT:"M4 22h16",g:"57wxv0"}],["path",{
XT:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",g:"1nw9bq"
}],["path",{XT:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
g:"1np0yb"}],["path",{XT:"M18 2H6v7a6 6 0 0 0 12 0V2Z",g:"u46fv3"
}]]),qE=rE("Twitter",[["path",{
XT:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
g:"pff0z6"}]]),YE=rE("User",[["path",{
XT:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",g:"975kel"}],["circle",{ZT:"12",
eE:"7",tE:"4",g:"17ys0d"}]]),KE=rE("Users",[["path",{
XT:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",g:"1yyitq"}],["circle",{ZT:"9",
eE:"7",tE:"4",g:"nufk8"}],["path",{XT:"M22 21v-2a4 4 0 0 0-3-3.87",g:"kshegd"
}],["path",{XT:"M16 3.13a4 4 0 0 1 0 7.75",g:"1da9ce"}]]),GE=rE("X",[["path",{
XT:"M18 6 6 18",g:"1bl5f8"}],["path",{XT:"m6 6 12 12",g:"d8bk6v"
}]]),JE=rE("Youtube",[["path",{
XT:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
g:"1q2vi4"}],["path",{XT:"m10 15 5-3-5-3z",g:"1jp15x"}]]),XE=rE("Zap",[["path",{
XT:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
g:"1xq2db"}]]),QE=e=>{const t=nC(e),{lE:n,cE:r}=e
return{xs(e){const n=e.ne("-")
return""===n[0]&&1!==n.e&&n.gt(),ZE(n,t)||tC(e)},ks(e,t){const i=n[e]||[]
return t&&r[e]?[...i,...r[e]]:i}}},ZE=(e,t)=>{var n
if(0===e.e)return t.uE
const r=e[0],i=t.dE.t(r),o=i?ZE(e.q(1),i):void 0
if(o)return o
if(0===t.hE.e)return
const s=e.A("-")
return null==(n=t.hE.Zu((({fE:e})=>e(s))))?void 0:n.uE},eC=/^\[(.+)\]$/,tC=e=>{
if(eC.K(e)){const t=eC.Gd(e)[1],n=null==t?void 0:t.Es(0,t.Fe(":"))
if(n)return"arbitrary.."+n}},nC=e=>{const{Ay:t,pE:n}=e,r={dE:new Map,hE:[]}
return sC(Object.Ou(e.mE),n).d((([e,n])=>{rC(n,r,e,t)})),r},rC=(e,t,n,r)=>{
e.d((e=>{
if("string"!=typeof e)return"function"==typeof e?oC(e)?void rC(e(r),t,n,r):void t.hE.M({
fE:e,uE:n}):void Object.Ou(e).d((([e,i])=>{rC(i,iC(t,e),n,r)}))
;(""===e?t:iC(t,e)).uE=n}))},iC=(e,t)=>{let n=e
return t.ne("-").d((e=>{n.dE.On(e)||n.dE.te(e,{dE:new Map,hE:[]}),n=n.dE.t(e)
})),n
},oC=e=>e.vE,sC=(e,t)=>t?e.Oo((([e,n])=>[e,n.Oo((e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.Ou(e).Oo((([e,n])=>[t+e,n]))):e))])):e,aC=e=>{
if(1>e)return{t(){},te(){}}
let t=0,n=new Map,r=new Map
const i=(i,o)=>{n.te(i,o),t++,t>e&&(t=0,r=n,n=new Map)}
return{t(e){let t=n.t(e)
return void 0!==t?t:void 0!==(t=r.t(e))?(i(e,t),t):void 0},te(e,t){
n.On(e)?n.te(e,t):i(e,t)}}},lC=e=>{
const{yE:t,gE:n}=e,r=1===t.e,i=t[0],o=t.e,s=e=>{const n=[]
let s,a=0,l=0
for(let d=0;d<e.e;d++){let c=e[d]
if(0===a){if(c===i&&(r||e.q(d,d+o)===t)){n.M(e.q(l,d)),l=d+o
continue}if("/"===c){s=d
continue}}"["===c?a++:"]"===c&&a--}const c=0===n.e?e:e.Es(l),u=c.vc("!")
return{Ns:n,Ss:u,_s:u?c.Es(1):c,Ts:s&&s>l?s-l:void 0}}
return n?e=>n({As:e,bs:s}):s},cC=e=>{if(1>=e.e)return e
const t=[]
let n=[]
return e.d((e=>{"["===e[0]?(t.M(...n.Xo(),e),n=[]):n.M(e)})),t.M(...n.Xo()),t
},uC=/\s+/,dC=e=>{if("string"==typeof e)return e
let t,n=""
for(let r=0;r<e.e;r++)e[r]&&(t=dC(e[r]))&&(n&&(n+=" "),n+=t)
return n},hC=e=>{const t=t=>t[e]||[]
return t.vE=1,t
},fC=/^\[(?:([a-z-]+):)?(.+)\]$/i,pC=/^\d+\/\d+$/,mC=new Set(["px","full","screen"]),vC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,gC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,wC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,bC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,xC=e=>NC(e)||mC.On(e)||pC.K(e),kC=e=>RC(e,"length",$C),NC=e=>!!e&&!Number.isNaN(+e),SC=e=>RC(e,"number",NC),_C=e=>!!e&&Number.isInteger(+e),TC=e=>e.yc("%")&&NC(e.q(0,-1)),EC=e=>fC.K(e),CC=e=>vC.K(e),MC=new Set(["length","size","percentage"]),OC=e=>RC(e,MC,FC),jC=e=>RC(e,"position",FC),PC=new Set(["image","url"]),AC=e=>RC(e,PC,zC),DC=e=>RC(e,"",LC),IC=()=>1,RC=(e,t,n)=>{
const r=fC.Gd(e)
return r?r[1]?"string"==typeof t?r[1]===t:t.On(r[1]):n(r[2]):0
},$C=e=>yC.K(e)&&!gC.K(e),FC=()=>0,LC=e=>wC.K(e),zC=e=>bC.K(e),UC=Wo((()=>{
const e=hC("colors"),t=hC("spacing"),n=hC("blur"),r=hC("brightness"),i=hC("borderColor"),o=hC("borderRadius"),s=hC("borderSpacing"),a=hC("borderWidth"),l=hC("contrast"),c=hC("grayscale"),u=hC("hueRotate"),d=hC("invert"),h=hC("gap"),f=hC("gradientColorStops"),p=hC("gradientColorStopPositions"),m=hC("inset"),v=hC("margin"),y=hC("opacity"),g=hC("padding"),w=hC("saturate"),b=hC("scale"),x=hC("sepia"),k=hC("skew"),N=hC("space"),S=hC("translate"),_=()=>["auto",EC,t],T=()=>[EC,t],E=()=>["",xC,kC],C=()=>["auto",NC,EC],M=()=>["","0",EC],O=()=>[NC,EC]
return{Cs:500,yE:":",Ay:{wE:[IC],bE:[xC,kC],xE:["none","",CC,EC],kE:O(),NE:[e],
Mp:["none","","full",CC,EC],SE:T(),_E:E(),TE:O(),EE:M(),CE:O(),ME:M(),OE:T(),
jE:[e],PE:[TC,kC],AE:_(),Q_:_(),jv:O(),ea:T(),DE:O(),Wh:O(),IE:M(),RE:O(),
$E:T(),zf:T()},mE:{FE:[{FE:["auto","square","video",EC]}],fy:["container"],Fk:[{
Fk:[CC]}],LE:[{
LE:["auto","avoid","all","avoid-page","page","left","right","column"]}],zE:[{
zE:["auto","avoid","all","avoid-page","page","left","right","column"]}],UE:[{
UE:["auto","avoid","avoid-page","avoid-column"]}],BE:[{BE:["slice","clone"]}],
Xa:[{Xa:["border","content"]}],
Qi:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],
VE:[{VE:["right","left","none","start","end"]}],$u:[{
$u:["left","right","both","none","start","end"]}],
HE:["isolate","isolation-auto"],WE:[{
qE:["contain","cover","fill","none","scale-down"]}],YE:[{
qE:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",EC]
}],or:[{or:["auto","hidden","clip","visible","scroll"]}],KE:[{
KE:["auto","hidden","clip","visible","scroll"]}],GE:[{
GE:["auto","hidden","clip","visible","scroll"]}],JE:[{
JE:["auto","contain","none"]}],XE:[{XE:["auto","contain","none"]}],QE:[{
QE:["auto","contain","none"]}],
Wa:["static","fixed","absolute","relative","sticky"],AE:[{AE:[m]}],ZE:[{ZE:[m]
}],eC:[{eC:[m]}],rn:[{rn:[m]}],in:[{in:[m]}],Sn:[{Sn:[m]}],Fs:[{Fs:[m]}],Ls:[{
Ls:[m]}],kn:[{kn:[m]}],Qv:["visible","invisible","collapse"],Df:[{
Df:["auto",_C,EC]}],tC:[{tC:_()}],nC:[{
Lk:["row","row-reverse","col","col-reverse"]}],rC:[{
Lk:["wrap","wrap-reverse","nowrap"]}],Lk:[{Lk:["1","auto","initial","none",EC]
}],iC:[{iC:M()}],oC:[{oC:M()}],yw:[{yw:["first","last","none",_C,EC]}],sC:[{
sC:[IC]}],aC:[{bN:["auto",{J_:["full",_C,EC]},EC]}],lC:[{lC:C()}],cC:[{cC:C()}],
uC:[{uC:[IC]}],dC:[{hC:["auto",{J_:[_C,EC]},EC]}],fC:[{fC:C()}],pC:[{pC:C()}],
mC:[{mC:["row","col","dense","row-dense","col-dense"]}],vC:[{
vC:["auto","min","max","fr",EC]}],yC:[{yC:["auto","min","max","fr",EC]}],OE:[{
OE:[h]}],gC:[{gC:[h]}],wC:[{wC:[h]}],bC:[{
xC:["normal","start","end","center","between","around","evenly","stretch"]}],
kC:[{kC:["start","end","center","stretch"]}],NC:[{
NC:["auto","start","end","center","stretch"]}],SC:[{
qw:["normal","start","end","center","between","around","evenly","stretch","baseline"]
}],_C:[{TC:["start","end","center","baseline","stretch"]}],EC:[{
CC:["auto","start","end","center","stretch","baseline"]}],MC:[{
MC:["start","end","center","between","around","evenly","stretch","baseline"]}],
OC:[{OC:["start","end","center","baseline","stretch"]}],jC:[{
jC:["auto","start","end","center","stretch"]}],Zg:[{Zg:[g]}],PC:[{PC:[g]}],AC:[{
AC:[g]}],DC:[{DC:[g]}],IC:[{IC:[g]}],RC:[{RC:[g]}],$C:[{$C:[g]}],FC:[{FC:[g]}],
LC:[{LC:[g]}],zC:[{zC:[v]}],UC:[{UC:[v]}],BC:[{BC:[v]}],VC:[{VC:[v]}],HC:[{
HC:[v]}],WC:[{WC:[v]}],qC:[{qC:[v]}],YC:[{YC:[v]}],KC:[{KC:[v]}],GC:[{GC:[N]}],
JC:["space-x-reverse"],XC:[{XC:[N]}],QC:["space-y-reverse"],ZC:[{
ZC:["auto","min","max","fit","svw","lvw","dvw",EC,t]}],eM:[{
eM:[EC,t,"min","max","fit"]}],tM:[{
tM:[EC,t,"none","full","min","max","fit","prose",{nM:[CC]},CC]}],rM:[{
rM:[EC,t,"auto","min","max","fit","svh","lvh","dvh"]}],iM:[{
iM:[EC,t,"min","max","fit","svh","lvh","dvh"]}],oM:[{
oM:[EC,t,"min","max","fit","svh","lvh","dvh"]}],Bi:[{
Bi:[EC,t,"auto","min","max","fit"]}],sM:[{OS:["base",CC,kC]}],
aM:["antialiased","subpixel-antialiased"],lM:["italic","not-italic"],cM:[{
uM:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",SC]
}],dM:[{uM:[IC]}],hM:["normal-nums"],fM:["ordinal"],pM:["slashed-zero"],
mM:["lining-nums","oldstyle-nums"],vM:["proportional-nums","tabular-nums"],
yM:["diagonal-fractions","stacked-fractons"],gM:[{
gM:["tighter","tight","normal","wide","wider","widest",EC]}],wM:[{
wM:["none",NC,SC]}],bM:[{
bM:["none","tight","snug","normal","relaxed","loose",xC,EC]}],xM:[{
xM:["none",EC]}],kM:[{NM:["none","disc","decimal",EC]}],SM:[{
NM:["inside","outside"]}],_M:[{Kg:[e]}],TM:[{TM:[y]}],EM:[{
OS:["left","center","right","justify","start","end"]}],CM:[{OS:[e]}],MM:[{MM:[y]
}],OM:["underline","overline","line-through","no-underline"],jM:[{
PM:["solid","dashed","dotted","double","none","wavy"]}],AM:[{
PM:["auto","from-font",xC,kC]}],DM:[{DM:["auto",xC,EC]}],IM:[{PM:[e]}],
RM:["uppercase","lowercase","capitalize","normal-case"],
$M:["truncate","text-ellipsis","text-clip"],FM:[{
OS:["wrap","nowrap","balance","pretty"]}],LM:[{LM:T()}],zM:[{
UM:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",EC]
}],BM:[{BM:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],
VM:[{VM:["normal","words","all","keep"]}],HM:[{HM:["none","manual","auto"]}],
qw:[{qw:["none",EC]}],WM:[{qM:["fixed","local","scroll"]}],YM:[{
YM:["border","padding","content","text"]}],KM:[{KM:[y]}],GM:[{
GM:["border","padding","content"]}],JM:[{
qM:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",jC]
}],XM:[{qM:["no-repeat",{Ad:["","x","y","round","space"]}]}],QM:[{
qM:["auto","cover","contain",OC]}],ZM:[{qM:["none",{
eO:["t","tr","r","br","b","bl","l","tl"]},AC]}],tO:[{qM:[e]}],nO:[{Go:[p]}],
rO:[{iO:[p]}],oO:[{Jc:[p]}],sO:[{Go:[f]}],aO:[{iO:[f]}],eO:[{Jc:[f]}],lO:[{
lO:[o]}],cO:[{cO:[o]}],uO:[{uO:[o]}],dO:[{dO:[o]}],hO:[{hO:[o]}],fO:[{fO:[o]}],
pO:[{pO:[o]}],mO:[{mO:[o]}],vO:[{vO:[o]}],yO:[{yO:[o]}],gO:[{gO:[o]}],wO:[{
wO:[o]}],bO:[{bO:[o]}],xO:[{xO:[o]}],kO:[{kO:[o]}],NO:[{X_:[a]}],SO:[{_O:[a]}],
TO:[{EO:[a]}],CO:[{MO:[a]}],OO:[{jO:[a]}],PO:[{AO:[a]}],DO:[{IO:[a]}],RO:[{
$O:[a]}],FO:[{LO:[a]}],zO:[{zO:[y]}],UO:[{
X_:["solid","dashed","dotted","double","none","hidden"]}],BO:[{BO:[a]}],
VO:["divide-x-reverse"],HO:[{HO:[a]}],WO:["divide-y-reverse"],qO:[{qO:[y]}],
YO:[{KO:["solid","dashed","dotted","double","none"]}],GO:[{X_:[i]}],JO:[{_O:[i]
}],XO:[{EO:[i]}],QO:[{MO:[i]}],ZO:[{jO:[i]}],ej:[{AO:[i]}],tj:[{IO:[i]}],nj:[{
$O:[i]}],rj:[{LO:[i]}],ij:[{KO:[i]}],oj:[{
kb:["","solid","dashed","dotted","double","none"]}],sj:[{sj:[xC,EC]}],aj:[{
kb:[xC,kC]}],lj:[{kb:[e]}],cj:[{uj:E()}],dj:["ring-inset"],hj:[{uj:[e]}],fj:[{
fj:[y]}],pj:[{mj:[xC,kC]}],vj:[{mj:[e]}],yj:[{yj:["","inner","none",CC,DC]}],
gj:[{yj:[IC]}],jv:[{jv:[y]}],wj:[{
wj:["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]
}],bj:[{
bj:["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]
}],Ro:[{Ro:["","none"]}],xE:[{xE:[n]}],kE:[{kE:[r]}],TE:[{TE:[l]}],xj:[{
xj:["","none",CC,EC]}],EE:[{EE:[c]}],kj:[{kj:[u]}],ME:[{ME:[d]}],DE:[{DE:[w]}],
IE:[{IE:[x]}],Nj:[{Nj:["","none"]}],Sj:[{Sj:[n]}],_j:[{_j:[r]}],Tj:[{Tj:[l]}],
Ej:[{Ej:[c]}],Cj:[{Cj:[u]}],Mj:[{Mj:[d]}],Oj:[{Oj:[y]}],jj:[{jj:[w]}],Pj:[{
Pj:[x]}],Aj:[{X_:["collapse","separate"]}],Dj:[{Dj:[s]}],Ij:[{Ij:[s]}],Rj:[{
Rj:[s]}],$j:[{Sw:["auto","fixed"]}],Fj:[{Fj:["top","bottom"]}],xt:[{
xt:["none","all","","colors","opacity","shadow","transform",EC]}],md:[{md:O()}],
Cd:[{Cd:["linear","in","out","in-out",EC]}],Bd:[{Bd:O()}],Yd:[{
Yd:["none","spin","ping","pulse","bounce",EC]}],ya:[{ya:["","gpu","none"]}],
Wh:[{Wh:[b]}],Lj:[{Lj:[b]}],zj:[{zj:[b]}],If:[{If:[_C,EC]}],Uj:[{Uj:[S]}],Bj:[{
Bj:[S]}],Vj:[{Vj:[k]}],Hj:[{Hj:[k]}],Wj:[{
gu:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",EC]
}],qj:[{qj:["auto",e]}],Yj:[{Yj:["none","auto"]}],Kj:[{
Kj:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",EC]
}],Gj:[{Jj:[e]}],Xj:[{Xj:["none","auto"]}],Qj:[{Qj:["none","y","x",""]}],Zj:[{
Zm:["auto","smooth"]}],eP:[{eP:T()}],tP:[{tP:T()}],nP:[{nP:T()}],rP:[{rP:T()}],
iP:[{iP:T()}],oP:[{oP:T()}],sP:[{sP:T()}],aP:[{aP:T()}],lP:[{lP:T()}],cP:[{
cP:T()}],uP:[{uP:T()}],dP:[{dP:T()}],hP:[{hP:T()}],fP:[{fP:T()}],pP:[{pP:T()}],
mP:[{mP:T()}],vP:[{vP:T()}],yP:[{yP:T()}],gP:[{
wP:["start","end","center","align-none"]}],bP:[{wP:["normal","always"]}],xP:[{
wP:["none","x","y","both"]}],kP:[{wP:["mandatory","proximity"]}],NP:[{
NP:["auto","none","manipulation"]}],SP:[{_P:["x","left","right"]}],TP:[{
_P:["y","up","down"]}],EP:["touch-pinch-zoom"],ww:[{
ww:["none","text","all","auto"]}],CP:[{
CP:["auto","scroll","contents","transform",EC]}],Hd:[{Hd:[e,"none"]}],MP:[{
qT:[xC,kC,SC]}],qT:[{qT:[e,"none"]}],OP:["sr-only","not-sr-only"],jP:[{
jP:["auto","none"]}]},lE:{or:["overflow-x","overflow-y"],
JE:["overscroll-x","overscroll-y"],
AE:["inset-x","inset-y","start","end","top","right","bottom","left"],
ZE:["right","left"],eC:["top","bottom"],Lk:["basis","grow","shrink"],
OE:["gap-x","gap-y"],Zg:["px","py","ps","pe","pt","pr","pb","pl"],
PC:["pr","pl"],AC:["pt","pb"],zC:["mx","my","ms","me","mt","mr","mb","ml"],
UC:["mr","ml"],BC:["mt","mb"],Bi:["w","h"],sM:["leading"],
hM:["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],
fM:["fvn-normal"],pM:["fvn-normal"],mM:["fvn-normal"],vM:["fvn-normal"],
yM:["fvn-normal"],wM:["display","overflow"],
lO:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],
cO:["rounded-ss","rounded-es"],uO:["rounded-se","rounded-ee"],
dO:["rounded-tl","rounded-tr"],hO:["rounded-tr","rounded-br"],
fO:["rounded-br","rounded-bl"],pO:["rounded-tl","rounded-bl"],
Dj:["border-spacing-x","border-spacing-y"],
NO:["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],
SO:["border-w-r","border-w-l"],TO:["border-w-t","border-w-b"],
GO:["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],
JO:["border-color-r","border-color-l"],XO:["border-color-t","border-color-b"],
eP:["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],
tP:["scroll-mr","scroll-ml"],nP:["scroll-mt","scroll-mb"],
cP:["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],
uP:["scroll-pr","scroll-pl"],dP:["scroll-pt","scroll-pb"],
NP:["touch-x","touch-y","touch-pz"],SP:["touch"],TP:["touch"],EP:["touch"]},cE:{
sM:["leading"]}}})),BC=Ub,VC=Bp.qo((({As:e,...t},n)=>Gp.zo(Bb,{y:n,
As:qo("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),
...t})))
VC.re=Bb.re
const HC=eE("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{
yh:{Hg:{a:"border bg-background text-foreground",
PP:"destructive group border-destructive bg-destructive text-destructive-foreground"
}},VT:{Hg:"default"}}),WC=Bp.qo((({As:e,Hg:t,...n},r)=>Gp.zo(Vb,{y:r,As:qo(HC({
Hg:t}),e),...n})))
WC.re=Vb.re,Bp.qo((({As:e,...t},n)=>Gp.zo(qb,{y:n,
As:qo("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),
...t}))).re=qb.re
const qC=Bp.qo((({As:e,...t},n)=>Gp.zo(Yb,{y:n,
As:qo("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),
AP:"",...t,w:Gp.zo(GE,{As:"h-4 w-4"})})))
qC.re=Yb.re
const YC=Bp.qo((({As:e,...t},n)=>Gp.zo(Hb,{y:n,As:qo("text-sm font-semibold",e),
...t})))
YC.re=Hb.re
const KC=Bp.qo((({As:e,...t},n)=>Gp.zo(Wb,{y:n,As:qo("text-sm opacity-90",e),
...t})))
KC.re=Wb.re,Gb=["light","dark"],Jb=Bp.$o(void 0),Xb={Dy(){},DP:[]},Qb=()=>{var e
return null!=(e=Bp.Bo(Jb))?e:Xb
},Bp.Yx((({IP:e,Oy:t,RP:n,$P:r,FP:i,My:o,r:s,Vh:a,sh:l})=>{
let c="system"===o,u="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${a.Oo((e=>`'${e}'`)).A(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?Gb.ie(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=0,r=1)=>{
let o=s?s[e]:e,a=t?e+"|| ''":`'${o}'`,l=""
return i&&r&&!t&&Gb.ie(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||o?`c.add(${a})`:"null":o&&(l+=`d[s](n,${a})`),
l
},f=e?`!function(){${u}${h(e)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",1)}}${c?"":"else{"+h(o,0,0)+"}"}${d}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",1)}}else{${h(o,0,0)};}${d}}catch(t){}}();`
return Bp.Ui("script",{sh:l,je:{ze:f}})})),Zb=e=>{switch(e){case"success":
return nx
case"info":return ix
case"warning":return rx
case"error":return ox
default:return null}},ex=Array(12).Hd(0),tx=({LP:e})=>DT.Ui("div",{
As:"sonner-loading-wrapper",zP:e},DT.Ui("div",{As:"sonner-spinner"
},ex.Oo(((e,t)=>DT.Ui("div",{As:"sonner-loading-bar",g:"spinner-bar-"+t
}))))),nx=DT.Ui("svg",{WT:"http://www.w3.org/2000/svg",Bh:"0 0 20 20",
Hd:"currentColor",Vs:"20",Bs:"20"},DT.Ui("path",{UP:"evenodd",
XT:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
BP:"evenodd"})),rx=DT.Ui("svg",{WT:"http://www.w3.org/2000/svg",Bh:"0 0 24 24",
Hd:"currentColor",Vs:"20",Bs:"20"},DT.Ui("path",{UP:"evenodd",
XT:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
BP:"evenodd"})),ix=DT.Ui("svg",{WT:"http://www.w3.org/2000/svg",Bh:"0 0 20 20",
Hd:"currentColor",Vs:"20",Bs:"20"},DT.Ui("path",{UP:"evenodd",
XT:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
BP:"evenodd"})),ox=DT.Ui("svg",{WT:"http://www.w3.org/2000/svg",Bh:"0 0 20 20",
Hd:"currentColor",Vs:"20",Bs:"20"},DT.Ui("path",{UP:"evenodd",
XT:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
BP:"evenodd"})),sx=()=>{let[e,t]=DT._o(document.hs)
return DT.To((()=>{let e=()=>{t(document.hs)}
return document.Pn("visibilitychange",e),()=>window.Nu("visibilitychange",e)
}),[]),e},ax=1,lx=new class{l(){this.xw=e=>(this.VP.M(e),()=>{
let t=this.VP.Fe(e)
this.VP.Eo(t,1)}),this.HP=e=>{this.VP.d((t=>t(e)))},this.WP=e=>{
this.HP(e),this.Ms=[...this.Ms,e]},this.qr=e=>{var t
let{ci:n,...r}=e,i="number"==typeof(null==e?void 0:e.ir)||(null==(t=e.ir)?void 0:t.e)>0?e.ir:ax++,o=this.Ms.Zu((e=>e.ir===i)),s=void 0===e.qP?1:e.qP
return o?this.Ms=this.Ms.Oo((t=>t.ir===i?(this.HP({...t,...e,ir:i,js:n}),{...t,
...e,ir:i,qP:s,js:n}):t)):this.WP({js:n,...r,qP:s,ir:i}),i
},this.No=e=>(e||this.Ms.d((e=>{this.VP.d((t=>t({ir:e.ir,No:1})))
})),this.VP.d((t=>t({ir:e,No:1}))),e),this.ci=(e,t)=>this.qr({...t,ci:e
}),this.Fl=(e,t)=>this.qr({...t,ci:e,k:"error"}),this.pb=(e,t)=>this.qr({...t,
k:"success",ci:e}),this.YP=(e,t)=>this.qr({...t,k:"info",ci:e
}),this.KP=(e,t)=>this.qr({...t,k:"warning",ci:e}),this.Vg=(e,t)=>this.qr({...t,
k:"loading",ci:e}),this.Ml=(e,t)=>{if(!t)return
let n
void 0!==t.Vg&&(n=this.qr({...t,Ml:e,k:"loading",ci:t.Vg,
Ps:"function"!=typeof t.Ps?t.Ps:void 0}))
let r=e instanceof Promise?e:e(),i=void 0!==n
return r.R((async e=>{if(cx(e)&&!e.Hy){i=0
let r="function"==typeof t.Fl?await t.Fl("HTTP error! status: "+e.al):t.Fl,o="function"==typeof t.Ps?await t.Ps("HTTP error! status: "+e.al):t.Ps
this.qr({ir:n,k:"error",ci:r,Ps:o})}else if(void 0!==t.pb){i=0
let r="function"==typeof t.pb?await t.pb(e):t.pb,o="function"==typeof t.Ps?await t.Ps(e):t.Ps
this.qr({ir:n,k:"success",ci:r,Ps:o})}})).yl((async e=>{if(void 0!==t.Fl){i=0
let r="function"==typeof t.Fl?await t.Fl(e):t.Fl,o="function"==typeof t.Ps?await t.Ps(e):t.Ps
this.qr({ir:n,k:"error",ci:r,Ps:o})}})).GP((()=>{var e
i&&(this.No(n),n=void 0),null==(e=t.GP)||e.o(t)})),n},this.Gh=(e,t)=>{
let n=(null==t?void 0:t.ir)||ax++
return this.qr({zo:e(n),ir:n,...t}),n},this.VP=[],this.Ms=[]}
},cx=e=>e&&"object"==typeof e&&"Hy"in e&&"boolean"==typeof e.Hy&&"al"in e&&"number"==typeof e.al,
ux=()=>lx.Ms,Object.ml(((e,t)=>{let n=(null==t?void 0:t.ir)||ax++
return lx.WP({js:e,...t,ir:n}),n}),{pb:lx.pb,YP:lx.YP,KP:lx.KP,Fl:lx.Fl,
Gh:lx.Gh,ci:lx.ci,Ml:lx.Ml,No:lx.No,Vg:lx.Vg},{JP:ux}),((e,{XP:t}={})=>{
if("undefined"==typeof document)return
let n=document.ch||document.getElementsByTagName("head")[0],r=document.Ui("style")
r.k="text/css","top"===t&&n.Ae?n.qi(r,n.Ae):n.Yi(r),r.QP?r.QP.ZP=e:r.Yi(document.Wi(e))
})(":where(html[dir=\"ltr\"]),:where([data-sonner-toaster][dir=\"ltr\"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir=\"rtl\"]),:where([data-sonner-toaster][dir=\"rtl\"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position=\"right\"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position=\"left\"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position=\"center\"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position=\"top\"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position=\"bottom\"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled=\"true\"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position=\"top\"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position=\"bottom\"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise=\"true\"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme=\"dark\"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled=\"true\"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping=\"true\"]):before{content:\"\";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position=\"top\"][data-swiping=\"true\"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position=\"bottom\"][data-swiping=\"true\"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping=\"false\"][data-removed=\"true\"]):before{content:\"\";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:\"\";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted=\"true\"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded=\"false\"][data-front=\"false\"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded=\"false\"][data-front=\"false\"][data-styled=\"true\"])>*{opacity:0}:where([data-sonner-toast][data-visible=\"false\"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted=\"true\"][data-expanded=\"true\"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed=\"true\"][data-front=\"true\"][data-swipe-out=\"false\"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed=\"true\"][data-front=\"false\"][data-swipe-out=\"false\"][data-expanded=\"true\"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed=\"true\"][data-front=\"false\"][data-swipe-out=\"false\"][data-expanded=\"false\"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed=\"true\"][data-front=\"false\"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n"),
dx=3,hx=14,fx=e=>{var t,n,r,i,o,s,a,l,c,u
let{ME:d,bo:h,eA:f,tA:p,nA:m,rA:v,iA:y,dr:g,Ms:w,oA:b,sA:x,aA:k,lA:N,$e:S,cA:_,uA:T,As:E="",dA:C="",md:M,Wa:O,OE:j,hA:P,fA:A,pA:D,mA:I,vA:R="Close toast",yA:$,gA:F}=e,[L,z]=DT._o(0),[U,B]=DT._o(0),[V,H]=DT._o(0),[W,q]=DT._o(0),[Y,K]=DT._o(0),[G,J]=DT._o(0),X=DT.Wo(null),Q=DT.Wo(null),Z=0===g,ee=v>=g+1,te=h.k,ne=0!=h.qP,re=h.As||"",ie=h.dA||"",oe=DT.Do((()=>y.tu((e=>e.wo===h.ir))||0),[y,h.ir]),se=DT.Do((()=>{
var e
return null!=(e=h.lA)?e:N
}),[h.lA,N]),ae=DT.Do((()=>h.md||M||4e3),[h.md,M]),le=DT.Wo(0),ce=DT.Wo(0),ue=DT.Wo(0),de=DT.Wo(null),[he,fe]=O.ne("-"),pe=DT.Do((()=>y.Ao(((e,t,n)=>oe>n?e+t.Vs:e),0)),[y,oe]),me=sx(),ve=h.ME||d,ye="loading"===te
ce.S=DT.Do((()=>oe*j+pe),[oe,pe]),DT.To((()=>{z(1)}),[]),DT._c((()=>{
if(!L)return
let e=Q.S,t=e.$e.Vs
e.$e.Vs="auto"
let n=e.Da().Vs
e.$e.Vs=t,J(n),m((e=>e.Zu((e=>e.wo===h.ir))?e.Oo((e=>e.wo===h.ir?{...e,Vs:n
}:e)):[{wo:h.ir,Vs:n,Wa:h.Wa},...e]))}),[L,h.js,h.Ps,m,h.ir])
let ge=DT.Mo((()=>{B(1),K(ce.S),m((e=>e.Ro((e=>e.wo!==h.ir)))),setTimeout((()=>{
x(h)}),200)}),[h,x,m,ce])
return DT.To((()=>{if(h.Ml&&"loading"===te||h.md===1/0||"loading"===h.k)return
let e,t=ae
return b||p||$&&me?(()=>{if(ue.S<le.S){let e=(new Date).og()-le.S
t-=e}ue.S=(new Date).og()})():t!==1/0&&(le.S=(new Date).og(),e=setTimeout((()=>{
var e
null==(e=h.wA)||e.o(h,h),ge()}),t)),()=>clearTimeout(e)
}),[b,p,A,h,ae,ge,h.Ml,te,$,me]),DT.To((()=>{let e=Q.S
if(e){let t=e.Da().Vs
return J(t),m((e=>[{wo:h.ir,Vs:t,Wa:h.Wa
},...e])),()=>m((e=>e.Ro((e=>e.wo!==h.ir))))}}),[m,h.ir]),DT.To((()=>{h.at&&ge()
}),[ge,h.at]),DT.Ui("li",{ET:h.bA?"assertive":"polite",CT:"true",pT:"status",
vs:0,y:Q,
As:F(E,re,null==D?void 0:D.bo,null==(t=null==h?void 0:h.pA)?void 0:t.bo,null==D?void 0:D.a,null==D?void 0:D[te],null==(n=null==h?void 0:h.pA)?void 0:n[te]),
xA:"",kA:null!=(r=h.NA)?r:k,SA:!(h.zo||h.eA||f),_A:L,TA:!!h.Ml,EA:U,zP:ee,CA:he,
MA:fe,OA:g,jA:Z,PA:V,AA:ne,DA:te,IA:ve,RA:W,$A:!!(b||A&&L),$e:{FA:g,LA:g,
zA:w.e-g,UA:(U?Y:ce.S)+"px",BA:A?"auto":G+"px",...S,...h.$e},AT(e){
ye||!ne||(X.S=new Date,K(ce.S),e.Ve.IT(e.lt),"BUTTON"!==e.Ve.Pr&&(H(1),de.S={
zs:e.$N,Us:e.FN}))},RT(){var e,t,n,r
if(W||!ne)return
de.S=null
let i=+((null==(e=Q.S)?void 0:e.$e.Jd("--swipe-amount").E("px",""))||0),o=(new Date).og()-(null==(t=X.S)?void 0:t.og()),s=Math.abs(i)/o
if(Math.abs(i)>=20||s>.11)return K(ce.S),null==(n=h.$_)||n.o(h,h),ge(),void q(1)
null==(r=Q.S)||r.$e.Le("--swipe-amount","0px"),H(0)},DT(e){var t
if(!de.S||!ne)return
let n=e.FN-de.S.Us,r=e.$N-de.S.zs,i=("top"===he?Math.an:Math.qu)(0,n),o="touch"===e.Qd?10:2
Math.abs(i)>o?null==(t=Q.S)||t.$e.Le("--swipe-amount",n+"px"):Math.abs(r)>o&&(de.S=null)
}},se&&!h.zo?DT.Ui("button",{Wg:R,VA:ye,HA:1,Fi:ye||!ne?()=>{}:()=>{var e
ge(),null==(e=h.$_)||e.o(h,h)},
As:F(null==D?void 0:D.lA,null==(i=null==h?void 0:h.pA)?void 0:i.lA)
},DT.Ui("svg",{WT:"http://www.w3.org/2000/svg",Bs:"12",Vs:"12",Bh:"0 0 24 24",
Hd:"none",qT:"currentColor",mN:"1.5",YT:"round",KT:"round"},DT.Ui("line",{
nE:"18",iE:"6",rE:"6",oE:"18"}),DT.Ui("line",{nE:"6",iE:"6",rE:"18",oE:"18"
}))):null,h.zo||DT.Io(h.js)?h.zo||h.js:DT.Ui(DT.Bc,null,te||h.Yg||h.Ml?DT.Ui("div",{
WA:"",As:F(null==D?void 0:D.Yg,null==(o=null==h?void 0:h.pA)?void 0:o.Yg)
},h.Ml||"loading"===h.k&&!h.Yg?h.Yg||(null!=I&&I.Vg?DT.Ui("div",{
As:"sonner-loader",zP:"loading"===te},I.Vg):P?DT.Ui("div",{As:"sonner-loader",
zP:"loading"===te},P):DT.Ui(tx,{LP:"loading"===te
})):null,"loading"!==h.k?h.Yg||(null==I?void 0:I[te])||Zb(te):null):null,DT.Ui("div",{
qA:"",As:F(null==D?void 0:D.qw,null==(s=null==h?void 0:h.pA)?void 0:s.qw)
},DT.Ui("div",{YA:"",
As:F(null==D?void 0:D.js,null==(a=null==h?void 0:h.pA)?void 0:a.js)
},h.js),h.Ps?DT.Ui("div",{KA:"",
As:F(C,ie,null==D?void 0:D.Ps,null==(l=null==h?void 0:h.pA)?void 0:l.Ps)
},h.Ps):null),DT.Io(h.Ol)?h.Ol:h.Ol&&Ko(h.Ol)?DT.Ui("button",{GA:1,JA:1,
$e:h.cA||_,Fi(e){var t,n
Ko(h.Ol)&&ne&&(null==(n=(t=h.Ol).Fi)||n.o(t,e),ge())},
As:F(null==D?void 0:D.XA,null==(c=null==h?void 0:h.pA)?void 0:c.XA)
},h.Ol.Ds):null,DT.Io(h.Fr)?h.Fr:h.Fr&&Ko(h.Fr)?DT.Ui("button",{GA:1,QA:1,
$e:h.uA||T,Fi(e){var t,n
Ko(h.Fr)&&(e.Mt||(null==(n=(t=h.Fr).Fi)||n.o(t,e),ge()))},
As:F(null==D?void 0:D.ZA,null==(u=null==h?void 0:h.pA)?void 0:u.ZA)
},h.Fr.Ds):null))},px=e=>{
let{ME:t,Wa:n="bottom-right",dT:r=["altKey","KeyT"],eD:i,lA:o,As:s,Ht:a,Ay:l="light",NA:c,md:u,$e:d,rA:h=dx,tD:f,nD:p=Jo(),OE:m=hx,hA:v,mA:y,rD:g="Notifications",yA:w,gA:b=Go}=e,[x,k]=DT._o([]),N=DT.Do((()=>Array.Go(new Set([n].Gr(x.Ro((e=>e.Wa)).Oo((e=>e.Wa)))))),[x,n]),[S,_]=DT._o([]),[T,E]=DT._o(0),[C,M]=DT._o(0),[O,j]=DT._o("system"!==l?l:"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").va?"dark":"light"),P=DT.Wo(null),A=r.A("+").E(/Key/g,"").E(/Digit/g,""),D=DT.Wo(null),I=DT.Wo(0),R=DT.Mo((e=>{
var t
null!=(t=x.Zu((t=>t.ir===e.ir)))&&t.at||lx.No(e.ir),k((t=>t.Ro((({ir:t})=>t!==e.ir))))
}),[x])
return DT.To((()=>lx.xw((e=>{e.No?k((t=>t.Oo((t=>t.ir===e.ir?{...t,at:1
}:t)))):setTimeout((()=>{RT.Qo((()=>{k((t=>{let n=t.tu((t=>t.ir===e.ir))
return-1!==n?[...t.q(0,n),{...t[n],...e},...t.q(n+1)]:[e,...t]}))}))}))}))),[]),
DT.To((()=>{
"system"===l?("system"===l&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").va?j("dark"):j("light")),
"undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").Pn("change",(({va:e})=>{
j(e?"dark":"light")}))):j(l)}),[l]),DT.To((()=>{1>=x.e&&E(0)}),[x]),DT.To((()=>{
let e=e=>{var t,n
r.cc((t=>e[t]||e.sg===t))&&(E(1),null==(t=P.S)||t.Tn()),"Escape"===e.sg&&(document.ge===P.S||null!=(n=P.S)&&n.qt(document.ge))&&E(0)
}
return document.Pn("keydown",e),()=>document.Nu("keydown",e)}),[r]),DT.To((()=>{
if(P.S)return()=>{D.S&&(D.S.Tn({Sb:1}),D.S=null,I.S=0)}
}),[P.S]),x.e?DT.Ui("section",{Wg:`${g} ${A}`,vs:-1},N.Oo(((e,n)=>{var r
let[l,g]=e.ne("-")
return DT.Ui("ol",{g:e,nD:"auto"===p?Jo():p,vs:-1,y:P,As:s,iD:1,oD:O,CA:l,MA:g,
$e:{sD:((null==(r=S[0])?void 0:r.Vs)||0)+"px",
UA:"number"==typeof a?a+"px":a||"32px",aD:"356px",lD:m+"px",...d},cD(e){
I.S&&!e.Et.qt(e.Rn)&&(I.S=0,D.S&&(D.S.Tn({Sb:1}),D.S=null))},gT(e){
e.Ve instanceof HTMLElement&&"false"===e.Ve._i.qP||I.S||(I.S=1,D.S=e.Rn)},uD(){
return E(1)},dD(){return E(1)},hD(){C||E(0)},AT(e){
e.Ve instanceof HTMLElement&&"false"===e.Ve._i.qP||M(1)},RT(){return M(0)}
},x.Ro((t=>!t.Wa&&0===n||t.Wa===e)).Oo(((n,r)=>{var s,a
return DT.Ui(fx,{g:n.ir,mA:y,dr:r,bo:n,aA:c,
md:null!=(s=null==f?void 0:f.md)?s:u,As:null==f?void 0:f.As,
dA:null==f?void 0:f.dA,ME:t,rA:h,lA:null!=(a=null==f?void 0:f.lA)?a:o,tA:C,Wa:e,
$e:null==f?void 0:f.$e,eA:null==f?void 0:f.eA,pA:null==f?void 0:f.pA,
cA:null==f?void 0:f.cA,uA:null==f?void 0:f.uA,sA:R,Ms:x.Ro((e=>e.Wa==n.Wa)),
iA:S.Ro((e=>e.Wa==n.Wa)),nA:_,fA:i,OE:m,hA:v,oA:T,yA:w,gA:b})})))}))):null}
const GC=({...e})=>{const{Ay:t="system"}=Qb()
return Gp.zo(px,{Ay:t,As:"toaster group",tD:{pA:{
bo:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
Ps:"group-[.toast]:text-muted-foreground",
ZA:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
XA:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}
mx=IT.oh||(()=>{}),vx=0
const JC=["top","right","bottom","left"],XC=Math.an,QC=Math.qu,ZC=Math.round,eM=Math.floor,tM=e=>({
zs:e,Us:e}),nM={kn:"right",Fs:"left",Ls:"top",Sn:"bottom"},rM={rn:"end",
in:"start"},iM=tM(0),oM={aa(e){let{Ks:t,la:n,ca:r,Gs:i}=e
const o="fixed"===i,s=ys(r),a=t?Ss(t.Ws):0
if(r===s||a&&o)return n
let l={Nn:0,_n:0},c=tM(1)
const u=tM(0),d=bs(r)
if((d||!d&&!o)&&(("body"!==ms(r)||ks(s))&&(l=Ms(r)),bs(r))){const e=Fs(r)
c=Rs(r),u.zs=e.zs+r.$a,u.Us=e.Us+r.La}return{Bs:n.Bs*c.zs,Vs:n.Vs*c.Us,
zs:n.zs*c.zs-l.Nn*c.zs+u.zs,Us:n.Us*c.Us-l._n*c.Us+u.Us}},ia:ys,ta(e){
let{xn:t,Js:n,Xs:r,Gs:i}=e
const o=[..."clippingAncestors"===n?Ss(t)?[]:((e,t)=>{const n=t.t(e)
if(n)return n
let r=Ps(e,[],0).Ro((e=>ws(e)&&"body"!==ms(e))),i=null
const o="fixed"===Cs(e).Wa
let s=o?Os(e):e
for(;ws(s)&&!Es(s);){const t=Cs(s),n=_s(s)
n||"fixed"!==t.Wa||(i=null),(o?!n&&!i:!n&&"static"===t.Wa&&i&&["absolute","fixed"].ie(i.Wa)||ks(s)&&!n&&Us(e,s))?r=r.Ro((e=>e!==s)):i=t,
s=Os(s)}return t.te(e,r),r})(t,this.fD):[].Gr(n),r],s=o[0],a=o.Ao(((e,n)=>{
const r=zs(t,n,i)
return e.Sn=QC(r.Sn,e.Sn),e.Fs=XC(r.Fs,e.Fs),e.Ls=XC(r.Ls,e.Ls),e.kn=QC(r.kn,e.kn),
e}),zs(t,s,i))
return{Bs:a.Fs-a.kn,Vs:a.Ls-a.Sn,zs:a.kn,Us:a.Sn}},oa:Ws,async pD(e){
const t=this.oa||Ws,n=this.mD,r=await n(e.Ws)
return{Hs:Bs(e.Hs,await t(e.Ws),e.Gs),Ws:{zs:0,Us:0,Bs:r.Bs,Vs:r.Vs}}},vD(e){
return Array.Go(e.vD())},mD(e){const{Bs:t,Vs:n}=Ds(e)
return{Bs:t,Vs:n}},sa:Rs,na:ws,yD(e){return"rtl"===Cs(e).Rs}
},sM=e=>(void 0===e&&(e=0),{oe:"offset",Ee:e,async _l(t){var n,r
const{zs:i,Us:o,gD:s,wD:a}=t,l=await(async(e,t)=>{
const{gD:n,qs:r,Ks:i}=e,o=await(null==r.yD?void 0:r.yD(i.Ws)),s=es(n),a=ts(n),l="y"===is(n),c=["left","top"].ie(s)?-1:1,u=o&&l?-1:1,d=Zo(t,e)
let{bD:h,xD:f,kD:p}="number"==typeof d?{bD:d,xD:0,kD:null}:{bD:d.bD||0,
xD:d.xD||0,kD:d.kD}
return a&&"number"==typeof p&&(f="end"===a?-1*p:p),l?{zs:f*u,Us:h*c}:{zs:h*c,
Us:f*u}})(t,e)
return s===(null==(n=a.Ht)?void 0:n.gD)&&null!=(r=a.ND)&&r.SD?{}:{zs:i+l.zs,
Us:o+l.Us,Ft:{...l,gD:s}}}}),aM=e=>(void 0===e&&(e={}),{oe:"shift",Ee:e,
async _l(t){const{zs:n,Us:r,gD:i}=t,{bD:o=1,xD:s=0,_D:a={_l(e){let{zs:t,Us:n}=e
return{zs:t,Us:n}}},...l}=Zo(e,t),c={zs:n,Us:r
},u=await ds(t,l),d=is(es(i)),h=ns(d)
let f=c[h],p=c[d]
if(o){const e="y"===h?"bottom":"right"
f=Qo(f+u["y"===h?"Sn":"kn"],f,f-u[e])}if(s){const e="y"===d?"bottom":"right"
p=Qo(p+u["y"===d?"Sn":"kn"],p,p-u[e])}const m=a._l({...t,[h]:f,[d]:p})
return{...m,Ft:{zs:m.zs-n,Us:m.Us-r,TD:{[h]:o,[d]:s}}}}
}),lM=e=>(void 0===e&&(e={}),{oe:"flip",Ee:e,async _l(t){var n,r,i,o,s
const{gD:a,wD:l,Ys:c,ED:u,qs:d,Ks:h}=t,{bD:f=1,xD:p=1,CD:m,MD:v="bestFit",OD:y="none",jD:g=1,...w}=Zo(e,t)
if(null!=(n=l.ND)&&n.SD)return{}
const b=es(a),x=is(u),k=es(u)===u,N=await(null==d.yD?void 0:d.yD(h.Ws)),S=m||(k||!g?[as(u)]:(e=>{
const t=as(e)
return[ss(e),t,ss(t)]})(u)),_="none"!==y
!m&&_&&S.M(...((e,t,n,r)=>{const i=ts(e)
let o=((e,t,n)=>{
const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"]
switch(e){case"top":case"bottom":return n?t?i:r:t?r:i
case"left":case"right":return t?o:s
default:return[]}})(es(e),"start"===n,r)
return i&&(o=o.Oo((e=>e+"-"+i)),t&&(o=o.Gr(o.Oo(ss)))),o})(u,g,y,N))
const T=[u,...S],E=await ds(t,w),C=[]
let M=(null==(r=l.PD)?void 0:r.AD)||[]
if(f&&C.M(E[b]),p){const e=((e,t,n)=>{void 0===n&&(n=0)
const r=ts(e),i=os(e),o=rs(i)
let s="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top"
return t.Hs[o]>t.Ws[o]&&(s=as(s)),[s,as(s)]})(a,c,N)
C.M(E[e[0]],E[e[1]])}if(M=[...M,{gD:a,AD:C}],!C.cc((e=>0>=e))){
const e=((null==(i=l.PD)?void 0:i.dr)||0)+1,t=T[e]
if(t)return{Ft:{dr:e,AD:M},yp:{gD:t}}
let n=null==(o=M.Ro((e=>0>=e.AD[0])).Xo(((e,t)=>e.AD[1]-t.AD[1]))[0])?void 0:o.gD
if(!n)switch(v){case"bestFit":{const e=null==(s=M.Ro((e=>{if(_){const t=is(e.gD)
return t===x||"y"===t}return 1
})).Oo((e=>[e.gD,e.AD.Ro((e=>e>0)).Ao(((e,t)=>e+t),0)])).Xo(((e,t)=>e[1]-t[1]))[0])?void 0:s[0]
e&&(n=e)
break}case"initialPlacement":n=u}if(a!==n)return{yp:{gD:n}}}return{}}
}),cM=e=>(void 0===e&&(e={}),{oe:"size",Ee:e,async _l(t){var n,r
const{gD:i,Ys:o,qs:s,Ks:a}=t,{c:l=()=>{},...c}=Zo(e,t),u=await ds(t,c),d=es(i),h=ts(i),f="y"===is(i),{Bs:p,Vs:m}=o.Ws
let v,y
"top"===d||"bottom"===d?(v=d,y=h===(await(null==s.yD?void 0:s.yD(a.Ws))?"start":"end")?"left":"right"):(y=d,
v="end"===h?"top":"bottom")
const g=m-u.Sn-u.Ls,w=p-u.kn-u.Fs,b=XC(m-u[v],g),x=XC(p-u[y],w),k=!t.wD.gt
let N=b,S=x
if(null!=(n=t.wD.gt)&&n.TD.zs&&(S=w),null!=(r=t.wD.gt)&&r.TD.Us&&(N=g),k&&!h){
const e=QC(u.kn,0),t=QC(u.Fs,0),n=QC(u.Sn,0),r=QC(u.Ls,0)
f?S=p-2*(0!==e||0!==t?e+t:QC(u.kn,u.Fs)):N=m-2*(0!==n||0!==r?n+r:QC(u.Sn,u.Ls))}
await l({...t,DD:S,ID:N})
const _=await s.mD(a.Ws)
return p!==_.Bs||m!==_.Vs?{yp:{Ys:1}}:{}}}),uM=e=>(void 0===e&&(e={}),{
oe:"hide",Ee:e,async _l(t){const{Ys:n}=t,{Gs:r="referenceHidden",...i}=Zo(e,t)
switch(r){case"referenceHidden":{const e=hs(await ds(t,{...i,Qs:"reference"
}),n.Hs)
return{Ft:{RD:e,$D:fs(e)}}}case"escaped":{const e=hs(await ds(t,{...i,Zs:1
}),n.Ws)
return{Ft:{FD:e,LD:fs(e)}}}default:return{}}}}),dM=e=>({oe:"arrow",Ee:e,
async _l(t){
const{zs:n,Us:r,gD:i,Ys:o,qs:s,Ks:a,wD:l}=t,{xn:c,ea:u=0}=Zo(e,t)||{}
if(null==c)return{}
const d=ls(u),h={zs:n,Us:r
},f=os(i),p=rs(f),m=await s.mD(c),v="y"===f,y=v?"top":"left",g=v?"bottom":"right",w=v?"clientHeight":"clientWidth",b=o.Hs[p]+o.Hs[f]-h[f]-o.Ws[p],x=h[f]-o.Hs[f],k=await(null==s.oa?void 0:s.oa(c))
let N=k?k[w]:0
N&&await(null==s.na?void 0:s.na(k))||(N=a.Ws[w]||o.Ws[p])
const S=b/2-x/2,_=N/2-m[p]/2-1,T=XC(d[y],_),E=XC(d[g],_),C=T,M=N-m[p]-E,O=N/2-m[p]/2+S,j=Qo(C,O,M),P=!l.ND&&null!=ts(i)&&O!==j&&0>o.Hs[p]/2-(C>O?T:E)-m[p]/2,A=P?C>O?O-C:O-M:0
return{[f]:h[f]+A,Ft:{[f]:j,zD:O-j-A,...P&&{SD:A}},yp:P}}
}),hM=e=>(void 0===e&&(e={}),{Ee:e,_l(t){
const{zs:n,Us:r,gD:i,Ys:o,wD:s}=t,{Ht:a=0,bD:l=1,xD:c=1}=Zo(e,t),u={zs:n,Us:r
},d=is(i),h=ns(d)
let f=u[h],p=u[d]
const m=Zo(a,t),v="number"==typeof m?{bD:m,xD:0}:{bD:0,xD:0,...m}
if(l){
const e="y"===h?"height":"width",t=o.Hs[h]-o.Ws[e]+v.bD,n=o.Hs[h]+o.Hs[e]-v.bD
t>f?f=t:f>n&&(f=n)}if(c){var y,g
const e="y"===h?"width":"height",t=["top","left"].ie(es(i)),n=o.Hs[d]-o.Ws[e]+(t&&(null==(y=s.Ht)?void 0:y[d])||0)+(t?0:v.xD),r=o.Hs[d]+o.Hs[e]+(t?0:(null==(g=s.Ht)?void 0:g[d])||0)-(t?v.xD:0)
n>p?p=n:p>r&&(p=r)}return{[h]:f,[d]:p}}})
yx="undefined"!=typeof document?Bp._c:Bp.To
const fM=e=>({oe:"arrow",Ee:e,_l(t){const{xn:n,ea:r}="function"==typeof e?e(t):e
return n&&(i=n,{}.s.o(i,"current"))?null!=n.S?dM({xn:n.S,ea:r})._l(t):{}:n?dM({
xn:n,ea:r})._l(t):{}
var i}}),pM=(e,t)=>({...sM(e),Ee:[e,t]}),mM=(e,t)=>({...aM(e),Ee:[e,t]
}),vM=(e,t)=>({...hM(e),Ee:[e,t]}),yM=(e,t)=>({...lM(e),Ee:[e,t]}),gM=(e,t)=>({
...cM(e),Ee:[e,t]}),wM=(e,t)=>({...uM(e),Ee:[e,t]}),bM=(e,t)=>({...fM(e),
Ee:[e,t]});(gx=Bp.qo(((e,t)=>{const{w:n,Bs:r=10,Vs:i=5,...o}=e
return Gp.zo(lb.UD,{...o,y:t,Bs:r,Vs:i,Bh:"0 0 30 10",BD:"none",
w:e.ew?n:Gp.zo("polygon",{sE:"0,0 30,0 15,10"})})
}))).re="Arrow",wx=gx,bx="Popper"
var[xM,kM]=((e,t=[])=>{let n=[]
const r=()=>{const t=n.Oo((e=>Bp.$o(e)))
return n=>{const r=(null==n?void 0:n[e])||t
return Bp.Do((()=>({["__scope"+e]:{...n,[e]:r}})),[n,r])}}
return r.Po=e,[(t,r)=>{function i(t){
const{Fo:n,w:r,...i}=t,a=(null==n?void 0:n[e][s])||o,l=Bp.Do((()=>i),Object.Lo(i))
return Gp.zo(a.Uo,{r:l,w:r})}const o=Bp.$o(r),s=n.e
return n=[...n,r],i.re=t+"Provider",[i,(n,i)=>{
const a=(null==i?void 0:i[e][s])||o,l=Bp.Bo(a)
if(l)return l
if(void 0!==r)return r
throw Error(`\`${n}\` must be used within \`${t}\``)}]},Js(r,...t)]
})(bx),[NM,SM]=xM(bx);(xx=e=>{const{VD:t,w:n}=e,[r,i]=Bp._o(null)
return Gp.zo(NM,{Fo:t,HD:r,WD:i,w:n})
}).re=bx,kx="PopperAnchor",(Nx=Bp.qo(((e,t)=>{
const{VD:n,qD:r,...i}=e,o=SM(kx,n),s=Bp.Wo(null),a=_o(t,s)
return Bp.To((()=>{o.WD((null==r?void 0:r.S)||s.S)})),r?null:Gp.zo(lb.qg,{...i,
y:a})}))).re=kx,Sx="PopperContent"
var[_M,TM]=xM(Sx)
_x=Bp.qo(((e,t)=>{var n,r,i,o,s,a
const{VD:l,YD:c="bottom",KD:u=0,UM:d="center",GD:h=0,JD:f=0,XD:p=1,QD:m=[],ZD:v=0,eI:y="partial",tI:g=0,nI:w="optimized",rI:b,...x}=e,k=SM(Sx,l),[N,S]=Bp._o(null),_=_o(t,(e=>S(e))),[T,E]=Bp._o(null),C=Xs(T),M=(null==C?void 0:C.Bs)??0,O=(null==C?void 0:C.Vs)??0,j=c+("center"!==d?"-"+d:""),P="number"==typeof v?v:{
Sn:0,Fs:0,Ls:0,kn:0,...v},A=Array.isArray(m)?m:[m],D=A.e>0,I={ea:P,Js:A.Ro(Qs),
Zs:D},{m:R,iI:$,gD:F,oI:L,wD:z}=(e=>{void 0===e&&(e={})
const{gD:t="bottom",Gs:n="absolute",sI:r=[],qs:i,Ks:{Hs:o,Ws:s}={},ya:a=1,aI:l,xo:c}=e,[u,d]=Bp._o({
zs:0,Us:0,Gs:n,gD:t,wD:{},oI:0}),[h,f]=Bp._o(r)
qs(h,r)||f(r)
const[p,m]=Bp._o(null),[v,y]=Bp._o(null),g=Bp.Mo((e=>{e!==k.S&&(k.S=e,m(e))
}),[]),w=Bp.Mo((e=>{e!==N.S&&(N.S=e,y(e))
}),[]),b=o||p,x=s||v,k=Bp.Wo(null),N=Bp.Wo(null),S=Bp.Wo(u),_=null!=l,T=Gs(l),E=Gs(i),C=Gs(c),M=Bp.Mo((()=>{
if(!k.S||!N.S)return
const e={gD:t,Gs:n,sI:h}
E.S&&(e.qs=E.S),((e,t,n)=>{const r=new Map,i={qs:oM,...n},o={...i.qs,fD:r}
return(async(e,t,n)=>{
const{gD:r="bottom",Gs:i="absolute",sI:o=[],qs:s}=n,a=o.Ro(Boolean),l=await(null==s.yD?void 0:s.yD(t))
let c=await s.pD({Hs:e,Ws:t,Gs:i}),{zs:u,Us:d}=us(c,r,l),h=r,f={},p=0
for(let m=0;m<a.e;m++){const{oe:n,_l:o}=a[m],{zs:v,Us:y,Ft:g,yp:w}=await o({
zs:u,Us:d,ED:r,gD:h,Gs:i,wD:f,Ys:c,qs:s,Ks:{Hs:e,Ws:t}})
u=null!=v?v:u,d=null!=y?y:d,f={...f,[n]:{...f[n],...g}
},w&&50>=p&&(p++,"object"==typeof w&&(w.gD&&(h=w.gD),
w.Ys&&(c=1==w.Ys?await s.pD({Hs:e,Ws:t,Gs:i
}):w.Ys),({zs:u,Us:d}=us(c,h,l))),m=-1)}return{zs:u,Us:d,gD:h,Gs:i,wD:f}})(e,t,{
...i,qs:o})})(k.S,N.S,e).R((e=>{const t={...e,oI:0!=C.S}
O.S&&!qs(S.S,t)&&(S.S=t,nb.Qo((()=>{d(t)})))}))}),[h,t,n,E,C])
yx((()=>{0==c&&S.S.oI&&(S.S.oI=0,d((e=>({...e,oI:0}))))}),[c])
const O=Bp.Wo(0)
yx((()=>(O.S=1,()=>{O.S=0})),[]),yx((()=>{if(b&&(k.S=b),x&&(N.S=x),b&&x){
if(T.S)return T.S(b,x,M)
M()}}),[b,x,M,T,_])
const j=Bp.Do((()=>({Hs:k,Ws:N,lI:g,cI:w})),[g,w]),P=Bp.Do((()=>({Hs:b,Ws:x
})),[b,x]),A=Bp.Do((()=>{const e={Wa:n,kn:0,Sn:0}
if(!P.Ws)return e
const t=Ks(P.Ws,u.zs),r=Ks(P.Ws,u.Us)
return a?{...e,ya:"translate("+t+"px, "+r+"px)",...Ys(P.Ws)>=1.5&&{
xa:"transform"}}:{Wa:n,kn:t,Sn:r}}),[n,a,P.Ws,u.zs,u.Us])
return Bp.Do((()=>({...u,So:M,m:j,Ks:P,iI:A})),[u,M,j,P,A])})({Gs:"fixed",gD:j,
aI(...e){return((e,t,n,r)=>{void 0===r&&(r={})
const{uI:i=1,dI:o=1,hI:s="function"==typeof ResizeObserver,fI:a="function"==typeof IntersectionObserver,pI:l=0}=r,c=Is(e),u=i||o?[...c?Ps(c):[],...Ps(t)]:[]
u.d((e=>{i&&e.Pn("scroll",n,{Dn:1}),o&&e.Pn("resize",n)}))
const d=c&&a?((e,t)=>{function n(){var e
clearTimeout(r),null==(e=i)||e.mI(),i=null}let r,i=null
const o=ys(e)
return(function s(a,l){function c(e){const t=e[0].vI
if(t!==l){if(!m)return s()
t?s(0,t):r=setTimeout((()=>{s(0,1e-7)}),1e3)}m=0}
void 0===a&&(a=0),void 0===l&&(l=1),n()
const{kn:u,Sn:d,Bs:h,Vs:f}=e.Da()
if(a||t(),!h||!f)return
const p={
yI:-eM(d)+"px "+-eM(o.Ua-(u+h))+"px "+-eM(o.Ba-(d+f))+"px "+-eM(u)+"px",
gI:QC(0,XC(1,l))||1}
let m=1
try{i=new IntersectionObserver(c,{...p,ih:o.Te})}catch(v){
i=new IntersectionObserver(c,p)}i.Ja(e)})(1),n})(c,n):null
let h,f=-1,p=null
s&&(p=new ResizeObserver((e=>{let[r]=e
r&&r.Ve===c&&p&&(p.Qa(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{
var e
null==(e=p)||e.Ja(t)}))),n()})),c&&!l&&p.Ja(c),p.Ja(t))
let m=l?Fs(e):null
return l&&(function t(){const r=Fs(e)
!m||r.zs===m.zs&&r.Us===m.Us&&r.Bs===m.Bs&&r.Vs===m.Vs||n(),m=r,h=requestAnimationFrame(t)
})(),n(),()=>{var e
u.d((e=>{i&&e.Nu("scroll",n),o&&e.Nu("resize",n)
})),null==d||d(),null==(e=p)||e.mI(),p=null,l&&cancelAnimationFrame(h)}})(...e,{
pI:"always"===w})},Ks:{Hs:k.HD},sI:[pM({bD:u+O,kD:h}),p&&mM({bD:1,xD:0,
_D:"partial"===y?vM():void 0,...I}),p&&yM({...I}),gM({...I,
c({Ks:e,Ys:t,DD:n,ID:r}){const{Bs:i,Vs:o}=t.Hs,s=e.Ws.$e
s.Le("--radix-popper-available-width",n+"px"),s.Le("--radix-popper-available-height",r+"px"),
s.Le("--radix-popper-anchor-width",i+"px"),
s.Le("--radix-popper-anchor-height",o+"px")}}),T&&bM({xn:T,ea:f}),Mx({wI:M,bI:O
}),g&&wM({Gs:"referenceHidden",...I})]}),[U,B]=Zs(F),V=Ao(b)
vb((()=>{L&&(null==V||V())}),[L,V])
const H=null==(n=z.ND)?void 0:n.zs,W=null==(r=z.ND)?void 0:r.Us,q=0!==(null==(i=z.ND)?void 0:i.zD),[Y,K]=Bp._o()
return vb((()=>{N&&K(window.$s(N).sN)}),[N]),Gp.zo("div",{y:R.cI,xI:"",$e:{...$,
ya:L?$.ya:"translate(0, -200%)",kI:"max-content",sN:Y,
NI:[null==(o=z.xh)?void 0:o.zs,null==(s=z.xh)?void 0:s.Us].A(" "),
...(null==(a=z._v)?void 0:a.$D)&&{Qv:"hidden",Zv:"none"}},nD:e.nD,w:Gp.zo(_M,{
Fo:l,SI:U,_I:E,TI:H,EI:W,CI:q,w:Gp.zo(lb.qg,{MI:U,OI:B,...x,y:_,$e:{...x.$e,
tp:L?void 0:"none"}})})})})),_x.re=Sx,Tx="PopperArrow",Ex={Sn:"bottom",
Fs:"left",Ls:"top",kn:"right"},(Cx=Bp.qo(((e,t)=>{
const{VD:n,...r}=e,i=TM(Tx,n),o=Ex[i.SI]
return Gp.zo("span",{y:i._I,$e:{Wa:"absolute",kn:i.TI,Sn:i.EI,[o]:0,xh:{Sn:"",
Fs:"0 0",Ls:"center 0",kn:"100% 0"}[i.SI],ya:{Sn:"translateY(100%)",
Fs:"translateY(50%) rotate(90deg) translateX(-50%)",Ls:"rotate(180deg)",
kn:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.SI],
Qv:i.CI?"hidden":void 0},w:Gp.zo(wx,{...r,y:t,$e:{...r.$e,Qi:"block"}})})
}))).re=Tx,Mx=e=>({oe:"transformOrigin",Ee:e,_l(t){var n,r,i
const{gD:o,Ys:s,wD:a}=t,l=0!==(null==(n=a.ND)?void 0:n.zD),c=l?0:e.wI,u=l?0:e.bI,[d,h]=Zs(o),f={
rn:"0%",jI:"50%",in:"100%"
}[h],p=((null==(r=a.ND)?void 0:r.zs)??0)+c/2,m=((null==(i=a.ND)?void 0:i.Us)??0)+u/2
let v="",y=""
return"bottom"===d?(v=l?f:p+"px",y=-u+"px"):"top"===d?(v=l?f:p+"px",y=s.Ws.Vs+u+"px"):"right"===d?(v=-u+"px",
y=l?f:m+"px"):"left"===d&&(v=s.Ws.Bs+u+"px",y=l?f:m+"px"),{Ft:{zs:v,Us:y}}}
}),Ox=xx,jx=Nx,Px=_x,Ax=Cx
var[EM,CM]=Oo("Tooltip",[kM])
Dx=kM(),Ix="TooltipProvider",Rx=700,$x="tooltip.open"
var[MM,OM]=EM(Ix);(Fx=e=>{
const{PI:t,AI:n=Rx,DI:r=300,II:i=0,w:o}=e,[s,a]=Bp._o(1),l=Bp.Wo(0),c=Bp.Wo(0)
return Bp.To((()=>{const e=c.S
return()=>window.Tb(e)}),[]),Gp.zo(MM,{Fo:t,RI:s,AI:n,$I:Bp.Mo((()=>{
window.Tb(c.S),a(0)}),[]),Mb:Bp.Mo((()=>{
window.Tb(c.S),c.S=window.Eb((()=>a(1)),r)}),[r]),FI:l,LI:Bp.Mo((e=>{l.S=e
}),[]),II:i,w:o})}).re=Ix,Lx="Tooltip"
var[jM,PM]=EM(Lx)
zx="TooltipTrigger",Bp.qo(((e,t)=>{
const{PI:n,...r}=e,i=PM(zx,n),o=OM(zx,n),s=Dx(n),a=_o(t,Bp.Wo(null),i.zI),l=Bp.Wo(0),c=Bp.Wo(0),u=Bp.Mo((()=>l.S=0),[])
return Bp.To((()=>()=>document.Nu("pointerup",u)),[u]),Gp.zo(jx,{ew:1,...s,
w:Gp.zo(lb.In,{UI:i.xo?i.BI:void 0,OT:i.VI,...r,y:a,DT:No(e.DT,(e=>{
"touch"!==e.Qd&&(c.S||o.FI.S||(i.HI(),c.S=1))})),WI:No(e.WI,(()=>{i.qI(),c.S=0
})),AT:No(e.AT,(()=>{l.S=1,document.Pn("pointerup",u,{rs:1})})),
gT:No(e.gT,(()=>{l.S||i.$I()})),cD:No(e.cD,i.Mb),Fi:No(e.Fi,i.Mb)})})})).re=zx
var[AM,DM]=EM("TooltipPortal",{wT:void 0})
Ux="TooltipContent",Bx=Bp.qo(((e,t)=>{
const n=DM(Ux,e.PI),{wT:r=n.wT,YD:i="top",...o}=e,s=PM(Ux,e.PI)
return Gp.zo(gb,{U_:r||s.xo,w:s.II?Gp.zo(Hx,{YD:i,...o,y:t}):Gp.zo(Vx,{YD:i,
...o,y:t})})})),Vx=Bp.qo(((e,t)=>{
const n=PM(Ux,e.PI),r=OM(Ux,e.PI),i=Bp.Wo(null),o=_o(t,i),[s,a]=Bp._o(null),{YI:l,Mb:c}=n,u=i.S,{LI:d}=r,h=Bp.Mo((()=>{
a(null),d(0)}),[d]),f=Bp.Mo(((e,t)=>{const n=e.Et,r={zs:e.$N,Us:e.FN
},i=((e,t,n=5)=>{const r=[]
switch(t){case"top":r.M({zs:e.zs-n,Us:e.Us+n},{zs:e.zs+n,Us:e.Us+n})
break
case"bottom":r.M({zs:e.zs-n,Us:e.Us-n},{zs:e.zs+n,Us:e.Us-n})
break
case"left":r.M({zs:e.zs+n,Us:e.Us-n},{zs:e.zs+n,Us:e.Us+n})
break
case"right":r.M({zs:e.zs-n,Us:e.Us-n},{zs:e.zs-n,Us:e.Us+n})}return r
})(r,((e,t)=>{
const n=Math.abs(t.Sn-e.Us),r=Math.abs(t.Ls-e.Us),i=Math.abs(t.Fs-e.zs),o=Math.abs(t.kn-e.zs)
switch(Math.an(n,r,i,o)){case o:return"left"
case i:return"right"
case n:return"top"
case r:return"bottom"
default:throw Error("unreachable")}})(r,n.Da())),o=(e=>{const t=e.q()
return t.Xo(((e,t)=>e.zs<t.zs?-1:e.zs>t.zs?1:e.Us<t.Us?-1:e.Us>t.Us?1:0)),(e=>{
if(1>=e.e)return e.q()
const t=[]
for(let r=0;r<e.e;r++){const n=e[r]
for(;t.e>=2;){const e=t[t.e-1],r=t[t.e-2]
if((e.zs-r.zs)*(n.Us-r.Us)<(e.Us-r.Us)*(n.zs-r.zs))break
t.Nc()}t.M(n)}t.Nc()
const n=[]
for(let r=e.e-1;r>=0;r--){const t=e[r]
for(;n.e>=2;){const e=n[n.e-1],r=n[n.e-2]
if((e.zs-r.zs)*(t.Us-r.Us)<(e.Us-r.Us)*(t.zs-r.zs))break
n.Nc()}n.M(t)}
return n.Nc(),1===t.e&&1===n.e&&t[0].zs===n[0].zs&&t[0].Us===n[0].Us?t:t.Gr(n)
})(t)})([...i,...(e=>{const{Sn:t,Fs:n,Ls:r,kn:i}=e
return[{zs:i,Us:t},{zs:n,Us:t},{zs:n,Us:r},{zs:i,Us:r}]})(t.Da())])
a(o),d(1)}),[d])
return Bp.To((()=>()=>h()),[h]),Bp.To((()=>{if(l&&u){
const e=e=>f(e,u),t=e=>f(e,l)
return l.Pn("pointerleave",e),u.Pn("pointerleave",t),()=>{
l.Nu("pointerleave",e),u.Nu("pointerleave",t)}}}),[l,u,f,h]),Bp.To((()=>{if(s){
const e=e=>{const t=e.Ve,n={zs:e.$N,Us:e.FN
},r=(null==l?void 0:l.qt(t))||(null==u?void 0:u.qt(t)),i=!((e,t)=>{
const{zs:n,Us:r}=e
let i=0
for(let o=0,s=t.e-1;o<t.e;s=o++){const e=t[o].zs,a=t[o].Us,l=t[s].zs,c=t[s].Us
a>r!=c>r&&(l-e)*(r-a)/(c-a)+e>n&&(i=!i)}return i})(n,s)
r?h():i&&(h(),c())}
return document.Pn("pointermove",e),()=>document.Nu("pointermove",e)}
}),[l,u,s,c,h]),Gp.zo(Hx,{...e,y:o})}))
var[IM,RM]=EM(Lx,{KI:0})
Hx=Bp.qo(((e,t)=>{
const{PI:n,w:r,Wg:i,A_:o,D_:s,...a}=e,l=PM(Ux,n),c=Dx(n),{Mb:u}=l
return Bp.To((()=>(document.Pn($x,u),()=>document.Nu($x,u))),[u]),Bp.To((()=>{
if(l.YI){const e=e=>{const t=e.Ve;(null==t?void 0:t.qt(l.YI))&&u()}
return window.Pn("scroll",e,{An:1}),()=>window.Nu("scroll",e,{An:1})}
}),[l.YI,u]),Gp.zo(hb,{ew:1,P_:0,A_:o,D_:s,I_(e){return e.Pt()},$_:u,
w:Gp.Os(Px,{OT:l.VI,...c,...a,y:t,$e:{...a.$e,
GI:"var(--radix-popper-transform-origin)",
JI:"var(--radix-popper-available-width)",
XI:"var(--radix-popper-available-height)",QI:"var(--radix-popper-anchor-width)",
ZI:"var(--radix-popper-anchor-height)"},w:[Gp.zo(ab,{w:r}),Gp.zo(IM,{Fo:n,KI:1,
w:Gp.zo(bb,{ir:l.BI,pT:"tooltip",w:i||r})})]})})
})),Bx.re=Ux,Wx="TooltipArrow",Bp.qo(((e,t)=>{const{PI:n,...r}=e,i=Dx(n)
return RM(Wx,n).KI?null:Gp.zo(Ax,{...i,...r,y:t})})).re=Wx,qx=Bx
const $M=Fx
Bp.qo((({As:e,KD:t=4,...n},r)=>Gp.zo(qx,{y:r,KD:t,
As:qo("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),
...n}))).re=qx.re,Yx=class{l(){this.zt=new Set,this.xw=this.xw.jn(this)}xw(e){
return this.zt.$(e),this.eR(),()=>{this.zt.at(e),this.tR()}}pm(){
return this.zt.Bi>0}eR(){}tR(){}
},Kx="undefined"==typeof window||"nR"in globalThis,
Gx=Symbol(),Mf=class extends Yx{l(){super(),OT(this,Tf),OT(this,Ef),OT(this,Cf),
jT(this,Cf,(e=>{if(!Kx&&window.Pn){const t=()=>e()
return window.Pn("visibilitychange",t,0),()=>{window.Nu("visibilitychange",t)}}
}))}eR(){MT(this,Ef)||this.rR(MT(this,Cf))}tR(){var e
this.pm()||(null==(e=MT(this,Ef))||e.o(this),jT(this,Ef,void 0))}rR(e){var t
jT(this,Cf,e),null==(t=MT(this,Ef))||t.o(this),jT(this,Ef,e((e=>{
"boolean"==typeof e?this.iR(e):this.gT()})))}iR(e){
MT(this,Tf)!==e&&(jT(this,Tf,e),this.gT())}gT(){const e=this.wl()
this.zt.d((t=>{t(e)}))}wl(){var e
return"boolean"==typeof MT(this,Tf)?MT(this,Tf):"hidden"!==(null==(e=globalThis.Qt)?void 0:e.oR)
}},Tf=new WeakMap,Ef=new WeakMap,Cf=new WeakMap,Jx=new Mf,Af=class extends Yx{
l(){super(),OT(this,Of,1),OT(this,jf),OT(this,Pf),jT(this,Pf,(e=>{
if(!Kx&&window.Pn){const t=()=>e(1),n=()=>e(0)
return window.Pn("online",t,0),window.Pn("offline",n,0),()=>{
window.Nu("online",t),window.Nu("offline",n)}}}))}eR(){
MT(this,jf)||this.rR(MT(this,Pf))}tR(){var e
this.pm()||(null==(e=MT(this,jf))||e.o(this),jT(this,jf,void 0))}rR(e){var t
jT(this,Pf,e),null==(t=MT(this,jf))||t.o(this),jT(this,jf,e(this.sR.jn(this)))}
sR(e){MT(this,Of)!==e&&(jT(this,Of,e),this.zt.d((t=>{t(e)})))}pl(){
return MT(this,Of)}
},Of=new WeakMap,jf=new WeakMap,Pf=new WeakMap,Xx=new Af,Qx=class extends Error{
l(e){
super("CancelledError"),this.aR=null==e?void 0:e.aR,this.lR=null==e?void 0:e.lR}
},Zx=(()=>{let e=[],t=0,n=e=>{e()},r=e=>{e()},i=e=>setTimeout(e,0)
const o=r=>{t?e.M(r):i((()=>{n(r)}))}
return{cR(o){let s
t++
try{s=o()}finally{t--,t||(()=>{const t=e
e=[],t.e&&i((()=>{r((()=>{t.d((e=>{n(e)}))}))}))})()}return s},uR(e){
return(...t)=>{o((()=>{e(...t)}))}},Du:o,dR(e){n=e},hR(e){r=e},fR(e){i=e}}
})(),If=class{l(){OT(this,Df)}Yr(){this.pR()}mR(){var e
this.pR(),"number"!=typeof(e=this.vR)||0>e||e===1/0||jT(this,Df,setTimeout((()=>{
this.yR()}),this.vR))}gR(e){this.vR=Math.qu(this.vR||0,e??(Kx?1/0:3e5))}pR(){
MT(this,Df)&&(clearTimeout(MT(this,Df)),jT(this,Df,void 0))}
},Df=new WeakMap,ek=If,Hf=class extends ek{l(e){super(),OT(this,Bf),OT(this,Rf),
OT(this,$f),
OT(this,Ff),OT(this,Lf),OT(this,zf),OT(this,Uf),jT(this,Uf,0),jT(this,zf,e.wR),
this.vf(e.Ee),
this.bR=[],jT(this,Ff,e.vo),this.nl=e.nl,this.il=e.il,jT(this,Rf,(e=>{
const t="function"==typeof e.xR?e.xR():e.xR,n=void 0!==t,r=n?"function"==typeof e.kR?e.kR():e.kR:0
return{Ft:t,NR:0,SR:n?r??Date.Wu():0,Fl:null,_R:0,TR:0,Rl:0,$l:null,ER:null,
CR:0,al:n?"success":"pending",el:"idle"}
})(this.Ee)),this.Zr=e.Zr??MT(this,Rf),this.mR()}get Bl(){return this.Ee.Bl}
get Ml(){var e
return null==(e=MT(this,Lf))?void 0:e.Ml}vf(e){this.Ee={...MT(this,zf),...e
},this.gR(this.Ee.vR)}yR(){this.bR.e||"idle"!==this.Zr.el||MT(this,Ff).Am(this)}
MR(e,t){const n=da(this.Zr.Ft,e,this.Ee)
return PT(this,Bf,Vf).o(this,{Ft:n,k:"success",SR:null==t?void 0:t.OR,
jR:null==t?void 0:t.jR}),n}_x(e,t){PT(this,Bf,Vf).o(this,{k:"setState",Zr:e,PR:t
})}Ol(e){var t,n
const r=null==(t=MT(this,Lf))?void 0:t.Ml
return null==(n=MT(this,Lf))||n.Ol(e),r?r.R(ea).yl(ea):Promise.vl()}Yr(){
super.Yr(),this.Ol({lR:1})}yp(){this.Yr(),this._x(MT(this,Rf))}ol(){
return this.bR.ws((e=>{return 0!=("function"==typeof(t=e.Ee.TD)?t(this):t)
var t}))}f_(){
return this.AR()>0?!this.ol():this.Ee.dl===Gx||this.Zr.NR+this.Zr._R===0}sl(){
return this.Zr.CR?1:this.AR()>0?this.bR.ws((e=>e.DR().sl)):void 0===this.Zr.Ft}
IR(e=0){
return this.Zr.CR||void 0===this.Zr.Ft||!((e,t)=>Math.qu(e+(t||0)-Date.Wu(),0))(this.Zr.SR,e)
}gT(){var e
const t=this.bR.Zu((e=>e.RR()))
null==t||t.$R({FR:0}),null==(e=MT(this,Lf))||e.Pl()}LR(){var e
const t=this.bR.Zu((e=>e.zR()))
null==t||t.$R({FR:0}),null==(e=MT(this,Lf))||e.Pl()}UR(e){
this.bR.ie(e)||(this.bR.M(e),this.pR(),MT(this,Ff).ap({k:"observerAdded",
hg:this,BR:e}))}VR(e){
this.bR.ie(e)&&(this.bR=this.bR.Ro((t=>t!==e)),this.bR.e||(MT(this,Lf)&&(MT(this,Uf)?MT(this,Lf).Ol({
aR:1}):MT(this,Lf).Al()),this.mR()),MT(this,Ff).ap({k:"observerRemoved",hg:this,
BR:e}))}AR(){return this.bR.e}HR(){this.Zr.CR||PT(this,Bf,Vf).o(this,{
k:"invalidate"})}WR(e,t){var n,r,i
if("idle"!==this.Zr.el)if(void 0!==this.Zr.Ft&&(null==t?void 0:t.FR))this.Ol({
lR:1})
else if(MT(this,Lf))return MT(this,Lf).Dl(),MT(this,Lf).Ml
if(e&&this.vf(e),!this.Ee.dl){const e=this.bR.Zu((e=>e.Ee.dl))
e&&this.vf(e.Ee)}const o=new AbortController,s=e=>{
Object.defineProperty(e,"Yl",{n:1,t:()=>(jT(this,Uf,1),o.Yl)})},a={Ul:t,
Ee:this.Ee,nl:this.nl,Zr:this.Zr,Ql:()=>{const e=pa(this.Ee,t),n={nl:this.nl,
Bl:this.Bl}
return s(n),jT(this,Uf,0),this.Ee.Xl?this.Ee.Xl(e,n,this):e(n)}}
s(a),null==(n=this.Ee.zw)||n.zl(a,this),jT(this,$f,this.Zr),"idle"!==this.Zr.el&&this.Zr.ER===(null==(r=a.Ul)?void 0:r.Bl)||PT(this,Bf,Vf).o(this,{
k:"fetch",Bl:null==(i=a.Ul)?void 0:i.Bl})
const l=e=>{var t,n,r,i
ya(e)&&e.lR||PT(this,Bf,Vf).o(this,{k:"error",Fl:e
}),ya(e)||(null==(n=(t=MT(this,Ff).qR).Ye)||n.o(t,e,this),
null==(i=(r=MT(this,Ff).qR).YR)||i.o(r,this.Zr.Ft,e,this)),this.mR()}
return jT(this,Lf,ga({hl:null==t?void 0:t.hl,_l:a.Ql,jl:o.jl.jn(o),kl:e=>{
var t,n,r,i
if(void 0!==e){try{this.MR(e)}catch(o){return void l(o)}
null==(n=(t=MT(this,Ff).qR).kl)||n.o(t,e,this),
null==(i=(r=MT(this,Ff).qR).YR)||i.o(r,e,this.Zr.Fl,this),this.mR()
}else l(Error(this.il+" data is undefined"))},Ye:l,Cl:(e,t)=>{
PT(this,Bf,Vf).o(this,{k:"failed",KR:e,Fl:t})},Nl:()=>{PT(this,Bf,Vf).o(this,{
k:"pause"})},Sl:()=>{PT(this,Bf,Vf).o(this,{k:"continue"})},Tl:a.Ee.Tl,
El:a.Ee.El,bl:a.Ee.bl,xl(){return 1}})),MT(this,Lf).rn()}
},Rf=new WeakMap,$f=new WeakMap,
Ff=new WeakMap,Lf=new WeakMap,zf=new WeakMap,Uf=new WeakMap,
Bf=new WeakSet,Vf=function(e){this.Zr=(t=>{switch(e.k){case"failed":return{...t,
Rl:e.KR,$l:e.Fl}
case"pause":return{...t,el:"paused"}
case"continue":return{...t,el:"fetching"}
case"fetch":return{...t,...wa(t.Ft,this.Ee),ER:e.Bl??null}
case"success":return{...t,Ft:e.Ft,NR:t.NR+1,SR:e.SR??Date.Wu(),Fl:null,CR:0,
al:"success",...!e.jR&&{el:"idle",Rl:0,$l:null}}
case"error":const n=e.Fl
return ya(n)&&n.aR&&MT(this,$f)?{...MT(this,$f),el:"idle"}:{...t,Fl:n,_R:t._R+1,
TR:Date.Wu(),Rl:t.Rl+1,$l:n,el:"idle",al:"error"}
case"invalidate":return{...t,CR:1}
case"setState":return{...t,...e.Zr}}})(this.Zr),Zx.cR((()=>{this.bR.d((e=>{
e.GR()})),MT(this,Ff).ap({hg:this,k:"updated",Fr:e})}))
},tk=Hf,qf=class extends Yx{l(e={}){
super(),OT(this,Wf),this.qR=e,jT(this,Wf,new Map)}JR(e,t,n){
const r=t.nl,i=t.il??ia(r,t)
let o=this.t(i)
return o||(o=new tk({vo:this,nl:r,il:i,Ee:e.XR(t),Zr:n,wR:e.QR(r)}),this.$(o)),o
}$(e){MT(this,Wf).On(e.il)||(MT(this,Wf).te(e.il,e),this.ap({k:"added",hg:e}))}
Am(e){const t=MT(this,Wf).t(e.il)
t&&(e.Yr(),t===e&&MT(this,Wf).at(e.il),this.ap({k:"removed",hg:e}))}$u(){
Zx.cR((()=>{this.ZR().d((e=>{this.Am(e)}))}))}t(e){return MT(this,Wf).t(e)}ZR(){
return[...MT(this,Wf).Lo()]}Zu(e){const t={Za:1,...e}
return this.ZR().Zu((e=>na(t,e)))}e$(e={}){const t=this.ZR()
return Object.h(e).e>0?t.Ro((t=>na(e,t))):t}ap(e){Zx.cR((()=>{this.zt.d((t=>{
t(e)}))}))}gT(){Zx.cR((()=>{this.ZR().d((e=>{e.gT()}))}))}LR(){Zx.cR((()=>{
this.ZR().d((e=>{e.LR()}))}))}},Wf=new WeakMap,nk=qf,Qf=class extends ek{l(e){
super(),
OT(this,Jf),OT(this,Yf),OT(this,Kf),OT(this,Gf),this.Ll=e.Ll,jT(this,Kf,e.t$),
jT(this,Yf,[]),this.Zr=e.Zr||{p:void 0,Ft:void 0,Fl:null,KR:0,n$:null,r$:0,
al:"idle",i$:void 0,o$:0},this.vf(e.Ee),this.mR()}vf(e){
this.Ee=e,this.gR(this.Ee.vR)}get Bl(){return this.Ee.Bl}UR(e){
MT(this,Yf).ie(e)||(MT(this,Yf).M(e),this.pR(),MT(this,Kf).ap({
k:"observerAdded",s$:this,BR:e}))}VR(e){
jT(this,Yf,MT(this,Yf).Ro((t=>t!==e))),this.mR(),MT(this,Kf).ap({
k:"observerRemoved",s$:this,BR:e})}yR(){
MT(this,Yf).e||("pending"===this.Zr.al?this.mR():MT(this,Kf).Am(this))}Pl(){
var e
return(null==(e=MT(this,Gf))?void 0:e.Pl())??this.a$(this.Zr.i$)}async a$(e){
var t,n,r,i,o,s,a,l,c,u,d,h,f,p,m,v,y,g,w,b
jT(this,Gf,ga({
_l:()=>this.Ee.l$?this.Ee.l$(e):Promise.fl(Error("No mutationFn found")),
Cl:(e,t)=>{PT(this,Jf,Xf).o(this,{k:"failed",KR:e,Fl:t})},Nl:()=>{
PT(this,Jf,Xf).o(this,{k:"pause"})},Sl:()=>{PT(this,Jf,Xf).o(this,{k:"continue"
})},Tl:this.Ee.Tl??0,El:this.Ee.El,bl:this.Ee.bl,xl:()=>MT(this,Kf).xl(this)}))
const x="pending"===this.Zr.al,k=!MT(this,Gf).Il()
try{if(!x){PT(this,Jf,Xf).o(this,{k:"pending",i$:e,r$:k
}),await(null==(n=(t=MT(this,Kf).qR).c$)?void 0:n.o(t,e,this))
const o=await(null==(i=(r=this.Ee).c$)?void 0:i.o(r,e))
o!==this.Zr.p&&PT(this,Jf,Xf).o(this,{k:"pending",p:o,i$:e,r$:k})}
const f=await MT(this,Gf).rn()
return await(null==(s=(o=MT(this,Kf).qR).kl)?void 0:s.o(o,f,e,this.Zr.p,this)),await(null==(l=(a=this.Ee).kl)?void 0:l.o(a,f,e,this.Zr.p)),
await(null==(u=(c=MT(this,Kf).qR).YR)?void 0:u.o(c,f,null,this.Zr.i$,this.Zr.p,this)),
await(null==(h=(d=this.Ee).YR)?void 0:h.o(d,f,null,e,this.Zr.p)),
PT(this,Jf,Xf).o(this,{k:"success",Ft:f}),f}catch(N){try{
throw await(null==(p=(f=MT(this,Kf).qR).Ye)?void 0:p.o(f,N,e,this.Zr.p,this)),
await(null==(v=(m=this.Ee).Ye)?void 0:v.o(m,N,e,this.Zr.p)),
await(null==(g=(y=MT(this,Kf).qR).YR)?void 0:g.o(y,void 0,N,this.Zr.i$,this.Zr.p,this)),
await(null==(b=(w=this.Ee).YR)?void 0:b.o(w,void 0,N,e,this.Zr.p)),N}finally{
PT(this,Jf,Xf).o(this,{k:"error",Fl:N})}}finally{MT(this,Kf).u$(this)}}
},Yf=new WeakMap,Kf=new WeakMap,Gf=new WeakMap,Jf=new WeakSet,Xf=function(e){
this.Zr=(t=>{switch(e.k){case"failed":return{...t,KR:e.KR,n$:e.Fl}
case"pause":return{...t,r$:1}
case"continue":return{...t,r$:0}
case"pending":return{...t,p:e.p,Ft:void 0,KR:0,n$:null,Fl:null,r$:e.r$,
al:"pending",i$:e.i$,o$:Date.Wu()}
case"success":return{...t,Ft:e.Ft,KR:0,n$:null,Fl:null,al:"success",r$:0}
case"error":return{...t,Ft:void 0,Fl:e.Fl,KR:t.KR+1,n$:e.Fl,r$:0,al:"error"}}
})(this.Zr),Zx.cR((()=>{MT(this,Yf).d((t=>{t.d$(e)})),MT(this,Kf).ap({s$:this,
k:"updated",Fr:e})}))},rk=Qf,tp=class extends Yx{l(e={}){
super(),OT(this,Zf),OT(this,ep),
this.qR=e,jT(this,Zf,new Map),jT(this,ep,Date.Wu())}JR(e,t,n){const r=new rk({
t$:this,Ll:++AT(this,ep).dx,Ee:e.h$(t),Zr:n})
return this.$(r),r}$(e){const t=ba(e),n=MT(this,Zf).t(t)??[]
n.M(e),MT(this,Zf).te(t,n),this.ap({k:"added",s$:e})}Am(e){var t
const n=ba(e)
if(MT(this,Zf).On(n)){const r=null==(t=MT(this,Zf).t(n))?void 0:t.Ro((t=>t!==e))
r&&(0===r.e?MT(this,Zf).at(n):MT(this,Zf).te(n,r))}this.ap({k:"removed",s$:e})}
xl(e){var t
const n=null==(t=MT(this,Zf).t(ba(e)))?void 0:t.Zu((e=>"pending"===e.Zr.al))
return!n||n===e}u$(e){var t
const n=null==(t=MT(this,Zf).t(ba(e)))?void 0:t.Zu((t=>t!==e&&t.Zr.r$))
return(null==n?void 0:n.Pl())??Promise.vl()}$u(){Zx.cR((()=>{this.ZR().d((e=>{
this.Am(e)}))}))}ZR(){return[...MT(this,Zf).Lo()].fT()}Zu(e){const t={Za:1,...e}
return this.ZR().Zu((e=>ra(t,e)))}e$(e={}){return this.ZR().Ro((t=>ra(e,t)))}
ap(e){Zx.cR((()=>{this.zt.d((t=>{t(e)}))}))}f$(){
const e=this.ZR().Ro((e=>e.Zr.r$))
return Zx.cR((()=>Promise.np(e.Oo((e=>e.Pl().yl(ea))))))}
},Zf=new WeakMap,ep=new WeakMap,ik=tp,up=class{l(e={}){
OT(this,np),OT(this,rp),OT(this,ip),
OT(this,op),OT(this,sp),OT(this,ap),OT(this,lp),
OT(this,cp),jT(this,np,e.p$||new nk),
jT(this,rp,e.t$||new ik),jT(this,ip,e.wR||{}),
jT(this,op,new Map),jT(this,sp,new Map),jT(this,ap,0)}tf(){
AT(this,ap).dx++,1===MT(this,ap)&&(jT(this,lp,Jx.xw((async e=>{
e&&(await this.f$(),MT(this,np).gT())}))),jT(this,cp,Xx.xw((async e=>{
e&&(await this.f$(),MT(this,np).LR())}))))}nf(){var e,t
AT(this,ap).dx--,0===MT(this,ap)&&(null==(e=MT(this,lp))||e.o(this),jT(this,lp,void 0),
null==(t=MT(this,cp))||t.o(this),jT(this,cp,void 0))}m$(e){
return MT(this,np).e$({...e,el:"fetching"}).e}v$(e){return MT(this,rp).e$({...e,
al:"pending"}).e}y$(e){var t
const n=this.XR({nl:e})
return null==(t=MT(this,np).t(n.il))?void 0:t.Zr.Ft}g$(e){const t=this.y$(e.nl)
if(void 0===t)return this.w$(e)
{const n=this.XR(e),r=MT(this,np).JR(this,n)
return e.b$&&r.IR(ta(n.x$,r))&&this.k$(n),Promise.vl(t)}}N$(e){
return MT(this,np).e$(e).Oo((({nl:e,Zr:t})=>[e,t.Ft]))}S$(e,t,n){
const r=this.XR({nl:e
}),i=MT(this,np).t(r.il),o=((e,t)=>"function"==typeof e?e(t):e)(t,null==i?void 0:i.Zr.Ft)
if(void 0!==o)return MT(this,np).JR(this,r).MR(o,{...n,jR:1})}_$(e,t,n){
return Zx.cR((()=>MT(this,np).e$(e).Oo((({nl:e})=>[e,this.S$(e,t,n)]))))}T$(e){
var t
const n=this.XR({nl:e})
return null==(t=MT(this,np).t(n.il))?void 0:t.Zr}E$(e){const t=MT(this,np)
Zx.cR((()=>{t.e$(e).d((e=>{t.Am(e)}))}))}C$(e,t){const n=MT(this,np),r={
k:"active",...e}
return Zx.cR((()=>(n.e$(e).d((e=>{e.yp()})),this.M$(r,t))))}O$(e={},t={}){
const n={aR:1,...t},r=Zx.cR((()=>MT(this,np).e$(e).Oo((e=>e.Ol(n)))))
return Promise.np(r).R(ea).yl(ea)}j$(e={},t={}){return Zx.cR((()=>{
if(MT(this,np).e$(e).d((e=>{e.HR()})),"none"===e.P$)return Promise.vl()
const n={...e,k:e.P$??e.k??"active"}
return this.M$(n,t)}))}M$(e={},t){const n={...t,FR:(null==t?void 0:t.FR)??1
},r=Zx.cR((()=>MT(this,np).e$(e).Ro((e=>!e.f_())).Oo((e=>{let t=e.WR(void 0,n)
return n.A$||(t=t.yl(ea)),"paused"===e.Zr.el?Promise.vl():t}))))
return Promise.np(r).R(ea)}w$(e){const t=this.XR(e)
void 0===t.Tl&&(t.Tl=0)
const n=MT(this,np).JR(this,t)
return n.IR(ta(t.x$,n))?n.WR(t):Promise.vl(n.Zr.Ft)}k$(e){
return this.w$(e).R(ea).yl(ea)}D$(e){return e.zw=xa(e.Hl),this.w$(e)}I$(e){
return this.D$(e).R(ea).yl(ea)}R$(e){return e.zw=xa(e.Hl),this.g$(e)}f$(){
return Xx.pl()?MT(this,rp).f$():Promise.vl()}$$(){return MT(this,np)}F$(){
return MT(this,rp)}L$(){return MT(this,ip)}z$(e){jT(this,ip,e)}U$(e,t){
MT(this,op).te(oa(e),{nl:e,wR:t})}QR(e){const t=[...MT(this,op).Lo()]
let n={}
return t.d((t=>{sa(e,t.nl)&&(n={...n,...t.wR})})),n}B$(e,t){
MT(this,sp).te(oa(e),{ll:e,wR:t})}V$(e){const t=[...MT(this,sp).Lo()]
let n={}
return t.d((t=>{sa(e,t.ll)&&(n={...n,...t.wR})})),n}XR(e){if(e.H$)return e
const t={...MT(this,ip).W$,...this.QR(e.nl),...e,H$:1}
return t.il||(t.il=ia(t.nl,t)),void 0===t.q$&&(t.q$="always"!==t.bl),void 0===t.A$&&(t.A$=!!t.Y$),
!t.bl&&t.Xl&&(t.bl="offlineFirst"),1!=t.TD&&t.dl===Gx&&(t.TD=0),t}h$(e){
return(null==e?void 0:e.H$)?e:{...MT(this,ip).K$,
...(null==e?void 0:e.ll)&&this.V$(e.ll),...e,H$:1}}$u(){
MT(this,np).$u(),MT(this,rp).$u()}
},np=new WeakMap,rp=new WeakMap,ip=new WeakMap,
op=new WeakMap,sp=new WeakMap,ap=new WeakMap,
lp=new WeakMap,cp=new WeakMap,ok=up,
sk=Bp.$o(void 0),ak=({G$:e,w:t})=>(Bp.To((()=>(e.tf(),()=>{e.nf()
})),[e]),Gp.zo(sk.Uo,{r:e,w:t
})),(aT=lk||(lk={})).Qc="POP",aT.Tu="PUSH",aT.Cu="REPLACE"
const FM="popstate"
;(lT=ck||(ck={})).Ft="data",lT.J$="deferred",lT.X$="redirect",lT.Fl="error"
const LM=/^:[\w-]+$/,zM=3,UM=2,BM=1,VM=10,HM=-2,WM=e=>"*"===e,qM=e=>e.A("/").E(/\/\/+/g,"/"),YM=e=>e.E(/\/+$/,"").E(/^\/*/,"/"),KM=e=>e&&"?"!==e?e.vc("?")?e:"?"+e:"",GM=e=>e&&"#"!==e?e.vc("#")?e:"#"+e:"",JM=["post","put","patch","delete"]
new Set(JM)
const XM=["get",...JM]
new Set(XM)
const QM=Bp.$o(null),ZM=Bp.$o(null),eO=Bp.$o(null),tO=Bp.$o(null),nO=Bp.$o({
cu:null,va:[],Tc:0}),rO=Bp.$o(null),iO=Bp.Ui(Ga,null)
class oO extends Bp.lu{l(e){super(e),this.Zr={Jt:e.Jt,uu:e.uu,Fl:e.Fl}}
static hi(e){return{Fl:e}}static ii(e,t){
return t.Jt!==e.Jt||"idle"!==t.uu&&"idle"===e.uu?{Fl:e.Fl,Jt:e.Jt,uu:e.uu}:{
Fl:void 0!==e.Fl?e.Fl:t.Fl,Jt:t.Jt,uu:e.uu||t.uu}}fi(e,t){}ae(){
return void 0!==this.Zr.Fl?Bp.Ui(nO.Uo,{r:this.f.Wc},Bp.Ui(rO.Uo,{r:this.Zr.Fl,
w:this.f.du})):this.f.w}}
uk=(e=>(e.Q$="useBlocker",e.Z$="useRevalidator",e.Cc="useNavigate",
e))(uk||{}),dk=(e=>(e.Q$="useBlocker",e.eF="useLoaderData",e.tF="useActionData",
e.Fc="useRouteError",
e.nF="useNavigation",e.rF="useRouteLoaderData",e.iF="useMatches",
e.Z$="useRevalidator",
e.Cc="useNavigate",e.oF="useRouteId",e))(dk||{}),new Promise((()=>{}))
const sO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"]
try{window.__reactRouterVersion="6"}catch(XF){}
const aO=IT.Kx,lO="undefined"!=typeof window&&void 0!==window.Qt&&void 0!==window.Qt.Ui,cO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uO=Bp.qo(((e,t)=>{
let n,{Fi:r,$c:i,sF:o,E:s,Zr:a,Ve:l,Jc:c,aF:u,lF:d}=e,h=((e,t)=>{var n,r,i,o
if(null==e)return{}
for(n={},r=Object.h(e),o=0;o<r.e;o++)i=r[o],0>t.Fe(i)&&(n[i]=e[i])
return n})(e,sO),{jc:f}=Bp.Bo(eO),p=0
if("string"==typeof c&&cO.K(c)&&(n=c,lO))try{
let e=new URL(window.Jt.Gt),t=c.vc("//")?new URL(e.cF+c):new URL(c),n=Fa(t.rc,f)
t.gu===e.gu&&null!=n?c=n+t.ic+t.oc:p=1}catch(XF){}let m=((e,t)=>{
let{$c:n}=void 0===t?{}:t
Va()||_a(0)
let{jc:r,Ac:i}=Bp.Bo(eO),{oc:o,rc:s,ic:a}=Ka(e,{$c:n}),l=s
return"/"!==r&&(l="/"===s?r:qM([r,s])),i.Su({rc:l,ic:a,oc:o})})(c,{$c:i
}),v=((e,t)=>{
let{Ve:n,E:r,Zr:i,aF:o,$c:s,lF:a}=void 0===t?{}:t,l=qa(),c=Ha(),u=Ka(e,{$c:s})
return Bp.Mo((t=>{
if(((e,t)=>!(0!==e.In||t&&"_self"!==t||(e=>!!(e.Hn||e.Vn||e.Bn||e.LN))(e)))(t,n)){
t.Pt()
let n=void 0!==r?r:Ma(c)===Ma(u)
l(e,{E:n,Zr:i,aF:o,$c:s,lF:a})}}),[c,l,u,r,i,n,e,o,s,a])})(c,{E:s,Zr:a,Ve:l,
aF:u,$c:i,lF:d})
return Bp.Ui("a",rl({},h,{Gt:n||m,Fi:p||o?r:e=>{r&&r(e),e.Mt||v(e)},y:t,Ve:l}))
}))
;(cT=hk||(hk={})).uF="useScrollRestoration",cT.dF="useSubmit",cT.hF="useSubmitFetcher",
cT.fF="useFetcher",
cT.pF="useViewTransitionState",(uT=fk||(fk={})).fF="useFetcher",
uT.mF="useFetchers",uT.uF="useScrollRestoration",pk="undefined"!=typeof Element,
mk="function"==typeof Map,
vk="function"==typeof Set,yk="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView,
gk=(e,t)=>{try{return ol(e,t)}catch(n){
if((n.ci||"").Q(/stack|recursion/i))return 0
throw n}}
const dO=t(gk)
wk=(e,t,n,r,i,o,s,a)=>{var l,c,u
if(!e)throw void 0===t?l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."):(c=[n,r,i,o,s,a],
u=0,(l=Error(t.E(/%s/g,(()=>c[u++])))).oe="Invariant Violation"),l.vF=1,l}
const hO=t(wk),fO=t(((e,t,n,r)=>{var i,o,s,a,l,c,u,d=n?n.o(r,e,t):void 0
if(void 0!==d)return!!d
if(e===t)return 1
if("object"!=typeof e||!e||"object"!=typeof t||!t)return 0
if(i=Object.h(e),o=Object.h(t),i.e!==o.e)return 0
for(s={}.s.jn(t),a=0;a<i.e;a++){if(!s(l=i[a]))return 0
if(c=e[l],u=t[l],0==(d=n?n.o(r,c,u,l):void 0)||void 0===d&&c!==u)return 0}
return 1}))
xk={gx:["amphtml","canonical","alternate"]},kk={k:["application/ld+json"]},Nk={
yF:"",oe:["generator","robots","description"],
ub:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]
},
Sk=Object.Lo(bk=(e=>(e.gF="base",e.wF="body",e.bF="head",e.xF="html",e.kF="link",
e.NF="meta",
e.SF="noscript",e._F="script",e.TF="style",e.EF="title",e.CF="Symbol(react.fragment)",
e))(bk||{})),Tk=Object.Ou(_k={MF:"accessKey",yF:"charSet",BT:"className",
OF:"contentEditable",jF:"contextMenu",PF:"httpEquiv",AF:"itemProp",DF:"tabIndex"
}).Ao(((e,[t,n])=>(e[n]=t,e)),{}),Ek="data-rh",Ck=(e,t)=>{
for(let n=e.e-1;n>=0;n-=1){const r=e[n]
if({}.s.o(r,t))return r[t]}return null},Mk=e=>{let t=Ck(e,"title")
const n=Ck(e,"titleTemplate")
if(Array.isArray(t)&&(t=t.A("")),n&&t)return n.E(/%s/g,(()=>t))
const r=Ck(e,"defaultTitle")
return t||r||void 0
},Ok=e=>Ck(e,"onChangeClientState")||(()=>{}),jk=(e,t)=>t.Ro((t=>void 0!==t[e])).Oo((t=>t[e])).Ao(((e,t)=>({
...e,...t
})),{}),Pk=(e,t)=>t.Ro((e=>void 0!==e.gN)).Oo((e=>e.gN)).Od().Ao(((t,n)=>{
if(!t.e){const r=Object.h(n)
for(let i=0;i<r.e;i+=1){const o=r[i].Y()
if(-1!==e.Fe(o)&&n[o])return t.Gr(n)}}return t
}),[]),Ak=()=>console&&"function"==typeof console.warn&&void 0,Dk=(e,t,n)=>{
const r={}
return n.Ro((t=>Array.isArray(t[e])?1:(void 0!==t[e]&&Ak(t[e]),0))).Oo((t=>t[e])).Od().Ao(((e,n)=>{
const i={}
n.Ro((e=>{let n
const o=Object.h(e)
for(let r=0;r<o.e;r+=1){const i=o[r],s=i.Y()
;-1===t.Fe(s)||"rel"===n&&"canonical"===e[n].Y()||"rel"===s&&"stylesheet"===e[s].Y()||(n=s),
-1===t.Fe(i)||"innerHTML"!==i&&"cssText"!==i&&"itemprop"!==i||(n=i)}
if(!n||!e[n])return 0
const s=e[n].Y()
return r[n]||(r[n]={}),i[n]||(i[n]={}),r[n][s]?0:(i[n][s]=1,1)
})).Od().d((t=>e.M(t)))
const o=Object.h(i)
for(let t=0;t<o.e;t+=1){const e=o[t],n={...r[e],...i[e]}
r[e]=n}return e}),[]).Od()},Ik=(e,t)=>{
if(Array.isArray(e)&&e.e)for(let n=0;n<e.e;n+=1)if(e[n][t])return 1
return 0},Rk=e=>({IF:Pk(["href"],e),RF:jk("bodyAttributes",e),$F:Ck(e,"defer"),
rg:Ck(e,"encodeSpecialCharacters"),FF:jk("htmlAttributes",e),
LF:Dk("link",["rel","href"],e),
zF:Dk("meta",["name","charset","http-equiv","property","itemprop"],e),
UF:Dk("noscript",["innerHTML"],e),BF:Ok(e),
VF:Dk("script",["src","innerHTML"],e),HF:Dk("style",["cssText"],e),js:Mk(e),
WF:jk("titleAttributes",e),qF:Ik(e,"prioritizeSeoTags")
}),$k=e=>Array.isArray(e)?e.A(""):e,Fk=(e,t)=>{const n=Object.h(e)
for(let r=0;r<n.e;r+=1)if(t[n[r]]&&t[n[r]].ie(e[n[r]]))return 1
return 0
},Lk=(e,t)=>Array.isArray(e)?e.Ao(((e,n)=>(Fk(n,t)?e.pt.M(n):e.a.M(n),e)),{
pt:[],a:[]}):{a:e,pt:[]},zk=(e,t)=>({...e,[t]:void 0
}),Uk=["noscript","script","style"],
Bk=(e,t=1)=>0==t?e+"":(e+"").E(/&/g,"&amp;").E(/</g,"&lt;").E(/>/g,"&gt;").E(/"/g,"&quot;").E(/'/g,"&#x27;"),
Vk=e=>Object.h(e).Ao(((t,n)=>{const r=void 0!==e[n]?`${n}="${e[n]}"`:""+n
return t?`${t} ${r}`:r}),""),Hk=(e,t,n,r)=>{const i=Vk(n),o=$k(t)
return i?`<${e} ${Ek}="true" ${i}>${Bk(o,r)}</${e}>`:`<${e} ${Ek}="true">${Bk(o,r)}</${e}>`
},Wk=(e,t,n=1)=>t.Ao(((t,r)=>{
const i=r,o=Object.h(i).Ro((e=>!("innerHTML"===e||"cssText"===e))).Ao(((e,t)=>{
const r=void 0===i[t]?t:`${t}="${Bk(i[t],n)}"`
return e?`${e} ${r}`:r}),""),s=i.zi||i.ZP||"",a=-1===Uk.Fe(e)
return`${t}<${e} ${Ek}="true" ${o}${a?"/>":`>${s}</${e}>`}`
}),""),qk=(e,t={})=>Object.h(e).Ao(((t,n)=>(t[_k[n]||n]=e[n],
t)),t),Yk=(e,t,n)=>{const r=qk(n,{g:t,[Ek]:1})
return[DT.Ui("title",r,t)]},Kk=(e,t)=>t.Oo(((t,n)=>{const r={g:n,[Ek]:1}
return Object.h(t).d((e=>{const n=_k[e]||e
if("innerHTML"===n||"cssText"===n){const e=t.zi||t.ZP
r.je={ze:e}}else r[n]=t[e]})),DT.Ui(e,r)})),Gk=(e,t,n=1)=>{switch(e){
case"title":return{YF(){return Yk(0,t.js,t.WF)},C(){return Hk(e,t.js,t.WF,n)}}
case"bodyAttributes":case"htmlAttributes":return{YF(){return qk(t)},C(){
return Vk(t)}}
default:return{YF(){return Kk(e,t)},C(){return Wk(e,t,n)}}}
},Jk=({zF:e,LF:t,VF:n,rg:r})=>{const i=Lk(e,Nk),o=Lk(t,xk),s=Lk(n,kk)
return{KF:{YF(){
return[...Kk("meta",i.pt),...Kk("link",o.pt),...Kk("script",s.pt)]},C(){
return`${Gk("meta",i.pt,r)} ${Gk("link",o.pt,r)} ${Gk("script",s.pt,r)}`}},
zF:i.a,LF:o.a,VF:s.a}},Xk=e=>{
const{IF:t,RF:n,rg:r=1,FF:i,UF:o,HF:s,js:a="",WF:l,qF:c}=e
let{LF:u,zF:d,VF:h}=e,f={YF(){},C(){return""}}
return c&&({KF:f,LF:u,zF:d,VF:h}=Jk(e)),{pt:f,gN:Gk("base",t,r),
RF:Gk("bodyAttributes",n,r),FF:Gk("htmlAttributes",i,r),TN:Gk("link",u,r),
Bl:Gk("meta",d,r),GF:Gk("noscript",o,r),JF:Gk("script",h,r),$e:Gk("style",s,r),
js:Gk("title",{js:a,WF:l},r)}
},Qk=[],Zk=!("undefined"==typeof window||!window.Qt||!window.Qt.Ui),eN=class{
l(e,t){
ET(this,"instances",[]),ET(this,"canUseDOM",Zk),ET(this,"context"),ET(this,"value",{
XF:e=>{this.p.QF=e},ZF:{t:()=>this.eL?Qk:this.tL,$:e=>{(this.eL?Qk:this.tL).M(e)
},Am:e=>{const t=(this.eL?Qk:this.tL).Fe(e);(this.eL?Qk:this.tL).Eo(t,1)}}
}),this.p=e,this.eL=t||0,t||(e.QF=Xk({IF:[],RF:{},nL:1,FF:{},LF:[],zF:[],UF:[],
VF:[],HF:[],js:"",WF:{}}))}},tN={},nN=DT.$o(tN),dp=class extends Bp.lu{l(e){
super(e),ET(this,"helmetData"),this.rL=new eN(this.f.p||{},dp.eL)}ae(){
return DT.Ui(nN.Uo,{r:this.rL.r},this.f.w)}
},ET(dp,"canUseDOM",Zk),rN=dp,iN=(e,t)=>{
const n=document.ch||document.querySelector("head"),r=n.Jo(`${e}[${Ek}]`),i=[].q.o(r),o=[]
let s
return t&&t.e&&t.d((t=>{const n=document.Ui(e)
for(const e in t)if({}.s.o(t,e))if("innerHTML"===e)n.zi=t.zi
else if("cssText"===e)n.QP?n.QP.ZP=t.ZP:n.Yi(document.Wi(t.ZP))
else{const r=e,i=void 0===t[r]?"":t[r]
n.J(e,i)}n.J(Ek,"true"),i.ws(((e,t)=>(s=t,n.iL(e))))?i.Eo(s,1):o.M(n)
})),i.d((e=>{var t
return null==(t=e.We)?void 0:t.Yn(e)})),o.d((e=>n.Yi(e))),{oL:i,sL:o}
},oN=(e,t)=>{const n=document.getElementsByTagName(e)[0]
if(!n)return
const r=n.Is(Ek),i=r?r.ne(","):[],o=[...i],s=Object.h(t)
for(const a of s){const e=t[a]||""
n.Is(a)!==e&&n.J(a,e),-1===i.Fe(a)&&i.M(a)
const r=o.Fe(a);-1!==r&&o.Eo(r,1)}for(let a=o.e-1;a>=0;a-=1)n.G(o[a])
i.e===o.e?n.G(Ek):n.Is(Ek)!==s.A(",")&&n.J(Ek,s.A(","))},sN=(e,t)=>{
void 0!==e&&document.js!==e&&(document.js=$k(e)),oN("title",t)},aN=(e,t)=>{
const{IF:n,RF:r,FF:i,LF:o,zF:s,UF:a,BF:l,VF:c,HF:u,js:d,WF:h}=e
oN("body",r),oN("html",i),sN(d,h)
const f={IF:iN("base",n),LF:iN("link",o),zF:iN("meta",s),UF:iN("noscript",a),
VF:iN("script",c),HF:iN("style",u)},p={},m={}
Object.h(f).d((e=>{const{sL:t,oL:n}=f[e]
t.e&&(p[e]=t),n.e&&(m[e]=f[e].oL)})),t&&t(),l(e,p,m)},lN=null,cN=e=>{
lN&&cancelAnimationFrame(lN),e.$F?lN=requestAnimationFrame((()=>{aN(e,(()=>{
lN=null}))})):(aN(e),lN=null)},uN=class extends Bp.lu{l(){
super(...arguments),ET(this,"rendered",0)}Jr(e){return!fO(e,this.f)}ki(){
this.aL()}Ji(){const{ZF:e}=this.f.p
e.Am(this),this.aL()}aL(){const{ZF:e,XF:t}=this.f.p
let n=null
const r=Rk(e.t().Oo((e=>{const t={...e.f}
return delete t.p,t})))
rN.eL?cN(r):Xk&&(n=Xk(r)),t(n)}lL(){if(this.cL)return
this.cL=1
const{ZF:e}=this.f.p
e.$(this),this.aL()}ae(){return this.lL(),null}},hp=class extends Bp.lu{Jr(e){
return!dO(zk(this.f,"helmetData"),zk(e,"helmetData"))}uL(e,t){if(!t)return null
switch(e.k){case"script":case"noscript":return{zi:t}
case"style":return{ZP:t}
default:
throw Error(`<${e.k} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
}}dL(e,t,n,r){return{...t,[e.k]:[...t[e.k]||[],{...n,...this.uL(e,r)}]}}
hL(e,t,n,r){switch(e.k){case"title":return{...t,[e.k]:r,WF:{...n}}
case"body":return{...t,RF:{...n}}
case"html":return{...t,FF:{...n}}
default:return{...t,[e.k]:{...n}}}}fL(e,t){let n={...t}
return Object.h(e).d((t=>{n={...n,[t]:e[t]}})),n}pL(e,t){
return hO(Sk.ws((t=>e.k===t)),"function"==typeof e.k?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Sk.A(", ")} are allowed. Helmet does not support rendering <${e.k}> elements. Refer to our API for more information.`),
hO(!t||"string"==typeof t||Array.isArray(t)&&!t.ws((e=>"string"!=typeof e)),`Helmet expects a string as a child of <${e.k}>. Did you forget to wrap your children in braces? ( <${e.k}>{\`\`}</${e.k}> ) Refer to our API for more information.`),
1}mL(e,t){let n={}
return DT.fu.d(e,(e=>{if(!e||!e.f)return
const{w:r,...i}=e.f,o=Object.h(i).Ao(((e,t)=>(e[Tk[t]||t]=i[t],e)),{})
let{k:s}=e
switch("symbol"==typeof s?s=s.C():this.pL(e,r),s){case"Symbol(react.fragment)":
t=this.mL(r,t)
break
case"link":case"meta":case"noscript":case"script":case"style":n=this.dL(e,n,o,r)
break
default:t=this.hL(e,t,o,r)}})),this.fL(n,t)}ae(){const{w:e,...t}=this.f
let n={...t},{rL:r}=t
return e&&(n=this.mL(e,n)),!r||r instanceof eN||(r=new eN(r.p,1),delete n.rL),r?DT.Ui(uN,{
...n,p:r.r}):DT.Ui(nN.Bx,null,(e=>DT.Ui(uN,{...n,p:e})))}
},ET(hp,"defaultProps",{$F:1,nL:1,qF:0}),dN=hp
const pO=Bp.$o({}),mO="undefined"!=typeof window,vO=mO?Bp._c:Bp.To,yO=Bp.$o(null),gO=(e,t,n)=>n>t?t:e>n?e:n,wO={},bO=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.K(e),xO=e=>/^0[^.\s]+$/u.K(e),kO=e=>e,NO=(e,t)=>n=>t(e(n)),SO=(...e)=>e.Ao(NO),_O=(e,t,n)=>{
const r=t-e
return 0===r?1:(n-e)/r}
class TO{l(){this.vL=[]}$(e){return al(this.vL,e),()=>ll(this.vL,e)}ap(e,t,n){
const r=this.vL.e
if(r)if(1===r)this.vL[0](e,t,n)
else for(let i=0;r>i;i++){const r=this.vL[i]
r&&r(e,t,n)}}yL(){return this.vL.e}$u(){this.vL.e=0}}
const EO=e=>1e3*e,CO=e=>e/1e3,MO=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,OO=e=>t=>t>.5?(2-e(2*(1-t)))/2:e(2*t)/2,jO=e=>t=>1-e(1-t),PO=hl(.33,1.53,.69,.99),AO=jO(PO),DO=OO(AO),IO=e=>1>(e*=2)?.5*AO(e):.5*(2-Math.pow(2,-10*(e-1))),RO=e=>1-Math.sin(Math.acos(e)),$O=jO(RO),FO=OO(RO),LO=hl(.42,0,1,1),zO=hl(0,0,.58,1),UO=hl(.42,0,.58,1),BO=e=>Array.isArray(e)&&"number"==typeof e[0],VO={
gL:kO,wL:LO,bL:UO,Ud:zO,xL:RO,kL:FO,NL:$O,SL:AO,_L:DO,TL:PO,EL:IO},HO=e=>{
if(BO(e)){e.e
const[t,n,r,i]=e
return hl(t,n,r,i)}return"string"==typeof e?VO[e]:e
},WO=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],qO={
r:null,CL:null
},{Du:YO,Ol:KO,Zr:GO,Yu:JO}=fl("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:kO,1)
let XO
const QO={Wu(){return void 0===XO&&QO.te(GO.Au||wO.Hu?GO.Pu:performance.Wu()),XO
},te(e){XO=e,queueMicrotask(pl)}
},ZO=e=>t=>"string"==typeof t&&t.vc(e),ej=ZO("--"),tj=ZO("var(--"),nj=e=>tj(e)?rj.K(e.ne("/*")[0].Z()):0,rj=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ij={
K(e){return"number"==typeof e},Rc:parseFloat,ya(e){return e}},oj={...ij,ya(e){
return gO(0,1,e)}},sj={...ij,a:1
},aj=e=>Math.round(1e5*e)/1e5,lj=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,cj=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,uj=(e,t)=>n=>!!("string"==typeof n&&cj.K(n)&&n.vc(e)||t&&!(e=>null==e)(n)&&{}.s.o(n,t)),dj=(e,t,n)=>r=>{
if("string"!=typeof r)return r
const[i,o,s,a]=r.Q(lj)
return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),
rd:void 0!==a?parseFloat(a):1}},hj={...ij,ya(e){
return Math.round((e=>gO(0,255,e))(e))}},fj={K:uj("rgb","red"),
Rc:dj("red","green","blue"),ya({id:e,od:t,sd:n,rd:r=1}){
return"rgba("+hj.ya(e)+", "+hj.ya(t)+", "+hj.ya(n)+", "+aj(oj.ya(r))+")"}},pj={
K:uj("#"),Rc(e){let t="",n="",r="",i=""
return e.e>5?(t=e.Es(1,3),n=e.Es(3,5),r=e.Es(5,7),i=e.Es(7,9)):(t=e.Es(1,2),n=e.Es(2,3),
r=e.Es(3,4),i=e.Es(4,5),t+=t,n+=n,r+=r,i+=i),{id:parseInt(t,16),
od:parseInt(n,16),sd:parseInt(r,16),rd:i?parseInt(i,16)/255:1}},ya:fj.ya
},mj=e=>({K(t){return"string"==typeof t&&t.yc(e)&&1===t.ne(" ").e},
Rc:parseFloat,ya(t){return`${t}${e}`}
}),vj=mj("deg"),yj=mj("%"),gj=mj("px"),wj=mj("vh"),bj=mj("vw"),xj=(()=>({...yj,
Rc(e){return yj.Rc(e)/100},ya(e){return yj.ya(100*e)}}))(),kj={
K:uj("hsl","hue"),Rc:dj("hue","saturation","lightness"),
ya({ed:e,td:t,nd:n,rd:r=1}){
return"hsla("+Math.round(e)+", "+yj.ya(aj(t))+", "+yj.ya(aj(n))+", "+aj(oj.ya(r))+")"
}},Nj={K(e){return fj.K(e)||pj.K(e)||kj.K(e)},Rc(e){
return fj.K(e)?fj.Rc(e):kj.K(e)?kj.Rc(e):pj.Rc(e)},ya(e){
return"string"==typeof e?e:e.s("red")?fj.ya(e):kj.ya(e)},Xd(e){const t=Nj.Rc(e)
return t.rd=0,Nj.ya(t)}
},Sj=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,_j="number",Tj="color",Ej=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu,Cj=e=>"number"==typeof e?0:Nj.K(e)?Nj.Xd(e):e,Mj={
K(e){var t,n
return isNaN(e)&&"string"==typeof e&&((null==(t=e.Q(lj))?void 0:t.e)||0)+((null==(n=e.Q(Sj))?void 0:n.e)||0)>0
},Rc:vl,ML:yl,Xd(e){const t=vl(e)
return yl(e)(t.Oo(Cj))}},Oj=(e,t,n)=>e+(t-e)*n,jj=(e,t,n)=>{
const r=e*e,i=n*(t*t-r)+r
return 0>i?0:Math.sqrt(i)},Pj=[pj,fj,kj],Aj=(e,t)=>{const n=bl(e),r=bl(t)
if(!n||!r)return wl(e,t)
const i={...n}
return e=>(i.id=jj(n.id,r.id,e),i.od=jj(n.od,r.od,e),i.sd=jj(n.sd,r.sd,e),i.rd=Oj(n.rd,r.rd,e),
fj.ya(i))},Dj=new Set(["none","hidden"]),Ij=(e,t)=>{
const n=Mj.ML(t),r=ml(e),i=ml(t)
return r.Xu.Ju.e!==i.Xu.Ju.e||r.Xu.Ku.e!==i.Xu.Ku.e||r.Xu.Gu.e<i.Xu.Gu.e?wl(e,t):Dj.On(e)&&!i.Lo.e||Dj.On(t)&&!r.Lo.e?((e,t)=>Dj.On(e)?n=>n>0?t:e:n=>1>n?e:t)(e,t):SO(Nl(((e,t)=>{
const n=[],r={Ku:0,Ju:0,Gu:0}
for(let i=0;i<t.Lo.e;i++){const o=t.Qu[i],s=e.Xu[o][r[o]],a=e.Lo[s]??0
n[i]=a,r[o]++}return n})(r,i),i.Lo),n)},Rj=e=>{const t=({Pu:t})=>e(t)
return{rn(e=1){return YO.So(t,e)},Av(){return KO(t)},Wu(){
return GO.Au?GO.Pu:QO.Wu()}}},$j=(e,t,n=10)=>{let r=""
const i=Math.qu(Math.round(t/n),2)
for(let o=0;i>o;o++)r+=Math.round(1e4*e(o/(i-1)))/1e4+", "
return`linear(${r.Es(0,r.e-2)})`
},Fj=2e4,Lj=100,zj=10,Uj=1,Bj=0,Vj=800,Hj=.3,Wj=.3,qj={wd:.01,a:2},Yj={wd:.005,
a:.5
},Kj=.01,Gj=10,Jj=.05,Xj=1,Qj=.001,Zj=12,eP=["duration","bounce"],tP=["stiffness","damping","mass"]
Ol.Kd=e=>{const t=((e,t=100)=>{const n=Ol({...e,ld:[0,t]}),r=Math.an(Tl(n),Fj)
return{k:"keyframes",Cd:e=>n.P(r*e).r/t,md:CO(r)}})(e,100)
return e.Cd=t.Cd,e.md=EO(t.md),e.k="keyframes",e}
const nP=e=>null!==e,rP={OL:jl,jL:jl,PL:Dl,ld:Dl,AL:Ol}
class iP{l(){this.DL()}get IL(){return this.RL}DL(){this.RL=new Promise((e=>{
this.vl=e}))}$L(){this.vl()}R(e,t){return this.IL.R(e,t)}}const oP=e=>e/100
class sP extends iP{l(e){
super(),this.Zr="idle",this.Zf=null,this.FL=0,this.th=0,
this.LL=null,this.zL=1,this.Av=()=>{var e,t
const{Dv:n}=this.Ee
n&&n.OR!==QO.Wu()&&this.UL(QO.Wu()),this.FL=1,"idle"!==this.Zr&&(this.BL(),null==(t=(e=this.Ee).$v)||t.o(e))
},this.Ee=e,this.VL(),this.HL(),0==e.WL&&this._y()}VL(){const{Ee:e}=this
Rl(e)
const{k:t=Dl,Ad:n=0,qL:r=0,Dd:i,vd:o=0}=e
let{ld:s}=e
const a=t||Dl
a!==Dl&&"number"!=typeof s[0]&&(this.YL=SO(oP,_l(s[0],s[1])),s=[0,100])
const l=a({...e,ld:s})
"mirror"===i&&(this.KL=a({...e,ld:[...s].Od(),vd:-o})),null===l.bd&&(l.bd=Tl(l))
const{bd:c}=l
this.bd=c,this.GL=c+r,this.JL=this.GL*(n+1)-r,this.XL=l}QL(e){
const t=Math.round(e-this.Zf)*this.zL
null!==this.LL?this.th=this.LL:this.th=t}UL(e,t=0){
const{XL:n,JL:r,YL:i,KL:o,GL:s,bd:a}=this
if(null===this.Zf)return n.P(0)
const{Bd:l=0,ld:c,Ad:u,Dd:d,qL:h,k:f,Rv:p,ZL:m}=this.Ee
this.ez>0?this.Zf=Math.an(this.Zf,e):0>this.ez&&(this.Zf=Math.an(e-r/this.ez,this.Zf)),
t?this.th=e:this.QL(e)
const v=this.th-l*(0>this.zL?-1:1),y=0>this.zL?v>r:0>v
this.th=Math.qu(v,0),"finished"===this.Zr&&null===this.LL&&(this.th=r)
let g=this.th,w=n
if(u){const e=Math.an(this.th,r)/s
let t=Math.floor(e),n=e%1
n||1>e||(n=1),1===n&&t--,t=Math.an(t,u+1),!!(t%2)&&("reverse"===d?(n=1-n,h&&(n-=h/s)):"mirror"===d&&(w=o)),
g=gO(0,1,n)*s}const b=y?{j:0,r:c[0]}:w.P(g)
i&&(b.r=i(b.r))
let{j:x}=b
y||null===a||(x=0>this.zL?0>=this.th:this.th>=r)
const k=null===this.LL&&("finished"===this.Zr||"running"===this.Zr&&x)
return k&&f!==jl&&(b.r=Il(c,this.Ee,m,this.ez)),p&&p(b.r),k&&this.tz(),b}R(e,t){
return this.IL.R(e,t)}get md(){return CO(this.bd)}get uy(){return CO(this.th)}
set uy(e){var t
e=EO(e),this.th=e,null===this.Zf||null!==this.LL||0===this.zL?this.LL=e:this.nz&&(this.Zf=this.nz.Wu()-e/this.zL),
null==(t=this.nz)||t.rn(0)}get ez(){return this.zL}set ez(e){this.QL(QO.Wu())
const t=this.zL!==e
this.zL=e,t&&(this.uy=CO(this.th))}HL(){var e,t
if(this.FL)return
const{nz:n=Rj,Zf:r}=this.Ee
this.nz||(this.nz=n((e=>this.UL(e)))),null==(t=(e=this.Ee).Em)||t.o(e)
const i=this.nz.Wu()
"finished"===this.Zr?(this.DL(),this.Zf=i):null!==this.LL?this.Zf=i-this.LL:this.Zf||(this.Zf=r??i),
"finished"===this.Zr&&0>this.ez&&(this.Zf+=this.bd),
this.LL=null,this.Zr="running",this.nz.rn()}_y(){
this.Zr="paused",this.QL(QO.Wu()),this.LL=this.th}Ld(){
"running"!==this.Zr&&this.HL(),this.Zr="finished",this.LL=null}tz(){var e,t
this.$L(),this.BL(),this.Zr="finished",null==(t=(e=this.Ee).Cm)||t.o(e)}Ol(){
var e,t
this.LL=null,this.Zf=0,this.UL(0),this.BL(),null==(t=(e=this.Ee).rz)||t.o(e)}
BL(){this.Zr="idle",this.iz(),this.Zf=this.LL=null}iz(){
this.nz&&(this.nz.Av(),this.nz=void 0)}oz(e){return this.Zf=0,this.UL(e,1)}
Ny(e){var t
return this.Ee.sz&&(this.Ee.k="keyframes",this.Ee.Cd="linear",this.VL()),null==(t=this.nz)||t.Av(),
e.Ja(this)}}const aP=e=>180*e/Math.PI,lP=e=>{const t=aP(Math.atan2(e[1],e[0]))
return uP(t)},cP={zs:4,Us:5,az:4,Xg:5,Pf:0,Af:3,Wh(e){
return(Math.abs(e[0])+Math.abs(e[3]))/2},If:lP,Xv:lP,Ff(e){
return aP(Math.atan(e[1]))},Lf(e){return aP(Math.atan(e[2]))},RE(e){
return(Math.abs(e[1])+Math.abs(e[2]))/2}
},uP=e=>(0>(e%=360)&&(e+=360),e),dP=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),hP=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),fP={
zs:12,Us:13,Df:14,az:12,Xg:13,lz:14,Pf:dP,Af:hP,Wh(e){return(dP(e)+hP(e))/2},
Rf(e){return uP(aP(Math.atan2(e[6],e[5])))},$f(e){
return uP(aP(Math.atan2(-e[2],e[0])))},Xv:lP,If:lP,Ff(e){
return aP(Math.atan(e[4]))},Lf(e){return aP(Math.atan(e[1]))},RE(e){
return(Math.abs(e[1])+Math.abs(e[4]))/2}
},pP=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mP=(()=>new Set(pP))(),vP=e=>e===ij||e===gj,yP=new Set(["x","y","z"]),gP=pP.Ro((e=>!yP.On(e))),wP={
Bs({zs:e},{Fa:t="0",cz:n="0"}){return e.qu-e.an-parseFloat(t)-parseFloat(n)},
Vs({Us:e},{za:t="0",uz:n="0"}){return e.qu-e.an-parseFloat(t)-parseFloat(n)},
Sn(e,{Sn:t}){return parseFloat(t)},kn(e,{kn:t}){return parseFloat(t)},
Ls({Us:e},{Sn:t}){return parseFloat(t)+(e.qu-e.an)},Fs({zs:e},{kn:t}){
return parseFloat(t)+(e.qu-e.an)},zs(e,{ya:t}){return Fl(t,"x")},Us(e,{ya:t}){
return Fl(t,"y")}}
wP.az=wP.zs,wP.Xg=wP.Us
const bP=new Set
let xP=0,kP=0,NP=0
class SP{l(e,t,n,r,i,o=0){
this.Zr="pending",this.dz=0,this.Id=0,this.hz=[...e],this.Cm=t,
this.oe=n,this.Dv=r,this.xn=i,this.dz=o}fz(){
this.Zr="scheduled",this.dz?(bP.$(this),
xP||(xP=1,YO.Lu(Ul),YO.zu(zl))):(this.zd(),this.Ld())}zd(){
const{hz:e,oe:t,xn:n,Dv:r}=this
if(null===e[0]){const i=null==r?void 0:r.t(),o=e[e.e-1]
if(void 0!==i)e[0]=i
else if(n&&t){const r=n.pz(t,o)
null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.te(e[0])}(e=>{
for(let t=1;t<e.e;t++)e[t]??(e[t]=e[t-1])})(e)}mz(){}Rd(){}vz(){}$d(){}Ld(e=0){
this.Zr="complete",this.Cm(this.hz,this.ZL,e),bP.at(this)}Ol(){
"scheduled"===this.Zr&&(bP.at(this),this.Zr="pending")}yz(){
"pending"===this.Zr&&this.fz()}}
const _P=ul((()=>void 0!==window.ScrollTimeline)),TP={},EP=Bl((()=>{try{
document.Ui("div").Yd({jv:0},{Vd:"linear(0, 1)"})}catch(XF){return 0}return 1
}),"linearEasing"),CP=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,MP={
gL:"linear",Cd:"ease",wL:"ease-in",Ud:"ease-out",bL:"ease-in-out",
xL:CP([0,.65,.55,1]),NL:CP([.55,0,1,.45]),SL:CP([.31,.01,.66,-.59]),
TL:CP([.33,1.53,.69,.99])}
class OP extends iP{l(e){if(super(),this.gz=null,this.FL=0,!e)return
const{xn:t,oe:n,ld:r,qd:i,sz:o=0,ZL:s,Cm:a}=e
this.wz=!!i,this.sz=o,this.Ee=e,e.k
const l=(({k:e,...t})=>Wl(e)&&EP()?e.Kd(t):(t.md??(t.md=300),t.Cd??(t.Cd="easeOut"),
t))(e)
this.tp=Hl(t,n,r,l,i),0==l.WL&&this.tp._y(),this.tp.bz=()=>{
if(this.gz=this.uy,!i){const e=Il(r,this.Ee,s,this.ez)
this.xz?this.xz(e):((e,t,n)=>{(e=>e.vc("--"))(t)?e.$e.Le(t,n):e.$e[t]=n
})(t,n,e),this.tp.Ol()}null==a||a(),this.$L()}}HL(){
this.FL||(this.tp.HL(),"finished"===this.Zr&&this.DL())}_y(){this.tp._y()}Ld(){
var e,t
null==(t=(e=this.tp).tz)||t.o(e)}Ol(){try{this.tp.Ol()}catch(XF){}}Av(){
if(this.FL)return
this.FL=1
const{Zr:e}=this
"idle"!==e&&"finished"!==e&&(this.xz?this.xz():this.kz(),this.wz||this.Ol())}
kz(){var e,t
this.wz||null==(t=(e=this.tp).kz)||t.o(e)}get md(){var e,t
const n=(null==(t=null==(e=this.tp.Nz)?void 0:e.Sz)?void 0:t.o(e).md)||0
return CO(+n)}get uy(){return CO(+this.tp.th||0)}set uy(e){
this.gz=null,this.tp.th=EO(e)}get ez(){return this.tp._z}set ez(e){
0>e&&(this.gz=null),this.tp._z=e}get Zr(){
return null!==this.gz?"finished":this.tp.Tz}get Zf(){return+this.tp.Zf}
set Zf(e){this.tp.Zf=e}Ny({Sy:e,Ja:t}){var n
return this.sz&&(null==(n=this.tp.Nz)||n.Ez({Vd:"linear"
})),this.tp.bz=null,e&&_P()?(this.tp.Sy=e,kO):t(this)}}const jP={EL:IO,_L:DO,
kL:FO}
class PP extends OP{l(e){var t
"string"==typeof(t=e).Cd&&t.Cd in jP&&(t.Cd=jP[t.Cd]),Rl(e),super(e),e.Zf&&(this.Zf=e.Zf),
this.Ee=e}xz(e){const{Dv:t,Rv:n,Cm:r,xn:i,...o}=this.Ee
if(!t)return
if(void 0!==e)return void t.te(e)
const s=new sP({...o,WL:0}),a=EO(this.gz??this.uy)
t.Cz(s.oz(a-10).r,s.oz(a).r,10),s.Av()}}
const AP=(e,t)=>"zIndex"===t?0:"number"==typeof e||Array.isArray(e)?1:"string"!=typeof e||!Mj.K(e)&&"0"!==e||e.vc("url(")?0:1,DP=new Set(["opacity","clipPath","filter","transform"]),IP=ul((()=>Object.s.o(Element.u,"animate")))
class RP extends iP{
l({WL:e=1,Bd:t=0,k:n="keyframes",Ad:r=0,qL:i=0,Dd:o="loop",ld:s,oe:a,Dv:l,xn:c,...u}){
var d
super(),this.Av=()=>{var e,t
this.Mz&&(this.Mz.Av(),null==(e=this.Oz)||e.o(this)),null==(t=this.jz)||t.Ol()},
this.Pz=QO.Wu()
const h={WL:e,Bd:t,k:n,Ad:r,qL:i,Dd:o,oe:a,Dv:l,xn:c,...u
},f=(null==c?void 0:c.Az)||SP
this.jz=new f(s,((e,t,n)=>this.Dz(e,t,h,!n)),a,l,c),null==(d=this.jz)||d.fz()}
Dz(e,t,n,r){this.jz=void 0
const{oe:i,k:o,vd:s,Bd:a,Iz:l,Rv:c}=n
this.Rz=QO.Wu(),((e,t,n,r)=>{const i=e[0]
if(null===i)return 0
if("display"===t||"visibility"===t)return 1
const o=e[e.e-1],s=AP(i,t),a=AP(o,t)
return s&&a?(e=>{const t=e[0]
if(1===e.e)return 1
for(let n=0;n<e.e;n++)if(e[n]!==t)return 1})(e)||("spring"===n||Wl(n))&&r:0
})(e,i,o,s)||(!wO.$z&&a||null==c||c(Il(e,n,t)),e[0]=e[e.e-1],n.md=0,n.Ad=0)
const u={Zf:r?this.Rz&&this.Rz-this.Pz>40?this.Rz:this.Pz:void 0,ZL:t,...n,ld:e
},d=!l&&(e=>{var t
const{Dv:n,oe:r,qL:i,Dd:o,fd:s,k:a}=e
if(!((null==(t=null==n?void 0:n.Fz)?void 0:t.S)instanceof HTMLElement))return 0
const{Rv:l,_h:c}=n.Fz.Vf()
return IP()&&r&&DP.On(r)&&("transform"!==r||!c)&&!l&&!i&&"mirror"!==o&&0!==s&&"inertia"!==a
})(u)?new PP({...u,xn:u.Dv.Fz.S}):new sP(u)
d.IL.R((()=>this.$L())).yl(kO),this.Lz&&(this.Oz=d.Ny(this.Lz),this.Lz=void 0),this.Mz=d
}get IL(){return this.Mz?this.tp.IL:this.RL}R(e,t){
return this.IL.GP(e).R((()=>{}))}get tp(){var e
return this.Mz||(null==(e=this.jz)||e.yz(),NP=1,Ul(),zl(),NP=0),this.Mz}
get md(){return this.tp.md}get uy(){return this.tp.uy}set uy(e){this.tp.uy=e}
get ez(){return this.tp.ez}get Zr(){return this.tp.Zr}set ez(e){this.tp.ez=e}
get Zf(){return this.tp.Zf}Ny(e){return this.Mz?this.Oz=this.tp.Ny(e):this.Lz=e,
()=>this.Av()}HL(){this.tp.HL()}_y(){this.tp._y()}Ld(){this.tp.Ld()}Ol(){var e
this.Mz&&this.tp.Ol(),null==(e=this.jz)||e.Ol()}}
const $P=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,FP=new Set(["width","height","top","left","right","bottom",...pP]),LP=e=>t=>t.K(e),zP=[ij,gj,yj,vj,bj,wj,{
K(e){return"auto"===e},Rc(e){return e}
}],UP=e=>zP.Zu(LP(e)),BP=new Set(["brightness","contrast","saturate","opacity"]),VP=/\b([a-z-]*)\(.*?\)/gu,HP={
...Mj,Xd(e){const t=e.Q(VP)
return t?t.Oo(Gl).A(" "):e}},WP={...ij,ya:Math.round},qP={_E:gj,zz:gj,Uz:gj,
Bz:gj,Vz:gj,Mp:gj,Hz:gj,Wz:gj,qz:gj,Yz:gj,Kz:gj,Bs:gj,Gz:gj,Vs:gj,Jz:gj,Sn:gj,
Fs:gj,Ls:gj,kn:gj,ea:gj,za:gj,cz:gj,uz:gj,Fa:gj,Q_:gj,Xz:gj,Qz:gj,Zz:gj,eU:gj,
tU:gj,nU:gj,If:vj,Rf:vj,$f:vj,Xv:vj,Wh:sj,Pf:sj,Af:sj,rU:sj,RE:vj,Ff:vj,Lf:vj,
iU:gj,az:gj,Xg:gj,lz:gj,zs:gj,Us:gj,Df:gj,ga:gj,ey:gj,jv:oj,kh:xj,Nh:xj,Sh:gj,
sN:WP,lN:oj,pN:oj,oU:WP},YP={...qP,Ku:Nj,Hc:Nj,sU:Nj,Hd:Nj,qT:Nj,NE:Nj,aU:Nj,
lU:Nj,cU:Nj,uU:Nj,Ro:HP,dU:HP},KP=e=>YP[e],GP=new Set(["auto","none","0"])
class JP extends SP{l(e,t,n,r,i){super(e,t,n,r,i,1)}zd(){
const{hz:e,xn:t,oe:n}=this
if(!t||!t.S)return
super.zd()
for(let a=0;a<e.e;a++){let n=e[a]
if("string"==typeof n&&(n=n.Z(),nj(n))){const r=ql(n,t.S)
void 0!==r&&(e[a]=r),a===e.e-1&&(this.ZL=n)}}
if(this.hU(),!FP.On(n)||2!==e.e)return
const[r,i]=e,o=UP(r),s=UP(i)
if(o!==s)if(vP(o)&&vP(s))for(let a=0;a<e.e;a++){const t=e[a]
"string"==typeof t&&(e[a]=parseFloat(t))}else wP[n]&&(this.Id=1)}hU(){
const{hz:e,oe:t}=this,n=[]
for(let r=0;r<e.e;r++)(null===e[r]||Kl(e[r]))&&n.M(r)
n.e&&((e,t,n)=>{let r,i=0
for(;i<e.e&&!r;){const t=e[i]
"string"==typeof t&&!GP.On(t)&&ml(t).Lo.e&&(r=e[i]),i++}
if(r&&n)for(const o of t)e[o]=Jl(n,r)})(e,n,t)}Rd(){const{xn:e,hz:t,oe:n}=this
if(!e||!e.S)return
"height"===n&&(this.Fd=window.pageYOffset),this.fU=wP[n](e.av(),window.$s(e.S)),
t[0]=this.fU
const r=t[t.e-1]
void 0!==r&&e.pe(n,r).pU(r,0)}$d(){var e
const{xn:t,oe:n,hz:r}=this
if(!t||!t.S)return
const i=t.pe(n)
i&&i.pU(this.fU,0)
const o=r.e-1,s=r[o]
r[o]=wP[n](t.av(),window.$s(t.S)),null!==s&&void 0===this.ZL&&(this.ZL=s),(null==(e=this.mU)?void 0:e.e)&&this.mU.d((([e,n])=>{
t.pe(e).te(n)})),this.hU()}}const XP=(e,t)=>t&&"number"==typeof e?t.ya(e):e,QP={
S:void 0}
class ZP{l(e,t={}){this.vU=null,this.lw={},this.yU=(e,t=1)=>{var n,r
const i=QO.Wu()
if(this.OR!==i&&this.gU(),this.wU=this.S,this.bU(e),this.S!==this.wU&&(null==(n=this.lw.xU)||n.ap(this.S),
this.kU))for(const o of this.kU)o.NU()
t&&(null==(r=this.lw.SU)||r.ap(this.S))},this._U=0,this.bU(e),this.Fz=t.Fz}
bU(e){var t
this.S=e,this.OR=QO.Wu(),null===this.vU&&void 0!==e&&(this.vU=(t=this.S,!isNaN(parseFloat(t))))
}gU(e=this.S){this.TU=e,this.EU=this.OR}as(e){return this.Cy("change",e)}
Cy(e,t){this.lw[e]||(this.lw[e]=new TO)
const n=this.lw[e].$(t)
return"change"===e?()=>{n(),YO.Lu((()=>{this.lw.xU.yL()||this.Av()}))}:n}CU(){
for(const e in this.lw)this.lw[e].$u()}MU(e,t){this.OU=e,this.jU=t}te(e,t=1){
t&&this.OU?this.OU(e,this.yU):this.yU(e,t)}Cz(e,t,n){
this.te(t),this.wU=void 0,this.TU=e,this.EU=this.OR-n}pU(e,t=1){
this.yU(e),this.wU=e,this.EU=this.TU=void 0,t&&this.Av(),this.jU&&this.jU()}
NU(){var e
null==(e=this.lw.xU)||e.ap(this.S)}PU(e){this.kU||(this.kU=new Set),this.kU.$(e)
}AU(e){this.kU&&this.kU.at(e)}t(){return QP.S&&QP.S.M(this),this.S}DU(){
return this.wU}Kh(){const e=QO.Wu()
if(!this.vU||void 0===this.TU||e-this.OR>30)return 0
const t=Math.an(this.OR-this.EU,30)
return dl(parseFloat(this.S)-parseFloat(this.TU),t)}rn(e){
return this.Av(),new Promise((t=>{
this._U=1,this.tp=e(t),this.lw.IU&&this.lw.IU.ap()})).R((()=>{
this.lw.RU&&this.lw.RU.ap(),this.$U()}))}Av(){
this.tp&&(this.tp.Av(),this.lw.FU&&this.lw.FU.ap()),this.$U()}Qf(){
return!!this.tp}$U(){delete this.tp}Yr(){var e,t
null==(e=this.kU)||e.$u(),null==(t=this.lw.Yr)||t.ap(),this.CU(),this.Av(),this.jU&&this.jU()
}}const{Du:eA,Ol:tA}=fl(queueMicrotask,0),nA={zs:0,Us:0
},rA=(e,t)=>t?e===t?1:rA(e,t.wy):0,iA=e=>"mouse"===e.Qd?"number"!=typeof e.In||0>=e.In:0!=e.Zd,oA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),sA=new WeakSet,aA=new WeakMap
let lA
const cA=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:sc(r)&&"by"in r?r.by()[t]:r[n],uA=cA("inline","width","offsetWidth"),dA=cA("block","height","offsetHeight"),hA=new Set
let fA
const pA=e=>!(!e||!e.Kh),mA=[...zP,Nj,Mj],vA=Bp.$o({LU(e){return e},Ef:0,
if:"never"})
class yA extends Bp.lu{oi(e){const t=this.f.hh.S
if(t&&e.nh&&!this.f.nh){const e=t.ca,n=Ql(e)&&e.ja||0,r=this.f.fh.S
r.Vs=t.Pa||0,r.Bs=t.ja||0,r.Sn=t.Ra,r.kn=t.Ia,r.Fs=n-r.Bs-r.kn}return null}
ki(){}ae(){return this.f.w}}
const gA=({w:e,Jh:t,nh:n,mh:r,Gh:i,zU:o,lr:s,rh:a,ih:l})=>{
const c=sl(dc),u=Bp.oh()
let d=1,h=Bp.Do((()=>(d=0,{ir:u,Jh:t,nh:n,Gh:i,mh(e){c.te(e,1)
for(const t of c.Lo())if(!t)return
r&&r()},vh(e){return c.te(e,0),()=>c.at(e)}})),[n,c,r])
return o&&d&&(h={...h}),Bp.Do((()=>{c.d(((e,t)=>c.te(t,0)))}),[n]),Bp.To((()=>{
!n&&!c.Bi&&r&&r()}),[n]),"popLayout"===s&&(e=Gp.zo(uc,{nh:n,rh:a,ih:l,w:e
})),Gp.zo(yO.Uo,{r:h,w:e})
},wA=e=>e.g||"",bA=({w:e,Gh:t,Jh:n=1,mh:r,zU:i=1,lr:o="sync",UU:s=0,rh:a="left",ih:l})=>{
const[c,u]=hc(s),d=Bp.Do((()=>fc(e)),[e]),h=s&&!c?[]:d.Oo(wA),f=Bp.Wo(1),p=Bp.Wo(d),m=sl((()=>new Map)),[v,y]=Bp._o(d),[g,w]=Bp._o(d)
vO((()=>{f.S=0,p.S=d
for(let e=0;e<g.e;e++){const t=wA(g[e])
h.ie(t)?m.at(t):1!=m.t(t)&&m.te(t,0)}}),[g,h.e,h.A("-")])
const b=[]
if(d!==v){let e=[...d]
for(let t=0;t<g.e;t++){const n=g[t],r=wA(n)
h.ie(r)||(e.Eo(t,0,n),b.M(n))}return"wait"===o&&b.e&&(e=b),w(fc(e)),y(d),null}
const{BU:x}=Bp.Bo(pO)
return Gp.zo(Gp.Bc,{w:g.Oo((e=>{const v=wA(e),y=s&&!c?0:d===g||h.ie(v)
return Gp.zo(gA,{nh:y,Jh:!f.S||n?void 0:0,Gh:t,zU:i,lr:o,ih:l,mh:y?void 0:()=>{
if(!m.On(v))return
m.te(v,1)
let e=1
m.d((t=>{t||(e=0)})),e&&(null==x||x(),w(p.S),s&&(null==u||u()),r&&r())},rh:a,w:e
},v)}))})},xA=Bp.$o({Cf:0}),kA={
tp:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],
kp:["exit"],Th:["drag","dragControls"],Tn:["whileFocus"],
VU:["whileHover","onHoverStart","onHoverEnd"],
HU:["whileTap","onTap","onTapStart","onTapCancel"],
WU:["onPan","onPanStart","onPanSessionStart","onPanEnd"],
qU:["whileInView","onViewportEnter","onViewportLeave"],gh:["layout","layoutId"]
},NA={}
for(const ZF in kA)NA[ZF]={Of(e){return kA[ZF].ws((t=>!!e[t]))}}
const SA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"])
let _A=e=>!pc(e)
try{
"function"==typeof(dT=require("@emotion/is-prop-valid").a)&&(_A=e=>e.vc("on")?!pc(e):dT(e))
}catch{}
const TA=Bp.$o({}),EA=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],CA=["initial",...EA],MA={},OA={
zs:"translateX",Us:"translateY",Df:"translateZ",ey:"perspective"},jA=pP.e,PA={
Ht:"stroke-dashoffset",qh:"stroke-dasharray"},AA={Ht:"strokeDashoffset",
qh:"strokeDasharray"},DA=()=>({$e:{},ya:{},xh:{},bh:{},Vh:{}
}),IA=e=>"string"==typeof e&&"svg"===e.Y(),RA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"],$A=e=>(t,n)=>{
const r=Bp.Bo(TA),i=Bp.Bo(yO),o=()=>(({YU:e,KU:t},n,r,i)=>({Yh:jc(n,r,i,e),
iy:t()}))(e,t,r,i)
return n?o():sl(o)},FA=$A({YU:Pc,KU:()=>({$e:{},ya:{},xh:{},bh:{}})}),LA=$A({
YU:Ac,KU:DA
}),zA=Symbol.for("motionComponentSymbol"),UA=e=>e.E(/([a-z])([A-Z])/gu,"$1-$2").Y(),BA="data-"+UA("framerAppearId"),VA=Bp.$o({}),HA=.999999999999,WA=1.0000000000001,qA=()=>({
zs:{zf:0,Wh:1,gu:0,Uf:0},Us:{zf:0,Wh:1,gu:0,Uf:0}}),YA=()=>({zs:{an:0,qu:0},Us:{
an:0,qu:0}}),KA={S:null},GA={S:0
},JA=new WeakMap,XA=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"]
class QA{YU(e,t,n){return{}}l({Ma:e,f:t,af:n,cf:r,lf:i,sf:o},s={}){
this.S=null,this.w=new Set,
this.GU=0,this.up=0,this.ep=null,this.Lo=new Map,this.Az=SP,
this.JU={},this.XU=new Map,
this.QU={},this.lw={},this.ZU={},this.eB=()=>this.ap("Update",this.Yh),
this.ae=()=>{this.S&&(this.tB(),this.nB(this.S,this.iy,this.f.$e,this.uf))
},this.rB=0,this.rv=()=>{const e=QO.Wu()
this.rB<e&&(this.rB=e,YO.ae(this.ae,0,1))}
const{Yh:a,iy:l}=o
this.Yh=a,this.iB={...a},this.oB=t.Jh?{...a
}:{},this.iy=l,this.Ma=e,this.f=t,this.af=n,
this.hm=e?e.hm+1:0,this.cf=r,this.Ee=s,
this.lf=!!i,this.up=yc(t),this.GU=gc(t),this.GU&&(this.rp=new Set),
this.dp=!(!e||!e.S)
const{xa:c,...u}=this.YU(t,{},this)
for(const d in u){const e=u[d]
void 0!==a[d]&&pA(e)&&e.te(a[d],0)}}tf(e){
this.S=e,JA.te(e,this),this.uf&&!this.uf.Cn&&this.uf.tf(e),
this.Ma&&this.GU&&!this.up&&(this.sB=this.Ma.aB(this)),
this.Lo.d(((e,t)=>this.lB(t,e))),GA.S||(()=>{if(GA.S=1,mO)if(window.matchMedia){
const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>KA.S=e.va
e.Pn("change",t),t()}else KA.S=0
})(),this.ep="never"===this.cf?0:"always"===this.cf?1:KA.S,
this.Ma&&this.Ma.w.$(this),this.So(this.f,this.af)}nf(){
this.uf&&this.uf.nf(),KO(this.eB),
KO(this.ae),this.XU.d((e=>e())),this.XU.$u(),this.sB&&this.sB(),
this.Ma&&this.Ma.w.at(this)
for(const e in this.lw)this.lw[e].$u()
for(const e in this.JU){const t=this.JU[e]
t&&(t.nf(),t.kx=0)}this.S=null}lB(e,t){this.XU.On(e)&&this.XU.t(e)()
const n=mP.On(e)
n&&this.cB&&this.cB()
const r=t.Cy("change",(t=>{
this.Yh[e]=t,this.f.Rv&&YO.Bu(this.eB),n&&this.uf&&(this.uf.Hp=1)
})),i=t.Cy("renderRequest",this.rv)
let o
window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.XU.te(e,(()=>{
r(),i(),o&&o(),t.Fz&&t.Av()}))}cp(e){
return this.S&&this.uB&&this.k===e.k?this.uB(this.S,e.S):0}xf(){
let e="animation"
for(e in NA){const t=NA[e]
if(!t)continue
const{Of:n,dB:r}=t
if(!this.JU[e]&&r&&n(this.f)&&(this.JU[e]=new r(this)),this.JU[e]){
const t=this.JU[e]
t.kx?t.So():(t.tf(),t.kx=1)}}}tB(){this.JR(this.iy,this.Yh,this.f)}av(){
return this.S?this.hB(this.S,this.f):{zs:{an:0,qu:0},Us:{an:0,qu:0}}}fB(e){
return this.Yh[e]}Op(e,t){this.Yh[e]=t}So(e,t){
(e._h||this.f._h)&&this.rv(),this.pB=this.f,this.f=e,this.mB=this.af,this.af=t
for(let n=0;XA.e>n;n++){const t=XA[n]
this.ZU[t]&&(this.ZU[t](),delete this.ZU[t])
const r=e["on"+t]
r&&(this.ZU[t]=this.Cy(t,r))}this.QU=((e,t,n)=>{for(const r in t){
const i=t[r],o=n[r]
if(pA(i))e.Wf(r,i)
else if(pA(o))e.Wf(r,Zl(i,{Fz:e}))
else if(o!==i)if(e.Hf(r)){const t=e.pe(r)
1==t.Zh?t.pU(i):t._U||t.te(i)}else{const t=e.fB(r)
e.Wf(r,Zl(void 0!==t?t:i,{Fz:e}))}}for(const r in n)void 0===t[r]&&e.vB(r)
return t})(this,this.YU(e,this.pB,this),this.QU),this.yB&&this.yB()}Vf(){
return this.f}gB(e){return this.f.yh?this.f.yh[e]:void 0}Jf(){return this.f.xt}
wB(){return this.f.LU}bB(){return this.GU?this:this.Ma?this.Ma.bB():void 0}
aB(e){const t=this.bB()
if(t)return t.rp&&t.rp.$(e),()=>t.rp.at(e)}Wf(e,t){const n=this.Lo.t(e)
t!==n&&(n&&this.vB(e),this.lB(e,t),this.Lo.te(e,t),this.Yh[e]=t.t())}vB(e){
this.Lo.at(e)
const t=this.XU.t(e)
t&&(t(),this.XU.at(e)),delete this.Yh[e],this.xB(e,this.iy)}Hf(e){
return this.Lo.On(e)}pe(e,t){if(this.f.Lo&&this.f.Lo[e])return this.f.Lo[e]
let n=this.Lo.t(e)
return void 0===n&&void 0!==t&&(n=Zl(null===t?void 0:t,{Fz:this}),this.Wf(e,n)),
n}pz(e,t){
let n=void 0===this.Yh[e]&&this.S?this.kB(this.f,e)??this.NB(this.S,e,this.Ee):this.Yh[e]
var r
return null!=n&&("string"==typeof n&&(bO(n)||xO(n))?n=parseFloat(n):(r=n,!mA.Zu(LP(r))&&Mj.K(t)&&(n=Jl(e,t))),
this.SB(e,pA(n)?n.t():n)),pA(n)?n.t():n}SB(e,t){this.iB[e]=t}pp(e){var t
const{Jh:n}=this.f
let r
if("string"==typeof n||"object"==typeof n){
const i=Mc(this.f,n,null==(t=this.af)?void 0:t.Gh)
i&&(r=i[e])}if(n&&void 0!==r)return r
const i=this.kB(this.f,e)
return void 0===i||pA(i)?void 0!==this.oB[e]&&void 0===r?void 0:this.iB[e]:i}
Cy(e,t){return this.lw[e]||(this.lw[e]=new TO),this.lw[e].$(t)}ap(e,...t){
this.lw[e]&&this.lw[e].ap(...t)}kf(){eA.ae(this.ae)}}class ZA extends QA{l(){
super(...arguments),this.Az=JP}uB(e,t){return 2&e.Yt(t)?1:-1}kB(e,t){
return e.$e?e.$e[t]:void 0}xB(e,{bh:t,$e:n}){delete t[e],delete n[e]}yB(){
this._B&&(this._B(),delete this._B)
const{w:e}=this.f
pA(e)&&(this._B=e.Cy("change",(e=>{this.S&&(this.S.Pe=""+e)})))}}
class eD extends ZA{l(){super(...arguments),this.k="html",this.nB=tu}NB(e,t){
var n,r
if(mP.On(t))return(null==(n=this.uf)?void 0:n.bv)?$l(t):((e,t)=>{
const{ya:n="none"}=getComputedStyle(e)
return Fl(n,t)})(e,t)
{const n=(r=e,window.$s(r)),i=(ej(t)?n.Jd(t):n[t])||0
return"string"==typeof i?i.Z():i}}hB(e,{LU:t}){return eu(e,t)}JR(e,t,n){
xc(e,t,n._h)}YU(e,t,n){return Pc(e,t,n)}}
const tD=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])
class nD extends ZA{l(){super(...arguments),this.k="svg",this.TB=0,this.hB=YA}
kB(e,t){return e[t]}NB(e,t){if(mP.On(t)){const e=KP(t)
return e&&e.a||0}return t=tD.On(t)?t:UA(t),e.Is(t)}YU(e,t,n){return Ac(e,t,n)}
JR(e,t,n){Sc(e,t,this.TB,n._h,n.$e)}nB(e,t,n,r){((e,t,n,r)=>{tu(e,t,void 0,r)
for(const i in t.Vh)e.J(tD.On(i)?i:UA(i),t.Vh[i])})(e,t,0,r)}tf(e){
this.TB=IA(e.Pr),super.tf(e)}}const rD=(e,t)=>Tc(e)?new nD(t):new eD(t,{
_f:e!==Bp.Bc}),iD=e=>Array.isArray(e),oD=e=>null!==e,sD={k:"spring",hd:500,
fd:25,ud:10},aD={k:"keyframes",md:.8},lD={k:"keyframes",Cd:[.25,.1,.35,1],md:.3
},cD=(e,t,n,r={},i,o)=>s=>{const a=Yl(r,e)||{},l=a.Bd||r.Bd||0
let{EB:c=0}=r
c-=EO(l)
const u={ld:Array.isArray(n)?n:[null,n],Cd:"easeOut",vd:t.Kh(),...a,Bd:-c,Rv(e){
t.te(e),a.Rv&&a.Rv(e)},Cm(){s(),a.Cm&&a.Cm()},oe:e,Dv:t,xn:o?void 0:i}
;(({lp:e,Bd:t,ip:n,op:r,sp:i,Ad:o,Dd:s,qL:a,Go:l,EB:c,...u})=>!!Object.h(u).e)(a)||Object.ml(u,((e,{ld:t})=>t.e>2?aD:mP.On(e)?e.vc("scale")?{
k:"spring",hd:550,fd:0===t[1]?46.9041575982343:30,ud:10
}:sD:lD)(e,u)),u.md&&(u.md=EO(u.md)),
u.qL&&(u.qL=EO(u.qL)),void 0!==u.Go&&(u.ld[0]=u.Go)
let d=0
if((0==u.k||0===u.md&&!u.qL)&&(u.md=0,0===u.Bd&&(d=1)),(wO.$z||wO.CB)&&(d=1,u.md=0,
u.Bd=0),u.sz=!a.k&&!a.Cd,d&&!o&&void 0!==t.t()){
const e=((e,{Ad:t,Dd:n="loop"},r)=>{
const i=e.Ro(oD),o=t&&"loop"!==n&&t%2==1?0:i.e-1
return o&&void 0!==r?r:i[o]})(u.ld,a)
if(void 0!==e)return void YO.So((()=>{u.Rv(e),u.Cm()}))}
return a.Iv?new sP(u):new RP(u)},uD=CA.e,dD=[...EA].Od(),hD=EA.e
class fD{l(e){this.kx=0,this.Vt=e}So(){}}let pD=0
const mD={tp:{dB:class extends fD{l(e){super(e),e.Nf||(e.Nf=fu(e))}MB(){
const{Yd:e}=this.Vt.Vf()
mc(e)&&(this.OB=e.xw(this.Vt))}tf(){this.MB()}So(){
const{Yd:e}=this.Vt.Vf(),{Yd:t}=this.Vt.pB||{}
e!==t&&this.MB()}nf(){var e
this.Vt.Nf.yp(),null==(e=this.OB)||e.o(this)}}},kp:{dB:class extends fD{l(){
super(...arguments),this.ir=pD++}So(){if(!this.Vt.af)return
const{nh:e,mh:t}=this.Vt.af,{nh:n}=this.Vt.mB||{}
if(!this.Vt.Nf||e===n)return
const r=this.Vt.Nf.mp("exit",!e)
t&&!e&&r.R((()=>{t(this.ir)}))}tf(){const{vh:e,mh:t}=this.Vt.af||{}
t&&t(this.ir),e&&(this.nf=e(this.ir))}nf(){}}}
},vD=({S:e})=>e?e.Te.cn:null,yD=(e,t)=>Math.abs(e-t)
class gD{l(e,t,{LU:n,jB:r=window,PB:i=0,AB:o=3}={}){
if(this.DB=null,this.IB=null,
this.RB=null,this.$B={},this.jB=window,this.FB=()=>{if(!this.IB||!this.RB)return
const e=Mu(this.RB,this.bu),t=null!==this.DB,n=(e=>{
const t=yD(e.zs,0),n=yD(e.Us,0)
return Math.sqrt(t**2+n**2)})(e.Ht)>=this.AB
if(!t&&!n)return
const{Np:r}=e,{Pu:i}=GO
this.bu.M({...r,Pu:i})
const{LB:o,zB:s}=this.$B
t||(o&&o(this.IB,e),this.DB=this.IB),s&&s(this.IB,e)},this.UB=(e,t)=>{this.IB=e,
this.RB=Eu(t,this.LU),YO.So(this.FB,1)},this.BB=(e,t)=>{this.in()
const{VB:n,HB:r,WB:i}=this.$B
if(this.PB&&i&&i(),!this.IB||!this.RB)return
const o=Mu("pointercancel"===e.k?this.RB:Eu(t,this.LU),this.bu)
this.DB&&n&&n(e,o),r&&r(e,o)},!iA(e))return
this.PB=i,this.$B=t,this.LU=n,this.AB=o,this.jB=r||window
const s=Eu(gu(e),this.LU),{Np:a}=s,{Pu:l}=GO
this.bu=[{...a,Pu:l}]
const{qB:c}=t
c&&c(e,Mu(s,this.bu)),this.YB=SO(wu(this.jB,"pointermove",this.UB),wu(this.jB,"pointerup",this.BB),wu(this.jB,"pointercancel",this.BB))
}KB(e){this.$B=e}in(){this.YB&&this.YB(),KO(this.FB)}}
const wD=.35,bD=new WeakMap
class xD{l(e){this.GB=null,this.JB=0,this.XB=null,this.Uf={zs:0,Us:0},this.QB=0,
this.ZB=0,this.eV={zs:{an:0,qu:0},Us:{an:0,qu:0}
},this.tV=null,this.nV=null,this.rf=e}rn(e,{rV:t=0,AB:n}={}){const{af:r}=this.rf
if(r&&0==r.nh)return
const{PB:i}=this.Vf()
this.iV=new gD(e,{qB:e=>{const{PB:n}=this.Vf()
n?this.oV():this.sV(),t&&this.rV(gu(e).Np)},LB:(e,t)=>{
const{Th:n,aV:r,lV:i}=this.Vf()
if(n&&!r&&(this.GB&&this.GB(),this.GB="x"===(o=n)||"y"===o?nA[o]?null:(nA[o]=1,()=>{
nA[o]=0}):nA.zs||nA.Us?null:(nA.zs=nA.Us=1,()=>{nA.zs=nA.Us=0}),!this.GB))return
var o
this.tV=e,this.nV=t,this.JB=1,this.XB=null,this.cV(),this.rf.uf&&(this.rf.uf.zp=1,
this.rf.uf.Ve=void 0),Tu((e=>{let t=this.uV(e).t()||0
if(yj.K(t)){const{uf:n}=this.rf
if(n&&n.gh){const r=n.gh.Qm[e]
r&&(t=bu(r)*(parseFloat(t)/100))}}this.Uf[e]=t
})),i&&YO.Vu((()=>i(e,t))),ou(this.rf,"transform")
const{Nf:s}=this.rf
s&&s.mp("whileDrag",1)},zB:(e,t)=>{this.tV=e,this.nV=t
const{aV:n,dV:r,hV:i,fV:o}=this.Vf()
if(!n&&!this.GB)return
const{Ht:s}=t
if(r&&null===this.XB)return this.XB=((e,t=10)=>{let n=null
return Math.abs(e.Us)>t?n="y":Math.abs(e.zs)>t&&(n="x"),n
})(s),void(null!==this.XB&&i&&i(this.XB))
this.pV("x",t.Np,s),this.pV("y",t.Np,s),this.rf.ae(),o&&o(e,t)},HB:(e,t)=>{
this.tV=e,this.nV=t,this.Av(e,t),this.tV=null,this.nV=null},WB:()=>Tu((e=>{var t
return"paused"===this.mV(e)&&(null==(t=this.uV(e).tp)?void 0:t.HL())}))},{
LU:this.rf.wB(),PB:i,AB:n,jB:vD(this.rf)})}Av(e,t){
const n=e||this.tV,r=t||this.nV,i=this.JB
if(this.Ol(),!i||!r||!n)return
const{vd:o}=r
this.Mm(o)
const{vV:s}=this.Vf()
s&&YO.Vu((()=>s(n,r)))}Ol(){this.JB=0
const{uf:e,Nf:t}=this.rf
e&&(e.zp=0),this.iV&&this.iV.in(),this.iV=void 0
const{aV:n}=this.Vf()
!n&&this.GB&&(this.GB(),this.GB=null),t&&t.mp("whileDrag",0)}pV(e,t,n){
const{Th:r}=this.Vf()
if(!n||!$u(e,r,this.XB))return
const i=this.uV(e)
let o=this.Uf[e]+n[e]
this.QB&&this.QB[e]&&(o=((e,{an:t,qu:n},r)=>(void 0!==t&&t>e?e=r?Oj(t,e,r.an):Math.qu(e,t):void 0!==n&&e>n&&(e=r?Oj(n,e,r.qu):Math.an(e,n)),
e))(o,this.QB[e],this.eV[e])),i.te(o)}cV(){var e
const{df:t,yV:n}=this.Vf(),r=this.rf.uf&&!this.rf.uf.gh?this.rf.uf.Ym(0):null==(e=this.rf.uf)?void 0:e.gh,i=this.QB
t&&Dc(t)?this.QB||(this.QB=this.gV()):this.QB=t&&r?((e,{Sn:t,kn:n,Ls:r,Fs:i})=>({
zs:Au(e.zs,n,i),Us:Au(e.Us,t,r)
}))(r.Qm,t):0,this.eV=((e=wD)=>(0==e?e=0:1==e&&(e=wD),{zs:Iu(e,"left","right"),
Us:Iu(e,"top","bottom")}))(n),i!==this.QB&&r&&this.QB&&!this.ZB&&Tu((e=>{
0!=this.QB&&this.uV(e)&&(this.QB[e]=((e,t)=>{const n={}
return void 0!==t.an&&(n.an=t.an-e.an),void 0!==t.qu&&(n.qu=t.qu-e.an),n
})(r.Qm[e],this.QB[e]))}))}gV(){const{df:e,wV:t}=this.Vf()
if(!e||!Dc(e))return 0
const n=e.S,{uf:r}=this.rf
if(!r||!r.gh)return 0
const i=((e,t)=>{const n=eu(e,this.rf.wB()),{Zm:r}=t
return r&&(Xc(n.zs,r.Ht.zs),Xc(n.Us,r.Ht.Us)),n})(n,r.ih)
let o=((e,t)=>({zs:Du(e.zs,t.zs),Us:Du(e.Us,t.Us)}))(r.gh.Qm,i)
if(t){const e=t((({zs:e,Us:t})=>({Sn:t.an,Fs:e.qu,Ls:t.qu,kn:e.an}))(o))
this.ZB=!!e,e&&(o=Uc(e))}return o}Mm(e){
const{Th:t,bV:n,yV:r,xV:i,PB:o,kV:s}=this.Vf(),a=this.QB||{},l=Tu((s=>{
if(!$u(s,t,this.XB))return
let l=a&&a[s]||{}
o&&(l={an:0,qu:0})
const c=r?200:1e6,u=r?40:1e7,d={k:"inertia",vd:n?e[s]:0,_d:c,Sd:u,Nd:750,dd:1,
ud:10,...i,...l}
return this.NV(s,d)}))
return Promise.np(l).R(s)}NV(e,t){const n=this.uV(e)
return ou(this.rf,e),n.rn(cD(e,n,0,t,this.rf,0))}sV(){Tu((e=>this.uV(e).Av()))}
oV(){Tu((e=>{var t
return null==(t=this.uV(e).tp)?void 0:t._y()}))}mV(e){var t
return null==(t=this.uV(e).tp)?void 0:t.Zr}uV(e){
const t="_drag"+e.W(),n=this.rf.Vf()
return n[t]||this.rf.pe(e,(n.Jh?n.Jh[e]:void 0)||0)}rV(e){Tu((t=>{
const{Th:n}=this.Vf()
if(!$u(t,n,this.XB))return
const{uf:r}=this.rf,i=this.uV(t)
if(r&&r.gh){const{an:n,qu:o}=r.gh.Qm[t]
i.te(e[t]-Oj(n,o,.5))}}))}SV(){if(!this.rf.S)return
const{Th:e,df:t}=this.Vf(),{uf:n}=this.rf
if(!Dc(t)||!n||!this.QB)return
this.sV()
const r={zs:0,Us:0}
Tu((e=>{const t=this.uV(e)
if(t&&0!=this.QB){const n=t.t()
r[e]=((e,t)=>{let n=.5
const r=bu(e),i=bu(t)
return i>r?n=_O(t.an,t.qu-r,e.an):r>i&&(n=_O(e.an,e.qu-i,t.an)),gO(0,1,n)})({
an:n,qu:n},this.QB[e])}}))
const{_h:i}=this.rf.Vf()
this.rf.S.$e.ya=i?i({},""):"none",n.ih&&n.ih.zm(),n.Gm(),this.cV(),Tu((t=>{
if(!$u(t,e,null))return
const n=this.uV(t),{an:i,qu:o}=this.QB[t]
n.te(Oj(i,o,r[t]))}))}_V(){if(!this.rf.S)return
bD.te(this.rf,this)
const e=wu(this.rf.S,"pointerdown",(e=>{const{Th:t,Eh:n=1}=this.Vf()
t&&n&&this.rn(e)})),t=()=>{const{df:e}=this.Vf()
Dc(e)&&e.S&&(this.QB=this.gV())},{uf:n}=this.rf,r=n.Pn("measure",t)
n&&!n.gh&&(n.ih&&n.ih.zm(),n.Gm()),YO.Lu(t)
const i=yu(window,"resize",(()=>this.SV())),o=n.Pn("didUpdate",(({yu:e,ym:t})=>{
this.JB&&t&&(Tu((t=>{const n=this.uV(t)
n&&(this.Uf[t]+=e[t].zf,n.te(n.t()+e[t].zf))})),this.rf.ae())}))
return()=>{i(),e(),r(),o&&o()}}Vf(){
const e=this.rf.Vf(),{Th:t=0,dV:n=0,aV:r=0,df:i=0,yV:o=wD,bV:s=1}=e
return{...e,Th:t,dV:n,aV:r,df:i,yV:o,bV:s}}}const kD=e=>(t,n)=>{
e&&YO.Vu((()=>e(t,n)))},ND={mm:1,TV:0},SD={ty(e,t){if(!t.Ve)return e
if("string"==typeof e){if(!gj.K(e))return e
e=parseFloat(e)}return`${Fu(e,t.Ve.zs)}% ${Fu(e,t.Ve.Us)}%`}},_D={
ty(e,{Xp:t,Xm:n}){const r=e,i=Mj.Rc(e)
if(i.e>5)return r
const o=Mj.ML(e),s="number"!=typeof i[0]?1:0,a=n.zs.Wh*t.zs,l=n.Us.Wh*t.Us
i[0+s]/=a,i[1+s]/=l
const c=Oj(a,l,.5)
return"number"==typeof i[2+s]&&(i[2+s]/=c),"number"==typeof i[3+s]&&(i[3+s]/=c),
o(i)}}
let TD=0
class ED extends Bp.lu{li(){const{rf:e,Tp:t,Ep:n,wh:r}=this.f,{uf:i}=e;(e=>{
for(const t in e)MA[t]=e[t],ej(t)&&(MA[t].ry=1)
})(CD),i&&(t.EV&&t.EV.$(i),n&&n.vh&&r&&n.vh(i),
TD&&i.ih.Vm(),i.Pn("animationComplete",(()=>{this.Cp()})),i.vf({...i.Ee,
mh:()=>this.Cp()})),ND.TV=1}oi(e){const{CV:t,rf:n,Th:r,nh:i}=this.f,{uf:o}=n
return o?(o.nh=i,TD=1,r||e.CV!==t||void 0===t||e.nh!==i?o.Pm():this.Cp(),e.nh!==i&&(i?o.Vv():o.Gv()||YO.Vu((()=>{
const e=o.Dm()
e&&e.Cv.e||this.Cp()}))),null):null}ki(){const{uf:e}=this.f.rf
e&&(e.ih.Vm(),eA.Vu((()=>{!e._m&&e.jm()&&this.Cp()})))}Ji(){
const{rf:e,Tp:t,Ep:n}=this.f,{uf:r}=e
r&&(r.Wm(),t&&t.EV&&t.EV.Am(r),n&&n.MV&&n.MV(r))}Cp(){const{Cp:e}=this.f
e&&e()}ae(){return null}}const CD={Mp:{...SD,
ny:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]
},Wz:SD,qz:SD,Kz:SD,Yz:SD,Pw:_D},MD=(e,t)=>e.hm-t.hm
class OD{l(){this.w=[],this.OV=0}$(e){al(this.w,e),this.OV=1}Am(e){ll(this.w,e),
this.OV=1}d(e){this.OV&&this.w.Xo(MD),this.OV=0,this.w.d(e)}}
const jD=["TopLeft","TopRight","BottomLeft","BottomRight"],PD=e=>"string"==typeof e?parseFloat(e):e,AD=e=>"number"==typeof e||gj.K(e),DD=Uu(0,.5,$O),ID=Uu(.5,.95,kO),RD=["x","scaleX","originX"],$D=["y","scaleY","originY"]
class FD{l(){this.Cv=[]}$(e){al(this.Cv,e),e.rv()}Am(e){
if(ll(this.Cv,e),e===this.Kv&&(this.Kv=void 0),e===this.qv){
const e=this.Cv[this.Cv.e-1]
e&&this.Vv(e)}}Gv(e){const t=this.Cv.tu((t=>e===t))
if(0===t)return 0
let n
for(let r=t;r>=0;r--){const e=this.Cv[r]
if(0!=e.nh){n=e
break}}return n?(this.Vv(n),1):0}Vv(e,t){const n=this.qv
if(e!==n&&(this.Kv=n,this.qv=e,e.Tv(),n)){
n.Cn&&n.rv(),e.rv(),e.Sm=n,t&&(e.Sm.Lv=1),
n.qm&&(e.qm=n.qm,e.qm.Yh=n.Ov||n.Yh),e.ih&&e.ih.Yp&&(e.Up=1)
const{bf:r}=e.Ee
0==r&&n._v()}}zv(){this.Cv.d((e=>{const{Ee:t,Tm:n}=e
t.mh&&t.mh(),n&&n.Ee.mh&&n.Ee.mh()}))}rv(){this.Cv.d((e=>{e.Cn&&e.rv(0)}))}cy(){
this.qv&&this.qv.qm&&(this.qv.qm=void 0)}}const LD=["","X","Y","Z"]
let zD=0
const UD={md:.45,Cd:[.4,0,.1,1]
},BD=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.Y().ie(e),VD=BD("applewebkit/")&&!BD("chrome/")?Math.round:kO,HD=rd({
Pp(e,t){return yu(e,"resize",t)},Dp(){return{zs:document.nn.Nn||document.we.Nn,
Us:document.nn._n||document.we._n}},Ip(){return 1}}),WD={S:void 0},qD=rd({Dp(e){
return{zs:e.Nn,Us:e._n}},Ap(){if(!WD.S){const e=new HD({})
e.tf(window),e.vf({hf:1}),WD.S=e}return WD.S},Rp(e,t){
e.$e.ya=void 0!==t?t:"none"},Ip(e){return!("fixed"!==window.$s(e).Wa)}}),YD={
WU:{dB:class extends fD{l(){super(...arguments),this.jV=kO}AT(e){
this.bg=new gD(e,this.PV(),{LU:this.Vt.wB(),jB:vD(this.Vt)})}PV(){
const{AV:e,DV:t,IV:n,RV:r}=this.Vt.Vf()
return{qB:kD(e),LB:kD(t),zB:n,VB:(e,t)=>{delete this.bg,r&&YO.Vu((()=>r(e,t)))}}
}tf(){this.jV=wu(this.Vt.S,"pointerdown",(e=>this.AT(e)))}So(){
this.bg&&this.bg.KB(this.PV())}nf(){this.jV(),this.bg&&this.bg.in()}}},Th:{
dB:class extends fD{l(e){super(e),this.$V=kO,this.YB=kO,this.FV=new xD(e)}tf(){
const{LV:e}=this.Vt.Vf()
e&&(this.$V=e.xw(this.FV)),this.YB=this.FV._V()||kO}nf(){this.$V(),this.YB()}},
jf:qD,Mf:Lu}},KD=new WeakMap,GD=new WeakMap,JD=e=>{const t=KD.t(e.Ve)
t&&t(e)},XD=e=>{e.d(JD)},QD={ws:0,np:1},ZD={qU:{dB:class extends fD{l(){
super(...arguments),this.zV=0,this.UV=0}BV(){this.nf()
const{rw:e={}}=this.Vt.Vf(),{ih:t,Q_:n,VV:r="some",rs:i}=e,o={ih:t?t.S:void 0,
yI:n,gI:"number"==typeof r?r:QD[r]}
return((e,t,n)=>{const r=(({ih:e,...t})=>{const n=e||document
GD.On(n)||GD.te(n,{})
const r=GD.t(n),i=JSON.stringify(t)
return r[i]||(r[i]=new IntersectionObserver(XD,{ih:e,...t})),r[i]})(t)
return KD.te(e,n),r.Ja(e),()=>{KD.at(e),r.Qa(e)}})(this.Vt.S,o,(e=>{
const{HV:t}=e
if(this.UV===t)return
if(this.UV=t,i&&!t&&this.zV)return
t&&(this.zV=1),this.Vt.Nf&&this.Vt.Nf.mp("whileInView",t)
const{WV:n,qV:r}=this.Vt.Vf(),o=t?n:r
o&&o(e)}))}tf(){this.BV()}So(){
if("undefined"==typeof IntersectionObserver)return
const{f:e,pB:t}=this.Vt
;["amount","margin","root"].ws((({rw:e={}},{rw:t={}}={})=>n=>e[n]!==t[n])(e,t))&&this.BV()
}nf(){}}},HU:{dB:class extends fD{tf(){const{S:e}=this.Vt
e&&(this.nf=((e,t,n={})=>{const[r,i,o]=tc(e,n),s=e=>{const r=e.Et
if(!oc(e))return
sA.$(r)
const o=t(r,e),s=(e,t)=>{
window.Nu("pointerup",a),window.Nu("pointercancel",l),sA.On(r)&&sA.at(r),
oc(e)&&"function"==typeof o&&o(e,{pb:t})},a=e=>{
s(e,r===window||r===document||n.YV||rA(r,e.Ve))},l=e=>{s(e,0)}
window.Pn("pointerup",a,i),window.Pn("pointercancel",l,i)}
return r.d((e=>{var t
;(n.YV?window:e).Pn("pointerdown",s,i),Ql(e)&&(e.Pn("focus",(e=>((e,t)=>{
const n=e.Et
if(!n)return
const r=rc((()=>{if(sA.On(n))return
ic(n,"down")
const e=rc((()=>{ic(n,"up")}))
n.Pn("keyup",e,t),n.Pn("blur",(()=>ic(n,"cancel")),t)}))
n.Pn("keydown",r,t),n.Pn("blur",(()=>n.Nu("keydown",r)),t)
})(e,i))),t=e,oA.On(t.Pr)||-1!==t.vs||e.KV("tabindex")||(e.vs=0))})),o
})(e,((e,t)=>(Sd(this.Vt,t,"Start"),
(e,{pb:t})=>Sd(this.Vt,e,t?"End":"Cancel"))),{YV:this.Vt.f.GV}))}nf(){}}},Tn:{
dB:class extends fD{l(){super(...arguments),this.ol=0}gT(){let e=0
try{e=this.Vt.S.va(":focus-visible")}catch(XF){e=1}
e&&this.Vt.Nf&&(this.Vt.Nf.mp("whileFocus",1),this.ol=1)}cD(){
this.ol&&this.Vt.Nf&&(this.Vt.Nf.mp("whileFocus",0),this.ol=0)}tf(){
this.nf=SO(yu(this.Vt.S,"focus",(()=>this.gT())),yu(this.Vt.S,"blur",(()=>this.cD())))
}nf(){}}},VU:{dB:class extends fD{tf(){const{S:e}=this.Vt
e&&(this.nf=((e,t,n={})=>{const[r,i,o]=tc(e,n),s=e=>{if(!nc(e))return
const{Ve:n}=e,r=t(n,e)
if("function"!=typeof r||!n)return
const o=e=>{nc(e)&&(r(e),n.Nu("pointerleave",o))}
n.Pn("pointerleave",o,i)}
return r.d((e=>{e.Pn("pointerenter",s,i)})),o
})(e,((e,t)=>(Nd(this.Vt,t,"Start"),e=>Nd(this.Vt,e,"End")))))}nf(){}}}},eI=zc({
...mD,...ZD,...YD,gh:{jf:qD,Mf:Lu}},rD),tI={zs:{e:"Width",Wa:"Left"},Us:{
e:"Height",Wa:"Top"}},nI={rn:0,jI:.5,in:1},rI=[0,0],iI={JV:[[0,1],[1,1]],
XV:[[0,0],[1,0]],QV:[[1,0],[0,1]],yy:[[0,0],[1,1]]},oI={zs:0,Us:0
},sI=new WeakMap,aI=new WeakMap,lI=new WeakMap,cI=e=>e===document.scrollingElement?window:e,uI=new Map,dI=()=>({
Sa:Zl(0),_a:Zl(0),Ty:Zl(0),Ey:Zl(0)}),hI=e=>e?!e.S:0,fI={ws:0,np:1},pI=Bp.$o({
Ay:"system",Dy(){return null}}),mI=Bp.$o(void 0),vI={},yI=(e,t)=>{function n(e){
const t=new Event("vite:preloadError",{ns:1})
if(t.Mr=e,window.yt(t),!t.Mt)throw e}let r=Promise.vl()
if(t&&t.e>0){document.getElementsByTagName("link")
const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.sh)||(null==e?void 0:e.Is("nonce"))
r=Promise.allSettled(t.Oo((e=>{if((e=(e=>"/"+e)(e))in vI)return
vI[e]=1
const t=e.yc(".css"),r=t?'[rel="stylesheet"]':""
if(document.querySelector(`link[href="${e}"]${r}`))return
const i=document.Ui("link")
return i.gx=t?"stylesheet":"modulepreload",t||(i.ZV="script"),i.mx="",i.Gt=e,n&&i.J("nonce",n),
document.ch.Yi(i),t?new Promise(((t,n)=>{
i.Pn("load",t),i.Pn("error",(()=>n(Error("Unable to preload CSS for "+e))))
})):void 0})))}return r.R((t=>{for(const e of t||[])"rejected"===e.al&&n(e.gl)
return e().yl(n)}))}
class gI extends Error{l(e,t="FunctionsError",n){super(e),this.oe=t,this.p=n}}
class wI extends gI{l(e){
super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}
class bI extends gI{l(e){
super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}
class xI extends gI{l(e){
super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}
(hT=hN||(hN={})).QV="any",
hT.eH="ap-northeast-1",hT.tH="ap-northeast-2",hT.nH="ap-south-1",
hT.rH="ap-southeast-1",
hT.iH="ap-southeast-2",hT.oH="ca-central-1",hT.sH="eu-central-1",
hT.aH="eu-west-1",
hT.lH="eu-west-2",hT.cH="eu-west-3",hT.uH="sa-east-1",hT.dH="us-east-1",
hT.hH="us-west-1",hT.fH="us-west-2",fN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{
function s(e){try{l(r.P(e))}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))
}catch(XF){o(XF)}}function l(e){var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
class kI{l(e,{By:t={},mH:n,vH:r=hN.QV}={}){
this.jS=e,this.By=t,this.vH=r,this.WR=(e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>yI((async()=>{
const{a:e}=await Promise.vl().R((()=>CI))
return{a:e}}),void 0).R((({a:t})=>t(...e))):fetch),(...e)=>t(...e)
})(n)}yH(e){this.By.dg="Bearer "+e}gH(e,t={}){var n
return fN(this,void 0,void 0,(function*(){try{const{By:r,Uy:i,we:o}=t
let s={},{vH:a}=t
a||(a=this.vH)
const l=new URL(`${this.jS}/${e}`)
let c
a&&"any"!==a&&(s["wH"]=a,l.bH.te("forceFunctionRegion",a)),o&&(r&&!{}.s.o(r,"Content-Type")||!r)&&("undefined"!=typeof Blob&&o instanceof Blob||o instanceof ArrayBuffer?(s["Vy"]="application/octet-stream",
c=o):"string"==typeof o?(s["Vy"]="text/plain",
c=o):"undefined"!=typeof FormData&&o instanceof FormData?c=o:(s["Vy"]="application/json",
c=JSON.stringify(o)))
const u=yield this.WR(l.C(),{Uy:i||"POST",
By:Object.ml(Object.ml(Object.ml({},s),this.By),r),we:c}).yl((e=>{
throw new wI(e)})),d=u.By.t("x-relay-error")
if(d&&"true"===d)throw new bI(u)
if(!u.Hy)throw new xI(u)
let h,f=(null!==(n=u.By.t("Content-Type"))&&void 0!==n?n:"text/plain").ne(";")[0].Z()
return h="application/json"===f?yield u.qy():"application/octet-stream"===f?yield u.xH():"text/event-stream"===f?u:"multipart/form-data"===f?yield u.kH():yield u.OS(),
{Ft:h,Fl:null,NH:u}}catch(r){return{Ft:null,Fl:r,
NH:r instanceof xI||r instanceof bI?r.p:void 0}}}))}}
pN={},mN={},vN={},yN={},gN={},wN={}
const NI=(bN=(()=>{if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw Error("unable to locate global object")
})()).WR,SI=bN.WR.jn(bN),_I=bN.SH,TI=bN._H,EI=bN.Yy,CI=Object.freeze(Object.defineProperty({
rk:null,SH:_I,_H:TI,Yy:EI,a:SI,WR:NI},Symbol.toStringTag,{r:"Module"})),MI=n(CI)
Object.defineProperty(xN={},"i",{r:1}),xN.a=class extends Error{l(e){
super(e.ci),this.oe="PostgrestError",this.TH=e.TH,this.EH=e.EH,this.sg=e.sg}
},kN=fp&&fp.CH||(e=>e&&e.i?e:{a:e}),Object.defineProperty(wN,"i",{r:1})
const OI=kN(MI),jI=kN(xN)
wN.a=class{l(e){
this.MH=0,this.Uy=e.Uy,this.jS=e.jS,this.By=e.By,this.Nw=e.Nw,this.we=e.we,
this.MH=e.MH,
this.Yl=e.Yl,this.OH=e.OH,e.WR?this.WR=e.WR:"undefined"==typeof fetch?this.WR=OI.a:this.WR=fetch
}A$(){return this.MH=1,this}jH(e,t){
return this.By=Object.ml({},this.By),this.By[e]=t,this}R(e,t){
void 0===this.Nw||(["GET","HEAD"].ie(this.Uy)?this.By["PH"]=this.Nw:this.By["AH"]=this.Nw),
"GET"!==this.Uy&&"HEAD"!==this.Uy&&(this.By["Vy"]="application/json")
let n=(0,this.WR)(this.jS.C(),{Uy:this.Uy,By:this.By,we:JSON.stringify(this.we),
Yl:this.Yl}).R((async e=>{var t,n,r
let i=null,o=null,s=null,a=e.al,l=e.zc
if(e.Hy){if("HEAD"!==this.Uy){const t=await e.OS()
""===t||(o="text/csv"===this.By.DH||this.By.DH&&this.By.DH.ie("application/vnd.pgrst.plan+text")?t:JSON.Rc(t))
}
const r=null===(t=this.By.IH)||void 0===t?void 0:t.Q(/count=(exact|planned|estimated)/),c=null===(n=e.By.t("content-range"))||void 0===n?void 0:n.ne("/")
r&&c&&c.e>1&&(s=parseInt(c[1])),this.OH&&"GET"===this.Uy&&Array.isArray(o)&&(o.e>1?(i={
sg:"PGRST116",
TH:`Results contain ${o.e} rows, application/vnd.pgrst.object+json requires 1 row`,
EH:null,ci:"JSON object requested, multiple (or no) rows returned"
},o=null,s=null,a=406,l="Not Acceptable"):o=1===o.e?o[0]:null)}else{
const t=await e.OS()
try{i=JSON.Rc(t),Array.isArray(i)&&404===e.al&&(o=[],i=null,a=200,l="OK")
}catch(c){404===e.al&&""===t?(a=204,l="No Content"):i={ci:t}}
if(i&&this.OH&&(null===(r=null==i?void 0:i.TH)||void 0===r?void 0:r.ie("0 rows"))&&(i=null,
a=200,l="OK"),i&&this.MH)throw new jI.a(i)}return{Fl:i,Ft:o,Vw:s,al:a,zc:l}}))
return this.MH||(n=n.yl((e=>{var t,n,r
return{Fl:{
ci:`${null!==(t=null==e?void 0:e.oe)&&void 0!==t?t:"FetchError"}: ${null==e?void 0:e.ci}`,
TH:""+(null!==(n=null==e?void 0:e.ee)&&void 0!==n?n:""),EH:"",
sg:""+(null!==(r=null==e?void 0:e.sg)&&void 0!==r?r:"")},Ft:null,Vw:null,al:0,
zc:""}}))),n.R(e,t)}RH(){return this}$H(){return this}
},NN=fp&&fp.CH||(e=>e&&e.i?e:{a:e}),Object.defineProperty(gN,"i",{r:1})
const PI=NN(wN)
let AI=class extends PI.a{ww(e){let t=0
const n=(null!=e?e:"*").ne("").Oo((e=>/\s/.K(e)&&!t?"":('"'===e&&(t=!t),e))).A("")
return this.jS.bH.te("select",n),this.By.IH&&(this.By.IH+=","),this.By.IH+="return=representation",
this}yw(e,{bw:t=1,FH:n,LH:r,zH:i=r}={}){
const o=i?i+".order":"order",s=this.jS.bH.t(o)
return this.jS.bH.te(o,`${s?s+",":""}${e}.${t?"asc":"desc"}${void 0===n?"":n?".nullsfirst":".nullslast"}`),
this}lb(e,{LH:t,zH:n=t}={}){const r=void 0===n?"limit":n+".limit"
return this.jS.bH.te(r,""+e),this}CS(e,t,{LH:n,zH:r=n}={}){
const i=void 0===r?"offset":r+".offset",o=void 0===r?"limit":r+".limit"
return this.jS.bH.te(i,""+e),this.jS.bH.te(o,""+(t-e+1)),this}UH(e){
return this.Yl=e,this}Cw(){
return this.By.DH="application/vnd.pgrst.object+json",this}BH(){
return"GET"===this.Uy?this.By.DH="application/json":this.By.DH="application/vnd.pgrst.object+json",
this.OH=1,this}VH(){return this.By.DH="text/csv",this}HH(){
return this.By.DH="application/geo+json",this}
WH({qH:e=0,YH:t=0,KH:n=0,GH:r=0,JH:i=0,XH:o="text"}={}){var s
const a=[e?"analyze":null,t?"verbose":null,n?"settings":null,r?"buffers":null,i?"wal":null].Ro(Boolean).A("|"),l=null!==(s=this.By.DH)&&void 0!==s?s:"application/json"
return this.By.DH=`application/vnd.pgrst.plan+${o}; for="${l}"; options=${a};`,this
}QH(){var e
return(null!==(e=this.By.IH)&&void 0!==e?e:"").Z().e>0?this.By.IH+=",tx=rollback":this.By.IH="tx=rollback",
this}RH(){return this}}
gN.a=AI,SN=fp&&fp.CH||(e=>e&&e.i?e:{a:e}),Object.defineProperty(yN,"i",{r:1})
const DI=SN(gN)
let II=class extends DI.a{gw(e,t){return this.jS.bH.ZH(e,"eq."+t),this}cb(e,t){
return this.jS.bH.ZH(e,"neq."+t),this}eW(e,t){
return this.jS.bH.ZH(e,"gt."+t),this}tW(e,t){
return this.jS.bH.ZH(e,"gte."+t),this}nW(e,t){
return this.jS.bH.ZH(e,"lt."+t),this}rW(e,t){
return this.jS.bH.ZH(e,"lte."+t),this}iW(e,t){return this.jS.bH.ZH(e,"like."+t),
this}oW(e,t){return this.jS.bH.ZH(e,`like(all).{${t.A(",")}}`),this}sW(e,t){
return this.jS.bH.ZH(e,`like(any).{${t.A(",")}}`),this}aW(e,t){
return this.jS.bH.ZH(e,"ilike."+t),this}lW(e,t){
return this.jS.bH.ZH(e,`ilike(all).{${t.A(",")}}`),this}cW(e,t){
return this.jS.bH.ZH(e,`ilike(any).{${t.A(",")}}`),this}Ue(e,t){
return this.jS.bH.ZH(e,"is."+t),this}uW(e,t){
const n=Array.Go(new Set(t)).Oo((e=>"string"==typeof e&&RegExp("[,()]").K(e)?`"${e}"`:""+e)).A(",")
return this.jS.bH.ZH(e,`in.(${n})`),this}qt(e,t){
return"string"==typeof t?this.jS.bH.ZH(e,"cs."+t):Array.isArray(t)?this.jS.bH.ZH(e,`cs.{${t.A(",")}}`):this.jS.bH.ZH(e,"cs."+JSON.stringify(t)),
this}dW(e,t){
return"string"==typeof t?this.jS.bH.ZH(e,"cd."+t):Array.isArray(t)?this.jS.bH.ZH(e,`cd.{${t.A(",")}}`):this.jS.bH.ZH(e,"cd."+JSON.stringify(t)),
this}hW(e,t){return this.jS.bH.ZH(e,"sr."+t),this}fW(e,t){
return this.jS.bH.ZH(e,"nxl."+t),this}pW(e,t){
return this.jS.bH.ZH(e,"sl."+t),this}mW(e,t){
return this.jS.bH.ZH(e,"nxr."+t),this}vW(e,t){
return this.jS.bH.ZH(e,"adj."+t),this}yW(e,t){
return"string"==typeof t?this.jS.bH.ZH(e,"ov."+t):this.jS.bH.ZH(e,`ov.{${t.A(",")}}`),
this}gW(e,t,{qR:n,k:r}={}){let i=""
"plain"===r?i="pl":"phrase"===r?i="ph":"websearch"===r&&(i="w")
const o=void 0===n?"":`(${n})`
return this.jS.bH.ZH(e,`${i}fts${o}.${t}`),this}Q(e){
return Object.Ou(e).d((([e,t])=>{this.jS.bH.ZH(e,"eq."+t)})),this}wW(e,t,n){
return this.jS.bH.ZH(e,`not.${t}.${n}`),this}bW(e,{LH:t,zH:n=t}={}){
const r=n?n+".or":"or"
return this.jS.bH.ZH(r,`(${e})`),this}Ro(e,t,n){
return this.jS.bH.ZH(e,`${t}.${n}`),this}}
yN.a=II,_N=fp&&fp.CH||(e=>e&&e.i?e:{a:e}),Object.defineProperty(vN,"i",{r:1})
const RI=_N(yN)
vN.a=class{l(e,{By:t={},Nw:n,WR:r}){this.jS=e,this.By=t,this.Nw=n,this.WR=r}
ww(e,{ch:t=0,Vw:n}={}){const r=t?"HEAD":"GET"
let i=0
const o=(null!=e?e:"*").ne("").Oo((e=>/\s/.K(e)&&!i?"":('"'===e&&(i=!i),e))).A("")
return this.jS.bH.te("select",o),n&&(this.By.IH="count="+n),new RI.a({Uy:r,
jS:this.jS,By:this.By,Nw:this.Nw,WR:this.WR,xW:0})}jb(e,{Vw:t,kW:n=1}={}){
const r=[]
if(this.By.IH&&r.M(this.By.IH),t&&r.M("count="+t),n||r.M("missing=default"),this.By.IH=r.A(","),
Array.isArray(e)){const t=e.Ao(((e,t)=>e.Gr(Object.h(t))),[])
if(t.e>0){const e=[...new Set(t)].Oo((e=>`"${e}"`))
this.jS.bH.te("columns",e.A(","))}}return new RI.a({Uy:"POST",jS:this.jS,
By:this.By,Nw:this.Nw,we:e,WR:this.WR,xW:0})}NW(e,{SW:t,_W:n=0,Vw:r,kW:i=1}={}){
const o=[`resolution=${n?"ignore":"merge"}-duplicates`]
if(void 0!==t&&this.jS.bH.te("on_conflict",t),this.By.IH&&o.M(this.By.IH),r&&o.M("count="+r),
i||o.M("missing=default"),this.By.IH=o.A(","),Array.isArray(e)){
const t=e.Ao(((e,t)=>e.Gr(Object.h(t))),[])
if(t.e>0){const e=[...new Set(t)].Oo((e=>`"${e}"`))
this.jS.bH.te("columns",e.A(","))}}return new RI.a({Uy:"POST",jS:this.jS,
By:this.By,Nw:this.Nw,we:e,WR:this.WR,xW:0})}So(e,{Vw:t}={}){const n=[]
return this.By.IH&&n.M(this.By.IH),t&&n.M("count="+t),this.By.IH=n.A(","),new RI.a({
Uy:"PATCH",jS:this.jS,By:this.By,Nw:this.Nw,we:e,WR:this.WR,xW:0})}
at({Vw:e}={}){const t=[]
return e&&t.M("count="+e),this.By.IH&&t.qn(this.By.IH),this.By.IH=t.A(","),new RI.a({
Uy:"DELETE",jS:this.jS,By:this.By,Nw:this.Nw,WR:this.WR,xW:0})}
},TN={},Object.defineProperty(EN={},"i",{r:1
}),EN.nk=void 0,EN.nk="0.0.0-automated",Object.defineProperty(TN,"i",{r:1
}),TN.TW=void 0
const $I=EN
TN.TW={EW:"postgrest-js/"+$I.nk},CN=fp&&fp.CH||(e=>e&&e.i?e:{a:e
}),Object.defineProperty(mN,"i",{r:1})
const FI=CN(vN),LI=CN(yN),zI=TN
mN.a=class e{l(e,{By:t={},Nw:n,WR:r}={}){
this.jS=e,this.By=Object.ml(Object.ml({},zI.TW),t),this.CW=n,this.WR=r}Go(e){
const t=new URL(`${this.jS}/${e}`)
return new FI.a(t,{By:Object.ml({},this.By),Nw:this.CW,WR:this.WR})}Nw(t){
return new e(this.jS,{By:this.By,Nw:t,WR:this.WR})}
MW(e,t={},{ch:n=0,t:r=0,Vw:i}={}){let o
const s=new URL(`${this.jS}/rpc/${e}`)
let a
n||r?(o=n?"HEAD":"GET",Object.Ou(t).Ro((([e,t])=>void 0!==t)).Oo((([e,t])=>[e,Array.isArray(t)?`{${t.A(",")}}`:""+t])).d((([e,t])=>{
s.bH.ZH(e,t)}))):(o="POST",a=t)
const l=Object.ml({},this.By)
return i&&(l.IH="count="+i),new LI.a({Uy:o,jS:s,By:l,Nw:this.CW,we:a,WR:this.WR,
xW:0})}},MN=fp&&fp.CH||(e=>e&&e.i?e:{a:e}),Object.defineProperty(pN,"i",{r:1
}),pN.OW=pN.jW=pN.PW=pN.AW=pN.DW=pN.IW=void 0
const UI=MN(mN)
pN.IW=UI.a
const BI=MN(vN)
pN.DW=BI.a
const VI=MN(yN)
pN.AW=VI.a
const HI=MN(gN)
pN.PW=HI.a
const WI=MN(wN)
pN.jW=WI.a
const qI=MN(xN)
pN.OW=qI.a,ON=pN.a={IW:UI.a,DW:BI.a,AW:VI.a,PW:HI.a,jW:WI.a,OW:qI.a}
const{IW:YI,DW:KI,AW:GI,PW:JI,jW:XI,OW:QI}=ON,ZI=(()=>{
if("undefined"!=typeof WebSocket)return WebSocket
if(void 0!==global.WebSocket)return global.WebSocket
if(void 0!==window.WebSocket)return window.WebSocket
if(void 0!==self.WebSocket)return self.WebSocket
throw Error("`WebSocket` is not supported in this environment")})()
;(fT=jN||(jN={}))[fT.RW=0]="connecting",
fT[fT.xo=1]="open",fT[fT.$W=2]="closing",
fT[fT.FW=3]="closed",(pT=PN||(PN={})).FW="closed",
pT.LW="errored",pT.zW="joined",
pT.UW="joining",pT.BW="leaving",(mT=AN||(AN={})).VW="phx_close",
mT.Fl="phx_error",
mT.A="phx_join",mT.HW="phx_reply",mT.WW="phx_leave",mT.vg="access_token",
(DN||(DN={})).qW="websocket",
(vT=IN||(IN={})).YW="connecting",vT.KW="open",vT.GW="closing",vT.JW="closed"
class eR{l(){this.XW=1}QW(e,t){
return e.l===ArrayBuffer?t(this.ZW(e)):t("string"==typeof e?JSON.Rc(e):{})}
ZW(e){const t=new DataView(e),n=new TextDecoder
return this.eq(e,t,n)}eq(e,t,n){const r=t.tq(1),i=t.tq(2)
let o=this.XW+2
const s=n.QW(e.q(o,o+r))
o+=r
const a=n.QW(e.q(o,o+i))
return o+=i,{y:null,nq:s,Lt:a,Mr:JSON.Rc(n.QW(e.q(o,e.rq)))}}}class tR{l(e,t){
this.Or=e,this.iq=t,this.oq=void 0,this.sq=0,this.Or=e,this.iq=t}yp(){this.sq=0,
clearTimeout(this.oq)}aq(){clearTimeout(this.oq),this.oq=setTimeout((()=>{
this.sq=this.sq+1,this.Or()}),this.iq(this.sq+1))}}
(yT=RN||(RN={})).lq="abstime",
yT.cq="bool",yT.uw="date",yT.uq="daterange",yT.dq="float4",
yT.hq="float8",yT.fq="int2",
yT.pq="int4",yT.mq="int4range",yT.vq="int8",yT.yq="int8range",
yT.qy="json",yT.gq="jsonb",
yT.wq="money",yT.bq="numeric",yT.xq="oid",yT.kq="reltime",
yT.OS="text",yT.uy="time",
yT.Pu="timestamp",yT.Nq="timestamptz",yT.Sq="timetz",yT._q="tsrange",
yT.Tq="tstzrange"
const nR=(e,t,n={})=>{var r
const i=null!==(r=n.Eq)&&void 0!==r?r:[]
return Object.h(t).Ao(((n,r)=>(n[r]=rR(r,e,t,i),n)),{})},rR=(e,t,n,r)=>{
const i=t.Zu((t=>t.oe===e)),o=null==i?void 0:i.k,s=n[e]
return o&&!r.ie(o)?iR(o,s):oR(s)},iR=(e,t)=>{if("_"===e.ac(0)){
const n=e.q(1,e.e)
return cR(t,n)}switch(e){case RN.cq:return sR(t)
case RN.dq:case RN.hq:case RN.fq:case RN.pq:case RN.vq:case RN.bq:case RN.xq:
return aR(t)
case RN.qy:case RN.gq:return lR(t)
case RN.Pu:return uR(t)
case RN.lq:case RN.uw:case RN.uq:case RN.mq:case RN.yq:case RN.wq:case RN.kq:
case RN.OS:case RN.uy:case RN.Nq:case RN.Sq:case RN._q:case RN.Tq:default:
return oR(t)}},oR=e=>e,sR=e=>{switch(e){case"t":return 1
case"f":return 0
default:return e}},aR=e=>{if("string"==typeof e){const t=parseFloat(e)
if(!Number.isNaN(t))return t}return e},lR=e=>{if("string"==typeof e)try{
return JSON.Rc(e)}catch(t){return e}return e},cR=(e,t)=>{
if("string"!=typeof e)return e
const n=e.e-1,r=e[n]
if("{"===e[0]&&"}"===r){let r
const o=e.q(1,n)
try{r=JSON.Rc("["+o+"]")}catch(i){r=o?o.ne(","):[]}return r.Oo((e=>iR(t,e)))}
return e},uR=e=>"string"==typeof e?e.E(" ","T"):e,dR=e=>{let t=e
return t=t.E(/^ws/i,"http"),t=t.E(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),
t.E(/\/+$/,"")}
class hR{l(e,t,n={},r=1e4){
this.kw=e,this.Lt=t,this.Mr=n,this.Cq=r,this.Mq=0,this.Oq=void 0,
this.y="",this.jq=null,this.Pq=[],this.Aq=null}Dq(e){
this.Cq=e,this.Iq(),this.y="",this.Aq=null,this.jq=null,this.Mq=0,this.Rq()}
Rq(){this.$q("timeout")||(this.Fq(),this.Mq=1,this.kw.Lq.M({nq:this.kw.nq,
Lt:this.Lt,Mr:this.Mr,y:this.y,zq:this.kw.Uq()}))}Bq(e){
this.Mr=Object.ml(Object.ml({},this.Mr),e)}Vq(e,t){var n
return this.$q(e)&&t(null===(n=this.jq)||void 0===n?void 0:n.NH),this.Pq.M({
al:e,Or:t}),this}Fq(){
this.Oq||(this.y=this.kw.Lq.Hq(),this.Aq=this.kw.Wq(this.y),
this.kw.qq(this.Aq,{},(e=>{this.Iq(),this.Yq(),this.jq=e,this.Kq(e)
})),this.Oq=setTimeout((()=>{this.YI("timeout",{})}),this.Cq))}YI(e,t){
this.Aq&&this.kw.Gq(this.Aq,{al:e,NH:t})}Yr(){this.Iq(),this.Yq()}Iq(){
this.Aq&&this.kw.Jq(this.Aq,{})}Yq(){clearTimeout(this.Oq),this.Oq=void 0}
Kq({al:e,NH:t}){this.Pq.Ro((t=>t.al===e)).d((e=>e.Or(t)))}$q(e){
return this.jq&&this.jq.al===e}}
(gT=$N||($N={})).Xq="sync",gT.Qq="join",gT.Zq="leave"
class fR{l(e,t){this.kw=e,this.Zr={},this.eY=[],this.tY=null,this.nY={rY(){},
iY(){},oY(){}}
const n=(null==t?void 0:t.lw)||{Zr:"presence_state",sY:"presence_diff"}
this.kw.qq(n.Zr,{},(e=>{const{rY:t,iY:n,oY:r}=this.nY
this.tY=this.kw.Uq(),this.Zr=fR.aY(this.Zr,e,t,n),this.eY.d((e=>{
this.Zr=fR.lY(this.Zr,e,t,n)})),this.eY=[],r()})),this.kw.qq(n.sY,{},(e=>{
const{rY:t,iY:n,oY:r}=this.nY
this.cY()?this.eY.M(e):(this.Zr=fR.lY(this.Zr,e,t,n),r())})),this.rY(((e,t,n)=>{
this.kw.Gq("presence",{Lt:"join",g:e,uY:t,dY:n})})),this.iY(((e,t,n)=>{
this.kw.Gq("presence",{Lt:"leave",g:e,uY:t,hY:n})})),this.oY((()=>{
this.kw.Gq("presence",{Lt:"sync"})}))}static aY(e,t,n,r){
const i=this.fY(e),o=this.pY(t),s={},a={}
return this.Oo(i,((e,t)=>{o[e]||(a[e]=t)})),this.Oo(o,((e,t)=>{const n=i[e]
if(n){
const r=t.Oo((e=>e.mY)),i=n.Oo((e=>e.mY)),o=t.Ro((e=>0>i.Fe(e.mY))),l=n.Ro((e=>0>r.Fe(e.mY)))
o.e>0&&(s[e]=o),l.e>0&&(a[e]=l)}else s[e]=t})),this.lY(i,{vY:s,yY:a},n,r)}
static lY(e,t,n,r){const{vY:i,yY:o}={vY:this.pY(t.vY),yY:this.pY(t.yY)}
return n||(n=()=>{}),r||(r=()=>{}),this.Oo(i,((t,r)=>{var i
const o=null!==(i=e[t])&&void 0!==i?i:[]
if(e[t]=this.fY(r),o.e>0){const n=e[t].Oo((e=>e.mY)),r=o.Ro((e=>0>n.Fe(e.mY)))
e[t].qn(...r)}n(t,o,r)})),this.Oo(o,((t,n)=>{let i=e[t]
if(!i)return
const o=n.Oo((e=>e.mY))
i=i.Ro((e=>0>o.Fe(e.mY))),e[t]=i,r(t,i,n),0===i.e&&delete e[t]})),e}
static Oo(e,t){return Object.getOwnPropertyNames(e).Oo((n=>t(n,e[n])))}
static pY(e){return e=this.fY(e),Object.getOwnPropertyNames(e).Ao(((t,n)=>{
const r=e[n]
return t[n]="gY"in r?r.gY.Oo((e=>(e.mY=e.wY,delete e.wY,delete e.bY,e))):r,t
}),{})}static fY(e){return JSON.Rc(JSON.stringify(e))}rY(e){this.nY.rY=e}iY(e){
this.nY.iY=e}oY(e){this.nY.oY=e}cY(){return!this.tY||this.tY!==this.kw.Uq()}}
(wT=FN||(FN={})).xY="*",
wT.kY="INSERT",wT.NY="UPDATE",wT.SY="DELETE",(bT=LN||(LN={}))._Y="broadcast",
bT.TY="presence",
bT.EY="postgres_changes",bT.CY="system",(xT=zN||(zN={})).MY="SUBSCRIBED",
xT.OY="TIMED_OUT",xT.jY="CLOSED",xT.PY="CHANNEL_ERROR"
class pR{l(e,t={qR:{}},n){
this.nq=e,this.gc=t,this.Lq=n,this.AY={},this.Zr=PN.FW,
this.DY=0,this.IY=[],this.RY=e.E(/^realtime:/i,""),this.gc.qR=Object.ml({$Y:{
FY:0,CC:0},LY:{g:""},zY:0
},t.qR),this.Cq=this.Lq.Cq,this.UY=new hR(this,AN.A,this.gc,this.Cq),
this.BY=new tR((()=>this.VY()),this.Lq.HY),this.UY.Vq("ok",(()=>{
this.Zr=PN.zW,this.BY.yp(),this.IY.d((e=>e.Rq())),this.IY=[]})),this.WY((()=>{
this.BY.yp(),
this.Lq.ON("channel",`close ${this.nq} ${this.Uq()}`),this.Zr=PN.FW,
this.Lq.qY(this)})),this.YY((e=>{
this.KY()||this.GY()||(this.Lq.ON("channel","error "+this.nq,e),
this.Zr=PN.LW,this.BY.aq())})),this.UY.Vq("timeout",(()=>{
this.JY()&&(this.Lq.ON("channel","timeout "+this.nq,this.UY.Cq),
this.Zr=PN.LW,this.BY.aq())})),this.qq(AN.HW,{},((e,t)=>{this.Gq(this.Wq(t),e)
})),
this.LY=new fR(this),this.XY=dR(this.Lq.QY)+"/api/broadcast",this.zY=this.gc.qR.zY||0
}xw(e,t=this.Cq){var n,r
if(this.Lq.ZY()||this.Lq.eK(),this.Zr==PN.FW){const{qR:{$Y:i,LY:o,zY:s}}=this.gc
this.YY((t=>null==e?void 0:e(zN.PY,t))),this.WY((()=>null==e?void 0:e(zN.jY)))
const a={},l={$Y:i,LY:o,
tK:null!==(r=null===(n=this.AY.tK)||void 0===n?void 0:n.Oo((e=>e.Ro)))&&void 0!==r?r:[],
zY:s}
this.Lq.nK&&(a.vg=this.Lq.nK),this.rK(Object.ml({qR:l},a)),this.DY=1,this.iK(t),
this.UY.Vq("ok",(async({tK:t})=>{var n
if(this.Lq.yH(),void 0!==t){
const r=this.AY.tK,i=null!==(n=null==r?void 0:r.e)&&void 0!==n?n:0,o=[]
for(let n=0;i>n;n++){const i=r[n],{Ro:{Lt:s,Nw:a,Sw:l,Ro:c}}=i,u=t&&t[n]
if(!u||u.Lt!==s||u.Nw!==a||u.Sw!==l||u.Ro!==c)return this.Dg(),this.Zr=PN.LW,void(null==e||e(zN.PY,Error("mismatch between server and client bindings for postgres changes")))
o.M(Object.ml(Object.ml({},i),{ir:u.ir}))}return this.AY.tK=o,void(e&&e(zN.MY))}
null==e||e(zN.MY)})).Vq("error",(t=>{
this.Zr=PN.LW,null==e||e(zN.PY,Error(JSON.stringify(Object.Lo(t).A(", ")||"error")))
})).Vq("timeout",(()=>{null==e||e(zN.OY)}))}return this}oK(){return this.LY.Zr}
async CN(e,t={}){return await this.Rq({k:"presence",Lt:"track",Mr:e
},t.Cq||this.Cq)}async sK(e={}){return await this.Rq({k:"presence",Lt:"untrack"
},e)}Cy(e,t,n){return this.qq(e,t,n)}async Rq(e,t={}){var n,r
if(this.aK()||"broadcast"!==e.k)return new Promise((n=>{var r,i,o
const s=this.lK(e.k,e,t.Cq||this.Cq)
"broadcast"!==e.k||(null===(o=null===(i=null===(r=this.gc)||void 0===r?void 0:r.qR)||void 0===i?void 0:i.$Y)||void 0===o?void 0:o.FY)||n("ok"),
s.Vq("ok",(()=>n("ok"))),
s.Vq("error",(()=>n("error"))),s.Vq("timeout",(()=>n("timed out")))}))
{const{Lt:o,Mr:s}=e,a={Uy:"POST",By:{dg:this.Lq.nK?"Bearer "+this.Lq.nK:"",
cK:this.Lq.uK?this.Lq.uK:"",Vy:"application/json"},we:JSON.stringify({dK:[{
nq:this.RY,Lt:o,Mr:s,zY:this.zY}]})}
try{const e=await this.hK(this.XY,a,null!==(n=t.Cq)&&void 0!==n?n:this.Cq)
return await(null===(r=e.we)||void 0===r?void 0:r.Ol()),e.Hy?"ok":"error"
}catch(i){return"AbortError"===i.oe?"timed out":"error"}}}rK(e){this.UY.Bq(e)}
Dg(e=this.Cq){this.Zr=PN.BW
const t=()=>{
this.Lq.ON("channel","leave "+this.nq),this.Gq(AN.VW,"leave",this.Uq())}
this.UY.Yr()
let n=null
return new Promise((r=>{n=new hR(this,AN.WW,{},e),n.Vq("ok",(()=>{t(),r("ok")
})).Vq("timeout",(()=>{t(),r("timed out")})).Vq("error",(()=>{r("error")
})),n.Rq(),this.aK()||n.YI("ok",{})})).GP((()=>{null==n||n.Yr()}))}BL(){
this.IY.d((e=>e.Yr())),this.BY&&clearTimeout(this.BY.oq),this.UY.Yr()}
async hK(e,t,n){
const r=new AbortController,i=setTimeout((()=>r.jl()),n),o=await this.Lq.WR(e,Object.ml(Object.ml({},t),{
Yl:r.Yl}))
return clearTimeout(i),o}lK(e,t,n=this.Cq){
if(!this.DY)throw`tried to push '${e}' to '${this.nq}' before joining. Use channel.subscribe() before pushing events`
let r=new hR(this,e,t,n)
return this.aK()?r.Rq():(r.Fq(),this.IY.M(r)),r}fK(e,t,n){return t}pK(e){
return this.nq===e}Uq(){return this.UY.y}Gq(e,t,n){var r,i
const o=e.mK(),{VW:s,Fl:a,WW:l,A:c}=AN
if(n&&[s,a,l,c].Fe(o)>=0&&n!==this.Uq())return
let u=this.fK(o,t,n)
if(t&&!u)throw"channel onMessage callbacks must return the payload, modified or unmodified"
;["insert","update","delete"].ie(o)?null===(r=this.AY.tK)||void 0===r||r.Ro((e=>{
var t,n,r
return"*"===(null===(t=e.Ro)||void 0===t?void 0:t.Lt)||(null===(r=null===(n=e.Ro)||void 0===n?void 0:n.Lt)||void 0===r?void 0:r.mK())===o
})).Oo((e=>e.Or(u,n))):null===(i=this.AY[o])||void 0===i||i.Ro((e=>{
var n,r,i,s,a,l
if(["broadcast","presence","postgres_changes"].ie(o)){if("ir"in e){
const o=e.ir,s=null===(n=e.Ro)||void 0===n?void 0:n.Lt
return o&&(null===(r=t.vK)||void 0===r?void 0:r.ie(o))&&("*"===s||(null==s?void 0:s.mK())===(null===(i=t.Ft)||void 0===i?void 0:i.k.mK()))
}{
const n=null===(a=null===(s=null==e?void 0:e.Ro)||void 0===s?void 0:s.Lt)||void 0===a?void 0:a.mK()
return"*"===n||n===(null===(l=null==t?void 0:t.Lt)||void 0===l?void 0:l.mK())}}
return e.k.mK()===o})).Oo((e=>{if("object"==typeof u&&"vK"in u){
const e=u.Ft,{Nw:t,Sw:n,yK:r,k:i,Lc:o}=e
u=Object.ml(Object.ml({},{Nw:t,Sw:n,yK:r,_w:i,Tw:{},Ow:{},Lc:o}),this.gK(e))}
e.Or(u,n)}))}GY(){return this.Zr===PN.FW}wK(){return this.Zr===PN.zW}JY(){
return this.Zr===PN.UW}KY(){return this.Zr===PN.BW}Wq(e){return"chan_reply_"+e}
qq(e,t,n){const r=e.mK(),i={k:r,Ro:t,Or:n}
return this.AY[r]?this.AY[r].M(i):this.AY[r]=[i],this}Jq(e,t){const n=e.mK()
return this.AY[n]=this.AY[n].Ro((e=>{var r
return!((null===(r=e.k)||void 0===r?void 0:r.mK())===n&&pR.bK(e.Ro,t))})),this}
static bK(e,t){if(Object.h(e).e!==Object.h(t).e)return 0
for(const n in e)if(e[n]!==t[n])return 0
return 1}VY(){this.BY.aq(),this.Lq.ZY()&&this.iK()}WY(e){this.qq(AN.VW,{},e)}
YY(e){this.qq(AN.Fl,{},(t=>e(t)))}aK(){return this.Lq.ZY()&&this.wK()}
iK(e=this.Cq){this.KY()||(this.Lq.xK(this.nq),this.Zr=PN.UW,this.UY.Dq(e))}
gK(e){const t={Tw:{},Ow:{}}
return"INSERT"!==e.k&&"UPDATE"!==e.k||(t.Tw=nR(e.Fk,e.kK)),"UPDATE"!==e.k&&"DELETE"!==e.k||(t.Ow=nR(e.Fk,e.NK)),
t}}const mR=()=>{}
class vR{l(e,t){var n
this.nK=null,this.uK=null,this.SK=[],this.QY="",this._K="",this.By={},this.gc={},
this.Cq=1e4,
this.TK=25e3,this.EK=void 0,this.CK=null,this.MK=mR,this.y=0,this.OK=mR,
this.jK=null,this.PK=[],this.AK=new eR,this.DK={xo:[],VW:[],Fl:[],ci:[]
},this.IK=null,this.RK=e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>yI((async()=>{
const{a:e}=await Promise.vl().R((()=>CI))
return{a:e}}),void 0).R((({a:t})=>t(...e))):fetch),(...e)=>t(...e)
},this.QY=`${e}/${DN.qW}`,
this._K=dR(e),(null==t?void 0:t.$K)?this.$K=t.$K:this.$K=null,
(null==t?void 0:t.gc)&&(this.gc=t.gc),
(null==t?void 0:t.Cq)&&(this.Cq=t.Cq),(null==t?void 0:t.OK)&&(this.OK=t.OK),
((null==t?void 0:t.FK)||(null==t?void 0:t.LK))&&(this.FK=t.FK||t.LK,
this.gc=Object.ml(Object.ml({},this.gc),{LK:this.FK
})),(null==t?void 0:t.TK)&&(this.TK=t.TK)
const r=null===(n=null==t?void 0:t.gc)||void 0===n?void 0:n.cK
if(r&&(this.nK=r,this.uK=r),this.HY=(null==t?void 0:t.HY)?t.HY:e=>[1e3,2e3,5e3,1e4][e-1]||1e4,
this.rg=(null==t?void 0:t.rg)?t.rg:(e,t)=>t(JSON.stringify(e)),
this.QW=(null==t?void 0:t.QW)?t.QW:this.AK.QW.jn(this.AK),
this.zK=new tR((async()=>{this.mI(),this.eK()
}),this.HY),this.WR=this.RK(null==t?void 0:t.WR),null==t?void 0:t.UK){
if("undefined"!=typeof window&&!window.Worker)throw Error("Web Worker is not supported")
this.UK=(null==t?void 0:t.UK)||0,this.BK=null==t?void 0:t.BK}
this.IK=(null==t?void 0:t.IK)||null}eK(){if(!this.jK){
if(this.$K||(this.$K=ZI),!this.$K)throw Error("No transport provided")
this.jK=new this.$K(this.VK()),this.HK()}}VK(){
return this.WK(this.QY,Object.ml({},this.gc,{qK:"1.0.0"}))}mI(e,t){
this.jK&&(this.jK.YK=()=>{},
e?this.jK.VW(e,null!=t?t:""):this.jK.VW(),this.jK=null,
this.EK&&clearInterval(this.EK),this.zK.yp(),this.SK.d((e=>e.BL())))}KK(){
return this.SK}async jw(e){const t=await e.Dg()
return 0===this.SK.e&&this.mI(),t}async GK(){
const e=await Promise.np(this.SK.Oo((e=>e.Dg())))
return this.SK=[],this.mI(),e}ON(e,t,n){this.OK(e,t,n)}JK(){
switch(this.jK&&this.jK.XK){case jN.RW:return IN.YW
case jN.xo:return IN.KW
case jN.$W:return IN.GW
default:return IN.JW}}ZY(){return this.JK()===IN.KW}kw(e,t={qR:{}}){
const n="realtime:"+e,r=this.KK().Zu((e=>e.nq===n))
if(r)return r
{const n=new pR("realtime:"+e,t,this)
return this.SK.M(n),n}}M(e){const{nq:t,Lt:n,Mr:r,y:i}=e,o=()=>{this.rg(e,(e=>{
var t
null===(t=this.jK)||void 0===t||t.Rq(e)}))}
this.ON("push",`${t} ${n} (${i})`,r),this.ZY()?o():this.PK.M(o)}
async yH(e=null){let t=e||this.IK&&await this.IK()||this.nK
this.nK!=t&&(this.nK=t,this.SK.d((e=>{const n={vg:t,nk:"realtime-js/2.11.15"}
t&&e.rK(n),e.DY&&e.wK()&&e.lK(AN.vg,{vg:t})})))}async QK(){var e
if(this.ZY()){
if(this.CK)return this.CK=null,this.ON("transport","heartbeat timeout. Attempting to re-establish connection"),
this.MK("timeout"),
void(null===(e=this.jK)||void 0===e||e.VW(1e3,"hearbeat timeout"))
this.CK=this.Hq(),this.M({nq:"phoenix",Lt:"heartbeat",Mr:{},y:this.CK
}),this.MK("sent"),await this.yH()}else this.MK("disconnected")}ZK(e){this.MK=e}
eG(){this.ZY()&&this.PK.e>0&&(this.PK.d((e=>e())),this.PK=[])}Hq(){
let e=this.y+1
return e===this.y?this.y=0:this.y=e,this.y.C()}xK(e){
let t=this.SK.Zu((t=>t.nq===e&&(t.wK()||t.JY())))
t&&(this.ON("transport",`leaving duplicate topic "${e}"`),t.Dg())}qY(e){
this.SK=this.SK.Ro((t=>t.nq!==e.nq))}HK(){
this.jK&&(this.jK.tG="arraybuffer",this.jK.nG=()=>this.rG(),
this.jK.iG=e=>this.oG(e),this.jK.ck=e=>this.sG(e),this.jK.YK=e=>this.aG(e))}
sG(e){this.QW(e.Ft,(e=>{let{nq:t,Lt:n,Mr:r,y:i}=e
"phoenix"===t&&"phx_reply"===n&&this.MK("ok"==e.Mr.al?"ok":"error"),i&&i===this.CK&&(this.CK=null),
this.ON("receive",`${r.al||""} ${t} ${n} ${i&&"("+i+")"||""}`,r),
Array.Go(this.SK).Ro((e=>e.pK(t))).d((e=>e.Gq(n,r,i))),this.DK.ci.d((t=>t(e)))
}))}rG(){
this.ON("transport","connected to "+this.VK()),this.eG(),this.zK.yp(),this.UK?this.lG||this.cG():this.uG(),
this.DK.xo.d((e=>e()))}uG(){
this.EK&&clearInterval(this.EK),this.EK=setInterval((()=>this.QK()),this.TK)}
cG(){
this.BK?this.ON("worker","starting worker for from "+this.BK):this.ON("worker","starting default worker")
const e=this.dG(this.BK)
this.lG=new Worker(e),this.lG.iG=e=>{
this.ON("worker","worker error",e.ci),this.lG.hG()},this.lG.ck=e=>{
"keepAlive"===e.Ft.Lt&&this.QK()},this.lG.dk({Lt:"start",fG:this.TK})}aG(e){
this.ON("transport","close",e),
this.pG(),this.EK&&clearInterval(this.EK),this.zK.aq(),this.DK.VW.d((t=>t(e)))}
oG(e){this.ON("transport",""+e),this.pG(),this.DK.Fl.d((t=>t(e)))}pG(){
this.SK.d((e=>e.Gq(AN.Fl)))}WK(e,t){if(0===Object.h(t).e)return e
const n=e.Q(/\?/)?"&":"?"
return`${e}${n}${new URLSearchParams(t)}`}dG(e){let t
if(e)t=e
else{
const e=new Blob(["\n  addEventListener(\"message\", (e) => {\n    if (e.data.event === \"start\") {\n      setInterval(() => postMessage({ event: \"keepAlive\" }), e.data.interval);\n    }\n  });"],{
k:"application/javascript"})
t=URL.createObjectURL(e)}return t}}class yR extends Error{l(e){
super(e),this.zy=1,this.oe="StorageError"}}class gR extends yR{l(e,t){
super(e),this.oe="StorageApiError",this.al=t}mG(){return{oe:this.oe,ci:this.ci,
al:this.al}}}class wR extends yR{l(e,t){
super(e),this.oe="StorageUnknownError",this.vG=t}}
UN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{function s(e){try{l(r.P(e))
}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))}catch(XF){o(XF)}}function l(e){
var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
const bR=e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>yI((async()=>{
const{a:e}=await Promise.vl().R((()=>CI))
return{a:e}}),void 0).R((({a:t})=>t(...e))):fetch),(...e)=>t(...e)
},xR=e=>{if(Array.isArray(e))return e.Oo((e=>xR(e)))
if("function"==typeof e||e!==Object(e))return e
const t={}
return Object.Ou(e).d((([e,n])=>{
const r=e.E(/([-_][a-z])/gi,(e=>e.W().E(/[-_]/g,"")))
t[r]=xR(n)})),t}
BN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{function s(e){try{l(r.P(e))
}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))}catch(XF){o(XF)}}function l(e){
var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
const kR=e=>e.yG||e.ci||e.gG||e.Fl||JSON.stringify(e)
VN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{function s(e){try{l(r.P(e))
}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))}catch(XF){o(XF)}}function l(e){
var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
const NR={lb:100,Ht:0,wG:{bG:"name",yw:"asc"}},SR={xG:"3600",
kG:"text/plain;charset=UTF-8",NW:0}
class _R{l(e,t={},n,r){this.jS=e,this.By=t,this.NG=n,this.WR=bR(r)}SG(e,t,n,r){
return VN(this,void 0,void 0,(function*(){try{let i
const o=Object.ml(Object.ml({},SR),r)
let s=Object.ml(Object.ml({},this.By),"POST"===e&&{_G:o.NW+""})
const a=o.TG
"undefined"!=typeof Blob&&n instanceof Blob?(i=new FormData,i.ZH("cacheControl",o.xG),
a&&i.ZH("metadata",this.EG(a)),
i.ZH("",n)):"undefined"!=typeof FormData&&n instanceof FormData?(i=n,
i.ZH("cacheControl",o.xG),
a&&i.ZH("metadata",this.EG(a))):(i=n,s["CG"]="max-age="+o.xG,
s["MG"]=o.kG,a&&(s["OG"]=this.jG(this.EG(a)))),
(null==r?void 0:r.By)&&(s=Object.ml(Object.ml({},s),r.By))
const l=this.PG(t),c=this.AG(l),u=yield this.WR(`${this.jS}/object/${c}`,Object.ml({
Uy:e,we:i,By:s},(null==o?void 0:o.DG)?{DG:o.DG}:{})),d=yield u.qy()
return u.Hy?{Ft:{fc:l,ir:d.IG,RG:d.$G},Fl:null}:{Ft:null,Fl:d}}catch(i){
if($d(i))return{Ft:null,Fl:i}
throw i}}))}FG(e,t,n){return VN(this,void 0,void 0,(function*(){
return this.SG("POST",e,t,n)}))}LG(e,t,n,r){
return VN(this,void 0,void 0,(function*(){
const i=this.PG(e),o=this.AG(i),s=new URL(this.jS+"/object/upload/sign/"+o)
s.bH.te("token",t)
try{let e
const t=Object.ml({NW:SR.NW},r),o=Object.ml(Object.ml({},this.By),{_G:t.NW+""})
"undefined"!=typeof Blob&&n instanceof Blob?(e=new FormData,e.ZH("cacheControl",t.xG),
e.ZH("",n)):"undefined"!=typeof FormData&&n instanceof FormData?(e=n,
e.ZH("cacheControl",t.xG)):(e=n,o["CG"]="max-age="+t.xG,o["MG"]=t.kG)
const a=yield this.WR(s.C(),{Uy:"PUT",we:e,By:o}),l=yield a.qy()
return a.Hy?{Ft:{fc:i,RG:l.$G},Fl:null}:{Ft:null,Fl:l}}catch(a){if($d(a))return{
Ft:null,Fl:a}
throw a}}))}zG(e,t){return VN(this,void 0,void 0,(function*(){try{
let n=this.AG(e)
const r=Object.ml({},this.By);(null==t?void 0:t.NW)&&(r["_G"]="true")
const i=yield zd(this.WR,`${this.jS}/object/upload/sign/${n}`,{},{By:r
}),o=new URL(this.jS+i.jS),s=o.bH.t("token")
if(!s)throw new yR("No token returned by API")
return{Ft:{UG:o.C(),fc:e,BG:s},Fl:null}}catch(n){if($d(n))return{Ft:null,Fl:n}
throw n}}))}So(e,t,n){return VN(this,void 0,void 0,(function*(){
return this.SG("PUT",e,t,n)}))}VG(e,t,n){
return VN(this,void 0,void 0,(function*(){try{return{
Ft:yield zd(this.WR,this.jS+"/object/move",{NG:this.NG,HG:e,WG:t,
qG:null==n?void 0:n.qG},{By:this.By}),Fl:null}}catch(r){if($d(r))return{Ft:null,
Fl:r}
throw r}}))}YG(e,t,n){return VN(this,void 0,void 0,(function*(){try{return{Ft:{
fc:(yield zd(this.WR,this.jS+"/object/copy",{NG:this.NG,HG:e,WG:t,
qG:null==n?void 0:n.qG},{By:this.By})).$G},Fl:null}}catch(r){if($d(r))return{
Ft:null,Fl:r}
throw r}}))}KG(e,t,n){return VN(this,void 0,void 0,(function*(){try{
let r=this.AG(e),i=yield zd(this.WR,`${this.jS}/object/sign/${r}`,Object.ml({
GG:t},(null==n?void 0:n.ya)?{ya:n.ya}:{}),{By:this.By})
const o=(null==n?void 0:n.JG)?"&download="+(1==n.JG?"":n.JG):""
return i={UG:encodeURI(`${this.jS}${i.XG}${o}`)},{Ft:i,Fl:null}}catch(r){
if($d(r))return{Ft:null,Fl:r}
throw r}}))}QG(e,t,n){return VN(this,void 0,void 0,(function*(){try{
const r=yield zd(this.WR,`${this.jS}/object/sign/${this.NG}`,{GG:t,ZG:e},{
By:this.By}),i=(null==n?void 0:n.JG)?"&download="+(1==n.JG?"":n.JG):""
return{Ft:r.Oo((e=>Object.ml(Object.ml({},e),{
UG:e.XG?encodeURI(`${this.jS}${e.XG}${i}`):null}))),Fl:null}}catch(r){
if($d(r))return{Ft:null,Fl:r}
throw r}}))}JG(e,t){return VN(this,void 0,void 0,(function*(){
const n=void 0!==(null==t?void 0:t.ya)?"render/image/authenticated":"object",r=this.eJ((null==t?void 0:t.ya)||{}),i=r?"?"+r:""
try{const t=this.AG(e),r=yield Ld(this.WR,`${this.jS}/${n}/${t}${i}`,{
By:this.By,Wy:1})
return{Ft:yield r.xH(),Fl:null}}catch(o){if($d(o))return{Ft:null,Fl:o}
throw o}}))}YP(e){return VN(this,void 0,void 0,(function*(){const t=this.AG(e)
try{const e=yield Ld(this.WR,`${this.jS}/object/info/${t}`,{By:this.By})
return{Ft:xR(e),Fl:null}}catch(n){if($d(n))return{Ft:null,Fl:n}
throw n}}))}tJ(e){return VN(this,void 0,void 0,(function*(){const t=this.AG(e)
try{return yield(function(e,t,n){return BN(this,void 0,void 0,(function*(){
return Fd(e,"HEAD",t,Object.ml(Object.ml({},n),{Wy:1}),void 0)}))
})(this.WR,`${this.jS}/object/${t}`,{By:this.By}),{Ft:1,Fl:null}}catch(n){
if($d(n)&&n instanceof wR){const e=n.vG
if([400,404].ie(null==e?void 0:e.al))return{Ft:0,Fl:n}}throw n}}))}nJ(e,t){
const n=this.AG(e),r=[],i=(null==t?void 0:t.JG)?"download="+(1==t.JG?"":t.JG):""
""!==i&&r.M(i)
const o=void 0!==(null==t?void 0:t.ya)?"render/image":"object",s=this.eJ((null==t?void 0:t.ya)||{})
""!==s&&r.M(s)
let a=r.A("&")
return""!==a&&(a="?"+a),{Ft:{rJ:encodeURI(`${this.jS}/${o}/public/${n}${a}`)}}}
Am(e){return VN(this,void 0,void 0,(function*(){try{return{
Ft:yield Ud(this.WR,`${this.jS}/object/${this.NG}`,{iJ:e},{By:this.By}),Fl:null}
}catch(t){if($d(t))return{Ft:null,Fl:t}
throw t}}))}NM(e,t,n){return VN(this,void 0,void 0,(function*(){try{
const r=Object.ml(Object.ml(Object.ml({},NR),t),{pE:e||""})
return{Ft:yield zd(this.WR,`${this.jS}/object/list/${this.NG}`,r,{By:this.By
},n),Fl:null}}catch(r){if($d(r))return{Ft:null,Fl:r}
throw r}}))}EG(e){return JSON.stringify(e)}jG(e){
return"undefined"!=typeof Buffer?Buffer.Go(e).C("base64"):btoa(e)}AG(e){
return`${this.NG}/${e}`}PG(e){return e.E(/^\/|\/$/g,"").E(/\/+/g,"/")}eJ(e){
const t=[]
return e.Bs&&t.M("width="+e.Bs),e.Vs&&t.M("height="+e.Vs),e.Qj&&t.M("resize="+e.Qj),
e.XH&&t.M("format="+e.XH),e.oJ&&t.M("quality="+e.oJ),t.A("&")}}const TR={
EW:"storage-js/2.7.1"}
HN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{function s(e){try{l(r.P(e))
}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))}catch(XF){o(XF)}}function l(e){
var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
class ER{l(e,t={},n){
this.jS=e,this.By=Object.ml(Object.ml({},TR),t),this.WR=bR(n)}sJ(){
return HN(this,void 0,void 0,(function*(){try{return{
Ft:yield Ld(this.WR,this.jS+"/bucket",{By:this.By}),Fl:null}}catch(e){
if($d(e))return{Ft:null,Fl:e}
throw e}}))}aJ(e){return HN(this,void 0,void 0,(function*(){try{return{
Ft:yield Ld(this.WR,`${this.jS}/bucket/${e}`,{By:this.By}),Fl:null}}catch(t){
if($d(t))return{Ft:null,Fl:t}
throw t}}))}lJ(e,t={cJ:0}){return HN(this,void 0,void 0,(function*(){try{return{
Ft:yield zd(this.WR,this.jS+"/bucket",{ir:e,oe:e,cJ:t.cJ,uJ:t.dJ,hJ:t.fJ},{
By:this.By}),Fl:null}}catch(n){if($d(n))return{Ft:null,Fl:n}
throw n}}))}pJ(e,t){return HN(this,void 0,void 0,(function*(){try{
const n=yield(function(e,t,n,r){return BN(this,void 0,void 0,(function*(){
return Fd(e,"PUT",t,r,void 0,n)}))})(this.WR,`${this.jS}/bucket/${e}`,{ir:e,
oe:e,cJ:t.cJ,uJ:t.dJ,hJ:t.fJ},{By:this.By})
return{Ft:n,Fl:null}}catch(n){if($d(n))return{Ft:null,Fl:n}
throw n}}))}mJ(e){return HN(this,void 0,void 0,(function*(){try{return{
Ft:yield zd(this.WR,`${this.jS}/bucket/${e}/empty`,{},{By:this.By}),Fl:null}
}catch(t){if($d(t))return{Ft:null,Fl:t}
throw t}}))}vJ(e){return HN(this,void 0,void 0,(function*(){try{return{
Ft:yield Ud(this.WR,`${this.jS}/bucket/${e}`,{},{By:this.By}),Fl:null}}catch(t){
if($d(t))return{Ft:null,Fl:t}
throw t}}))}}class CR extends ER{l(e,t={},n){super(e,t,n)}Go(e){
return new _R(this.jS,this.By,e,this.WR)}}let MR=""
MR="undefined"!=typeof Deno?"deno":"undefined"!=typeof document?"web":"undefined"!=typeof navigator&&"ReactNative"===navigator.product?"react-native":"node"
const OR={By:{EW:`supabase-js-${MR}/2.51.0`}},jR={Nw:"public"},PR={yJ:1,gJ:1,
wJ:1,bJ:"implicit"},AR={}
WN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{function s(e){try{l(r.P(e))
}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))}catch(XF){o(XF)}}function l(e){
var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())})),qN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{
function s(e){try{l(r.P(e))}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))
}catch(XF){o(XF)}}function l(e){var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
const DR="2.71.0",IR=3e4,RR={EW:"gotrue-js/"+DR
},$R="X-Supabase-Api-Version",FR={Pu:Date.Rc("2024-01-01T00:00:00.0Z"),
oe:"2024-01-01"},LR=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
class zR extends Error{l(e,t,n){
super(e),this.Ky=1,this.oe="AuthError",this.al=t,this.sg=n}}class UR extends zR{
l(e,t,n){super(e,t,n),this.oe="AuthApiError",this.al=t,this.sg=n}}
class BR extends zR{l(e,t){super(e),this.oe="AuthUnknownError",this.vG=t}}
class VR extends zR{l(e,t,n,r){super(e,n,r),this.oe=t,this.al=n}}
class HR extends VR{l(){
super("Auth session missing!","AuthSessionMissingError",400,void 0)}}
class WR extends VR{l(){
super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)
}}class qR extends VR{l(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}
class YR extends VR{l(e,t=null){
super(e,"AuthImplicitGrantRedirectError",500,void 0),this.TH=null,this.TH=t}
mG(){return{oe:this.oe,ci:this.ci,al:this.al,TH:this.TH}}}class KR extends VR{
l(e,t=null){
super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.TH=null,this.TH=t}
mG(){return{oe:this.oe,ci:this.ci,al:this.al,TH:this.TH}}}class GR extends VR{
l(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}class JR extends VR{
l(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.cg=n}}
class XR extends VR{l(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}
const QR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".ne(""),ZR=" \t\n\r=".ne(""),e$=(()=>{
const e=Array(128)
for(let t=0;t<e.e;t+=1)e[t]=-1
for(let t=0;t<ZR.e;t+=1)e[ZR[t].Qy(0)]=-2
for(let t=0;t<QR.e;t+=1)e[QR[t].Qy(0)]=t
return e
})(),t$=()=>"undefined"!=typeof window&&"undefined"!=typeof document,n$={xJ:0,
ux:0},r$=()=>{if(!t$())return 0
try{if("object"!=typeof globalThis.localStorage)return 0}catch(XF){return 0}
if(n$.xJ)return n$.ux
const e=`lswt-${Math.random()}${Math.random()}`
try{
globalThis.localStorage.Iy(e,e),globalThis.localStorage.Eg(e),n$.xJ=1,n$.ux=1
}catch(XF){n$.xJ=1,n$.ux=0}return n$.ux},i$=e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>yI((async()=>{
const{a:e}=await Promise.vl().R((()=>CI))
return{a:e}}),void 0).R((({a:t})=>t(...e))):fetch),(...e)=>t(...e)
},o$=async(e,t,n)=>{await e.Iy(t,JSON.stringify(n))},s$=async(e,t)=>{
const n=await e.jy(t)
if(!n)return null
try{return JSON.Rc(n)}catch(r){return n}},a$=async(e,t)=>{await e.Eg(t)}
class l${l(){this.Ml=new l$.kJ(((e,t)=>{this.vl=e,this.fl=t}))}}l$.kJ=Promise
const c$=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i,u$=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
YN=(e,t)=>{var n,r,i={}
for(n in e)({}).s.o(e,n)&&0>t.Fe(n)&&(i[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(r=0,n=Object.getOwnPropertySymbols(e);r<n.e;r++)0>t.Fe(n[r])&&{}._b.o(e,n[r])&&(i[n[r]]=e[n[r]])
return i}
const d$=e=>e.yG||e.ci||e.gG||e.Fl||JSON.stringify(e),h$=[502,503,504],f$=["global","local","others"]
KN=(e,t)=>{var n,r,i={}
for(n in e)({}).s.o(e,n)&&0>t.Fe(n)&&(i[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(r=0,n=Object.getOwnPropertySymbols(e);r<n.e;r++)0>t.Fe(n[r])&&{}._b.o(e,n[r])&&(i[n[r]]=e[n[r]])
return i}
class p${l({jS:e="",By:t={},WR:n}){this.jS=e,this.By=t,this.WR=i$(n),this.NJ={
SJ:this._J.jn(this),TJ:this.EJ.jn(this)}}async Bg(e,t=f$[0]){
if(0>f$.Fe(t))throw Error("@supabase/auth-js: Parameter scope must be one of "+f$.A(", "))
try{return await nh(this.WR,"POST",`${this.jS}/logout?scope=${t}`,{By:this.By,
ug:e,Wy:1}),{Ft:null,Fl:null}}catch(n){if(Bd(n))return{Ft:null,Fl:n}
throw n}}async CJ(e,t={}){try{return await nh(this.WR,"POST",this.jS+"/invite",{
we:{$g:e,Ft:t.Ft},By:this.By,fg:t.fg,mg:oh})}catch(n){if(Bd(n))return{Ft:{
xg:null},Fl:n}
throw n}}async MJ(e){try{
const{Ee:t}=e,n=KN(e,["options"]),r=Object.ml(Object.ml({},n),t)
return"OJ"in n&&(r.jJ=null==n?void 0:n.OJ,delete r.OJ),await nh(this.WR,"POST",this.jS+"/admin/generate_link",{
we:r,By:this.By,mg:ah,fg:null==t?void 0:t.fg})}catch(t){if(Bd(t))return{Ft:{
Tg:null,xg:null},Fl:t}
throw t}}async PJ(e){try{return await nh(this.WR,"POST",this.jS+"/admin/users",{
we:e,By:this.By,mg:oh})}catch(t){if(Bd(t))return{Ft:{xg:null},Fl:t}
throw t}}async AJ(e){var t,n,r,i,o,s,a
try{const l={DJ:null,IJ:0,RJ:0
},c=await nh(this.WR,"GET",this.jS+"/admin/users",{By:this.By,Wy:1,hg:{
$J:null!==(n=null===(t=null==e?void 0:e.$J)||void 0===t?void 0:t.C())&&void 0!==n?n:"",
FJ:null!==(i=null===(r=null==e?void 0:e.LJ)||void 0===r?void 0:r.C())&&void 0!==i?i:""
},mg:lh})
if(c.Fl)throw c.Fl
const u=await c.qy(),d=null!==(o=c.By.t("x-total-count"))&&void 0!==o?o:0,h=null!==(a=null===(s=c.By.t("link"))||void 0===s?void 0:s.ne(","))&&void 0!==a?a:[]
return h.e>0&&(h.d((e=>{
const t=parseInt(e.ne(";")[0].ne("=")[1].Es(0,1)),n=JSON.Rc(e.ne(";")[1].ne("=")[1])
l[n+"Page"]=t})),l.RJ=parseInt(d)),{Ft:Object.ml(Object.ml({},u),l),Fl:null}
}catch(l){if(Bd(l))return{Ft:{zJ:[]},Fl:l}
throw l}}async UJ(e){Zd(e)
try{return await nh(this.WR,"GET",`${this.jS}/admin/users/${e}`,{By:this.By,
mg:oh})}catch(t){if(Bd(t))return{Ft:{xg:null},Fl:t}
throw t}}async BJ(e,t){Zd(e)
try{return await nh(this.WR,"PUT",`${this.jS}/admin/users/${e}`,{we:t,
By:this.By,mg:oh})}catch(n){if(Bd(n))return{Ft:{xg:null},Fl:n}
throw n}}async VJ(e,t=0){Zd(e)
try{return await nh(this.WR,"DELETE",`${this.jS}/admin/users/${e}`,{By:this.By,
we:{HJ:t},mg:oh})}catch(n){if(Bd(n))return{Ft:{xg:null},Fl:n}
throw n}}async _J(e){Zd(e.WJ)
try{
const{Ft:t,Fl:n}=await nh(this.WR,"GET",`${this.jS}/admin/users/${e.WJ}/factors`,{
By:this.By,mg(e){return{Ft:{qJ:e},Fl:null}}})
return{Ft:t,Fl:n}}catch(t){if(Bd(t))return{Ft:null,Fl:t}
throw t}}async EJ(e){Zd(e.WJ),Zd(e.ir)
try{return{
Ft:await nh(this.WR,"DELETE",`${this.jS}/admin/users/${e.WJ}/factors/${e.ir}`,{
By:this.By}),Fl:null}}catch(t){if(Bd(t))return{Ft:null,Fl:t}
throw t}}}
const m$=!!(globalThis&&r$()&&globalThis.localStorage&&"true"===globalThis.localStorage.jy("supabase.gotrue-js.locks.debug"))
class v$ extends Error{l(e){super(e),this.YJ=1}}class y$ extends v${}
!(function(){if("object"!=typeof globalThis)try{
Object.defineProperty(Object.u,"KJ",{t(){return this},fe:1
}),__magic__.globalThis=__magic__,delete Object.u.KJ}catch(XF){
"undefined"!=typeof self&&(self.globalThis=self)}})()
const g$={jS:"http://localhost:9999",Oy:"supabase.auth.token",yJ:1,gJ:1,wJ:1,
By:RR,bJ:"implicit",GJ:0,JJ:0},w$={}
class b${l(e){var t,n
this.XJ=null,this.QJ=null,this.ZJ=new Map,this.eX=null,this.tX=null,this.nX=null,
this.rX=null,
this.wJ=1,this.JJ=0,this.iX=0,this.oX=0,this.sX=[],this.aX=null,this.OK=console.ON,
this.lX=b$.cX,b$.cX+=1,this.lX>0&&t$()
const r=Object.ml(Object.ml({},g$),e)
if(this.uX=!!r.GJ,"function"==typeof r.GJ&&(this.OK=r.GJ),this.gJ=r.gJ,this.Oy=r.Oy,
this.yJ=r.yJ,this.dX=new p$({jS:r.jS,By:r.By,WR:r.WR
}),this.jS=r.jS,this.By=r.By,
this.WR=i$(r.WR),this.hX=r.hX||dh,this.wJ=r.wJ,this.bJ=r.bJ,
this.JJ=r.JJ,r.hX?this.hX=r.hX:t$()&&(null===(t=null===globalThis||void 0===globalThis?void 0:globalThis.Ac)||void 0===t?void 0:t.Cg)?this.hX=uh:this.hX=dh,
this.fX||(this.fX={h:[]},this.pX=Number.MIN_SAFE_INTEGER),this.NJ={
mX:this.vX.jn(this),yX:this.gX.jn(this),wX:this.bX.jn(this),xX:this.kX.jn(this),
SJ:this._J.jn(this),NX:this.SX.jn(this),_X:this.TX.jn(this)
},this.gJ?(r.EX?this.EX=r.EX:r$()?this.EX=globalThis.localStorage:(this.QJ={},
this.EX=ch(this.QJ)),
r.XJ&&(this.XJ=r.XJ)):(this.QJ={},this.EX=ch(this.QJ)),t$()&&globalThis.BroadcastChannel&&this.gJ&&this.Oy){
try{this.aX=new globalThis.BroadcastChannel(this.Oy)}catch(XF){}
null===(n=this.aX)||void 0===n||n.Pn("message",(async e=>{
this.CX("received broadcast notification from other tab or client",e),
await this.MX(e.Ft.Lt,e.Ft.bg,0)}))}this.OX()}get fX(){var e,t
return null!==(t=null===(e=w$[this.Oy])||void 0===e?void 0:e.fX)&&void 0!==t?t:{
h:[]}}set fX(e){w$[this.Oy]=Object.ml(Object.ml({},w$[this.Oy]),{fX:e})}
get pX(){var e,t
return null!==(t=null===(e=w$[this.Oy])||void 0===e?void 0:e.jX)&&void 0!==t?t:Number.MIN_SAFE_INTEGER
}set pX(e){w$[this.Oy]=Object.ml(Object.ml({},w$[this.Oy]),{jX:e})}CX(...e){
return this.uX&&this.OK(`GoTrueClient@${this.lX} (${DR}) ${(new Date).fb()}`,...e),
this}async OX(){
return this.rX||(this.rX=(async()=>await this.PX(-1,(async()=>await this.AX())))()),
await this.rX}async AX(){var e
try{const t=(e=>{const t={},n=new URL(e)
if(n.oc&&"#"===n.oc[0])try{new URLSearchParams(n.oc.Es(1)).d(((e,n)=>{t[n]=e}))
}catch(XF){}return n.bH.d(((e,n)=>{t[n]=e})),t})(window.Jt.Gt)
let n="none"
if(this.DX(t)?n="implicit":await this.IX(t)&&(n="pkce"),t$()&&this.wJ&&"none"!==n){
const{Ft:r,Fl:i}=await this.RX(t,n)
if(i){
if(this.CX("#_initialize()","error detecting session from URL",i),(e=>Bd(e)&&"AuthImplicitGrantRedirectError"===e.oe)(i)){
const t=null===(e=i.TH)||void 0===e?void 0:e.sg
if("identity_already_exists"===t||"identity_not_found"===t||"single_identity_not_deletable"===t)return{
Fl:i}}return await this.$X(),{Fl:i}}const{bg:o,FX:s}=r
return this.CX("#_initialize()","detected session in URL",o,"redirect type",s),await this.LX(o),
setTimeout((async()=>{
"recovery"===s?await this.MX("PASSWORD_RECOVERY",o):await this.MX("SIGNED_IN",o)
}),0),{Fl:null}}return await this.zX(),{Fl:null}}catch(t){return Bd(t)?{Fl:t}:{
Fl:new BR("Unexpected error during initialization",t)}}finally{
await this.UX(),this.CX("#_initialize()","end")}}async BX(e){var t,n,r
try{const i=await nh(this.WR,"POST",this.jS+"/signup",{By:this.By,we:{
Ft:null!==(n=null===(t=null==e?void 0:e.Ee)||void 0===t?void 0:t.Ft)&&void 0!==n?n:{},
VX:{HX:null===(r=null==e?void 0:e.Ee)||void 0===r?void 0:r.WX}},mg:rh
}),{Ft:o,Fl:s}=i
if(s||!o)return{Ft:{xg:null,bg:null},Fl:s}
const a=o.bg,l=o.xg
return o.bg&&(await this.LX(o.bg),await this.MX("SIGNED_IN",a)),{Ft:{xg:l,bg:a},
Fl:null}}catch(i){if(Bd(i))return{Ft:{xg:null,bg:null},Fl:i}
throw i}}async Lg(e){var t,n,r
try{let i
if("$g"in e){const{$g:n,Fg:r,Ee:o}=e
let s=null,a=null
"pkce"===this.bJ&&([s,a]=await Qd(this.EX,this.Oy)),i=await nh(this.WR,"POST",this.jS+"/signup",{
By:this.By,fg:null==o?void 0:o.zg,we:{$g:n,Fg:r,
Ft:null!==(t=null==o?void 0:o.Ft)&&void 0!==t?t:{},VX:{HX:null==o?void 0:o.WX},
qX:s,YX:a},mg:rh})}else{
if(!("KX"in e))throw new qR("You must provide either an email or phone number and a password")
{const{KX:t,Fg:o,Ee:s}=e
i=await nh(this.WR,"POST",this.jS+"/signup",{By:this.By,we:{KX:t,Fg:o,
Ft:null!==(n=null==s?void 0:s.Ft)&&void 0!==n?n:{},
kw:null!==(r=null==s?void 0:s.kw)&&void 0!==r?r:"sms",VX:{HX:null==s?void 0:s.WX
}},mg:rh})}}const{Ft:o,Fl:s}=i
if(s||!o)return{Ft:{xg:null,bg:null},Fl:s}
const a=o.bg,l=o.xg
return o.bg&&(await this.LX(o.bg),await this.MX("SIGNED_IN",a)),{Ft:{xg:l,bg:a},
Fl:null}}catch(i){if(Bd(i))return{Ft:{xg:null,bg:null},Fl:i}
throw i}}async Rg(e){try{let t
if("$g"in e){const{$g:n,Fg:r,Ee:i}=e
t=await nh(this.WR,"POST",this.jS+"/token?grant_type=password",{By:this.By,we:{
$g:n,Fg:r,VX:{HX:null==i?void 0:i.WX}},mg:ih})}else{
if(!("KX"in e))throw new qR("You must provide either an email or phone number and a password")
{const{KX:n,Fg:r,Ee:i}=e
t=await nh(this.WR,"POST",this.jS+"/token?grant_type=password",{By:this.By,we:{
KX:n,Fg:r,VX:{HX:null==i?void 0:i.WX}},mg:ih})}}const{Ft:n,Fl:r}=t
return r?{Ft:{xg:null,bg:null},Fl:r
}:n&&n.bg&&n.xg?(n.bg&&(await this.LX(n.bg),await this.MX("SIGNED_IN",n.bg)),{
Ft:Object.ml({xg:n.xg,bg:n.bg},n.lg?{GX:n.lg}:null),Fl:r}):{Ft:{xg:null,bg:null
},Fl:new WR}}catch(t){if(Bd(t))return{Ft:{xg:null,bg:null},Fl:t}
throw t}}async JX(e){var t,n,r,i
return await this.XX(e.QX,{fg:null===(t=e.Ee)||void 0===t?void 0:t.fg,
ZX:null===(n=e.Ee)||void 0===n?void 0:n.ZX,
eQ:null===(r=e.Ee)||void 0===r?void 0:r.eQ,
tQ:null===(i=e.Ee)||void 0===i?void 0:i.tQ})}async nQ(e){
return await this.rX,this.PX(-1,(async()=>this.rQ(e)))}async iQ(e){const{oQ:t}=e
if("solana"===t)return await this.sQ(e)
throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}async sQ(e){
var t,n,r,i,o,s,a,l,c,u,d,h
let f,p
if("ci"in e)f=e.ci,p=e.eg
else{const{oQ:d,aQ:h,lQ:m,Ee:v}=e
let y
if(t$())if("object"==typeof h)y=h
else{const e=window
if(!("cQ"in e)||"object"!=typeof e.cQ||!("Ig"in e.cQ&&"function"==typeof e.cQ.Ig||"uQ"in e.cQ&&"function"==typeof e.cQ.uQ))throw Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
y=e.cQ}else{
if("object"!=typeof h||!(null==v?void 0:v.jS))throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.")
y=h}const g=new URL(null!==(t=null==v?void 0:v.jS)&&void 0!==t?t:window.Jt.Gt)
if("Ig"in y&&y.Ig){const e=await y.Ig(Object.ml(Object.ml(Object.ml({
dQ:(new Date).fb()},null==v?void 0:v.sQ),{nk:"1",hQ:g.Ea,fQ:g.Gt}),m?{lQ:m
}:null))
let t
if(Array.isArray(e)&&e[0]&&"object"==typeof e[0])t=e[0]
else{
if(!(e&&"object"==typeof e&&"pQ"in e&&"eg"in e))throw Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value")
t=e}
if(!("pQ"in t&&"eg"in t&&("string"==typeof t.pQ||t.pQ instanceof Uint8Array)&&t.eg instanceof Uint8Array))throw Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
f="string"==typeof t.pQ?t.pQ:(new TextDecoder).QW(t.pQ),p=t.eg}else{
if(!("uQ"in y&&"function"==typeof y.uQ&&"mQ"in y&&"object"==typeof y&&y.mQ&&"vQ"in y.mQ&&"function"==typeof y.mQ.vQ))throw Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API")
f=[g.Ea+" wants you to sign in with your Solana account:",y.mQ.vQ(),...m?["",m,""]:[""],"Version: 1","URI: "+g.Gt,"Issued At: "+(null!==(r=null===(n=null==v?void 0:v.sQ)||void 0===n?void 0:n.dQ)&&void 0!==r?r:(new Date).fb()),...(null===(i=null==v?void 0:v.sQ)||void 0===i?void 0:i.yQ)?["Not Before: "+v.sQ.yQ]:[],...(null===(o=null==v?void 0:v.sQ)||void 0===o?void 0:o.ok)?["Expiration Time: "+v.sQ.ok]:[],...(null===(s=null==v?void 0:v.sQ)||void 0===s?void 0:s.gQ)?["Chain ID: "+v.sQ.gQ]:[],...(null===(a=null==v?void 0:v.sQ)||void 0===a?void 0:a.sh)?["Nonce: "+v.sQ.sh]:[],...(null===(l=null==v?void 0:v.sQ)||void 0===l?void 0:l.wQ)?["Request ID: "+v.sQ.wQ]:[],...(null===(u=null===(c=null==v?void 0:v.sQ)||void 0===c?void 0:c.bQ)||void 0===u?void 0:u.e)?["Resources",...v.sQ.bQ.Oo((e=>"- "+e))]:[]].A("\n")
const e=await y.uQ((new TextEncoder).rg(f),"utf8")
if(!(e&&e instanceof Uint8Array))throw Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value")
p=e}}try{
const{Ft:t,Fl:n}=await nh(this.WR,"POST",this.jS+"/token?grant_type=web3",{
By:this.By,we:Object.ml({oQ:"solana",ci:f,eg:Gd(p)
},(null===(d=e.Ee)||void 0===d?void 0:d.WX)?{VX:{
HX:null===(h=e.Ee)||void 0===h?void 0:h.WX}}:null),mg:rh})
if(n)throw n
return t&&t.bg&&t.xg?(t.bg&&(await this.LX(t.bg),await this.MX("SIGNED_IN",t.bg)),
{Ft:Object.ml({},t),Fl:n}):{Ft:{xg:null,bg:null},Fl:new WR}}catch(m){
if(Bd(m))return{Ft:{xg:null,bg:null},Fl:m}
throw m}}async rQ(e){
const t=await s$(this.EX,this.Oy+"-code-verifier"),[n,r]=(null!=t?t:"").ne("/")
try{const{Ft:t,Fl:i}=await nh(this.WR,"POST",this.jS+"/token?grant_type=pkce",{
By:this.By,we:{xQ:e,kQ:n},mg:rh})
if(await a$(this.EX,this.Oy+"-code-verifier"),i)throw i
return t&&t.bg&&t.xg?(t.bg&&(await this.LX(t.bg),await this.MX("SIGNED_IN",t.bg)),
{Ft:Object.ml(Object.ml({},t),{FX:null!=r?r:null}),Fl:i}):{Ft:{xg:null,bg:null,
FX:null},Fl:new WR}}catch(i){if(Bd(i))return{Ft:{xg:null,bg:null,FX:null},Fl:i}
throw i}}async NQ(e){try{
const{Ee:t,QX:n,BG:r,vg:i,sh:o}=e,s=await nh(this.WR,"POST",this.jS+"/token?grant_type=id_token",{
By:this.By,we:{QX:n,SQ:r,vg:i,sh:o,VX:{HX:null==t?void 0:t.WX}},mg:rh
}),{Ft:a,Fl:l}=s
return l?{Ft:{xg:null,bg:null},Fl:l
}:a&&a.bg&&a.xg?(a.bg&&(await this.LX(a.bg),await this.MX("SIGNED_IN",a.bg)),{
Ft:a,Fl:l}):{Ft:{xg:null,bg:null},Fl:new WR}}catch(t){if(Bd(t))return{Ft:{
xg:null,bg:null},Fl:t}
throw t}}async _Q(e){var t,n,r,i,o
try{if("$g"in e){const{$g:r,Ee:i}=e
let o=null,s=null
"pkce"===this.bJ&&([o,s]=await Qd(this.EX,this.Oy))
const{Fl:a}=await nh(this.WR,"POST",this.jS+"/otp",{By:this.By,we:{$g:r,
Ft:null!==(t=null==i?void 0:i.Ft)&&void 0!==t?t:{},
TQ:null!==(n=null==i?void 0:i.EQ)&&void 0!==n?n:1,VX:{HX:null==i?void 0:i.WX},
qX:o,YX:s},fg:null==i?void 0:i.zg})
return{Ft:{xg:null,bg:null},Fl:a}}if("KX"in e){
const{KX:t,Ee:n}=e,{Ft:s,Fl:a}=await nh(this.WR,"POST",this.jS+"/otp",{
By:this.By,we:{KX:t,Ft:null!==(r=null==n?void 0:n.Ft)&&void 0!==r?r:{},
TQ:null!==(i=null==n?void 0:n.EQ)&&void 0!==i?i:1,VX:{HX:null==n?void 0:n.WX},
kw:null!==(o=null==n?void 0:n.kw)&&void 0!==o?o:"sms"}})
return{Ft:{xg:null,bg:null,CQ:null==s?void 0:s.MQ},Fl:a}}
throw new qR("You must provide either an email or phone number.")}catch(s){
if(Bd(s))return{Ft:{xg:null,bg:null},Fl:s}
throw s}}async OQ(e){var t,n
try{let r,i
"Ee"in e&&(r=null===(t=e.Ee)||void 0===t?void 0:t.fg,i=null===(n=e.Ee)||void 0===n?void 0:n.WX)
const{Ft:o,Fl:s}=await nh(this.WR,"POST",this.jS+"/verify",{By:this.By,
we:Object.ml(Object.ml({},e),{VX:{HX:i}}),fg:r,mg:rh})
if(s)throw s
if(!o)throw Error("An error occurred on token verification.")
const a=o.bg,l=o.xg
return(null==a?void 0:a.vg)&&(await this.LX(a),await this.MX("recovery"==e.k?"PASSWORD_RECOVERY":"SIGNED_IN",a)),
{Ft:{xg:l,bg:a},Fl:null}}catch(r){if(Bd(r))return{Ft:{xg:null,bg:null},Fl:r}
throw r}}async jQ(e){var t,n,r
try{let i=null,o=null
return"pkce"===this.bJ&&([i,o]=await Qd(this.EX,this.Oy)),await nh(this.WR,"POST",this.jS+"/sso",{
we:Object.ml(Object.ml(Object.ml(Object.ml(Object.ml({},"PQ"in e?{AQ:e.PQ
}:null),"hQ"in e?{hQ:e.hQ}:null),{
pg:null!==(n=null===(t=e.Ee)||void 0===t?void 0:t.fg)&&void 0!==n?n:void 0
}),(null===(r=null==e?void 0:e.Ee)||void 0===r?void 0:r.WX)?{VX:{HX:e.Ee.WX}
}:null),{DQ:1,qX:i,YX:o}),By:this.By,mg:sh})}catch(i){if(Bd(i))return{Ft:null,
Fl:i}
throw i}}async IQ(){
return await this.rX,await this.PX(-1,(async()=>await this.RQ()))}async RQ(){
try{return await this.$Q((async e=>{const{Ft:{bg:t},Fl:n}=e
if(n)throw n
if(!t)throw new HR
const{Fl:r}=await nh(this.WR,"GET",this.jS+"/reauthenticate",{By:this.By,ug:t.vg
})
return{Ft:{xg:null,bg:null},Fl:r}}))}catch(e){if(Bd(e))return{Ft:{xg:null,
bg:null},Fl:e}
throw e}}async Dq(e){try{const t=this.jS+"/resend"
if("$g"in e){const{$g:n,k:r,Ee:i}=e,{Fl:o}=await nh(this.WR,"POST",t,{
By:this.By,we:{$g:n,k:r,VX:{HX:null==i?void 0:i.WX}},fg:null==i?void 0:i.zg})
return{Ft:{xg:null,bg:null},Fl:o}}if("KX"in e){
const{KX:n,k:r,Ee:i}=e,{Ft:o,Fl:s}=await nh(this.WR,"POST",t,{By:this.By,we:{
KX:n,k:r,VX:{HX:null==i?void 0:i.WX}}})
return{Ft:{xg:null,bg:null,CQ:null==o?void 0:o.MQ},Fl:s}}
throw new qR("You must provide either an email or phone number and a type")
}catch(t){if(Bd(t))return{Ft:{xg:null,bg:null},Fl:t}
throw t}}async Ag(){
return await this.rX,await this.PX(-1,(async()=>this.$Q((async e=>e))))}
async PX(e,t){this.CX("#_acquireLock","begin",e)
try{if(this.oX){
const e=this.sX.e?this.sX[this.sX.e-1]:Promise.vl(),n=(async()=>(await e,
await t()))()
return this.sX.M((async()=>{try{await n}catch(XF){}})()),n}
return await this.hX("lock:"+this.Oy,e,(async()=>{
this.CX("#_acquireLock","lock acquired for storage key",this.Oy)
try{this.oX=1
const e=t()
for(this.sX.M((async()=>{try{await e}catch(XF){}})()),await e;this.sX.e;){
const e=[...this.sX]
await Promise.np(e),this.sX.Eo(0,e.e)}return await e}finally{
this.CX("#_acquireLock","lock released for storage key",this.Oy),this.oX=0}}))
}finally{this.CX("#_acquireLock","end")}}async $Q(e){
this.CX("#_useSession","begin")
try{const t=await this.FQ()
return await e(t)}finally{this.CX("#_useSession","end")}}async FQ(){
this.CX("#__loadSession()","begin"),
this.oX||this.CX("#__loadSession()","used outside of an acquired lock!",Error().ee)
try{let e=null
const t=await s$(this.EX,this.Oy)
if(this.CX("#getSession()","session from storage",t),null!==t&&(this.LQ(t)?e=t:(this.CX("#getSession()","session from storage is not valid"),
await this.$X())),!e)return{Ft:{bg:null},Fl:null}
const n=e.wg?9e4>1e3*e.wg-Date.Wu():0
if(this.CX("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.wg),
!n){if(this.XJ){const t=await s$(this.XJ,this.Oy+"-user")
;(null==t?void 0:t.xg)?e.xg=t.xg:e.xg=eh()}if(this.EX.zQ&&e.xg){let t=this.iX
e=new Proxy(e,{t:(e,n,r)=>(t||"user"!==n||(t=1,this.iX=1),Reflect.t(e,n,r))})}
return{Ft:{bg:e},Fl:null}}const{bg:r,Fl:i}=await this.UQ(e.yg)
return i?{Ft:{bg:null},Fl:i}:{Ft:{bg:r},Fl:null}}finally{
this.CX("#__loadSession()","end")}}async BQ(e){
return e?await this.VQ(e):(await this.rX,
await this.PX(-1,(async()=>await this.VQ())))}async VQ(e){try{
return e?await nh(this.WR,"GET",this.jS+"/user",{By:this.By,ug:e,mg:oh
}):await this.$Q((async e=>{var t,n,r
const{Ft:i,Fl:o}=e
if(o)throw o
return(null===(t=i.bg)||void 0===t?void 0:t.vg)||this.JJ?await nh(this.WR,"GET",this.jS+"/user",{
By:this.By,
ug:null!==(r=null===(n=i.bg)||void 0===n?void 0:n.vg)&&void 0!==r?r:void 0,mg:oh
}):{Ft:{xg:null},Fl:new HR}}))}catch(t){
if(Bd(t))return(e=>Bd(e)&&"AuthSessionMissingError"===e.oe)(t)&&(await this.$X(),
await a$(this.EX,this.Oy+"-code-verifier")),{Ft:{xg:null},Fl:t}
throw t}}async HQ(e,t={}){
return await this.rX,await this.PX(-1,(async()=>await this.WQ(e,t)))}
async WQ(e,t={}){try{return await this.$Q((async n=>{const{Ft:r,Fl:i}=n
if(i)throw i
if(!r.bg)throw new HR
const o=r.bg
let s=null,a=null
"pkce"===this.bJ&&null!=e.$g&&([s,a]=await Qd(this.EX,this.Oy))
const{Ft:l,Fl:c}=await nh(this.WR,"PUT",this.jS+"/user",{By:this.By,
fg:null==t?void 0:t.zg,we:Object.ml(Object.ml({},e),{qX:s,YX:a}),ug:o.vg,mg:oh})
if(c)throw c
return o.xg=l.xg,await this.LX(o),await this.MX("USER_UPDATED",o),{Ft:{xg:o.xg},
Fl:null}}))}catch(n){if(Bd(n))return{Ft:{xg:null},Fl:n}
throw n}}async qQ(e){
return await this.rX,await this.PX(-1,(async()=>await this.YQ(e)))}async YQ(e){
try{if(!e.vg||!e.yg)throw new HR
const t=Date.Wu()/1e3
let n=t,r=1,i=null
const{Mr:o}=Jd(e.vg)
if(o.gd&&(n=o.gd,r=t>=n),r){const{bg:t,Fl:n}=await this.UQ(e.yg)
if(n)return{Ft:{xg:null,bg:null},Fl:n}
if(!t)return{Ft:{xg:null,bg:null},Fl:null}
i=t}else{const{Ft:r,Fl:o}=await this.VQ(e.vg)
if(o)throw o
i={vg:e.vg,yg:e.yg,xg:r.xg,KQ:"bearer",gg:n-t,wg:n
},await this.LX(i),await this.MX("SIGNED_IN",i)}return{Ft:{xg:i.xg,bg:i},Fl:null
}}catch(t){if(Bd(t))return{Ft:{bg:null,xg:null},Fl:t}
throw t}}async GQ(e){
return await this.rX,await this.PX(-1,(async()=>await this.JQ(e)))}async JQ(e){
try{return await this.$Q((async t=>{var n
if(!e){const{Ft:r,Fl:i}=t
if(i)throw i
e=null!==(n=r.bg)&&void 0!==n?n:void 0}if(!(null==e?void 0:e.yg))throw new HR
const{bg:r,Fl:i}=await this.UQ(e.yg)
return i?{Ft:{xg:null,bg:null},Fl:i}:r?{Ft:{xg:r.xg,bg:r},Fl:null}:{Ft:{xg:null,
bg:null},Fl:null}}))}catch(t){if(Bd(t))return{Ft:{xg:null,bg:null},Fl:t}
throw t}}async RX(e,t){try{if(!t$())throw new YR("No browser detected.")
if(e.Fl||e.gG||e.ag)throw new YR(e.gG||"Error in URL with unspecified error_description",{
Fl:e.Fl||"unspecified_error",sg:e.ag||"unspecified_code"})
switch(t){case"implicit":
if("pkce"===this.bJ)throw new KR("Not a valid PKCE flow url.")
break
case"pkce":
if("implicit"===this.bJ)throw new YR("Not a valid implicit grant flow url.")}
if("pkce"===t){
if(this.CX("#_initialize()","begin","is PKCE flow",1),!e.sg)throw new KR("No code detected.")
const{Ft:t,Fl:n}=await this.rQ(e.sg)
if(n)throw n
const r=new URL(window.Jt.Gt)
return r.bH.at("code"),window.bu.xu(window.bu.Zr,"",r.C()),{Ft:{bg:t.bg,FX:null
},Fl:null}}const{XQ:n,QQ:r,vg:i,yg:o,gg:s,wg:a,KQ:l}=e
if(!(i&&s&&o&&l))throw new YR("No session defined in URL")
const c=Math.round(Date.Wu()/1e3),u=parseInt(s)
let d=c+u
a&&(d=parseInt(a))
const{Ft:h,Fl:f}=await this.VQ(i)
if(f)throw f
const p={XQ:n,QQ:r,vg:i,gg:u,wg:d,yg:o,KQ:l,xg:h.xg}
return window.Jt.oc="",this.CX("#_getSessionFromURL()","clearing window.location.hash"),
{Ft:{bg:p,FX:e.k},Fl:null}}catch(n){if(Bd(n))return{Ft:{bg:null,FX:null},Fl:n}
throw n}}DX(e){return!(!e.vg&&!e.gG)}async IX(e){
const t=await s$(this.EX,this.Oy+"-code-verifier")
return!(!e.sg||!t)}async Bg(e={Fo:"global"}){
return await this.rX,await this.PX(-1,(async()=>await this.ZQ(e)))}
async ZQ({Fo:e}={Fo:"global"}){return await this.$Q((async t=>{var n
const{Ft:r,Fl:i}=t
if(i)return{Fl:i}
const o=null===(n=r.bg)||void 0===n?void 0:n.vg
if(o){const{Fl:t}=await this.dX.Bg(o,e)
if(t&&(!(e=>Bd(e)&&"AuthApiError"===e.oe)(t)||404!==t.al&&401!==t.al&&403!==t.al))return{
Fl:t}}
return"others"!==e&&(await this.$X(),await a$(this.EX,this.Oy+"-code-verifier")),
{Fl:null}}))}jg(e){
const t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".E(/[xy]/g,(e=>{
const t=16*Math.random()|0
return("x"==e?t:3&t|8).C(16)})),n={ir:t,Or:e,Dg:()=>{
this.CX("#unsubscribe()","state change callback with id removed",t),
this.ZJ.at(t)}}
return this.CX("#onAuthStateChange()","registered callback with id",t),this.ZJ.te(t,n),
(async()=>{await this.rX,await this.PX(-1,(async()=>{this.eZ(t)}))})(),{Ft:{Og:n
}}}async eZ(e){return await this.$Q((async t=>{var n,r
try{const{Ft:{bg:r},Fl:i}=t
if(i)throw i
await(null===(n=this.ZJ.t(e))||void 0===n?void 0:n.Or("INITIAL_SESSION",r)),this.CX("INITIAL_SESSION","callback id",e,"session",r)
}catch(i){
await(null===(r=this.ZJ.t(e))||void 0===r?void 0:r.Or("INITIAL_SESSION",null)),
this.CX("INITIAL_SESSION","callback id",e,"error",i)}}))}async tZ(e,t={}){
let n=null,r=null
"pkce"===this.bJ&&([n,r]=await Qd(this.EX,this.Oy,1))
try{return await nh(this.WR,"POST",this.jS+"/recover",{we:{$g:e,qX:n,YX:r,VX:{
HX:t.WX}},By:this.By,fg:t.fg})}catch(i){if(Bd(i))return{Ft:null,Fl:i}
throw i}}async nZ(){var e
try{const{Ft:t,Fl:n}=await this.BQ()
if(n)throw n
return{Ft:{rZ:null!==(e=t.xg.rZ)&&void 0!==e?e:[]},Fl:null}}catch(t){
if(Bd(t))return{Ft:null,Fl:t}
throw t}}async iZ(e){var t
try{const{Ft:n,Fl:r}=await this.$Q((async t=>{var n,r,i,o,s
const{Ft:a,Fl:l}=t
if(l)throw l
const c=await this.oZ(this.jS+"/user/identities/authorize",e.QX,{
fg:null===(n=e.Ee)||void 0===n?void 0:n.fg,
ZX:null===(r=e.Ee)||void 0===r?void 0:r.ZX,
eQ:null===(i=e.Ee)||void 0===i?void 0:i.eQ,tQ:1})
return await nh(this.WR,"GET",c,{By:this.By,
ug:null!==(s=null===(o=a.bg)||void 0===o?void 0:o.vg)&&void 0!==s?s:void 0})}))
if(r)throw r
return t$()&&!(null===(t=e.Ee)||void 0===t?void 0:t.tQ)&&window.Jt.ml(null==n?void 0:n.jS),
{Ft:{QX:e.QX,jS:null==n?void 0:n.jS},Fl:null}}catch(n){if(Bd(n))return{Ft:{
QX:e.QX,jS:null},Fl:n}
throw n}}async sZ(e){try{return await this.$Q((async t=>{var n,r
const{Ft:i,Fl:o}=t
if(o)throw o
return await nh(this.WR,"DELETE",`${this.jS}/user/identities/${e.aZ}`,{
By:this.By,
ug:null!==(r=null===(n=i.bg)||void 0===n?void 0:n.vg)&&void 0!==r?r:void 0})}))
}catch(t){if(Bd(t))return{Ft:null,Fl:t}
throw t}}async lZ(e){const t=`#_refreshAccessToken(${e.Es(0,5)}...)`
this.CX(t,"begin")
try{const i=Date.Wu()
return await(n=async n=>(n>0&&await(async e=>await new Promise((t=>{
setTimeout((()=>t(null)),e)
})))(200*Math.pow(2,n-1)),this.CX(t,"refreshing attempt",n),
await nh(this.WR,"POST",this.jS+"/token?grant_type=refresh_token",{we:{yg:e},
By:this.By,mg:rh})),r=(e,t)=>{const n=200*Math.pow(2,e)
return t&&Vd(t)&&Date.Wu()+n-i<IR},new Promise(((e,t)=>{(async()=>{
for(let i=0;1/0>i;i++)try{const t=await n(i)
if(!r(i,null))return void e(t)}catch(XF){if(!r(i,XF))return void t(XF)}})()})))
}catch(i){if(this.CX(t,"error",i),Bd(i))return{Ft:{bg:null,xg:null},Fl:i}
throw i}finally{this.CX(t,"end")}var n,r}LQ(e){
return"object"==typeof e&&null!==e&&"vg"in e&&"yg"in e&&"wg"in e}async XX(e,t){
const n=await this.oZ(this.jS+"/authorize",e,{fg:t.fg,ZX:t.ZX,eQ:t.eQ})
return this.CX("#_handleProviderSignIn()","provider",e,"options",t,"url",n),t$()&&!t.tQ&&window.Jt.ml(n),
{Ft:{QX:e,jS:n},Fl:null}}async zX(){var e,t
const n="#_recoverAndRefresh()"
this.CX(n,"begin")
try{const i=await s$(this.EX,this.Oy)
if(i&&this.XJ){let t=await s$(this.XJ,this.Oy+"-user")
this.EX.zQ||!Object.Ue(this.EX,this.XJ)||t||(t={xg:i.xg
},await o$(this.XJ,this.Oy+"-user",t)),
i.xg=null!==(e=null==t?void 0:t.xg)&&void 0!==e?e:eh()}else if(i&&!i.xg&&!i.xg){
const e=await s$(this.EX,this.Oy+"-user")
e&&(null==e?void 0:e.xg)?(i.xg=e.xg,await a$(this.EX,this.Oy+"-user"),await o$(this.EX,this.Oy,i)):i.xg=eh()
}
if(this.CX(n,"session from storage",i),!this.LQ(i))return this.CX(n,"session is not valid"),
void(null!==i&&await this.$X())
const o=9e4>1e3*(null!==(t=i.wg)&&void 0!==t?t:1/0)-Date.Wu()
if(this.CX(n,`session has${o?"":" not"} expired with margin of 90000s`),o){
if(this.yJ&&i.yg){const{Fl:e}=await this.UQ(i.yg)
e&&(Vd(e)||(this.CX(n,"refresh failed with a non-retryable error, removing the session",e),
await this.$X()))}}else if(i.xg&&1==i.xg.cZ)try{
const{Ft:e,Fl:t}=await this.VQ(i.vg)
!t&&(null==e?void 0:e.xg)?(i.xg=e.xg,await this.LX(i),await this.MX("SIGNED_IN",i)):this.CX(n,"could not get user data, skipping SIGNED_IN notification")
}catch(r){
this.CX(n,"error getting user data, skipping SIGNED_IN notification",r)
}else await this.MX("SIGNED_IN",i)}catch(i){return void this.CX(n,"error",i)
}finally{this.CX(n,"end")}}async UQ(e){var t,n
if(!e)throw new HR
if(this.nX)return this.nX.Ml
const r=`#_callRefreshToken(${e.Es(0,5)}...)`
this.CX(r,"begin")
try{this.nX=new l$
const{Ft:t,Fl:n}=await this.lZ(e)
if(n)throw n
if(!t.bg)throw new HR
await this.LX(t.bg),await this.MX("TOKEN_REFRESHED",t.bg)
const r={bg:t.bg,Fl:null}
return this.nX.vl(r),r}catch(i){if(this.CX(r,"error",i),Bd(i)){const e={bg:null,
Fl:i}
return Vd(i)||await this.$X(),null===(t=this.nX)||void 0===t||t.vl(e),e}
throw null===(n=this.nX)||void 0===n||n.fl(i),i}finally{
this.nX=null,this.CX(r,"end")}}async MX(e,t,n=1){
const r=`#_notifyAllSubscribers(${e})`
this.CX(r,"begin",t,"broadcast = "+n)
try{this.aX&&n&&this.aX.dk({Lt:e,bg:t})
const r=[],i=Array.Go(this.ZJ.Lo()).Oo((async n=>{try{await n.Or(e,t)}catch(XF){
r.M(XF)}}))
if(await Promise.np(i),r.e>0){for(let e=0;e<r.e;e+=1);throw r[0]}}finally{
this.CX(r,"end")}}async LX(e){this.CX("#_saveSession()",e),this.iX=1
const t=Object.ml({},e),n=t.xg&&1==t.xg.cZ
if(this.XJ){!n&&t.xg&&await o$(this.XJ,this.Oy+"-user",{xg:t.xg})
const e=Object.ml({},t)
delete e.xg
const r=structuredClone(e)
await o$(this.EX,this.Oy,r)}else{const e=structuredClone(t)
await o$(this.EX,this.Oy,e)}}async $X(){
this.CX("#_removeSession()"),await a$(this.EX,this.Oy),
await a$(this.EX,this.Oy+"-code-verifier"),
await a$(this.EX,this.Oy+"-user"),this.XJ&&await a$(this.XJ,this.Oy+"-user"),
await this.MX("SIGNED_OUT",null)}uZ(){
this.CX("#_removeVisibilityChangedCallback()")
const e=this.tX
this.tX=null
try{
e&&t$()&&(null===window||void 0===window?void 0:window.Nu)&&window.Nu("visibilitychange",e)
}catch(XF){}}async dZ(){await this.hZ(),this.CX("#_startAutoRefresh()")
const e=setInterval((()=>this.fZ()),IR)
this.eX=e,e&&"object"==typeof e&&"function"==typeof e.pZ?e.pZ():"undefined"!=typeof Deno&&"function"==typeof Deno.unrefTimer&&Deno.unrefTimer(e),
setTimeout((async()=>{await this.rX,await this.fZ()}),0)}async hZ(){
this.CX("#_stopAutoRefresh()")
const e=this.eX
this.eX=null,e&&clearInterval(e)}async mZ(){this.uZ(),await this.dZ()}
async vZ(){this.uZ(),await this.hZ()}async fZ(){
this.CX("#_autoRefreshTokenTick()","begin")
try{await this.PX(0,(async()=>{try{const e=Date.Wu()
try{return await this.$Q((async t=>{const{Ft:{bg:n}}=t
if(!n||!n.yg||!n.wg)return void this.CX("#_autoRefreshTokenTick()","no session")
const r=Math.floor((1e3*n.wg-e)/IR)
this.CX("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),
r>3||await this.UQ(n.yg)}))}catch(XF){}}finally{
this.CX("#_autoRefreshTokenTick()","end")}}))}catch(XF){
if(!(XF.YJ||XF instanceof v$))throw XF
this.CX("auto refresh token tick lock not available")}}async UX(){
if(this.CX("#_handleVisibilityChange()"),
!t$()||!(null===window||void 0===window?void 0:window.Pn))return this.yJ&&this.mZ(),
0
try{
this.tX=async()=>await this.yZ(0),null===window||void 0===window||window.Pn("visibilitychange",this.tX),
await this.yZ(1)}catch(e){}}async yZ(e){const t=`#_onVisibilityChanged(${e})`
this.CX(t,"visibilityState",document.oR),"visible"===document.oR?(this.yJ&&this.dZ(),
e||(await this.rX,await this.PX(-1,(async()=>{
"visible"===document.oR?await this.zX():this.CX(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting")
})))):"hidden"===document.oR&&this.yJ&&this.hZ()}async oZ(e,t,n){
const r=["provider="+encodeURIComponent(t)]
if((null==n?void 0:n.fg)&&r.M("redirect_to="+encodeURIComponent(n.fg)),(null==n?void 0:n.ZX)&&r.M("scopes="+encodeURIComponent(n.ZX)),
"pkce"===this.bJ){const[e,t]=await Qd(this.EX,this.Oy),n=new URLSearchParams({
qX:""+encodeURIComponent(e),YX:""+encodeURIComponent(t)})
r.M(n.C())}if(null==n?void 0:n.eQ){const e=new URLSearchParams(n.eQ)
r.M(e.C())}
return(null==n?void 0:n.tQ)&&r.M("skip_http_redirect="+n.tQ),`${e}?${r.A("&")}`}
async bX(e){try{return await this.$Q((async t=>{var n
const{Ft:r,Fl:i}=t
return i?{Ft:null,Fl:i}:await nh(this.WR,"DELETE",`${this.jS}/factors/${e.gZ}`,{
By:this.By,ug:null===(n=null==r?void 0:r.bg)||void 0===n?void 0:n.vg})}))
}catch(t){if(Bd(t))return{Ft:null,Fl:t}
throw t}}async gX(e){try{return await this.$Q((async t=>{var n,r
const{Ft:i,Fl:o}=t
if(o)return{Ft:null,Fl:o}
const s=Object.ml({wZ:e.bZ,xZ:e.kZ},"phone"===e.kZ?{KX:e.KX}:{NZ:e.NZ
}),{Ft:a,Fl:l}=await nh(this.WR,"POST",this.jS+"/factors",{we:s,By:this.By,
ug:null===(n=null==i?void 0:i.bg)||void 0===n?void 0:n.vg})
return l?{Ft:null,Fl:l
}:("totp"===e.kZ&&(null===(r=null==a?void 0:a.SZ)||void 0===r?void 0:r._Z)&&(a.SZ._Z="data:image/svg+xml;utf-8,"+a.SZ._Z),
{Ft:a,Fl:null})}))}catch(t){if(Bd(t))return{Ft:null,Fl:t}
throw t}}async vX(e){return this.PX(-1,(async()=>{try{
return await this.$Q((async t=>{var n
const{Ft:r,Fl:i}=t
if(i)return{Ft:null,Fl:i}
const{Ft:o,Fl:s}=await nh(this.WR,"POST",`${this.jS}/factors/${e.gZ}/verify`,{
we:{sg:e.sg,TZ:e.EZ},By:this.By,
ug:null===(n=null==r?void 0:r.bg)||void 0===n?void 0:n.vg})
return s?{Ft:null,Fl:s}:(await this.LX(Object.ml({
wg:Math.round(Date.Wu()/1e3)+o.gg
},o)),await this.MX("MFA_CHALLENGE_VERIFIED",o),{Ft:o,Fl:s})}))}catch(t){
if(Bd(t))return{Ft:null,Fl:t}
throw t}}))}async kX(e){return this.PX(-1,(async()=>{try{
return await this.$Q((async t=>{var n
const{Ft:r,Fl:i}=t
return i?{Ft:null,Fl:i
}:await nh(this.WR,"POST",`${this.jS}/factors/${e.gZ}/challenge`,{we:{kw:e.kw},
By:this.By,ug:null===(n=null==r?void 0:r.bg)||void 0===n?void 0:n.vg})}))
}catch(t){if(Bd(t))return{Ft:null,Fl:t}
throw t}}))}async SX(e){const{Ft:t,Fl:n}=await this.kX({gZ:e.gZ})
return n?{Ft:null,Fl:n}:await this.vX({gZ:e.gZ,EZ:t.ir,sg:e.sg})}async _J(){
const{Ft:{xg:e},Fl:t}=await this.BQ()
if(t)return{Ft:null,Fl:t}
const n=(null==e?void 0:e.qJ)||[],r=n.Ro((e=>"totp"===e.xZ&&"verified"===e.al)),i=n.Ro((e=>"phone"===e.xZ&&"verified"===e.al))
return{Ft:{np:n,SZ:r,KX:i},Fl:null}}async TX(){
return this.PX(-1,(async()=>await this.$Q((async e=>{var t,n
const{Ft:{bg:r},Fl:i}=e
if(i)return{Ft:null,Fl:i}
if(!r)return{Ft:{CZ:null,MZ:null,OZ:[]},Fl:null}
const{Mr:o}=Jd(r.vg)
let s=null
o.jZ&&(s=o.jZ)
let a=s
return(null!==(n=null===(t=r.xg.qJ)||void 0===t?void 0:t.Ro((e=>"verified"===e.al)))&&void 0!==n?n:[]).e>0&&(a="aal2"),
{Ft:{CZ:s,MZ:a,OZ:o.PZ||[]},Fl:null}}))))}async AZ(e,t={h:[]}){
let n=t.h.Zu((t=>t.DZ===e))
if(n)return n
const r=Date.Wu()
if(n=this.fX.h.Zu((t=>t.DZ===e)),n&&this.pX+6e5>r)return n
const{Ft:i,Fl:o}=await nh(this.WR,"GET",this.jS+"/.well-known/jwks.json",{
By:this.By})
if(o)throw o
return i.h&&0!==i.h.e?(this.fX=i,this.pX=r,n=i.h.Zu((t=>t.DZ===e)),n||null):null
}async IZ(e,t={}){try{let n=e
if(!n){const{Ft:e,Fl:t}=await this.Ag()
if(t||!e.bg)return{Ft:null,Fl:t}
n=e.bg.vg}const{Zy:r,Mr:i,eg:o,tg:{Zy:s,Mr:a}}=Jd(n)
;(null==t?void 0:t.RZ)||(e=>{if(!e)throw Error("Missing exp claim")
if(Math.floor(Date.Wu()/1e3)>=e)throw Error("JWT has expired")})(i.gd)
const l=r.$Z&&!r.$Z.vc("HS")&&r.DZ&&"FZ"in globalThis&&"ng"in globalThis.FZ?await this.AZ(r.DZ,(null==t?void 0:t.h)?{
h:t.h}:null==t?void 0:t.fX):null
if(!l){const{Fl:e}=await this.BQ(n)
if(e)throw e
return{Ft:{LZ:i,Zy:r,eg:o},Fl:null}}const c=(e=>{switch(e){case"RS256":return{
oe:"RSASSA-PKCS1-v1_5",oc:{oe:"SHA-256"}}
case"ES256":return{oe:"ECDSA",zZ:"P-256",oc:{oe:"SHA-256"}}
default:throw Error("Invalid alg claim")}
})(r.$Z),u=await crypto.ng.importKey("jwk",l,c,1,["verify"])
if(!(await crypto.ng.mX(c,u,o,(e=>{const t=[]
return((e,t)=>{for(let n=0;n<e.e;n+=1){let r=e.Qy(n)
if(r>55295&&56319>=r){const t=1024*(r-55296)&65535
r=65536+(e.Qy(n+1)-56320&65535|t),n+=1}Yd(r,t)}
})(e,(e=>t.M(e))),new Uint8Array(t)
})(`${s}.${a}`))))throw new XR("Invalid JWT signature")
return{Ft:{LZ:i,Zy:r,eg:o},Fl:null}}catch(n){if(Bd(n))return{Ft:null,Fl:n}
throw n}}}b$.cX=0
const x$=b$
class k$ extends x${l(e){super(e)}}GN=(e,t,n,r)=>new(n||(n=Promise))(((i,o)=>{
function s(e){try{l(r.P(e))}catch(XF){o(XF)}}function a(e){try{l(r.pH(e))
}catch(XF){o(XF)}}function l(e){var t
e.j?i(e.r):(t=e.r,t instanceof n?t:new n((e=>{e(t)}))).R(s,a)}
l((r=r.c(e,t||[])).P())}))
class N${l(e,t,n){var r,i,o,s
if(this.UZ=e,this.BZ=t,!e)throw Error("supabaseUrl is required.")
if(!t)throw Error("supabaseKey is required.")
const a=(s=e).yc("/")?s:s+"/",l=new URL(a)
this.VZ=new URL("realtime/v1",l),this.VZ.cF=this.VZ.cF.E("http","ws"),this.HZ=new URL("auth/v1",l),
this.WZ=new URL("storage/v1",l),this.qZ=new URL("functions/v1",l)
const c=`sb-${l.YZ.ne(".")[0]}-auth-token`,u=(function(e,t){var n,r
const{KZ:i,Pg:o,GZ:s,JZ:a}=e,{KZ:l,Pg:c,GZ:u,JZ:d}=t,h={
KZ:Object.ml(Object.ml({},l),i),Pg:Object.ml(Object.ml({},c),o),
GZ:Object.ml(Object.ml({},u),s),JZ:Object.ml(Object.ml(Object.ml({},d),a),{
By:Object.ml(Object.ml({},null!==(n=null==d?void 0:d.By)&&void 0!==n?n:{}),null!==(r=null==a?void 0:a.By)&&void 0!==r?r:{})
}),IK:()=>qN(this,void 0,void 0,(function*(){return""}))}
return e.IK?h.IK=e.IK:delete h.IK,h})(null!=n?n:{},{KZ:jR,GZ:AR,
Pg:Object.ml(Object.ml({},PR),{Oy:c}),JZ:OR})
this.Oy=null!==(r=u.Pg.Oy)&&void 0!==r?r:"",this.By=null!==(i=u.JZ.By)&&void 0!==i?i:{},
u.IK?(this.IK=u.IK,this.Pg=new Proxy({},{t(e,t){
throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${t+""} is not possible`)
}
})):this.Pg=this.XZ(null!==(o=u.Pg)&&void 0!==o?o:{},this.By,u.JZ.WR),this.WR=((e,t,n)=>{
const r=(e=>{let t
return t=e||("undefined"==typeof fetch?SI:fetch),(...e)=>t(...e)
})(n),i="undefined"==typeof Headers?_I:Headers
return(n,o)=>WN(void 0,void 0,void 0,(function*(){var s
const a=null!==(s=yield t())&&void 0!==s?s:e
let l=new i(null==o?void 0:o.By)
return l.On("apikey")||l.te("apikey",e),l.On("Authorization")||l.te("Authorization","Bearer "+a),
r(n,Object.ml(Object.ml({},o),{By:l}))}))
})(t,this.QZ.jn(this),u.JZ.WR),this.GZ=this.ZZ(Object.ml({By:this.By,
IK:this.QZ.jn(this)},u.GZ)),this.ix=new YI(new URL("rest/v1",l).Gt,{By:this.By,
Nw:u.KZ.Nw,WR:this.WR}),u.IK||this.e0()}get t0(){return new kI(this.qZ.Gt,{
By:this.By,mH:this.WR})}get EX(){return new CR(this.WZ.Gt,this.By,this.WR)}
Go(e){return this.ix.Go(e)}Nw(e){return this.ix.Nw(e)}MW(e,t={},n={}){
return this.ix.MW(e,t,n)}kw(e,t={qR:{}}){return this.GZ.kw(e,t)}KK(){
return this.GZ.KK()}jw(e){return this.GZ.jw(e)}GK(){return this.GZ.GK()}QZ(){
var e,t
return GN(this,void 0,void 0,(function*(){if(this.IK)return yield this.IK()
const{Ft:n}=yield this.Pg.Ag()
return null!==(t=null===(e=n.bg)||void 0===e?void 0:e.vg)&&void 0!==t?t:null}))}
XZ({yJ:e,gJ:t,wJ:n,EX:r,Oy:i,bJ:o,hX:s,GJ:a},l,c){const u={dg:"Bearer "+this.BZ,
cK:""+this.BZ}
return new k$({jS:this.HZ.Gt,By:Object.ml(Object.ml({},u),l),Oy:i,yJ:e,gJ:t,
wJ:n,EX:r,bJ:o,hX:s,GJ:a,WR:c,JJ:"dg"in this.By})}ZZ(e){
return new vR(this.VZ.Gt,Object.ml(Object.ml({},e),{gc:Object.ml({cK:this.BZ
},null==e?void 0:e.gc)}))}e0(){return this.Pg.jg(((e,t)=>{
this.n0(e,"CLIENT",null==t?void 0:t.vg)}))}n0(e,t,n){
"TOKEN_REFRESHED"!==e&&"SIGNED_IN"!==e||this.r0===n?"SIGNED_OUT"===e&&(this.GZ.yH(),
"STORAGE"==t&&this.Pg.Bg(),this.r0=void 0):this.r0=n}}
const S$=((e,t,n)=>new N$("https://cbjzcbviznwiqomrcjod.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNianpjYnZpem53aXFvbXJjam9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODY0NTQsImV4cCI6MjA2ODI2MjQ1NH0.8n0j4yj6Lvm3B-HxfhyfAgtMjLjP-ZLsN8vq4szcci8",n))(0,0,{
Pg:{EX:localStorage,gJ:1,yJ:1}
}),_$=Bp.$o(void 0),T$=eE("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{
yh:{Hg:{
a:"bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-100",
PP:"bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 active:scale-100",
kb:"border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-100",
i0:"bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-100",
o0:"hover:bg-accent/50 hover:text-accent-foreground",
TN:"text-primary underline-offset-4 hover:underline",
qj:"bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 active:scale-100"
},Bi:{a:"h-10 px-4 py-2",s0:"h-9 rounded-md px-3 text-xs",
a0:"h-11 rounded-md px-8 text-base",Yg:"h-10 w-10",
l0:"h-12 rounded-md px-10 text-base"}},VT:{Hg:"default",Bi:"default"}
}),E$=Bp.qo((({As:e,Hg:t,Bi:n,ew:r=0,Ry:i=0,w:o,...s},a)=>{const l=r?ob:"button"
return Gp.zo(l,{As:qo(T$({Hg:t,Bi:n,As:e})),y:a,Oe:i||s.Oe,...s,
w:i?Gp.Os(Gp.Bc,{w:[Gp.zo(SE,{As:"mr-2 h-4 w-4 animate-spin"}),o]}):o})}))
E$.re="Button"
const C$=Bp.qo((({As:e,...t},n)=>Gp.zo("div",{y:n,
As:qo("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t})))
C$.re="Card"
const M$=Bp.qo((({As:e,...t},n)=>Gp.zo("div",{y:n,
As:qo("flex flex-col space-y-1.5 p-6",e),...t})))
M$.re="CardHeader"
const O$=Bp.qo((({As:e,...t},n)=>Gp.zo("h3",{y:n,
As:qo("text-2xl font-semibold leading-none tracking-tight",e),...t})))
O$.re="CardTitle"
const j$=Bp.qo((({As:e,...t},n)=>Gp.zo("p",{y:n,
As:qo("text-sm text-muted-foreground",e),...t})))
j$.re="CardDescription"
const P$=Bp.qo((({As:e,...t},n)=>Gp.zo("div",{y:n,As:qo("p-6 pt-0",e),...t})))
P$.re="CardContent"
const A$=Bp.qo((({As:e,...t},n)=>Gp.zo("div",{y:n,
As:qo("flex items-center p-6 pt-0",e),...t})))
A$.re="CardFooter"
class D$ extends Bp.lu{l(e){super(e),ET(this,"handleReset",(()=>{this._x({c0:0,
Fl:void 0,u0:void 0})})),ET(this,"handleReload",(()=>{window.Jt.reload()
})),this.Zr={c0:0}}static hi(e){return{c0:1,Fl:e}}fi(e,t){this._x({Fl:e,u0:t})}
ae(){return this.Zr.c0?this.f.Si?this.f.Si:Gp.zo("div",{
As:"min-h-screen flex items-center justify-center p-4 bg-background",
w:Gp.Os(C$,{As:"w-full max-w-md",w:[Gp.Os(M$,{As:"text-center",w:[Gp.zo("div",{
As:"mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4",
w:Gp.zo(HE,{As:"w-8 h-8 text-destructive"})}),Gp.zo(O$,{As:"text-xl font-bold",
w:"Something went wrong"})]}),Gp.Os(P$,{As:"space-y-4",w:[Gp.zo("p",{
As:"text-muted-foreground text-center",
w:"We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage."
}),0,Gp.Os("div",{As:"flex flex-col sm:flex-row gap-2",w:[Gp.Os(E$,{Fi:this.d0,
Hg:"outline",As:"flex-1",w:[Gp.zo(AE,{As:"w-4 h-4 mr-2"}),"Try Again"]
}),Gp.Os(E$,{Fi:this.h0,As:"flex-1",w:[Gp.zo(AE,{As:"w-4 h-4 mr-2"
}),"Reload Page"]})]}),Gp.Os(E$,{Hg:"ghost",Fi(){return window.Jt.Gt="/"},
As:"w-full",w:[Gp.zo(xE,{As:"w-4 h-4 mr-2"}),"Go to Homepage"]})]})]})
}):this.f.w}}const I$=[{oe:"Home",Gt:"/",Yg:xE},{oe:"News",Gt:"/news",Yg:sE},{
oe:"Events",Gt:"/events",Yg:aE}],R$=[{Yg:yE,Gt:"#",oe:"Facebook"},{Yg:qE,Gt:"#",
oe:"Twitter"},{Yg:kE,Gt:"#",oe:"Instagram"},{Yg:JE,Gt:"#",oe:"YouTube"}],$$=[{
oe:"Latest News",Gt:"/news"},{oe:"Upcoming Events",Gt:"/events"},{oe:"About Us",
Gt:"/about"},{oe:"Contact",Gt:"/contact"}],F$=[{Yg:KE,r:"1,200+",Ds:"Students"
},{Yg:WE,r:"95%",Ds:"Graduation Rate"},{Yg:sE,r:"50+",Ds:"Programs"},{Yg:aE,
r:"100+",Ds:"Events/Year"}],L$=[{Bd:0,md:6,Xg:-20},{Bd:1,md:8,Xg:-15},{Bd:2,
md:7,Xg:-25},{Bd:.5,md:9,Xg:-10
}],z$=eE("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{
yh:{Hg:{
a:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
i0:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
PP:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
kb:"text-foreground"}},VT:{Hg:"default"}
}),U$=eE("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{
yh:{Hg:{a:"bg-background text-foreground",
PP:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
}},VT:{Hg:"default"}}),B$=Bp.qo((({As:e,Hg:t,...n},r)=>Gp.zo("div",{y:r,
pT:"alert",As:qo(U$({Hg:t}),e),...n})))
B$.re="Alert",Bp.qo((({As:e,...t},n)=>Gp.zo("h5",{y:n,
As:qo("mb-1 font-medium leading-none tracking-tight",e),...t}))).re="AlertTitle"
const V$=Bp.qo((({As:e,...t},n)=>Gp.zo("div",{y:n,
As:qo("text-sm [&_p]:leading-relaxed",e),...t})))
V$.re="AlertDescription"
const H$=Bp.qo((({Lt:e,dr:t,Lw:n=0})=>{
const r=Bp.Wo(null),i=Sh(),o=((e,{ih:t,Q_:n,VV:r,rs:i=0,Jh:o=0}={})=>{
const[s,a]=Bp._o(o)
return Bp.To((()=>{if(!e.S||i&&s)return
const o={ih:t&&t.S||void 0,Q_:n,VV:r}
return((e,t,{ih:n,Q_:r,VV:i="some"}={})=>{
const o=Xl(e),s=new WeakMap,a=new IntersectionObserver((e=>{e.d((e=>{
const n=s.t(e.Ve)
if(e.HV!==!!n)if(e.HV){const n=t(e.Ve,e)
"function"==typeof n?s.te(e.Ve,n):a.Qa(e.Ve)
}else"function"==typeof n&&(n(e),s.at(e.Ve))}))}),{ih:n,yI:r,
gI:"number"==typeof i?i:fI[i]})
return o.d((e=>a.Ja(e))),()=>a.mI()})(e.S,(()=>(a(1),i?void 0:()=>a(0))),o)
}),[t,e,n,i,r]),s})(r,{rs:1,Q_:"-100px"}),s=(e=>{const t=new Date(e)
return{fw:t.Lb(),hw:t.f0("en-US",{hw:"short"}),uy:t.rb("en-US",{ib:"2-digit",
ob:"2-digit"}),p0:t.f0("en-US",{p0:"long"})}})(e.Mw)
return Gp.Os(eI.qg,{y:r,Jh:{jv:0,zs:i?0:-50,Wh:i?.95:.9},Yd:o?{jv:1,zs:0,Wh:1,
Pw:!i&&n?"0 0 20px rgba(var(--primary-rgb), 0.3)":"none"}:{},xt:{Bd:i?.1:.1*t,
md:i?.4:.6,k:"spring",hd:i?120:100},
As:"relative flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-0",
w:[Gp.Os(eI.qg,{
As:"flex sm:flex-col items-center sm:items-center relative z-10 sm:min-w-[80px]",
Jh:{Wh:i?.9:0},Yd:o?{Wh:1}:{},xt:{Bd:i?.1:.1*t+.2,md:i?.3:.4},w:[Gp.Os(eI.qg,{
As:`\n            w-12 h-12 sm:w-16 sm:h-16 \n            rounded-full flex flex-col items-center justify-center \n            text-white shadow-lg relative overflow-hidden\n            ${n?"bg-gradient-to-br from-primary to-accent":"bg-primary"}\n          `,
wp:i?void 0:{Wh:1.1},Yd:!i&&n?{Wh:[1,1.1,1],If:[0,5,-5,0]}:{},xt:{md:i?.5:1,
Ad:!i&&n?3:0},w:[n&&!i&&Gp.zo(eI.qg,{
As:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
Jh:{zs:"-100%"},Yd:{zs:"100%"},xt:{md:1,Ad:2}}),Gp.zo("span",{
As:"text-[10px] sm:text-xs font-medium relative z-10",w:s.hw}),Gp.zo("span",{
As:"text-sm sm:text-lg font-bold leading-none relative z-10",w:s.fw
}),n&&Gp.zo(eI.qg,{As:"absolute -top-1 -right-1",Jh:{Wh:0},Yd:{Wh:1},xt:{
Bd:i?.2:.5},w:Gp.zo(FE,{As:"w-3 h-3 sm:w-4 sm:h-4 text-accent"})})]
}),Gp.Os(eI.qg,{As:"ml-3 sm:ml-0 sm:mt-2 text-left sm:text-center",Jh:{jv:0},
Yd:o?{jv:1}:{},xt:{Bd:i?.2:.1*t+.4},w:[Gp.zo("div",{
As:"text-xs text-muted-foreground font-medium sm:hidden",w:s.p0}),Gp.zo("div",{
As:"text-xs sm:text-sm font-semibold text-foreground",w:s.uy}),Gp.zo("div",{
As:"hidden sm:block text-xs text-muted-foreground mt-1",w:s.p0})]})]
}),Gp.zo(eI.qg,{As:"flex-1 min-w-0",Jh:{jv:0,Us:i?10:20},Yd:o?{jv:1,Us:0}:{},
xt:{Bd:i?.2:.1*t+.3,md:i?.3:.5},wp:i?void 0:{Us:-2},w:Gp.Os(C$,{
As:`\n          hover:shadow-xl transition-all duration-300 relative overflow-hidden\n          ${n&&!i?"ring-2 ring-primary/50 shadow-glow":""}\n        `,
w:[n&&!i&&Gp.zo(eI.qg,{
As:"absolute top-0 right-0 bg-gradient-to-l from-primary/20 to-transparent w-full h-full",
Jh:{jv:0},Yd:{jv:[0,1,0]},xt:{md:2}}),Gp.zo(P$,{As:"p-0 relative",
w:Gp.Os("div",{As:"flex flex-col lg:flex-row",w:[e.Gw&&Gp.zo("div",{
As:"lg:w-1/3",w:Gp.zo("img",{eo:e.Gw,Jg:e.js,
As:"w-full h-40 sm:h-48 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
})}),Gp.Os("div",{As:"p-4 sm:p-6 "+(e.Gw?"lg:w-2/3":"w-full"),w:[Gp.zo("div",{
As:"flex items-start justify-between mb-3",w:Gp.Os("div",{
As:"flex items-center gap-2 flex-wrap",w:[e.Hw&&Gp.zo(wh,{Hg:"outline",
As:(a=e.Hw.Ww,({Jw:"bg-primary/10 text-primary border-primary/20",
aw:"bg-accent/10 text-accent border-accent/20",
Xw:"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800",
Qw:"bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800"
}[a]||"bg-muted text-muted-foreground border-border")+" transition-all duration-300"),
w:e.Hw.oe}),e.nw&&Gp.Os(wh,{
As:"bg-gradient-to-r from-primary to-accent text-white border-0",w:[Gp.zo(FE,{
As:"w-3 h-3 mr-1"}),"Featured"]}),n&&Gp.zo(eI.qg,{Jh:{Wh:0,If:i?0:180},Yd:{Wh:1,
If:0},xt:{Bd:i?.2:.3},w:Gp.Os(wh,{
As:"bg-gradient-to-r from-accent to-primary text-white border-0 animate-pulse",
w:[Gp.zo(XE,{As:"w-3 h-3 mr-1"}),"New!"]})})]})}),Gp.zo("h3",{
As:"text-lg sm:text-xl font-bold mb-2 hover:text-primary transition-colors",
w:e.js}),Gp.zo("p",{
As:"text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2",w:e.Ps
}),Gp.Os("div",{As:"space-y-2 mb-4",w:[e.Jt&&Gp.Os("div",{
As:"flex items-center text-sm text-muted-foreground",w:[Gp.zo(EE,{
As:"w-4 h-4 mr-2"}),e.Jt]}),e.Yw&&Gp.Os("div",{
As:"flex items-center text-sm text-muted-foreground",w:[Gp.zo(KE,{
As:"w-4 h-4 mr-2"}),"Organized by ",e.Yw.Ug]})]}),Gp.zo("div",{As:"hidden",
w:Gp.zo(E$,{ew:1,Hg:"outline",Bi:"sm",
As:"group hover:bg-primary hover:text-primary-foreground transition-all duration-300",
w:Gp.Os(uO,{Jc:"/events/"+e.ir,w:["Learn More",Gp.zo(uE,{
As:"w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"})]})})})]})]})
})]})})]})
var a}))
H$.re="TimelineEvent"
const W$=()=>{const{tw:e,Vg:t,Fl:n}=xh()
if(t)return Gp.zo(yh,{})
if(n)return Gp.zo("div",{As:"min-h-screen flex items-center justify-center",
w:Gp.Os("div",{As:"text-center",w:[Gp.zo("h2",{As:"text-2xl font-bold mb-4",
w:"Error loading content"}),Gp.zo("p",{As:"text-muted-foreground",w:n})]})})
const r=e.Ro((e=>e.nw)).q(0,3)
return Gp.Os("div",{As:"min-h-screen",w:[Gp.zo(gh,{}),Gp.zo("section",{
As:"py-16 bg-background",w:Gp.Os("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.Os(eI.qg,{Jh:{jv:0,Us:20},gp:{
jv:1,Us:0},xt:{md:.6},As:"text-center mb-12",w:[Gp.Os("div",{
As:"inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4",
w:[Gp.zo(OE,{As:"w-5 h-5 text-primary"}),Gp.zo("span",{
As:"text-primary font-medium",w:"Latest News"})]}),Gp.Os("h2",{
As:"text-4xl md:text-5xl font-playfair font-bold mb-4",w:["Stay ",Gp.zo("span",{
As:"text-gradient",w:"Informed"})]}),Gp.zo("p",{
As:"text-xl text-muted-foreground max-w-2xl mx-auto",
w:"Discover the latest happenings, achievements, and stories from our vibrant school community."
})]}),Gp.zo("div",{
As:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",w:r.Oo(((e,t)=>{
var n,r
return Gp.zo(bh,{tw:{ir:e.ir,js:e.js,mw:e.mw||"",qw:e.qw,
pw:(null==(n=e.Yw)?void 0:n.Ug)||"Unknown Author",uw:e.Kw,
ow:(null==(r=e.Hw)?void 0:r.Ww)||"general",iw:e.Gw||"/placeholder.svg",
nw:e.nw||0,vw:[]},dr:t,nw:1},e.ir)}))}),Gp.zo(eI.qg,{Jh:{jv:0,Us:20},gp:{jv:1,
Us:0},xt:{Bd:.3,md:.6},As:"text-center",w:Gp.zo(E$,{ew:1,Bi:"lg",
As:"group hover-lift",w:Gp.Os(uO,{Jc:"/news",w:["View All News",Gp.zo(oE,{
As:"ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"})]})})})]})
}),Gp.Os("section",{
As:"py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden",
w:[Gp.zo("div",{
As:"absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/0.05),transparent_50%)]"
}),Gp.zo("div",{
As:"absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.accent/0.05),transparent_50%)]"
}),Gp.Os("div",{As:"container mx-auto px-4 sm:px-6 lg:px-8 relative",
w:[Gp.Os(eI.qg,{Jh:{jv:0,Us:20},gp:{jv:1,Us:0},xt:{md:.6},
As:"text-center mb-16",w:[Gp.Os("div",{
As:"inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full mb-6 border border-accent/20",
w:[Gp.zo(aE,{As:"w-5 h-5 text-accent animate-pulse"}),Gp.zo("span",{
As:"text-accent font-medium",w:"Live Event Timeline"}),Gp.zo("div",{
As:"w-2 h-2 bg-accent rounded-full animate-ping"})]}),Gp.Os("h2",{
As:"text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight",
w:["Upcoming ",Gp.zo("span",{
As:"text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
w:"Events"})]}),Gp.zo("p",{
As:"text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed",
w:"Experience our dynamic timeline that updates in real-time as new events are scheduled. Never miss a moment of our vibrant school community."
})]}),Gp.zo("div",{As:"max-w-5xl mx-auto",w:Gp.zo(eI.qg,{Jh:{jv:0,Us:30},gp:{
jv:1,Us:0},xt:{Bd:.2,md:.8},As:"relative",w:Gp.zo("div",{
As:"relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 shadow-xl",
w:Gp.zo(Ch,{})})})})]})]}),Gp.zo("section",{
As:"py-10 sm:py-16 bg-gradient-primary",w:Gp.Os("div",{
As:"container mx-auto px-4 sm:px-6 lg:px-8",w:[Gp.Os(eI.qg,{Jh:{jv:0,Us:20},gp:{
jv:1,Us:0},xt:{md:.6},As:"text-center mb-12",w:[Gp.zo("h2",{
As:"text-4xl md:text-5xl font-playfair font-bold text-white mb-4",
w:"Excellence in Numbers"}),Gp.zo("p",{
As:"text-xl text-white/80 max-w-2xl mx-auto",
w:"Our achievements speak for themselves - a testament to our commitment to educational excellence."
})]}),Gp.zo("div",{
As:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8",w:[{Yg:KE,
r:"1,200+",Ds:"Students",Bd:0},{Yg:WE,r:"95%",Ds:"Graduation Rate",Bd:.1},{
Yg:OE,r:"50+",Ds:"Programs",Bd:.2},{Yg:aE,r:"100+",Ds:"Events/Year",Bd:.3
}].Oo((e=>Gp.Os(eI.qg,{Jh:{jv:0,Wh:.8},gp:{jv:1,Wh:1},xt:{Bd:e.Bd,md:.6},
As:"text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden",
w:[Gp.zo("div",{
As:"absolute top-0 left-0 w-16 h-16 bg-white/5 rounded-full -translate-x-8 -translate-y-8"
}),Gp.zo("div",{
As:"absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-full translate-x-10 translate-y-10"
}),Gp.zo("div",{
As:"absolute top-1/2 right-0 w-4 h-12 bg-white/10 rounded-l-full -translate-y-1/2"
}),Gp.zo("div",{
As:"absolute bottom-1/4 left-0 w-4 h-8 bg-white/10 rounded-r-full"
}),Gp.zo("div",{As:"absolute top-0 right-1/4 w-8 h-2 bg-white/10 rounded-b-full"
}),Gp.Os("div",{As:"relative z-10",w:[Gp.zo("div",{
As:"w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center",
w:Gp.zo(e.Yg,{As:"w-6 h-6 sm:w-8 sm:h-8 text-white"})}),Gp.zo("div",{
As:"text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2",w:e.r
}),Gp.zo("div",{As:"text-sm sm:text-base text-white/80 font-medium",w:e.Ds})]})]
},e.Ds)))})]})})]})},q$=Bp.qo((({As:e,k:t,...n},r)=>Gp.zo("input",{k:t,
As:qo("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),
y:r,...n})))
q$.re="Input"
const Y$=()=>{const e=Ha()
return Bp.To((()=>{}),[e.rc]),Gp.zo("div",{
As:"min-h-screen flex items-center justify-center bg-background",w:Gp.zo("div",{
As:"text-center max-w-2xl mx-auto px-4",w:Gp.Os(eI.qg,{Jh:{jv:0,Us:20},Yd:{jv:1,
Us:0},xt:{md:.6},As:"space-y-8",w:[Gp.Os("div",{As:"relative",w:[Gp.zo("div",{
As:"text-8xl md:text-9xl font-playfair font-bold text-gradient opacity-20",
w:"404"}),Gp.zo("div",{As:"absolute inset-0 flex items-center justify-center",
w:Gp.zo("div",{
As:"w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center animate-bounce-slow",
w:Gp.zo(IE,{As:"w-12 h-12 text-white"})})})]}),Gp.Os("div",{As:"space-y-4",
w:[Gp.zo("h1",{As:"text-4xl md:text-5xl font-playfair font-bold",
w:"Page Not Found"}),Gp.zo("p",{
As:"text-xl text-muted-foreground max-w-lg mx-auto",
w:"Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist."
})]}),Gp.Os("div",{As:"grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12",
w:[Gp.zo(E$,{ew:1,Hg:"outline",As:"group hover-lift h-auto p-6",w:Gp.zo(uO,{
Jc:"/",w:Gp.Os("div",{As:"text-center space-y-2",w:[Gp.zo(xE,{
As:"w-8 h-8 mx-auto group-hover:text-primary transition-colors"}),Gp.zo("div",{
As:"font-medium",w:"Home"}),Gp.zo("div",{As:"text-sm text-muted-foreground",
w:"Return to homepage"})]})})}),Gp.zo(E$,{ew:1,Hg:"outline",
As:"group hover-lift h-auto p-6",w:Gp.zo(uO,{Jc:"/news",w:Gp.Os("div",{
As:"text-center space-y-2",w:[Gp.zo(sE,{
As:"w-8 h-8 mx-auto group-hover:text-primary transition-colors"}),Gp.zo("div",{
As:"font-medium",w:"News"}),Gp.zo("div",{As:"text-sm text-muted-foreground",
w:"Latest school news"})]})})}),Gp.zo(E$,{ew:1,Hg:"outline",
As:"group hover-lift h-auto p-6",w:Gp.zo(uO,{Jc:"/events",w:Gp.Os("div",{
As:"text-center space-y-2",w:[Gp.zo(aE,{
As:"w-8 h-8 mx-auto group-hover:text-primary transition-colors"}),Gp.zo("div",{
As:"font-medium",w:"Events"}),Gp.zo("div",{As:"text-sm text-muted-foreground",
w:"Upcoming events"})]})})})]}),Gp.zo(eI.qg,{Jh:{jv:0},Yd:{jv:1},xt:{Bd:.3,md:.6
},As:"pt-8",w:Gp.zo(E$,{ew:1,Bi:"lg",As:"hover-lift",w:Gp.Os(uO,{Jc:"/",
w:[Gp.zo(xE,{As:"mr-2 w-5 h-5"}),"Take Me Home"]})})})]})})})}
;(JN=Bp.qo(((e,t)=>Gp.zo(lb.Ds,{...e,y:t,m0(t){var n
t.Ve.v0("button, input, select, textarea")||(null==(n=e.m0)||n.o(e,t),!t.Mt&&t.$t>1&&t.Pt())
}})))).re="Label",XN=JN
const K$=eE("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),G$=Bp.qo((({As:e,...t},n)=>Gp.zo(XN,{
y:n,As:qo(K$(),e),...t})))
G$.re=XN.re
const J$=Bp.qo((({As:e,...t},n)=>Gp.zo("textarea",{
As:qo("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),
y:n,...t})))
J$.re="Textarea",QN="Switch"
var[X$,Q$]=Oo(QN),[Z$,eF]=X$(QN);(ZN=Bp.qo(((e,t)=>{
const{y0:n,oe:r,ye:i,be:o,yb:s,Oe:a,r:l="on",Db:c,HS:u,...d}=e,[h,f]=Bp._o(null),p=_o(t,(e=>f(e))),m=Bp.Wo(0),v=h?u||!!h.v0("form"):1,[y=0,g]=$o({
os:i,ss:o,as:c})
return Gp.Os(Z$,{Fo:n,ye:y,Oe:a,w:[Gp.zo(lb.In,{k:"button",pT:"switch",g0:y,
w0:s,OT:Lh(y),VA:a?"":void 0,Oe:a,r:l,...d,y:p,Fi:No(e.Fi,(e=>{
g((e=>!e)),v&&(m.S=e.jt(),m.S||e.kt())}))}),v&&Gp.zo(nS,{b0:h,ts:!m.S,oe:r,r:l,
ye:y,yb:s,Oe:a,HS:u,$e:{ya:"translateX(-100%)"}})]})}))).re=QN,eS="SwitchThumb",
(tS=Bp.qo(((e,t)=>{const{y0:n,...r}=e,i=eF(eS,n)
return Gp.zo(lb.J_,{OT:Lh(i.ye),VA:i.Oe?"":void 0,...r,y:t})}))).re=eS,nS=e=>{
const{b0:t,ye:n,ts:r=1,...i}=e,o=Bp.Wo(null),s=Fh(n),a=Xs(t)
return Bp.To((()=>{
const e=o.S,t=window.HTMLInputElement.u,i=Object.getOwnPropertyDescriptor(t,"checked").te
if(s!==n&&i){const t=new Event("click",{ts:r})
i.o(e,n),e.yt(t)}}),[s,n,r]),Gp.zo("input",{k:"checkbox",yT:1,be:n,...i,vs:-1,
y:o,$e:{...e.$e,...a,Wa:"absolute",Zv:"none",jv:0,Q_:0}})},rS=ZN,iS=tS
const tF=Bp.qo((({As:e,...t},n)=>Gp.zo(rS,{
As:qo("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),
...t,y:n,w:Gp.zo(iS,{
As:qo("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
})})))
if(tF.re=rS.re,oS=Bp.$o(void 0),sS=0,aS="focusScope.autoFocusOnMount",lS="focusScope.autoFocusOnUnmount",
cS={ts:0,ns:1},(uS=Bp.qo(((e,t)=>{
const{x0:n=0,k0:r=0,N0:i,S0:o,...s}=e,[a,l]=Bp._o(null),c=Ao(i),u=Ao(o),d=Bp.Wo(null),h=_o(t,(e=>l(e))),f=Bp.Wo({
_0:0,_y(){this._0=1},yz(){this._0=0}}).S
Bp.To((()=>{if(r){let e=e=>{if(f._0||!a)return
const t=e.Ve
a.qt(t)?d.S=t:Wh(d.S,{ww:1})},t=e=>{if(f._0||!a)return
const t=e.Rn
null!==t&&(a.qt(t)||Wh(d.S,{ww:1}))},n=e=>{
if(document.ge===document.we)for(const t of e)t.T0.e>0&&Wh(a)}
document.Pn("focusin",e),document.Pn("focusout",t)
const r=new MutationObserver(n)
return a&&r.Ja(a,{wx:1,bx:1}),()=>{
document.Nu("focusin",e),document.Nu("focusout",t),r.mI()}}
}),[r,a,f._0]),Bp.To((()=>{if(a){dS.$(f)
const e=document.ge
if(!a.qt(e)){const t=new CustomEvent(aS,cS)
a.Pn(aS,c),a.yt(t),t.Mt||(((e,{ww:t=0}={})=>{const n=document.ge
for(const r of e)if(Wh(r,{ww:t}),document.ge!==n)return
})(Bh(a).Ro((e=>"A"!==e.Pr)),{ww:1}),document.ge===e&&Wh(a))}return()=>{
a.Nu(aS,c),setTimeout((()=>{const t=new CustomEvent(lS,cS)
a.Pn(lS,u),a.yt(t),t.Mt||Wh(e??document.we,{ww:1}),a.Nu(lS,u),dS.Am(f)}),0)}}
}),[a,c,u,f])
const p=Bp.Mo((e=>{if(!n&&!r)return
if(f._0)return
const t="Tab"===e.g&&!e.Vn&&!e.Bn&&!e.Hn,i=document.ge
if(t&&i){const t=e.Et,[r,o]=(e=>{const t=Bh(e)
return[Vh(t,e),Vh(t.Od(),e)]})(t)
r&&o?e.LN||i!==o?e.LN&&i===r&&(e.Pt(),n&&Wh(o,{ww:1})):(e.Pt(),n&&Wh(r,{ww:1
})):i===t&&e.Pt()}}),[n,r,f._0])
return Gp.zo(lb.qg,{vs:-1,...s,y:h,PT:p})}))).re="FocusScope",dS=(()=>{let e=[]
return{$(t){const n=e[0]
t!==n&&(null==n||n._y()),e=qh(e,t),e.qn(t)},Am(t){var n
e=qh(e,t),null==(n=e[0])||n.yz()}}
})(),hS=e=>"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).Te.we,
fS=new WeakMap,
pS=new WeakMap,mS={},vS=0,yS=e=>e&&(e.Ea||yS(e.We)),gS=(e,t)=>t.Oo((t=>{
if(e.qt(t))return t
var n=yS(t)
return n&&e.qt(n)?n:null})).Ro((e=>!!e)),wS=(e,t,n,r)=>{
var i,o,s,a,l,c,u=gS(t,Array.isArray(e)?e:[e])
return mS[n]||(mS[n]=new WeakMap),i=mS[n],o=[],s=new Set,a=new Set(u),l=e=>{
e&&!s.On(e)&&(s.$(e),l(e.We))},u.d(l),(c=e=>{e&&!a.On(e)&&[].d.o(e.w,(e=>{
var t,a,l,u
if(s.On(e))c(e)
else try{
a=null!==(t=e.Is(r))&&"false"!==t,l=(fS.t(e)||0)+1,u=(i.t(e)||0)+1,fS.te(e,l),
i.te(e,u),o.M(e),1===l&&a&&pS.te(e,1),1===u&&e.J(n,"true"),a||e.J(r,"true")
}catch(XF){}}))})(t),s.$u(),vS++,()=>{o.d((e=>{var t=fS.t(e)-1,o=i.t(e)-1
fS.te(e,t),i.te(e,o),t||(pS.On(e)||e.G(r),pS.at(e)),o||e.G(n)
})),--vS||(fS=new WeakMap,fS=new WeakMap,pS=new WeakMap,mS={})}},bS=(e,t,n)=>{
var r,i
return void 0===n&&(n="data-aria-hidden"),r=Array.Go(Array.isArray(e)?e:[e]),(i=hS(e))?(r.M.c(r,Array.Go(i.Jo("[aria-live]"))),
wS(r,i,n,"aria-hidden")):()=>null},xS=function(){
return xS=Object.ml||function(e){var t,n,r,i
for(n=1,r=arguments.e;r>n;n++)for(i in t=arguments[n])({}).s.o(t,i)&&(e[i]=t[i])
return e},xS.c(this,arguments)
},"function"==typeof SuppressedError&&SuppressedError,
kS="right-scroll-bar-position",
NS="width-before-scroll-bar",SS="undefined"!=typeof window?Bp._c:Bp.To,
_S=new WeakMap,(TS=e=>{var t,n=e.C0,r=Yh(e,["sideCar"])
if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car")
if(!(t=n.Lu()))throw Error("Sidecar medium not found")
return Bp.Ui(t,xS({},r))}).E0=1,ES=(e=>{void 0===e&&(e={})
var t,n,r,i=(void 0===t&&(t=Gh),n=[],r=0,{Lu(){
if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.")
return n.e?n[n.e-1]:null},M0(e){var i=t(e,r)
return n.M(i),()=>{n=n.Ro((e=>e!==i))}},O0(e){for(r=1;n.e;){var t=n
n=[],t.d(e)}n={M(t){return e(t)},Ro(){return n}}},j0(e){var t,i,o,s
r=1,t=[],n.e&&(i=n,n=[],i.d(e),t=n),o=()=>{var n=t
t=[],n.d(e)},(s=()=>Promise.vl().R(o))(),n={M(e){t.M(e),s()},Ro(e){
return t=t.Ro(e),n}}}})
return i.Ee=xS({P0:1,A0:0},e),i})(),CS=()=>{},(MS=Bp.qo(((e,t)=>{
var n=Bp.Wo(null),r=Bp._o({D0:CS,I0:CS,R0:CS
}),i=r[0],o=r[1],s=e.$0,a=e.w,l=e.As,c=e.F0,u=e.TD,d=e.L0,h=e.C0,f=e.z0,p=e.U0,m=e.B0,v=e.ZV,y=void 0===v?"div":v,g=e.V0,w=Yh(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=h,x=(e=>{
var t,n,r=(t=t=>e.d((e=>Kh(e,t))),(n=Bp._o((()=>({r:null,Or:t,H0:{get S(){
return n.r},set S(e){var t=n.r
t!==e&&(n.r=e,n.Or(e,t))}}})))[0]).Or=t,n.H0)
return SS((()=>{var t,n,i,o=_S.t(r)
o&&(t=new Set(o),n=new Set(e),i=r.S,t.d((e=>{n.On(e)||Kh(e,null)})),n.d((e=>{
t.On(e)||Kh(e,i)}))),_S.te(r,e)}),[e]),r})([n,t]),k=xS(xS({},w),i)
return Bp.Ui(Bp.Bc,null,u&&Bp.Ui(b,{C0:ES,F0:c,L0:d,z0:f,U0:p,W0:o,B0:!!m,q0:n,
V0:g}),s?Bp.ph(Bp.fu.Ax(a),xS(xS({},k),{y:x})):Bp.Ui(y,xS({},k,{As:l,y:x}),a))
}))).b={TD:1,F0:1,U0:0},MS.pA={Y0:NS,K0:kS},OS=()=>{
if("undefined"!=typeof __webpack_nonce__)return __webpack_nonce__},jS=()=>{
var e=0,t=null
return{$(n){var r,i
0==e&&(t=document?((r=document.Ui("style")).k="text/css",(i=OS())&&r.J("nonce",i),
r):null)&&(((e,t)=>{e.QP?e.QP.ZP=t:e.Yi(document.Wi(t))})(t,n),(e=>{
(document.ch||document.getElementsByTagName("head")[0]).Yi(e)})(t)),e++},Am(){
! --e&&t&&(t.We&&t.We.Yn(t),t=null)}}},PS=()=>{var e=jS()
return(t,n)=>{Bp.To((()=>(e.$(t),()=>{e.Am()})),[t&&n])}},DS={kn:0,Sn:0,Fs:0,
OE:0},IS=e=>parseInt(e||"",10)||0,RS=e=>{
var t=window.$s(document.we),n=t["padding"===e?"Fa":"eU"],r=t["padding"===e?"za":"Xz"],i=t["padding"===e?"cz":"Qz"]
return[IS(n),IS(r),IS(i)]},$S=e=>{var t,n,r
return void 0===e&&(e="margin"),"undefined"==typeof window?DS:(t=RS(e),n=document.nn.Ua,
r=window.innerWidth,{kn:t[0],Sn:t[1],Fs:t[2],OE:Math.qu(0,r-n+t[2]-t[0])})
},FS=(AS=()=>{var e=PS()
return t=>{var n=t.G0,r=t.J0
return e(n,r),null}})(),LS="data-scroll-locked",zS=(e,t,n,r)=>{
var i=e.kn,o=e.Sn,s=e.Fs,a=e.OE
return void 0===n&&(n="margin"),"\n  .with-scroll-bars-hidden {\n   overflow: hidden ".Gr(r,";\n   padding-right: ").Gr(a,"px ").Gr(r,";\n  }\n  body[").Gr(LS,"] {\n    overflow: hidden ").Gr(r,";\n    overscroll-behavior: contain;\n    ").Gr([t&&"position: relative ".Gr(r,";"),"margin"===n&&"\n    padding-left: ".Gr(i,"px;\n    padding-top: ").Gr(o,"px;\n    padding-right: ").Gr(s,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").Gr(a,"px ").Gr(r,";\n    "),"padding"===n&&"padding-right: ".Gr(a,"px ").Gr(r,";")].Ro(Boolean).A(""),"\n  }\n  \n  .").Gr(kS," {\n    right: ").Gr(a,"px ").Gr(r,";\n  }\n  \n  .").Gr(NS," {\n    margin-right: ").Gr(a,"px ").Gr(r,";\n  }\n  \n  .").Gr(kS," .").Gr(kS," {\n    right: 0 ").Gr(r,";\n  }\n  \n  .").Gr(NS," .").Gr(NS," {\n    margin-right: 0 ").Gr(r,";\n  }\n  \n  body[").Gr(LS,"] {\n    ").Gr("--removed-body-scroll-bar-size",": ").Gr(a,"px;\n  }\n")
},US=()=>{var e=parseInt(document.we.Is(LS)||"0",10)
return isFinite(e)?e:0},BS=()=>{Bp.To((()=>(document.we.J(LS,""+(US()+1)),()=>{
var e=US()-1
e>0?document.we.J(LS,e.C()):document.we.G(LS)})),[])},VS=e=>{
var t,n=e.X0,r=e.Q0,i=e.V0,o=void 0===i?"margin":i
return BS(),t=Bp.Do((()=>$S(o)),[o]),Bp.Ui(FS,{G0:zS(t,!n,o,r?"":"!important")})
},HS=0,"undefined"!=typeof window)try{WS=Object.defineProperty({},"Dn",{t(){
return HS=1,1}}),window.Pn("test",WS,WS),window.Nu("test",WS,WS)}catch(QF){HS=0}
qS=HS?{Dn:0}:0,YS=e=>"TEXTAREA"===e.Pr,KS=(e,t)=>{
if(!(e instanceof Element))return 0
var n=window.$s(e)
return"hidden"!==n[t]&&!(n.ma===n.pa&&!YS(e)&&"visible"===n[t])
},GS=e=>KS(e,"overflowY"),JS=e=>KS(e,"overflowX"),XS=(e,t)=>{var n,r=t.Te,i=t
do{
if("undefined"!=typeof ShadowRoot&&i instanceof ShadowRoot&&(i=i.Ea),e_(e,i)&&(n=t_(e,i))[1]>n[2])return 1
i=i.We}while(i&&i!==r.we)
return 0
},QS=e=>[e._n,e.Ha,e.Ba],ZS=e=>[e.Nn,e.Va,e.Ua],e_=(e,t)=>"v"===e?GS(t):JS(t),
t_=(e,t)=>"v"===e?QS(t):ZS(t),
n_=(e,t)=>"h"===e&&"rtl"===t?-1:1,r_=(e,t,n,r,i)=>{
var o,s,a,l=n_(e,window.$s(t).Rs),c=l*r,u=n.Ve,d=t.qt(u),h=0,f=c>0,p=0,m=0
do{
s=(o=t_(e,u))[0],a=o[1]-o[2]-l*s,(s||a)&&e_(e,u)&&(p+=a,m+=s),u=u instanceof ShadowRoot?u.Ea:u.We
}while(!d&&u!==document.we||d&&(t.qt(u)||t===u))
return(!f||Math.abs(p)>=1&&i)&&(f||Math.abs(m)>=1&&i)||(h=1),h
},i_=e=>"mS"in e?[e.mS[0].$N,e.mS[0].FN]:[0,0],
o_=e=>[e.vS,e.gS],s_=e=>e&&"S"in e?e.S:e,
a_=(e,t)=>e[0]===t[0]&&e[1]===t[1],l_=e=>"\n  .block-interactivity-".Gr(e," {pointer-events: none;}\n  .allow-interactivity-").Gr(e," {pointer-events: all;}\n"),
c_=0,u_=[]
const nF=(kT=e=>{
var t,n,r,i,o,s,a,l,c=Bp.Wo([]),u=Bp.Wo([0,0]),d=Bp.Wo(),h=Bp._o(c_++)[0],f=Bp._o(AS)[0],p=Bp.Wo(e)
return Bp.To((()=>{p.S=e}),[e]),Bp.To((()=>{if(e.U0){
document.we.Py.$("block-interactivity-".Gr(h))
var t=(function(e,t,n){
if(n||2===arguments.e)for(var r,i=0,o=t.e;o>i;i++)!r&&i in t||(r||(r=[].q.o(t,0,i)),
r[i]=t[i])
return e.Gr(r||[].q.o(t))})([e.q0.S],(e.L0||[]).Oo(s_),1).Ro(Boolean)
return t.d((e=>e.Py.$("allow-interactivity-".Gr(h)))),()=>{
document.we.Py.Am("block-interactivity-".Gr(h)),
t.d((e=>e.Py.Am("allow-interactivity-".Gr(h))))}}
}),[e.U0,e.q0.S,e.L0]),t=Bp.Mo(((e,t)=>{var n,r,i,o,s,a,l,c,h
return"fS"in e&&2===e.fS.e||"wheel"===e.k&&e.Bn?!p.S.B0:(n=i_(e),r=u.S,i="vS"in e?e.vS:r[0]-n[0],
o="gS"in e?e.gS:r[1]-n[1],
a=e.Ve,l=Math.abs(i)>Math.abs(o)?"h":"v","fS"in e&&"h"===l&&"range"===a.k?0:(c=XS(l,a))?(c?s=l:(s="v"===l?"h":"v",
c=XS(l,a)),
c?(!d.S&&"mS"in e&&(i||o)&&(d.S=s),s?(h=d.S||s,r_(h,t,e,"h"===h?i:o,1)):1):0):1)
}),[]),n=Bp.Mo((e=>{var n,r,i,o=e
u_.e&&u_[u_.e-1]===f&&(n="gS"in o?o_(o):i_(o),(r=c.S.Ro((e=>e.oe===o.k&&(e.Ve===o.Ve||o.Ve===e.Z0)&&a_(e.yu,n)))[0])&&r.e1?o.ns&&o.Pt():r||((i=(p.S.L0||[]).Oo(s_).Ro(Boolean).Ro((e=>e.qt(o.Ve)))).e>0?t(o,i[0]):!p.S.z0)&&o.ns&&o.Pt())
}),[]),r=Bp.Mo(((e,t,n,r)=>{var i={oe:e,yu:t,Ve:n,e1:r,Z0:Jh(n)}
c.S.M(i),setTimeout((()=>{c.S=c.S.Ro((e=>e!==i))}),1)}),[]),i=Bp.Mo((e=>{
u.S=i_(e),d.S=void 0}),[]),o=Bp.Mo((n=>{r(n.k,o_(n),n.Ve,t(n,e.q0.S))
}),[]),s=Bp.Mo((n=>{r(n.k,i_(n),n.Ve,t(n,e.q0.S))
}),[]),Bp.To((()=>(u_.M(f),e.W0({D0:o,I0:o,R0:s
}),document.Pn("wheel",n,qS),document.Pn("touchmove",n,qS),
document.Pn("touchstart",i,qS),()=>{
u_=u_.Ro((e=>e!==f)),document.Nu("wheel",n,qS),
document.Nu("touchmove",n,qS),document.Nu("touchstart",i,qS)
})),[]),a=e.F0,l=e.U0,Bp.Ui(Bp.Bc,null,l?Bp.Ui(f,{G0:l_(h)}):null,a?Bp.Ui(VS,{
V0:e.V0}):null)},ES.M0(kT),TS);(d_=Bp.qo(((e,t)=>Bp.Ui(MS,xS({},e,{y:t,C0:nF
}))))).pA=MS.pA,
h_=[" ","Enter","ArrowUp","ArrowDown"],f_=[" ","Enter"],p_="Select"
var[rF,iF,oF]=Mo(p_),[sF,aF]=Oo(p_,[oF,kM])
m_=kM()
var[lF,cF]=sF(p_),[uF,dF]=sF(p_);(v_=e=>{
const{t1:t,w:n,xo:r,bT:i,ko:o,r:s,xe:a,Ab:l,nD:c,oe:u,n1:d,Oe:h,yb:f,HS:p}=e,m=m_(t),[v,y]=Bp._o(null),[g,w]=Bp._o(null),[b,x]=Bp._o(0),k=(e=>{
const t=Bp.Bo(oS)
return e||t||"ltr"})(c),[N=0,S]=$o({os:r,ss:i,as:o}),[_,T]=$o({os:s,ss:a,as:l
}),E=Bp.Wo(null),C=v?p||!!v.v0("form"):1,[M,O]=Bp._o(new Set),j=Array.Go(M).Oo((e=>e.f.r)).A(";")
return Gp.zo(Ox,{...m,w:Gp.Os(lF,{yb:f,Fo:t,YI:v,zI:y,r1:g,i1:w,o1:b,s1:x,
BI:Xo(),r:_,Ab:T,xo:N,ko:S,nD:k,a1:E,Oe:h,w:[Gp.zo(rF.Uo,{Fo:t,w:Gp.zo(uF,{
Fo:e.t1,l1:Bp.Mo((e=>{O((t=>new Set(t).$(e)))}),[]),c1:Bp.Mo((e=>{O((t=>{
const n=new Set(t)
return n.at(e),n}))}),[]),w:n})}),C?Gp.Os(Y_,{yT:1,yb:f,vs:-1,oe:u,n1:d,r:_,
as(e){return T(e.Ve.r)},Oe:h,HS:p,w:[void 0===_?Gp.zo("option",{r:""
}):null,Array.Go(M)]},j):null]})})
}).re=p_,y_="SelectTrigger",(g_=Bp.qo(((e,t)=>{
const{t1:n,Oe:r=0,...i}=e,o=m_(n),s=cF(y_,n),a=s.Oe||r,l=_o(t,s.zI),c=iF(n),u=Bp.Wo("touch"),[d,h,f]=Qh((e=>{
const t=c().Ro((e=>!e.Oe)),n=t.Zu((e=>e.r===s.r)),r=Zh(t,e,n)
void 0!==r&&s.Ab(r.r)})),p=e=>{a||(s.ko(1),f()),e&&(s.a1.S={zs:Math.round(e.Sp),
Us:Math.round(e._p)})}
return Gp.zo(jx,{ew:1,...o,w:Gp.zo(lb.In,{k:"button",pT:"combobox",u1:s.BI,
d1:s.xo,w0:s.yb,h1:"none",nD:s.nD,OT:s.xo?"open":"closed",Oe:a,VA:a?"":void 0,
f1:Xh(s.r)?"":void 0,...i,y:l,Fi:No(i.Fi,(e=>{e.Et.Tn(),"mouse"!==u.S&&p(e)})),
AT:No(i.AT,(e=>{u.S=e.Qd
const t=e.Ve
t.$T(e.lt)&&t.FT(e.lt),0===e.In&&0==e.Bn&&"mouse"===e.Qd&&(p(e),e.Pt())})),
PT:No(i.PT,(e=>{const t=""!==d.S
e.Bn||e.Vn||e.Hn||1!==e.g.e||h(e.g),t&&" "===e.g||h_.ie(e.g)&&(p(),e.Pt())}))})
})}))).re=y_,w_="SelectValue",(b_=Bp.qo(((e,t)=>{
const{t1:n,As:r,$e:i,w:o,Kg:s="",...a}=e,l=cF(w_,n),{s1:c}=l,u=void 0!==o,d=_o(t,l.i1)
return vb((()=>{c(u)}),[c,u]),Gp.zo(lb.J_,{...a,y:d,$e:{Zv:"none"},
w:Xh(l.r)?Gp.zo(Gp.Bc,{w:s}):o})}))).re=w_,(x_=Bp.qo(((e,t)=>{
const{t1:n,w:r,...i}=e
return Gp.zo(lb.J_,{yT:1,...i,y:t,w:r||"\u25bc"})
}))).re="SelectIcon",(k_=e=>Gp.zo(yb,{ew:1,...e
})).re="SelectPortal",N_="SelectContent",(S_=Bp.qo(((e,t)=>{
const n=cF(N_,e.t1),[r,i]=Bp._o()
if(vb((()=>{i(new DocumentFragment)}),[]),!n.xo){const t=r
return t?nb.v_(Gp.zo(hF,{Fo:e.t1,w:Gp.zo(rF.Yo,{Fo:e.t1,w:Gp.zo("div",{w:e.w})})
}),t):null}return Gp.zo(T_,{...e,y:t})}))).re=N_,__=10
var[hF,fF]=sF(N_);(T_=Bp.qo(((e,t)=>{
const{t1:n,Wa:r="item-aligned",p1:i,A_:o,D_:s,YD:a,KD:l,UM:c,GD:u,JD:d,QD:h,ZD:f,eI:p,tI:m,XD:v,...y}=e,g=cF(N_,n),[w,b]=Bp._o(null),[x,k]=Bp._o(null),N=_o(t,(e=>b(e))),[S,_]=Bp._o(null),[T,E]=Bp._o(null),C=iF(n),[M,O]=Bp._o(0),j=Bp.Wo(0)
Bp.To((()=>{if(w)return bS(w)}),[w]),Bp.To((()=>{
const e=document.Jo("[data-radix-focus-guard]")
return document.we.insertAdjacentElement("afterbegin",e[0]??Uh()),document.we.insertAdjacentElement("beforeend",e[1]??Uh()),
sS++,()=>{1===sS&&document.Jo("[data-radix-focus-guard]").d((e=>e.Am())),sS--}
}),[])
const P=Bp.Mo((e=>{const[t,...n]=C().Oo((e=>e.y.S)),[r]=n.q(-1),i=document.ge
for(const o of e){if(o===i)return
if(null==o||o.Uw({Bw:"nearest"
}),o===t&&x&&(x._n=0),o===r&&x&&(x._n=x.Ha),null==o||o.Tn(),
document.ge!==i)return}}),[C,x]),A=Bp.Mo((()=>P([S,w])),[P,S,w])
Bp.To((()=>{M&&A()}),[M,A])
const{ko:D,a1:I}=g
Bp.To((()=>{if(w){let e={zs:0,Us:0}
const t=t=>{var n,r
e={zs:Math.abs(Math.round(t.Sp)-((null==(n=I.S)?void 0:n.zs)??0)),
Us:Math.abs(Math.round(t._p)-((null==(r=I.S)?void 0:r.Us)??0))}},n=n=>{
e.zs>10||e.Us>10?w.qt(n.Ve)||D(0):n.Pt(),document.Nu("pointermove",t),I.S=null}
return null!==I.S&&(document.Pn("pointermove",t),document.Pn("pointerup",n,{
An:1,rs:1})),()=>{document.Nu("pointermove",t),document.Nu("pointerup",n,{An:1})
}}}),[w,D,I]),Bp.To((()=>{const e=()=>D(0)
return window.Pn("blur",e),window.Pn("resize",e),()=>{
window.Nu("blur",e),window.Nu("resize",e)}}),[D])
const[R,$]=Qh((e=>{
const t=C().Ro((e=>!e.Oe)),n=t.Zu((e=>e.y.S===document.ge)),r=Zh(t,e,n)
r&&setTimeout((()=>r.y.S.Tn()))})),F=Bp.Mo(((e,t,n)=>{const r=!j.S&&!n
;(void 0!==g.r&&g.r===t||r)&&(_(e),r&&(j.S=1))
}),[g.r]),L=Bp.Mo((()=>null==w?void 0:w.Tn()),[w]),z=Bp.Mo(((e,t,n)=>{
const r=!j.S&&!n;(void 0!==g.r&&g.r===t||r)&&E(e)
}),[g.r]),U="popper"===r?C_:E_,B=U===C_?{YD:a,KD:l,UM:c,GD:u,JD:d,QD:h,ZD:f,
eI:p,tI:m,XD:v}:{}
return Gp.zo(hF,{Fo:n,qw:w,rw:x,sT:k,m1:F,v1:S,y1:L,g1:z,w1:A,b1:T,Wa:r,oI:M,
x1:R,w:Gp.zo(d_,{ZV:ob,B0:1,w:Gp.zo(uS,{ew:1,k0:g.xo,N0(e){e.Pt()},S0:No(i,(e=>{
var t
null==(t=g.YI)||t.Tn({Sb:1}),e.Pt()})),w:Gp.zo(hb,{ew:1,P_:1,A_:o,D_:s,I_(e){
return e.Pt()},$_(){return g.ko(0)},w:Gp.zo(U,{pT:"listbox",ir:g.BI,
OT:g.xo?"open":"closed",nD:g.nD,k1(e){return e.Pt()},...y,...B,rI(){return O(1)
},y:N,$e:{Qi:"flex",N1:"column",kb:"none",...y.$e},PT:No(y.PT,(e=>{
const t=e.Bn||e.Vn||e.Hn
if("Tab"===e.g&&e.Pt(),t||1!==e.g.e||$(e.g),["ArrowUp","ArrowDown","Home","End"].ie(e.g)){
let t=C().Ro((e=>!e.Oe)).Oo((e=>e.y.S))
if(["ArrowUp","End"].ie(e.g)&&(t=t.q().Od()),["ArrowUp","ArrowDown"].ie(e.g)){
const n=e.Ve,r=t.Fe(n)
t=t.q(r+1)}setTimeout((()=>P(t))),e.Pt()}}))})})})})})
}))).re="SelectContentImpl",(E_=Bp.qo(((e,t)=>{
const{t1:n,rI:r,...i}=e,o=cF(N_,n),s=fF(N_,n),[a,l]=Bp._o(null),[c,u]=Bp._o(null),d=_o(t,(e=>u(e))),h=iF(n),f=Bp.Wo(0),p=Bp.Wo(1),{rw:m,v1:v,b1:y,w1:g}=s,w=Bp.Mo((()=>{
if(o.YI&&o.r1&&a&&c&&m&&v&&y){const e=o.YI.Da(),t=c.Da(),n=o.r1.Da(),i=y.Da()
if("rtl"!==o.nD){
const r=i.kn-t.kn,o=n.kn-r,s=e.kn-o,l=e.Bs+s,c=Math.qu(l,t.Bs),u=window.innerWidth-__,d=zh(o,[__,Math.qu(__,u-c)])
a.$e.kI=l+"px",a.$e.kn=d+"px"}else{
const r=t.Fs-i.Fs,o=window.innerWidth-n.Fs-r,s=window.innerWidth-e.Fs-o,l=e.Bs+s,c=Math.qu(l,t.Bs),u=window.innerWidth-__,d=zh(o,[__,Math.qu(__,u-c)])
a.$e.kI=l+"px",a.$e.Fs=d+"px"}
const s=h(),l=window.innerHeight-2*__,u=m.Ha,d=window.$s(c),p=parseInt(d.zz,10),g=parseInt(d.za,10),w=parseInt(d.Bz,10),b=p+g+u+parseInt(d.uz,10)+w,x=Math.an(5*v.Pa,b),k=window.$s(m),N=parseInt(k.za,10),S=parseInt(k.uz,10),_=e.Sn+e.Vs/2-__,T=l-_,E=v.Pa/2,C=p+g+(v.Ra+E),M=b-C
if(C>_){const e=s.e>0&&v===s[0].y.S
a.$e.Sn="0px"
const t=Math.qu(_,p+m.Ra+(e?N:0)+E)+M
a.$e.Vs=t+"px",m._n=C-_+m.Ra}else{const e=s.e>0&&v===s[s.e-1].y.S
a.$e.Ls="0px"
const t=c.Ba-m.Ra-m.Pa,n=C+Math.qu(T,E+(e?S:0)+t+w)
a.$e.Vs=n+"px"}
a.$e.Q_=__+"px 0",a.$e.S1=x+"px",a.$e.Jz=l+"px",null==r||r(),requestAnimationFrame((()=>f.S=1))
}}),[h,o.YI,o.r1,a,c,m,v,y,o.nD,r])
vb((()=>w()),[w])
const[b,x]=Bp._o()
vb((()=>{c&&x(window.$s(c).sN)}),[c])
const k=Bp.Mo((e=>{e&&1==p.S&&(w(),null==g||g(),p.S=0)}),[w,g])
return Gp.zo(pF,{Fo:n,_1:a,T1:f,E1:k,w:Gp.zo("div",{y:l,$e:{Qi:"flex",
N1:"column",Wa:"fixed",sN:b},w:Gp.zo(lb.qg,{...i,y:d,$e:{C1:"border-box",
Jz:"100%",...i.$e}})})})}))).re="SelectItemAlignedPosition",(C_=Bp.qo(((e,t)=>{
const{t1:n,UM:r="start",ZD:i=__,...o}=e,s=m_(n)
return Gp.zo(Px,{...s,...o,y:t,UM:r,ZD:i,$e:{C1:"border-box",...o.$e,
M1:"var(--radix-popper-transform-origin)",
O1:"var(--radix-popper-available-width)",
j1:"var(--radix-popper-available-height)",P1:"var(--radix-popper-anchor-width)",
A1:"var(--radix-popper-anchor-height)"}})}))).re="SelectPopperPosition"
var[pF,mF]=sF(N_,{})
M_="SelectViewport",(O_=Bp.qo(((e,t)=>{
const{t1:n,sh:r,...i}=e,o=fF(M_,n),s=mF(M_,n),a=_o(t,o.sT),l=Bp.Wo(0)
return Gp.Os(Gp.Bc,{w:[Gp.zo("style",{je:{
ze:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
},sh:r}),Gp.zo(rF.Yo,{Fo:n,w:Gp.zo(lb.qg,{D1:"",pT:"presentation",...i,y:a,$e:{
Wa:"relative",Lk:1,or:"hidden auto",...i.$e},I1:No(i.I1,(e=>{
const t=e.Et,{_1:n,T1:r}=s
if((null==r?void 0:r.S)&&n){const e=Math.abs(l.S-t._n)
if(e>0){
const r=window.innerHeight-2*__,i=parseFloat(n.$e.S1),o=parseFloat(n.$e.Vs),s=Math.qu(i,o)
if(r>s){const i=s+e,o=Math.an(r,i),a=i-o
n.$e.Vs=o+"px","0px"===n.$e.Ls&&(t._n=a>0?a:0,n.$e.R1="flex-end")}}}l.S=t._n}))
})})]})}))).re=M_,j_="SelectGroup"
var[vF,yF]=sF(j_)
Bp.qo(((e,t)=>{const{t1:n,...r}=e,i=Xo()
return Gp.zo(vF,{Fo:n,ir:i,w:Gp.zo(lb.qg,{pT:"group",$1:i,...r,y:t})})})).re=j_,
P_="SelectLabel",(A_=Bp.qo(((e,t)=>{const{t1:n,...r}=e,i=yF(P_,n)
return Gp.zo(lb.qg,{ir:i.ir,...r,y:t})}))).re=P_,D_="SelectItem"
var[gF,wF]=sF(D_);(I_=Bp.qo(((e,t)=>{
const{t1:n,r,Oe:i=0,Cb:o,...s}=e,a=cF(D_,n),l=fF(D_,n),c=a.r===r,[u,d]=Bp._o(o??""),[h,f]=Bp._o(0),p=_o(t,(e=>{
var t
return null==(t=l.m1)?void 0:t.o(l,e,r,i)})),m=Xo(),v=Bp.Wo("touch"),y=()=>{
i||(a.Ab(r),a.ko(0))}
if(""===r)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.")
return Gp.zo(gF,{Fo:n,r,Oe:i,F1:m,L1:c,z1:Bp.Mo((e=>{
d((t=>t||((null==e?void 0:e.Pe)??"").Z()))}),[]),w:Gp.zo(rF.Ko,{Fo:n,r,Oe:i,
Cb:u,w:Gp.zo(lb.qg,{pT:"option",$1:m,U1:h?"":void 0,B1:c&&h,
OT:c?"checked":"unchecked",V1:i||void 0,VA:i?"":void 0,vs:i?void 0:-1,...s,y:p,
gT:No(s.gT,(()=>f(1))),cD:No(s.cD,(()=>f(0))),Fi:No(s.Fi,(()=>{
"mouse"!==v.S&&y()})),RT:No(s.RT,(()=>{"mouse"===v.S&&y()})),AT:No(s.AT,(e=>{
v.S=e.Qd})),DT:No(s.DT,(e=>{var t
v.S=e.Qd,i?null==(t=l.y1)||t.o(l):"mouse"===v.S&&e.Et.Tn({Sb:1})})),
WI:No(s.WI,(e=>{var t
e.Et===document.ge&&(null==(t=l.y1)||t.o(l))})),PT:No(s.PT,(e=>{var t
""!==(null==(t=l.x1)?void 0:t.S)&&" "===e.g||(f_.ie(e.g)&&y()," "===e.g&&e.Pt())
}))})})})}))).re=D_,R_="SelectItemText",($_=Bp.qo(((e,t)=>{
const{t1:n,As:r,$e:i,...o}=e,s=cF(R_,n),a=fF(R_,n),l=wF(R_,n),c=dF(R_,n),[u,d]=Bp._o(null),h=_o(t,(e=>d(e)),l.z1,(e=>{
var t
return null==(t=a.g1)?void 0:t.o(a,e,l.r,l.Oe)
})),f=null==u?void 0:u.Pe,p=Bp.Do((()=>Gp.zo("option",{r:l.r,Oe:l.Oe,w:f
},l.r)),[l.Oe,l.r,f]),{l1:m,c1:v}=c
return vb((()=>(m(p),()=>v(p))),[m,v,p]),Gp.Os(Gp.Bc,{w:[Gp.zo(lb.J_,{ir:l.F1,
...o,y:h}),l.L1&&s.r1&&!s.o1?nb.v_(o.w,s.r1):null]})
}))).re=R_,F_="SelectItemIndicator",(L_=Bp.qo(((e,t)=>{const{t1:n,...r}=e
return wF(F_,n).L1?Gp.zo(lb.J_,{yT:1,...r,y:t}):null
}))).re=F_,z_="SelectScrollUpButton",(U_=Bp.qo(((e,t)=>{
const n=fF(z_,e.t1),r=mF(z_,e.t1),[i,o]=Bp._o(0),s=_o(t,r.E1)
return vb((()=>{if(n.rw&&n.oI){let e=()=>{const e=t._n>0
o(e)}
const t=n.rw
return e(),t.Pn("scroll",e),()=>t.Nu("scroll",e)}}),[n.rw,n.oI]),i?Gp.zo(H_,{
...e,y:s,H1(){const{rw:e,v1:t}=n
e&&t&&(e._n=e._n-t.Pa)}}):null
}))).re=z_,B_="SelectScrollDownButton",(V_=Bp.qo(((e,t)=>{
const n=fF(B_,e.t1),r=mF(B_,e.t1),[i,o]=Bp._o(0),s=_o(t,r.E1)
return vb((()=>{if(n.rw&&n.oI){let e=()=>{const e=t.Ha-t.Ba,n=Math.ceil(t._n)<e
o(n)}
const t=n.rw
return e(),t.Pn("scroll",e),()=>t.Nu("scroll",e)}}),[n.rw,n.oI]),i?Gp.zo(H_,{
...e,y:s,H1(){const{rw:e,v1:t}=n
e&&t&&(e._n=e._n+t.Pa)}}):null}))).re=B_,H_=Bp.qo(((e,t)=>{
const{t1:n,H1:r,...i}=e,o=fF("SelectScrollButton",n),s=Bp.Wo(null),a=iF(n),l=Bp.Mo((()=>{
null!==s.S&&(window.clearInterval(s.S),s.S=null)}),[])
return Bp.To((()=>()=>l()),[l]),vb((()=>{var e
const t=a().Zu((e=>e.y.S===document.ge))
null==(e=null==t?void 0:t.y.S)||e.Uw({Bw:"nearest"})}),[a]),Gp.zo(lb.qg,{yT:1,
...i,y:t,$e:{Bk:0,...i.$e},AT:No(i.AT,(()=>{
null===s.S&&(s.S=window.setInterval(r,50))})),DT:No(i.DT,(()=>{var e
null==(e=o.y1)||e.o(o),null===s.S&&(s.S=window.setInterval(r,50))})),
WI:No(i.WI,(()=>{l()}))})})),(W_=Bp.qo(((e,t)=>{const{t1:n,...r}=e
return Gp.zo(lb.qg,{yT:1,...r,y:t})
}))).re="SelectSeparator",q_="SelectArrow",Bp.qo(((e,t)=>{
const{t1:n,...r}=e,i=m_(n),o=cF(q_,n),s=fF(q_,n)
return o.xo&&"popper"===s.Wa?Gp.zo(Ax,{...i,...r,y:t}):null
})).re=q_,(Y_=Bp.qo(((e,t)=>{const{r:n,...r}=e,i=Bp.Wo(null),o=_o(t,i),s=Fh(n)
return Bp.To((()=>{
const e=i.S,t=window.HTMLSelectElement.u,r=Object.getOwnPropertyDescriptor(t,"value").te
if(s!==n&&r){const t=new Event("change",{ts:1})
r.o(e,n),e.yt(t)}}),[s,n]),Gp.zo(wb,{ew:1,w:Gp.zo("select",{...r,y:o,xe:n})})
}))).re="BubbleSelect",
K_=g_,G_=x_,J_=k_,X_=S_,Q_=O_,Z_=A_,eT=I_,tT=$_,nT=L_,rT=U_,iT=V_,oT=W_
const bF=v_,xF=b_,kF=Bp.qo((({As:e,w:t,...n},r)=>Gp.Os(K_,{y:r,
As:qo("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),
...n,w:[t,Gp.zo(G_,{ew:1,w:Gp.zo(cE,{As:"h-4 w-4 opacity-50"})})]})))
kF.re=K_.re
const NF=Bp.qo((({As:e,...t},n)=>Gp.zo(rT,{y:n,
As:qo("flex cursor-default items-center justify-center py-1",e),...t,
w:Gp.zo(dE,{As:"h-4 w-4"})})))
NF.re=rT.re
const SF=Bp.qo((({As:e,...t},n)=>Gp.zo(iT,{y:n,
As:qo("flex cursor-default items-center justify-center py-1",e),...t,
w:Gp.zo(cE,{As:"h-4 w-4"})})))
SF.re=iT.re
const _F=Bp.qo((({As:e,w:t,Wa:n="popper",...r},i)=>Gp.zo(J_,{w:Gp.Os(X_,{y:i,
As:qo("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),
Wa:n,...r,w:[Gp.zo(NF,{}),Gp.zo(Q_,{
As:qo("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
w:t}),Gp.zo(SF,{})]})})))
_F.re=X_.re,Bp.qo((({As:e,...t},n)=>Gp.zo(Z_,{y:n,
As:qo("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}))).re=Z_.re
const TF=Bp.qo((({As:e,w:t,...n},r)=>Gp.Os(eT,{y:r,
As:qo("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),
...n,w:[Gp.zo("span",{
As:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",w:Gp.zo(nT,{
w:Gp.zo(lE,{As:"h-4 w-4"})})}),Gp.zo(tT,{w:t})]})))
TF.re=eT.re,Bp.qo((({As:e,...t},n)=>Gp.zo(oT,{y:n,
As:qo("-mx-1 my-1 h-px bg-muted",e),...t}))).re=oT.re
const EF=6048e5
let CF={}
const MF={W1:{q1:"less than a second",Y1:"less than {{count}} seconds"},K1:{
q1:"1 second",Y1:"{{count}} seconds"},G1:"half a minute",J1:{
q1:"less than a minute",Y1:"less than {{count}} minutes"},X1:{q1:"1 minute",
Y1:"{{count}} minutes"},Q1:{q1:"about 1 hour",Y1:"about {{count}} hours"},Z1:{
q1:"1 hour",Y1:"{{count}} hours"},e2:{q1:"1 day",Y1:"{{count}} days"},t2:{
q1:"about 1 week",Y1:"about {{count}} weeks"},n2:{q1:"1 week",
Y1:"{{count}} weeks"},r2:{q1:"about 1 month",Y1:"about {{count}} months"},i2:{
q1:"1 month",Y1:"{{count}} months"},o2:{q1:"about 1 year",
Y1:"about {{count}} years"},s2:{q1:"1 year",Y1:"{{count}} years"},a2:{
q1:"over 1 year",Y1:"over {{count}} years"},l2:{q1:"almost 1 year",
Y1:"almost {{count}} years"}},OF={uw:ff({Gb:{c2:"EEEE, MMMM do, y",
u2:"MMMM do, y",d2:"MMM d, y",h2:"MM/dd/yyyy"},Kb:"full"}),uy:ff({Gb:{
c2:"h:mm:ss a zzzz",u2:"h:mm:ss a z",d2:"h:mm:ss a",h2:"h:mm a"},Kb:"full"}),
f2:ff({Gb:{c2:"{{date}} 'at' {{time}}",u2:"{{date}} 'at' {{time}}",
d2:"{{date}}, {{time}}",h2:"{{date}}, {{time}}"},Kb:"full"})},jF={
p2:"'last' eeee 'at' p",m2:"'yesterday at' p",v2:"'today at' p",
y2:"'tomorrow at' p",g2:"eeee 'at' p",Y1:"P"},PF={w2(e){const t=+e,n=t%100
if(n>20||10>n)switch(n%10){case 1:return t+"st"
case 2:return t+"nd"
case 3:return t+"rd"}return t+"th"},b2:pf({Lo:{x2:["B","A"],k2:["BC","AD"],
N2:["Before Christ","Anno Domini"]},Kb:"wide"}),S2:pf({Lo:{x2:["1","2","3","4"],
k2:["Q1","Q2","Q3","Q4"],
N2:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Kb:"wide",Qb(e){
return e-1}}),hw:pf({Lo:{x2:["J","F","M","A","M","J","J","A","S","O","N","D"],
k2:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
N2:["January","February","March","April","May","June","July","August","September","October","November","December"]
},Kb:"wide"}),fw:pf({Lo:{x2:["S","M","T","W","T","F","S"],
h2:["Su","Mo","Tu","We","Th","Fr","Sa"],
k2:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
N2:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},
Kb:"wide"}),_2:pf({Lo:{x2:{T2:"a",E2:"p",C2:"mi",M2:"n",O2:"morning",
j2:"afternoon",P2:"evening",A2:"night"},k2:{T2:"AM",E2:"PM",C2:"midnight",
M2:"noon",O2:"morning",j2:"afternoon",P2:"evening",A2:"night"},N2:{T2:"a.m.",
E2:"p.m.",C2:"midnight",M2:"noon",O2:"morning",j2:"afternoon",P2:"evening",
A2:"night"}},Kb:"wide",Jb:{x2:{T2:"a",E2:"p",C2:"mi",M2:"n",O2:"in the morning",
j2:"in the afternoon",P2:"in the evening",A2:"at night"},k2:{T2:"AM",E2:"PM",
C2:"midnight",M2:"noon",O2:"in the morning",j2:"in the afternoon",
P2:"in the evening",A2:"at night"},N2:{T2:"a.m.",E2:"p.m.",C2:"midnight",
M2:"noon",O2:"in the morning",j2:"in the afternoon",P2:"in the evening",
A2:"at night"}},Xb:"wide"})},AF={w2:(NT={D2:/^(\d+)(th|st|nd|rd)?/i,I2:/\d+/i,
rx:e=>parseInt(e,10)},(e,t={})=>{const n=e.Q(NT.D2)
if(!n)return null
const r=n[0],i=e.Q(NT.I2)
if(!i)return null
let o=NT.rx?NT.rx(i[0]):i[0]
return o=t.rx?t.rx(o):o,{r:o,ix:e.q(r.e)}}),b2:mf({Zb:{x2:/^(b|a)/i,
k2:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
N2:/^(before christ|before common era|anno domini|common era)/i},ex:"wide",tx:{
R2:[/^b/i,/^(a|c)/i]},nx:"any"}),S2:mf({Zb:{x2:/^[1234]/i,k2:/^q[1234]/i,
N2:/^[1234](th|st|nd|rd)? quarter/i},ex:"wide",tx:{R2:[/1/i,/2/i,/3/i,/4/i]},
nx:"any",rx(e){return e+1}}),hw:mf({Zb:{x2:/^[jfmasond]/i,
k2:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
N2:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i
},ex:"wide",tx:{
x2:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],
R2:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]
},nx:"any"}),fw:mf({Zb:{x2:/^[smtwf]/i,h2:/^(su|mo|tu|we|th|fr|sa)/i,
k2:/^(sun|mon|tue|wed|thu|fri|sat)/i,
N2:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ex:"wide",
tx:{x2:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],
R2:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nx:"any"}),_2:mf({Zb:{
x2:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
R2:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
},ex:"any",tx:{R2:{T2:/^a/i,E2:/^p/i,C2:/^mi/i,M2:/^no/i,O2:/morning/i,
j2:/afternoon/i,P2:/evening/i,A2:/night/i}},nx:"any"})},DF={sg:"en-US",
$2(e,t,n){let r
const i=MF[e]
return r="string"==typeof i?i:1===t?i.q1:i.Y1.E("{{count}}",t.C()),(null==n?void 0:n.F2)?n.L2&&n.L2>0?"in "+r:r+" ago":r
},sx:OF,z2(e){return jF[e]},cx:PF,Q:AF,Ee:{Rb:0,ox:1}},IF={Us(e,t){
const n=e.Gg(),r=n>0?n:1-n
return yf("yy"===t?r%100:r,t.e)},U2(e,t){const n=e.Bb()
return"M"===t?n+1+"":yf(n+1,2)},XT:(e,t)=>yf(e.Lb(),t.e),B2(e,t){
const n=1>e.Vb()/12?"am":"pm"
switch(t){case"a":case"aa":return n.W()
case"aaa":return n
case"aaaaa":return n[0]
default:return"am"===n?"a.m.":"p.m."}},rM:(e,t)=>yf(e.Vb()%12||12,t.e),
V2:(e,t)=>yf(e.Vb(),t.e),zC:(e,t)=>yf(e.Hb(),t.e),H2:(e,t)=>yf(e.Wb(),t.e),
W2(e,t){const n=t.e,r=e.qb()
return yf(Math.trunc(r*Math.pow(10,n-3)),t.e)}},RF={q2(e,t,n){
const r=e.Gg()>0?1:0
switch(t){case"G":case"GG":case"GGG":return n.b2(r,{Bs:"abbreviated"})
case"GGGGG":return n.b2(r,{Bs:"narrow"})
default:return n.b2(r,{Bs:"wide"})}},Us(e,t,n){if("yo"===t){
const t=e.Gg(),r=t>0?t:1-t
return n.w2(r,{Y2:"year"})}return IF.Us(e,t)},K2(e,t,n,r){
const i=vf(e,r),o=i>0?i:1-i
return"YY"===t?yf(o%100,2):"Yo"===t?n.w2(o,{Y2:"year"}):yf(o,t.e)},G2(e,t){
return yf(uf(e),t.e)},J2(e,t){return yf(e.Gg(),t.e)},X2(e,t,n){
const r=Math.ceil((e.Bb()+1)/3)
switch(t){case"Q":return r+""
case"QQ":return yf(r,2)
case"Qo":return n.w2(r,{Y2:"quarter"})
case"QQQ":return n.S2(r,{Bs:"abbreviated",p:"formatting"})
case"QQQQQ":return n.S2(r,{Bs:"narrow",p:"formatting"})
default:return n.S2(r,{Bs:"wide",p:"formatting"})}},Q2(e,t,n){
const r=Math.ceil((e.Bb()+1)/3)
switch(t){case"q":return r+""
case"qq":return yf(r,2)
case"qo":return n.w2(r,{Y2:"quarter"})
case"qqq":return n.S2(r,{Bs:"abbreviated",p:"standalone"})
case"qqqqq":return n.S2(r,{Bs:"narrow",p:"standalone"})
default:return n.S2(r,{Bs:"wide",p:"standalone"})}},U2(e,t,n){const r=e.Bb()
switch(t){case"M":case"MM":return IF.U2(e,t)
case"Mo":return n.w2(r+1,{Y2:"month"})
case"MMM":return n.hw(r,{Bs:"abbreviated",p:"formatting"})
case"MMMMM":return n.hw(r,{Bs:"narrow",p:"formatting"})
default:return n.hw(r,{Bs:"wide",p:"formatting"})}},Z2(e,t,n){const r=e.Bb()
switch(t){case"L":return r+1+""
case"LL":return yf(r+1,2)
case"Lo":return n.w2(r+1,{Y2:"month"})
case"LLL":return n.hw(r,{Bs:"abbreviated",p:"standalone"})
case"LLLLL":return n.hw(r,{Bs:"narrow",p:"standalone"})
default:return n.hw(r,{Bs:"wide",p:"standalone"})}},ZC(e,t,n,r){
const i=((e,t)=>{const n=of(e),r=+lf(n,t)-+((e,t)=>{var n,r,i,o
const s=af(),a=(null==t?void 0:t.ox)??(null==(r=null==(n=null==t?void 0:t.zn)?void 0:n.Ee)?void 0:r.ox)??s.ox??(null==(o=null==(i=s.zn)?void 0:i.Ee)?void 0:o.ox)??1,l=vf(e,t),c=sf(e,0)
return c.Ub(l,0,a),c.zb(0,0,0,0),lf(c,t)})(n,t)
return Math.round(r/EF)+1})(e,r)
return"wo"===t?n.w2(i,{Y2:"week"}):yf(i,t.e)},e4(e,t,n){const r=(e=>{
const t=of(e),n=+cf(t)-+(e=>{const t=uf(e),n=sf(e,0)
return n.Ub(t,0,4),n.zb(0,0,0,0),cf(n)})(t)
return Math.round(n/EF)+1})(e)
return"Io"===t?n.w2(r,{Y2:"week"}):yf(r,t.e)},XT(e,t,n){
return"do"===t?n.w2(e.Lb(),{Y2:"date"}):IF.XT(e,t)},t4(e,t,n){const r=(e=>{
const t=of(e),n=((e,t)=>{const n=df(e),r=df(t),i=+n-hf(n),o=+r-hf(r)
return Math.round((i-o)/864e5)})(t,(e=>{const t=of(e),n=sf(e,0)
return n.Ub(t.Gg(),0,1),n.zb(0,0,0,0),n})(t))
return n+1})(e)
return"Do"===t?n.w2(r,{Y2:"dayOfYear"}):yf(r,t.e)},n4(e,t,n){const r=e.$b()
switch(t){case"E":case"EE":case"EEE":return n.fw(r,{Bs:"abbreviated",
p:"formatting"})
case"EEEEE":return n.fw(r,{Bs:"narrow",p:"formatting"})
case"EEEEEE":return n.fw(r,{Bs:"short",p:"formatting"})
default:return n.fw(r,{Bs:"wide",p:"formatting"})}},r4(e,t,n,r){
const i=e.$b(),o=(i-r.Rb+8)%7||7
switch(t){case"e":return o+""
case"ee":return yf(o,2)
case"eo":return n.w2(o,{Y2:"day"})
case"eee":return n.fw(i,{Bs:"abbreviated",p:"formatting"})
case"eeeee":return n.fw(i,{Bs:"narrow",p:"formatting"})
case"eeeeee":return n.fw(i,{Bs:"short",p:"formatting"})
default:return n.fw(i,{Bs:"wide",p:"formatting"})}},i4(e,t,n,r){
const i=e.$b(),o=(i-r.Rb+8)%7||7
switch(t){case"c":return o+""
case"cc":return yf(o,t.e)
case"co":return n.w2(o,{Y2:"day"})
case"ccc":return n.fw(i,{Bs:"abbreviated",p:"standalone"})
case"ccccc":return n.fw(i,{Bs:"narrow",p:"standalone"})
case"cccccc":return n.fw(i,{Bs:"short",p:"standalone"})
default:return n.fw(i,{Bs:"wide",p:"standalone"})}},o4(e,t,n){
const r=e.$b(),i=0===r?7:r
switch(t){case"i":return i+""
case"ii":return yf(i,t.e)
case"io":return n.w2(i,{Y2:"day"})
case"iii":return n.fw(r,{Bs:"abbreviated",p:"formatting"})
case"iiiii":return n.fw(r,{Bs:"narrow",p:"formatting"})
case"iiiiii":return n.fw(r,{Bs:"short",p:"formatting"})
default:return n.fw(r,{Bs:"wide",p:"formatting"})}},B2(e,t,n){
const r=1>e.Vb()/12?"am":"pm"
switch(t){case"a":case"aa":return n._2(r,{Bs:"abbreviated",p:"formatting"})
case"aaa":return n._2(r,{Bs:"abbreviated",p:"formatting"}).Y()
case"aaaaa":return n._2(r,{Bs:"narrow",p:"formatting"})
default:return n._2(r,{Bs:"wide",p:"formatting"})}},s4(e,t,n){const r=e.Vb()
let i
switch(i=12===r?"noon":0===r?"midnight":1>r/12?"am":"pm",t){case"b":case"bb":
return n._2(i,{Bs:"abbreviated",p:"formatting"})
case"bbb":return n._2(i,{Bs:"abbreviated",p:"formatting"}).Y()
case"bbbbb":return n._2(i,{Bs:"narrow",p:"formatting"})
default:return n._2(i,{Bs:"wide",p:"formatting"})}},a4(e,t,n){const r=e.Vb()
let i
switch(i=17>r?12>r?4>r?"night":"morning":"afternoon":"evening",t){case"B":
case"BB":case"BBB":return n._2(i,{Bs:"abbreviated",p:"formatting"})
case"BBBBB":return n._2(i,{Bs:"narrow",p:"formatting"})
default:return n._2(i,{Bs:"wide",p:"formatting"})}},rM(e,t,n){if("ho"===t){
let t=e.Vb()%12
return 0===t&&(t=12),n.w2(t,{Y2:"hour"})}return IF.rM(e,t)},V2(e,t,n){
return"Ho"===t?n.w2(e.Vb(),{Y2:"hour"}):IF.V2(e,t)},l4(e,t,n){const r=e.Vb()%12
return"Ko"===t?n.w2(r,{Y2:"hour"}):yf(r,t.e)},c4(e,t,n){let r=e.Vb()
return 0===r&&(r=24),"ko"===t?n.w2(r,{Y2:"hour"}):yf(r,t.e)},zC(e,t,n){
return"mo"===t?n.w2(e.Hb(),{Y2:"minute"}):IF.zC(e,t)},H2(e,t,n){
return"so"===t?n.w2(e.Wb(),{Y2:"second"}):IF.H2(e,t)},W2(e,t){return IF.W2(e,t)
},u4(e,t){const n=e.d4()
if(0===n)return"Z"
switch(t){case"X":return wf(n)
case"XXXX":case"XX":return bf(n)
default:return bf(n,":")}},zs(e,t){const n=e.d4()
switch(t){case"x":return wf(n)
case"xxxx":case"xx":return bf(n)
default:return bf(n,":")}},h4(e,t){const n=e.d4()
switch(t){case"O":case"OO":case"OOO":return"GMT"+gf(n,":")
default:return"GMT"+bf(n,":")}},Df(e,t){const n=e.d4()
switch(t){case"z":case"zz":case"zzz":return"GMT"+gf(n,":")
default:return"GMT"+bf(n,":")}},f4(e,t){return yf(Math.trunc(e.og()/1e3),t.e)},
p4(e,t){return yf(e.og(),t.e)}},$F=(e,t)=>{switch(e){case"P":return t.uw({
Bs:"short"})
case"PP":return t.uw({Bs:"medium"})
case"PPP":return t.uw({Bs:"long"})
default:return t.uw({Bs:"full"})}},FF=(e,t)=>{switch(e){case"p":return t.uy({
Bs:"short"})
case"pp":return t.uy({Bs:"medium"})
case"ppp":return t.uy({Bs:"long"})
default:return t.uy({Bs:"full"})}},LF={Zg:FF,m4(e,t){
const n=e.Q(/(P+)(p+)?/)||[],r=n[1],i=n[2]
if(!i)return $F(e,t)
let o
switch(r){case"P":o=t.f2({Bs:"short"})
break
case"PP":o=t.f2({Bs:"medium"})
break
case"PPP":o=t.f2({Bs:"long"})
break
default:o=t.f2({Bs:"full"})}return o.E("{{date}}",$F(r,t)).E("{{time}}",FF(i,t))
}
},zF=/^D+$/,UF=/^Y+$/,BF=["D","DD","YY","YYYY"],VF=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,HF=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,WF=/^'([^]*?)'?$/,qF=/''/g,YF=/[a-zA-Z]/,KF=new ok,GF=({w:e})=>{
const{Ry:t}=Rd()
return Gp.Os("div",{As:"min-h-screen flex flex-col",w:[Gp.zo(bA,{lr:"wait",
w:t&&Gp.zo(yh,{})}),Gp.zo(mh,{}),Gp.zo(eI.v4,{Jh:{jv:0},Yd:{jv:1},xt:{md:.3},
As:"flex-1",w:e}),Gp.zo(vh,{})]})},JF=()=>Gp.zo(D$,{w:Gp.zo(rN,{w:Gp.zo(ak,{
G$:KF,w:Gp.zo(Dd,{My:"system",Oy:"riverside-school-theme",w:Gp.zo(fh,{
w:Gp.zo(Id,{w:Gp.Os($M,{w:[Gp.zo(Yo,{}),Gp.zo(GC,{}),Gp.zo(il,{w:Gp.zo(_f,{
w:Gp.zo(GF,{w:Gp.zo(bA,{lr:"wait",w:Gp.Os(tl,{w:[Gp.zo(Za,{fc:"/",
xn:Gp.zo(W$,{})}),Gp.zo(Za,{fc:"/news",xn:Gp.zo(Mh,{})}),Gp.zo(Za,{
fc:"/news/:id",xn:Gp.zo(Ph,{})}),Gp.zo(Za,{fc:"/events",xn:Gp.zo(jh,{})
}),Gp.zo(Za,{fc:"/events/:id",xn:Gp.zo(Ah,{})}),Gp.zo(Za,{fc:"/auth",
xn:Gp.zo(Dh,{})}),Gp.zo(Za,{fc:"/cms",xn:Gp.zo($h,{})}),Gp.zo(Za,{
fc:"/cms/news",xn:Gp.zo(nf,{})}),Gp.zo(Za,{fc:"/cms/events",xn:Gp.zo(Sf,{})
}),Gp.zo(Za,{fc:"*",xn:Gp.zo(Y$,{})})]})})})})})]})})})})})})})
rb(document.getElementById("root")).ae(Gp.zo(JF,{}))
