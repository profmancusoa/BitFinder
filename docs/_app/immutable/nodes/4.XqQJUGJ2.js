import{s as F,e as u,b as A,t as C,d as _,f as D,q as E,j as V,h as b,i as x,r as p,k as R,l as e,v as G,m as z,n as w,p as B}from"../chunks/scheduler.C8vMPaWB.js";import{S as H,i as J}from"../chunks/index.DjUm7gUX.js";import{g as K}from"../chunks/entry._dfJhdJo.js";import{s as L,a as M}from"../chunks/store.DziIrkMm.js";function O(l){let t,n,v="Bit Finder",m,s,a,j="Complimenti hai risolto la sfida in",S,i,f,k,g,I,P,r,q="Nuova Partita",N,y;return{c(){t=u("div"),n=u("span"),n.textContent=v,m=A(),s=u("div"),a=u("span"),a.textContent=j,S=A(),i=u("span"),f=C(l[0]),k=C(" minuti e "),g=C(l[1]),I=C(" secondi"),P=A(),r=u("div"),r.textContent=q,this.h()},l(c){t=_(c,"DIV",{class:!0});var o=D(t);n=_(o,"SPAN",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-rmzkva"&&(n.textContent=v),m=V(o),s=_(o,"DIV",{class:!0});var d=D(s);a=_(d,"SPAN",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-16jhndg"&&(a.textContent=j),S=V(d),i=_(d,"SPAN",{class:!0});var h=D(i);f=b(h,l[0]),k=b(h," minuti e "),g=b(h,l[1]),I=b(h," secondi"),h.forEach(x),P=V(d),r=_(d,"DIV",{class:!0,"data-svelte-h":!0}),E(r)!=="svelte-uhvg9z"&&(r.textContent=q),d.forEach(x),o.forEach(x),this.h()},h(){p(n,"class","title svelte-e9u9ub"),p(a,"class","congrats svelte-e9u9ub"),p(i,"class","congrats svelte-e9u9ub"),p(r,"class","restart svelte-e9u9ub"),p(s,"class","score animate__animated animate__rotateIn animate__delay-1s animate__faster svelte-e9u9ub"),p(t,"class","wrapper animate__animated animate__lightSpeedInRight svelte-e9u9ub")},m(c,o){R(c,t,o),e(t,n),e(t,m),e(t,s),e(s,a),e(s,S),e(s,i),e(i,f),e(i,k),e(i,g),e(i,I),e(s,P),e(s,r),N||(y=G(r,"click",l[2]),N=!0)},p(c,[o]){o&1&&z(f,c[0]),o&2&&z(g,c[1])},i:w,o:w,d(c){c&&x(t),N=!1,y()}}}function Q(l,t,n){let v,m;return B(l,L,a=>n(0,v=a)),B(l,M,a=>n(1,m=a)),[v,m,()=>K("/game")]}class Y extends H{constructor(t){super(),J(this,t,Q,O,F,{})}}export{Y as component};