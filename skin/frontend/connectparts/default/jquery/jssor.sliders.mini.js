﻿(function(g,f,b,e,c,d,p){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.e=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},r={Wd:37,sd:39},n={wd:0,vd:1,yd:2,xd:3,se:4,re:5},z=1,v=2,w=4,y=5,j,a=new function(){var i=this,m=n.wd,j=0,s=0,B=0,fb=navigator.appName,k=navigator.userAgent;function F(){if(!m)if(fb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.vd;s=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on@*/j=f.documentMode||s}else if(fb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.yd;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.se:n.xd;j=parseFloat(k.substring(i+1,a))}if(b>=0)B=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.re;j=parseFloat(e[2])}}}function r(){F();return m==z}function I(){return r()&&(j<6||f.compatMode=="BackCompat")}function Z(){F();return m==v}function lb(){F();return m==w}function nb(){F();return m==y}function A(){return r()&&j<9}var D;function t(a){if(!D){q(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.ac(a.style[b])){D=b;return c}});D=D||"transform"}return D}function db(a){return Object.prototype.toString.call(a)}var L;function q(a,c){if(db(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function ob(){if(!L){L={};q(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){L["[object "+a+"]"]=a.toLowerCase()})}return L}function C(a){return a==e?String(a):ob()[db(a)]||"object"}function eb(b,a){setTimeout(b,a||0)}function K(b,d,c){var a=!b||b=="inherit"?"":b;q(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function ab(b,a){if(j<9)b.style.filter=a}i.Eb=r;i.dc=lb;i.Wb=nb;i.Kb=A;i.Y=function(){return j};i.bc=function(){return B};i.$Delay=eb;i.z=function(a){if(i.Yd(a))a=f.getElementById(a);return a};i.db=function(a){return a?a:g.event};i.le=function(a){a=i.db(a);return a.target||a.srcElement||f};i.Ub=function(a){a=i.db(a);var b=new h;if(a.type=="DOMMouseScroll"&&Z()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};function G(c,d,a){if(a!=p)c.style[d]=a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&g.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,e);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function Q(b,c,a,d){if(a!=p){d&&(a+="px");G(b,c,a)}else return parseFloat(G(b,c))}function l(d,a){var b=a&2,c=a?Q:G;return function(e,a){return c(e,d,a,b)}}function kb(b){if(r()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?parseFloat(a[1])/100:1}else return parseFloat(b.style.opacity||"1")}function mb(c,a,f){if(r()&&s<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=K(h,[i],d);ab(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100}i.ge=function(b,c){var a=t(b);if(a)b.style[a+"Origin"]=c};i.je=function(a,c){if(r()&&s<9||s<10&&I())a.style.zoom=c==1?"":c;else{var b=t(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=K(e,[g],f);a.style[b]=d}}};i.ie=function(a){if(!a.style[t(a)]||a.style[t(a)]=="none")a.style[t(a)]="perspective(2000px)"};i.c=function(a,c,d,b){a=i.z(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.Oc=function(a,c,d,b){a=i.z(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.Qc=function(b,a){i.c(A()?f:g,"mouseup",b,a)};i.P=function(a){a=i.db(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=d};i.p=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.hd=function(a,c){var b=f.createTextNode(c);i.Xb(a);a.appendChild(b)};i.Xb=function(a){a.innerHTML=""};i.lb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function R(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(i.B(a,b)==c)return a;if(f){var d=R(a,c,b,f);if(d)return d}}}i.n=R;function W(a,c,d){for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(d){var b=W(a,c,d);if(b)return b}}}i.cd=W;i.bd=function(b,a){return b.getElementsByTagName(a)};i.i=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.ac=function(a){return C(a)=="undefined"};i.Wc=function(a){return C(a)=="function"};i.Yd=function(a){return C(a)=="string"};i.Xc=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.h=q;i.F=function(a){return i.Zb("DIV",a)};i.Yc=function(a){return i.Zb("SPAN",a)};i.Zb=function(b,a){a=a||f;return a.createElement(b)};i.H=function(){};i.yb=function(a,b){return a.getAttribute(b)};i.B=function(a,b){return i.yb(a,b)||i.yb(a,"data-"+b)};i.id=function(b,c,a){b.setAttribute(c,a)};i.xb=function(a){return a.className};i.zb=function(b,a){b.className=a||""};i.S=function(a){return a.parentNode};i.x=function(a){i.E(a,"none")};i.o=function(a,b){i.E(a,b==d?"none":"")};i.Lc=function(b,a){b.removeAttribute(a)};i.Pc=function(){return r()&&j<10};i.Jc=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=K(g,f,"");a.fb(d,e)}};i.t=function(){return+new Date};i.r=function(b,a){b.appendChild(a)};i.kb=function(c,b,a){c.insertBefore(b,a)};i.Z=function(b,a){b.removeChild(a)};i.Nc=function(b,a){q(a,function(a){i.Z(b,a)})};i.gd=function(a){i.Nc(a,i.lb(a))};i.Gc=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(e){return d}return b==a};i.v=function(b,a){return b.cloneNode(a)};function N(b,a,c){a.onload=e;a.abort=e;b&&b(a,c)}i.O=function(d,b){if(i.Wb()&&j<11.6||!d)N(b,e);else{var a=new Image;a.onload=i.p(e,N,b,a);a.onabort=i.p(e,N,b,a,c);a.src=d}};i.kd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.h(e,function(b){a.O(b.src,c)});c()};i.zc=function(d,k,j,i){if(i)d=a.v(d,c);for(var h=a.bd(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.v(j,c);a.zb(e,a.xb(b));a.fb(e,b.style.cssText);var g=a.S(b);a.kb(g,e,b);a.Z(g,b)}return d};var E;function qb(b){var g=this,h,e,j;function f(){var c=h;if(e)c+="dn";else if(j)c+="av";a.zb(b,c)}function k(){E.push(g);e=c;f()}g.dd=function(){e=d;f()};g.yc=function(a){j=a;f()};b=i.z(b);if(!E){i.Qc(function(){var a=E;E=[];q(a,function(a){a.dd()})});E=[]}h=i.xb(b);a.c(b,"mousedown",k)}i.hb=function(a){return new qb(a)};i.qb=G;i.U=l("overflow");i.m=l("top",2);i.l=l("left",2);i.g=l("width",2);i.f=l("height",2);i.pe=l("marginLeft",2);i.ne=l("marginTop",2);i.s=l("position");i.E=l("display");i.w=l("zIndex",1);i.Tb=function(b,a,c){if(a!=p)mb(b,a,c);else return kb(b)};i.fb=function(a,b){if(b!=p)a.style.cssText=b;else return a.style.cssText};var P={$Opacity:i.Tb,$Top:i.m,$Left:i.l,Sb:i.g,Rb:i.f,V:i.s,Rf:i.E,$ZIndex:i.w},u;function J(){if(!u)u=i.i({Sf:i.ne,Tf:i.pe,$Clip:i.Jc},P);return u}i.ed=J;i.A=function(c,b){var a=J();q(b,function(d,b){a[b]&&a[b](c,d)})};new(function(){})};j=function(n,m,g,O,z,x){n=n||0;var f=this,r,o,p,y,A=0,C,M,L,D,j=0,t=0,E,k=n,i,h,q,u=[],B;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.h(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+n*b;I(c);return h}function w(w,G){var n=w;if(q&&(n>=h||n<=i))n=((n-i)%q+q)%q+i;if(!E||y||G||j!=n){var p=b.min(n,h);p=b.max(p,i);if(!E||y||G||p!=t){if(x){var d=x;if(z){var s=(p-k)/(m||1);if(g.Zc&&a.dc()&&m)s=b.round(s*m/16)/m*16;if(g.$Reverse)s=1-s;d={};for(var o in x){var R=M[o]||1,J=L[o]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=C[o]||C.ib,I=Q(l),r,K=z[o],F=x[o];if(a.Xc(F))r=K+(F-K)*I;else{r=a.i({D:{}},z[o]);a.h(F.D,function(c,b){var a=c*I;r.D[b]=a;r[b]+=a})}d[o]=r}}if(z.$Zoom);if(x.$Clip&&g.$Move){var v=d.$Clip.D,D=(v.$Top||0)+(v.$Bottom||0),A=(v.$Left||0)+(v.$Right||0);d.$Left=(d.$Left||0)+A;d.$Top=(d.$Top||0)+D;d.$Clip.$Left-=A;d.$Clip.$Right-=A;d.$Clip.$Top-=D;d.$Clip.$Bottom-=D}if(d.$Clip&&a.Pc()&&!d.$Clip.$Top&&!d.$Clip.$Left&&d.$Clip.$Right==g.Pb&&d.$Clip.$Bottom==g.Mb)d.$Clip=e;a.h(d,function(b,a){B[a]&&B[a](O,b)})}f.Gb(t-k,p-k)}t=p;a.h(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.C(w,G)});var P=j,N=w;j=n;E=c;f.mb(P,N)}}function F(a,c){c&&a.ec(h,1);h=b.max(h,a.X());u.push(a)}function H(){if(r){var d=a.t(),e=b.min(d-A,a.Wb()?80:20),c=j+e*p;A=d;if(c*p>=o*p)c=o;w(c);if(!y&&c*p>=o*p)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!r){r=c;y=g;D=e;d=b.max(d,i);d=b.min(d,h);o=d;p=o<j?-1:1;f.ic();A=a.t();H()}}function J(a){if(r){y=r=D=d;f.hc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.uc=function(b,a,c){v(b,a,c)};f.N=function(){J()};f.fd=function(a){v(a)};f.G=function(){return j};f.tc=function(){return o};f.gb=function(){return t};f.C=w;f.vc=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return r};f.Sc=function(a){q=a};f.ec=N;f.$Shift=I;f.wb=function(a){F(a,0)};f.vb=function(a){F(a,1)};f.X=function(){return h};f.mb=a.H;f.ic=a.H;f.hc=a.H;f.Gb=a.H;f.rb=a.t();g=a.i({$Interval:16},g);q=g.rc;B=a.i({},a.ed(),g.pc);i=k=n;h=n+m;var M=g.$Round||{},L=g.$During||{};C=a.i({ib:a.Wc(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var s;new function(){;function n(o,dc){var i=this;function yc(){var a=this;j.call(a,-1e8,2e8);a.ke=function(){var c=a.gb(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{y:f,ae:d,V:e}};a.mb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Qb(e,c);i.e(n.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function xc(){var b=this;j.call(b,0,0,{rc:s});a.h(C,function(a){T&1&&a.Sc(s);b.vb(a);a.$Shift(hb/Yb)})}function wc(){var a=this,b=Pb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,pc:{V:Wb},rc:s},b,{V:1},{V:-1});a.nb=b}function lc(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.ic=function(){Q=c;V=e;i.e(n.$EVT_SWIPE_START,u(y.G()),y.G())};a.hc=function(){Q=d;l=d;var a=y.ke();i.e(n.$EVT_SWIPE_END,u(y.G()),y.G());!a.V&&Ac(a.ae,p)};a.mb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=k.$SlideEasing(c/h)*(g-f)+f}y.C(a)};a.ob=function(b,d,c,e){f=b;g=d;h=c;y.C(b);a.C(0);a.uc(c,e)};a.we=function(d){l=c;b=d;a.$Play(d,e,c)};a.xe=function(a){b=a};y=new yc;y.wb(o);y.wb(m)}function mc(){var c=this,b=Vb();a.w(b,0);c.$Elmt=b;c.eb=function(){a.x(b);a.Xb(b)}}function vc(q,o){var f=this,t,w,K,y,g,z=[],T,r,X,I,P,F,l,v,h;j.call(f,-x,x+1,{});function E(a){w&&w.Ab();t&&t.Ab();W(q,a);F=c;t=new M.$Class(q,M,1);w=new M.$Class(q,M);w.vc();t.vc()}function Z(){t.rb<M.rb&&E()}function L(o,q,m){if(!I){I=c;if(g&&m){var e=m.width,b=m.height,l=e,j=b;if(e&&b&&k.$FillMode){if(k.$FillMode&3&&(!(k.$FillMode&4)||e>J||b>H)){var h=d,p=J/H*b/e;if(k.$FillMode&1)h=p>1;else if(k.$FillMode&2)h=p<1;l=h?e*H/b:J;j=h?H:b*J/e}a.g(g,l);a.f(g,j);a.m(g,(H-j)/2);a.l(g,(J-l)/2)}a.s(g,"absolute");i.e(n.$EVT_LOAD_END,bc)}}a.x(q);o&&o(f)}function Y(b,c,d,e){if(e==V&&p==o&&R)if(!zc){var a=u(b);A.he(a,o,c,f,d);c.Cd();ab.ec(a,1);ab.C(a);B.ob(b,b,0)}}function cb(b){if(b==V&&p==o){if(!l){var a=e;if(A)if(A.y==o)a=A.me();else A.eb();Z();l=new tc(o,a,f.Dd(),f.Ad());l.Vb(h)}!l.$IsPlaying()&&l.ub()}}function Q(d,c){if(d==o){if(d!=c)C[c]&&C[c].Bd();h&&h.$Enable();var j=V=a.t();f.O(a.p(e,cb,j))}else{var i=b.abs(o-d),g=x+k.$LazyLoading;(!P||i<=g||s-i<=g)&&f.O()}}function fb(){if(p==o&&l){l.N();h&&h.$Quit();h&&h.$Disable();l.Ec()}}function gb(){p==o&&l&&l.N()}function O(b){if(U)a.P(b);else i.e(n.$EVT_CLICK,o,b)}function N(){h=v.pInstance;l&&l.Vb(h)}f.O=function(d,b){b=b||y;if(z.length&&!I){a.o(b);if(!X){X=c;i.e(n.$EVT_LOAD_START);a.h(z,function(b){if(!b.src){b.src=a.B(b,"src2");a.E(b,b["display-origin"])}})}a.kd(z,g,a.p(e,L,d,b))}else L(d,b)};f.pd=function(){if(A){var b=A.Tc(s);if(b){var f=V=a.t(),c=o+1*Ub,d=C[u(c)];return d.O(a.p(e,Y,c,d,b,f),y)}}bb(p+k.$AutoPlaySteps*Ub)};f.tb=function(){Q(o,o)};f.Bd=function(){h&&h.$Quit();h&&h.$Disable();f.Cc();l&&l.qd();l=e;E()};f.Cd=function(){a.x(q)};f.Cc=function(){a.o(q)};f.Sd=function(){h&&h.$Enable()};function W(b,f,e){if(b["jssor-slider"]||a.yb(b,"u")=="thumb")return;e=e||0;if(!F){if(b.tagName=="IMG"){z.push(b);if(!b.src){P=c;b["display-origin"]=a.E(b);a.x(b)}}a.Kb()&&a.w(b,(a.w(b)||0)+1);if(k.$HWA&&a.bc()>0)(!G||a.bc()<534||!eb)&&a.ie(b)}var h=a.lb(b);a.h(h,function(h){var j=a.B(h,"u");if(j=="player"&&!v){v=h;if(v.pInstance)N();else a.c(v,"dataavailable",N)}if(j=="caption"){if(!a.Eb()&&!f){var i=a.v(h,c);a.kb(b,i,h);a.Z(b,h);h=i;f=c}}else if(!F&&!e&&!g&&a.B(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){T=g;a.A(T,S);r=a.v(g,d);a.c(r,"click",O);a.A(r,S);a.E(r,"block");a.Tb(r,0);a.qb(r,"backgroundColor","#000");g=a.cd(g,"IMG")}g.border=0;a.A(g,S)}}W(h,f,e+1)})}f.Gb=function(c,b){var a=x-b;Wb(K,a)};f.Dd=function(){return t};f.Ad=function(){return w};f.y=o;m.call(f);var D=a.n(q,"thumb");if(D){f.Td=a.v(D,c);a.Lc(D,"id");a.x(D)}a.o(q);y=a.v(db,c);a.w(y,1e3);a.c(q,"click",O);E(c);f.cc=g;f.Dc=r;f.nb=K=q;a.r(K,y);i.$On(203,Q);i.$On(22,gb);i.$On(24,fb)}function tc(g,r,v,u){var b=this,m=0,x=0,o,h,e,f,l,s,w,t,q=C[g];j.call(b,0,0);function y(){a.gd(N);cc&&l&&q.Dc&&a.r(N,q.Dc);a.o(N,l||!q.cc)}function z(){if(s){s=d;i.e(n.$EVT_ROLLBACK_END,g,e,m,h,e,f);b.C(h)}b.ub()}function B(a){t=a;b.N();b.ub()}b.ub=function(){var a=b.gb();if(!I&&!Q&&!t&&p==g){if(!a){if(o&&!l){l=c;b.Ec(c);i.e(n.$EVT_SLIDESHOW_START,g,m,x,o,f)}y()}var d,k=n.$EVT_STATE_CHANGE;if(a!=f)if(a==e)d=f;else if(a==h)d=e;else if(!a)d=h;else if(a>e){s=c;d=e;k=n.$EVT_ROLLBACK_START}else d=b.tc();i.e(k,g,a,m,h,e,f);var j=R&&(!Sb||Z);if(a==f)j&&q.pd();else(j||a!=e)&&b.uc(d,z)}};b.qd=function(){A&&A.y==g&&A.eb();var a=b.gb();a<f&&i.e(n.$EVT_STATE_CHANGE,g,-a-1,m,h,e,f)};b.Ec=function(b){r&&a.U(jb,b&&r.Yb.$Outside?"":"hidden")};b.Gb=function(b,a){if(l&&a>=o){l=d;y();q.Cc();A.eb();i.e(n.$EVT_SLIDESHOW_END,g,m,x,o,f)}i.e(n.$EVT_PROGRESS_CHANGE,g,a,m,h,e,f)};b.Vb=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.ad,B)}};r&&b.vb(r);o=b.X();b.X();b.vb(v);h=v.X();e=h+k.$AutoPlayInterval;u.$Shift(e);b.wb(u);f=b.X()}function Wb(b,f){var e=w>0?w:ib,c=zb*f*(e&1),d=Ab*f*(e>>1&1);if(a.Eb()&&a.Y()>=10&&a.Y()<11)b.style.msTransform="translate("+c+"px, "+d+"px)";else if(a.dc()&&a.Y()>=30&&a.Y()<34){b.style.WebkitTransition="transform 0s";b.style.WebkitTransform="translate3d("+c+"px, "+d+"px, 0px) perspective(2000px)"}else{a.l(b,c);a.m(b,d)}}function rc(c){U=0;var b=a.le(c).tagName;!K&&b!="INPUT"&&b!="TEXTAREA"&&pc()&&qc(c)}function qc(b){pb=Q;I=c;yb=d;V=e;a.c(f,nb,Zb);a.t();Hb=B.tc();B.N();if(!pb)w=0;if(G){var h=b.touches[0];tb=h.clientX;ub=h.clientY}else{var g=a.Ub(b);tb=g.x;ub=g.y;a.P(b)}E=0;cb=0;gb=0;D=y.G();i.e(n.$EVT_DRAG_START,u(D),D,b)}function Zb(e){if(I&&(!a.Kb()||e.button)){var f;if(G){var m=e.touches;if(m&&m.length>0)f=new h(m[0].clientX,m[0].clientY)}else f=a.Ub(e);if(f){var k=f.x-tb,l=f.y-ub;if(b.floor(D)!=D)w=w||ib&K;if((k||l)&&!w){if(K==3)if(b.abs(l)>b.abs(k))w=2;else w=1;else w=K;if(G&&w==1&&b.abs(l)-b.abs(k)>3)yb=c}if(w){var d=l,j=Ab;if(w==1){d=k;j=zb}if(!(T&1)){if(d>0){var g=j*p,i=d-g;if(i>0)d=g+b.sqrt(i)*5}if(d<0){var g=j*(s-x-p),i=-d-g;if(i>0)d=-g-b.sqrt(i)*5}}if(E-cb<-2)gb=1;else if(E-cb>2)gb=0;cb=E;E=d;rb=D-E/j/(mb||1);if(E&&w&&!yb){a.P(e);if(!Q)B.we(rb);else B.xe(rb)}else a.Kb()&&a.P(e)}}}else Db(e)}function Db(h){nc();if(I){I=d;a.t();a.Oc(f,nb,Zb);U=E;U&&a.P(h);B.N();var e=y.G();i.e(n.$EVT_DRAG_END,u(e),e,u(D),D,h);var c=b.floor(D);if(b.abs(E)>=k.$MinDragOffsetToSlide){c=b.floor(e);c+=gb}if(!(T&1))c=b.min(s-x,b.max(c,0));var g=b.abs(c-e);g=1-b.pow(1-g,5);if(!U&&pb)B.fd(Hb);else if(e==c){sb.Sd();sb.tb()}else B.ob(e,c,g*Rb)}}function kc(a){C[p];p=u(a);sb=C[p];Qb(a);return p}function Ac(a,b){w=0;kc(a);i.e(n.$EVT_PARK,u(a),b)}function Qb(b,c){wb=b;a.h(P,function(a){a.sb(u(b),b,c)})}function pc(){var b=n.Ac||0,a=O;if(G)a&1&&(a&=1);n.Ac|=a;return K=a&~b}function nc(){if(K){n.Ac&=~O;K=0}}function Vb(){var b=a.F();a.A(b,S);a.s(b,"absolute");return b}function u(a){return(a%s+s)%s}function hc(a,c){if(c)if(!T){a=b.min(b.max(a+wb,0),s-1);c=d}else if(T&2){a=u(a+wb);c=d}bb(a,k.$SlideDuration,c)}function xb(){a.h(P,function(a){a.Ob(a.pb.$ChanceToShow>Z)})}function fc(b){b=a.db(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.Gc(o,c)||a.Gc(o,d))return;Z=1;xb();C[p].tb()}function ec(){Z=0;xb()}function gc(){S={Sb:J,Rb:H,$Top:0,$Left:0};a.h(X,function(b){a.A(b,S);a.s(b,"absolute");a.U(b,"hidden");a.x(b)});a.A(db,S)}function kb(b,a){bb(b,a,c)}function bb(h,g,l){if(Nb&&(!I||k.$NaviQuitDrag)){Q=c;I=d;B.N();if(a.ac(g))g=Rb;var f=Eb.gb(),e=h;if(l){e=f+h;if(h>0)e=b.ceil(e);else e=b.floor(e)}if(!(T&1)){e=u(e);e=b.max(0,b.min(e,s-x))}var j=(e-f)%s;e=f+j;var i=f==e?0:g*b.abs(j);i=b.min(i,g*x*1.5);B.ob(f,e,i||1)}}i.$PlayTo=bb;i.$GoTo=function(a){bb(a,1)};i.$Next=function(){kb(1)};i.$Prev=function(){kb(-1)};i.$Pause=function(){R=d};i.$Play=function(){if(!R){R=c;C[p]&&C[p].tb()}};i.$SetSlideshowTransitions=function(a){k.$SlideshowOptions.$Transitions=a};i.$SetCaptionTransitions=function(b){M.rb=a.t()};i.$SlidesCount=function(){return X.length};i.$CurrentIndex=function(){return p};i.$IsAutoPlaying=function(){return R};i.$IsDragging=function(){return I};i.$IsSliding=function(){return Q};i.$IsMouseOver=function(){return!Z};i.$LastDragSucceded=function(){return U};i.$GetOriginalWidth=function(){return a.g(v||o)};i.$GetOriginalHeight=function(){return a.f(v||o)};i.$GetScaleWidth=function(){return a.g(o)};i.$GetScaleHeight=function(){return a.f(o)};i.$SetScaleWidth=function(c){if(!v){var b=a.F(f);a.fb(b,a.fb(o));a.zb(b,a.xb(o));a.s(b,"relative");a.m(b,0);a.l(b,0);a.U(b,"visible");v=a.F(f);a.s(v,"absolute");a.m(v,0);a.l(v,0);a.g(v,a.g(o));a.f(v,a.f(o));a.ge(v,"0 0");a.r(v,b);var g=a.lb(o);a.r(o,v);a.qb(o,"backgroundImage","");var e={navigator:Y&&Y.$Scale==d,arrowleft:L&&L.$Scale==d,arrowright:L&&L.$Scale==d,thumbnavigator:F&&F.$Scale==d,thumbwrapper:F&&F.$Scale==d};a.h(g,function(c){a.r(e[a.B(c,"u")]?o:b,c)});a.o(b);a.o(v)}mb=c/a.g(v);a.je(v,mb);a.g(o,c);a.f(o,mb*a.f(v));a.h(P,function(a){a.Fb()})};i.Hc=function(a){var d=b.ceil(u(hb/Yb)),c=u(a-p+d);if(c>x){if(a-p>s/2)a-=s;else if(a-p<=-s/2)a+=s}else a=p+c-d;return a};m.call(this);i.$Elmt=o=a.z(o);var k=a.i({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:d,$Loop:1,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},dc),ib=k.$PlayOrientation&3,Ub=(k.$PlayOrientation&4)/-4||1,fb=k.$SlideshowOptions,M=a.i({$Class:t},k.Le),Y=k.$BulletNavigatorOptions,L=k.$ArrowNavigatorOptions,F=k.$ThumbnailNavigatorOptions,W=k.$UISearchMode,v,z=a.n(o,"slides",e,W),db=a.n(o,"loading",e,W)||a.F(f),Jb=a.n(o,"navigator",e,W),ac=a.n(o,"arrowleft",e,W),Xb=a.n(o,"arrowright",e,W),Gb=a.n(o,"thumbnavigator",e,W),jc=a.g(z),ic=a.f(z),S,X=[],sc=a.lb(z);a.h(sc,function(b){b.tagName=="DIV"&&!a.B(b,"u")&&X.push(b)});var p=-1,wb,sb,s=X.length,J=k.$SlideWidth||jc,H=k.$SlideHeight||ic,Tb=k.$SlideSpacing,zb=J+Tb,Ab=H+Tb,Yb=ib&1?zb:Ab,x=b.min(k.$DisplayPieces,s),jb,w,K,yb,G,P=[],Mb,Ob,Lb,cc,zc,R,Sb=k.$PauseOnHover,Rb=k.$SlideDuration,qb,eb,hb,Nb=x<s,T=Nb?k.$Loop:0,O,U,Z=1,Q,I,V,tb=0,ub=0,E,cb,gb,Eb,y,ab,B,Pb=new mc,mb;R=k.$AutoPlay;i.pb=dc;gc();o["jssor-slider"]=c;a.w(z,a.w(z)||0);a.s(z,"absolute");jb=a.v(z);a.kb(a.S(z),jb,z);if(fb){cc=fb.$ShowLink;qb=fb.$Class;eb=x==1&&s>1&&qb&&(!a.Eb()||a.Y()>=8)}hb=eb||x>=s||!(T&1)?0:k.$ParkingPosition;O=(x>1||hb?ib:-1)&k.$DragOrientation;var vb=z,C=[],A,N,Cb="mousedown",nb="mousemove",Fb="mouseup",lb,D,pb,Hb,rb;if(g.navigator.msPointerEnabled){Cb="MSPointerDown";nb="MSPointerMove";Fb="MSPointerUp";lb="MSPointerCancel";if(O){var Bb="none";if(O==1)Bb="pan-y";else if(O==2)Bb="pan-x";a.id(vb.style,"-ms-touch-action",Bb)}}else if("ontouchstart"in g||"createTouch"in f){G=c;Cb="touchstart";nb="touchmove";Fb="touchend";lb="touchcancel"}ab=new wc;if(eb)A=new qb(Pb,J,H,fb,G);a.r(jb,ab.nb);a.U(z,"hidden");N=Vb();a.qb(N,"backgroundColor","#000");a.Tb(N,0);a.kb(vb,N,vb.firstChild);for(var ob=0;ob<X.length;ob++){var uc=X[ob],bc=new vc(uc,ob);C.push(bc)}a.x(db);Eb=new xc;B=new lc(Eb,ab);if(O){a.c(z,Cb,rc);a.c(f,Fb,Db);lb&&a.c(f,lb,Db)}Sb&=G?2:1;if(Jb&&Y){Mb=new Y.$Class(Jb,Y);P.push(Mb)}if(L&&ac&&Xb){Ob=new L.$Class(ac,Xb,L);P.push(Ob)}if(Gb&&F){F.$StartIndex=k.$StartIndex;Lb=new F.$Class(Gb,F);P.push(Lb)}a.h(P,function(a){a.Cb(s,C,db);a.$On(q.bb,hc)});i.$SetScaleWidth(i.$GetOriginalWidth());a.c(o,"mouseout",fc);a.c(o,"mouseover",ec);xb();k.$ArrowKeyNavigation&&a.c(f,"keydown",function(a){if(a.keyCode==r.Wd)kb(-1);else a.keyCode==r.sd&&kb(1)});B.ob(k.$StartIndex,k.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=s=n};var q={bb:1};g.$JssorBulletNavigator$=function(f,D){var h=this;m.call(h);f=a.z(f);var t,u,s,r,l=0,g,n,k,y,z,j,i,p,o,C=[],A=[];function x(a){a!=-1&&A[a].yc(a==l)}function v(a){h.e(q.bb,a*n)}h.$Elmt=f;h.sb=function(a){if(a!=r){var d=l,c=b.floor(a/n);l=c;r=a;x(d);x(c)}};h.Ob=function(b){a.o(f,b)};var B;h.Fb=function(){if(!B||g.$Scale==d){g.$AutoCenter&1&&a.l(f,(a.g(a.S(f))-u)/2);g.$AutoCenter&2&&a.m(f,(a.f(a.S(f))-s)/2);B=c}};var w;h.Cb=function(D){if(!w){t=b.ceil(D/n);l=0;var q=p+y,r=o+z,m=b.ceil(t/k)-1;u=p+q*(!j?m:k-1);s=o+r*(j?m:k-1);a.g(f,u);a.f(f,s);for(var d=0;d<t;d++){var B=a.Yc();a.hd(B,d+1);var h=a.zc(i,"NumberTemplate",B,c);a.s(h,"absolute");var x=d%(m+1);a.l(h,!j?q*x:d%k*q);a.m(h,j?r*x:b.floor(d/(m+1))*r);a.r(f,h);C[d]=h;g.$ActionMode&1&&a.c(h,"click",a.p(e,v,d));g.$ActionMode&2&&a.c(h,"mouseover",a.p(e,v,d));A[d]=a.hb(h)}w=c}};h.pb=g=a.i({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},D);i=a.n(f,"prototype");p=a.g(i);o=a.f(i);a.Z(f,i);n=g.$Steps||1;k=g.$Lanes||1;y=g.$SpacingX;z=g.$SpacingY;j=g.$Orientation-1};g.$JssorArrowNavigator$=function(b,g,s){var f=this;m.call(f);var h,j,p=a.S(b),o=a.g(b),l=a.f(b);function k(a){f.e(q.bb,a,c)}f.sb=function(b,a,c){if(c);};f.Ob=function(c){a.o(b,c);a.o(g,c)};var r;f.Fb=function(){if(!r||h.$Scale==d){var f=a.g(p),e=a.f(p);if(h.$AutoCenter&1){a.l(b,(f-o)/2);a.l(g,(f-o)/2)}if(h.$AutoCenter&2){a.m(b,(e-l)/2);a.m(g,(e-l)/2)}r=c}};var n;f.Cb=function(d){if(!n){a.c(b,"click",a.p(e,k,-j));a.c(g,"click",a.p(e,k,j));a.hb(b);a.hb(g);n=c}};f.pb=h=a.i({$Steps:1},s);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,e,u=[],y,w,f,n,o,t,r,k,p,g,j;m.call(h);i=a.z(i);function z(n,d){var g=this,b,m,k;function o(){m.yc(l==d)}function i(){if(!p.$LastDragSucceded()){var a=(f-d%f)%f,b=p.Hc((d+a)/f),c=b*f-a;h.e(q.bb,c)}}g.y=d;g.sc=o;k=n.Td||n.cc||a.F();g.nb=b=a.zc(j,"ThumbnailTemplate",k,c);m=a.hb(b);e.$ActionMode&1&&a.c(b,"click",i);e.$ActionMode&2&&a.c(b,"mouseover",i)}h.sb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].sc();u[c].sc();!e&&p.$PlayTo(p.Hc(b.floor(d/f)))};h.Ob=function(b){a.o(i,b)};h.Fb=a.H;var v;h.Cb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=e.$Orientation&1,q=t+(t+n)*(f-1)*(1-h),m=r+(r+o)*(f-1)*h,C=q+(q+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.s(g,"absolute");a.U(g,"hidden");e.$AutoCenter&1&&a.l(g,(y-C)/2);e.$AutoCenter&2&&a.m(g,(w-A)/2);a.g(g,C);a.f(g,A);var j=[];a.h(D,function(l,e){var i=new z(l,e),d=i.nb,c=b.floor(e/f),k=e%f;a.l(d,(t+n)*k*(1-h));a.m(d,(r+o)*k*h);if(!j[c]){j[c]=a.F();a.r(g,j[c])}a.r(j[c],d);u.push(i)});var E=a.i({$AutoPlay:d,$NaviQuitDrag:d,$SlideWidth:q,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$PlayOrientation:e.$Orientation,$DragOrientation:e.$DisableDrag?0:e.$Orientation},e);p=new s(i,E);v=c}};h.pb=e=a.i({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.g(i);w=a.f(i);g=a.n(i,"slides");j=a.n(g,"prototype");t=a.g(j);r=a.f(j);a.Z(g,j);f=e.$Lanes||1;n=e.$SpacingX;o=e.$SpacingY;k=e.$DisplayPieces};function t(){j.call(this,0,0);this.Ab=a.H}})(window,document,Math,null,true,false)