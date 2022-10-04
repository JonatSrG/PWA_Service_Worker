//Aqui el service worked
self.addEventListener('fetch', event => {

    //    console.log(event.request.url.includes('.jpg'));
    //    if ( event.request.url.includes('.jpg') ){
    //    console.log(event.request.url);

    //    let fotoReq = fetch('img/main.jpg');
    //    let fotoReq = fetch( event.request.url);

    //    let fotoReq = fetch( event.request );

    //    event.respondWith( fotoReq );

    if (event.request.url.includes('styles.css')) {
        
        let respuesta = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        event.respondWith( respuesta );
    }

});