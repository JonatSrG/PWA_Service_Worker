//Aqui el service worked
self.addEventListener('fetch', event => {

    if (event.request.url.incluides('styles.css')) {
        event.respondWith(null);
    } else {
        //console.log( event );
        event.respondWith(fetch(event.request));

    }

});