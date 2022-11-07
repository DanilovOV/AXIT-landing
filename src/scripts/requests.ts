import axios from 'axios';



export default function requests() {

    const url = 'https://628e4808a339dfef87ab4f4b.mockapi.io/'

    // Отправка формы в блоке trial
    document.querySelector('.js-trial-submit').addEventListener('click', trialFormSubmit)
    function trialFormSubmit(e: Event) {
        e.preventDefault()

        axios.post(url + 'AXIT-trial-requests', {
            name:     (<HTMLInputElement>document.getElementById('trial-text')).value,
            email:    (<HTMLInputElement>document.getElementById('trial-email')).value,
            password: (<HTMLInputElement>document.getElementById('trial-password')).value,
        })
        .then(function (response) {
            alert(response)
        })
        .catch(function (error) {
            alert(error);
        });
    }



    // Отправка формы в блоке Contact
    document.querySelector('.js-send-message').addEventListener('click', contactFormSubmit)
    function contactFormSubmit(e:Event) {
        e.preventDefault()

        axios.post(url + 'AXIT-messages', {
            name:    (<HTMLInputElement>document.getElementById('contact-name')).value,
            email:   (<HTMLInputElement>document.getElementById('contact-email')).value,
            subject: (<HTMLInputElement>document.getElementById('contact-subject')).value,
            message: (<HTMLInputElement>document.getElementById('contact-message')).value
        })
        .then(function (response) {
            alert(response)
        })
        .catch(function (error) {
            alert(error);
        });
    }
}