//Aqui el service worked
/**self.addEventListener('fetch', event => {

    if( event.request.url.includes('main.jpg')){

        //event.respondWith( fetch('img/main-patas-arriba-jpg'));
        let respuesta = fetch('img/main-patas-arriba.jpg');

        event.respondWith( respuesta );

    }


});

**/
self.addEventListener('fetch', event =>{
    
    event.respondWith(
        fetch( event.request )
            .then( respuesta => {
                
                if (respuesta.ok) {
                    return respuesta;
                }else{
                    return fetch('img/main.jpg');
                }

            })

    );
});