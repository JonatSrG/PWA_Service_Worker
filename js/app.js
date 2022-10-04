
//instlando service worked

if (navigator.serviceWorker) {
    console.log('Podemos usar el service worked');

    navigator.serviceWorker.register('/sw.js');
}