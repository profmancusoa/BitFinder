var le=a=>{throw TypeError(a)};var J=(a,e,t)=>e.has(a)||le("Cannot "+t);var v=(a,e,t)=>(J(a,e,"read from private field"),t?t.call(a):e.get(a)),E=(a,e,t)=>e.has(a)?le("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),y=(a,e,t,s)=>(J(a,e,"write to private field"),s?s.call(a,t):e.set(a,t),t),S=(a,e,t)=>(J(a,e,"access private method"),t);import{s as x,n as k,o as ge}from"../chunks/scheduler.BvLojk_z.js";import{S as z,i as B,e as _,b as M,c as g,d as b,f as q,g as d,n as $,j as A,k as p,l as L,o as ce,s as U,p as F,A as $e,h as G,m as be,w as R,x as X,y as H,t as I,u as he,q as fe,a as C,B as de,z as O}from"../chunks/index.CN96sRgq.js";/* empty css                        */import"../chunks/entry.Cma_dzas.js";function j(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Se(a){let e,t,s,l=String(a[0]).padStart(2,"0")+"",i,r,n=String(a[1]).padStart(2,"0")+"",o;return{c(){e=_("div"),t=_("div"),s=_("span"),i=M(l),r=M(":"),o=M(n),this.h()},l(u){e=g(u,"DIV",{class:!0});var f=b(e);t=g(f,"DIV",{class:!0});var c=b(t);s=g(c,"SPAN",{class:!0});var h=b(s);i=q(h,l),r=q(h,":"),o=q(h,n),h.forEach(d),c.forEach(d),f.forEach(d),this.h()},h(){$(s,"class","text-size svelte-y70idt"),$(t,"class","container svelte-y70idt"),$(e,"class","spacer svelte-y70idt")},m(u,f){A(u,e,f),p(e,t),p(t,s),p(s,i),p(s,r),p(s,o)},p(u,[f]){f&1&&l!==(l=String(u[0]).padStart(2,"0")+"")&&L(i,l),f&2&&n!==(n=String(u[1]).padStart(2,"0")+"")&&L(o,n)},i:k,o:k,d(u){u&&d(e)}}}function we(a,e,t){let s=0,l=0;return ge(()=>{let i=setInterval(()=>{t(1,l++,l),l==60&&(t(1,l=0),t(0,s++,s))},1e3);return()=>{clearInterval(i)}}),[s,l]}class Ve extends z{constructor(e){super(),B(this,e,we,Se,x,{})}}const Ae="fix",ne="change";var K,Y,D,P;class Q{constructor(e,t,s){E(this,K,0);E(this,Y,0);E(this,D,2);E(this,P,ne);y(this,D,s),y(this,K,e),y(this,Y,t)}get value(){return v(this,D)}set value(e){y(this,D,e)}get status(){return v(this,P)}set status(e){y(this,P,e)}static get STATUS_FIX(){return Ae}static get STATUS_CHANGE(){return ne}}K=new WeakMap,Y=new WeakMap,D=new WeakMap,P=new WeakMap;function Ie(a){let e,t,s=(a[0].value==2?"":a[0].value)+"",l,i,r;return{c(){e=_("div"),t=_("span"),l=M(s),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=b(e);t=g(o,"SPAN",{class:!0});var u=b(t);l=q(u,s),u.forEach(d),o.forEach(d),this.h()},h(){$(t,"class","svelte-76p5uh"),$(e,"class","cell text-size svelte-76p5uh")},m(n,o){A(n,e,o),p(e,t),p(t,l),i||(r=ce(e,"click",a[1]),i=!0)},p(n,[o]){o&1&&s!==(s=(n[0].value==2?"":n[0].value)+"")&&L(l,s)},i:k,o:k,d(n){n&&d(e),i=!1,r()}}}function Ee(a,e,t){let{cell:s}=e;const l=()=>{s.status!=Q.STATUS_FIX&&t(0,s.value=t(0,++s.value,s)%2,s)};return a.$$set=i=>{"cell"in i&&t(0,s=i.cell)},[s,l]}class ye extends z{constructor(e){super(),B(this,e,Ee,Ie,x,{cell:0})}}function ae(a){let e,t,s=a[0]?"thumb_up":"thumb_down",l,i;return{c(){e=_("div"),t=_("span"),l=M(s),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);t=g(n,"SPAN",{class:!0});var o=b(t);l=q(o,s),o.forEach(d),n.forEach(d),this.h()},h(){$(t,"class",i="material-symbols-outlined icon "+(a[0]?"valid":"invalid")+" svelte-10qe9vy"),$(e,"class","popup svelte-10qe9vy")},m(r,n){A(r,e,n),p(e,t),p(t,l)},p(r,n){n&1&&s!==(s=r[0]?"thumb_up":"thumb_down")&&L(l,s),n&1&&i!==(i="material-symbols-outlined icon "+(r[0]?"valid":"invalid")+" svelte-10qe9vy")&&$(t,"class",i)},d(r){r&&d(e)}}}function Te(a){let e,t,s,l,i,r="check",n,o,u,f,c=a[1]&&ae(a);return{c(){e=_("link"),t=U(),s=_("div"),l=_("div"),i=_("span"),i.textContent=r,n=U(),c&&c.c(),o=F(),this.h()},l(h){const V=$e("svelte-1ruei9s",document.head);e=g(V,"LINK",{rel:!0,href:!0}),V.forEach(d),t=G(h),s=g(h,"DIV",{});var te=b(s);l=g(te,"DIV",{});var se=b(l);i=g(se,"SPAN",{class:!0,"data-svelte-h":!0}),be(i)!=="svelte-5141f9"&&(i.textContent=r),se.forEach(d),te.forEach(d),n=G(h),c&&c.l(h),o=F(),this.h()},h(){$(e,"rel","stylesheet"),$(e,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"),$(i,"class","material-symbols-outlined icon svelte-10qe9vy")},m(h,V){p(document.head,e),A(h,t,V),A(h,s,V),p(s,l),p(l,i),A(h,n,V),c&&c.m(h,V),A(h,o,V),u||(f=ce(i,"click",a[2]),u=!0)},p(h,[V]){h[1]?c?c.p(h,V):(c=ae(h),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},i:k,o:k,d(h){h&&(d(t),d(s),d(n),d(o)),d(e),c&&c.d(h),u=!1,f()}}}const Ce=2e3;function ke(a,e,t){let{board:s=null}=e,l=!1,i=!1;const r=()=>{t(0,l=s.isValidBoard()),t(1,i=!0),setTimeout(()=>{t(1,i=!1)},Ce)};return a.$$set=n=>{"board"in n&&t(3,s=n.board)},[l,i,r,s]}class De extends z{constructor(e){super(),B(this,e,ke,Te,x,{board:3})}}var T,N,w,m,me,W,Z,ve,pe,_e,ee;class Ne{constructor(e){E(this,m);E(this,T,[]);E(this,N,0);E(this,w,0);y(this,N,e),y(this,w,e),y(this,T,[...Array(e)].map((t,s)=>[...Array(e)].map((l,i)=>new Q(s,i,2)))),S(this,m,me).call(this)}isValidBoard(){let e=!0,t=!0;for(let s of v(this,T))e&&(e=S(this,m,ee).call(this,s));for(let s=0;s<v(this,w);s++)t&&(t=S(this,m,ee).call(this,v(this,T).map(l=>l[s])));return e&&t}get rows(){return v(this,N)}get cols(){return v(this,w)}getCell(e,t){return e>=0&&e<v(this,N)&&t>=0&&t<v(this,w)?v(this,T)[e][t]:null}}T=new WeakMap,N=new WeakMap,w=new WeakMap,m=new WeakSet,me=function(){let e=new Set,t=S(this,m,Z).call(this,8,15);for(;e.size<t;){let s=S(this,m,W).call(this,v(this,w)),l=S(this,m,W).call(this,v(this,w));v(this,T)[s][l].value=S(this,m,Z).call(this,0,2),v(this,T)[s][l].status=Q.STATUS_FIX,e.add(`${s}-${l}`)}},W=function(e){return Math.floor(Math.random()*e*100/100)},Z=function(e,t){return Math.floor(Math.random()*(t-e)+e)},ve=function(e){for(let t=0;t<=e.length/2;t++)if(e[t].value!=2&&e[t].value==e[t+1].value&&e[t+1].value==e[t+2].value)return!0;return!1},pe=function(e){return e.reduce((t,s)=>t+=s.value,0)==v(this,w)/2},_e=function(e){return e.filter(t=>t.value!=2).length},ee=function(e){return S(this,m,ve).call(this,e)==!0?!1:S(this,m,_e).call(this,e)==v(this,w)?S(this,m,pe).call(this,e):!0};function re(a,e,t){const s=a.slice();return s[1]=e[t],s[3]=t,s}function ie(a,e,t){const s=a.slice();return s[1]=e[t],s[5]=t,s}function oe(a){let e,t;return e=new ye({props:{cell:a[0].getCell(a[3],a[5])}}),{c(){R(e.$$.fragment)},l(s){X(e.$$.fragment,s)},m(s,l){H(e,s,l),t=!0},p:k,i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function ue(a){let e,t,s=j({length:a[0].cols}),l=[];for(let r=0;r<s.length;r+=1)l[r]=oe(ie(a,s,r));const i=r=>C(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=F()},l(r){for(let n=0;n<l.length;n+=1)l[n].l(r);e=F()},m(r,n){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,n);A(r,e,n),t=!0},p(r,n){if(n&1){s=j({length:r[0].cols});let o;for(o=0;o<s.length;o+=1){const u=ie(r,s,o);l[o]?(l[o].p(u,n),I(l[o],1)):(l[o]=oe(u),l[o].c(),I(l[o],1),l[o].m(e.parentNode,e))}for(he(),o=s.length;o<l.length;o+=1)i(o);fe()}},i(r){if(!t){for(let n=0;n<s.length;n+=1)I(l[n]);t=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)C(l[n]);t=!1},d(r){r&&d(e),de(l,r)}}}function Me(a){let e,t,s,l,i,r=j({length:a[0].rows}),n=[];for(let u=0;u<r.length;u+=1)n[u]=ue(re(a,r,u));const o=u=>C(n[u],1,1,()=>{n[u]=null});return l=new De({props:{board:a[0]}}),{c(){e=_("div"),t=_("div");for(let u=0;u<n.length;u+=1)n[u].c();s=U(),R(l.$$.fragment),this.h()},l(u){e=g(u,"DIV",{class:!0});var f=b(e);t=g(f,"DIV",{class:!0});var c=b(t);for(let h=0;h<n.length;h+=1)n[h].l(c);c.forEach(d),s=G(f),X(l.$$.fragment,f),f.forEach(d),this.h()},h(){$(t,"class","board board-size svelte-ou55pk"),$(e,"class","wrapper svelte-ou55pk")},m(u,f){A(u,e,f),p(e,t);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(t,null);p(e,s),H(l,e,null),i=!0},p(u,[f]){if(f&1){r=j({length:u[0].rows});let c;for(c=0;c<r.length;c+=1){const h=re(u,r,c);n[c]?(n[c].p(h,f),I(n[c],1)):(n[c]=ue(h),n[c].c(),I(n[c],1),n[c].m(t,null))}for(he(),c=r.length;c<n.length;c+=1)o(c);fe()}},i(u){if(!i){for(let f=0;f<r.length;f+=1)I(n[f]);I(l.$$.fragment,u),i=!0}},o(u){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)C(n[f]);C(l.$$.fragment,u),i=!1},d(u){u&&d(e),de(n,u),O(l)}}}function qe(a){return[new Ne(6)]}class Pe extends z{constructor(e){super(),B(this,e,qe,Me,x,{})}}function xe(a){let e,t,s,l,i;return t=new Ve({}),l=new Pe({}),{c(){e=_("div"),R(t.$$.fragment),s=U(),R(l.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);X(t.$$.fragment,n),s=G(n),X(l.$$.fragment,n),n.forEach(d),this.h()},h(){$(e,"class","wrapper animate__animated animate__rotateIn svelte-15vqoyf")},m(r,n){A(r,e,n),H(t,e,null),p(e,s),H(l,e,null),i=!0},p:k,i(r){i||(I(t.$$.fragment,r),I(l.$$.fragment,r),i=!0)},o(r){C(t.$$.fragment,r),C(l.$$.fragment,r),i=!1},d(r){r&&d(e),O(t),O(l)}}}class Ge extends z{constructor(e){super(),B(this,e,null,xe,x,{})}}export{Ge as component};
