const e=location.pathname.split("/").slice(0,-1).join("/"),l=[e+"/_app/immutable/entry/app.M6dRO_fx.js",e+"/_app/immutable/nodes/0.1dt-e8Xi.js",e+"/_app/immutable/nodes/1.B44gOKs9.js",e+"/_app/immutable/nodes/2.DzNnJywW.js",e+"/_app/immutable/nodes/3.CBCPO0Vx.js",e+"/_app/immutable/assets/3.Dv6RgTh7.css",e+"/_app/immutable/nodes/4.XqQJUGJ2.js",e+"/_app/immutable/assets/4.BigdT2IP.css",e+"/_app/immutable/chunks/entry._dfJhdJo.js",e+"/_app/immutable/chunks/index.DjUm7gUX.js",e+"/_app/immutable/chunks/scheduler.C8vMPaWB.js",e+"/_app/immutable/assets/store.B-gXXBrj.css",e+"/_app/immutable/chunks/store.DziIrkMm.js",e+"/_app/immutable/entry/start.CBVzN6Sx.js"],o=[e+"/Playground.ttf",e+"/bitfinder.png",e+"/favicon.png",e+"/manifest.json",e+"/test.html"],m="1719248713528",i=`cache-${m}`,p=[...l,...o];self.addEventListener("install",s=>{async function a(){await(await caches.open(i)).addAll(p)}s.waitUntil(a())});self.addEventListener("activate",s=>{async function a(){for(const t of await caches.keys())t!==i&&await caches.delete(t)}s.waitUntil(a())});self.addEventListener("fetch",s=>{if(s.request.method!=="GET")return;async function a(){const t=new URL(s.request.url),n=await caches.open(i);if(p.includes(t.pathname))return n.match(t.pathname);try{const c=await fetch(s.request);return c.status===200&&n.put(s.request,c.clone()),c}catch{return n.match(s.request)}}s.respondWith(a())});