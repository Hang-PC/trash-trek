(function () {
    emailjs.init({
        publicKey: 'C9wNpNzGX85GCb-e3',
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 5000,
        },
    });
    var templateParams = {
        name: 'James',
        notes: 'Check this out!',
    };

    emailjs.send('service_0v8dj2q', 'template_troyvm8', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
})();