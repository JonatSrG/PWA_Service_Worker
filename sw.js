//Aqui el service worked
self.addEventListener('fetch', event => {

    if( event.request.url.includes('main.jpg')){

        //event.respondWith( fetch('img/main-patas-arriba-jpg'));
        let respuesta = fetch('img/main-patas-arriba.jpg');

        event.respondWith( respuesta );

    }


});