
emailjs.init({
    publicKey: 'ze060Z36cKwuIRo-J',
    // Do not allow headless browsers
    blockHeadless: true,
    limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 5s
        throttle: 5000,
    },
});

function sendMail(e) {
    e.preventDefault();
    console.log("send mail called")
    const fullname = document.getElementById('user-name')
    const email = document.getElementById('user-email')
    const service = document.getElementById('service')
    const message = document.getElementById('message')
    const templateParams = {
        from_name: fullname.value,
        email_id: email.value,
        service_name: service.value,
        message: message.value
    };

    emailjs.send('service_yuwc4vm', 'template_iddnt8c', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                title: "Sent!",
                text: "Message sent successfully!",
                icon: "success"
            }).then(() => {
                location.assign('/contact.html')
            })
        },
        (error) => {
            console.log('FAILED...', error);
            Swal.fire({
                title: "Error",
                text: "Something went wrong!",
                icon: "error"
            })
        },
    );
}