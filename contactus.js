const submitBtn = document.querySelector('.support-submit-button');
const name = document.querySelector('#sName');
const email = document.querySelector('#sEmail');
const message = document.querySelector('#sMessage');

submitBtn.addEventListener('click', () => {
    if (sName != null) { // sign up page
        if (name.value.length < 3) {
            showAlert('Name must be 3 letters long');
        } else if (!email.value.length) {
            showAlert('Enter your valid email');
        } else if (message.length < 50) {
            showAlert('Message should be at least be 50 letters long');
        } else {
            // submit form
            sendData('#contact-id', {
                name: name.value,
                email: email.value,
                message: message.value,
            })
        }
    } 
})