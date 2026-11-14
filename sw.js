// পুরোনো খবরপাতার সার্ভিস ওয়ার্কার সরানোর জন্য: নিজেকে ও সব ক্যাশ মুছে পাতা রিলোড করে (তখন রিডাইরেক্ট দেখাবে)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
})()));
