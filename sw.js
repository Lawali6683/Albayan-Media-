self.addEventListener('push', function(event) {
  let data = { title: 'Albayan Media', body: 'Sabon sako ya zo!' };
  if (event.data) {
    data.body = event.data.text();
  }

  const options = {
    body: data.body,
    icon: 'https://i.imgur.com/D96clzc.jpeg', 
    badge: 'https://i.imgur.com/D96clzc.jpeg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    }
  };

  event.waitUntil(
    self.registration.showNotification('Albayan Media', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://albayanmedia.page.div') 
  );
});