const CACHE='voxel-cache-v2';
const ASSETS=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const r=e.request;
  if(r.destination==='script'||r.url.includes('unpkg.com')){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r)))
  }else{
    e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(ca=>ca.put(r,cp));return res})))
  }
});