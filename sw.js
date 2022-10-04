//Aqui el service worked
self.addEventListener('fetch', event => {

    //console.log(event.request.url.includes('.jpg'));
    if ( event.request.url.includes('.jpg') ){
        console.log(event.request.url);

        //let fotoReq = fetch('img/main.jpg');
        //let fotoReq = fetch( event.request.url);

        let fotoReq = fetch( event.request );

        event.respondWith( fotoReq );
    }

});