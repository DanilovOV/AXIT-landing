export default function requests() {
    
const url = 'https://628e4808a339dfef87ab4f4b.mockapi.io/'

// Отправка формы в блоке trial
document.querySelector('.js-trial-submit').onclick = trialFormSubmit;
function trialFormSubmit(e) {
    e.preventDefault();
    let userData = {
        name: document.getElementById('trial-text').value,
        email: document.getElementById('trial-email').value,
        password: document.getElementById('trial-password').value,
    };

    fetch(url + 'AXIT-trial-requests', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) throw new Error(response)
    })
    .then(() => alert('Success!'))
    .catch(() => alert('Error'))
}



// Отправка данных формы в блоке Contact
document.querySelector('.js-send-message').onclick = contactFormSubmit;
function contactFormSubmit(e) {
    e.preventDefault();
    let userData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value
    };

    fetch(url + 'AXIT-messages', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) throw new Error(response)
    })
    .then(() => alert('Success!'))
    .catch(() => alert('Error'))
}
}